# Phantasma Network Changelog

Markdown-driven release notes frontend for Phantasma Network updates.

## Development

```bash
npm install
npm run dev
```

## Add a changelog entry

Create one Markdown file under `content/changelog/`:

```md
---
title: Deterministic NFT minting and contract lifecycle support
publishedAt: 2026-03-27T12:00:00Z
tags:
  - devnet
summary: Deterministic NFT ids, contract lifecycle restoration, and public RPC hardening.
---

- Added deterministic Phantasma-compatible NFT minting...
```

Recommended file naming:
- `YYYY-MM-DD-short-slug.md`

Sorting rules:
- The app sorts by `publishedAt` descending.
- The filename is only a stable slug and a human-friendly Git artifact.

Pagination:
- The homepage shows the newest entries first.
- Additional pages are available under `/page/<number>`.

