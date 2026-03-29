"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { useSyncExternalStore } from "react";

const subscribe = () => () => {};
const getClientSnapshot = () => true;
const getServerSnapshot = () => false;

export function ThemeToggle() {
  // Keep the first server and client render aligned so the icon does not hydrate differently.
  const mounted = useSyncExternalStore(subscribe, getClientSnapshot, getServerSnapshot);
  const { theme, resolvedTheme, setTheme } = useTheme();
  const activeTheme = mounted ? (resolvedTheme ?? theme) : null;

  if (!activeTheme) {
    return (
      <button
        type="button"
        className="glass-panel inline-flex h-11 w-11 items-center justify-center rounded-xl text-foreground"
        aria-label="Toggle theme"
        aria-hidden="true"
        disabled
      >
        <span className="h-4 w-4" />
      </button>
    );
  }

  return (
    <button
      type="button"
      onClick={() => setTheme(activeTheme === "dark" ? "light" : "dark")}
      className="glass-panel inline-flex h-11 w-11 items-center justify-center rounded-xl text-foreground transition hover:border-[rgb(var(--brand-cyan)/0.35)] hover:text-[rgb(var(--brand-cyan))]"
      aria-label="Toggle theme"
    >
      {activeTheme === "dark" ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
    </button>
  );
}
