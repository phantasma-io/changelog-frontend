---
title: Phantasma CLI tools updated for RPC transaction decoding and Node 22
publishedAt: 2026-05-17T18:28:50Z
tags:
  - tooling
summary: pha-decode now handles RPC carbonTxData and JSON transaction objects directly, while pha-deploy receives a Node 22 maintenance refresh.
---

- `pha-decode 0.3.2` and `pha-deploy 0.5.1` are now published on npm as separate Phantasma CLI tooling packages.
- `pha-decode` can now decode payload-only RPC `carbonTxData` by passing the matching `--carbon-tx-type`.
- `pha-decode tx --rpc-json tx.json` and `pha-decode tx --rpc-json -` accept a raw `getTransaction` result object or a JSON-RPC response, so copied RPC output can be decoded without manually rebuilding a full transaction hex string.
- Direct `carbonTxData` decoding can include optional RPC context such as payload, expiration, gas payer, gas limit, and signature count when that data is available.
- Transaction input validation is stricter: the CLI rejects mixed transaction input modes and requires an explicit Carbon transaction type for payload-only data.
- `pha-deploy 0.5.1` refreshes the CLI runtime and dependency baseline for Node.js 22 while preserving the existing contract compile, deploy, upgrade, and attach workflow.

---

[pha-decode](https://www.npmjs.com/package/pha-decode) | [pha-deploy](https://www.npmjs.com/package/pha-deploy) | [pha-decode source](https://github.com/phantasma-io/pha-decode/tree/v0.3.2) | [pha-deploy source](https://github.com/phantasma-io/pha-deploy/tree/v0.5.1)

```bash
npm update -g pha-decode
npm update -g pha-deploy
```
