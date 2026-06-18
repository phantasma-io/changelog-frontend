"use client";

import { Check, LinkIcon } from "lucide-react";
import React, { useState } from "react";

import { copyText } from "@/lib/clipboard";

// Permalink control for a changelog entry.
//
// Hybrid behavior (the common convention): it stays a real anchor to the entry's
// hash, so semantics, keyboard focus, and modified clicks (open in a new tab,
// "copy link address") keep working. A plain primary click additionally copies
// the entry's ABSOLUTE URL to the clipboard and reflects it in the address bar,
// because users expect a permalink icon to "copy the link", not only jump to it.
export function PermalinkButton({ slug, title }: { slug: string; title: string }) {
  const [copied, setCopied] = useState(false);

  async function handleClick(event: React.MouseEvent<HTMLAnchorElement>) {
    // Leave modified / non-primary clicks to the browser (new tab, etc.) so the
    // native link affordances are preserved.
    if (event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) {
      return;
    }

    event.preventDefault();

    // Absolute URL to this entry on the current (possibly paginated) page.
    const url = `${window.location.origin}${window.location.pathname}#${slug}`;

    // Reflect the permalink in the address bar without the scroll jump a default
    // hash navigation would cause.
    window.history.replaceState(null, "", `#${slug}`);

    if (await copyText(url)) {
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1400);
    }
  }

  return (
    <a
      href={`#${slug}`}
      onClick={handleClick}
      className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-border/70 bg-card/80 text-muted-foreground shadow-sm backdrop-blur transition hover:border-[rgb(var(--brand-cyan)/0.4)] hover:text-[rgb(var(--brand-cyan))]"
      aria-label={copied ? `Permalink to ${title} copied` : `Copy permalink to ${title}`}
      title={copied ? "Copied" : "Copy permalink"}
    >
      {copied ? <Check className="h-3.5 w-3.5" /> : <LinkIcon className="h-3.5 w-3.5" />}
      {/* Persistent live region: announces the copy to screen readers without
          relying on the title/tooltip, which assistive tech may not surface. */}
      <span className="sr-only" aria-live="polite">
        {copied ? "Link copied" : ""}
      </span>
    </a>
  );
}
