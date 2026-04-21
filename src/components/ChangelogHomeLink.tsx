"use client";

import Link from "next/link";

export function ChangelogHomeLink() {
  return (
    <Link
      href="/"
      onClick={(event) => {
        if (window.location.pathname === "/" && window.location.hash) {
          event.preventDefault();
          window.location.assign("/");
        }
      }}
      className="inline-block rounded-lg transition hover:text-[rgb(var(--brand-cyan))] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[rgb(var(--brand-cyan))]"
    >
      Changelog
    </Link>
  );
}
