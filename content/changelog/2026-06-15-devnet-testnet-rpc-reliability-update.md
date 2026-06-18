---
title: Devnet and testnet RPC reliability update deployed
publishedAt: 2026-06-15T22:31:57Z
tags:
  - devnet
  - testnet
  - rpc
summary: Devnet and testnet RPC are running a newer build with reliability improvements and stronger null handling across token-event and transaction reconstruction.
---

- Devnet and testnet RPC are now running a newer build focused on reliability.
- Token-event and transaction reconstruction handles edge and null values more robustly, so responses stay clean even on unusual inputs.
- Legacy storage structures are default-initialized, removing a class of latent null-handling defects.
- The build now ships under a stricter zero-warning policy for cleaner, more maintainable releases.
