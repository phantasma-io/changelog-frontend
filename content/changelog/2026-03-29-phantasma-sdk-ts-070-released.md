---
title: phantasma-sdk-ts 0.7.0 released
publishedAt: 2026-03-29T04:30:00Z
tags:
  - sdk
summary: The SDK can now ask Phantasma Link to sign a prebuilt transaction directly, and signature failures now come back with clearer wallet errors.
---

- `phantasma-sdk-ts 0.7.0` adds `signPrebuiltTransaction`, which lets apps send an already-built transaction to the wallet for signing and get back signed hex ready for broadcast.
- Wallet error messages are now preserved instead of being collapsed into a generic signature failure.
- The SDK validates the returned signature against the connected account before handing back a signed transaction.
- This release builds on the `0.6.0` Link transport fixes and is mainly for apps that prepare transactions themselves before asking the wallet to sign.

---

[phantasma-sdk-ts](https://www.npmjs.com/package/phantasma-sdk-ts)

```bash
npm update --save phantasma-sdk-ts
```
