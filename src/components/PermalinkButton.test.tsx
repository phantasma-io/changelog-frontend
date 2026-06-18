import { fireEvent, render, screen } from "@testing-library/react";

import { PermalinkButton } from "./PermalinkButton";

describe("PermalinkButton", () => {
  // It must remain a real anchor to the entry hash so native link behavior
  // (keyboard, modified clicks, "copy link address") keeps working.
  it("renders an anchor pointing at the entry hash", () => {
    render(<PermalinkButton slug="2026-06-18-example" title="Example" />);

    const link = screen.getByRole("link", { name: /copy permalink to example/i });
    expect(link).toHaveAttribute("href", "#2026-06-18-example");
  });

  // A plain primary click copies the entry's absolute URL and surfaces feedback.
  it("copies the absolute permalink URL and shows copied feedback on click", async () => {
    const writeText = vi.fn().mockResolvedValue(undefined);
    Object.defineProperty(navigator, "clipboard", { value: { writeText }, configurable: true });

    render(<PermalinkButton slug="2026-06-18-example" title="Example" />);
    fireEvent.click(screen.getByRole("link", { name: /copy permalink to example/i }));

    // The copied value is the page's absolute URL (origin + path + hash), read
    // from window.location so the test is not coupled to the jsdom base URL.
    expect(await screen.findByTitle("Copied")).toBeInTheDocument();
    expect(writeText).toHaveBeenCalledWith(`${window.location.origin}/#2026-06-18-example`);
  });

  // Modified clicks (e.g. Ctrl/Cmd, open-in-new-tab) must fall through to the
  // browser's native link handling instead of hijacking them to copy.
  it("leaves modified clicks to the browser without copying", () => {
    const writeText = vi.fn().mockResolvedValue(undefined);
    Object.defineProperty(navigator, "clipboard", { value: { writeText }, configurable: true });

    render(<PermalinkButton slug="2026-06-18-example" title="Example" />);
    fireEvent.click(screen.getByRole("link", { name: /copy permalink to example/i }), { ctrlKey: true });

    expect(writeText).not.toHaveBeenCalled();
  });
});
