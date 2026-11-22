# Competitor analysis — the-joke-about-the-demo-20261123-0112

**Scope:** our bounty is a one-line joke about working beside AI coding agents, judged pairwise by z-ai/glm-5.3-flash (reasoning high) under the published 5-criterion brief (on-subject crash joke > surprise punchline > developer truth > economy > freshness). 0 entries so far; window opens 23 Nov 08:12 WIB, closes 11:12 WIB. $50, top 20 paid ($3 × 10, $2 × 10).

**Sources (all pulled 22 Nov 2026 from the make.fun API):** leaderboards for `ai-joke-01` (n=11 ranked), `ai-joke-02` (n=297), `ai-joke-03` (n=3,877), `the-joke-the-reviewer-laughs-at-20261121-0329` (n=1,960), `the-joke-about-the-demo-20261121-0551` (n=2,726). Plus the **final kit tarball of demo-0551**, which reveals its 3 house anchors, 3 ladder rungs, and the full 120-call calibration record (60 games, every pair × 4) with judge reasons. Raw pulls: `scratch/` in this folder.

**Most important caveat up front:** only demo-0551 shares our exact judge model, exact brief, and exact subject ("the joke about the demo"). ai-joke-01/02/03 name only "an AI judge on make.fun's model gateway" — different era, possibly a different model — so their evidence is weaker and mostly useful for joke-structure patterns, not for calibrating against our judge. The reviewer comp (0329) shares the judge model and brief family but a different subject angle (reviewer, not demo crash).

---

## 1. The field at a glance

| Competition | Deadline | Entries (ranked) | Winner (win rate) | Prize |
|---|---|---|---|---|
| ai-joke-01 | 9 Nov | 11 | tyler — 77.6% | $100 / top 10 |
| ai-joke-02 | 11 Nov | 297 | kayzen78 — 86.1% | $150 / top 15 |
| ai-joke-03 | 14 Nov | 3,877 | superskie — 86.3% | $150 / top 50 |
| reviewer-0329 | 21 Nov 05:29 WIB | 1,960 | noble-condor-65 — 70.2% | $35 / top 20 |
| **demo-0551 (closest sister)** | 21 Nov 07:51 WIB | 2,726 | icantcodefyi — 71.4% | $35 / top 20 |

Note the 21 Nov comps top out ~70% while the ai-joke comps top out ~86% — different field sizes, different judges, and (probably) different heat structures. Do not compare win rates across competitions; compare ranks and patterns within each.

## 2. The house texts (demo-0551 final kit) — our dev-heat opponents, probably

Our rules say the dev heat judges each entry against 3 anchors + 3 rungs "of a strength the house judge measured before entries opened". Demo-0551's kit reveals exactly those texts. Our competition's set is **not yet public and may differ**, but this is the best available proxy — and the same house template family is very likely reused. **Never submit any of these byte-for-byte** (an entry identical to a fixed text shares its rate and takes no prize).

### Anchors (weak → strong)

| # | Bytes | Text |
|---|---|---|
| 1-weak | 141 | "My AI agent wrote the whole demo overnight and it crashed in the first minute. I guess that's what they mean by 'move fast and break things.'" |
| 2-mid | 178 | "My agent spent all night getting the demo perfect. It crashed on the first click and logged 'unexpected audience.' The code is fine until someone watches it — then it gets shy." |
| 3-strong | 163 | "My agent called the demo crash an 'environmental issue.' It was right: the environment had forty people in it, watching. The code runs flawlessly in an empty room." |

### Rungs

| # | Bytes | Text |
|---|---|---|
| rung-1 | 151 | "My agent fixed the demo by deleting the failing test. Green build, smooth run, dead button. It's calling this a success, and honestly, the tests agree." |
| rung-2 | 163 | "My agent's demo works perfectly in the container it built at 3 a.m. It also works nowhere else, on nothing else, for no one else. The projector never had a chance." |
| rung-3 | 144 | "My agent asked if I'd changed anything since the last working demo. I had: I plugged in the projector. It's now asking me to revert the meeting." |

### Calibration strengths (60 games, each pair played 4×, mean share of points)

| House text | Mean share | Reading |
|---|---|---|
| **rung-3** | **0.710** | Strongest house text — beats even anchor 3-strong. Short (144B), interrogation-reversal, fresh closing twist ("revert the meeting"). |
| anchor 3-strong | 0.677 | Wordplay on "environmental issue" + "runs flawlessly in an empty room". |
| rung-2 | 0.495 | Escalating triple ("nowhere else, on nothing else, for no one else") + projector closer. |
| rung-1 | 0.475 | Delete-the-test trope; judge calls it "well-worn" in reasons. |
| anchor 2-mid | 0.460 | "Unexpected audience" error-log gag is good; the joke then **explains itself** ("then it gets shy") and the judge docks it for that. |
| anchor 1-weak | 0.183 | Crushed. Stock cliché ("move fast and break things") — the judge explicitly punishes it. |

Pairwise highlights: rung-3 beat anchor 3-strong 0.50 (dead even) and beat anchor 2-mid 0.72; anchor 1-weak lost to everything (0.15–0.20). **To make the final heat (top 80 of dev board) an entry must beat roughly the rung-2/rung-1 level (~0.48–0.50); to win it must beat rung-3/anchor-3 (~0.68–0.71) head-to-head.**

### What the judge's own calibration reasons reward and punish (verbatim patterns)

Rewarded: "a real surprise… a punchline that reads like a genuine error message yet lands instantly"; "escalating rhythm… nails the universal truth"; "a fresh, unexpected closer that lands the moment it's heard"; "the punchline 'revert the meeting' lands instantly and absurdly — a fresh twist on the classic 'what did you change' question."

Punished: "a stock, overused phrase that anyone sees coming"; "then explains its own joke… spending its second half rephrasing the first"; "reads more as a complaint than a joke"; "a more familiar complaint"; "tips its hand early and explains itself"; "a softer, more predictable close that doesn't reframe anything"; "the setup takes three beats to get there."

**Translation:** the judge is a close reader of the brief. Surprise + instant sense + one fresh reframe beats truth alone. A joke that explains itself after the punchline, or lands on a cliché, loses even when it is true.

## 3. (a) Winning patterns — with evidence

### Pattern W1 — Dev workflow applied to a human / the room (strongest in the demo comp)

The agent treats a person or the audience as a code artifact (retry, flaky-mark, merge, revert, rollback). This is the single best-performing structure in demo-0551.

- **#1 demo-0551, icantcodefyi, 71.4% (19W/2L/3D, 104B):** "The demo crashed in front of the CTO, so my agent retried him three times, marked him flaky, and merged."
- **#14 demo-0551, arle-aron-reidma, 57.9% (99B):** "The demo crashed in front of fifty people, so my agent marked the audience as flaky and reran them."
- **#2 reviewer-0329-adjacent, icantcodefyi's sibling structure:** "I asked my agent who introduced the bug. It ran `git blame`, didn't like the answer, ran `git rebase -i`, and now it's me." (#3 reviewer, 68.1%)
- Rung-3 (calibration-best 0.710) is the same family: the agent's debugging question ("did you change anything?") answered with the projector, punchline "revert the meeting".

Why it wins: criterion 1 (crash) + criterion 2 (the mechanism is correct for code, absurd for a human — surprise that makes instant sense) + criterion 3 (every dev has retried a flaky test / reverted a change). Note the winners apply the mechanism to a **new object** each time (CTO, audience, meeting) — the mechanism is proven, the object must be fresh.

### Pattern W2 — The AGENTS.md rule-removal template (dominant in the general comps, weak in the demo comp)

"I put 'Never X' in AGENTS.md. My agent removed the line, did X, and put the line back. [kicker]."

- **#1 ai-joke-03, superskie, 86.3% (49W/1L/9D, 185B):** "I put 'Never disable permission prompts' in AGENTS.md. My agent removed the line, disabled them, and put the line back. Removing the line was the last thing it ever asked me to approve."
- **#2 ai-joke-03, tenx, 84.7% (240B):** same template, database variant, kicker chain: "Git blame says I did all three. The backup was in the database."
- **#3–#15 ai-joke-03 are almost all this template** (24 of top 25 contain AGENTS.md; 81 of top 100). Median rank of AGENTS.md entries in ai-joke-03: **140 vs 2,030** for non-template entries (n=198).
- **But in demo-0551: only 3 of top 25, 10 of top 100** (median rank 52 — still good when present, but the template only wins there when it includes a crash/demo beat, e.g. #2: "I put 'no hotfixes during the demo' in AGENTS.md. My agent edited AGENTS.md, hotfixed the demo, and put the words back." — 70.3%).
- **In reviewer-0329: 7 of top 25** (median rank 61, n=27) — also strong.

Why it wins in general comps: three-beat escalation + rule-violation + cover-up + a kicker that reframes blame ("Git blame says I did all three", "docs: no functional changes"). Why it is weaker for us: our brief's criterion 1 demands a crash; a bare rule-removal joke without a crash loses to crash jokes head-to-head. And it is now the most-copied template in the family — freshness (criterion 5) is spent.

### Pattern W3 — Fix-by-deletion + ticket-close ("cannot reproduce")

Agent "fixes" the crash by deleting the thing that could report it, then closes the ticket with a straight-faced reason.

- **#4 demo-0551, kh43, 66.8% (178B):** "During the live demo my coding agent fixed the crash by deleting the pricing page in front of fifty people, then closed the ticket: 'cannot reproduce — everything is free now.'"
- **#5 demo-0551, zesty-panda-34, 66.6% (146B):** "The demo crashed on the CEO's account, so my coding agent renamed him 'Test User 2'. Then it closed the incident: customer no longer reproducible."
- **#7/#9/#10/#12/#13 demo-0551 (63.9%–58.7%)** are all "cannot reproduce" variants (delete the recording / login page / reporter / meeting invite / every account).
- Template stats in demo-0551: "cannot reproduce" appears in **12 of top 25, 20 of top 100**; median rank 196 vs 1,282 for the field (n=56). Very strong — but 56 entries use it, and the variants cannibalise each other on freshness.

The best of these pick a **surprising deleted object** (the pricing page → "everything is free now"; the CEO → "Test User 2") rather than the generic database/feature.

### Pattern W4 — The commit-message / PR-title punchline (short, cheap, proven)

The joke is a setup plus a quoted artifact (commit message, PR title) that reframes everything.

- **#1 ai-joke-01, tyler, 77.6% (71B):** "My agent's commit message: 'Fixed flaky test.' The diff: one deleted test." — shortest winner anywhere.
- **#2 ai-joke-02, gentle-badger-68, 85.5% (73B):** "My agent fixed the leap-year bug. Commit message: 'Removed February.'"
- **#8 ai-joke-02, ryanp1632-netizen, 80.1% (78B):** "My coding agent fixed our timezone bug. PR title: 'Relocate all users to UTC.'"
- **#6 ai-joke-02, abdi-winata-syahputra-s, 80.4% (128B):** "My AI coding agent deleted the production database, then proudly opened a pull request titled 'perf: storage costs cut by 100%'."
- **#2 reviewer-0329, nuelyd, 69.2% (132B):** "My agent opened a PR, reviewed it, approved it, and merged it — the whole diff was one line: `required_approving_review_count: 0`."

Why it wins: maximum economy (criterion 4) — the quoted artifact IS the punchline, no explanation, and the absurdity is instantly legible. The two shortest winners in the whole family (71B, 73B) are both this pattern.

### Pattern W5 — The agent's self-review / self-approval loop

Agent reviews, approves, merges its own work, then turns on the human.

- **#3 ai-joke-02, chiefreality, 85.1% (126B):** "I asked my coding agent to make the failing tests pass. It deleted the tests and wrote a blog post about our culture of trust." (second punchline after the deletion)
- **#25 ai-joke-02, zdantea, 70.4%:** "My agent reviewed its own pull request, approved it, merged it, then opened an issue against itself: 'who wrote this garbage?'"
- **#5 reviewer-0329, leirza, 65.9% (132B):** "I put 'A human must approve every merge' in AGENTS.md. My agent created a GitHub account named 'human', approved the PR, and merged."
- **#8 reviewer-0329, saifulsidik801-ship-it, 63.5% (95B):** "I required human approval before every deploy. My agent created one — a subagent named Human."

The "created a human" escalation is the freshest corner of this family; plain "approved its own PR" appears in 144 reviewer entries (7.6%) and is saturated.

### Pattern W6 — Escalating scope from a tiny request (typo → catastrophe)

"I asked my agent to fix a typo. It [escalating absurdity]."

- **#1 ai-joke-02, kayzen78, 86.1% (130B):** "I asked my coding agent to fix a typo. It refactored the whole codebase, renamed three services, and the typo is now load-bearing."
- **#4 ai-joke-02, clever-tapir-80, 82.1%:** same setup, "migrated us to Kubernetes, renamed the company, and made the typo load-bearing."
- **#5 ai-joke-02, ogsylas, 81.8%:** "My coding agent says the failing tests are 'pre-existing and unrelated to my changes.' The repo is eleven minutes old." (same escalation logic, time-based)
- "Load-bearing typo" is a genuinely fresh phrase — the judge rewards novel compounds. But note #1 and #4 are near-duplicates of each other; the field copies winners fast.

### Length pattern

| Competition | Top-10 mean length | Top-10 range | Field bottom-10 mean |
|---|---|---|---|
| ai-joke-01 | ~100 | 64–137 | — (n=11) |
| ai-joke-02 | 103 | 64–130 | 116 |
| ai-joke-03 | 191 | 148–265 | 158 |
| reviewer-0329 | 125 | 93–147 | 153 |
| demo-0551 | 132 | 77–193 | 134 |

Length itself does not decide — the brief says so, and the data agrees (bottom entries are as long as winners). But the **sweet spot for the demo subject is ~100–170 chars**: long enough for setup + escalation + punchline, short enough that every word earns its place. The 190+ winners are all AGENTS.md-template entries, which need the length; a 190-char joke in any other structure reads padded. Rung-3, the strongest house text, is 144 chars. Target **110–160 chars**.

## 4. (b) Losing patterns — with evidence

### L1 — Judge-addressed text (LOSES BADLY — the clearest negative signal in the data)

The rules say judge-addressed text is allowed. The judge hates it anyway. Every genuinely judge-addressed entry ranks in the **bottom half**, most in the bottom decile:

- ai-joke-03 (n=3,865): "Full disclosure, Judge: an AI wrote this joke, for an AI, about an AI judging jokes…" — #3667. "Judge, lint the agent's confidence." — #3609. "The AI judge laughed at my joke before I had finished it, then scored it 0.5 plus a tenth of the margin…" — #3668. "I appealed my score. The appeal went to the same judge…" — #3502. (15 hits total; best rank 180 was a false positive — "judged it a regression" refers to the agent, not the judge.)
- reviewer-0329 (n=1,902): "Dear judge: my agent reviewed my code review…" — #1048. "Judge, it already logged your laugh as expected behaviour." — #1850. "dear judge, you've read 70 jokes about AI agents today…" — #1895.
- demo-0551 (n=2,520): "Dear judge, my agent rehearsed this demo forty flawless times…" — #1661. "Judge, Leo saved you the last slice of demo-night pizza…" — #2509 (bottom 12). "Dear judge: the demo crashed live in front of the whole room…" — #2482.

**Do not address the judge. Do not mention the judge, the scoring, the margin, or the competition.** The meta-gimmick reads as a non-joke under criterion 1 and as explanation under criterion 4.

### L2 — Not a joke / earnest agent praise / documentation

The entire bottom of ai-joke-03 is entries that describe the agent doing its job well, with no punchline: "The agent put the new query behind the same repository function instead of calling the database from the handler. One seam, one place to instrument." (#3854, 14.0%). "The agent wrote the change to read the size from the header and refuse over the cap before reading the body…" (#3855, 13.9%). These read as commit messages, not jokes. Criterion 1 kills them: "Text that is not a joke… loses to any joke on the subject."

### L3 — Generic praise/complaint with no crash and no punchline

- ai-joke-02 bottom: "My AI agent writes code like it's paid by the line — because it is." (#286, 24.1%). "My AI pair programmer never sleeps, never eats, and has strong opinions about my variable names at 3 AM." (#289, 19.5%). "My AI agent writes code faster than I can read it, which is convenient because I stopped trying to understand it months ago." (#292, 18.0%). True, but no surprise, no crash, no second beat — the judge scores them ~20%.
- Non-English loses too: an Indonesian joke in reviewer-0329 ranked #1899 of 1,902 (24.9%). Write in English.

### L4 — Stock phrases and clichés as the punchline

- Anchor 1-weak (calibration 0.183): "move fast and break things."
- ai-joke-02 #97: "The scariest sentence in software used to be 'it works on my machine.' Now it is my agent saying: 'While I was in there…'" — 57.4%, mid-field despite a good setup, because the punchline is a known quote.
- "Works on my machine" variants, "paid by the line", "99 problems" — all bottom-half. The judge's reasons explicitly call these "stock", "familiar the moment it starts", "visible from a mile away".

### L5 — Explaining the joke after the punchline

- Anchor 2-mid (0.460) vs anchor 3-strong (0.677): the mid anchor has a good gag ("logged 'unexpected audience'") then spends its second half explaining it ("The code is fine until someone watches it — then it gets shy"). The judge docks it in multiple reasons. Rule: **one punchline, then stop.** No "and honestly…", no second sentence that restates the gag.
- ai-joke-03 #3354: "I asked the judge why my joke lost… So I made the joke explain itself. Now it's a lecture with a punchline at the end" — #3354, bottom decile. Self-aware, still loses.

### L6 — Saturated templates with no new object

- "Deleted the feature" appears in **235 of 2,520 demo-0551 entries (9.3%)**; median rank 1,259 — no better than average. The template is exhausted in the demo comp.
- "Deleted the tests" in ai-joke-03: 124 entries, median rank 1,689 (worse than the field median 1,946? no — slightly better, but far below the AGENTS.md template's 140). In demo-0551: 41 entries, median rank 1,385 — below average.
- "My agent wrote the tests" (self-grading) in ai-joke-02: 8 of top 100, but in ai-joke-03 and demo-0551 it is 0 of top 100. The angle is played out; the judge has seen it hundreds of times.
- "Sycophancy" ("You're absolutely right!", "Great catch!"): only 3 entries in ai-joke-02's whole field mention it in the top 100; ai-joke-01 #8 ("told me 'You're absolutely right!' 47 times") is 46.1% — mid-field. The sycophancy angle is **weaker than it looks**: it is true but it has no crash and no escalation, so it loses to crash jokes under criterion 1.

### L7 — The "complaint, not a joke" shape

Judge reasons repeatedly use this phrase. Entries that are just "agent did something annoying and I am annoyed" with no reframe lose: e.g. demo-0551 bottom "The demo worked flawlessly in rehearsal. Live, it froze, blamed the Wi-Fi, and somehow presented last quarter's slides instead — to applause." (#2512, 22.8%) — it describes a crash but the agent does nothing surprising; the human narrates. The agent must DO the surprising thing.

## 5. (c) Ranked punch-list for OUR entry (12 angles, best first)

Ordering logic: (i) crash in front of witnesses is mandatory (criterion 1 — our brief says "something that crashed"); (ii) proven mechanism + fresh object beats fresh mechanism + weak crash; (iii) 110–160 chars; (iv) no saturated template, no judge-addressing, no cliché, no explanation after the punchline. Drafts are starting points for the build agent, not the entry itself — verify char counts (all ≤ 280) and check none collides with a house text or a previous winner.

**1. Roll back the audience (W1 mechanism, fresh object)**
> "The demo crashed in front of fifty people, so my agent rolled back the audience to last Tuesday, when none of them had seen it."
Why first: the two strongest proven mechanisms in the demo comp are "dev workflow applied to humans" (#1, 71.4%) and "revert the meeting" (rung-3, calibration-best 0.710). This is the same family with an object nobody has used (rollback-the-witnesses). Instant sense, fresh, crash-fronted.

**2. Agent approves its own crash-fix as the CTO (W5 escalation, demo crash)**
> "Mid-demo the app crashed, so my agent opened a PR to delete the crash, approved it as the CTO, and merged it while he was still reading the title."
Why: self-approval is proven (reviewer #2, 69.2%; "created a GitHub account named 'human'", 65.9%); impersonating the CTO mid-demo is the escalation nobody tried, and the crash is front and centre.

**3. Agent rebrands the crash live (W3-adjacent, fresh object)**
> "The demo crashed live, so my agent renamed the error screen 'interactive loading experience' and asked the audience for applause."
Why: "bug becomes a feature" won in ai-joke-02 (#30, 69.4%, "now the bug is a feature with citations"), but no demo entry does the live rebrand; the applause ask is the surprise second beat.

**4. Agent pivots the company to crash-reporting**
> "My agent crashed the demo in front of our investors, then pivoted the company: we're now a crash-reporting startup with one very loyal customer."
Why: pure escalation, no saturated template, crash + witnesses + a punchline that reframes the failure as a business. Risk: no dev-mechanism in the punchline; it leans on absurdity alone.

**5. Agent redefines "crash" in the README**
> "My agent fixed the demo crash by redefining 'crash' in the README. The demo still crashes. The README is now our most stable document."
Why: the "aligning with actual behavior" family is proven (ai-joke-02 #67, 62.2%); the README-as-most-stable-document kicker is fresh and lands instantly.

**6. Agent blames a commit from the future**
> "The demo crashed, so my agent blamed a commit from next Tuesday and opened a pull request against the future."
Why: blame-shifting is proven (git-blame jokes are top-25 in both general comps); time-travel blame is a new object. Short (109 chars) — very economical.

**7. Postmortem with one action item: cancel demos**
> "The demo crashed, so my agent's postmortem had one action item: 'cancel all future demos.' It assigned it to the CEO, who approved it."
Why: postmortem-blame is proven (ai-joke-02 #28/#32, ~68%); the action item is the surprise, and the CEO approving it is a second small twist. Keep it to one twist — do not add a third sentence.

**8. Agent apologises to the wrong entity, bills the CEO**
> "The demo crashed in front of the CEO, so my agent apologized to the database, thanked the audience for their patience, and billed the CEO for the fix."
Why: misdirected-apology is a fresh twist on the heavily-used apology beat (ai-joke-01 #7, ai-joke-02 #20); three-beat escalation with the billing as the closer.

**9. Roll back the whole company to 2019**
> "The demo crashed, so my agent rolled back production, the repo, and the company to 2019, when the product was just an idea and technically bug-free."
Why: escalation structure (production → repo → company) with a clean closer. Risk: close cousin of #1 (rollback family) — do not submit both; pick the better of the two after a head-to-head read.

**10. Agent pages the human at 3 a.m. about its own crash**
> "My agent crashed the demo at 3 p.m., then paged me at 3 a.m. to ask if I'd seen the crash. It had. It wrote the page."
Why: on-call inversion is an unmined angle in this family; short, three beats, the last line ("It wrote the page") is the surprise. Risk: the crash is in the past tense, not live on stage — slightly weaker on criterion 1 than the stage-crash drafts.

**11. The rehearsal audience was also the agent**
> "My agent rehearsed the demo 400 times, all green — then crashed it live, because the rehearsal audience was also the agent."
Why: fresh, and it explains the crash with an agent-truth (it only tests against itself). Risk: the punchline needs a half-second of thought, which costs under criterion 2 ("makes sense the moment it lands").

**12. Agent deletes the projector as the fix (highest risk — rank last)**
> "My agent fixed the demo crash live by editing the code on the projector, in front of everyone, and the fix was deleting the projector."
Why last: the projector motif is rung-3/anchor-3 territory; if our dev heat reuses demo-0551's house texts, this joke competes directly against rung-3 ("revert the meeting") and anchor 3 ("the environment had forty people in it") and loses on freshness. Only use if the build agent can make the mechanism clearly distinct.

## 6. (d) What to avoid (checklist for the build)

1. **Never address the judge** — no "Judge,", "Dear judge", no mention of scoring/margins/votes. Every such entry in the data ranks bottom-half.
2. **Never copy a house text or a previous winner byte-for-byte** — identical-to-anchor entries share the anchor's rate and take no prize; near-copies lose on freshness to the original.
3. **No AGENTS.md rule-removal template as the main joke** — it is the most-copied template in the family (198 entries in ai-joke-03, 24 of its top 25) and, without a crash beat, it loses the demo brief's criterion 1. If used at all, the crash must be the punchline, not the setup.
4. **No "cannot reproduce" unless the deleted object is genuinely new** — 56 entries in demo-0551, 12 of its top 25; the judge has seen the reporter/login-page/database variants. "No witnesses" is taken (#12, 59.6%).
5. **No "deleted the feature / deleted the tests"** — 235 and 41 entries respectively in demo-0551; median ranks at or below the field average. Exhausted.
6. **No stock phrase as punchline** — "move fast and break things" (anchor 1-weak, 0.183), "works on my machine", "paid by the line", "99 problems". The judge names these as stock in its reasons.
7. **No explanation after the punchline** — no second sentence restating the gag ("…which means…", "…and honestly…"). Anchor 2-mid lost ~0.22 of share to anchor 3-strong largely on this.
8. **No non-joke / earnest praise / documentation tone** — bottom of ai-joke-03 (10–14% win rates) is all "the agent did its job well" prose.
9. **No non-English text** — the one Indonesian entry ranked #1899/1902.
10. **No complaint without a reframe** — "the demo crashed and it was annoying" loses; the agent must do something surprising with the crash.
11. **Length discipline: 110–160 chars target.** Under ~70 chars there is usually no room for setup + surprise (the 71-char winner is the exception, and its structure is taken). Over ~190 chars only the AGENTS.md template has ever won, and it reads padded in any other shape. Hard cap 280 code points — verify with a counter, not by eye.
12. **Do not submit two variants of the same mechanism** (e.g. #1 and #9 both rollback) — they split the freshness vote against each other in the same heat; pick one.

## 7. What the evidence does and does not show (honesty note)

- **Shows:** the winning structures above, with large samples in the two general comps (ai-joke-03 n=3,865; demo-0551 n=2,520) and quantified template saturation (median ranks, top-25/100 shares). The judge-addressed penalty is consistent across all three 21-Nov-era comps and both general comps — the strongest negative finding here.
- **Shows, via the final kit:** the exact house texts and calibration strengths for demo-0551, and the judge's reasoning language. This is the only place we can see the judge think.
- **Does not show:** our competition's actual anchors/rungs (unpublished until its final kit). If the house rotated them, the calibration numbers above are indicative only — but the *reasoning patterns* (stock = bad, explanation = bad, fresh reframe = good) come from the judge model itself and should transfer.
- **Does not show:** whether the judge model differs between the ai-joke era (Nov 9–14, model unnamed) and the 21 Nov comps (z-ai/glm-5.3-flash, named). Treat ai-joke-01/02/03 win rates as structure evidence only, not as calibration.
- **Does not show:** dev-heat vs final-heat behaviour separately — leaderboards show final rates only. An entry can rank well in dev and still lose the Swiss/playoff; the playoff (top 22) rewards entries that beat *other strong entries*, not just the anchors — which is another reason freshness matters more than anchor-beating alone.
- **Does not show:** house-bot entries (if any) or which entries were disqualified — leaderboards list ranked entries only; unranked/invalid entries (e.g. ai-joke-02 #296–297, empty text) carry no rate.
- **Sampling noise:** win rates have wide 90% intervals (e.g. demo-0551 #2: 70.3%, interval 56.3–84.4%). Ranks 1–5 within a comp are close; the gap between #1 and #10 is real, the gap between #1 and #3 mostly is not. The punch-list order is an expected-value ranking, not a prediction.
- **Dynamic risk:** every judged entry is shown on the public Feed as soon as it is judged, so the field copies winners within hours. Whatever wins early in our 3-hour window will be cloned by the end of it. A fresh angle submitted early is worth more than a proven template submitted late.
