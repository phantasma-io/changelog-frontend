"use client";

import { Check, Copy } from "lucide-react";
import React, { useState } from "react";
import ReactMarkdown, { type Components } from "react-markdown";
import remarkGfm from "remark-gfm";

import { copyText } from "@/lib/clipboard";

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

function extractCodeClassName(node: React.ReactNode): string | undefined {
  if (Array.isArray(node)) {
    return node.map(extractCodeClassName).find(Boolean);
  }

  if (React.isValidElement<{ className?: unknown }>(node) && typeof node.props.className === "string") {
    return node.props.className;
  }

  return undefined;
}

function CopyableCodeBlock({ children, code }: { children: React.ReactNode; code: string }) {
  const [copied, setCopied] = useState(false);

  return (
    <div className="copyable-code-block relative">
      <button
        type="button"
        className="copyable-code-button absolute right-3 top-1/2 z-10 inline-flex h-8 -translate-y-1/2 items-center gap-1.5 rounded-lg border border-border/70 bg-background/80 px-2.5 text-[11px] font-semibold uppercase tracking-[0.16em] text-muted-foreground shadow-sm backdrop-blur transition hover:border-[rgb(var(--brand-cyan)/0.4)] hover:text-[rgb(var(--brand-cyan))]"
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

function CopyablePre({ children }: React.ComponentProps<"pre">) {
  const code = extractText(children).trimEnd();
  const codeClassName = extractCodeClassName(children);
  const lines = code.split(/\r?\n/);

  if (lines.length <= 1) {
    return <CopyableCodeBlock code={code}>{children}</CopyableCodeBlock>;
  }

  return (
    <div className="copyable-code-stack space-y-2">
      {lines.map((line, index) => (
        <CopyableCodeBlock code={line} key={`${index}-${line}`}>
          <code className={codeClassName}>{line}</code>
        </CopyableCodeBlock>
      ))}
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
