---
title: Mainnet adds protections for token holders
publishedAt: 2026-10-14T23:00:00Z
tags:
  - mainnet
  - testnet
  - devnet
  - validators
summary: Burned tokens can no longer be minted again, and a token without a contract can be sealed against one.
---

Mainnet validators are updated. Governance switched on token semantics V4 in block [9204630](https://explorer.phantasma.info/block/9204630). V4 turns on the new rules for burned supply and sealed tokens.

- Burned tokens can never be minted again. A burn does not make room under a token's maximum supply, for all tokens.
- A token without a contract can be **sealed**. The owner seals it with a metadata field, at creation or later. After that no contract can ever be attached to the token, and the seal cannot be removed. The rest of the metadata can still change.
- If a token's contract handles burns or infusions, every burn and infusion of that token goes through the contract. The chain refuses a direct burn or infusion that would skip it.
- Writing an NFT's RAM takes its owner's signature or the token's own contract. A token contract with an `onWrite` trigger still sets its own rule.
- Validators refuse invalid token amounts, token data and inflation settings.
- Devnet and testnet run the same release, with token semantics V4 switched on.

---

[Mainnet Explorer](https://explorer.phantasma.info/) | [Activation block](https://explorer.phantasma.info/block/9204630) | [Network status](https://status.phantasma.info/)
