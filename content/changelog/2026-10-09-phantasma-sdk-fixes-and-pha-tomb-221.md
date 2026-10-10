---
title: Phantasma SDK fixes and pha-tomb 2.2.1
publishedAt: 2026-10-09T22:00:00Z
tags:
  - sdk
  - tooling
summary: Every SDK now stops a native transfer that the chain would reject, and pha-tomb compiles for the chain's current VM version by default.
---

- Published latest versions: `phantasma-sdk-py 4.0.2`, `phantasma-sdk 3.0.2` (Rust), `phantasma-sdk-go v0.18.2`, `phantasma-sdk-ts 0.20.0`, `PhantasmaPhoenix.RPC 0.17.0`, `PhantasmaPhoenix.NFT 0.7.16`, and `pha-tomb 2.2.1`.
- Every SDK refuses to sign a native transfer of **0** atoms, or of **2^63** atoms or more. The chain rejects such a transfer and still charges its fee. A larger amount goes through a `Token.TransferFungible` call or a script transfer.
- The script builder refuses a jump or a call to a target that the chain cannot reach.
- `PhantasmaAPI.IsValidAddress` is removed from the C# and Unity SDKs. Use `Address.IsValidAddress`.
- `phantasma-sdk-ts` removes `hexStringToUint8Array`; use `hexToBytes`. The old `readSignature` is removed, and `readSignatureV2` is now called `readSignature`.
- The **Unity SDK** core package moves to `0.14.0` with these changes. The C++ SDK received the same transfer and script checks in its source repository.
- **pha-tomb 2.2.1** compiles for the chain's current VM version by default (`protocol:1`). A contract's constructor checks that the chain runs at least the target version, so a higher `protocol:` value makes it fail on the current chain.

---

[phantasma-sdk-py](https://pypi.org/project/phantasma-sdk-py/) | [phantasma-sdk](https://crates.io/crates/phantasma-sdk) | [phantasma-sdk-go](https://pkg.go.dev/github.com/phantasma-io/phantasma-sdk-go) | [phantasma-sdk-ts](https://www.npmjs.com/package/phantasma-sdk-ts) | [PhantasmaPhoenix.RPC](https://www.nuget.org/packages/PhantasmaPhoenix.RPC) | [PhantasmaPhoenix.NFT](https://www.nuget.org/packages/PhantasmaPhoenix.NFT) | [phantasma-sdk-cpp](https://github.com/phantasma-io/phantasma-sdk-cpp) | [phantasma-sdk-unity](https://github.com/phantasma-io/phantasma-sdk-unity) | [pha-tomb](https://www.nuget.org/packages/pha-tomb)

```bash
npm install phantasma-sdk-ts@latest
pip install --upgrade phantasma-sdk-py
cargo add phantasma-sdk
go get -u github.com/phantasma-io/phantasma-sdk-go
dotnet package update PhantasmaPhoenix.RPC
dotnet package update PhantasmaPhoenix.NFT
dotnet tool update --global pha-tomb
```
