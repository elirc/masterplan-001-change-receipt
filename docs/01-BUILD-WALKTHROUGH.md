# Building Change Receipt, one decision at a time

[Learning route](00-START-HERE.md) · [Code tour](03-CODE-TOUR.md)

This is a reconstruction of how to approach the finished reference. It explains visible design choices; it is not a transcript of hidden reasoning or a claim that a fictional team performed these steps.

## Start from the contract

The helper reads the Git index (staged content), never changes it, and leaves intent and verification for a human to write. The two-file demo changes its opening time from 13:00 to 14:00 in a real small commit. Later teaching/tool commits are separate.

The smallest useful result answers this user need: A new teammate needs to understand one tiny change without a meeting. Write the examples before choosing file names. Keep the scope small enough that the decisive behavior fits in one trace.

## Step 1: Start with a two-file promise

Read demo/README.md and demo/notice.txt before inspecting the helper. The first learning task is deliberately a text change: correct an opening time while leaving the explanatory file untouched. Write the intended before and after sentence, then compare that expectation with the actual patch. If the diff contains another change, decide whether it belongs in this commit rather than accepting it because it happens to be saved.

**Pause and produce evidence:** Nothing staged. Predict the outcome, then compare it with the reference. In your notes, distinguish what the code says should happen from what you actually observed.

## Step 2: Separate three snapshots

Git gives you a working tree, an index and committed history. A useful exercise is to make those three disagree on purpose in a scratch branch. The committed notice can say 14:00, the staged notice 15:00, and the saved notice 16:00. Predict the result of each diff before running it. This demonstrates why an editor tab is insufficient evidence of what a commit contains.

**Pause and produce evidence:** Stage 14:00; save 15:00 afterward. Predict the outcome, then compare it with the reference. In your notes, distinguish what the code says should happen from what you actually observed.

## Step 3: Add a read-only helper

Open src/receipt.js and find the Git argument list. Then open tools/receipt.mjs to see the thin command-line adapter. The core returns strings; the adapter decides where to print them and how to report a Git failure. There is no automatic add, commit, push or generated claim of correctness. Keeping those effects out makes the tool safe to inspect and the workflow easier to understand.

**Pause and produce evidence:** Filename contains spaces. Predict the outcome, then compare it with the reference. In your notes, distinguish what the code says should happen from what you actually observed.

## Step 4: Verify the actual staging boundary

The automated regression creates a temporary Git fixture with its own name and email. It stages one version and then writes a different working-tree version. A useful test must assert both what the receipt includes and what it excludes. The fixture is removed only after checking that its resolved path is a specifically named child of the temporary directory. Your normal repository is not used as a destructive test fixture.

**Pause and produce evidence:** Filename contains spaces. Predict the outcome, then compare it with the reference. In your notes, distinguish what the code says should happen from what you actually observed.

## Keep the implementation reviewable

A useful commit has one understandable reason to exist. Separate the initial working slice, the checks that expose its important boundaries, and the teaching material that explains it. The published commits in this repository were assembled from verified working files; they are real commits, not fabricated evidence of a long historical development process. M001 additionally contains the actual two-file baseline and a separate opening-time correction.

For your own variation, commit at a point where the behavior and evidence agree. Describe the trigger, the resulting behavior and the check in the commit message or review note. Avoid mixing a rule change with unrelated formatting because it makes the learning decision harder to see.

## Stop before adding a platform

The next useful improvement is a sharper example or clearer explanation, not a database, account system or framework migration. Add an abstraction only when it names a real repeated responsibility. You should be able to describe what becomes easier to change after the abstraction and what new complexity it introduces.

**Independent design choice from the original brief:** Choose the smallest useful change and write its explanation yourself.

The reference made one choice, documented in the code tour. You may choose differently in a branch if you first revise the contract and acceptance examples. A deliberate alternative is a stronger learning artifact than an unexplained copy.
