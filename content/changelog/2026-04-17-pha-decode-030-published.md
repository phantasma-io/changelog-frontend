---
title: pha-decode 0.3.0 published
publishedAt: 2026-04-17T23:24:15Z
tags:
  - tooling
summary: Address derivation support is now available in pha-decode, with stdin handling for private inputs and redacted CLI output.
---

- `pha-decode 0.3.0` is now published on npm; update the global CLI before using the new address tools.
- `pha-decode address` can now derive Phantasma addresses from WIF, 32-byte private keys, modern BIP39 seed phrases, and legacy Poltergeist seed phrases.
- Modern seed phrase derivation supports an explicit `--index`; legacy Poltergeist seed phrases support `--legacy-password` for old wallet recovery flows.
- Private inputs are redacted from CLI output, and `--stdin` lets scripts pass WIF, private key, or seed phrase values without putting them directly in command arguments.

---

[pha-decode](https://www.npmjs.com/package/pha-decode)

```bash
npm update -g pha-decode
```
