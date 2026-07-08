---
title: Phantasma SDKs add gas model v2 support and exact fee estimation
publishedAt: 2026-07-08T00:27:50Z
tags:
  - sdk
summary: The latest SDK releases add gas model v2 configuration support, a Tier-1 fee estimator, a client for the new transaction estimation endpoint, and the block producer address in block responses, across TypeScript, Python, Rust, Go, C++, and .NET.
---

- Published latest versions: `phantasma-sdk-ts 0.14.0`, `phantasma-sdk-py 2.5.0`, `phantasma-sdk 1.5.0` (Rust), `phantasma-sdk-go 0.14.0`, `PhantasmaPhoenix.Protocol.Carbon 0.5.0`, `PhantasmaPhoenix.RPC 0.11.0`, and `PhantasmaPhoenix.NFT 0.7.8`.
- Every SDK now reads the live gas configuration and includes a Tier-1 fee estimator that computes exact fees for native operations before a transaction is sent.
- Each SDK adds a client for the new transaction estimation endpoint, so wallets and tools can request an exact fee estimate for a prepared transaction.
- Block responses now expose the block producer address across the SDKs.
- The C++ SDK received the same additions in its source repository.

---

[phantasma-sdk-ts](https://www.npmjs.com/package/phantasma-sdk-ts) | [phantasma-sdk-py](https://pypi.org/project/phantasma-sdk-py/) | [phantasma-sdk](https://crates.io/crates/phantasma-sdk) | [phantasma-sdk-go](https://pkg.go.dev/github.com/phantasma-io/phantasma-sdk-go) | [PhantasmaPhoenix.Protocol.Carbon](https://www.nuget.org/packages/PhantasmaPhoenix.Protocol.Carbon) | [PhantasmaPhoenix.RPC](https://www.nuget.org/packages/PhantasmaPhoenix.RPC) | [PhantasmaPhoenix.NFT](https://www.nuget.org/packages/PhantasmaPhoenix.NFT) | [phantasma-sdk-cpp](https://github.com/phantasma-io/phantasma-sdk-cpp)

```bash
npm update --save phantasma-sdk-ts
pip install --upgrade phantasma-sdk-py
cargo update -p phantasma-sdk
go get -u github.com/phantasma-io/phantasma-sdk-go
dotnet package update PhantasmaPhoenix.Protocol.Carbon
dotnet package update PhantasmaPhoenix.RPC
dotnet package update PhantasmaPhoenix.NFT
```
