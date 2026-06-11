---
title: Mainnet RPC and validator reliability update
publishedAt: 2026-04-16T05:00:00Z
tags:
  - mainnet
  - rpc
  - validators
summary: Mainnet is running updated RPC and validator builds with safer ION connection recovery, cleaner API logging, special-resolution leader reelection, and contract-activation groundwork.
---

- RPC now recovers stale ION producer connections more safely, including a fix for connections that start closing while background send/read work is still unwinding.
- JSON-RPC response `id` values are preserved from incoming requests, including integer ids, string ids, null ids, and omitted ids.
- Expected empty-result reads and explicit client bad requests are separated from real RPC failures in logs, reducing error noise from normal account, block, token, NFT, transaction, and cache-miss paths.
- `GetBlockByHash` now returns HTTP 200 for a valid lookup that has no matching block instead of treating that miss as an API error.
- Mainnet validators now include special-resolution starvation leader reelection, allowing producers to request a soft reelection when a leader stops proposing the pending special resolution while the network remains otherwise connected.
- Validator operations logs are easier to read and correlate: Raft and network logs include peer nicknames, successful leader election is highlighted, file logs strip console color codes, ordinary log output is flushed periodically, and log lines use UTC timestamps.

Future contract groundwork is also included in the installed validator code, but smart contract deployment and execution remain inactive on mainnet for now.

- Configurable smart contract runtime logging is installed for later contract debugging, including VM trace output, halt failures, rejections, assertions, and unexpected exceptions.
- `Runtime.MintToken` now handles schema-backed NFT ROM and RAM payloads used by future smart contract mint flows.
- Token creation, contract deploy, and contract upgrade events now encode the affected symbol or contract name in the event payload for the future contract lifecycle path.
