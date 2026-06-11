---
title: Devnet and testnet validator VM context fix deployed
publishedAt: 2026-05-31T15:51:37Z
tags:
  - devnet
  - testnet
  - validators
summary: Devnet and testnet validators are running the latest VM fix for Runtime.PreviousContext across nested contract calls, constructors, triggers, and failed switches.
---

- Devnet and testnet validators are now running the latest VM context fix.
- The rollout fixes `Runtime.PreviousContext` handling across same-contract helper frames, cross-contract calls, deep nested calls, constructors, upgrade triggers, and failed contract switches.
- Fresh VM executions now receive the explicit previous context that belongs to the runtime call, and nested contract switches restore that value after successful returns or faults.
- Contracts that inspect `Runtime.Context` and `Runtime.PreviousContext` should now see stable caller identity through nested contract flows.
- The validator update includes parity coverage for root calls, self-switch calls, multi-contract nested calls, constructors, upgrade triggers, and failed switches.
