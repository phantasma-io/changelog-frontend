import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { AlertTriangle, CalendarDays, LinkIcon } from "lucide-react";
import type { ChangelogEntry } from "@/lib/changelog";
import { TagBadge } from "@/components/TagBadge";

export function ChangelogEntryCard({
  entry,
}: {
  entry: ChangelogEntry;
}) {
  return (
    <article id={entry.slug} className="glass-panel relative overflow-hidden rounded-[2rem]">
      <div className="flex flex-col gap-5 p-6 sm:p-8">
        <div className="flex flex-wrap items-start justify-between gap-4">
          <div className="flex flex-wrap items-center gap-2.5 text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">
            <span className="inline-flex h-8 items-center gap-2 rounded-full border border-border/70 bg-transparent px-3 text-[11px] leading-none text-foreground/85 dark:text-white">
              <CalendarDays className="h-3.5 w-3.5" />
              {entry.dateLabel}
            </span>
            {entry.tags.map((tag) => (
              <TagBadge key={tag} tag={tag} />
            ))}
          </div>

          <a
            href={`#${entry.slug}`}
            className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-border/70 bg-card/80 text-muted-foreground shadow-sm backdrop-blur transition hover:border-[rgb(var(--brand-cyan)/0.4)] hover:text-[rgb(var(--brand-cyan))]"
            aria-label={`Permalink to ${entry.title}`}
            title="Permalink"
          >
            <LinkIcon className="h-3.5 w-3.5" />
          </a>
        </div>

        <div className="min-w-0">
          <h2 className="text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
            {entry.title}
          </h2>

          {entry.summary ? (
            <p className="mt-3 max-w-3xl text-sm leading-7 text-muted-foreground sm:text-base">
              {entry.summary}
            </p>
          ) : null}
        </div>

        {entry.notice ? (
          <div
            className="relative overflow-hidden rounded-[1.5rem] border px-4 py-4 shadow-[0_24px_70px_-42px_rgba(243,156,74,0.85)] backdrop-blur sm:px-5"
            style={{
              borderColor: "rgba(243, 156, 74, 0.34)",
              backgroundColor: "rgba(243, 156, 74, 0.12)",
            }}
          >
            <div className="absolute inset-y-0 left-0 w-1.5 bg-[rgb(243,156,74)]" />
            <div className="pl-3">
              <div className="inline-flex items-center gap-2 rounded-full border border-[rgba(243,156,74,0.34)] bg-[rgba(243,156,74,0.16)] px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-[rgb(255,224,189)]">
                <AlertTriangle className="h-3.5 w-3.5" />
                Important
              </div>
              <p className="mt-3 whitespace-pre-line text-[15px] font-medium leading-7 text-foreground sm:text-base">
                {entry.notice}
              </p>
            </div>
          </div>
        ) : null}

        <div className="h-px bg-border/70" />

        <div className="changelog-markdown">
          <ReactMarkdown remarkPlugins={[remarkGfm]}>{entry.content}</ReactMarkdown>
        </div>
      </div>
    </article>
  );
}
