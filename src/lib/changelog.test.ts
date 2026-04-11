import {
  CHANGELOG_PAGE_SIZE,
  getAllChangelogEntries,
  getChangelogPage,
  getPageHref,
  normalizeChangelogTags,
} from "./changelog";

describe("changelog content loader", () => {
  it("sorts entries by publishedAt descending", async () => {
    // Sort only by canonical timestamps so file names and later title edits never affect order.
    const entries = await getAllChangelogEntries();
    const timestamps = entries.map((entry) => Date.parse(entry.publishedAt));

    expect(entries.length).toBeGreaterThanOrEqual(4);
    expect(timestamps).toEqual([...timestamps].sort((left, right) => right - left));
    expect(entries.some((entry) => entry.slug === "2026-03-27-devnet-contract-lifecycle-support")).toBe(true);
  });

  it("normalizes tags and prioritizes network tags", async () => {
    // Network tags are displayed first even if frontmatter mixes them with topic tags.
    expect(normalizeChangelogTags(["frontend", "Devnet", "validators"], "fixture.md")).toEqual([
      "devnet",
      "frontend",
      "validators",
    ]);
    expect(normalizeChangelogTags(["testnet", "mainnet", "devnet", "rpc"], "fixture.md")).toEqual([
      "mainnet",
      "devnet",
      "testnet",
      "rpc",
    ]);

    const entries = await getAllChangelogEntries();
    const devnetEntry = entries.find((entry) => entry.slug === "2026-03-27-devnet-contract-lifecycle-support");
    const toolingEntry = entries.find((entry) => entry.slug === "2026-04-09-pha-decode-020-released");

    expect(devnetEntry?.tags).toEqual(["devnet", "validators"]);
    expect(toolingEntry?.tags).toEqual(["tooling"]);
  });

  it("exposes optional notice text from frontmatter", async () => {
    // Optional callout text should be available separately from the markdown body.
    const entries = await getAllChangelogEntries();
    const rollbackEntry = entries.find((entry) => entry.slug === "2026-03-27-devnet-contract-lifecycle-support");
    const vmEntry = entries.find((entry) => entry.slug === "2026-03-17-devnet-vm-parity-restoration");

    expect(rollbackEntry?.notice).toBe("Devnet network has been rolled back to the March 16 state at block #6502683.");
    expect(vmEntry?.notice).toBeUndefined();
  });

  it("paginates content without relying on filename order", async () => {
    // Pagination should return the same newest entry as the sorted collection on page 1.
    const entries = await getAllChangelogEntries();
    const page = await getChangelogPage(1, CHANGELOG_PAGE_SIZE);

    expect(page).not.toBeNull();
    expect(page?.entries).toHaveLength(Math.min(CHANGELOG_PAGE_SIZE, entries.length));
    expect(page?.entries[0]?.slug).toBe(entries[0]?.slug);
    expect(page?.totalPages).toBe(Math.ceil(entries.length / CHANGELOG_PAGE_SIZE));
  });

  it("returns null for page numbers outside the collection", async () => {
    const entries = await getAllChangelogEntries();
    const totalPages = Math.ceil(entries.length / CHANGELOG_PAGE_SIZE);

    // Out-of-range pages should not fabricate empty page objects.
    const page = await getChangelogPage(totalPages + 1, CHANGELOG_PAGE_SIZE);

    expect(page).toBeNull();
  });

  it("builds canonical page hrefs", () => {
    // Page 1 stays canonical at `/`, while later pages use the paginated route.
    expect(getPageHref(1)).toBe("/");
    expect(getPageHref(2)).toBe("/page/2");
  });
});
