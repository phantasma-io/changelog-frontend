---
title: Mainnet validator and RPC update with May 2026 inflation deployed
publishedAt: 2026-06-11T00:54:52Z
tags:
  - mainnet
  - testnet
  - rpc
  - validators
summary: Mainnet is running updated validator and RPC builds. May 2026 inflation and Soul Master rewards have been applied, and a broad round of security hardening and defense-in-depth improvements is now live on mainnet.
---

- Mainnet is now running updated validator and RPC builds.
- May 2026 inflation and Soul Master rewards have been applied on mainnet.
- This release brings a broad round of security hardening and adds another layer of defense-in-depth across the validator and RPC.
- The VM enforces robust execution guardrails, with firm limits on call depth, nesting, structure size, and large intermediate values, so contract execution stays predictable and safe.
- Input validation was reinforced across the serialization and decoding paths, so nodes confidently handle even malformed or oversized data.
- Network-layer protections were strengthened with tighter connection and message-size limits, keeping nodes stable under heavy network load.
- Block and transaction size limits were tightened to keep block production lean and predictable.
- Consensus failover and leader recovery are faster and more reliable.
- The validator status endpoint is faster and more resilient, served from a cached snapshot, protected against slow connections, and with more headroom for operators.
- VM opcode handling was refined and now ships with broader test coverage.
- RPC added connection limits and request rate limiting to keep public mainnet endpoints fast and responsive under load, and event reconstruction no longer emits a duplicated NFT mint event.
- These same validator and RPC builds are now also running on testnet, without the inflation resolution.

---

[May 2026 inflation transaction](https://explorer.phantasma.info/en/transaction?id=7D0468E5AD20FD78D4BB4B81B15928D782217A765228750B249F0F648FAC0ED3) | [Soul Master rewards transaction](https://explorer.phantasma.info/en/transaction?id=56E0830D43D7402F329F026CEC06042DB7677F580215D8A6F376B47A9F4E50C6)
