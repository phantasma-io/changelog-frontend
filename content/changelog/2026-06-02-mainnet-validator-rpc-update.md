---
title: Mainnet validator and RPC update deployed
publishedAt: 2026-06-02T23:33:56Z
tags:
  - mainnet
  - rpc
  - validators
summary: Mainnet is running updated validator and RPC builds with the VM previous-context fix now live, clearer special-resolution failure logging, and an RPC fix for invalid-address input.
---

- Mainnet is now running updated validator and RPC builds.
- The VM `Runtime.PreviousContext` fix is now live on mainnet. Contracts that read `Runtime.Context` and `Runtime.PreviousContext` see stable caller identity through same-contract helper frames, cross-contract calls, deep nested calls, constructors, upgrade triggers, and failed contract switches.
- Validators now log special-resolution failures as errors, making operational issues easier to spot.
- RPC no longer crashes when event reconstruction encounters an invalid address; these cases are now handled cleanly and are covered by new regression tests.
