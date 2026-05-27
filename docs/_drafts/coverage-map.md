# Coverage Map & Gap Analysis — 33 → 100+ Games

**Status:** Draft / unpublished staging. Not in the built site. Source of truth for the next library-expansion wave.
**Date:** 2026-05-26.

Goal: grow the game library from the current 33 to 100+ as *structured* coverage of the whole-MMA constraints-led space, not random padding. This document inventories what exists, enumerates the full sensible game space, and proposes ~70 new games (clearing 100 with margin), each designable to our QA spec (one representative start, observable win/loss, non-circular prerequisites, typed clinches, no symmetric-start error).

---

## 1. Current Coverage (33 games)

"Positional Battle" is now the **Positional Sparring FORMAT**, not a game — it is the live layer applied on top of position games, not a slot in the grid. `the-square` is a WIP class-derived progression (mixed domain). Both are listed but excluded from the gap math below as discrete teaching games.

| # | Game | Environment | Domain | Focus | Phase |
|---|------|-------------|--------|-------|-------|
| 1 | Parry the Straight | skill-isolation | striking | defensive | counter |
| 2 | Tight Block | skill-isolation | striking | defensive | counter |
| 3 | Slip the Straight | skill-isolation | striking | defensive | counter |
| 4 | Evade the Punch | skill-isolation | striking | defensive | counter |
| 5 | Lead Hand Offense | skill-isolation | striking | offensive | access/exploit |
| 6 | Rear Hand Offense | skill-isolation | striking | offensive | exploit |
| 7 | Lead Leg Offense | skill-isolation | striking | offensive | access/exploit |
| 8 | Rear Leg Offense | skill-isolation | striking | offensive | exploit |
| 9 | Touch and Don't Get Touched | open-space | striking | combined | access |
| 10 | Close-Range Defense | open-space | striking | defensive | counter |
| 11 | Counter-Striking | open-space | striking | defensive | counter |
| 12 | Evasive Movement | open-space | striking | defensive | counter |
| 13 | Land the Target | open-space | striking | offensive | exploit |
| 14 | Sustained Offense | open-space | striking | offensive | exploit |
| 15 | Pressure to Clinch | open-space→wall | wrestling | combined | access |
| 16 | Pressure to Wall | open-space→wall | wrestling | offensive | access |
| 17 | Clinch Denial | transition (open↔wall) | wrestling | defensive | counter |
| 18 | Pressure to Takedown | open-space→ground | wrestling | offensive | access |
| 19 | Open Space Takedown | open-space→ground | wrestling | combined | access |
| 20 | Takedown Defense | open-space→ground | wrestling | defensive | counter |
| 21 | Counter-Wrestling | transition (open↔ground) | wrestling | defensive | counter |
| 22 | Wall Control (Establish Pin) | wall | wrestling | offensive | stabilize |
| 23 | Wall Grinding | wall | wrestling | offensive | exploit |
| 24 | Wall Escape (Anti-Pin) | wall | wrestling | defensive | counter |
| 25 | Wall Defensive Submission | wall | grappling | defensive | counter |
| 26 | Wall Pin to Ground | wall→ground | wrestling | offensive | access |
| 27 | Stand-Up & Re-Pin Loop | wall (↔ground) | wrestling | combined | counter/access |
| 28 | Ground Access (Pass) | ground | grappling | offensive | access |
| 29 | Ground Control | ground | grappling | offensive | stabilize |
| 30 | Ground Escape | ground | grappling | defensive | counter |
| 31 | Leg Reclaim (Guard Recovery) | ground | grappling | defensive | counter |
| 32 | Ground to Standing | ground | grappling | defensive | counter |
| 33 | Ground Defensive Submission | ground | grappling | defensive | counter |
| — | Positional Sparring | (format) | — | combined | — |
| — | The Square (WIP) | open-space | mixed | defensive | — |

### Coverage density read

- **Skill isolation:** 8 games, but only weapons (4 offense) + head-movement/parry/block defense. No per-defense isolation for *kick* defenses (check, catch), no elbows/knees/clinch-strike isolation, no footwork/distance isolation, no southpaw/stance handedness split.
- **Open-space striking:** reasonably dense (6) for offense/defense/counter, but **no feinting game, no range-management (two-range) game, no southpaw-vs-orthodox game** — all named eco-psych priorities (kendo two-range rule).
- **Clinch:** entirely collapsed into "Pressure to Clinch" + wall games. **No clinch entries by TYPE** (50/50 over-under, body lock, collar-tie, underhook battle, pummeling), no center-clinch (non-wall) offense/defense, no clinch knees/elbows game, no clinch break game. This is the single biggest structural hole.
- **Wall:** 6 games but only one position (generic pin). No per-position wall games (back-to-wall vs face-to-wall, front headlock on wall), no wall-submission *offense*, no wall stand-up by position.
- **Ground:** 6 games but all **generic** ("ground access/control/escape") — there is NO per-position game. The taxonomy names 8 positions (back, mount, side, half-guard, closed guard, open guard, turtle, north-south) and ~10 submissions, and essentially none have a dedicated game. Submission *entry* (offense) is almost entirely absent; only defensive-submission exists.
- **Transitions:** open↔wall and open↔ground covered one direction mostly; wall↔ground partial; **no ground→wall or ground→stand-in-scramble dedicated game beyond the loop.**
- **Counters & submissions:** de-emphasized by design so far — a whole gap. Counters exist for striking/wrestling entries but not for ground attacks or specific submissions.

---

## 2. Proposed New Games (~70), grouped by category

Format: `Name — env / domain / focus — representative start + objective`. Priority: **High** = obvious hole a paying user expects · **Med** = real coverage value · **Low** = completeness/nice-to-have. Every entry has ONE clear asymmetric start and an observable win/loss (no symmetric-ground-start error; clinches are typed).

### A. Skill Isolation — weapons (5)
1. **Elbow Isolation** — skill-isolation / striking / offensive — A starts in close range, must land elbows (horizontal/up/down) on shield; B blocks only. Win = clean elbow on target zone. **Med**
2. **Knee Isolation** — skill-isolation / striking / offensive — A in collar-tie on a held pad/partner, lands knees to body; B defends frame. Win = clean knee to body. **Med**
3. **Clinch Strikes Isolation** — skill-isolation / striking / offensive — A has single collar-tie, scores short hooks/uppercuts ("dirty boxing") inside; B covers. Win = clean inside strike. **Med**
4. **Lead vs Rear Read (handedness)** — skill-isolation / striking / offensive — A must alternate-lead a strike off B's reaction; isolates which weapon the opening affords. Win = strike matched to the opening. **Low**
5. **Southpaw Weapon Isolation** — skill-isolation / striking / offensive — same weapon games run from southpaw stance only, attuning to the open-side cross/lead-hook geometry. Win = land the open-side power shot. **Med**

### B. Skill Isolation — defenses (6)
6. **Check the Kick** — skill-isolation / striking / defensive — B faces fed low/body round-kicks, must check with shin; no countering. Win = clean shin check, loss = clean leg/body contact. **High**
7. **Catch the Kick** — skill-isolation / striking / defensive — B faces fed teeps/body kicks, must catch and trap the leg. Win = secured catch, loss = clean kick. **Med**
8. **Roll the Hook** — skill-isolation / striking / defensive — B faces fed hooks only, must roll/shoulder-roll under; isolates the roll vs the slip. Win = hook rolled, no clean contact. **High**
9. **Pull Counter Isolation** — skill-isolation / striking / defensive — B faces fed straights at range, must pull (lean-back) just off range. Win = strike falls short, B stays in counter range. **Med**
10. **Footwork Evasion Isolation** — skill-isolation / striking / defensive — B must avoid fed straights using feet only (no head movement, no hands). Win = avoided by position, loss = clean contact. **High**
11. **Parry the Kick / Frame Isolation** — skill-isolation / striking / defensive — B faces fed teeps, must parry/redirect the push kick off-line. Win = teep redirected, loss = clean push to center mass. **Low**

### C. Open Space — striking depth (6)
12. **Feint and Commit** — open-space / striking / offensive — A must land only off a feint-induced reaction from B; raw blitzes don't count. Win = strike that lands behind a reacted feint. **High**
13. **Two-Range Game (Kendo)** — open-space / striking / combined — both work only at two preferred ranges with a "dead middle" that scores against whoever lingers there. Win = score from a committed range; loss = caught dwelling in the middle. **High** (named eco-psych rule)
14. **Southpaw vs Orthodox** — open-space / striking / combined — A orthodox, B southpaw; lead-foot-outside battle, win = land the rear straight with lead foot positioned outside. **High**
15. **Range Management / Long Game** — open-space / striking / defensive — B (longer reach role) must score at the end of range and never let A close; A tries to close distance. Win for B = land at range and reset distance. **Med**
16. **Body-Head Investment** — open-space / striking / offensive — A must land to the body before any head shot counts; isolates the body→head sequence. Win = head shot that follows a landed body shot. **Med**
17. **Pressure vs Lateral** — open-space / striking / combined — A pressures forward to a boundary, B uses lateral movement/pivots to avoid being walked down. Win A = pin B to boundary; win B = circle out clean. **Med**

### D. Clinch — entries & types (typed) (7)
18. **Over-Under (50/50) Battle** — open-space→clinch (center) / wrestling / combined — both start hands-down at touching range; first to win a clean over-under 50/50 and break the other's posture. Win = 50/50 with broken posture. **High**
19. **Body-Lock Entry** — open-space→clinch / wrestling / offensive — A must connect a closed body-lock around B's hips from a single tie; B sprawls/peels. Win = locked hands behind B's back. **High**
20. **Collar-Tie Control** — clinch (center) / wrestling / offensive — A establishes a dominant double collar-tie and snaps posture; B postures up / frames. Win = B's head broken below shoulder line. **High**
21. **Underhook Battle** — clinch (center) / wrestling / combined — both fight for the deep underhook from a neutral single-under tie. Win = deep underhook + head position to the back. **High**
22. **Pummel to Dominate** — clinch (center) / wrestling / combined — continuous pummel from double-under vs double-over; win = achieve double-unders with hands locked. **High**
23. **Clinch Knees & Elbows** — clinch (center) / striking / offensive — A in a Thai plum (double collar-tie), lands knees; B fights the plum and frames. Win = clean knee before B breaks the plum. **Med**
24. **Clinch Break** — clinch (center) / striking / defensive — B is tied up (single collar-tie) and must break cleanly back to striking range without eating a strike on exit. Win = clean separation to range. **Med**

### E. Wall — per-position depth (6)
25. **Back-to-Wall Escape** — wall / wrestling / defensive — B's back is flat to the wall in an over-under; must rotate/peel out to get off the wall. Win = corner-turn off the wall, loss = held 5s. **High**
26. **Face-to-Wall (Front Headlock on Cage)** — wall / wrestling / offensive — A has a front headlock with B's hips at the wall, works the spin-to-back. Win = take the back; loss = B stands and squares up. **Med**
27. **Wall Underhook Pin** — wall / wrestling / offensive — A has one deep underhook pinning B to the wall, drives shoulder pressure; B whizzers out. Win = flatten + immobilize 5s. **Med**
28. **Wall Takedown Entry** — wall→ground / wrestling / offensive — A from a wall pin must complete an outside trip or single off the wall; B sprawls and stays standing. Win = B's hips to mat. **High**
29. **Wall Submission Offense** — wall / grappling / offensive — A from a front headlock at the wall attacks the standing guillotine/arm-in; B postures and circles. Win = tap or forced posture-break to the floor. **Med**
30. **Wall Stand-Up Defense** — wall / wrestling / defensive — B seated against wall, A in a standing-over control; B must wall-walk to standing. Win = B fully stood, loss = re-pinned/dragged down. **Med**

### F. Ground — per-position ACCESS / passing (5)
31. **Closed Guard Open & Pass** — ground / grappling / offensive — A in B's closed guard (top), must open and pass to side control; B holds and threatens. Win = side control 3s; loss = swept or submitted. **High**
32. **Open Guard Pass** — ground / grappling / offensive — A standing in B's open/seated guard, must pass the legs to a pin; B retains. Win = past the legs to control. **High**
33. **Half-Guard Pass** — ground / grappling / offensive — A in B's half-guard (top), frees the leg to side/mount; B underhooks and recovers. Win = leg freed + chest pin. **High**
34. **Turtle Break-Down** — ground / grappling / offensive — A on top of a turtled B, must break to a pin or back take; B re-stands or rolls. Win = back hooks or flatten. **Med**
35. **Knee-Slide / Leg-Drag Entry** — ground / grappling / offensive — A in open guard, must complete a leg drag past the hips; B frames and re-guards. Win = past the hip line to control. **Med**

### G. Ground — per-position CONTROL / maintain (5)
36. **Mount Maintenance** — ground / grappling / offensive — A in mount, must stay mounted 20s while B bridges/elbow-escapes. Win = held 20s; loss = guard recovered or reversed. **High**
37. **Side-Control Ride** — ground / grappling / offensive — A in side control, retains vs B's framing/shrimping for 20s. Win = held; loss = guard or escape. **High**
38. **Back Control Maintenance** — ground / grappling / offensive — A has back with seatbelt + one hook, keeps the back while B peels hands and turns in. Win = held with chest connection 20s; loss = B turns to face. **High**
39. **Knee-on-Belly Control** — ground / grappling / offensive — A on knee-on-belly, keeps it live vs B's hip escape, may switch to mount/side. Win = pressure held / advanced; loss = B recovers half-guard. **Low**
40. **North-South Ride** — ground / grappling / offensive — A in north-south, controls B's framing for 15s. Win = held; loss = B re-guards or turns in. **Low**

### H. Ground — per-position ESCAPE / defense (6)
41. **Mount Escape** — ground / grappling / defensive — B mounted, must bridge/elbow-escape to guard or recover. Win = guard recovered or reversal; loss = held + struck 20s. **High**
42. **Side-Control Escape** — ground / grappling / defensive — B under side control, recovers guard or turtles to stand. Win = guard/turtle-up; loss = held 20s or advanced on. **High**
43. **Back Escape** — ground / grappling / defensive — B has A on the back (seatbelt+hooks), must peel and turn in before the choke. Win = turn to face / get on top; loss = RNC tap. **High**
44. **Guard Retention** — ground / grappling / defensive — B in open guard, A pressure-passing; B must keep the legs between them for 30s. Win = never passed; loss = pinned. **High**
45. **Half-Guard Sweep/Recover** — ground / grappling / combined — B in bottom half-guard with an underhook, sweeps or recovers full guard; A flattens. Win = sweep to top or full guard; loss = flattened/passed. **Med**
46. **Closed Guard Bottom Threats** — ground / grappling / combined — B in closed guard (bottom), must off-balance/attack while A postures to pass. Win = sweep or submission; loss = posture-broken-open & passed. **Med**

### I. Ground — per-position SUBMIT (offense) (6)
47. **Mount Submission Hunt** — ground / grappling / offensive — A in mount attacks armbar/arm-triangle as B defends frames. Win = tap; loss = guard recovered. **High**
48. **Back Finish (RNC)** — ground / grappling / offensive — A on the back with seatbelt, finishes the RNC; B fights the hands and hides the chin. Win = tap; loss = escape to front. **High**
49. **Guard Submission Hunt** — ground / grappling / offensive — B (bottom, attacking guard) hunts triangle/armbar/omoplata; A postures and defends. Win = tap or sweep; loss = passed. **High**
50. **Side-Control Submission** — ground / grappling / offensive — A in side control attacks kimura/americana/arm-triangle; B frames and turns. Win = tap; loss = escape. **Med**
51. **Guillotine Series** — ground/clinch / grappling / offensive — A with a front headlock finishes high-elbow/arm-in guillotine; B posture-recovers or comes out the back. Win = tap; loss = clean escape to top. **Med**
52. **Leg-Entanglement Entry** — ground / grappling / offensive — A enters a single-leg-X/ashi from open guard and attacks straight ankle-lock; B clears the leg. Win = tap or controlled position; loss = leg cleared & passed. **Low**

### J. Ground — SUBMISSION DEFENSE (3)
53. **Choke Defense (RNC/Guillotine)** — ground / grappling / defensive — B is in a half-applied choke, must defend hands/posture before the tap. Win = neutralize and improve; loss = tap. **High**
54. **Joint-Lock Defense (Armbar/Kimura)** — ground / grappling / defensive — B's arm is isolated mid-attack, must hitch-hike/stack out before extension. Win = arm recovered; loss = tap. **High**
55. **Leg-Lock Defense** — ground / grappling / defensive — B's leg is entangled, must clear the heel and rotate out before the breaking angle. Win = leg free; loss = tap. **Med**

### K. Transitions — both directions, per-pair (5)
56. **Ground to Wall (Scramble Up)** — transition (ground↔wall) / wrestling / combined — bottom player uses the wall to wrestle up into a clinch pin; top player re-flattens. Win = stand into wall clinch; loss = re-pinned. **High** (the missing reverse on the map)
57. **Open Space to Ground (Knockdown Follow)** — transition (open↔ground) / striking→grappling / offensive — A drops B with a strike (simulated/light), must follow to a finishing position before B recovers guard/stands. Win = pin/sub entry; loss = B recovers. **Med**
58. **Wall to Open Space (Disengage to Strike)** — transition (wall↔open) / striking / combined — B breaks the wall clinch and must re-establish striking range and land first; A re-clinches. Win B = clean strike at range; loss = re-clinched. **Med**
59. **Takedown to Pass (Land & Pass)** — transition (open↔ground) / wrestling→grappling / offensive — A completes a takedown and must immediately pass to a pin before B recovers guard; B fights to guard. Win = pin past the legs; loss = closed/open guard. **High**
60. **Sprawl to Top (Counter-Scramble)** — transition (open↔ground) / wrestling / combined — A sprawls on B's shot and must spin to top/back; B re-shoots or stands. Win = top or back; loss = B stands clean. **Med**

### L. Open Space — counters (4)
61. **Counter the Kick** — open-space / striking / defensive — A faces fed round/teep kicks, must counter (check-return, catch-sweep, or cross over the kick). Win = land a counter inside the kick's recovery; loss = clean kick. **High**
62. **Counter the Clinch Entry** — open-space / wrestling / defensive — A faces B's clinch entry, must counter with a frame-and-strike or snap-down before tie-up. Win = B's entry punished/denied; loss = clinch achieved. **Med**
63. **Counter the Pressure** — open-space / striking / defensive — B is being walked down, must counter the pressure with a pivot-and-land or stiff-arm jab. Win = reverse the pressure / land on entry; loss = pinned to boundary. **Med**
64. **Intercept the Shot** — open-space / wrestling / defensive — A faces B's takedown shot, must intercept with knee/uppercut/guillotine on the level change. Win = clean intercept; loss = leg secured. **Med**

### M. Integration / Full-MMA cross-domain (6)
65. **Strike to Takedown to Pass** — integration / mixed / offensive — A chains a striking entry → takedown → guard pass for a pin; B defends the chain at any link. Win = pinned past the guard; loss = B stuffs any link to neutral. **High**
66. **Sprawl-and-Brawl** — integration / mixed / combined — A wants to keep it standing and strike; B wants to take it down. Round scored on whose phase dominates. Win A = strike at range / stuff takedowns; win B = takedown + control. **High**
67. **Ground-and-Pound Defense** — integration / mixed / defensive — B on bottom (guard/half) must defend strikes while recovering or standing; A controls and strikes. Win B = stand or sweep; loss = sustained clean strikes (TKO). **High**
68. **Cage Cut to Finish** — integration / mixed / offensive — A must cut the cage, pin B to the wall, and finish via knees/takedown; B circles off the fence. Win = wall finish path reached; loss = B escapes to center. **Med**
69. **Submission Threat to Strike (Trap)** — integration / mixed / offensive — A on top uses a submission threat to open B's frame, then strikes the exposed opening. Win = clean strike off the reaction; loss = swept/escaped. **Med**
70. **Three-Phase Round (Full Expression)** — integration / mixed / combined — open round that must pass through all three states (open→clinch/wall→ground) at least once; scored on control across phases. Win = dominance across all three; the capstone live game. **Med**

---

## 3. Biggest Holes — the 8–10 categories most worth filling first

Ranked by how visible the gap is to a paying user expecting a complete whole-MMA curriculum:

1. **Per-position GROUND games (the whole grid).** We have generic "ground access/control/escape" but zero per-position games for mount, side, back, half-guard, closed/open guard, turtle. This is the largest single structural hole — categories F, G, H cover it (~16 games). A user clicks "mount" and expects mount-specific games.
2. **Submission OFFENSE (entries).** The system de-emphasized submissions; offense is nearly absent. RNC, mount armbar, guard triangle/armbar, side-control kimura are table-stakes for any grappling curriculum (category I, ~6 games).
3. **Typed CLINCH games (center, non-wall).** Clinch currently collapses into "Pressure to Clinch" + wall. No 50/50 over-under, body-lock, collar-tie, underhook battle, or pummeling games. Required by the directive's "name the clinch type" rule (category D, ~7 games).
4. **Submission DEFENSE per attack-class.** Only generic defensive-submission games exist. Choke defense, joint-lock defense, leg-lock defense are distinct skills with distinct invariants (category J, ~3 games).
5. **Per-defense skill ISOLATION for kicks & missing tools.** Check, catch, roll, pull, footwork-only, and kick-parry have no isolation games though they are first-class taxonomy tags (category B, ~6 games). High-value, cheap to build.
6. **Open-space striking DEPTH named by eco-psych.** The two-range (kendo) game, southpaw-vs-orthodox, and feinting are explicitly called out in our theoretical backbone and are missing (category C, items 12–14). High pedagogical credibility.
7. **TRANSITION reverses & links.** The map itself flags ground→wall as a one-direction gap; also missing: land-and-pass, sprawl-to-top, knockdown-follow (category K, ~5 games).
8. **Per-position WALL games.** Six wall games but one generic pin. Back-to-wall escape, wall takedown entry, and wall submission offense are the obvious holes (category E, items 25, 28, 29).
9. **Integration / full-MMA cross-domain.** Almost nothing chains domains in a single game. Strike→takedown→pass, sprawl-and-brawl, ground-and-pound defense are exactly what differentiates an MMA product from a striking-or-grappling one (category M, items 65–67).
10. **Striking COUNTERS beyond the straight.** Counter-the-kick, intercept-the-shot, counter-the-clinch fill obvious counter-phase gaps (category L).

**Total proposed: 70 new games.** Combined with the existing 33 (minus Positional Sparring as a format) → **102 discrete teaching games**, comfortably past the 100 target with margin. All 70 are specified with a single asymmetric representative start and an observable win/loss, so none carry the symmetric-ground-start ("Positional Battle") failure, and every clinch is typed.
