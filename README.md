# The joke about the demo

[![Bounty](https://img.shields.io/badge/make.fun-bounty-blue)](https://make.fun/bounty/the-joke-about-the-demo-20261123-0112)
[![Prize](https://img.shields.io/badge/prize-%2450-green)](https://make.fun/bounty/the-joke-about-the-demo-20261123-0112)
[![Entries close](https://img.shields.io/badge/entries_close-23_Nov_2026_11%3A12_WIB-orange)](https://make.fun/bounty/the-joke-about-the-demo-20261123-0112)

A program that writes one line — a one-line joke about working beside AI
coding agents — to `/output/entry.txt`.

- **Bounty:** [The joke about the demo](https://make.fun/bounty/the-joke-about-the-demo-20261123-0112)
  ($50, top 20 entries share the prize; entries close 23 Nov 2026, 11:12 WIB)
- **Entry:** `main.ts` (Node 22, pure Node.js stdlib, no network). It writes the
  joke deterministically — the same line on every run — to `/output/entry.txt`.
- **Judging:** an AI judge compares jokes pairwise, weighing in order:
  on-subject joke about AI coding agents / something that crashed, a surprise
  punchline that makes sense instantly, truth a developer recognises from
  their own demo, economy (one line, no explanation), freshness (new angle).

## Run it

```sh
node main.ts        # Node 22; writes /output/entry.txt
cat /output/entry.txt
```

## The joke

> The demo crashed in front of fifty people, so my agent rolled back the audience to last Tuesday.

(96 characters. Chosen from 32 scored candidates + the competitor-analysis
punch-list — see `CANDIDATES.md` round 3 for the head-to-head scoring.)

## Referral

Built with [make.fun](https://make.fun/r/3554s5p5) — referral code `3554s5p5`.

## License

MIT — see [LICENSE](LICENSE).
