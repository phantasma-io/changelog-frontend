---
title: Higher RPC rate limits with API keys
publishedAt: 2026-06-20T03:05:00Z
tags:
  - devnet
  - testnet
  - rpc
  - sdk
summary: API keys are now available to raise RPC rate limits — supported by devnet and testnet RPC and all seven Phantasma SDKs.
---

- Devnet and testnet RPC now support API keys that grant higher rate-limit tiers: node operators can issue keys for higher-volume access, and can optionally run a node in keys-only mode.
- All seven Phantasma SDKs can now attach an API key to the RPC client, so requests use the matching rate-limit tier on nodes that issue keys.
- The same RPC build returns NFT lookups that find nothing as a clean not-found result instead of surfacing as an error.
- Controlled API errors now propagate with their intended status and message instead of being flattened by a catch-all handler.
- Updated SDK packages: `phantasma-sdk-ts 0.11.0` (TypeScript), `phantasma-sdk-py 2.2.0` (Python), `phantasma-sdk 1.2.0` (Rust), `phantasma-sdk-go v0.11.0` (Go), and `PhantasmaPhoenix.RPC 0.8.0` (.NET), plus updated C++ and Unity SDKs.

---

```
npm update --save phantasma-sdk-ts
pip install --upgrade phantasma-sdk-py
cargo update -p phantasma-sdk
go get -u github.com/phantasma-io/phantasma-sdk-go
dotnet package update PhantasmaPhoenix.RPC
```

[TypeScript](https://www.npmjs.com/package/phantasma-sdk-ts) | [Python](https://pypi.org/project/phantasma-sdk-py/) | [Rust](https://crates.io/crates/phantasma-sdk) | [Go](https://pkg.go.dev/github.com/phantasma-io/phantasma-sdk-go) | [.NET](https://www.nuget.org/packages/PhantasmaPhoenix.RPC) | [C++](https://github.com/phantasma-io/phantasma-sdk-cpp) | [Unity](https://github.com/phantasma-io/phantasma-sdk-unity)
