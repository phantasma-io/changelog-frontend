import type { ChangelogPage } from "@/lib/changelog";
import { ChangelogEntryCard } from "@/components/ChangelogEntryCard";
import { Pagination } from "@/components/Pagination";
import { ThemeToggle } from "@/components/ThemeToggle";

export function ChangelogPageShell({ page }: { page: ChangelogPage }) {
  return (
    <div className="min-h-screen">
      <div className="mx-auto flex w-full max-w-4xl flex-col gap-6 px-4 py-8 sm:px-6 sm:py-10">
        <header className="glass-panel relative overflow-hidden rounded-[2rem] p-6 sm:p-8">
          <div className="absolute -right-10 top-0 h-28 w-28 rounded-full bg-[rgb(var(--brand-violet)/0.14)] blur-3xl" />

          <div className="relative flex flex-wrap items-start justify-between gap-6">
            <div className="min-w-0">
              <div className="text-xs font-semibold uppercase tracking-[0.3em] text-foreground/85 dark:text-white">
                Phantasma Network
              </div>

              <h1 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">Changelog</h1>
            </div>

            <div className="flex flex-wrap items-center gap-3">
              {page.totalPages > 1 ? (
                <div className="inline-flex items-center gap-3 rounded-xl border border-border/70 bg-card/80 px-4 py-2 text-xs shadow-sm backdrop-blur">
                  <span className="font-semibold uppercase tracking-[0.22em] text-muted-foreground">
                    Page
                  </span>
                  <span className="font-mono text-[rgb(var(--brand-red))]">
                    {page.currentPage} / {page.totalPages}
                  </span>
                </div>
              ) : null}
              <ThemeToggle />
            </div>
          </div>
        </header>

        <section className="space-y-5">
          {page.entries.map((entry) => (
            <ChangelogEntryCard key={entry.slug} entry={entry} />
          ))}
        </section>

        <Pagination currentPage={page.currentPage} totalPages={page.totalPages} />
      </div>
    </div>
  );
}
