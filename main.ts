// Entry for "Say What Actually Broke" (make.fun).
// Writes one line of software error copy (<=200 chars) that tells the user
// the brutal truth about the failure, names the real cause, says what to
// do next, and makes them laugh.
import { mkdirSync, writeFileSync } from "node:fs";

const ENTRY =
  "Your password was right; the database simply forgot you exist. Log in again and we'll both pretend this never happened.";

if (ENTRY.length < 1 || ENTRY.length > 200) {
  throw new Error(`entry is ${ENTRY.length} chars, must be 1-200`);
}
if (ENTRY.trim() !== ENTRY || /\n/.test(ENTRY)) {
  throw new Error("entry must be a single non-blank line");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY, "utf8");
console.log(`wrote ${ENTRY.length} chars to /output/entry.txt`);
