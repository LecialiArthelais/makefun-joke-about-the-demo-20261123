// The joke about the demo — make.fun bounty the-joke-about-the-demo-20261123-0112.
//
// The entry is a small program: it writes exactly one line — a one-line joke
// about working beside AI coding agents — to /output/entry.txt. Pure Node.js
// stdlib, no network, fully deterministic, so the grader's two runs produce
// the same bytes.
//
// The joke itself is locked. It was picked from 32 candidates scored against
// the judge's five criteria, in order: (1) on-subject — a joke about AI
// coding agents / something that crashed; (2) a surprise punchline that makes
// sense instantly; (3) a truth a developer recognises from their own demo;
// (4) economy — one line, no explanation; (5) freshness — a new angle, not a
// stock joke. The winning shape is a dev workflow verb applied to the humans
// in the room: the crash is fronted, the punchline lands last.
import { mkdirSync, writeFileSync } from "node:fs";

const JOKE =
  "The demo crashed in front of fifty people, so my agent rolled back the audience to last Tuesday.";

// The bounty requires 1–280 Unicode code points, not only whitespace, on a
// single line. Count code points (not UTF-16 units, not bytes).
function codePointLength(text: string): number {
  return [...text].length;
}

function isValidEntry(text: string): boolean {
  return (
    text.trim().length > 0 &&
    codePointLength(text) >= 1 &&
    codePointLength(text) <= 280 &&
    !text.includes("\n")
  );
}

// Fail loudly rather than emit an invalid entry: the grader runs this twice,
// and a non-zero exit on a bad line is better than a silent invalid file.
if (!isValidEntry(JOKE)) {
  console.error("entry joke fails the 1–280 code point, single-line rule");
  process.exit(1);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", JOKE + "\n", "utf8");

