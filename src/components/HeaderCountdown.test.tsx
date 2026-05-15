import { act, render, screen } from "@testing-library/react";
import { afterEach, describe, expect, it, vi } from "vitest";

import { HeaderCountdown } from "./HeaderCountdown";

describe("HeaderCountdown", () => {
  afterEach(() => {
    vi.restoreAllMocks();
    vi.useRealTimers();
  });

  it("renders segmented UTC time remaining for the mainnet activation target", async () => {
    // The countdown must calculate against the fixed UTC target without exposing the exact date in the header.
    vi.useFakeTimers();
    vi.setSystemTime(new Date("2026-05-19T20:30:15Z"));

    render(<HeaderCountdown />);
    act(() => {
      vi.advanceTimersByTime(1);
    });

    expect(screen.getByLabelText("0 days remaining")).toBeInTheDocument();
    expect(screen.getByLabelText("03 hours remaining")).toBeInTheDocument();
    expect(screen.getByLabelText("29 minutes remaining")).toBeInTheDocument();
    expect(screen.getByLabelText("45 seconds remaining")).toBeInTheDocument();
    expect(screen.queryByText("T-minus")).not.toBeInTheDocument();
    expect(screen.queryByText("Mainnet")).not.toBeInTheDocument();
    expect(screen.queryByText("Countdown")).not.toBeInTheDocument();
    expect(screen.queryByText("2026-05-20 00:00 UTC")).not.toBeInTheDocument();
    expect(screen.queryByText(/smart contracts/i)).not.toBeInTheDocument();
  });

  it("switches to a fresh live state immediately after the target", async () => {
    // The completion state replaces the four quiet tiles with a compact status effect.
    vi.useFakeTimers();
    vi.setSystemTime(new Date("2026-05-19T23:59:59Z"));

    render(<HeaderCountdown />);
    act(() => {
      vi.advanceTimersByTime(1_000);
    });

    expect(screen.getByText("Live")).toBeInTheDocument();
    expect(screen.getByLabelText("Mainnet activation countdown")).toHaveAttribute("data-live-fresh", "true");
    expect(screen.queryByLabelText("00 seconds remaining")).not.toBeInTheDocument();
  });

  it("keeps live visible without the fresh transition after the live window", async () => {
    // The public header should remain in a stable LIVE state until a later deployment changes it.
    vi.useFakeTimers();
    vi.setSystemTime(new Date("2026-05-20T00:00:09Z"));

    render(<HeaderCountdown />);
    act(() => {
      vi.advanceTimersByTime(1);
    });

    expect(screen.getByText("Live")).toBeInTheDocument();
    expect(screen.getByLabelText("Mainnet activation countdown")).toHaveAttribute("data-live-fresh", "false");
    expect(screen.queryByLabelText("00 seconds remaining")).not.toBeInTheDocument();
  });
});
