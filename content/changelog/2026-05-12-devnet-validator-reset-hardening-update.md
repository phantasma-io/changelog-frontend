---
title: Devnet validator hardening update deployed
publishedAt: 2026-05-12T16:30:00Z
tags:
  - devnet
  - validators
summary: "Devnet is running the latest validator build with VM/runtime hardening and status endpoint reliability fixes. Devnet data has also been reset to the mainnet chain state at block #8814786."
notice: "Devnet has been reset to the mainnet chain state at block #8814786. The network will diverge as new devnet transactions are produced."
---

- Devnet validators are now running the latest validator build.
- Bigint handling was tightened across JSON payloads, genesis data, and signed `Int256` parsing, rejecting malformed inputs more consistently.
- NFT mint and import flows now require the referenced series rows to exist, keeping token-series state stricter during contract testing.
- VM schema and sanitizer lifetime handling was hardened for contract execution paths.
- Validator status responses are protected against stalled HTTP connections, and memory usage logging is clearer for operators.

---
