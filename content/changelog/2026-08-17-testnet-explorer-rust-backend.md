---
title: The testnet explorer moves to the new Rust backend
publishedAt: 2026-08-17T16:30:52Z
tags:
  - testnet
  - explorer
summary: The testnet explorer now runs on the same Rust backend as devnet. Both explorers show token metadata, chain values in their real shape, structured NFT attributes, and readable payloads, and event pages take shorter paths to their data.
---

- The testnet explorer now runs on the new Rust backend, the one devnet has been running since July.
- Token pages show the token's metadata.
- Values the chain stores as an array or a structure are displayed in that shape instead of one long packed line.
- NFT attributes are built from that same real shape, media hosted on IPFS is loaded through a gateway, long identifiers are shortened, and raw market and infusion amounts are shown scaled.
- Payloads that carry text are shown as text instead of a hex string.
- Governance calls on an event page are listed page by page.
- Event pages take shorter paths to their data. The explorer looks events up by their type directly instead of walking the whole event history, and a list now reads only the fields it displays.
- A transaction search keeps its results when a state filter is applied.
- The staking chart keeps its curve when a stake value falls outside the expected range.
- Chart colors are readable in the light theme, and the interface texts that were still fixed in English now follow the language selector.
- The mainnet explorer stays on its current backend for now.

---

[Devnet Explorer](https://devnet-explorer.phantasma.info/) | [Testnet Explorer](https://testnet-explorer.phantasma.info/) | [explorer-backend](https://github.com/phantasma-io/explorer-backend) | [explorer-frontend](https://github.com/phantasma-io/explorer-frontend)
