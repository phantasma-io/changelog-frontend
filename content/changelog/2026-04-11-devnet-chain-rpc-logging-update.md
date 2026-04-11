---
title: Devnet chain and RPC logging update deployed
publishedAt: 2026-04-11T06:30:00Z
tags:
  - devnet
  - rpc
  - validators
summary: Devnet is now running updated chain and RPC builds with contract runtime logs, cleaner validator log files, corrected JSON-RPC response ids, and improved RPC connection recovery.
---

- Smart contract runtime logs are now written into validator logs with transaction context, covering contract trace output, script halt failures, VM errors, rejections, assertions, and unexpected exceptions.
- Validator file logs now remove terminal ANSI color sequences while keeping readable message text, so log files are no longer polluted with console color codes.
- Validator log lines now use UTC timestamps, making cross-host incident review and RPC/chain correlation easier.
- The devnet RPC now preserves JSON-RPC response `id` values from incoming requests, including integer ids, string ids, and null or omitted ids.
- RPC ION producer connections now detect stale producer sessions after unanswered outbound work and recover them instead of continuing to select a dead connection.
