# M001: mentor hints and answer directions

[Expanded workshop map](WORKBOOK-INDEX.md) · [Repository overview](../README.md)

Use this chapter after making an attempt. It provides reasoning directions and evaluation criteria, not finished feature patches. A learner can choose a different design when the revised contract is explicit and the evidence supports it.

## Retrieval card 01: answer direction

**Question:** Explain index through this project

The staged snapshot that the next ordinary commit records.

Look for a concrete connection to `src/receipt.js` or `tools/receipt.mjs`. A strong answer names an input or condition, the responsible operation and the resulting behavior. Merely repeating the vocabulary word is insufficient. If your example differs from the reference, check whether it is supported by the contract before treating a different outcome as a defect.

## Retrieval card 02: answer direction

**Question:** Explain argument array through this project

Separate command arguments passed to Git without composing a shell command.

Look for a concrete connection to `src/receipt.js` or `tools/receipt.mjs`. A strong answer names an input or condition, the responsible operation and the resulting behavior. Merely repeating the vocabulary word is insufficient. If your example differs from the reference, check whether it is supported by the contract before treating a different outcome as a defect.

## Retrieval card 03: answer direction

**Question:** Explain intent through this project

The human reason a change exists.

Look for a concrete connection to `src/receipt.js` or `tools/receipt.mjs`. A strong answer names an input or condition, the responsible operation and the resulting behavior. Merely repeating the vocabulary word is insufficient. If your example differs from the reference, check whether it is supported by the contract before treating a different outcome as a defect.

## Retrieval card 04: answer direction

**Question:** Explain evidence scope through this project

The specific behavior an actual check supports.

Look for a concrete connection to `src/receipt.js` or `tools/receipt.mjs`. A strong answer names an input or condition, the responsible operation and the resulting behavior. Merely repeating the vocabulary word is insufficient. If your example differs from the reference, check whether it is supported by the contract before treating a different outcome as a defect.

## Retrieval card 05: answer direction

**Question:** Predict: Nothing staged

Receipt explicitly says no staged changes

Look for a concrete connection to `src/receipt.js` or `tools/receipt.mjs`. A strong answer names an input or condition, the responsible operation and the resulting behavior. Merely repeating the vocabulary word is insufficient. If your example differs from the reference, check whether it is supported by the contract before treating a different outcome as a defect.

## Retrieval card 06: answer direction

**Question:** Predict: Stage 14:00; save 15:00 afterward

Receipt contains 14:00, not 15:00

Look for a concrete connection to `src/receipt.js` or `tools/receipt.mjs`. A strong answer names an input or condition, the responsible operation and the resulting behavior. Merely repeating the vocabulary word is insufficient. If your example differs from the reference, check whether it is supported by the contract before treating a different outcome as a defect.

## Retrieval card 07: answer direction

**Question:** Predict: Filename contains spaces

Argument-array invocation handles the path without shell splitting

Look for a concrete connection to `src/receipt.js` or `tools/receipt.mjs`. A strong answer names an input or condition, the responsible operation and the resulting behavior. Merely repeating the vocabulary word is insufficient. If your example differs from the reference, check whether it is supported by the contract before treating a different outcome as a defect.

## Retrieval card 08: answer direction

**Question:** Explain which comparison git diff, git diff --cached and git show make.

A reviewer receives committed content. Saved content is not necessarily the next commit. The helper therefore reads the same staging boundary that Git will commit. A working-tree diff answers a different question.

Look for a concrete connection to `src/receipt.js` or `tools/receipt.mjs`. A strong answer names an input or condition, the responsible operation and the resulting behavior. Merely repeating the vocabulary word is insufficient. If your example differs from the reference, check whether it is supported by the contract before treating a different outcome as a defect.

## Retrieval card 09: answer direction

**Question:** Write an intent that describes a user outcome rather than a filename.

The code can show a patch, but it cannot honestly infer why you wanted it or certify a test you did not run. Placeholders make the missing human explanation visible.

Look for a concrete connection to `src/receipt.js` or `tools/receipt.mjs`. A strong answer names an input or condition, the responsible operation and the resulting behavior. Merely repeating the vocabulary word is insufficient. If your example differs from the reference, check whether it is supported by the contract before treating a different outcome as a defect.

## Retrieval card 10: answer direction

**Question:** Explain why blocking is acceptable here but often undesirable inside a busy HTTP server.

The command is fixed and read-only. Arguments are passed directly to Git, without a shell that might interpret spaces or operators. Synchronous execution keeps this tiny CLI easy to trace.

Look for a concrete connection to `src/receipt.js` or `tools/receipt.mjs`. A strong answer names an input or condition, the responsible operation and the resulting behavior. Merely repeating the vocabulary word is insufficient. If your example differs from the reference, check whether it is supported by the contract before treating a different outcome as a defect.

## Retrieval card 11: answer direction

**Question:** What does your strongest check not prove?

Use the scope recorded in VERIFICATION.md; do not infer production readiness from a small local fixture.

Look for a concrete connection to `src/receipt.js` or `tools/receipt.mjs`. A strong answer names an input or condition, the responsible operation and the resulting behavior. Merely repeating the vocabulary word is insufficient. If your example differs from the reference, check whether it is supported by the contract before treating a different outcome as a defect.

## Retrieval card 12: answer direction

**Question:** What evidence would let someone distinguish your intended change from accidental edits?

Think of the working tree, index and commit as three photographs of the same file taken at different moments. A receipt describes the photograph about to be committed, not whichever photograph the editor happens to display. The helper can supply a patch; only the author can supply the intent and truthful evidence. Good automation makes that division clearer instead of inventing a story about why a change was made.

Look for a concrete connection to `src/receipt.js` or `tools/receipt.mjs`. A strong answer names an input or condition, the responsible operation and the resulting behavior. Merely repeating the vocabulary word is insufficient. If your example differs from the reference, check whether it is supported by the contract before treating a different outcome as a defect.

## Story 07: Compare saved and staged views

**First hint:** The desired improvement is “Help a learner distinguish two patches.” Start by identifying which existing boundary already knows the necessary information. Do not copy that information into new state until you can explain why derivation is insufficient.

**Second hint:** Follow this source-specific route: Add a read-only companion command; label each comparison; keep receipt generation tied to the index.. Keep each stage independently inspectable. If a step requires a policy choice, write the choice before implementing it.

**Third hint:** Your strongest completion evidence should establish: Staging 14:00 then saving 15:00 yields different labeled views.. Invent a plausible wrong implementation and make your example disagree with it.

**Decision still left to you:** Choose headings and the default view. The guide intentionally does not settle this. Evaluate your answer by clarity of the contract, consistency of the implementation and quality of verification, not by guessing the author's preferred wording.

## Story 08: Add a changed-file list

**First hint:** The desired improvement is “Give reviewers a short orientation before the patch.” Start by identifying which existing boundary already knows the necessary information. Do not copy that information into new state until you can explain why derivation is insufficient.

**Second hint:** Follow this source-specific route: Read staged filenames through Git arguments; handle names containing spaces; render names without replacing the full patch.. Keep each stage independently inspectable. If a step requires a policy choice, write the choice before implementing it.

**Third hint:** Your strongest completion evidence should establish: A spaced filename remains one item and an empty index gives zero items.. Invent a plausible wrong implementation and make your example disagree with it.

**Decision still left to you:** Choose whether names precede or follow intent. The guide intentionally does not settle this. Evaluate your answer by clarity of the contract, consistency of the implementation and quality of verification, not by guessing the author's preferred wording.

## Story 09: Add an optional receipt title

**First hint:** The desired improvement is “Let the author summarize one coherent change.” Start by identifying which existing boundary already knows the necessary information. Do not copy that information into new state until you can explain why derivation is insufficient.

**Second hint:** Follow this source-specific route: Accept an explicit title input; trim it; retain a visible placeholder for a missing title.. Keep each stage independently inspectable. If a step requires a policy choice, write the choice before implementing it.

**Third hint:** Your strongest completion evidence should establish: A title never changes staged content or invents test results.. Invent a plausible wrong implementation and make your example disagree with it.

**Decision still left to you:** Choose a length policy. The guide intentionally does not settle this. Evaluate your answer by clarity of the contract, consistency of the implementation and quality of verification, not by guessing the author's preferred wording.

## Story 10: Describe a binary-file change

**First hint:** The desired improvement is “Avoid pretending an unreadable patch contains a text explanation.” Start by identifying which existing boundary already knows the necessary information. Do not copy that information into new state until you can explain why derivation is insufficient.

**Second hint:** Follow this source-specific route: Stage a tiny disposable binary fixture; inspect Git's output; document the human explanation needed for that case.. Keep each stage independently inspectable. If a step requires a policy choice, write the choice before implementing it.

**Third hint:** Your strongest completion evidence should establish: The receipt preserves Git's actual description and labels the evidence limitation.. Invent a plausible wrong implementation and make your example disagree with it.

**Decision still left to you:** Choose a harmless fixture format. The guide intentionally does not settle this. Evaluate your answer by clarity of the contract, consistency of the implementation and quality of verification, not by guessing the author's preferred wording.

## Story 11: Report a missing Git repository

**First hint:** The desired improvement is “Make setup errors actionable.” Start by identifying which existing boundary already knows the necessary information. Do not copy that information into new state until you can explain why derivation is insufficient.

**Second hint:** Follow this source-specific route: Invoke the helper from a separate non-repository folder; catch the Git error at the CLI boundary; explain the correct working-directory requirement.. Keep each stage independently inspectable. If a step requires a policy choice, write the choice before implementing it.

**Third hint:** Your strongest completion evidence should establish: The CLI reports failure without creating a repository or staging anything.. Invent a plausible wrong implementation and make your example disagree with it.

**Decision still left to you:** Choose error wording and exit code. The guide intentionally does not settle this. Evaluate your answer by clarity of the contract, consistency of the implementation and quality of verification, not by guessing the author's preferred wording.

## Story 12: Compare a deletion receipt

**First hint:** The desired improvement is “Teach review of removed content.” Start by identifying which existing boundary already knows the necessary information. Do not copy that information into new state until you can explain why derivation is insufficient.

**Second hint:** Follow this source-specific route: Remove only a scratch demo copy; stage that deletion; describe which information is lost in the receipt.. Keep each stage independently inspectable. If a step requires a policy choice, write the choice before implementing it.

**Third hint:** Your strongest completion evidence should establish: The receipt shows the staged deletion and distinguishes it from an untracked missing file.. Invent a plausible wrong implementation and make your example disagree with it.

**Decision still left to you:** Choose the review question for the author. The guide intentionally does not settle this. Evaluate your answer by clarity of the contract, consistency of the implementation and quality of verification, not by guessing the author's preferred wording.

## Story 13: Add a newline investigation

**First hint:** The desired improvement is “Explain a surprising text diff.” Start by identifying which existing boundary already knows the necessary information. Do not copy that information into new state until you can explain why derivation is insufficient.

**Second hint:** Follow this source-specific route: Create a scratch text fixture without a final newline; stage a newline-only edit; compare visual editor content with Git output.. Keep each stage independently inspectable. If a step requires a policy choice, write the choice before implementing it.

**Third hint:** Your strongest completion evidence should establish: The guide identifies the exact byte-level change without calling it an event-time change.. Invent a plausible wrong implementation and make your example disagree with it.

**Decision still left to you:** Choose a compact demonstration fixture. The guide intentionally does not settle this. Evaluate your answer by clarity of the contract, consistency of the implementation and quality of verification, not by guessing the author's preferred wording.

## Story 14: Check a receipt's required fields

**First hint:** The desired improvement is “Detect unfinished human placeholders.” Start by identifying which existing boundary already knows the necessary information. Do not copy that information into new state until you can explain why derivation is insufficient.

**Second hint:** Follow this source-specific route: Parse only your own receipt headings; identify blank intent or verification; report warnings without modifying Git state.. Keep each stage independently inspectable. If a step requires a policy choice, write the choice before implementing it.

**Third hint:** Your strongest completion evidence should establish: A missing field is reported while truthful unverified status remains possible.. Invent a plausible wrong implementation and make your example disagree with it.

**Decision still left to you:** Decide warning versus failure policy. The guide intentionally does not settle this. Evaluate your answer by clarity of the contract, consistency of the implementation and quality of verification, not by guessing the author's preferred wording.

## Story 15: Write a review handoff checklist

**First hint:** The desired improvement is “Help a second learner inspect a change independently.” Start by identifying which existing boundary already knows the necessary information. Do not copy that information into new state until you can explain why derivation is insufficient.

**Second hint:** Follow this source-specific route: Link a specific commit; record the behavior contract; give read-only reproduction commands and a known limitation.. Keep each stage independently inspectable. If a step requires a policy choice, write the choice before implementing it.

**Third hint:** Your strongest completion evidence should establish: Another learner can locate the exact patch without relying on your current editor state.. Invent a plausible wrong implementation and make your example disagree with it.

**Decision still left to you:** Choose the minimum evidence fields. The guide intentionally does not settle this. Evaluate your answer by clarity of the contract, consistency of the implementation and quality of verification, not by guessing the author's preferred wording.

## Mentor feedback rubric

| Dimension | Beginning | Developing | Independent evidence |
|---|---|---|---|
| Trace | Names files only | Follows one ordinary case | Predicts a new boundary and explains its owner |
| Test design | Copies output | Uses a stated expectation | Rejects a plausible wrong candidate |
| Design | Repeats a slogan | Names an alternative | Compares costs using a concrete change |
| Agent use | Accepts a generated answer | Checks suggested edits | Supplies own proposal and adjudicates critiques |
| Handoff | Claims it works | Lists actual checks | Explains behavior, evidence and limits coherently |

Use the rubric to choose the next practice action, not to label yourself permanently. A learner may be independent at source tracing and still need help designing a failure case. Target the missing skill with one smaller exercise.
