---
title: TOMB 2.1.0 and pha-deploy 0.5.0 released
publishedAt: 2026-03-28T22:30:00Z
tags:
  - tooling
summary: "Token attach is now supported end to end: TOMB recognizes onAttach triggers, and pha-deploy can attach a compiled contract to an existing token."
---

- `TOMB 2.1.0` adds support for the token `onAttach` trigger, with compiler tests for both simple and stateful cases.
- `pha-deploy 0.5.0` adds `contract attach`, so a compiled VM contract can be attached to an existing token without creating a new one.
- The CLI can now pin an exact `pha-tomb` binary through `--compiler` or `PHA_TOMB_PATH`, which matters on machines with multiple compiler builds.
- `pha-deploy --version` now reports both the CLI version and the `pha-tomb` binary that is actually being used.

---

[pha-tomb](https://www.nuget.org/packages/pha-tomb) | [pha-deploy](https://www.npmjs.com/package/pha-deploy)

```bash
dotnet tool install --global pha-tomb
dotnet tool update --global pha-tomb
npm i -g pha-deploy
```
