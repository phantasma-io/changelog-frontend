---
title: Explorer goes Rust
publishedAt: 2026-08-28T01:23:36Z
tags:
  - mainnet
  - explorer
summary: The explorer serving mainnet is now the Rust one. It answers faster, it holds that speed while the chain is busy, and it is the first piece of the Phantasma stack to move to Rust.
---

Mainnet finished its move to the new explorer backend on 28 August. Devnet went over in July, testnet followed in August, and mainnet came across in stages. All three networks now run the same current backend behind the same current interface.

- Pages, lists and search are served quickly even when the chain is busy.
- Rust was chosen for what it guarantees before the code runs. Entire families of failure, memory used after it is released and threads racing each other for the same data, cannot be written in it. There is no garbage collector, so response times stay steady as traffic rises. Threads are safe to use, so the same hardware answers more readers at once. Memory use stays flat across weeks of uptime.
- The new backend was built for a far heavier chain than today's. **Smart contracts** and **sidechains** will multiply the amount of data an explorer has to index and serve, and the backend was sized for that from the start, so it grows with the chain.
- The interface got better along the way. Token pages show token metadata, values the chain stores as arrays or structures are displayed in that shape, NFT attributes are built from their real structure, media hosted on IPFS loads through a gateway, payloads carrying text are shown as text, and governance calls on an event page are listed page by page.
- Every block now shows the validator that produced it, which gas model v2 made part of the block itself.

The explorer is the first Phantasma service written in Rust. A **Rust validator** and a **Rust RPC** come next.

---

[Mainnet Explorer](https://explorer.phantasma.info/) | [Testnet Explorer](https://testnet-explorer.phantasma.info/) | [Devnet Explorer](https://devnet-explorer.phantasma.info/) | [explorer-backend](https://github.com/phantasma-io/explorer-backend) | [explorer-frontend](https://github.com/phantasma-io/explorer-frontend)
