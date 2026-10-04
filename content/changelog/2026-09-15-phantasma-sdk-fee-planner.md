---
title: Phantasma SDKs add a fee calculator
publishedAt: 2026-09-15T23:00:00Z
tags:
  - sdk
summary: Every SDK can now calculate what a transaction will cost before it is signed, and say whether that amount is the price or an upper limit.
---

- Published latest versions: `phantasma-sdk-ts 0.18.0`, `phantasma-sdk-py 4.0.0`, `phantasma-sdk 3.0.0` (Rust), `phantasma-sdk-go v0.18.0`, `PhantasmaPhoenix.RPC 0.16.0`, `PhantasmaPhoenix.NFT 0.7.14`, and `PhantasmaPhoenix.Link 0.3.4`.
- **Gas model v2** went live on mainnet on 27 August. Every transaction now names the amount it is willing to pay. The chain turns away one that offers nothing.
- Every SDK now calculates that amount. It is taken from the message, so you have the number before anything is signed.
- The SDK also says whether the amount is the price or an upper limit. Put "up to" in front of an upper limit when you show it to a user.
- Part of the price depends on details the message does not carry. The calculator takes the expensive reading for each of them, so the offer is never too small. The chain returns what the transaction does not spend.
- Building, calculating, signing and sending are now separate steps. The key can sit in memory, in a hardware wallet, or in a wallet reached over Phantasma Link. There is also one method that runs all four steps.
- A transaction takes **several signatures**, so one account can pay the fee for another.
- Creating a token starts with a lookup on the symbol. The chain takes the creation fee before it checks the symbol, and that fee is the largest in the model. If the symbol is already taken, the SDK stops and the fee is not spent.
- The **Unity SDK** core package moves to `0.13.0`. One method calculates the fee, signs and sends. It can also calculate the fee without a key, for a wallet that signs elsewhere. Both come with a sample. Unity **2022.3** is now the lowest editor version it supports.
- The C++ SDK received the same work in its source repository.

---

[phantasma-sdk-ts](https://www.npmjs.com/package/phantasma-sdk-ts) | [phantasma-sdk-py](https://pypi.org/project/phantasma-sdk-py/) | [phantasma-sdk](https://crates.io/crates/phantasma-sdk) | [phantasma-sdk-go](https://pkg.go.dev/github.com/phantasma-io/phantasma-sdk-go) | [PhantasmaPhoenix.RPC](https://www.nuget.org/packages/PhantasmaPhoenix.RPC) | [PhantasmaPhoenix.NFT](https://www.nuget.org/packages/PhantasmaPhoenix.NFT) | [PhantasmaPhoenix.Link](https://www.nuget.org/packages/PhantasmaPhoenix.Link) | [phantasma-sdk-cpp](https://github.com/phantasma-io/phantasma-sdk-cpp) | [phantasma-sdk-unity](https://github.com/phantasma-io/phantasma-sdk-unity)

```bash
npm install phantasma-sdk-ts@latest
pip install --upgrade phantasma-sdk-py
cargo add phantasma-sdk
go get -u github.com/phantasma-io/phantasma-sdk-go
dotnet package update PhantasmaPhoenix.RPC
dotnet package update PhantasmaPhoenix.NFT
dotnet package update PhantasmaPhoenix.Link
```
