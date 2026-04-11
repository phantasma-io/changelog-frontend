---
title: Devnet reset to testnet snapshot and chain fixes deployed
publishedAt: 2026-04-04T12:00:00Z
tags:
  - devnet
  - validators
summary: Devnet was reset to a testnet snapshot and updated with token semantics, VM replay, storage validation, and validator stability fixes.
notice: "Devnet was reset to a testnet snapshot as part of this update."
---

- Devnet was reset to a testnet snapshot for the next round of chain and contract testing.
- Token semantics versioning was added so new token lifecycle behavior can be enabled cleanly without changing historical replay rules.
- VM and token replay were hardened: unsigned block #0 `CreateToken` replay was restored, malformed token metadata and royalty sources are rejected, and wide BigInteger guard forms are clamped to the expected 256-bit payload.
- State reads are stricter for token, governance, VM, market, organization, persisted series metadata, and Raft storage data.
- Validator and node stability fixes include safer rollback after app-state write failures, a corrected Raft vote freshness comparison, safer `/dev/log` iteration, signal-safe shutdown, and a guard against HTTP shutdown crashes after failed initialization.
