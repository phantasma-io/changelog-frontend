---
title: C# SDK adds a Phantasma Link v5 client and package updates
publishedAt: 2026-06-15T21:25:00Z
tags:
  - sdk
  - wallet
summary: The C# SDK adds a Phantasma Link v5 client and updates its Carbon, RPC, and NFT packages.
---

- A Phantasma Link v5 client is now available for C# as `PhantasmaPhoenix.Link 0.2.0`, with ECDH pairing, the relay and deeplink transports, sessions with revoke, sign operations, and the script transaction format.
- `PhantasmaPhoenix.Protocol.Carbon 0.4.4`, `PhantasmaPhoenix.RPC 0.7.4`, and `PhantasmaPhoenix.NFT 0.7.4` were published, with optional RPC response-model fields made nullable for safer deserialization and license alignment with the TypeScript SDK.

---

```
dotnet package add PhantasmaPhoenix.Link
dotnet package update PhantasmaPhoenix.Protocol.Carbon
dotnet package update PhantasmaPhoenix.RPC
dotnet package update PhantasmaPhoenix.NFT
```

[PhantasmaPhoenix.Link](https://www.nuget.org/packages/PhantasmaPhoenix.Link) | [PhantasmaPhoenix.RPC](https://www.nuget.org/packages/PhantasmaPhoenix.RPC) | [PhantasmaPhoenix.NFT](https://www.nuget.org/packages/PhantasmaPhoenix.NFT) | [PhantasmaPhoenix.Protocol.Carbon](https://www.nuget.org/packages/PhantasmaPhoenix.Protocol.Carbon)
