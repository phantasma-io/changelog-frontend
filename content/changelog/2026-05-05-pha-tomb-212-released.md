---
title: pha-tomb 2.1.2 released
publishedAt: 2026-05-05T22:28:09Z
tags:
  - tooling
summary: pha-tomb 2.1.2 is available with NFT ownership-by-series compiler support.
---

- `pha-tomb 2.1.2` is now available on NuGet.
- The compiler adds `NFT.getOwnershipsBySeries(from, symbol, seriesID)`, emitting `Runtime.GetOwnershipsBySeries` for contracts that need NFT ownership ids filtered by series.

---

[pha-tomb](https://www.nuget.org/packages/pha-tomb)

```bash
dotnet tool update --global pha-tomb
```
