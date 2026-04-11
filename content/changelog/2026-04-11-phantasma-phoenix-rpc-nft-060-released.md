---
title: Phantasma Phoenix RPC and NFT 0.6.0 packages published
publishedAt: 2026-04-11T03:38:00Z
tags:
  - sdk
summary: PhantasmaPhoenix.RPC 0.6.0 and PhantasmaPhoenix.NFT 0.6.0 are now published on NuGet with corrected JSON-RPC id handling and an updated NFT dependency on the current RPC package.
---

- `PhantasmaPhoenix.RPC 0.6.0` and `PhantasmaPhoenix.NFT 0.6.0` are now available on NuGet. Developers using either package should update to the current versions.
- JSON-RPC request and response ids now support the protocol-valid forms: integer ids, string ids, null ids, and omitted ids.
- RPC responses now serialize the exact `id` value supplied by the caller instead of relying on an implicit default response id.
- Invalid JSON-RPC id shapes such as objects, arrays, and floating-point values are rejected during deserialization.
- `PhantasmaPhoenix.NFT 0.6.0` now depends on `PhantasmaPhoenix.RPC 0.6.0`, so NFT integrations use the same corrected RPC id handling.

---

[PhantasmaPhoenix.RPC](https://www.nuget.org/packages/PhantasmaPhoenix.RPC) | [PhantasmaPhoenix.NFT](https://www.nuget.org/packages/PhantasmaPhoenix.NFT)

```bash
dotnet package update PhantasmaPhoenix.RPC
dotnet package update PhantasmaPhoenix.NFT
```
