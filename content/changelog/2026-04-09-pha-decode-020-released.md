---
title: pha-decode 0.2.0 released
publishedAt: 2026-04-09T12:00:00Z
tags:
  - tooling
summary: The decoder now unwraps Carbon Phantasma wrappers into VM output, accepts full VM transaction hex, and falls back more cleanly when RPC only exposes script data.
---

- `pha-decode tx --hex` now accepts three exact input shapes in one path: Carbon signed transactions, full VM transaction hex, and raw VM script hex.
- Carbon `Phantasma` wrappers are now reconstructed into `output.vm`, so wrapped execution can be inspected without manually unpacking the envelope first.
- `Phantasma_Raw` payloads now decode the inner VM transaction exactly instead of being treated as opaque bytes.
- `tx --hash` still prefers `carbonTxData`, but now falls back to top-level RPC script data when full VM reconstruction is not possible.
- Input detection was tightened so raw VM hex is no longer misclassified as Carbon data just because the prefix happens to look valid.

---

[pha-decode](https://www.npmjs.com/package/pha-decode)

```bash
npm i -g pha-decode
```
