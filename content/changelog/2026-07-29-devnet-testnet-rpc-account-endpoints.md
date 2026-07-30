---
title: Devnet and testnet RPC add lightweight account endpoints
publishedAt: 2026-07-29T19:56:33Z
tags:
  - devnet
  - testnet
  - rpc
summary: The latest RPC build is live on devnet and testnet with new single and batch account endpoints, deprecations for the heavy account calls, faster NFT and series reads, and bounded pagination.
---

- Devnet and testnet RPC are running the latest build.
- A new `getAccountInfo` returns just the account name and staking information for an address. It is the lightweight replacement for `getAccount`, which packed balances and full NFT identifier lists into the same response.
- A new `getAccountInfos` returns that same record for a batch of up to 100 addresses in one call, read from a single state snapshot and returned in request order — one round trip instead of one per address.
- `getAccount` and `getAccounts` are now deprecated. Use `getAccountInfo` for name and staking data, together with the cursor-paginated `getAccountFungibleTokens` and `getAccountNFTs` for balances and NFTs.
- `getTokenData` is deprecated in favor of `getNFT`, which returns the same result and additionally supports the extended flag.
- NFT and series reads take shorter paths: owned token series are served from a maintained owner index, series pages are sought by key prefix instead of being filtered after the fact, and series identifiers resolve through an index instead of a scan.
- Pagination is bounded. Cursor-paginated endpoints enforce the accepted `pageSize` range, and the deprecated unpaginated NFT identifier lists are capped at 10,000 entries per token while the true count is still reported.
- The published API reference now carries a description and a deprecation marker for each endpoint, so the replacement for a deprecated call is visible directly in the documentation.
- Node operators can read RPC load metrics from a loopback Prometheus endpoint.

---

[Devnet RPC reference](https://devnet.phantasma.info/swagger/index.html) | [Testnet RPC reference](https://testnet.phantasma.info/swagger/index.html)
