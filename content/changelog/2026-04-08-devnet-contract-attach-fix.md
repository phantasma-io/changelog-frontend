---
title: Devnet contract attach fixed
publishedAt: 2026-04-08T22:00:00Z
tags:
  - devnet
  - validators
summary: The devnet chain update fixes token contract attach by running the attached contract constructor during registration.
---

- `Nexus.AttachTokenContract` now uses the same registration path as fresh token-backed contract creation.
- Attached token contracts now run their constructor during registration, so storage-backed fields such as `_owner` are initialized before owner checks, trigger execution, or getter calls read them.
- This fixes attached contracts that immediately read constructor-initialized state after attach.

---

<https://deploy-devnet.phantasma.info/>
