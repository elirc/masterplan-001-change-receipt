import { test } from 'node:test';
import assert from 'node:assert/strict';
import { mkdtempSync, writeFileSync, rmSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { join, resolve, dirname, basename } from 'node:path';
import { execFileSync } from 'node:child_process';
import { stagedPatch, receiptFor } from '../src/receipt.js';
test('helper distinguishes staged content from newer saved content', () => {
  const dir=mkdtempSync(join(tmpdir(),'receipt-test-'));
  const git=(...args)=>execFileSync('git',args,{cwd:dir,encoding:'utf8',stdio:['ignore','pipe','pipe']});
  try {
    git('init','-b','main'); git('config','user.name','Fixture'); git('config','user.email','fixture@example.com');
    writeFileSync(join(dir,'notice with spaces.txt'),'Open at 13:00\n'); git('add','--','notice with spaces.txt'); git('commit','-m','Fixture baseline');
    writeFileSync(join(dir,'notice with spaces.txt'),'Open at 14:00\n'); git('add','--','notice with spaces.txt');
    writeFileSync(join(dir,'notice with spaces.txt'),'Open at 15:00\n');
    const patch=stagedPatch(dir); assert.match(patch,/\+Open at 14:00/); assert.doesNotMatch(patch,/15:00/);
    assert.match(git('diff'),/\+Open at 15:00/);
  } finally { if (dirname(resolve(dir)) !== resolve(tmpdir()) || !basename(dir).startsWith('receipt-test-')) throw Error('Unexpected fixture path'); rmSync(dir,{recursive:true,force:true}); }
});
test('empty staged patch produces an honest empty receipt',()=>assert.match(receiptFor(''),/No staged changes/));
test('nonempty receipt preserves the patch and leaves human claims blank',()=>{const text=receiptFor('+changed\n');assert.match(text,/Intent: \[explain/);assert.match(text,/\+changed/);});
