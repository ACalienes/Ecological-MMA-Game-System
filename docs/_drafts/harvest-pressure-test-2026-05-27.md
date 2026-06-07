# Harvest Pressure-Test — 2026-05-27

**Status:** Draft / staging. Pressure-tests every distinct *new* game from both Discord harvest batches against our QA spec, not the harvester's SOLID/PARTIAL labels.

**Rubric:** R1 one asymmetric representative start · R2 observable win+loss with a threshold for holds · R3 both sides have a defined outcome (continuous side needs a *measured* success) · R4 non-circular real prereqs · R5 typed clinch / named position · R6 correct-protagonist win, internally consistent.

**Verdict key:** ✅ **PASS** = build-ready as written · ⚠️ **CONDITIONAL** = strong game, one defect to fix first (the defect is named) · 🔴 **NOT-YET** = harvester's PARTIAL confirmed, or a meta-format/lesson-plan, not a standalone game.

---

## Headline finding

The harvest's **"SOLID" tracked "is this a clear, coherent idea" — not "does it meet our observable-win bar."** The single recurring defect across the SOLID games is **R2: "hold as long as possible / continuous" with no measured threshold** — the *exact* flaw our own qa-findings caught in `wall-grinding` ("sustained damage", no count), `sustained-offense` ("rhythm broken", no threshold), and `standup-loop` ("partial control", undefined). It runs through ~12 of the SOLID-labeled games. The fix is uniform and trivial (add a time or count), which is why these are CONDITIONAL, not failures.

Second pattern: a cluster of games give one side **"no win condition, just prevent/maintain."** That is *not* the Positional-Battle symmetric-start flaw — it is the deliberate continuous-vs-terminal asymmetry, and it passes **as long as the maintaining side has an observable loss and the terminal side a thresholded win.** Where it fails is only when neither side has a clock.

Symmetric starts (salsa, landmines, touch-the-foot, standing-3-ways) do **not** replicate the Positional-Battle failure: they are timing/reflex/multi-win games with observable terminal wins, which is the same exception we already granted `touch-game`.

**Counts:** ~35 PASS · ~15 CONDITIONAL (almost all "add a threshold") · ~15 NOT-YET/meta.

---

## ✅ PASS — build-ready as written (model exemplars marked ★)

| Game | Why it passes |
|---|---|
| ★ Mount escape 5-game ladder (Aaron) | Clean asymmetric ladder, each rung a defined frame condition, G5 terminal "between top and mat." Fills the mount hole. Model for the ladder pattern. |
| ★ Side-control escape ladder (RobDurden) | Stepped top control A/B/C, observable bottom win (guard/stand), top win (mount/back). |
| ★ North-south escape ladder (Diviney) | 4 rungs, frame-defined, escape observable, G4 choke-aware. |
| ★ Sub-control framework (breanne) | Passes *as a template*: asymmetric (sub already in), terminal escape vs maintain/upgrade. Each instantiation must name the specific sub + legal escape. |
| Over/under guard-pass dilemma | Top: clear+connect hands. Bottom: close leg loop. Both observable. |
| Double-leg finishing 4-series (binney) | Four starts presented as explicit levels (not ambiguity), sprawl-to-FH loss observable. |
| Handfighting-to-takedown 3-game (binney) | Small circle, knee-touch = loss, observable. |
| Corbe scramble re-engagement | Asymmetric knee grips, hips-down/C2B observable. |
| Body-lock dot scramble (Aaron) | Disc + time limit. Exemplary observable win. |
| Defend-the-dot grip fight (Aaron) | Disc + 3s grip hold. |
| Rear-body-lock grounding (Aaron) | Hips-on-mat + head-arm vs disconnect. |
| Single-leg 3-series (Freduccine) | Staged, leg-clear = reset. |
| Leg-entanglement 3-series (Souders) | Hips/hands to floor observable; top clears knee line. |
| HQ guard warmup (Aaron) | Knees-touch = loss, hands/hips-touch = reset. Crisp. |
| Pass-or-get-under (Aaron) | Force passer to hands/knees/hips; double-knee = loss. |
| Seated-guard engagement (Aaron) | Stand-w/-leg or hands-to-mat vs shoulders-to-mat. |
| Pressure-passing (hesostrong) | Side control 3s vs recover/sweep. |
| Closed-guard opening 3-series (Diviney) | Stand/open vs sweep/sub. |
| Half-guard bottom 4-series (Spacecity) | Per-game asymmetric, stated wins. |
| Leg-ent secondary-leg (Aaron) | Expose heel vs clear knee line. |
| Grounded-hips body-lock→head-arm (Aaron) | Hips-off-mat = loss. |
| Turtle scramble disc (Aaron) | Disc + 15s. |
| Front-headlock complete class (Spacecity) | Three named win paths, observable. |
| Armbar intro spiderweb 4-series (Spacecity) | Staged, slip-elbow = escape. |
| Gi-choke from back 3-series (Diviney) | Staged alignment→grip→finish, turn-to-face = defense win. |
| K-guard → matrix/back-take (Chase) | Take back vs prevent both stages; disengage/pass = loss. |
| DLR / leg-lock 3-variant (Vasja) | Variant-specific observable (finish / outside legs / collect). |
| Inside-camping open guard (martin/Vasja) | Off-balance-to-hips OR entangle vs continuous pass; flat = loss. |
| Kids judo hip-throw (mtwol) | Throw vs counter-grip+reap; run-away = loss. Kids-scaled. |
| Grilled Chicken open-guard 2-game (Etobeda) | 4 points 5s, pin-knee 3s. Thresholds already present. |
| Floppy-fish armbar (jan tan musi) | Elbow-to-floor escape, depth dial, switch on success. |
| KOB no-hands transition (Connection) | Hands-touch = loss, transition defined. |
| Gi single-leg 4-game (Zindan) | Stepped grips, hand/hips-to-mat observable. |
| Seated butterfly vs passer (breanne) | Bodylock+back vs sweep/back-take; retreat-out = loss. |
| Armbar dual-win (Zindan) | Armbar OR re-mount vs free-elbow; clasping tradeoff. |
| KOB→split leg-lock 3-game (Morgan/breanne) | Hips-down OR crossed-ankle-above-knee; observable. |
| FH control / von-flu (pmorim, x2) | Back-on-mat vs legs-to-opposite-side. |
| Arm-in guillotine 3-position (Macakanja) | Finish vs free-head across 3 starts. |
| TimGoodwin guillotine variation (leg-lock counter) | Bottom locks around leg = observable. |
| KOTH angle-cutting (Nuggs) | Pull-past-circle / C2B / single-leg. |
| 7-day double-under pass (Aaron) | Segmented feet→knees→hips, each observable. |
| Standing 3-ways-to-win (Nuggs) | Three terminal wins, symmetric OK (multi-win). |
| Landmines foot-sweep (Nuggs) | Step-on-plate observable; no falls. |
| Salsa dancing (gerf) | Touch stepping-foot; timing game, symmetric OK. |
| Passing through the fog (Aaron) | Small-wins defined + 3s hold; first-try C2C smash = loss. |
| Back control 3-game (jan tan musi) | Called-sub vs maintain; turn-to-face = defense. |
| Body-triangle entry (pmorim) | Switch-side + RNC vs turn-and-end-on-top. |
| Lasso head-and-arm trigger (dNice) | Back-of-head exposure → capture = win rep. |
| Dot-stand level-change (Vasja) | Full point system. Best-specified game in the harvest. |
| Closed-circuit subgames (Aaron) | Named subgoals, observable. |

## ⚠️ CONDITIONAL — fix the named defect before building (mostly: add a threshold)

| Game | Defect (rubric) | Fix |
|---|---|---|
| K-guard intro/control (pmorim) | R2 — "maintain as long as possible," no threshold | Bottom holds N sec = win; top reaching HQ before then = win. |
| K-guard front↔back transition (pmorim) | R2 — "clean transitions," count undefined | Define "clean" by the body-part-touch constraint; X transitions in 60s. |
| Closed-guard→K-guard entry (Chase) | R3/R6 — top has "no win" yet loss = "top passes," but top is *constrained* from passing | Make top's loss "fails to prevent knee-to-chest for N sec"; remove the contradictory pass-loss or lift the no-pass constraint. |
| KOB no-hands base (Aaron) | R2 — top "no win," continuous | Top holds N sec = win; bottom rotating free = win. Loss (hands touch) already observable. |
| Back-chase sticker cue (Aaron) | R2 — win is "continuous, sticker stays in front," no clock | Sticker-in-front for N sec = win; rotates behind = loss (already observable). |
| Sticky targets (Aaron, Batch 2) | R2 — "cumulative hold-time," no target | First to X cumulative seconds, or most in a 90s round. |
| "Drowning" head-harassment (Aaron, Batch 1) | R2 — "as long as possible" | Most cumulative sec head-under in the round; keep the EMOM start-swaps. |
| 3-ways-to-win handfight (Aaron, Batch 1) | R2 — "hold past threshold" undefined | Define the hold (e.g. 3s) per win path. |
| Posture/inside-control 4-game (MrWild) | R2 — G1–G3 "continuous-posture," no threshold; G4 fine | Add a hold or count to the early posture rungs. |
| One-cue-4-starts d'Arce (Aaron) | R2/R5 — "maintain control / control & funnel" fuzzy | Define "control" as a head-position + hold time per start. |
| Guillotine 4-game (TimGoodwin) | R2 — G1 "no win, continuous" | G1 needs a hold/count; G2–G4 already terminal. |
| Half-guard balled-up (gwj) | R2 — resolves on "stalemate timeout" | Set the timer explicitly; underhook/pass win already observable. |
| Side-control no-C2C (breanne) | R2 — top "continuous, time runs out" | State the round length; bottom's knees/reguard win already observable. |
| Guard retention no-grips (barbellstan) | R2 — bottom's win is survival, no clock | Not-passed for N sec = bottom win. |
| "Fun pin" no-C2C (Batch 1) | R2 — top "control for max time" vs bottom 3s | Use bottom's 3s as the clock; cap the round. |
| Tim Goodwin forehead/wrist (Batch 1) | R2/R5 — "dominant head position / 2-on-1" win is fuzzy | Define the win as 2-on-1 secured for 3s. |
| Closed-circuit warmup (Chase+Aaron) | R2 — "upgrade circuit" endpoint undefined | Name the terminal circuit (e.g. reaching a single) or use only the hand/butt-down win. |
| Peek-out sprawl (Lukas/plape) | R2 — top "hold for time," unspecified | Set the hold (e.g. 5s elbows-down). |
| Under-elbows 4-position (Ash) | R2 — "stated condition" per position not enumerated | Name the win for each of mount/side/turtle/back (under-both-elbows held 3s, or head-arm isolated). |
| Back seatbelt continuous (breanne) | Borderline R2 — has 3s sub-thresholds but framed "continuous" | Acceptable; just frame the round outcome (completed cycles vs escape). |

## 🔴 NOT-YET — confirmed not-yet-a-game, or a meta-format/lesson-plan

| Item | Why |
|---|---|
| Freeze-frame shot (Stuart) | No win per depth. Needs per-depth conditions. |
| Downed-single defense (seneca) | No time/score cap. |
| Trip-throw (Vasja) | Win conditions tbd. |
| "No connected hands" wrestling (WARLORD) | Takedown depth undefined. |
| "Circles" 4th-contact (Morgan) | Continuous, no win condition. |
| Anaconda↔guillotine dilemma (pmorim) | No start/win per finish path. |
| Eyes-closed sub control (breanne) | Variant only; needs a base game + force cap (safety). |
| Scramble 3-day mini-block (slime mold) | Meta-framework, not a game. |
| Pinning-while-moving (Aaron) | Start/win locked in an untranscribed PDF. |
| Fake-guard-pull (Aaron) | "Secret mission" fragment, no win condition. |
| Touch-the-foot as *kick defense* (Aaron) | Passes as a footwork game (hips-to-mat = loss); does NOT yet cover kicks as claimed. Treat as footwork-evasion, build the kick version separately. |
| Hangman team game (Batch 1) | Whole-class scoring layer (a format), not a single game. |
| Secret-missions deck (Aaron/dNice) | Meta-layer over any roll (a format, like Positional Sparring). Valid — but assess as a format, not a game. |
| First-timer 1-on-1 session plan (MickyP) | Lesson plan, not a game. |

---

## What this changes for the build

- **Don't build straight from the SOLID labels.** ~12 of them carry the same threshold defect our existing library was just dinged for. Add the clock first.
- **The PASS list is still large (~35)** and includes the three model ladders + the sub-control template — enough to start the per-position ground block immediately without touching a CONDITIONAL.
- **One systemic fix unlocks most CONDITIONALs at once:** a house rule that every maintenance/continuous game resolves on a stated time or count. Worth baking into the page template (ties to the "continuous-vs-terminal" pattern).
