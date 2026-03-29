import { CHANGELOG_PAGE_SIZE, getAllChangelogEntries, getChangelogPage, getPageHref } from "./changelog";

describe("changelog content loader", () => {
  it("sorts entries by publishedAt descending", async () => {
    // The newest entry must come first even if the file slug/title changes later.
    const entries = await getAllChangelogEntries();

    expect(entries).toHaveLength(2);
    expect(entries.map((entry) => entry.slug)).toEqual([
      "2026-03-27-devnet-contract-lifecycle-support",
      "2026-03-17-devnet-vm-parity-restoration",
    ]);
  });

  it("preserves normalized tags from frontmatter", async () => {
    // Frontmatter tags should stay normalized to lowercase strings in the loaded entries.
    const entries = await getAllChangelogEntries();

    expect(entries[0]?.tags).toEqual(["devnet"]);
    expect(entries[1]?.tags).toEqual(["devnet"]);
  });

  it("paginates content without relying on filename order", async () => {
    // Pagination should return the same newest entry as the sorted collection on page 1.
    const page = await getChangelogPage(1, 1);
    const entries = await getAllChangelogEntries();

    expect(page).not.toBeNull();
    expect(page?.entries).toHaveLength(1);
    expect(page?.entries[0]?.slug).toBe(entries[0]?.slug);
    expect(page?.totalPages).toBe(2);
  });

  it("returns null for page numbers outside the collection", async () => {
    // Out-of-range pages should not fabricate empty page objects.
    const page = await getChangelogPage(3, CHANGELOG_PAGE_SIZE);

    expect(page).toBeNull();
  });

  it("builds canonical page hrefs", () => {
    // Page 1 stays canonical at `/`, while later pages use the paginated route.
    expect(getPageHref(1)).toBe("/");
    expect(getPageHref(2)).toBe("/page/2");
  });
});
