---
title: Restored Gen2 VM parity and interops
publishedAt: 2026-03-17T12:00:00Z
tags:
  - devnet
  - validators
summary: Gen2 VM parity fixes, restored storage/state interops, NFT lifecycle recovery, and imported-state repair work.
---

- Restored Gen2 VM parity for BigInteger, VMObject, and ScriptContext, with deterministic faults for invalid shifts and enum ops.
- Restored VM storage and state interops, including Data.*, Map.*, List.*, runtime getters, and legacy address resolution.
- Restored VM NFT interop flows: Runtime.MintToken, Runtime.BurnToken, Runtime.TransferToken, Runtime.ReadToken, Runtime.ReadTokenROM, Runtime.ReadInfusions, and Nexus.CreateTokenSeries.
- Restored exact gen1/2-compatible Phantasma NFT and series ID handling (_i) across mint, burn, transfer, and read paths, including 256-bit IDs.
- Restored guarded contract-context support for SATRN-style VM flows where a contract creates or mints NFT series under its own token context.
- Improved imported-state restoration: contract imports now restore globals, maps/lists, token-contract indexes, missing script/ABI, and persisted imported series contract bytes.
- Added governance repair resolutions for missing series and mint counts, imported token-contract fungible balances, imported market NFTs, and imported NFT infusions.
- Restored Market royalty execution for imported series, added governance-controlled early cancellation, and fixed Token.GetBalances plus system-address transfer semantics.
- Remaining gap: full trigger/runtime parity is still incomplete, and Runtime.MintTokens is still unsupported.
