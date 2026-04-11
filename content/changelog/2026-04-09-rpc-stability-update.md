---
title: RPC nodes updated for stability
publishedAt: 2026-04-09T23:00:00Z
tags:
  - mainnet
  - rpc
summary: RPC nodes were updated to make NFT, token, and transaction responses more stable under live read load.
---

- LMDB read scopes are now kept short around the local database read and are no longer held across awaited network calls.
- The stability fix covers account NFT reads, single NFT reads, NFT batch reads, token NFT pagination, and transaction lookup with recent-transaction fallback.
- Extended token responses now temporarily tolerate the historical `GFLP` `tokenSchemas` row with trailing bytes, so clients can still receive schema data while the historical row remains in storage.
- No client API change is required for this update.
