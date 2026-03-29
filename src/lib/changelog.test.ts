import { CHANGELOG_PAGE_SIZE, getAllChangelogEntries, getChangelogPage, getPageHref } from "./changelog";

describe("changelog content loader", () => {
  it("sorts entries by publishedAt descending", async () => {
    const entries = await getAllChangelogEntries();

    expect(entries).toHaveLength(2);
    expect(entries.map((entry) => entry.slug)).toEqual([
      "2026-03-27-devnet-deterministic-nft-minting",
      "2026-03-17-devnet-vm-parity-restoration",
    ]);
  });

  it("preserves normalized tags from frontmatter", async () => {
    const entries = await getAllChangelogEntries();

    expect(entries[0]?.tags).toEqual(["devnet"]);
    expect(entries[1]?.tags).toEqual(["devnet"]);
  });

  it("paginates content without relying on filename order", async () => {
    const page = await getChangelogPage(1, 1);

    expect(page).not.toBeNull();
    expect(page?.entries).toHaveLength(1);
    expect(page?.entries[0]?.slug).toBe("2026-03-27-devnet-deterministic-nft-minting");
    expect(page?.totalPages).toBe(2);
  });

  it("returns null for page numbers outside the collection", async () => {
    const page = await getChangelogPage(3, CHANGELOG_PAGE_SIZE);

    expect(page).toBeNull();
  });

  it("builds canonical page hrefs", () => {
    expect(getPageHref(1)).toBe("/");
    expect(getPageHref(2)).toBe("/page/2");
  });
});

