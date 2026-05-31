---
title: Mainnet smart contracts are live
publishedAt: 2026-05-20T00:00:00Z
tags:
  - mainnet
  - smart-contracts
  - validators
summary: Smart contract deployment and execution are now active on Phantasma mainnet, with validator, RPC, SDK, CLI, and documentation support available for developers.
---

- Smart contract deployment and execution are now active on Phantasma mainnet.
- Developers can deploy and upgrade custom Phantasma VM contracts through `Runtime.DeployContract` and `Runtime.UpgradeContract`, including constructor execution, `onUpgrade`, and ABI-aware upgrade handling.
- Token-backed contracts are active on mainnet. `Nexus.CreateToken` can create token contracts with script and ABI data, and `Nexus.AttachTokenContract` can attach VM logic to eligible existing tokens.
- Token lifecycle hooks are active for contract flows, including mint, burn, send, receive, infuse, series creation, and RAM write behavior.
- The NFT contract stack is available on mainnet: deterministic Phantasma NFT ids, series-aware minting, schema-backed ROM and RAM payloads, `Runtime.MintToken`, `Runtime.WriteToken`, `onWrite`, `Runtime.ReadToken`, `Runtime.ReadTokenROM`, `Runtime.ReadInfusions`, and `Runtime.GetOwnershipsBySeries`.
- Contract-side fungible token support is available for eligible custom tokens through `Runtime.MintTokens`, with `Runtime.GetTokenOwner` available for token ownership reads.
- The restored VM runtime includes the compatibility work needed by existing Phantasma contract patterns: BigInteger, VMObject, ScriptContext, contract storage, `Data.*`, `Map.*`, `List.*`, runtime getters, contract address resolution, and multi-result script execution.
- Mainnet token-backed contract state needed by the VM has been repaired, including token metadata, token flags, ABI rows, and contract registry rows.
- Validator runtime logging and lifecycle event payloads now make contract deploy, upgrade, and token creation activity easier to track.
- Phantasma RPC event reconstruction has been updated for nested Token calls, token repair migrations, Token Notify events, and contract lifecycle activity. RPC access to smart contract reads and writes remains controlled by each RPC node's operator configuration.
- TOMB compiler support, `pha-deploy` contract lifecycle commands, and the token deployment UI have been updated around the launch.
- Current SDK releases for TypeScript, Go, Python, Rust, and .NET support the mainnet contract path with current VM transaction builders, token and NFT flows, gas handling, and RPC behavior.
- Developer documentation now covers the current smart contract stack, including SDK guides, VM transaction flows, token and NFT workflows, and storage/data escrow guidance.
- Result: developers can build against the restored Phantasma VM lifecycle on mainnet: deploy contracts, attach token logic, create NFT series, mint and update NFTs with contract-controlled metadata, and integrate those flows through current RPC and SDK packages.

---

[Mainnet VM config](https://pharpc1.phantasma.info/api/v1/GetPhantasmaVmConfig?chainAddressOrName=main) | [Token Deployment UI](https://deploy.phantasma.info/) | [pha-deploy docs](https://github.com/phantasma-io/phantasmaphoenix-gitbook/tree/main/developers/tools/pha-deploy.md) | [Storage And Data Escrow](https://github.com/phantasma-io/phantasmaphoenix-gitbook/tree/main/developers/blockchain/smart-contracts/storage-and-data-escrow.md)
