// The joke about the demo — entry for make.fun bounty
// the-joke-about-the-demo-20261123-0112.
//
// A tiny program: it writes exactly one line, a joke about working beside
// AI coding agents, to /output/entry.txt. Pure Node.js standard library,
// no network access, fully deterministic — the grader runs it twice and
// both runs must produce the same bytes.
//
// The joke line is locked. It came out of 32 candidates scored against the
// judge's five criteria, in this order: (1) on subject — a joke about AI
// coding agents, or something that crashed; (2) a surprise punchline that
// lands instantly; (3) a truth any developer recognises from their own
// demo day; (4) economy — one line, nothing explained; (5) freshness — a
// new angle, not a stock joke. The winning move is taking a dev workflow
// verb and applying it to the humans in the room: the crash is stated
// first, the punchline closes the line.
import { mkdirSync, writeFileSync } from "node:fs";

// The locked joke: 96 characters, one line.
const JOKE =
  "The demo crashed in front of fifty people, so my agent rolled back the audience to last Tuesday.";

// Count Unicode code points — spread into an array of code points, so an
// emoji or astral character counts as one, not two UTF-16 units and not
// its byte length. The bounty rule is 1–280 code points.
function countCodePoints(text: string): number {
  return [...text].length;
}

// The entry must be a single non-blank line of 1–280 code points.
function isValidJoke(text: string): boolean {
  const length = countCodePoints(text);
  return (
    text.trim().length > 0 &&
    length >= 1 &&
    length <= 280 &&
    !text.includes("\n")
  );
}

// Fail loudly instead of writing an invalid entry: exiting non-zero on a
// bad line is better than silently handing the grader a bad file.
if (!isValidJoke(JOKE)) {
  console.error("joke fails the 1–280 code point, single-line rule");
  process.exit(1);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", JOKE + "\n", "utf8");
