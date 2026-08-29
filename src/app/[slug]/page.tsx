import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ChangelogPageShell } from "@/components/ChangelogPageShell";
import { getAllChangelogEntries } from "@/lib/changelog";

type EntryParams = {
  slug: string;
};

// Every entry URL is known at build time, so an unknown slug must 404 instead of
// being rendered on demand. This also keeps the route from shadowing anything:
// only real entry slugs resolve here.
export const dynamicParams = false;

async function findEntry(slug: string) {
  const entries = await getAllChangelogEntries();

  return entries.find((entry) => entry.slug === slug);
}

export async function generateStaticParams() {
  const entries = await getAllChangelogEntries();

  return entries.map((entry) => ({ slug: entry.slug }));
}

// A single entry carries its own title and description so a link shared on social
// platforms previews as that article instead of the generic changelog card.
export async function generateMetadata({
  params,
}: {
  params: Promise<EntryParams>;
}): Promise<Metadata> {
  const { slug } = await params;
  const entry = await findEntry(slug);

  if (!entry) {
    return {};
  }

  const description = entry.summary?.trim() || undefined;

  return {
    title: `${entry.title} | Phantasma Network Changelog`,
    description,
    openGraph: {
      title: entry.title,
      description,
      type: "article",
      publishedTime: entry.publishedAt,
    },
    twitter: {
      card: "summary",
      title: entry.title,
      description,
    },
  };
}

// The permanent address of one changelog entry. The paginated pages move an entry
// from page to page as newer ones are published, so a page-scoped link decays;
// this route does not.
export default async function EntryPage({
  params,
}: {
  params: Promise<EntryParams>;
}) {
  const { slug } = await params;
  const entry = await findEntry(slug);

  if (!entry) {
    notFound();
  }

  // Reuse the list shell with a single-entry page: the pagination control renders
  // nothing at one page, so this is the same frame the entry has in the list.
  return (
    <ChangelogPageShell
      page={{
        entries: [entry],
        currentPage: 1,
        totalPages: 1,
        totalEntries: 1,
        pageSize: 1,
      }}
    />
  );
}
