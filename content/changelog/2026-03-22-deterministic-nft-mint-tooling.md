---
title: Deterministic NFT mint helpers added across Carbon tooling
publishedAt: 2026-03-22T20:00:00Z
tags:
  - tooling
  - sdk
summary: Carbon deployment tooling now targets the chain-derived Phantasma NFT id flow instead of caller-supplied ids, keeping mint behavior aligned across C++, C#, and deployment tools.
---

- `carbon-token-deployment-tool-cs` now mints NFTs through the deterministic Phantasma path and requires `phantasma_series_id` for mint operations.
- NFT metadata passed by the caller is now treated as public payload only. Reserved fields such as `_i` and nested `rom` are created by the chain and should not be supplied in config.
- `Phantasma-CPP` now includes helper code for building deterministic NFT mint payloads and reading both the Phantasma NFT id and the Carbon instance id from the result.
- `PhantasmaPhoenix.Protocol.Carbon` received the same deterministic mint support on the C# side, so the C++, C#, and deployment tools now follow the same mint rules.

---

[PhantasmaPhoenix.Protocol.Carbon](https://www.nuget.org/packages/PhantasmaPhoenix.Protocol.Carbon)

[carbon-token-deployment-tool-cs](https://github.com/phantasma-io/carbon-token-deployment-tool-cs) | [Phantasma-CPP](https://github.com/phantasma-io/Phantasma-CPP)

```bash
dotnet package update PhantasmaPhoenix.Protocol.Carbon
```
