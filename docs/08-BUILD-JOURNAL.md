# Build journal: Change Receipt

[Code tour](03-CODE-TOUR.md) · [Actual verification](VERIFICATION.md)

This is a retrospective teaching narrative about the implementation in this repository. It is not a verbatim conversation, fabricated team debate or hidden chain-of-thought transcript. The design explanations below are reviewable rationales tied to the source. Dates and check results belong to the verification record.

## The starting problem

A new teammate needs to understand one tiny change without a meeting.

The main temptation was to make the project larger than its learning target. The useful boundary is **git diffs and reproducible explanations**. A finished small example lets you inspect the whole path and ask what each part contributes. Extra infrastructure would add more things to configure before the central idea became clear.

## The first contract

The helper reads the Git index (staged content), never changes it, and leaves intent and verification for a human to write. The two-file demo changes its opening time from 13:00 to 14:00 in a real small commit. Later teaching/tool commits are separate.

The contract turned broad intent into examples that can disagree with an implementation. That matters because a plausible-looking result can hide a wrong boundary rule. The examples in the concepts guide were chosen to expose those distinctions, not to make the demo look flawless.

## Decision note 1: Read the index, not the working tree

A reviewer receives committed content. Saved content is not necessarily the next commit. The helper therefore reads the same staging boundary that Git will commit. A working-tree diff answers a different question.

**What a learner should challenge:** Explain which comparison git diff, git diff --cached and git show make.

**Evidence to consult:** inspect the owning source file, the contract examples and the verification scope. If your alternative satisfies the same behavior with a different structure, compare the maintenance cost instead of assuming one syntax is automatically correct.

## Decision note 2: Keep the receipt mostly human-authored

The code can show a patch, but it cannot honestly infer why you wanted it or certify a test you did not run. Placeholders make the missing human explanation visible.

**What a learner should challenge:** Write an intent that describes a user outcome rather than a filename.

**Evidence to consult:** inspect the owning source file, the contract examples and the verification scope. If your alternative satisfies the same behavior with a different structure, compare the maintenance cost instead of assuming one syntax is automatically correct.

## Decision note 3: Use execFileSync with an argument array

The command is fixed and read-only. Arguments are passed directly to Git, without a shell that might interpret spaces or operators. Synchronous execution keeps this tiny CLI easy to trace.

**What a learner should challenge:** Explain why blocking is acceptable here but often undesirable inside a busy HTTP server.

**Evidence to consult:** inspect the owning source file, the contract examples and the verification scope. If your alternative satisfies the same behavior with a different structure, compare the maintenance cost instead of assuming one syntax is automatically correct.

## What the checks contributed

The Git fixture forced staged and saved content to differ. That made the command boundary observable rather than relying on an ordinary clean repository where both comparisons might look similar.

The record in VERIFICATION.md reports actual local observations. A GitHub Actions workflow is provided, but its remote result must be inspected separately after a push.

## What you should do differently on your own build

Start from the same user need but write your own examples first. Choose a small variation from the story list. Predict behavior, implement a slice and compare the result with your prediction. The reference helps you judge a finished result; your journal should record your own uncertainties and discoveries rather than adopting this narrative as if you experienced it.

## The handoff

The next learner can start from README, locate `stagedPatch`, reproduce the example table and attempt one bounded story. That is the intended handoff quality: a working result plus enough evidence and explanation to continue safely. The six practice stories remain unfinished for the learner.
