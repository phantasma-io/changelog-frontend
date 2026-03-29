import { notFound, redirect } from "next/navigation";
import { ChangelogPageShell } from "@/components/ChangelogPageShell";
import { getChangelogPage, getChangelogPagination } from "@/lib/changelog";

type PageParams = {
  page: string;
};

export async function generateStaticParams() {
  const { totalPages } = await getChangelogPagination();

  return Array.from({ length: Math.max(totalPages - 1, 0) }, (_, index) => ({
    page: String(index + 2),
  }));
}

export default async function PaginatedPage({
  params,
}: {
  params: Promise<PageParams>;
}) {
  const { page: rawPage } = await params;
  const pageNumber = Number.parseInt(rawPage, 10);

  if (!Number.isFinite(pageNumber) || pageNumber < 1) {
    notFound();
  }

  // Canonicalize page 1 to the homepage so pagination URLs stay stable.
  if (pageNumber === 1) {
    redirect("/");
  }

  const page = await getChangelogPage(pageNumber);

  if (!page) {
    notFound();
  }

  return <ChangelogPageShell page={page} />;
}

