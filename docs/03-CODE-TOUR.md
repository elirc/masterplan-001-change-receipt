# Code tour and architecture decisions

[Overview](../README.md) · [Concepts](02-CONCEPTS-AND-TRACES.md)

| File | Responsibility |
|---|---|
| [package.json](../package.json) | Names the module format, Node requirement and local commands; private prevents npm publication. |
| [.github/workflows/check.yml](../.github/workflows/check.yml) | Runs the committed checks on GitHub. A workflow file is not evidence that a remote run succeeded. |
| [demo/notice.txt](../demo/notice.txt) | The deliberately small product content. |
| [demo/README.md](../demo/README.md) | Explains the two-file exercise. |
| [src/receipt.js](../src/receipt.js) | Reads the staged patch and formats an honest receipt. |
| [tools/receipt.mjs](../tools/receipt.mjs) | CLI output and a friendly failure boundary. |
| [test/receipt.test.js](../test/receipt.test.js) | Temporary Git fixture proving staged versus saved behavior. |

## Follow one path, not every file

Start at [src/receipt.js](../src/receipt.js) and locate `stagedPatch`. Use this trace as a map: Save 14:00 in demo/notice.txt → git add that exact file → save a further 15:00 edit without staging → stagedPatch runs git diff --cached → the receipt contains 14:00 while git diff shows the unstaged 15:00 change.

The tooling is intentionally separate from the product concept. You can study the CLI adapter or CI after the main rule is clear. A workflow configuration should not become a prerequisite for understanding the staging boundary.

## Decision: Read the index, not the working tree

A reviewer receives committed content. Saved content is not necessarily the next commit. The helper therefore reads the same staging boundary that Git will commit. A working-tree diff answers a different question.

**Review question:** Explain which comparison git diff, git diff --cached and git show make.

**Your alternative:** Write a plausible different choice, then give a concrete example that reveals its cost. “More scalable” or “cleaner” is not enough; identify a changed dependency, a new state to manage, or a user-visible failure mode.

## Decision: Keep the receipt mostly human-authored

The code can show a patch, but it cannot honestly infer why you wanted it or certify a test you did not run. Placeholders make the missing human explanation visible.

**Review question:** Write an intent that describes a user outcome rather than a filename.

**Your alternative:** Write a plausible different choice, then give a concrete example that reveals its cost. “More scalable” or “cleaner” is not enough; identify a changed dependency, a new state to manage, or a user-visible failure mode.

## Decision: Use execFileSync with an argument array

The command is fixed and read-only. Arguments are passed directly to Git, without a shell that might interpret spaces or operators. Synchronous execution keeps this tiny CLI easy to trace.

**Review question:** Explain why blocking is acceptable here but often undesirable inside a busy HTTP server.

**Your alternative:** Write a plausible different choice, then give a concrete example that reveals its cost. “More scalable” or “cleaner” is not enough; identify a changed dependency, a new state to manage, or a user-visible failure mode.

## Change boundaries

A small change should begin in the file that owns its meaning. The staged snapshot boundary and receipt wording belong in `src/receipt.js` rather than being guessed from editor state; printing and the friendly failure message belong in `tools/receipt.mjs`.

If a story crosses two files, say why. A new receipt field may require the template, its test and the documented example to change together. That is a coherent feature boundary, not permission to rewrite unrelated parts of the project.

## Deliberate limits

No persistence, external integration or general framework is hidden behind these files. The helper only reads the local index; it has no hosting, network or commit role. A passing temporary-repository test is one observation, not proof for every Git configuration. Keep these limits visible when describing your own work.
