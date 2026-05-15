---
title: Devnet and testnet validator and RPC update deployed
publishedAt: 2026-05-15T02:54:14Z
tags:
  - devnet
  - testnet
  - rpc
  - validators
summary: Devnet and testnet now run updated validator and RPC builds with unlimited fungible token repair handling and cleaner token event reconstruction.
---

- Devnet and testnet are now running updated validator and RPC builds.
- Unlimited fungible token rows are migrated into the big-fungible storage format, keeping balance, stake, supply, and burned-counter data on the representation expected by current token semantics.
- New token semantics reject malformed small-fungible states before they can move through token creation, transfer, mint, burn, stake, or unstake paths.
- BigInteger `+` parsing now matches the shared VM/runtime fixtures used by the validator and SDK test suites.
- RPC token-event reconstruction now treats token repair migrations as storage representation changes, not fake token movement.
- `TokenInfo` updates no longer appear as fresh `TokenCreate` events in reconstructed RPC event data.
- Testnet also receives the validator hardening already active on devnet, including stricter VM/runtime input handling and more reliable validator status responses.
