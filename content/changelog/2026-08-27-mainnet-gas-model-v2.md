---
title: Gas model v2 is live on mainnet
publishedAt: 2026-08-27T23:17:45Z
tags:
  - mainnet
  - validators
  - rpc
summary: Mainnet now prices a transaction by the work it performs and the state it keeps. The transaction bytes that used to travel for free are billed, storage carries a real refundable deposit, every settled fee is burned, and the mempool is ordered by what a sender commits.
---

Mainnet switched to gas model v2 on 27 August. The governance resolution settled in block [9075629](https://explorer.phantasma.info/block/9075629), and block [9075630](https://explorer.phantasma.info/block/9075630) is the first block produced under the new rules. Devnet has run the model since July and testnet followed in August, so mainnet is the last stop of a rollout that spent two months proving itself.

- Gas is priced from measured work. The unit comes from the network's own basic operation: a plain token transfer costs **10 gas units**, and everything else is priced against that. The cost of every operation the virtual machine performs was measured on the live mainnet validators, taken as medians per machine, with the slowest machine setting each number. Those measurements are frozen into the release.
- Computation is charged by the size of the work it does. A routine contract call costs about what it always did. A script that moves large amounts of data, or runs big-number multiplication, division or exponentiation, is now billed for the size it works on.
- A transaction pays for the bytes it puts into the block, its own envelope included. The price per byte is unchanged; the envelope simply used to ride for free. This is the visible part of the reform: a script-based transfer, the shape most exchanges and older integrations send, now costs about **5x** what it did.
- Everything paid in gas on mainnet is burned. Honest prices on real usage mean proportionally more KCAL leaving supply.
- Every settled bill has a floor of **0.001 KCAL**, transactions that fail included, and an offer below that floor is refused before it enters the mempool.
- The mempool is ordered by what a sender commits. A higher gas offer takes an earlier place, and a full mempool makes room by dropping the lowest offer. The offer has to be backed: a validator checks that the paying account really holds it, so an account with nothing behind it can no longer occupy a place in line while real users wait.
- Keeping data on-chain now costs what permanent state is worth. A row of state escrows **0.002 SOUL**, which is **100,000x** the old amount and works out to about **2,000 SOUL for a full gigabyte** of chain state. It stays a deposit: whoever removes the row gets back exactly what that row paid in, down to the atom, even if the price moved in between, because every paid row now carries its own escrow record. For scale, the previous generation of Phantasma locked a staked SOUL per 40 KB, about **12x** more SOUL for the same amount of data, and at today's prices a gigabyte of permanent state costs about **$25** here against about **$720,000** on Solana.
- Sending SOUL or KCAL to an account that already holds it creates no row and no deposit, so exchange flows are untouched.
- Every block now carries the address of the validator that produced it, signed as part of the block.
- A fee can be calculated before the transaction is sent. `getGasConfig` publishes the live parameters, `estimateTransaction` prices a transaction against the current chain state, and the SDKs carry the same calculation.
- The model already holds the economics of **sidechains**: a share of every fee for the block producer, and a share for the application that generated it. Both ship at zero on mainnet and turn on with a single governance resolution.
- Transaction format, signatures, addresses, expiry, RPC methods and SDK call patterns are all unchanged.

If your service sends script-based transfers, three numbers are worth checking. Set the gas budget, gas price times gas limit, to at least **0.05 KCAL**, because an offer below the settled bill aborts the transfer, and unused gas comes back at settlement. Keep a SOUL float on the paying wallet for deposits on tokens sent to a fresh address, where **1 SOUL** covers 500 new recipients and **10 SOUL** covers 5,000. And if you send native transfers with an explicit data limit, raise it to **1,000,000**, because the old default of 1,000 no longer covers even one fresh recipient row.

---

[Mainnet Explorer](https://explorer.phantasma.info/) | [Activation block](https://explorer.phantasma.info/block/9075630)
