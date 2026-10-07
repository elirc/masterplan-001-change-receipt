# Debugging laboratory

[Concepts](02-CONCEPTS-AND-TRACES.md) · [Practice stories](05-PRACTICE-STORIES.md)

These are deliberately proposed defects for a scratch branch. They are not claims that the shipped reference still contains these bugs. Keep main working and introduce only one change at a time.

## Case 1: Receipt describes the wrong saved version

**Introduce or discuss this mistake:** Replace --cached with an ordinary diff in a scratch copy.

**Discriminating experiment:** Stage 14:00, save 15:00 afterward, and compare both outputs.

### Worked diagnosis

First restate the expected contract from the [concepts guide](02-CONCEPTS-AND-TRACES.md#the-exact-contract) in your own words. Then create the smallest example from the experiment above. Compare the observed result with the contract before changing more code. The likely cause is at this boundary: **src/receipt.js: stagedPatch must inspect the index.** Repair that boundary, rerun the example, and check one neighboring valid case so the repair does not merely special-case the chosen input.

The completed reasoning record is: symptom → contract violated → input that distinguishes hypotheses → owning line or rule → minimal repair → regression evidence. This is a worked diagnostic route; fill in your actual outputs when you run it. No invented console transcript is supplied.

## Case 2: A polished receipt claims tests passed without evidence

**Introduce or discuss this mistake:** Add a hard-coded “verified” sentence to a scratch receipt.

**Discriminating experiment:** An empty or untested patch still receives the claim.

### Your investigation

1. Write two possible explanations before looking at the hints.
2. Predict what the experiment would show if each explanation were true.
3. Run or inspect the smallest discriminating case and record the result.
4. Identify the owning file and make one bounded repair.
5. Verify the original case and a neighboring case; explain why both matter.

**Location hint, only after your attempt:** Keep verification as a human field; record command, output and scope.

## Case 3: A filename with spaces breaks a hand-built command

**Introduce or discuss this mistake:** Sketch a shell command made by concatenating a path.

**Discriminating experiment:** Use notice with spaces.txt as the counterexample.

### Your investigation

1. Write two possible explanations before looking at the hints.
2. Predict what the experiment would show if each explanation were true.
3. Run or inspect the smallest discriminating case and record the result.
4. Identify the owning file and make one bounded repair.
5. Verify the original case and a neighboring case; explain why both matter.

**Location hint, only after your attempt:** Keep command arguments separate; inspect the existing temporary-repo regression.

## If the first repair does not work

Do not pile on another unrelated edit. Read the diff and check whether the observed failure changed. If the hypothesis was wrong, write that down and restore only your own experimental change before testing the next hypothesis. A rejected hypothesis is useful progress when its evidence is clear.

When asking an assistant for help, provide the exact input, expected and observed result, the current diff and the file you believe owns the rule. Ask for one counterexample or diagnostic question first. Keep proposed causes separate from demonstrated causes.
