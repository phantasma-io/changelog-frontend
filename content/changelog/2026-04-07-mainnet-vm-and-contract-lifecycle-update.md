---
title: Mainnet upgraded with VM parity and contract lifecycle support
publishedAt: 2026-04-07T12:00:00Z
tags:
  - mainnet
  - validators
summary: The mainnet update delivered VM parity, deterministic NFT minting, contract lifecycle, token hook, RPC, and sync reliability work in one deployment.
notice: "Smart contract deployment and execution are not active yet. The code and chain updates are installed, and activation is planned for the near future."
---

- The update restores Gen2 VM parity for BigInteger, VMObject, ScriptContext, storage/state interops, runtime getters, and legacy address resolution.
- Contract lifecycle code is now installed on mainnet for custom and token-backed contracts, including deploy, upgrade, `onUpgrade`, and contract-owned NFT flows. Contract deployment and execution will remain unavailable until the activation step is completed.
- Token lifecycle support was restored in the installed code for mint, burn, send, receive, infuse, and series operations. `Runtime.MintTokens` and `Runtime.GetTokenOwner` are also included.
- NFT handling now uses deterministic Phantasma-compatible IDs and preserves imported NFT and series identities across mint, burn, transfer, and read paths.
- Chain data repair resolutions were included for imported-state restoration: contract imports restore globals, maps/lists, token-contract indexes, missing script/ABI, and persisted imported series contract bytes.
- Additional repair resolutions cover missing series and mint counts, imported token-contract fungible balances, imported market NFTs, and imported NFT infusions.
- Market and token data compatibility was repaired for imported series royalties, governance-controlled early market cancellation, `Token.GetBalances`, and system-address transfer semantics.
- Public RPC reads for accounts, balances, owned tokens, NFTs, and multi-result `InvokeRawScript` responses were corrected as part of the same mainnet rollout.
- Fresh validator and audit-node sync were improved so nodes can recover and continue replay from partially downloaded state.
