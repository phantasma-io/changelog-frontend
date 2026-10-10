---
title: Phantasma Link v5 specification 1.2
publishedAt: 2026-10-09T23:00:00Z
tags:
  - sdk
  - tooling
  - wallet
summary: Specification 1.2 adds a signing permission for dApps such as games, session time limits, and a relay that keeps the wallet's answer for a page that reloads.
---

- Published latest versions: `phantasma-sdk-ts 0.20.0`, `phantasma-link-react 0.4.0`, `PhantasmaPhoenix.Link 0.4.0`, and the Unity SDK core package `0.14.0`.
- The Phantasma Link v5 specification **1.2** is published. The SDKs, the relay and the Link test site follow it.
- A dApp that sends many small transactions, a game for example, can ask once for a **signing permission**. The wallet then signs transactions that only call the named contract methods without a prompt, for a set time and within a gas budget.
- The user picks how long a session lasts when approving it. Every session also ends after **7 days** without activity, and the dApp gets a notice when a session expires or is revoked.
- The relay carries a transaction of up to **32 MiB**. It keeps each message for 5 minutes, so a page that reloads or comes back from the background still gets the wallet's answer.
- Account answers no longer list NFT ids. Read an account's NFTs from the RPC.
- `phantasma-link-react` adds `signTransaction`, which returns a signed transaction without sending it. A session now survives a page reload.
- The Link test site adds a sign-only transfer, a read-only script run through the wallet, and the signing permission.

---

[Phantasma Link v5 specification](https://github.com/phantasma-io/phantasma-sdk-ts/blob/main/spec/phantasma-link-v5.md) | [phantasma-sdk-ts](https://www.npmjs.com/package/phantasma-sdk-ts) | [phantasma-link-react](https://www.npmjs.com/package/phantasma-link-react) | [PhantasmaPhoenix.Link](https://www.nuget.org/packages/PhantasmaPhoenix.Link) | [Link test site](https://link-test.phantasma.info/)

```bash
npm install phantasma-sdk-ts@latest
npm install phantasma-link-react@latest
dotnet package update PhantasmaPhoenix.Link
```
