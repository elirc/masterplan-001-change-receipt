import { execFileSync } from 'node:child_process';
// No shell interpolation, no git add/commit/push: this helper only reads Git.
export function stagedPatch(cwd = process.cwd()) {
  return execFileSync('git', ['diff', '--cached', '--no-ext-diff', '--no-color', '--'], { cwd, encoding: 'utf8' });
}
export function receiptFor(patch) {
  if (!patch.trim()) return '# Change receipt\n\nNo staged changes. Save, inspect, then stage the intended file.\n';
  return '# Change receipt\n\nIntent: [explain in your own words]\n\nVerification: [record actual steps and observations]\n\n## Staged patch\n\n' + patch;
}
