---
title: Phantasma SDKs add the lightweight account endpoints
publishedAt: 2026-07-29T19:42:20Z
tags:
  - sdk
summary: The latest SDK releases add clients for the new single and batch account endpoints, mark the heavy account calls deprecated, document the accepted page size range, and bring the Unity SDK in line on gas model v2 fee estimation.
---

- Published latest versions: `phantasma-sdk-ts 0.16.0`, `phantasma-sdk-py 2.7.0`, `phantasma-sdk 1.7.0` (Rust), `phantasma-sdk-go 0.16.0`, `PhantasmaPhoenix.RPC 0.13.0`, and `PhantasmaPhoenix.NFT 0.7.10`.
- Every SDK adds a client for `getAccountInfo`, which reads an account's name and staking information without pulling balances or full NFT identifier lists along with them.
- Every SDK also adds a client for `getAccountInfos`, so an application can read up to 100 accounts in a single call instead of one call per address.
- `getAccount`, `getAccounts`, and `getTokenData` are marked deprecated in the SDKs, with the replacement named at the call site, so the compiler or editor points to it while you migrate.
- Cursor-paginated methods now document the accepted `pageSize` range that the nodes enforce.
- The Unity SDK adds `getGasConfig` and `estimateTransaction` clients and moves its core package to `0.10.0`, bringing it in line with the gas model v2 fee estimation already available in the other SDKs.
- The C++ SDK received the same additions in its source repository.

---

[phantasma-sdk-ts](https://www.npmjs.com/package/phantasma-sdk-ts) | [phantasma-sdk-py](https://pypi.org/project/phantasma-sdk-py/) | [phantasma-sdk](https://crates.io/crates/phantasma-sdk) | [phantasma-sdk-go](https://pkg.go.dev/github.com/phantasma-io/phantasma-sdk-go) | [PhantasmaPhoenix.RPC](https://www.nuget.org/packages/PhantasmaPhoenix.RPC) | [PhantasmaPhoenix.NFT](https://www.nuget.org/packages/PhantasmaPhoenix.NFT) | [phantasma-sdk-cpp](https://github.com/phantasma-io/phantasma-sdk-cpp) | [phantasma-sdk-unity](https://github.com/phantasma-io/phantasma-sdk-unity)

```bash
npm update --save phantasma-sdk-ts
pip install --upgrade phantasma-sdk-py
cargo update -p phantasma-sdk
go get -u github.com/phantasma-io/phantasma-sdk-go
dotnet package update PhantasmaPhoenix.RPC
dotnet package update PhantasmaPhoenix.NFT
```
