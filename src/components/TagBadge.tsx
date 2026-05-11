import { getTagPalette } from "@/lib/tags";
import type { CSSProperties } from "react";

export function TagBadge({ tag }: { tag: string }) {
  const palette = getTagPalette(tag);

  return (
    <span
      className="tag-badge inline-flex h-8 items-center rounded-full border px-3 text-[11px] leading-none font-semibold tracking-[0.18em] uppercase"
      style={{
        "--tag-rgb": palette.rgb,
        "--tag-light-text": palette.lightText,
        "--tag-dark-text": palette.darkText,
      } as CSSProperties}
    >
      {palette.label}
    </span>
  );
}
