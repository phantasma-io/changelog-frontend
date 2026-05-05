---
title: Devnet and testnet validators updated for NFT ownership reads
publishedAt: 2026-05-05T22:45:00Z
tags:
  - devnet
  - testnet
  - validators
summary: Devnet and testnet are running a validator update with NFT ownership-by-series reads, VM metadata transport fixes, and tighter leader failover behavior.
---

- Devnet and testnet validators are now running the updated build.
- Smart contracts can now call `Runtime.GetOwnershipsBySeries` to read NFT ownership ids for a specific token series.
- VM token and series metadata transport was fixed for contract calls that depend on token metadata.
- Validator failover handling was tightened for unavailable or stalled leaders.
