---
title: Phantasma SDK packages updated for organization APIs and stricter RPC handling
publishedAt: 2026-05-28T16:33:31Z
tags:
  - sdk
summary: The latest SDK releases add organization RPC support, stricter JSON-RPC response handling, and safer Carbon decoding across the main Phantasma developer packages.
---

- Published latest versions: `phantasma-sdk-ts 0.9.2`, `phantasma-sdk-go 0.10.2`, `phantasma-sdk-py 2.1.2`, `phantasma-sdk 1.1.3`, `PhantasmaPhoenix.Protocol.Carbon 0.4.3`, `PhantasmaPhoenix.RPC 0.7.3`, and `PhantasmaPhoenix.NFT 0.7.3`.
- SDKs now include organization RPC models and helper calls for `getOrganization`, `getOrganizations`, `getOrganizationMembers`, and `getOrganizationMember`, matching the current name-first RPC API.
- Organization member and organization list reads use cursor-aware result models, so applications can inspect groups such as `masters` through the public organization API.
- JSON-RPC clients and response models have stricter id and envelope validation. Mismatched or malformed response ids are rejected, while valid numeric and string ids from RPC nodes remain supported.
- Carbon serialization readers have stronger length checks for array-style payloads, reducing the chance that malformed Carbon data is accepted or decoded with the wrong bounds.

---

[phantasma-sdk-ts](https://www.npmjs.com/package/phantasma-sdk-ts) | [phantasma-sdk-go](https://pkg.go.dev/github.com/phantasma-io/phantasma-sdk-go) | [phantasma-sdk-py](https://pypi.org/project/phantasma-sdk-py/) | [phantasma-sdk](https://crates.io/crates/phantasma-sdk) | [PhantasmaPhoenix.Protocol.Carbon](https://www.nuget.org/packages/PhantasmaPhoenix.Protocol.Carbon) | [PhantasmaPhoenix.RPC](https://www.nuget.org/packages/PhantasmaPhoenix.RPC) | [PhantasmaPhoenix.NFT](https://www.nuget.org/packages/PhantasmaPhoenix.NFT)

```bash
npm update --save phantasma-sdk-ts
go get -u github.com/phantasma-io/phantasma-sdk-go
pip install --upgrade phantasma-sdk-py
cargo update -p phantasma-sdk
dotnet package update PhantasmaPhoenix.Protocol.Carbon
dotnet package update PhantasmaPhoenix.RPC
dotnet package update PhantasmaPhoenix.NFT
```
