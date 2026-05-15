---
title: Devnet and testnet explorer update deployed
publishedAt: 2026-05-15T03:53:06Z
tags:
  - devnet
  - testnet
  - explorer
summary: Devnet and testnet explorers now show rejected transaction candidates on transaction pages, making failed submissions easier to inspect.
---

- Devnet and testnet explorers are now running the updated explorer build.
- Transaction pages can now show a rejected transaction candidate when a searched hash was captured by RPC but is not present in the canonical block transaction list.
- The rejected-candidate view includes status, block and timestamp context, result/debug details, fee and gas data, payload/script data, and raw API/RPC responses when available.
- This makes failed submissions easier to debug on devnet and testnet without presenting them as canonical chain transactions.

---

[Devnet Explorer](https://devnet-explorer.phantasma.info/) | [Testnet Explorer](https://testnet-explorer.phantasma.info/)
