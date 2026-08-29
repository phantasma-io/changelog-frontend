"use client";

import { Check, LinkIcon } from "lucide-react";
import React, { useState } from "react";

import { copyText } from "@/lib/clipboard";

// Permalink control for a changelog entry.
//
// The link target is the entry's own page (`/<slug>`), which is the only address
// that stays correct: the paginated list moves an entry from page to page as
// newer ones are published, so a page-scoped hash link decays. It stays a real
// anchor, so semantics, keyboard focus, and modified clicks (open in a new tab,
// "copy link address") keep working. A plain primary click copies that absolute
// URL instead of navigating, because users expect a permalink icon to "copy the
// link". The entry card keeps its hash id, so links shared before this route
// existed still resolve on the list pages.
export function PermalinkButton({ slug, title }: { slug: string; title: string }) {
  const [copied, setCopied] = useState(false);

  async function handleClick(event: React.MouseEvent<HTMLAnchorElement>) {
    // Leave modified / non-primary clicks to the browser (new tab, etc.) so the
    // native link affordances are preserved.
    if (event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) {
      return;
    }

    event.preventDefault();

    // Absolute, permanent URL of this entry.
    const url = `${window.location.origin}/${slug}`;

    if (await copyText(url)) {
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1400);
    }
  }

  return (
    <a
      href={`/${slug}`}
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
