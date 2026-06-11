---
title: Mainnet RPC and validator update deployed
publishedAt: 2026-04-22T02:46:54Z
tags:
  - mainnet
  - rpc
  - validators
summary: Mainnet is running updated RPC and validator builds with cleaner RPC behavior, stronger validator networking, and the latest mainnet resolution set.
---

- Mainnet is now running updated RPC and validator builds.
- RPC now handles expected client-side failures more cleanly: missing token lookups, invalid `null` JSON-RPC parameters, aborted requests, disconnected clients, and block-hash transaction-count misses no longer escalate into noisy server-style errors.
- RPC event decoding was also refreshed so nested Token calls and special-resolution activity are reconstructed more reliably for mainnet consumers.
- The mainnet resolution set in this rollout also burned the 700,000 SOUL that Sergio minted during his last attack on the chain in January 2024.
- Validator networking is more stable under failed ION reconnect cycles, and validator logs now make peer connection failures easier to diagnose.

Future VM fixes are also installed in the validator build for later smart contract activation.

- `Runtime.MintToken` same-token context handling was corrected for future contract-driven NFT mint flows.
- Duplicated-series `Runtime.MintToken` mints now derive stable NFT ids more reliably.
- Smart contract deployment and execution are still inactive on mainnet for now.
