import { notFound } from "next/navigation";
import { ChangelogPageShell } from "@/components/ChangelogPageShell";
import { getChangelogPage } from "@/lib/changelog";

export default async function HomePage() {
  const page = await getChangelogPage(1);

  if (!page) {
    notFound();
  }

  return <ChangelogPageShell page={page} />;
}

