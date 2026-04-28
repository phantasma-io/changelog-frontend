---
title: Devnet and testnet smart contract update deployed
publishedAt: 2026-04-28T02:50:00Z
tags:
  - devnet
  - testnet
  - validators
  - tooling
summary: Devnet and testnet are running updated validator builds with token-state repairs, testnet smart contract execution, and matching TOMB compiler support for Runtime.WriteToken.
notice: "Devnet and testnet have been reset to mainnet data at block #8782151. Both networks now start from that mainnet chain state and will diverge as new devnet and testnet transactions are produced."
---

- Devnet and testnet are now running the updated validator build.
- The token repair resolution has been deployed. It restores missing token-backed contract metadata, token flags, script/ABI data, and contract registry rows so repaired tokens can be resolved and executed consistently.
- Testnet now executes Phantasma smart contracts, giving developers a public test network for contract transactions before mainnet activation.
- The validator VM now supports `Runtime.WriteToken` RAM writes, including the `onWrite` trigger path used by NFT contracts that update token RAM.
- Smart contract execution also keeps anonymous witness context across block production, blocks public `Initialize` re-entry, and preserves duplicated-series `Runtime.MintToken` behavior for follow-up NFT mints.
- NFT owner lookups and organization member lookups now use exact key ranges, fixing cases where stored little-endian ids could make valid entries disappear from reads.
- Validator reliability was tightened as well: the inflation scheduler now backs off failed paid inflation transactions instead of producing repeated empty blocks, and Raft voting now rejects stale candidates more strictly.
- `pha-tomb 2.1.1` is available on NuGet with `Runtime.WriteToken` marked as available in native-method checks, so compiler diagnostics match the validator build now deployed to devnet and testnet.

---

[pha-tomb](https://www.nuget.org/packages/pha-tomb)

```bash
dotnet tool update --global pha-tomb
```
