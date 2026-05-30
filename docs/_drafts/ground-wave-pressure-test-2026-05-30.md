# Ground-Wave Pressure-Test — 2026-05-30

**Status:** Draft / staging. Runs the 22 games in [ground-wave-spec-2026-05-27.md](ground-wave-spec-2026-05-27.md) against the harvest rubric so we don't ship "logged" as "build-ready." Direct answer to "how do you know these fit our method?" — we *don't* until the spec clears this gate.

**Rubric (same as the harvest pressure-test):**
- **R1** one asymmetric representative start (not 2 or 3 alternate starts)
- **R2** observable, non-stall win on the dominant side + threshold for holds
- **R3** both sides have a defined outcome (continuous side has a measured success)
- **R4** non-circular real prereqs (the Positional-Battle/ground-access trap)
- **R5** typed clinch / named position
- **R6** correct protagonist wins, internally consistent
- **R7** (leglock/submission only) safety adequate (slow finish, tap-early, heel hidden)

**Verdict key:** ✅ **PASS** · ⚠️ **CONDITIONAL** (one named defect to fix) · 🔴 **NOT-YET**

---

## Headline

**14 PASS, 8 CONDITIONAL, 0 NOT-YET.** No game fails the spec; every CONDITIONAL has a precise fix. The recurring defects are predictable:

1. **Multi-start R1 leak** (4 games): E1, E5, F1, F2 declare 2–3 alternate starts (e.g. "mount OR S-mount", "RNC OR triangle OR guillotine"). Exactly the `standup-loop` failure mode we just fixed library-wide. Fix: pick ONE canonical start, the others become Levels; OR split into multiple pages. Either way I should NOT build them as currently written.
2. **Win-condition vagueness** (1 game): A4 KOB "attack started" is the kind of fuzzy phrase we just removed from `sustained-offense`/`wall-grinding`. Define the observable proof.
3. **Win-condition overlap across pages** (1 game): A5 north-south's win path bleeds into E4 kimura. Bound A5 to positional, leave the finish to E4.
4. **Prereq mismatch** (2 games): C3 closed-guard-bottom and E6 leg-entanglement prereq `ground-defensive-submission`, which isn't a gateway to *offensive* guard or leg attack. The QA finding that bit `ground-access` last week.

What this validates: the spec's *structural* mapping (SMGC ladder → our Levels stepper) holds — no game failed that. The defects are sentence-level fixes, not architectural.

**What this does NOT cover** (the honest limit): R5-representativeness *for our system* — whether each game matches what Alex actually teaches in his classes. That requires the 2026-05-30 class transcript (ingest running). When it lands, the same 22 get a second pass against Alex's narrated win conditions and attractor language; CONDITIONALs may flip either way.

---

## ✅ PASS — build-ready as written (14)

| # | Game | Why it passes |
|---|---|---|
| A1 | Mount Maintenance | Single asymmetric start (settled mount, hips low); top wins by elbow extended/contracted + isolated-arm 3s; bottom graded escape; 20s clock; prereq `ground-control` clean. |
| A2 | Side-Control Ride | One start (perpendicular chest-to-chest, named grips); top wins on bent-arm control 3s OR mount advance; bottom: turtle/seated/full guard. Mirrors built `side-control-escape`. |
| A3 | Back Maintenance | One start (chest-to-back, seatbelt, both hooks); observable non-stall win "choking arm under chin 3s"; mirror of `back-escape`; prereq chain non-circular (ground-escape → back-escape → back-maintenance). |
| B1 | Closed Guard: Open & Pass | One start; top wins past-guard chest-to-chest 3s; bottom wins sweep/sub/back-take 3s; prereq `ground-access`. |
| B2 | Open Guard Pass | One start; top wins past-knee-line chest-to-chest 3s; bottom wins off-balance-to-hands/seat (SMGC formulation, fully observable). |
| B3 | Half-Guard Pass | One start (one leg trapped, underhook/cross-face contested); top wins leg freed to side/mount 3s; bottom wins knee shield / inside hook / full guard. |
| C1 | Seated Guard Retention | One start (or one-shin/one-hand vs standing — flag: very mild start variation, accept as a stance variant the way we do for some striking games). Wins observable on both sides. |
| C2 | Half-Guard Bottom (Knee Shield) | One start; bottom wins sweep/full-guard/back-take OR "lift fully off the ground" (rename "ball of yarn" → "elevate the top"); top wins shield cleared 3s. |
| D1 | Turtle Break-Down | One start; top wins hips OR shoulders touch mat OR chest-to-back+hooks 3s. Three observable terminal paths (not vague — each is a distinct concrete event). |
| D2 | Turtle Survival & Escape | One start; bottom wins stand / re-guard / exit to entanglement; top wins back-with-hooks OR pin 3s. |
| E2 | Back Finish (RNC) | One start (back control, seatbelt, choking-arm contest); slow-pressure tap is the observable finish; defender escape paths concrete; safety framing strong. |
| E3 | Guard Submission Hunt (Triangle) | The exemplar ladder game. Single start; bottom wins triangle locked + slow finish; top wins posture-out/pass; prereq C3 (note: C3 itself is CONDITIONAL — fix C3 prereq first). |
| E4 | Side/NS Submission (Kimura) | One start (top perpendicular, far hand on far wrist); top wins 2-on-1 figure-four + finish position 3s slow; bottom wins feet between / reverse. |
| F3 | Leg-Lock Defense | One start (ashi, heel exposed, no finish); defender wins hide-heel + clear-knee-line OR stand; safety hard (slow, no explosive escape, tap early). |

## ⚠️ CONDITIONAL — fix the named defect first (8)

| # | Game | Defect (rubric) | Fix |
|---|---|---|---|
| A4 | Knee-on-Belly Control | R2 — "isolated-arm attack *started*, held 3s" is the same vague phrasing we deleted elsewhere | Define the observable: e.g. "secure a 2-on-1 grip on one of bottom's arms AND lift the elbow off the mat for 3s," OR "transition to mount and hold 3s." Pick one, observable, no judgment call. |
| A5 | North-South Control | R6 — win path "secure a kimura/arm isolation" duplicates E4's finish; the page should be positional only | Trim A5's win to the positional transition + 3s (SMGC's own 3s on north-south "Transition"). Leave kimura finish to E4. |
| C3 | Closed Guard Bottom (Off-Balance & Attack) | R4 — prereq `ground-defensive-submission` doesn't gate *offensive* guard attack | Swap to `leg-reclaim` (guard recovery) + optional C1 Seated Guard Retention. Re-check downstream E3 prereq (which currently points to C3). |
| E1 | Mount Submission Hunt (Armbar) | R1 — two declared starts ("mount with both arms isolated overhead OR S-mount transition") = the standup-loop failure mode | Pick canonical start = SMGC "Maintain Arm Isolation" (mount, both bottom arms isolated overhead). S-mount becomes Level 2 or 3, NOT a co-canonical start. |
| E5 | Front-Headlock / Guillotine Series | R1 — two starts ("front headlock, bottom on hands & knees, OR supine guillotine"); also R6 — page combines front-headlock-to-back + supine guillotine + chain-to-any-other-sub — too many distinct positions on one page | **Split into two pages:** (a) Front-Headlock to Back (kneeling defender, SMGC head-and-arm ladder), (b) Guillotine Finish & Chain (supine, SMGC guillotine ladder incl. the 3s stand escape). Cleaner pedagogy, satisfies R1. |
| E6 | Leg-Entanglement Entry (Straight Ankle) | R4 prereq mismatch + R7 leglock safety needs Alex's domain review before any canonical build | Prereq → `ground-access` + an explicit pre-class safety brief. Alex reviews the safety framing first (mat reality call only he can make). Build LAST, with the heaviest review gate. |
| F1 | Choke Defense | R1 — three declared starts (RNC OR triangle OR guillotine) | Either (a) **split into 3 pages** (RNC Defense, Triangle Defense, Guillotine Defense), each one start — strong but adds page count, OR (b) canonicalize on RNC defense as the page, triangle and guillotine as Levels with explicit start swaps. Recommend (a) — pedagogically distinct, matches how `back-escape` / `mount-escape` / `side-control-escape` already split. |
| F2 | Joint-Lock Defense (Armbar/Kimura) | R1 — two declared starts (armbar OR kimura) | Split into 2 pages: Armbar Defense, Kimura Defense. Same logic as F1 (a). |

---

## R5 validation — audit against 2026-05-30 class (partial)

Audio ingested + mined: see [class-mining-2026-05-30.md](class-mining-2026-05-30.md) for the 5 games Alex ran today (4 striking variants + 1 ground integration). **Honest read:** the class was striking-focused, so it does NOT directly test any of the 22 ground-wave games. R5 for the specific 22 remains open until we get a grappling-focused class.

**What today's class DID validate (method-level — these all hit):**
- Asymmetric starts every game.
- Multiple observable terminal win paths for the active side (G3: counter/leg-connect; G5 bottom: stand/reverse/closed-loop) — matches our D1/D2 pattern.
- Continuous-side-with-no-win + terminal-side-with-observable-events (G5: *"top player cannot win"*) — exactly the SMGC pattern we encoded for our maintenance games.
- Skill-isolation-by-constraint as a Level (G4: body-kick-only counter is a Level of G3) — confirms our ladder→Levels mapping.
- "Closed loop, don't need to finish" as the observable submission proxy — same logic as our "arm under chin 3s" for back-escape.
- Perimeter step-out = loss — same convention as the library.

**What today's class did NOT validate:**
- None of the 22 ground-wave games came up by name or by mechanic.
- No data on Alex's preferred position-by-position teaching sequence (SMGC ladder order may or may not match).
- No data on Alex's attractor / order-parameter language for ground positions.

**One predictable defect confirmed:** Alex used *"as long as possible"* for the top role in G5 — the same threshold gap the spec already addresses. When we build that game, we add the clock. (Consistent with the headline finding above: thresholds are the universal differentiator.)

**Bonus from audio (not in scope of this pressure-test but worth flagging):**
- 4 new Alex-original games on the striking side (coverage-map C gaps) + 1 ground-integration game (coverage-map M #67 Ground-and-Pound Defense). See the mining report.
- These are *not* in the ground-wave spec. They get their own evaluation under Alex's review.

**Net:** the ground-wave method is empirically supported by Alex's coaching pattern, but the specific 22 ground-wave game pages are still un-cross-checked at R5. **The next grappling class is the missing validator** — until then, only build games where SMGC source + the rubric give us high confidence, and stop short of canonical until Alex's domain pass.

---

## Net effect on build order

Recommended sub-wave order from the spec was: B+C guard → A pins → D turtle → E subs (triangle exemplar) → F defense → leglocks LAST.

After this pass, that order stands, with these adjustments:
- **C3 must be fixed before E3** (E3 depends on C3 prereq chain).
- **F1, F2, E5 are split-into-multiple-pages calls** — re-estimate count: 22 nominal → **24–26 actual pages** (F1 → 3, F2 → 2, E5 → 2, the rest 1:1). Library 36 → ~60–62 after the ground wave.
- **E1's S-mount goes from start to Level**, no count change.
- **E6 leg-entanglement waits on Alex's safety review**, no count change.
- Everything else builds as written.
