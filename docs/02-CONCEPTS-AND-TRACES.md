# Concepts and worked traces

[Walkthrough](01-BUILD-WALKTHROUGH.md) · [Debugging lab](04-DEBUGGING-LAB.md)

## The exact contract

The helper reads the Git index (staged content), never changes it, and leaves intent and verification for a human to write. The two-file demo changes its opening time from 13:00 to 14:00 in a real small commit. Later teaching/tool commits are separate.

This paragraph is the reference behavior. If you extend the product, update the contract and examples together. An implementation can be internally consistent while solving the wrong problem, so start with the user's meaning before discussing syntax.

## A complete trace

Save 14:00 in demo/notice.txt → git add that exact file → save a further 15:00 edit without staging → stagedPatch runs git diff --cached → the receipt contains 14:00 while git diff shows the unstaged 15:00 change.

On main, demo/notice.txt already reads 14:00, so saving 14:00 there stages nothing. Reproduce the trace on a practice branch created from the 13:00 baseline commit (`git switch -c practice/trace e0a4d5d`), or shift every time by one hour as in the walkthrough's three-snapshot exercise.

Copy that trace onto paper. At each arrow, name the input, the owner of the rule or state, and the output. For browser layout, the owner is a CSS rule acting on a particular box. For JavaScript, it may be a local variable, a returned object or a callback. For Git, it is a specific snapshot comparison. These are different mechanisms but the same useful habit: make the boundary visible.

## Examples you can verify independently

| Input or situation | Expected observation |
|---|---|
| Nothing staged | Receipt explicitly says no staged changes |
| Stage 14:00; save 15:00 afterward | Receipt contains 14:00, not 15:00 |
| Filename contains spaces | Argument-array invocation handles the path without shell splitting |

Do not derive the expected result by copying the implementation into your test. Use the user rule, a hand calculation, a source-order trace or a deliberately simple fixture. Otherwise two copies of the same mistake can agree while the product is wrong.

## Contrast three kinds of statement

**Requirement:** what the user should be able to rely on. **Implementation:** how the current files attempt to provide it. **Evidence:** the input and observation that support a conclusion about that attempt. In your journal, write one example of each for this project. A source comment is useful explanation, but by itself it is not runtime evidence.

## Retrieval practice

1. Explain `stagedPatch` to a learner who knows the preceding project but has not opened this one.
2. Reproduce the trace with one changed input or piece of content. Predict which intermediate fact changes first.
3. Name a result that would look plausible but violate the contract.
4. Identify the smallest counterexample that distinguishes correct from incorrect behavior.
5. State one limitation of the reference without treating that limitation as a hidden completed feature.

Write your answers before opening the hints. Then compare explanations, not just vocabulary. If your answer says “it works because JavaScript/CSS/Git handles it,” identify the particular rule that actually explains the result.

## Transfer beyond this example

What evidence would let someone distinguish your intended change from accidental edits?

Connect your answer to a future application: a form, a list, a report or a reusable component. The useful transfer is the reasoning habit, not the fictional domain. For example, deciding equality at a boundary is useful in both dates and temperature ranges; distinguishing identity from a label applies to more than score sheets.

## Reference reading

Use [Git diff reference](https://git-scm.com/docs/git-diff) to confirm terminology and language/platform behavior. The workshop's product rules and fixtures are original teaching choices, not quotations from that reference. Return to the actual source after reading the documentation and explain which line or rule the terminology helps you understand.
