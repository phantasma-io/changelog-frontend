---
title: Phantasma Phoenix C# and Unity SDK packages published
publishedAt: 2026-04-05T12:00:00Z
tags:
  - sdk
summary: New Phantasma Phoenix C# packages and a refreshed Unity SDK package were published with current RPC support.
---

- Published package versions now include `PhantasmaPhoenix.RPC 0.5.0`, `PhantasmaPhoenix.NFT 0.5.0`, and `PhantasmaPhoenix.Protocol.Carbon 0.4.0`. Developers should update to these packages for current RPC support.
- The C# RPC wrapper was cleaned up so account, balance, token, and NFT calls match current RPC behavior more closely.
- `PhantasmaPhoenix.Protocol.Carbon` now includes the deterministic Phantasma NFT mint helpers in the published package set.
- `Phantasma Phoenix Unity 0.2.0` was also published with the same RPC calling convention and tests that check the exact requests sent by the sample project.

---

[PhantasmaPhoenix.RPC](https://www.nuget.org/packages/PhantasmaPhoenix.RPC) | [PhantasmaPhoenix.NFT](https://www.nuget.org/packages/PhantasmaPhoenix.NFT) | [PhantasmaPhoenix.Protocol.Carbon](https://www.nuget.org/packages/PhantasmaPhoenix.Protocol.Carbon)

```bash
dotnet package update PhantasmaPhoenix.RPC
dotnet package update PhantasmaPhoenix.NFT
dotnet package update PhantasmaPhoenix.Protocol.Carbon
```

Unity Package Manager

```text
https://github.com/phantasma-io/Phantasma-UnitySDK.git?path=PhantasmaPhoenix.Unity.Core
https://github.com/phantasma-io/Phantasma-UnitySDK.git?path=PhantasmaPhoenix.Unity.LinkClient
```
