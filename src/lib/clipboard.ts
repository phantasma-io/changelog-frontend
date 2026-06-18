// Copy text to the clipboard, returning whether it succeeded.
//
// Prefers the async Clipboard API and falls back to a hidden textarea +
// document.execCommand("copy") when that API is unavailable or blocked (older
// browsers, non-secure contexts, or restrictive permission settings). Shared by
// the code-block copy buttons and the entry permalink control so the copy
// behavior stays identical in both places.
export async function copyText(text: string): Promise<boolean> {
  if (navigator.clipboard?.writeText) {
    try {
      await navigator.clipboard.writeText(text);
      return true;
    } catch {
      // Fall back to the legacy path when browser permissions block Clipboard API.
    }
  }

  const textArea = document.createElement("textarea");
  textArea.value = text;
  textArea.setAttribute("readonly", "");
  textArea.style.position = "fixed";
  textArea.style.left = "-9999px";
  document.body.append(textArea);
  textArea.select();

  try {
    return document.execCommand("copy");
  } finally {
    textArea.remove();
  }
}
