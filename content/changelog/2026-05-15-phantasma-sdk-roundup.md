---
title: Phantasma SDK updates released across TypeScript, Go, Python, Rust, and .NET
publishedAt: 2026-05-15T02:54:15Z
tags:
  - sdk
summary: The latest SDK releases update the main Phantasma developer packages with current transaction builders, token and NFT fee handling, RPC result handling, and shared VM serialization parity.
---

- Published latest versions: `phantasma-sdk-ts 0.8.2`, `phantasma-sdk-go 0.9.0`, `phantasma-sdk-py 2.0.3`, `phantasma-sdk 1.0.2`, `PhantasmaPhoenix.Protocol.Carbon 0.4.2`, `PhantasmaPhoenix.RPC 0.6.3`, and `PhantasmaPhoenix.NFT 0.6.3`.
- `phantasma-sdk-ts 0.8.2` is a large compatibility-preserving cleanup: new code can use the `/public` entrypoint and lowercase deep imports, while existing root and `core/**` imports remain available through deprecated aliases.
- TypeScript RPC calls now have an explicit result-style path for applications that want normalized HTTP and JSON-RPC errors without changing the older high-level `Promise<T>` methods.
- `phantasma-sdk-go 0.9.0` is a breaking cleanup and hardening release under `github.com/phantasma-io/phantasma-sdk-go`, with context-aware RPC calls, refreshed public packages, current token and NFT builders, and shared VM serialization fixtures.
- The Python and Rust SDKs continue the newly rewritten SDK line with `phantasma-sdk-py 2.0.3` and `phantasma-sdk 1.0.2`, adding shared Ed25519 vectors and count-aware max-gas calculation for multi-token Phantasma NFT mints.
- The latest .NET packages bring the same NFT mint gas scaling, unlimited fungible token flag handling, VMObject and ScriptContext parity fixes, and chain-aware block transaction lookup to `Protocol.Carbon`, `RPC`, and `NFT`.
- Across SDKs, token builders now mark unlimited fungible tokens with the big-fungible representation expected by current validator semantics.
- `@phantasma/connect-react 0.1.4` was also published on the latest TypeScript SDK for applications using the shared React wallet connector.

---

[phantasma-sdk-ts](https://www.npmjs.com/package/phantasma-sdk-ts) | [@phantasma/connect-react](https://www.npmjs.com/package/@phantasma/connect-react) | [phantasma-sdk-go](https://pkg.go.dev/github.com/phantasma-io/phantasma-sdk-go) | [phantasma-sdk-py](https://pypi.org/project/phantasma-sdk-py/) | [phantasma-sdk](https://crates.io/crates/phantasma-sdk) | [PhantasmaPhoenix.Protocol.Carbon](https://www.nuget.org/packages/PhantasmaPhoenix.Protocol.Carbon) | [PhantasmaPhoenix.RPC](https://www.nuget.org/packages/PhantasmaPhoenix.RPC) | [PhantasmaPhoenix.NFT](https://www.nuget.org/packages/PhantasmaPhoenix.NFT)

```bash
npm update --save phantasma-sdk-ts
npm update --save @phantasma/connect-react
go get -u github.com/phantasma-io/phantasma-sdk-go
pip install --upgrade phantasma-sdk-py
cargo update -p phantasma-sdk
dotnet package update PhantasmaPhoenix.Protocol.Carbon
dotnet package update PhantasmaPhoenix.RPC
dotnet package update PhantasmaPhoenix.NFT
```
