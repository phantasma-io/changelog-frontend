import fs from "node:fs/promises";
import path from "node:path";
import matter from "gray-matter";
import { cache } from "react";

export const CHANGELOG_PAGE_SIZE = 5;

const contentDirectory = path.join(process.cwd(), "content", "changelog");
const networkTagRank = new Map<string, number>([
  ["mainnet", 0],
  ["devnet", 1],
  ["testnet", 2],
]);

type ChangelogFrontmatter = {
  title?: string;
  publishedAt?: string;
  tags?: string[];
  summary?: string;
  notice?: string;
};

export type ChangelogEntry = {
  slug: string;
  title: string;
  publishedAt: string;
  dateLabel: string;
  tags: string[];
  summary?: string;
  notice?: string;
  content: string;
};

export type ChangelogPage = {
  entries: ChangelogEntry[];
  currentPage: number;
  totalPages: number;
  totalEntries: number;
  pageSize: number;
};

function assertString(value: unknown, fieldName: string, fileName: string): string {
  if (typeof value !== "string" || !value.trim()) {
    throw new Error(`Missing or invalid '${fieldName}' in ${fileName}`);
  }

  return value.trim();
}

function normalizePublishedAt(value: unknown, fileName: string): string {
  // YAML frontmatter often deserializes timestamps into Date objects, so both forms are valid input.
  if (value instanceof Date && !Number.isNaN(value.getTime())) {
    return value.toISOString();
  }

  return assertString(value, "publishedAt", fileName);
}

export function normalizeChangelogTags(value: unknown, fileName: string): string[] {
  if (value === undefined) {
    return [];
  }

  if (!Array.isArray(value)) {
    throw new Error(`Invalid 'tags' value in ${fileName}: expected an array of strings`);
  }

  return value
    .map((tag, index) => {
      if (typeof tag !== "string" || !tag.trim()) {
        throw new Error(`Invalid 'tags[${index}]' value in ${fileName}`);
      }
      return {
        index,
        tag: tag.trim().toLowerCase(),
      };
    })
    .sort((left, right) => {
      const leftRank = networkTagRank.get(left.tag);
      const rightRank = networkTagRank.get(right.tag);

      if (leftRank !== undefined || rightRank !== undefined) {
        return (leftRank ?? Number.POSITIVE_INFINITY) - (rightRank ?? Number.POSITIVE_INFINITY);
      }

      return left.index - right.index;
    })
    .map(({ tag }) => tag);
}

function formatPublishedDate(isoDate: string): string {
  return new Intl.DateTimeFormat("en", {
    year: "numeric",
    month: "long",
    day: "numeric",
    timeZone: "UTC",
  }).format(new Date(isoDate));
}

function parseEntryFile(fileName: string, fileContents: string): ChangelogEntry {
  const { data, content } = matter(fileContents);
  const frontmatter = data as ChangelogFrontmatter;
  const title = assertString(frontmatter.title, "title", fileName);
  const publishedAt = normalizePublishedAt(frontmatter.publishedAt, fileName);
  const timestamp = Date.parse(publishedAt);

  if (Number.isNaN(timestamp)) {
    throw new Error(`Invalid 'publishedAt' value in ${fileName}`);
  }

  return {
    slug: fileName.replace(/\.md$/u, ""),
    title,
    publishedAt,
    dateLabel: formatPublishedDate(publishedAt),
    tags: normalizeChangelogTags(frontmatter.tags, fileName),
    summary:
      typeof frontmatter.summary === "string" && frontmatter.summary.trim()
        ? frontmatter.summary.trim()
        : undefined,
    notice:
      typeof frontmatter.notice === "string" && frontmatter.notice.trim()
        ? frontmatter.notice.trim()
        : undefined,
    content: content.trim(),
  };
}

export const getAllChangelogEntries = cache(async (): Promise<ChangelogEntry[]> => {
  const fileNames = (await fs.readdir(contentDirectory)).filter((fileName) => fileName.endsWith(".md"));

  const entries = await Promise.all(
    fileNames.map(async (fileName) => {
      const fullPath = path.join(contentDirectory, fileName);
      const fileContents = await fs.readFile(fullPath, "utf8");
      return parseEntryFile(fileName, fileContents);
    }),
  );

  // Sort by the canonical frontmatter timestamp so filename changes never affect publish order.
  return entries.sort((left, right) => Date.parse(right.publishedAt) - Date.parse(left.publishedAt));
});

export async function getChangelogPagination(pageSize = CHANGELOG_PAGE_SIZE) {
  const entries = await getAllChangelogEntries();
  return {
    totalEntries: entries.length,
    totalPages: Math.max(1, Math.ceil(entries.length / pageSize)),
    pageSize,
  };
}

export async function getChangelogPage(
  page: number,
  pageSize = CHANGELOG_PAGE_SIZE,
): Promise<ChangelogPage | null> {
  if (!Number.isInteger(page) || page < 1) {
    return null;
  }

  const entries = await getAllChangelogEntries();
  const totalPages = Math.max(1, Math.ceil(entries.length / pageSize));

  if (page > totalPages) {
    return null;
  }

  const startIndex = (page - 1) * pageSize;

  return {
    entries: entries.slice(startIndex, startIndex + pageSize),
    currentPage: page,
    totalPages,
    totalEntries: entries.length,
    pageSize,
  };
}

export function getPageHref(page: number): string {
  return page <= 1 ? "/" : `/page/${page}`;
}
