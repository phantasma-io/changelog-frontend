---
title: Mainnet RPC is up to date with devnet and testnet
publishedAt: 2026-08-21T18:17:11Z
tags:
  - mainnet
  - rpc
summary: The RPC build that devnet and testnet have run since July now serves mainnet, bringing lightweight account reads, the structured response format on the v2 routes, governance calls decoded by name, exact fee estimation, and much faster responses across many kinds of request, heavy blocks included.
---

Everything announced for devnet and testnet over July and August now serves mainnet.

- `getAccountInfo` returns an account's name and staking data without dragging balances and full NFT identifier lists along with it, and `getAccountInfos` reads up to 100 addresses in one call from a single state snapshot. `getAccount`, `getAccounts` and `getTokenData` are deprecated, with their replacements named at the call site.
- `/rpc/v2` and `/api/v2` serve the same methods as v1 and answer with real JSON values instead of packed strings. The v1 routes are untouched, so deployed clients keep working exactly as they do today.
- Special resolution calls are decoded by name with their arguments typed per method, including the calls they carry, and extended event data is decoded by event kind.
- `getGasConfig` publishes the live fee parameters and `estimateTransaction` prices a transaction against the current chain state, which is what makes the new gas model exactly predictable for wallets and tools.
- Many kinds of request come back faster. Owned token series are served from a maintained index, series pages are sought by key prefix, series identifiers resolve through an index, and block metadata is read without copying the block first.
- Heavy blocks are served without being assembled in memory first, because large answers are written to the connection as they are produced. Cursor pagination enforces its page size range, and the deprecated unpaginated NFT identifier lists are capped.
- RPC load metrics are exposed on a loopback endpoint for node operators.

---

[Mainnet API reference](https://pharpc1.phantasma.info/swagger/index.html) | [Mainnet Explorer](https://explorer.phantasma.info/)
