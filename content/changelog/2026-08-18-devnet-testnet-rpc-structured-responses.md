---
title: Devnet and testnet RPC add structured responses on new v2 routes
publishedAt: 2026-08-18T03:27:21Z
tags:
  - devnet
  - testnet
  - rpc
summary: The latest RPC build is live on devnet and testnet. New v2 routes answer with real JSON values instead of packed strings, name the governance calls carried by special resolutions, and send large answers without building them in memory first, while the v1 routes keep answering exactly as before.
---

- Devnet and testnet RPC are running the latest build.
- Two new routes answer in a structured format, `/rpc/v2` for JSON-RPC and `/api/v2` for REST. They serve the same methods as v1, so the only change in your client is the endpoint it points at.
- Token, series, NFT, and organization property values arrive as real JSON. A property the chain stores as an array or a structure comes back as `"[{\"div\":\"10000\",\"mul\":\"25\"}]"` on v1 and as `[{"div":"10000","mul":"25"}]` on v2, so the second parse step is gone.
- Special resolution calls are decoded by name, with their arguments typed per method, including the VM migration calls they carry.
- Extended event data is decoded by event kind, covering token creation, series creation, market orders, and special resolutions.
- Numbers stay text. Chain values are big integers, and answering them as JSON numbers would lose precision.
- The v1 routes are unchanged. `/rpc` and `/api/v1` keep returning the packed strings that deployed clients read today, so applications move when they are ready.
- Large answers are written to the connection as they are produced, for REST as well as JSON-RPC, instead of being assembled in memory first, and the memory a big answer uses is released sooner.
- Block and transaction reads repeat less work. Transaction message data is written straight into the response, block input is read without copying it first, and the gas payer is resolved once per sender instead of once per transfer.
- The published API reference now carries a v2 document next to v1.

---

[Devnet RPC reference](https://devnet.phantasma.info/swagger/index.html) | [Testnet RPC reference](https://testnet.phantasma.info/swagger/index.html)
