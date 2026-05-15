"use client";

import { useEffect, useMemo, useState } from "react";

const TARGET_TIMESTAMP_MS = Date.parse("2026-05-20T00:00:00Z");
const SECOND_MS = 1_000;
const MINUTE_SECONDS = 60;
const HOUR_SECONDS = 60 * MINUTE_SECONDS;
const DAY_SECONDS = 24 * HOUR_SECONDS;
const FRESH_LIVE_MS = 8 * SECOND_MS;

const padUnit = (value: number) => value.toString().padStart(2, "0");

function getCountdownState(nowMs: number | null) {
  if (nowMs === null) {
    return {
      days: "--",
      hours: "--",
      minutes: "--",
      seconds: "--",
      isLive: false,
      isFreshLive: false,
    };
  }

  const remainingMs = TARGET_TIMESTAMP_MS - nowMs;
  const isLive = remainingMs <= 0;
  const totalSeconds = Math.max(0, Math.ceil(remainingMs / SECOND_MS));
  const days = Math.floor(totalSeconds / DAY_SECONDS);
  const hours = Math.floor((totalSeconds % DAY_SECONDS) / HOUR_SECONDS);
  const minutes = Math.floor((totalSeconds % HOUR_SECONDS) / MINUTE_SECONDS);
  const seconds = totalSeconds % MINUTE_SECONDS;

  return {
    days: days.toString(),
    hours: padUnit(hours),
    minutes: padUnit(minutes),
    seconds: padUnit(seconds),
    isLive,
    isFreshLive: isLive && nowMs - TARGET_TIMESTAMP_MS <= FRESH_LIVE_MS,
  };
}

export function HeaderCountdown() {
  const [nowMs, setNowMs] = useState<number | null>(null);

  useEffect(() => {
    const updateClock = () => setNowMs(Date.now());

    // The server and first client render intentionally show placeholders so
    // the live ticking clock cannot produce a hydration mismatch.
    updateClock();
    const timerId = window.setInterval(updateClock, SECOND_MS);

    return () => window.clearInterval(timerId);
  }, []);

  const countdown = useMemo(() => getCountdownState(nowMs), [nowMs]);
  const units = [
    { ariaLabel: "days", label: "Days", value: countdown.days },
    { ariaLabel: "hours", label: "Hrs", value: countdown.hours },
    { ariaLabel: "minutes", label: "Min", value: countdown.minutes },
    { ariaLabel: "seconds", label: "Sec", value: countdown.seconds },
  ];

  return (
    <section
      aria-label="Mainnet activation countdown"
      className="countdown-panel"
      data-phase={countdown.isLive ? "live" : "counting"}
      data-live-fresh={countdown.isFreshLive ? "true" : "false"}
    >
      {countdown.isLive ? (
        <div className="countdown-live" aria-live="polite">
          Live
        </div>
      ) : (
        <div className="countdown-grid">
          {units.map((unit) => (
            <span key={unit.label} className="countdown-unit">
              <span aria-label={`${unit.value} ${unit.ariaLabel} remaining`} className="countdown-value">
                {unit.value}
              </span>
              <span className="countdown-label">{unit.label}</span>
            </span>
          ))}
        </div>
      )}
    </section>
  );
}
