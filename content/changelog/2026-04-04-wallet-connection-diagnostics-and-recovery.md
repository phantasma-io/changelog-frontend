---
title: Wallet connection diagnostics package published
publishedAt: 2026-04-04T20:00:00Z
tags:
  - frontend
  - wallet
summary: "`@phantasma/connect-react 0.1.2` was published with cleaner recovery from interrupted local wallet connections and clearer localhost diagnostics."
---

- `@phantasma/connect-react 0.1.2` is now published. Apps using the package should update to get the new Link connection handling.
- The package now cancels a pending local-socket connection when the page is closed or left, which reduces stuck connection state.
- The package now records more useful diagnostics for local wallet connection attempts, including which localhost socket hosts were tried and whether the page is running on a public site.
- When Brave blocks localhost access from a public site, the error message now points to the likely browser permission problem instead of showing a vague transport failure.

---

[@phantasma/connect-react](https://www.npmjs.com/package/@phantasma/connect-react)

```bash
npm update --save @phantasma/connect-react
```
