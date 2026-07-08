---
title: Smart contract custom events now keep their real names on devnet and testnet
publishedAt: 2026-07-01T20:25:39Z
tags:
  - devnet
  - testnet
  - rpc
  - tooling
summary: Custom events emitted by smart contracts now carry their real, developer-defined names across validators, RPC, and the TOMB compiler on devnet and testnet.
---

- Custom events emitted by smart contracts now keep their real, developer-defined names end-to-end.
- Devnet and testnet validators emit these events in a consistent named form, and RPC reconstructs older custom events into the same form, so integrators get stable, meaningful event names instead of a generic placeholder.
- The TOMB smart contract compiler emits custom events in the same named form as of `pha-tomb 2.2.0`.

---

[pha-tomb](https://www.nuget.org/packages/pha-tomb)

```bash
dotnet tool update --global pha-tomb
```
