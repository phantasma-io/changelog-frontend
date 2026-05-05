---
title: Mainnet validator and RPC update deployed
publishedAt: 2026-05-05T03:05:00Z
tags:
  - mainnet
  - rpc
  - validators
summary: Mainnet is running updated validator and RPC builds with reward-calculation fixes, Phoenix genesis token-state repairs, and the April resolution set.
---

- Mainnet is now running updated validator and RPC builds.
- The claimable KCAL / staking booster reward calculation fix is active, and RPC now mirrors the validator-side calculation for developers reading reward data through the API.
- The Phoenix genesis token-state repair has been applied. This corrects token state inherited from genesis, including VM-facing token flags, token-backed contract registry rows, and missing token ABI rows.
- April 2026 inflation and Soul Master rewards have been applied on mainnet.
- Token `Notify` events for token operations are fixed, improving event data for wallets, explorers, and indexers that consume token activity.
- Historical replay compatibility was tightened for earlier mainnet behavior, keeping replay consistent without relying on broad gas-tolerance exceptions.
- Validator consensus handling now rejects stale higher-term Raft votes before clearing the active leader.
- The public status dashboard has also been updated to read validator heights and recent block samples from the current status endpoint.
