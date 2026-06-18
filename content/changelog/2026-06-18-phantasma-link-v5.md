---
title: Phantasma Link v5 is here
publishedAt: 2026-06-18T04:15:00Z
tags:
  - sdk
  - tooling
  - wallet
summary: Phantasma Link v5, the new dApp-to-wallet connection protocol, is now stable. The specification is published and the TypeScript SDK ships the v5 client.
---

- Phantasma Link v5, the new dApp-to-wallet connection protocol, is now stable (specification v1.0), and the v5 client is available in the TypeScript SDK (`phantasma-sdk-ts 0.10.1`).
- One structured message envelope (a JSON-RPC 2.0 profile) replaces the old string protocol and works across every transport, so requests are typed, independent, and can run concurrently.
- A capability handshake lets the dApp and wallet agree up front on supported methods, chains, transaction formats, payload sizes, and features, instead of guessing from a version number.
- Every session is end-to-end encrypted with NaCl and is a real, revocable session; relays only ever see ciphertext.
- The same envelope runs over several transports: the Ecto browser extension, a desktop loopback channel (now bound to localhost only), a mobile deeplink path, and a self-hosted relay for large payloads and cross-device pairing.
- Mobile and iOS are first-class: the deeplink path needs no wallet-hosted local server and keeps working even when the relay is down.
- The old ~32 KB request limit is gone. Transactions can now carry up to the chain's real ceiling of 1 MiB of metadata and 32 MiB per transaction.
- Existing v1–v4 dApps keep working. Phantasma Link v5 is purely the connection layer and changes nothing on the chain, validators, or RPC.

---

```
npm update --save phantasma-sdk-ts
```

[Phantasma Link v5 specification](https://github.com/phantasma-io/phantasma-sdk-ts/blob/main/spec/phantasma-link-v5.md) | [phantasma-sdk-ts on npm](https://www.npmjs.com/package/phantasma-sdk-ts)
