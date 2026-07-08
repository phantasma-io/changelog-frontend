---
title: Gas model v2 is live on devnet
publishedAt: 2026-07-08T01:00:00Z
tags:
  - devnet
  - validators
  - rpc
summary: Devnet is running the latest validator and RPC builds, and gas model v2 has been activated on devnet through a governance resolution — a redesigned fee model that prices real work and state, the economic foundation for Phantasma sidechains, with exact fee estimation for wallets and tools.
---

- Devnet is running the latest validator and RPC builds, and gas model v2 is now active on devnet, switched on through a governance special resolution.
- Gas model v2 is a redesigned fee model. A transaction's fee is based on the real work it performs — its computation and the data it moves — together with the real, lasting cost of the state it keeps on-chain.
- This is the economic foundation for Phantasma's upcoming sidechains: gas model v2 makes fee policy configurable per chain, introduces a block producer reward share, and lays the groundwork for fee sponsorship — the building blocks a multi-chain network needs.
- The refundable SOUL storage deposit is preserved: applications that store data get their deposit back when that data is removed.
- Exact fee estimation arrives with the model. A new `getGasConfig` RPC method exposes the live fee parameters, and a new transaction estimation endpoint lets wallets and tools compute exact fees before sending. The Phantasma SDKs ship matching fee calculators in the same release.
- Activation is atomic and governed: the new model turns on in a single, producer-approved resolution, and the full transaction history stays reproducible under the previous rules.
- Gas model v2 is being trialed on devnet first. Mainnet continues on the current model while devnet proves out the new one; a dedicated announcement will follow when it is scheduled for mainnet.
