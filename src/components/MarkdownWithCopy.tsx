"use client";

import { Check, Copy } from "lucide-react";
import React, { useState } from "react";
import ReactMarkdown, { type Components } from "react-markdown";
import remarkGfm from "remark-gfm";

function extractText(node: React.ReactNode): string {
  if (typeof node === "string" || typeof node === "number") {
    return String(node);
  }

  if (Array.isArray(node)) {
    return node.map(extractText).join("");
  }

  if (React.isValidElement<{ children?: React.ReactNode }>(node)) {
    return extractText(node.props.children);
  }

  return "";
}

async function copyText(text: string): Promise<boolean> {
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

function CopyablePre({ children }: React.ComponentProps<"pre">) {
  const [copied, setCopied] = useState(false);
  const code = extractText(children).trimEnd();

  return (
    <div className="copyable-code-block relative">
      <button
        type="button"
        className="copyable-code-button absolute right-3 top-3 z-10 inline-flex h-8 items-center gap-1.5 rounded-lg border border-border/70 bg-background/80 px-2.5 text-[11px] font-semibold uppercase tracking-[0.16em] text-muted-foreground shadow-sm backdrop-blur transition hover:border-[rgb(var(--brand-cyan)/0.4)] hover:text-[rgb(var(--brand-cyan))]"
        onClick={async () => {
          if (await copyText(code)) {
            setCopied(true);
            window.setTimeout(() => setCopied(false), 1400);
          }
        }}
        aria-label={copied ? "Copied command" : "Copy command"}
      >
        {copied ? <Check className="h-3.5 w-3.5" /> : <Copy className="h-3.5 w-3.5" />}
        <span>{copied ? "Copied" : "Copy"}</span>
      </button>
      <pre className="pr-24">{children}</pre>
    </div>
  );
}

const components: Components = {
  pre: CopyablePre,
};

export function MarkdownWithCopy({ content }: { content: string }) {
  return (
    <ReactMarkdown remarkPlugins={[remarkGfm]} components={components}>
      {content}
    </ReactMarkdown>
  );
}
