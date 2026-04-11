---
title: Contract lifecycle support
publishedAt: 2026-03-27T12:00:00Z
tags:
  - devnet
  - validators
summary: Deterministic NFT ids, restored contract and token lifecycle hooks, public RPC fixes, and more reliable validator sync.
notice: "Devnet network has been rolled back to the March 16 state at block #6502683."
---

- Added deterministic Phantasma-compatible NFT minting for the standard VM mint path: the chain now generates stable 256-bit _i ids from the public NFT payload and rejects duplicate deterministic replays.
- Disabled the old caller-provided explicit NFT id mint path: after the applied resolution, new NFT mints must use the deterministic chain-generated id flow.
- Restored VM contract lifecycle support for custom and token-backed contracts: Runtime.DeployContract, Runtime.UpgradeContract, and onUpgrade now work again, including contract-owned NFT flows.
- Restored VM token lifecycle hooks: onMint, onBurn, onSend, onReceive, onInfuse, and onSeries now run in the correct order and roll back cleanly on failure.
- Implemented Runtime.MintTokens for supported custom fungible tokens, including contract-context minting and contract-owned destinations, while keeping native/dangerous symbols such as SOUL and KCAL blocked from the VM mint path.
- Added Runtime.GetTokenOwner for reading persisted token ownership.
- Fixed VM table/list {count} tracking for imported contracts and newly created state, so VM reads now return correct counts for restored tables and fresh fields.
- Fixed inconsistent public RPC reads for accounts, balances, owned tokens, and NFTs: the affected queries now work reliably across supported clients and address formats.
- Fixed public InvokeRawScript multi-result responses, so RPC now returns the full VM result list instead of collapsing it into one item.
- Hardened public PHANTASMAVM execution: token-creation entrypoints are stricter, the minimal-PoW public ExecuteScript bypass is closed, and old partial-burn gas configs no longer crash validators on InvokeRawScript.
- Improved fresh validator and audit-node sync reliability: nodes now recover and continue replay correctly from partially downloaded state instead of getting stuck during startup.
