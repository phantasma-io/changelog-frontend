---
title: Phantasma Link v5 connects to browser-extension wallets
publishedAt: 2026-09-30T22:00:00Z
tags:
  - sdk
  - tooling
  - wallet
summary: A dApp in the browser can now reach an extension wallet over Phantasma Link v5 directly, with no pairing step.
---

- Published latest versions: `phantasma-sdk-ts 0.19.0` and `phantasma-link-react 0.3.0`.
- The Phantasma Link v5 specification **1.1** adds section 6.1. It defines how a browser-extension wallet connects to a web page.
- The wallet puts `window.phantasmaLink` on the page before the page's scripts run. The dApp sends its requests to that object.
- `phantasma-sdk-ts` adds the client for it, `PhantasmaLink5.injected()`. `findInjectedProvider()` checks whether an extension wallet is present on the page.
- `phantasma-link-react` adds the `injected` transport. It needs no pairing step. When an extension wallet is installed, the store picks it by default.
- The Link test site offers the **Extension** option in its v5 panel.
- The Aura browser extension uses this connection.

---

[Phantasma Link v5 specification](https://github.com/phantasma-io/phantasma-sdk-ts/blob/main/spec/phantasma-link-v5.md) | [phantasma-sdk-ts](https://www.npmjs.com/package/phantasma-sdk-ts) | [phantasma-link-react](https://www.npmjs.com/package/phantasma-link-react) | [Link test site](https://link-test.phantasma.info/)

```bash
npm install phantasma-sdk-ts@latest
npm install phantasma-link-react@latest
```
