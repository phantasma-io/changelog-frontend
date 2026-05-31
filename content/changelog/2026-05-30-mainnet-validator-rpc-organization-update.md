---
title: Mainnet validator and Phantasma RPC update deployed
publishedAt: 2026-05-30T21:03:14Z
tags:
  - mainnet
  - rpc
  - validators
summary: Mainnet is running updated validator and Phantasma RPC builds with token semantics V3, SOUL masters membership repair, and organization RPC endpoints.
notice: "The new organization RPC reads are not used by the explorer yet. The explorer already showed the correct Soul Master count before this rollout, and it continues to show the correct count after the rollout."
---

- Mainnet is now running updated validator and Phantasma RPC builds.
- Token semantics V3 is active on mainnet. Staking organization membership now stays aligned when a clean unstake drops an address below the configured threshold.
- Token metadata validation now rejects small-fungible staking organization thresholds that require the big-integer representation, preventing new malformed small-fungible staking metadata from being admitted.
- The SOUL masters organization repair has been applied: 74 stale below-threshold members were removed, and 13 requalified member timestamps were rewritten from the audited repair payload.
- Post-deployment verification for the SOUL masters repair reported a clean public row check and a clean watcher scan, with no remaining missing eligible members or bad stake values in the audited range.
- `stake.GetUnclaimed` now reads claimable KCAL without mutating stake state, so reward previews and read-only checks do not alter validator-side staking rows.
- Phantasma RPC now exposes organization reads through `getOrganization`, `getOrganizations`, `getOrganizationMembers`, and `getOrganizationMember`, with organization-name queries and cursor pagination for member lists.
- Cached JSON-RPC responses now preserve embedded result objects correctly when the response is served from cache.

---

[Token semantics V3 transaction](https://explorer.phantasma.info/en/transaction?id=19F66F589D546AABBB35A3485715193BA68952559FB200EC59699AF75B123E69) | [SOUL masters repair transaction](https://explorer.phantasma.info/en/transaction?id=ABBD3EC38644DE8618B44BD4B4CD4406867C7D393A1C7C66BA233C5E0B51AEBE)
