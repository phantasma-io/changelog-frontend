---
title: Token deployment frontend published with contract lifecycle support
publishedAt: 2026-03-29T05:00:00Z
tags:
  - devnet
  - frontend
summary: The devnet deployment frontend can now deploy, upgrade, and attach contracts alongside the existing token actions.
---

- A dedicated contract tab was added for custom contract deploy and upgrade, plus token attach and token contract upgrade.
- The UI accepts compiled `.pvm` and `.abi` artifacts directly and applies separate gas defaults per lifecycle action.
- Token attach and token contract upgrade use the token selected in the side panel as the target token.
- The frontend was also updated to `phantasma-sdk-ts 0.7.0` to match the newer Link signing support.

---

<https://deploy-devnet.phantasma.info/>

[Token Deployment UI](https://github.com/phantasma-io/phantasmaphoenix-gitbook/tree/main/developers/token-deployment-frontend.md) | [pha-deploy contract lifecycle commands](https://github.com/phantasma-io/phantasmaphoenix-gitbook/tree/main/developers/tools/pha-deploy.md)
