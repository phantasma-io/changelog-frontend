import Link from "next/link";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { getPageHref } from "@/lib/changelog";

type PaginationProps = {
  currentPage: number;
  totalPages: number;
};

type PageItem = number | "ellipsis";

function buildPageItems(currentPage: number, totalPages: number): PageItem[] {
  if (totalPages <= 7) {
    return Array.from({ length: totalPages }, (_, index) => index + 1);
  }

  const items: PageItem[] = [1];
  const start = Math.max(2, currentPage - 1);
  const end = Math.min(totalPages - 1, currentPage + 1);

  if (start > 2) {
    items.push("ellipsis");
  }

  for (let page = start; page <= end; page += 1) {
    items.push(page);
  }

  if (end < totalPages - 1) {
    items.push("ellipsis");
  }

  items.push(totalPages);
  return items;
}

export function Pagination({ currentPage, totalPages }: PaginationProps) {
  if (totalPages <= 1) {
    return null;
  }

  const items = buildPageItems(currentPage, totalPages);

  return (
    <nav className="flex flex-wrap items-center justify-between gap-3 pt-1" aria-label="Pagination">
      <Link
        href={getPageHref(Math.max(currentPage - 1, 1))}
        aria-disabled={currentPage === 1}
        className="glass-panel inline-flex h-11 items-center gap-2 rounded-xl px-4 text-sm font-medium transition hover:border-[rgb(var(--brand-cyan)/0.35)] hover:text-[rgb(var(--brand-cyan))] aria-disabled:pointer-events-none aria-disabled:opacity-45"
      >
        <ChevronLeft className="h-4 w-4" />
        Previous
      </Link>

      <div className="glass-panel flex rounded-2xl p-1.5 text-sm">
        {items.map((item, index) =>
          item === "ellipsis" ? (
            <span
              key={`ellipsis-${index}`}
              className="inline-flex h-9 min-w-9 items-center justify-center px-2 text-xs font-semibold uppercase tracking-[0.22em] text-muted-foreground"
            >
              ...
            </span>
          ) : (
            <Link
              key={item}
              href={getPageHref(item)}
              aria-current={item === currentPage ? "page" : undefined}
              className="inline-flex h-9 min-w-9 items-center justify-center rounded-xl border border-transparent px-3 text-xs font-semibold uppercase tracking-[0.22em] text-muted-foreground transition hover:text-foreground aria-[current=page]:border-border/70 aria-[current=page]:bg-transparent aria-[current=page]:text-[rgb(var(--brand-red))]"
            >
              {item}
            </Link>
          ),
        )}
      </div>

      <Link
        href={getPageHref(Math.min(currentPage + 1, totalPages))}
        aria-disabled={currentPage === totalPages}
        className="glass-panel inline-flex h-11 items-center gap-2 rounded-xl px-4 text-sm font-medium transition hover:border-[rgb(var(--brand-cyan)/0.35)] hover:text-[rgb(var(--brand-cyan))] aria-disabled:pointer-events-none aria-disabled:opacity-45"
      >
        Next
        <ChevronRight className="h-4 w-4" />
      </Link>
    </nav>
  );
}
