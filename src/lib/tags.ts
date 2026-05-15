type TagPalette = {
  label: string;
  rgb: string;
  lightText: string;
  darkText: string;
};

const baseTagColors = {
  mainnet: "#6f95b9",
  devnet: "#8d78b3",
  testnet: "#bd824d",
  explorer: "#6f8fab",
  validators: "#5e9b78",
  rpc: "#4f9da0",
  sdk: "#7f9fc9",
  tooling: "#7b8b78",
  frontend: "#8794b8",
  wallet: "#6f9b80",
  docs: "#9aa4b2",
  localnet: "#6f9b80",
  custom: "#b06767",
} as const;

type TagKey = keyof typeof baseTagColors;

const fallbackTagColor = "#8a97a8";

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

function rgbTriplet(hex: string): string {
  const { r, g, b } = hexToRgb(hex);
  return `${r} ${g} ${b}`;
}

export function getTagPalette(tag: string): TagPalette {
  const normalized = tag.trim().toLowerCase();
  const baseColor = Object.prototype.hasOwnProperty.call(baseTagColors, normalized)
    ? baseTagColors[normalized as TagKey]
    : fallbackTagColor;

  return {
    label: normalized.toUpperCase(),
    rgb: rgbTriplet(baseColor),
    lightText: mixColor(baseColor, "#000000", 0.16),
    darkText: mixColor(baseColor, "#ffffff", 0.5),
  };
}
