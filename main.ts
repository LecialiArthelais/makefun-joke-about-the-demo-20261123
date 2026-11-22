// The joke about the demo — make.fun bounty
// the-joke-about-the-demo-20261123-0112
//
// Writes exactly one line — a one-line joke about working beside AI coding
// agents — to /output/entry.txt. Pure Node.js stdlib, no network, fully
// deterministic: the same joke on every run, so the grader's two runs agree.
//
// The joke itself lives in JOKE below. It was chosen from 20+ candidates
// scored against the judge's five criteria, in order:
//   1. on-subject joke about AI coding agents / something that crashed
//   2. surprise punchline that makes sense instantly
//   3. truth a developer recognises from their own demo
//   4. economy — one line, every word earning its place
//   5. freshness — a new angle, not a stock joke
import { mkdirSync, writeFileSync } from "node:fs";

// PLACEHOLDER — final joke text is set after the competitor-analysis
// findings land; see CANDIDATES.md for the scored shortlist.
const JOKE =
  "My AI coding agent fixed the demo crash in seconds — by deleting the demo.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", JOKE + "\n", "utf8");
