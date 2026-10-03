# M001: architecture decision laboratory

[Expanded workshop map](WORKBOOK-INDEX.md) · [Repository overview](../README.md)

Architecture at this scale means assigning responsibilities and avoiding unnecessary synchronization. You do not need a distributed system diagram to make a consequential design choice. A small function boundary, a stable identifier or one CSS owner can determine whether a later change stays understandable.

## Decision review 1: Read the index, not the working tree

**Reference rationale:** A reviewer receives committed content. Saved content is not necessarily the next commit. The helper therefore reads the same staging boundary that Git will commit. A working-tree diff answers a different question.

**Question to resolve:** Explain which comparison git diff, git diff --cached and git show make.

### Write competing proposals

Proposal A is the reference approach. Proposal B must be a plausible alternative, not an obviously broken straw man. Describe what each stores, what each derives, which boundary each validates and where visible feedback occurs. For a static page, describe source order, container/child ownership and content behavior instead of inventing application state.

### Use the same acceptance examples

Run both proposals against the same ordinary case, boundary and future-change scenario. If they produce different behavior, decide whether the difference is permitted by the contract. If both satisfy the contract, compare the number of facts a maintainer must keep synchronized and the amount of unrelated work needed for the next feature.

| Criterion | Reference proposal | Alternative proposal | Evidence needed |
|---|---|---|---|
| Meets current user contract | Fill in | Fill in | One discriminating example |
| Owns each fact in one place | Fill in | Fill in | Source or state diagram |
| Handles failure or missing input | Fill in | Fill in | Error/recovery sequence |
| Supports the next small story | Fill in | Fill in | Proposed bounded diff |

### Record the decision with a reversal condition

Write: “I choose A/B because this concrete example shows this cost. I would revisit the choice if this specific requirement appeared.” A reversal condition prevents the decision from becoming a slogan. Do not use a hypothetical million-user future to justify complexity that teaches nothing about the present example.

**Source anchor:** `src/receipt.js` and `tools/receipt.mjs`. Inspect the actual dependency direction; a diagram that names layers but cannot identify a call or data flow is incomplete.

## Decision review 2: Keep the receipt mostly human-authored

**Reference rationale:** The code can show a patch, but it cannot honestly infer why you wanted it or certify a test you did not run. Placeholders make the missing human explanation visible.

**Question to resolve:** Write an intent that describes a user outcome rather than a filename.

### Write competing proposals

Proposal A is the reference approach. Proposal B must be a plausible alternative, not an obviously broken straw man. Describe what each stores, what each derives, which boundary each validates and where visible feedback occurs. For a static page, describe source order, container/child ownership and content behavior instead of inventing application state.

### Use the same acceptance examples

Run both proposals against the same ordinary case, boundary and future-change scenario. If they produce different behavior, decide whether the difference is permitted by the contract. If both satisfy the contract, compare the number of facts a maintainer must keep synchronized and the amount of unrelated work needed for the next feature.

| Criterion | Reference proposal | Alternative proposal | Evidence needed |
|---|---|---|---|
| Meets current user contract | Fill in | Fill in | One discriminating example |
| Owns each fact in one place | Fill in | Fill in | Source or state diagram |
| Handles failure or missing input | Fill in | Fill in | Error/recovery sequence |
| Supports the next small story | Fill in | Fill in | Proposed bounded diff |

### Record the decision with a reversal condition

Write: “I choose A/B because this concrete example shows this cost. I would revisit the choice if this specific requirement appeared.” A reversal condition prevents the decision from becoming a slogan. Do not use a hypothetical million-user future to justify complexity that teaches nothing about the present example.

**Source anchor:** `src/receipt.js` and `tools/receipt.mjs`. Inspect the actual dependency direction; a diagram that names layers but cannot identify a call or data flow is incomplete.

## Decision review 3: Use execFileSync with an argument array

**Reference rationale:** The command is fixed and read-only. Arguments are passed directly to Git, without a shell that might interpret spaces or operators. Synchronous execution keeps this tiny CLI easy to trace.

**Question to resolve:** Explain why blocking is acceptable here but often undesirable inside a busy HTTP server.

### Write competing proposals

Proposal A is the reference approach. Proposal B must be a plausible alternative, not an obviously broken straw man. Describe what each stores, what each derives, which boundary each validates and where visible feedback occurs. For a static page, describe source order, container/child ownership and content behavior instead of inventing application state.

### Use the same acceptance examples

Run both proposals against the same ordinary case, boundary and future-change scenario. If they produce different behavior, decide whether the difference is permitted by the contract. If both satisfy the contract, compare the number of facts a maintainer must keep synchronized and the amount of unrelated work needed for the next feature.

| Criterion | Reference proposal | Alternative proposal | Evidence needed |
|---|---|---|---|
| Meets current user contract | Fill in | Fill in | One discriminating example |
| Owns each fact in one place | Fill in | Fill in | Source or state diagram |
| Handles failure or missing input | Fill in | Fill in | Error/recovery sequence |
| Supports the next small story | Fill in | Fill in | Proposed bounded diff |

### Record the decision with a reversal condition

Write: “I choose A/B because this concrete example shows this cost. I would revisit the choice if this specific requirement appeared.” A reversal condition prevents the decision from becoming a slogan. Do not use a hypothetical million-user future to justify complexity that teaches nothing about the present example.

**Source anchor:** `src/receipt.js` and `tools/receipt.mjs`. Inspect the actual dependency direction; a diagram that names layers but cannot identify a call or data flow is incomplete.

## A compact decision record you can copy

```text
Context and user need:
Current invariant:
Proposal A:
Proposal B:
Discriminating example:
Observed or predicted outcomes, clearly labeled:
Decision and reason:
Cost accepted:
Revisit when:
Verification still needed:
```

## Avoid accidental scope expansion

A new abstraction should answer a problem you can name in the current code or selected story. If the main benefit is that it looks more professional, ask what specific change becomes easier and what new concepts a junior now has to learn. Keep the reference small enough to trace.

## Transfer the review habit

What evidence would let someone distinguish your intended change from accidental edits?

Use that question to compare this project with its paired curriculum repository. Cite the actual source or guide you inspected; do not claim the other repository uses a pattern merely because its name sounds related. Your comparison may conclude that the shared learning concept appears in a different implementation.
