# Hints and answer directions

[Return to the stories](05-PRACTICE-STORIES.md)

There are intentionally no complete feature patches here. Use one hint, return to your code and produce evidence. Your design can differ from the reference when you state and verify the new contract.

## Story 01: Add an outcome sentence

**Hint 1 — ownership:** Begin from `receiptFor` in `src/receipt.js`. Extend the human receipt template with an explicit user-visible outcome, without inventing it from the diff.

**Hint 2 — reasoning:** Revisit the decision “Keep the receipt mostly human-authored”. Ask yourself: Write an intent that describes a user outcome rather than a filename.

**Answer direction:** A defensible solution demonstrates this observable result: A blank outcome is clearly a placeholder; the patch stays byte-for-byte intact. The exact code is not prescribed. If your change achieves that result by changing an unrelated original rule, revise either the implementation or the story contract explicitly.

**Self-review:** Could the UI or helper appear correct while the underlying rule remains wrong? Could the underlying calculation be correct while stale presentation misleads the user? Choose the question that applies and write one distinguishing example.

## Story 02: Distinguish an empty index

**Hint 1 — ownership:** Begin from the empty-patch branch of `receiptFor`. Improve the empty-index explanation with the next two read-only inspection commands.

**Hint 2 — reasoning:** Revisit the decision “Read the index, not the working tree”. Ask yourself: Explain which comparison git diff, git diff --cached and git show make.

**Answer direction:** A defensible solution demonstrates this observable result: A new learner can tell saved from staged without the tool automatically staging anything. The exact code is not prescribed. If your change achieves that result by changing an unrelated original rule, revise either the implementation or the story contract explicitly.

**Self-review:** Could the UI or helper appear correct while the underlying rule remains wrong? Could the underlying calculation be correct while stale presentation misleads the user? Choose the question that applies and write one distinguishing example.

## Story 03: Record a verification limitation

**Hint 1 — ownership:** Begin from the template returned by `receiptFor`. Add a section asking what a completed check does not prove.

**Hint 2 — reasoning:** Revisit the decision “Keep the receipt mostly human-authored”. Ask yourself: Write an intent that describes a user outcome rather than a filename.

**Answer direction:** A defensible solution demonstrates this observable result: A receipt can honestly say the text was checked but the real event time was not independently verified. The exact code is not prescribed. If your change achieves that result by changing an unrelated original rule, revise either the implementation or the story contract explicitly.

**Self-review:** Could the UI or helper appear correct while the underlying rule remains wrong? Could the underlying calculation be correct while stale presentation misleads the user? Choose the question that applies and write one distinguishing example.

## Story 04: Practice a rename-only review

**Hint 1 — ownership:** Begin from `stagedPatch`. On your own branch, rename the demo notice and write a receipt explaining the change.

**Hint 2 — reasoning:** Revisit the decision “Read the index, not the working tree”. Ask yourself: Explain which comparison git diff, git diff --cached and git show make.

**Answer direction:** A defensible solution demonstrates this observable result: Use git diff --cached --stat and the full patch to distinguish identity and content changes. The exact code is not prescribed. If your change achieves that result by changing an unrelated original rule, revise either the implementation or the story contract explicitly.

**Self-review:** Could the UI or helper appear correct while the underlying rule remains wrong? Could the underlying calculation be correct while stale presentation misleads the user? Choose the question that applies and write one distinguishing example.

## Story 05: Reject a misleading review sentence

**Hint 1 — ownership:** Begin from the Intent line that `receiptFor` leaves for a human. Create a practice receipt that says “no behavior change” for an opening-time edit, then repair the explanation.

**Hint 2 — reasoning:** Revisit the decision “Keep the receipt mostly human-authored”. Ask yourself: Write an intent that describes a user outcome rather than a filename.

**Answer direction:** A defensible solution demonstrates this observable result: The corrected sentence names the changed time and who depends on it. The exact code is not prescribed. If your change achieves that result by changing an unrelated original rule, revise either the implementation or the story contract explicitly.

**Self-review:** Could the UI or helper appear correct while the underlying rule remains wrong? Could the underlying calculation be correct while stale presentation misleads the user? Choose the question that applies and write one distinguishing example.

## Story 06: Teach a safe undo

**Hint 1 — ownership:** Begin from the opening-time commit shown by `git log --oneline -- demo/notice.txt`. Document git revert for a specifically identified demo change on a new practice branch.

**Hint 2 — reasoning:** Revisit the decision “Read the index, not the working tree”. Ask yourself: Explain which comparison git diff, git diff --cached and git show make.

**Answer direction:** A defensible solution demonstrates this observable result: Show the new reversal commit and verify that earlier history remains present. The exact code is not prescribed. If your change achieves that result by changing an unrelated original rule, revise either the implementation or the story contract explicitly.

**Self-review:** Could the UI or helper appear correct while the underlying rule remains wrong? Could the underlying calculation be correct while stale presentation misleads the user? Choose the question that applies and write one distinguishing example.

## Answers to the trace questions

Save 14:00 in demo/notice.txt → git add that exact file → save a further 15:00 edit without staging → stagedPatch runs git diff --cached → the receipt contains 14:00 while git diff shows the unstaged 15:00 change.

The expected examples are in the concepts table. Use them to check your reasoning, then supply a new example of your own. A copied sentence is not evidence that you can trace a changed input.

## When to ask for more help

Ask after you can show a concrete attempt, a specific uncertainty and an observation. Request a smaller hint before a full patch. If you do accept generated code, explain each changed line and run a counterexample you chose independently.
