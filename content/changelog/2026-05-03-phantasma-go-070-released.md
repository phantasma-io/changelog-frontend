---
title: phantasma-go 0.7.0 released
publishedAt: 2026-05-03T17:46:02Z
tags:
  - sdk
summary: The Go SDK has been updated for Phoenix and Carbon development with transaction builders, typed RPC coverage, and script-builder parity fixes.
---

- `phantasma-go 0.7.0` is now available for Go projects.
- The SDK adds `pkg/carbon` for Phoenix Carbon transaction serialization, signing, token-module calls, VM schema data, and NFT metadata helpers.
- Token and NFT builders now cover token metadata, standard NFT schemas, ROM/RAM payloads, token creation, series creation, minting, transfer, burn, and metadata update flows.
- The Phantasma RPC client now includes broader typed wrappers for Phoenix chain, contract, organization, token, series, NFT, account-token, auction, and VM-config reads.
- Script building was refreshed with typed address helpers, text-address helpers, array arguments, safer result decoding, and parity fixes against the shared SDK script vectors.
- The module requires Go 1.25 or newer and is developed with the Go 1.26 toolchain.

---

[phantasma-go](https://pkg.go.dev/github.com/phantasma-io/phantasma-go)

```bash
go get -u github.com/phantasma-io/phantasma-go
```
