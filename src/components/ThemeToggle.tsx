"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { useSyncExternalStore } from "react";

const subscribe = (onStoreChange: () => void) => {
  const timeoutId = window.setTimeout(onStoreChange, 0);

  return () => window.clearTimeout(timeoutId);
};
const getClientSnapshot = () => true;
const getServerSnapshot = () => false;

export function ThemeToggle() {
  // Keep SSR and first hydration render aligned, but do not leave the frame visually empty.
  const mounted = useSyncExternalStore(subscribe, getClientSnapshot, getServerSnapshot);
  const { theme, resolvedTheme, setTheme } = useTheme();
  const activeTheme = mounted ? (resolvedTheme ?? theme) : "dark";
  const Icon = activeTheme === "dark" ? Sun : Moon;

  return (
    <button
      type="button"
      onClick={() => {
        if (mounted) {
          setTheme(activeTheme === "dark" ? "light" : "dark");
        }
      }}
      className="glass-panel inline-flex h-11 w-11 items-center justify-center rounded-xl text-foreground transition hover:border-[rgb(var(--brand-cyan)/0.35)] hover:text-[rgb(var(--brand-cyan))] disabled:pointer-events-none disabled:opacity-60"
      aria-label="Toggle theme"
      aria-disabled={!mounted}
      disabled={!mounted}
    >
      <Icon className="h-4 w-4" />
    </button>
  );
}
