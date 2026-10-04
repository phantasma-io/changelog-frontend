---
title: Phantasma SDK patch release and pha-deploy 0.6.0
publishedAt: 2026-09-20T17:37:14Z
tags:
  - sdk
  - tooling
summary: Script and Carbon transactions now get the same default expiry in every SDK, and pha-deploy takes its fees from the chain.
---

- Published latest versions: `phantasma-sdk-ts 0.18.2`, `phantasma-sdk-py 4.0.1`, `phantasma-sdk 3.0.1` (Rust), `phantasma-sdk-go v0.18.1`, `PhantasmaPhoenix.RPC 0.16.1`, `PhantasmaPhoenix.NFT 0.7.15`, and `pha-deploy 0.6.0`.
- A script transaction that an SDK helper builds now expires after **45 seconds** by default. Carbon transactions already used this default. Before, each SDK had its own value.
- If a person confirms the transaction first, pass a longer expiration. Every SDK now accepts one.
- The **Unity SDK** core package moves to `0.13.1` and ships the updated C# RPC library. The C++ SDK received the same change in its source repository.
- **pha-deploy** now takes the price of every transaction from the chain. It prints the fee before sending.
- For a contract deploy or upgrade, pha-deploy offers the gas limit the chain recommends. If the payer can cover the fee but not the full limit, it lowers the limit to the payer's KCAL balance and says so.
- `phantasma-sdk-ts` no longer installs the Ledger USB packages. An app that works with a Ledger installs them itself.

---

[phantasma-sdk-ts](https://www.npmjs.com/package/phantasma-sdk-ts) | [phantasma-sdk-py](https://pypi.org/project/phantasma-sdk-py/) | [phantasma-sdk](https://crates.io/crates/phantasma-sdk) | [phantasma-sdk-go](https://pkg.go.dev/github.com/phantasma-io/phantasma-sdk-go) | [PhantasmaPhoenix.RPC](https://www.nuget.org/packages/PhantasmaPhoenix.RPC) | [PhantasmaPhoenix.NFT](https://www.nuget.org/packages/PhantasmaPhoenix.NFT) | [phantasma-sdk-cpp](https://github.com/phantasma-io/phantasma-sdk-cpp) | [phantasma-sdk-unity](https://github.com/phantasma-io/phantasma-sdk-unity) | [pha-deploy](https://www.npmjs.com/package/pha-deploy)

```bash
npm install phantasma-sdk-ts@latest
pip install --upgrade phantasma-sdk-py
cargo add phantasma-sdk
go get -u github.com/phantasma-io/phantasma-sdk-go
dotnet package update PhantasmaPhoenix.RPC
dotnet package update PhantasmaPhoenix.NFT
npm update -g pha-deploy
```
