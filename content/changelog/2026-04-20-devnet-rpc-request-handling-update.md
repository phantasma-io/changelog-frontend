---
title: Devnet Phantasma RPC update deployed
publishedAt: 2026-04-21T01:17:26Z
tags:
  - devnet
  - rpc
summary: Devnet is running an updated Phantasma RPC build with cleaner client-error handling, safer request cancellation, and corrected token and block lookup behavior.
---

- Expected client errors and normal compatibility misses no longer fill RPC warning logs.
- `getToken`, `getTokenSeries`, and `getTokenSeriesById` now return a clean client error when the token symbol does not exist.
- JSON-RPC now returns `Invalid params` when `null` is passed into a required parameter.
- If the client disconnects or cancels the request, Phantasma RPC now stops that request more cleanly without fatal write errors.
- `GetBlockTransactionCountByHash` now keeps the usual unknown-block response instead of turning that case into a server error.
