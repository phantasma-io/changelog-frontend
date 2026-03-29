type TagKey = "mainnet" | "testnet" | "devnet" | "localnet" | "custom";

type TagPalette = {
  label: string;
  text: string;
  background: string;
  border: string;
};

const baseTagColors: Record<TagKey, string> = {
  // `mainnet` is not explicit in PoltergeistLite; the wallet falls back to AccentPrimary.
  mainnet: "#6baee6",
  testnet: "#f39c4a",
  devnet: "#b175f6",
  localnet: "#4caf6d",
  custom: "#c84a4a",
};

function normalizeHex(hex: string): string {
  const value = hex.trim().replace("#", "");
  if (value.length === 3) {
    return value
      .split("")
      .map((char) => char + char)
      .join("");
  }
  return value;
}

function hexToRgb(hex: string) {
  const normalized = normalizeHex(hex);
  const numeric = Number.parseInt(normalized, 16);

  return {
    r: (numeric >> 16) & 255,
    g: (numeric >> 8) & 255,
    b: numeric & 255,
  };
}

function mixColor(baseHex: string, targetHex: string, ratio: number): string {
  const base = hexToRgb(baseHex);
  const target = hexToRgb(targetHex);
  const channel = (baseValue: number, targetValue: number) =>
    Math.round(baseValue * (1 - ratio) + targetValue * ratio);

  return `rgb(${channel(base.r, target.r)}, ${channel(base.g, target.g)}, ${channel(base.b, target.b)})`;
}

export function getTagPalette(tag: string): TagPalette {
  const normalized = tag.trim().toLowerCase() as TagKey;
  const baseColor = baseTagColors[normalized] ?? baseTagColors.mainnet;

  return {
    label: normalized.toUpperCase(),
    text: "#ffffff",
    background: mixColor(baseColor, "#000000", 0.1),
    border: mixColor(baseColor, "#ffffff", 0.2),
  };
}

