---
title: "Phantasma Link v5 ecosystem: React bindings, relay, and playground"
publishedAt: 2026-06-18T04:05:00Z
tags:
  - sdk
  - tooling
  - wallet
summary: The Phantasma Link v5 ecosystem is live — React bindings, a public relay, and a side-by-side playground to build and test integrations.
---

- React bindings for Phantasma Link v5 are published as `phantasma-link-react` (renamed from `@phantasma/connect-react`). Wrap your app once, drop in a connect button, and call the typed `pha_*` methods through a small reactive store over the v5 client.
- A public relay is live at [link.phantasma.info](https://link.phantasma.info/). It is an end-to-end-blind WebSocket pub/sub server that carries large transactions, cross-device sessions, and wallet events while never seeing their content.
- A playground is live at [link-test.phantasma.info](https://link-test.phantasma.info/). It runs the same operations side by side over Phantasma Link v5 and the legacy v4, so you can compare them and try the cross-device relay (QR) and same-device deeplink flows.

---

```
npm install phantasma-link-react
```

[phantasma-link-react on npm](https://www.npmjs.com/package/phantasma-link-react) | [Relay](https://link.phantasma.info/) | [Playground](https://link-test.phantasma.info/)
