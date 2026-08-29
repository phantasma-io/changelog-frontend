---
title: Two hardening releases are live on mainnet validators
publishedAt: 2026-08-27T03:35:00Z
tags:
  - mainnet
  - validators
summary: Mainnet validators were updated twice in August, carrying the work of a security hardening campaign. Hostile input now ends in a refused request while the node keeps producing blocks, the parsing paths are fuzzed continuously, and a place in the transaction queue has to be paid for.
---

Mainnet validators were updated on 20 and 27 August, the first releases since June. The two of them carry two months of work, and most of that work went into one question: if someone sets out to halt this chain, split it, corrupt its state or drain it, what do they reach first, and is it closed?

- The campaign started from a written threat model, re-proved every earlier audit conclusion against the source, and pinned each confirmed finding with a test so it cannot come back quietly.
- Hostile input now ends in a refused request while the node keeps producing blocks. Malformed transactions, numbers wider than the machine accepts, overlong strings and payloads, unreadable token schemas and series definitions, offers the sender cannot afford: every one of them is answered with a reason.
- Anything that declares a size is checked against the bytes actually present, and a read query arriving from the network has a ceiling on the work it may spend in the virtual machine. One costly question can no longer tie up a validator.
- The paths that parse untrusted bytes are fuzzed continuously. Raw transactions, all three entry points that accept native transaction envelopes, and the market's stored data are driven with mutated and truncated input, and every one of them has to end in a verdict.
- A place in the transaction queue has to be paid for. A validator confirms the paying account holds what it offers before the transaction takes its place, orders the queue by offer, and drops the lowest offer when the queue is full.
- A stuck leader is now replaced without anyone stepping in. The cases that used to leave the network waiting are handled: signatures for a leader change expire on their own, a vote that stalls falls back to an election, and a leader still completing its handshake counts as alive.
- Validators also got faster. The leader used to re-execute every block it had just built, checking its own work a second time, and that check is now optional, which hands the network back the capacity it was spending on it. Block compression level became configurable, connections between nodes no longer wait on Nagle's algorithm, and a cache warm-up that used to fire at random became an explicit setting.

Both releases are live across the mainnet validator set.

---

[Mainnet Explorer](https://explorer.phantasma.info/) | [Network status](https://status.phantasma.info/)
