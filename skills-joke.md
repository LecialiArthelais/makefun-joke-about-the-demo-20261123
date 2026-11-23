# Skills research — the-joke-about-the-demo ($50, closes 23 Nov 11:12 WIB)

Research done 22 Nov 2026 (~21:40 WIB). Judge brief weighs, in order:
(1) on-subject (a joke about working beside AI coding agents),
(2) surprise punchline, (3) truth (recognisable from a real demo),
(4) economy (one line, never explains itself), (5) freshness (not stock).

Rule applied to every candidate: **>500 stars live via GitHub API AND
line-by-line SKILL.md audit with safety PASS** (no network exfil, no shell
injection, no credential handling, no remote code execution). Installed via
`npx skills add <repo> --skill <name> -y` from `~/workspace/custom-skills/`,
then moved from `.agents/skills/<name>/` to `custom-skills/<name>/` with the
`.claude/skills/<name>` symlink re-pointed to `../../<name>`.
`npx skills list` confirms all four.

## Installed skills (4)

| Skill | Repo | Stars (live) | Licence | Pinned commit | NOTE.md |
|---|---|---|---|---|---|
| copywriting | coreyhaines31/marketingskills | 61,984 | MIT | `5b2b400` | [NOTE.md](sandbox://workspace/custom-skills/copywriting/NOTE.md) |
| ai-copywriter | mikiarlo3/ai-copywriter | 1,192 | MIT | `08b53b1` | [NOTE.md](sandbox://workspace/custom-skills/ai-copywriter/NOTE.md) |
| writing-principles | haowjy/creative-writing-skills | 601 | Apache-2.0 | `8d39b73` | [NOTE.md](sandbox://workspace/custom-skills/writing-principles/NOTE.md) |
| creative-writing-craft | haowjy/creative-writing-skills | 601 | Apache-2.0 | `8d39b73` | [NOTE.md](sandbox://workspace/custom-skills/creative-writing-craft/NOTE.md) |

All four SKILL.md files were read line by line (343 / 533+11 / 99 / 27 lines)
and audited SAFE. Installed copies verified byte-identical to the audited
copies, except ai-copywriter: installed v1.6.0 vs audited v1.5.1 — the delta
is 11 lines of prose ("Strategic blog posts" section) + version bump, read
in full, no scripts/network/credentials added. The only bundled script,
ai-copywriter's `scripts/validate-package.py`, was read in full: local-only
version/pattern checks, no network, no subprocess, no credentials.
A grep for curl/wget/subprocess/eval/exec/api-key/password/secret/token
over all installed files returned only benign prose (examples of banned
phrases). Full per-skill audit detail is in each NOTE.md.

## How the builder should use them (in order)

1. **ai-copywriter** — the primary drafting skill. Use COPYWRITING MODE's
   short-description rules (one idea, first five words carry the benefit,
   respect the character budget — here 1–280 chars) and the reader-first
   intake: the reader is a developer in a demo room; the feeling is
   recognition + surprise. Generate 5–10 one-liner variants across angles
   (number, contradiction, named enemy, outcome), lead with a pick.
   Then run every variant through its audit questions: does it meet the
   reader's feeling? Could the reader repeat it after one read? Would it
   survive alone on a billboard? Cut any variant failing one.
   Use §31 (manufactured punchlines / staccato drama) and §32 (aphorism
   formulas like "X is the Y of Z") as a REJECT filter — those are exactly
   the stock-joke shapes the freshness criterion punishes.
2. **copywriting** — the selection skill. Decompose-and-lock: draft 2–3
   candidates per angle, keep the best, fix its worst flaw, lock it.
   Run each surviving line through the three-question gate: (1) can the
   reader picture it? (2) can it be proven true or false — i.e. is it a
   real demo observation, not decoration? (3) swap test — could a
   competitor / any other joke write this exact sentence? "Ration the
   punch": exactly one punchline moment, at the end, never explained.
   Check the no-AI-tells list before finalising (no contrast reveals,
   no negation lists, no colon reveals, no em dashes).
3. **writing-principles** — the diagnostic pass. Trust the reader: if the
   line explains its own joke, cut the explanation. Economy: what can be
   left out and still have it work — every word must do more than one
   thing. Check the curiosity/prediction reward channel: setup must create
   an expectation the punchline breaks (surprise, criterion 2). If a
   candidate feels flat and you can't name why, check
   `resources/failure-modes.md` and `resources/antipatterns.md`.
4. **creative-writing-craft** — the final polish pass only. Read
   `resources/prose-modes.md` (alternate take + line polish): produce
   alternate takes of the chosen joke, line-polish the best. Use
   `resources/prose-writing.md` (rhythm) so the line reads well aloud.
   Do NOT load the `resources/genre/` files — irrelevant for a one-liner.
   Do not let fiction-craft bloat the line: the entry is one line, ≤280 chars.

Judge-criteria mapping (for the builder's self-check):
- (1) on-subject — every variant must be about working beside an AI coding
  agent, not AI in general. Reject anything off-subject first.
- (2) surprise punchline — ai-copywriter §31/§32 filter + writing-principles
  prediction-reward channel.
- (3) truth — copywriting gate Q2 (falsifiable, a real demo moment) +
  ai-copywriter "never invent facts / boring-but-true beats invented".
- (4) economy — writing-principles economy + copywriting "ration the punch"
  + ai-copywriter billboard test; never explain the joke.
- (5) freshness — copywriting swap test + ai-copywriter §31/§32 rejects.

## TypeScript/Node program craft (d)

Already covered by an installed skill — no new install needed:
- **typescript-advanced-types** (wshobson/agents, 42,782★, installed
  22 Nov 2026, NOTE.md in `custom-skills/typescript-advanced-types/`):
  strict-mode discipline, `unknown` over `any`, type tests. main.ts here
  is a trivial program (write one string to `/output/entry.txt`), so use
  it only for a light final review: correct UTF-8 write, character count
  in Unicode code points (1–280, not just whitespace), non-zero exit on
  failure, no network (sandbox has none).

## Rejected skills

| Candidate | Repo | Stars (live) | Reason |
|---|---|---|---|
| comedy-writers-room | talsraviv/comedy-writers-room | 12 | Stars <500. Comedy-writing subagent orchestration demo; interesting topic, fails the star rule. |
| comedy-roast-skill | pamelafox/comedy-roast-skill | 11 | Stars <500. Roasts based on GitHub/X/M365 activity — wrong subject (not AI coding agents) and needs account data. |
| humor.skill | caicai688/humor.skill | 19 | Stars <500. Chinese-language humour skill, 254k-word corpus. |
| standup-comedy-writing | 717281250-lgtm/standup-comedy-writing | 3 | Stars <500. Chinese/English stand-up material polishing. |
| hermes-comedy-writing | SpencerRaw/hermes-comedy-writing | 3 | Stars <500. Stand-up framework (Attitude→Insight→…→Scenarization). |
| comedy-short-video-skill | heran1225-byte/comedy-short-video-skill | 3 | Stars <500. Comedy short-video ideation/scripts, not one-liners. |
| standup-comedy-skill | kioup2008/standup-comedy-skill | 1 | Stars <500. |
| punchline-first | nomuman/punchline-first | 0 | Stars <500. Punchline-first structure idea is on-topic, but 0 stars and unaudited repo. |
| HumorUp | KimmyPlusLi/HumorUp | 0 | Stars <500. Bilingual wit punch-up, on ClawHub not GitHub. |
| humor-skill | carlopug/humor-skill | 0 | Stars <500. |
| ecommerce-visual-copywriting-skill | feichanggege/ecommerce-visual-copywriting-skill | 1,193 | Passes stars, but REJECTED as irrelevant: e-commerce product-image copywriting (Chinese), nothing to do with one-line jokes. Not audited in depth. |
| code-review-skill | awesome-skills/code-review-skill | 2,306 | Passes stars AND safety (SKILL.md read line by line, 232 lines, prose only; `scripts/pr-analyzer.py` read — local diff stats, no network/subprocess/credentials). NOT installed: redundant for this bounty — (d) is already covered by installed `typescript-advanced-types`, and main.ts is a trivial file-write program; a PR-review workflow (PR descriptions, diff triage, 30+ language guides) adds nothing the builder needs. |
| boraoztunc/skills | boraoztunc/skills | 485 | Stars <500 (just under). Copywriting/SEO/design collection. |
| proficiently-claude-skills | proficientlyjobs/proficiently-claude-skills | 468 | Stars <500. Job search/resume skills — off-topic anyway. |
| claude-skills-journalism | jamditis/claude-skills-journalism | 458 | Stars <500. Journalism/verification — off-topic. |
| content-skills | artemnovitckii/content-skills | 144 | Stars <500. Writing-fix skills (dumbify, storytelling, viral-hooks) — on-topic flavour, fails the star rule. |
| copywriters-handbook-skill | kangarooking/copywriters-handbook-skill | 40 | Stars <500. Sales copywriting method distilled from a book. |
| copywritingskills-rmbc | coleschaffer/copywritingskills-rmbc | 42 | Stars <500. RMBC copywriting methodology. |
| direct-response-copywriting-skill | brandonuttley/direct-response-copywriting-skill | 17 | Stars <500. Long-form sales copy in the style of classic copywriters. |
| conversion-copywriter-skill | mikefutia/conversion-copywriter-skill | 12 | Stars <500. Landing-page/email copy. |
| herk-edit-kit | nateherkai/herk-edit-kit | 3,066 | Passes stars, REJECTED as irrelevant: video-editing skills (reels/Shorts), not writing. Not audited in depth. |

Note: no GitHub skill found with >500 stars dedicated to comedy, humour,
stand-up, or one-liner joke writing specifically — the comedy/humour skill
repos that exist are all <20 stars. The installed set above covers the same
ground via copywriting + prose craft, which is the closest available
>500-star material. If a dedicated joke-writing skill crosses 500 stars
later, it is worth re-checking.
