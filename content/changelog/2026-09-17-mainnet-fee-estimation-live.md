---
title: Mainnet fee estimation is switched on
publishedAt: 2026-09-17T18:00:00Z
tags:
  - mainnet
  - rpc
summary: All three public mainnet nodes now run a transaction against current chain state and answer with its exact fee, contract calls included.
---

- The estimate service is running on mainnet. `pharpc1`, `pharpc2` and `pharpc3` all answer `estimateTransaction`.
- Send a node a serialized transaction and it runs that transaction against current chain state without broadcasting it. The answer carries the gas bill, the storage rows the transaction would create, the deposit and the refund, and the `maxGas` and `maxData` to sign it with.
- The signatures inside the transaction you send can be zero-filled dummies of the right length. The dry run skips signature checks, and the dummies keep the byte length the bill depends on, so a wallet can show the fee before it asks anyone to sign.
- The answer also says whether the transaction would fail, and why. A transfer from an account short of KCAL comes back with the reason and with both amounts, what it holds and what the fee needs.
- Contract calls are estimated the same way as any other transaction, and the public nodes answer contract reads as well, so a tool can price a call and read its result from the same node.
- The SDKs also calculate a fee on their own, with no round trip, and that covers transfers, mints, burns and token creation. The node estimate is useful primarily for contract calls because their price depends on what the code does when it runs, and the estimator runs it and provides the real fees consumed by the call.
