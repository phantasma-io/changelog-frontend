---
title: Phantasma SDKs decode chain values into their real shapes
publishedAt: 2026-08-11T19:15:17Z
tags:
  - sdk
summary: The latest SDK releases decode token, series, NFT, and organization properties into their real shapes, type extended event data by event kind, and type special resolution arguments per method. The Python and Rust SDKs move to a new major version.
---

- Published latest versions, `phantasma-sdk-ts 0.17.0`, `phantasma-sdk-py 3.0.0`, `phantasma-sdk 2.0.0` (Rust), `phantasma-sdk-go 0.17.0`, `PhantasmaPhoenix.RPC 0.15.0`, and `PhantasmaPhoenix.NFT 0.7.13`.
- Structured values come from the v2 RPC routes, so point the client at `/rpc/v2`, or at `/api/v2` for REST, to receive them.
- Token, series, NFT, and organization property values decode into a value that keeps the shape the node answered, a scalar, an array, or a structure, instead of a packed string.
- Extended event data is typed by event kind, covering token creation, series creation, market orders, and special resolutions.
- Special resolution call arguments are typed per module and method, 43 shapes in all. A payload an SDK does not model yet is kept as it arrived rather than dropped, so a node newer than your SDK never costs you data.
- Scalars stay text, because chain values are big integers and a fixed numeric type would lose precision.
- Python and Rust move to a new major version because these fields change type. The TypeScript, Go, and .NET SDKs carry the same change inside their current lines.
- The Unity SDK core package moves to `0.11.0` with the same typed values, and the C++ SDK received them in its source repository.

---

[phantasma-sdk-ts](https://www.npmjs.com/package/phantasma-sdk-ts) | [phantasma-sdk-py](https://pypi.org/project/phantasma-sdk-py/) | [phantasma-sdk](https://crates.io/crates/phantasma-sdk) | [phantasma-sdk-go](https://pkg.go.dev/github.com/phantasma-io/phantasma-sdk-go) | [PhantasmaPhoenix.RPC](https://www.nuget.org/packages/PhantasmaPhoenix.RPC) | [PhantasmaPhoenix.NFT](https://www.nuget.org/packages/PhantasmaPhoenix.NFT) | [phantasma-sdk-cpp](https://github.com/phantasma-io/phantasma-sdk-cpp) | [phantasma-sdk-unity](https://github.com/phantasma-io/phantasma-sdk-unity)

```bash
npm install phantasma-sdk-ts@latest
pip install --upgrade phantasma-sdk-py
cargo add phantasma-sdk
go get -u github.com/phantasma-io/phantasma-sdk-go
dotnet package update PhantasmaPhoenix.RPC
dotnet package update PhantasmaPhoenix.NFT
```
