---
title: Devnet chain update enables Saturn v4 DEX work
publishedAt: 2026-04-11T23:07:00Z
tags:
  - devnet
  - validators
summary: Devnet is running the latest chain build with Runtime.MintToken fixes needed for smart contracts that mint NFTs with schema-backed ROM and RAM, including the Saturn v4 DEX devnet work.
---

- Devnet validators are running the latest chain build with the NFT minting fixes needed for the next round of smart contract testing.
- `Runtime.MintToken` now accepts serialized VM struct payloads for schema-backed NFT ROM and stores them using the token's persisted ROM schema.
- Schema-backed NFT RAM now follows the same path, so smart contracts can persist typed RAM payloads through the normal NFT mint flow.
- This enables Saturn v4 DEX work to begin on devnet, including contract flows that mint pool ownership certificate NFTs.
