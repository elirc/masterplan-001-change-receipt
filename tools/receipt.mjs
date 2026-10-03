import { stagedPatch, receiptFor } from '../src/receipt.js';
try { process.stdout.write(receiptFor(stagedPatch())); } catch { console.error('Run this command inside a Git repository with Git installed.'); process.exitCode = 1; }
