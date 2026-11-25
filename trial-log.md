# Trial log — makefun-ex-decaf

- Competition slug: `u-puan-describe-your-ex-in-one-word-9fc6ebe7`
- Competition title: Describe Your Ex in One Word
- Prize: $2 (free entry)
- Deadline: 27 Nov 2026 14:40 WITA (2026-11-27T06:40:00Z)
- Submitted word: `decaf` (5 characters, verified with Python `len()`)
- Field at build time: 159 submissions

## Why `decaf`

An ex as decaf coffee: it looks exactly like the real thing and has zero
effect. The cup is familiar, the ritual is familiar, the kick never
arrives. Precise absurdity rather than a plain insult — the joke lands
at a glance and needs no caption, and anyone who has had an ex that felt
like a familiar routine with nothing in it nods at it.

## Families avoided

The field is saturated with the unsubscribe/recall family
(unsubscribed, unsubscribe, recalled, placeholder, uninstalled,
expired). `decaf` is 0 hits in the field and belongs to no saturated
family.

## Trials

### Trial 1 — local run of `main.ts` (25 Nov 2026, ~07:05 WITA)

- Command: `node main.ts` (local Node v24.22.1; sandbox runtime is node22)
- Exit code: 0
- `/output/entry.txt` bytes: `b'decaf'` — exactly 5 bytes, no trailing
  newline, no extra whitespace
- Checks: single word yes; length 5, inside the 1–111 gate yes;
  UTF-8 yes
- Result: PASS

### Trial 2 — kit `check` + `bundle` (CLI) (25 Nov 2026, ~07:06 WITA)

- Kit: fresh download, `kit.json` bundle_sha256
  `4d2de2ee75cfc5fba1046621c13263e3d101687e7d2cd0526f468fdc6cb6c16e`
  matches the live API `bundleSha256` exactly.
- Bundle: `bundle.tar.gz`, 270011 bytes, sha256
  `5c5f92d7d3e384b3e75d982e278f97a15fec95e2ca474da261ef7cc1219ed209`
  (session b6a4334c, 37 turns; prompt from the scheduled
  makefun-new-program-watch task, origin scheduled).
- Check (`makefun check`, kit dev): **13 passed, 1 failed, 5 skipped,
  5 checked at submission.**
  - Pass: competition_open, snapshot, license_osi, entrypoint
    (main.ts at root selects node22), transcripts_present,
    transcripts_recorded, thinking_wellformed, thinking_in_window,
    thinking_reproduces (50/52 lines authored, 96.1%),
    thinking_turns (34 turns), thinking_revised (trial-log.md from
    2 write/edit messages), transcripts_run_record,
    thinking_own_work.
  - FAIL (only one): thinking_priced — 0 usage rows attached. Expected
    for a subagent: usage rows are written only once this run
    completes. The coordinator re-runs the muse.db SELECT with both
    agent ids and re-bundles; nothing to rebuild.
  - At submission (site checks, not local failures): repo_public,
    repo_owner, repo_created_after_open, commit_in_repo,
    duplicate_snapshot. Repo is public, commit b5d8180 is pushed,
    owner.json is committed.
- Result: READY FOR COORDINATOR RE-BUNDLE + SUBMIT (no rebuild needed).
