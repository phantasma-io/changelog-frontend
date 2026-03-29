import { getTagPalette } from "@/lib/tags";

export function TagBadge({ tag }: { tag: string }) {
  const palette = getTagPalette(tag);

  return (
    <span
      className="inline-flex h-8 items-center rounded-full border px-3 text-[11px] leading-none font-semibold tracking-[0.18em] uppercase shadow-[0_10px_30px_-22px_rgba(0,0,0,0.6)]"
      style={{
        backgroundColor: palette.background,
        borderColor: palette.border,
        color: palette.text,
      }}
    >
      {palette.label}
    </span>
  );
}
