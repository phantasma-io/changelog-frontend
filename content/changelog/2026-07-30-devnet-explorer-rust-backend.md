---
title: The devnet explorer runs on a new Rust backend
publishedAt: 2026-07-30T01:19:46Z
tags:
  - devnet
  - explorer
summary: The devnet explorer now runs on a backend rewritten from scratch in Rust, built for speed and stability. It also shows more of the chain, including block producer addresses, real custom contract event names, and decoded gas model v2 fee parameters.
---

- The devnet explorer now runs on a new backend, rewritten from scratch in Rust and built for speed and stability.
- Every block now shows the address of the validator that produced it.
- Custom contract events appear under their real, developer-defined names (the explorer side of the custom event names release from July).
- Governance events show the decoded gas model v2 fee parameters.
- Devnet is the first deployment. The testnet and mainnet explorers stay on their current backend for now; a separate announcement will follow when they move.

---

[Devnet Explorer](https://devnet-explorer.phantasma.info/) | [explorer-backend](https://github.com/phantasma-io/explorer-backend) | [explorer-frontend](https://github.com/phantasma-io/explorer-frontend)
