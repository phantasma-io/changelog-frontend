---
title: Devnet validator and RPC update deployed
publishedAt: 2026-04-18T06:15:01Z
tags:
  - devnet
  - rpc
  - validators
summary: Devnet is running current validator and RPC builds with safer ION reconnect behavior, richer connection diagnostics, corrected Token event reconstruction, and smart-contract minting fixes.
---

- Devnet validators now back off failed ION reconnect attempts instead of repeatedly retrying unhealthy peers, and failed or mismatched handshakes are cleaned up more safely.
- Validator logs now report outbound ION connection failures with peer, target, endpoint, and socket error details, making producer connectivity issues easier to diagnose.
- RPC now shuts down ION producer connections more safely when failed connects or background read/write tasks are still unwinding.
- RPC now reconstructs Token module events more accurately from nested Token calls and governance SpecialResolution payloads, including transfer, burn, mint, and market-related paths.
- Smart-contract NFT minting on devnet includes same-token `Runtime.MintToken` context fixes, preserving the user witness while adding the token contract witness when a token contract mints its own NFTs.
- Duplicated-series `Runtime.MintToken` mints now derive stable Phantasma NFT ids from the series id and mint number, including empty-ROM follow-up mints.
- Token creation, deploy, attach, and upgrade lifecycle events now use Gen2-compatible string payloads, so event consumers can read token and contract names consistently.
- Validators also include special-resolution liveness recovery: if a leader stops proposing a pending special resolution while producers are caught up, producers can trigger a soft reelection without interrupting normal peer traffic.
