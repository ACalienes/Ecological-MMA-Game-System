# Ground Wave — Build Spec (2026-05-27)

**Status:** Draft / unpublished staging. Build-ready spec for the per-position GROUND games. Sources: deep-mine of Slime Mold Grappling Club (SMGC, `slimemoldgrappling.com`, Hugo repo `github.com/trydydd/slimemoldgrappling`), merged against [coverage-map.md](coverage-map.md) and [jj-web-research-2026-05-27.md](jj-web-research-2026-05-27.md).
**Credit (always):** SMGC games are credited overwhelmingly to **Greg Souders / Standard Jiu-Jitsu**; also **Rob Cole / BJJ Globetrotters** (scrambles), **Justin Mark / Impact Jiu-Jitsu** (standing-vs-seated guard), **Craig Jones** (shin-surfing leg ride). Every page we build from these credits the originator in `docs/reference/sources.md`; we re-express mechanics under our own names. See [[feedback-credit-sources]].

---

## 1. The key architectural find (changes how we build)

SMGC decomposes **one position** into a **ladder of constraint micro-games**, escalating by removing constraints / adding goals, then a live round:

> maintain connection (isolation, often no win for top) → **use** the connection → **create** the connection → add submission-hunt → **live** (roll to sub, reset, repeat).

This is **exactly our 5-level "Levels" stepper** (proven on `mount-escape`). So the SMGC ladder for each position becomes the **Levels 1–5 of our single game page** for that position-role. One full `emma-*` page per position-role; the micro-games are its levels. This gives us source-grounded, sequenced levels instead of inventing them.

## 2. Conversion rules (SMGC → our system)

1. **One full game page per position-role** (e.g. "Mount Maintenance" = the top side; "Mount Escape" = the bottom side, already built). The SMGC micro-game ladder → our Levels 1–5.
2. **Apply the threshold house rule.** SMGC is ~all event-based / "as long as possible" (only two 3s holds in the whole library) — our **20s maintenance clock + "control proven by a 3s hold of the key position"** is the differentiator. Never imply a threshold was sourced.
3. **Observable, non-stall win for the dominant player** (the rule we locked): top wins by an *advance/isolation*, not by sitting — mount = isolate+extend an arm; back = arm under the chin; side = bent-arm (kimura/americana) control; turtle = hips-or-shoulders to mat; guard-pass = chest-to-chest past the legs held 3s.
4. **No em dashes; distilled instructions; visual-first** — same template as `mount-escape`.
5. **Do NOT build from junk:** skip the SMGC empty stubs (3 kesa pages), the `test-back-game` artifact, and treat `untested`-tagged games as design input, not gospel. Pressure-test each before canonical, like the harvest.
6. **Credit the originator** on every page's source line.

## 3. Status of the grid

- **BUILT (bottom/escape side):** `mount-escape`, `side-control-escape`, `back-escape` ✓. Generic intro pages exist: `ground-access` (pass), `ground-control` (maintain), `ground-escape`, `leg-reclaim` (guard recovery), `ground-to-standing`, `ground-defensive-submission`. The per-position pages below sit *beneath* these generics (mount-escape already deepens ground-escape's mount level — same pattern).
- **This spec adds ~22 new pages** → library 36 → ~58, the single biggest step toward 100+.

---

## 4. Build list

Format per game: **[Our Name]** — env/domain/focus · maps coverage# · *SMGC source ladder* · credit. Then Start / Wins (observable + threshold) / Levels (from the SMGC ladder) / Prereq.

### SUB-WAVE A — Pin maintenance (top side) · coverage G #36–40

**A1. Mount Maintenance** — ground/grappling/offensive · #36 · *SMGC mount: wrist_pinning_and_trapping → elbow_exposure_extension_contraction → transitioning_to_shoulder_line → low/middle/high_mount* · Souders
- Start: Top settled in mount, hips low; bottom flat, hands at top's hips.
- Win (top): expose and extend/contract an elbow off the centerline (the shared armbar/arm-triangle entry), held 3s. Win (bottom): recover knees in front (→ half guard floor, graded) or reverse. Threshold: 20s round; Reset if neither; OOB = loss.
- Levels: L1 wrist-pin to floor → L2 expose elbows (extend/contract) → L3 climb to shoulder line → L4 low→high mount pressure → L5 live, light strikes.
- Prereq: ground-control. Pairs with `mount-escape` (mirror).

**A2. Side-Control Ride** — ground/grappling/offensive · #37 · *SMGC side_control: maintain_connection → arm_isolation → chest_to_chest_pin_control → open_side_control → use_connection(→mount); scarf_hold variant* · Souders + SMGC
- Start: Top chest-to-chest, perpendicular, near arm under head + far under armpit, hands connected; bottom flat.
- Win (top): bent-arm control (kimura/americana figure-four) on one arm, OR advance to mount, held 3s. Win (bottom): escape to turtle, seated guard, or full guard. Threshold: 20s; OOB = loss.
- Levels: L1 chest-to-chest pin (deny rotation) → L2 isolate one arm (bent-arm) → L3 double-arm isolation → L4 open side control → transitions/mount → L5 live.
- Prereq: ground-control. Mirror of `side-control-escape`.

**A3. Back Maintenance** — ground/grappling/offensive · #38 · *SMGC back: maintain_and_break_connection → shoulder_and_hip_control → maintain_control → submission_hunting* · Souders
- Start: Top chest-to-back, seatbelt, both hooks in; bottom seated against chest. (Mirror of `back-escape`.)
- Win (top): get the choking arm under the chin (RNC closing), held 3s — the observable non-stall proof. Win (bottom): turn to face by any means. Threshold: 20s; OOB = loss.
- Levels: L1 chest-to-back, no hands linked → L2 connect hips+shoulders → L3 seatbelt + both hooks maintain → L4 one-hook + hunt under the chin (no 2nd hook) → L5 live finish (slow, tap-early).
- Prereq: ground-control + `back-escape`.

**A4. Knee-on-Belly Control** — ground/grappling/offensive · #39 · *SMGC knee_on_belly: no_hands → maintain_position → kob_attacks* · SMGC original
- Start: Top knee on belly, posted, opposite leg extended; bottom flat, framing the knee/hip.
- Win (top): keep KOB live through framing (may switch sides / advance to mount), proven by an isolated-arm attack started, held 3s. Win (bottom): clear the knee and recover guard, or reverse. Threshold: 20s; OOB = loss.
- Levels: L1 no-hands KOB (balance only) → L2 hands-connected maintain → L3 switch sides / re-pin → L4 isolate an arm / attack → L5 live.
- Prereq: ground-control.

**A5. North-South Control** — ground/grappling/offensive · #40 · *SMGC north_south: maintain_the_pin → maintain_arms_out_pin → use_connection(→3s transition)* · SMGC original
- Start: Top chest-to-chest north-south, elbows in bottom's armpits, bottom's head at top's beltline; bottom on back.
- Win (top): transition to in-line north-south or opposite-side side-control and hold 3s (SMGC's own 3s), or secure a kimura/arm isolation. Win (bottom): bring knees/feet between, sit up, or reverse. Threshold: 20s; OOB = loss.
- Levels: L1 north-south pin (flatten) → L2 arms-out pin → L3 transition to side/NS (3s) → L4 kimura-trap hunt → L5 live.
- Prereq: ground-control. (Fills the empty north-south bucket.)

### SUB-WAVE B — Guard, top side (passing) · coverage F #31–33

**B1. Closed Guard: Open & Pass** — ground/grappling/offensive · #31 · *SMGC closed_guard: create_and_break_connections → opening_the_feet → stand_up; (bottom counter: hip_and_shoulder_connection → to_the_back)* · SMGC
- Start: Top kneeling inside bottom's closed guard, posture contested; bottom closed guard, controlling posture.
- Win (top): open the guard and pass to chest-to-chest side control, held 3s. Win (bottom): break posture to sweep, submit, or take the back (hips to shoulder outside the arms, 3s — SMGC's threshold). Threshold: round-capped; OOB = loss.
- Levels: L1 win posture (break grips) → L2 open the feet → L3 stand to open → L4 pass to side → L5 live (bottom may sweep/sub/back-take).
- Prereq: ground-access.

**B2. Open Guard Pass** — ground/grappling/offensive · #32 · *SMGC open_guard: create_and_break_connections → maintain_connection → open_guard_sweeping; shin_surfing (leg ride)* · Souders + Craig Jones (shin-surf)
- Start: Top standing/kneeling at bottom's feet; bottom on back, knees retracted, framing the inside of top's legs.
- Win (top): clear the feet, pass the knee line to chest-to-chest, held 3s. Win (bottom): off-balance top to hands/seat, or recover/sweep. Threshold: round-capped; OOB = loss.
- Levels: L1 clear the feet line → L2 pass to the knee line (in/outside) → L3 shin-surf leg ride → L4 to chest-to-chest → L5 live.
- Prereq: ground-access.

**B3. Half-Guard Pass** — ground/grappling/offensive · #33 · *SMGC half_guard: hip_access → single_underhook_control → underhook_control* · Souders
- Start: Top in bottom's half guard, one leg trapped; underhook/cross-face contested.
- Win (top): free the trapped leg to side/mount chest-pin, held 3s. Win (bottom): establish knee shield or inside hook, sweep, or recover full guard. Threshold: round-capped; OOB = loss.
- Levels: L1 win hip access (flatten) → L2 single underhook + chest-to-chest → L3 double underhooks → L4 free the leg to side → L5 live.
- Prereq: ground-access.

### SUB-WAVE C — Guard, bottom side (retention / recovery / sweep) · coverage H #44–46

**C1. Seated Guard Retention** — ground/grappling/defensive · #44 · *SMGC seated_guard: structure_and_connections → causing_posts → connect_to_the_shoulders → punishing_posts; (vs standing) create_and_break → control_the_leg → destabilization* · Souders + Justin Mark
- Start: Bottom seated, feet between top's knees (or one shin/hand connected vs a standing passer); top working to flatten.
- Win (bottom): off-balance top to hands/seat, or connect double-unders + hands at the shoulder line (back-take entry), held 3s. Win (top): flatten bottom to the back, or pass. Threshold: round-capped; OOB = loss.
- Levels: L1 keep structure + feet inside → L2 cause posts → L3 punish posts (hold the post) → L4 connect to shoulders / destabilize → L5 live.
- Prereq: leg-reclaim / ground-escape.

**C2. Half-Guard Bottom (Knee Shield)** — ground/grappling/combined · #45 · *SMGC half_guard: maintain-shield → causing_posts → punishing_posts → ball_of_yarn* · SMGC (Modern Defensive Guard)
- Start: Bottom on side, knee shield framed in; top working to remove the shield.
- Win (bottom): sweep, recover full guard, take the back, or lift top fully off the ground ("ball of yarn"). Win (top): clear the knee shield to chest-to-chest, held 3s. Threshold: round-capped; OOB = loss.
- Levels: L1 maintain the knee shield → L2 cause posts → L3 punish posts (hips to shoulder / 2-on-1) → L4 elevate / off-balance → L5 live.
- Prereq: leg-reclaim.

**C3. Closed Guard Bottom (Off-Balance & Attack)** — ground/grappling/combined · #46 · *SMGC closed_guard: create_and_break_connections → hip_and_shoulder_connection → to_the_back (3s); seated causing/punishing posts* · SMGC
- Start: Bottom closed guard controlling posture; top working to posture up.
- Win (bottom): sweep, submit, or climb to the back (chest-to-back, 3s). Win (top): posture up and open the guard. Threshold: round-capped; OOB = loss.
- Levels: L1 control posture → L2 cause/trap posts → L3 connect hips to shoulder outside the arms → L4 climb to the back (3s) → L5 live.
- Prereq: ground-defensive-submission / leg-reclaim.

### SUB-WAVE D — Turtle · coverage F #34 + survival gap

**D1. Turtle Break-Down (top)** — ground/grappling/offensive · #34 · *SMGC pinning: cover_the_head_and_shoulders → cracking_the_egg → turtle_arm_attack → turtle_with_post_control → turtle_body_lock → turtle_ankle_attacks; front_headlock_to_back → isolate_the_neck* · Souders + SMGC
- Start: Top in front/side, chest on bottom's shoulder blades; bottom turtled (elbows + knees).
- Win (top): break bottom down so hips OR shoulders touch the mat, OR reach chest-to-back with hooks, held 3s. Win (bottom): stand up, or exit into a leg entanglement on top's legs. Threshold: 20s; OOB = loss.
- Levels: L1 cover head+shoulders → L2 crack the egg (break to mat) → L3 attack the arms/posts → L4 body lock / ankle attacks → L5 live (incl. front-headlock to back).
- Prereq: ground-control.

**D2. Turtle Survival & Escape (bottom)** — ground/grappling/defensive · NEW (survival gap) · *mirror of D1 + web: BJJ-vs-wrestling exits (Granby/sit-out vs stand-up)* · re-express (do NOT use Mihkelson branded posture names)
- Start: Bottom turtled, top attached chest-to-back, no locked seatbelt yet.
- Win (bottom): stand to neutral, recover guard (Granby/sit-out), or exit to a leg entanglement. Win (top): secure chest-to-back with hooks, or break to a pin (hips/shoulders to mat), 3s. Threshold: 20s; OOB = loss.
- Levels: L1 tight structure, deny hooks/seatbelt → L2 hand-fight the front headlock → L3 wrestling exit (stand) → L4 BJJ exit (sit-out / re-guard) → L5 live.
- Prereq: ground-escape.

### SUB-WAVE E — Submission offense (ladders) · coverage I #47–52

**E1. Mount Submission Hunt (Armbar)** — ground/grappling/offensive · #47 · *SMGC armbar: hold_them_down → maintain_the_transition → maintain_arm_isolation → breaking_the_grip → maintaining_the_finish* · Souders (+ Spacecityliving on grip-break)
- Start: Top mounted with both of bottom's arms isolated overhead (or S-mount transition); bottom defending the arm.
- Win (top): isolate one arm and reach the armbar finish position (forearm pinned, hips in), control held 3s — finish slow, tap-early. Win (bottom): return both elbows inside, or topple top. Threshold: round-capped; OOB = loss; SAFETY: slow finish, tap early.
- Levels: L1 hold them down (arms isolated) → L2 maintain the transition (S-mount) → L3 break their defensive grip → L4 reach the finish position (no crank) → L5 live finish (slow).
- Prereq: A1 Mount Maintenance.

**E2. Back Finish (RNC)** — ground/grappling/offensive · #48 · *SMGC RNC: uncovered_shoulders → with_uncovered_hips → with_one_arm → maintaining_the_finish → sub_transition → finishing* · SMGC originals
- Start: Top in back control, seatbelt; choking-arm contest at the neck.
- Win (top): secure the RNC closing (arm under chin, locked), tap via slow pressure. Win (bottom): turn to face, hide the back, or stand. Threshold: round-capped; SAFETY: slow pressure, tap early, "play only enough to take both sides."
- Levels: L1 establish from uncovered shoulders → L2 with hips uncovered → L3 one-arm control → L4 maintain the closing (no squeeze) → L5 live finish / sub-transition.
- Prereq: A3 Back Maintenance.

**E3. Guard Submission Hunt (Triangle)** — ground/grappling/offensive · #49 · *SMGC triangle ladder: causing_posts → punishing_posts → arm_in_arm_out → maintaining_the_finish (the 6-game model)* · Souders
- Start: Bottom in guard, top posturing with contact.
- Win (bottom): reach arm-in/arm-out, lock the triangle, control to finish (slow). Win (top): posture out / pass. Threshold: round-capped; SAFETY: slow finish.
- Levels: L1 cause posts → L2 punish posts (hook the post) → L3 arm-in/arm-out isolation → L4 lock the triangle (no finish) → L5 live finish.
- Prereq: C3 Closed Guard Bottom. (The cleanest example of the ladder model.)

**E4. Side/North-South Submission (Kimura)** — ground/grappling/offensive · #50 · *SMGC kimura: complete_the_grip → control; darce: maintain; head_and_arm path* · SMGC
- Start: Top perpendicular (side/north-south), far hand on far wrist.
- Win (top): secure the 2-on-1 figure-four (kimura) and the finish position, 3s control (slow). Win (bottom): bring feet between or reverse. Threshold: round-capped; SAFETY: release on self-injury risk.
- Levels: L1 complete the grip (2-on-1) → L2 maintain the figure-four → L3 darce/head-arm alternative → L4 finish position (no crank) → L5 live.
- Prereq: A2 Side-Control Ride.

**E5. Front-Headlock / Guillotine Series** — ground/grappling/offensive · #51 · *SMGC head_and_arm: stabilize_front_headlock → capture_head_and_arm → finishing; guillotine: with_one_arm → maintain_the_finish → any_other_submission (3s) → finishing* · Souders + SMGC
- Start: Top with a front headlock, bottom on hands and knees (or supine guillotine).
- Win (top/attacker): finish the strangle, OR when it fails, get legs between + stand 3s is the *defender's* escape (SMGC's explicit 3s); attacker may chain to any other submission. Win (defender): free the head, or stand for 3s. Threshold: round-capped; SAFETY: uncomfortable not choking, slow.
- Levels: L1 stabilize the front headlock → L2 capture head+arm (dump to back) → L3 one-arm control → L4 maintain (no choke) → L5 live finish / chain to another sub.
- Prereq: D1 Turtle Break-Down.

**E6. Leg-Entanglement Entry (Straight Ankle)** — ground/grappling/offensive · #52 · *SMGC straight_ankle: capture_the_foot → maintain_control → finishing; cross_ashi: maintaining_control* · SMGC + Rob Cole (cross-ashi)
- Start: Both seated in ashi garami, attacker's overhook on the captured leg.
- Win (attacker): capture the foot in the armpit and reach the straight-ankle finish, slow, tap-early. Win (defender): hide the heel and free the leg. Threshold: round-capped; SAFETY (hard): no heel exposure, no fast finishes, release if unsafe.
- Levels: L1 capture the foot → L2 maintain control (no heel exposure) → L3 cross-ashi/saddle maintain → L4 finish mechanics (slow) → L5 live (ankle only).
- Prereq: ground-defensive-submission. NOTE: leglocks need the strongest safety framing; build last, flag for Alex's review.

### SUB-WAVE F — Submission defense (mirrors) · coverage J #53–55

**F1. Choke Defense** — ground/grappling/defensive · #53 · *mirror of E2/E3/E5 "maintaining the finish" (defender side) + web RNC hand-fight, triangle posture-out* · re-express
- Start: Defender in a half-applied RNC, triangle, or guillotine (not yet finished).
- Win (defender): neutralize the choking arm / posture out / free the head, escape to neutral. Win (attacker): reach the closing position, 3s. Threshold: round-capped; SAFETY: tap early.
- Levels: L1 chin down, two hands on the choke arm → L2 posture/frame out → L3 strip the seatbelt / free the head → L4 escape to neutral → L5 live.
- Prereq: ground-defensive-submission.

**F2. Joint-Lock Defense (Armbar/Kimura)** — ground/grappling/defensive · #54 · *mirror of E1/E4 (defender) + web hitchhiker/connect-and-escape* · re-express
- Start: Defender's arm isolated mid-armbar or mid-kimura, not yet extended.
- Win (defender): glue the elbow / hitchhike, relieve hip pressure, hide or spin the arm out. Win (attacker): the extension/figure-four finish, 3s. Threshold: round-capped; SAFETY: tap early.
- Levels: L1 connect hands, elbow glued → L2 relieve the hip → L3 spin/hide the arm → L4 escape to top/neutral → L5 live.
- Prereq: ground-defensive-submission.

**F3. Leg-Lock Defense** — ground/grappling/defensive · #55 · *mirror of E6 (defender) + web clear-the-knee-line* · re-express
- Start: Defender's leg entangled in ashi, heel exposed, no finish yet.
- Win (defender): hide the heel, control the hands, clear the knee line out the back, or stand. Win (attacker): heel/ankle control to a slow tap. Threshold: round-capped; SAFETY (hard): slow, no explosive escapes, tap early.
- Levels: L1 hide the heel + hand-fight → L2 boot/clear the foot → L3 clear the knee line → L4 stand/pass out → L5 live (controlled).
- Prereq: ground-defensive-submission.

---

## 5. Count & sequencing

- New pages: A(5) + B(3) + C(3) + D(2) + E(6) + F(3) = **22**. Library 36 → **~58**. Plus the 4 SMGC scramble games → treat as **transition games** (Sub-Wave G, fold into existing scramble/transition coverage K) or as a positional-sparring FORMAT add-on.
- **Recommended build order** (dependency + leverage):
  1. **B (guard passing)** + **C (guard bottom)** — biggest user-expected gap, pairs cleanly, no safety load.
  2. **A (pin maintenance)** — mirrors the 3 built escapes, fast to template.
  3. **D (turtle)** — closes a whole position.
  4. **E (submission offense)** — the ladder model shines here; build E3 triangle first as the exemplar.
  5. **F (submission defense)** — mirrors of E.
  6. **E6 leglocks LAST** — heaviest safety framing; Alex reviews before canonical.
- Build in QA-gated sub-waves like the visual rollout: draft → pressure-test (start asymmetric? observable non-stall win? threshold? safety?) → full `emma-*` page + hero → strict build → canonical.

## 6. Data-quality & IP flags

- **Do NOT build from:** SMGC empty stubs (`establish_scarf_hold`, `maintain_broken_kesa_gatame`, `upgrade_scarf_hold`), `test-back-game`, `dorsal_kimura` (empty), `newgame3`, `cover_the_heel` (empty). Treat `untested`-tagged games as input, not gospel — pressure-test all.
- **Heads-up overlaps:** SMGC frames `back/submission_hunting`, `side_control/submission_hunting`, `knee_on_belly/kob_attacks` as positional but their win is a tap — we split those into the maintenance page (positional levels) vs the submission page (finish), per our role-based pages.
- **IP / credit:** Souders/Standard JJ, Rob Cole/BJJ Globetrotters, Justin Mark/Impact JJ, Craig Jones — credit on the Sources page; re-express mechanics + names. Avoid Mihkelson's branded posture names for D2; describe the structure. [[feedback-credit-sources]]
