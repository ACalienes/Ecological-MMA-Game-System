# Eco-Principles Judgment Sweep, 2026-06-07

**Status:** Draft / staging. Tier-2 (judgment) review of all 46 playable game pages against the
judgment-call subset of [ECOLOGICAL_PSYCHOLOGY_AUDIT.md](../../ECOLOGICAL_PSYCHOLOGY_AUDIT.md) Section 4.
Method: one independent reviewer agent per game (calibrated against constraints-led design, told
that option-space restrictions and task simplification are compliant by design); every violation-level
claim would have faced 2 adversarial skeptics before counting. Complements the mechanical tier
(`scripts/eco-check.py`, 47/48 clean) and the empirical tier (R5 class validation, still pending for WIPs).

## Headline

**46 games reviewed; 0 confirmed violations; 32 tensions (borderline judgment calls for Alex); 54 notes.**

No reviewer raised a single violation-level finding: the library's game designs hold up against the
theory across the board. What surfaced instead is a tension list: places where a design choice is
defensible but worth a deliberate call rather than an accident.

## Fully clean (zero findings)

`clinch-denial`, `ground-and-pound-defense`, `parry-the-straight`, `pressure-to-takedown`, `sustained-offense`, `takedown-defense`, `wall-grinding`

## Tension themes (what recurs)

- **J9, Repeat the problem, not the movement:** 6 games
- **J16, Two ranges + dead middle (distance games):** 6 games
- **J17, Information over instruction:** 6 games
- **J2, Constrain to afford, never prescribe:** 5 games
- **J3, Scale by ratios, not absolutes:** 4 games
- **J5, Reward the taken opportunity:** 2 games
- **J6, Preferred transitions, not forced maximums:** 2 games
- **J15, Opponent-affordance reading:** 1 games

## Tensions by game (the review queue)

### back-escape

- **[J3] Scale by ratios, not absolutes**
    - Quote: "Hold the back control for the set count (start at 20 seconds)"
    - Issue: The threshold clock is a fixed absolute (20s) rather than a body- or athlete-relative value. This is a minor J3 tension: unlike a distance/aperture, a time count does not bake in body-geometry bias the way a fixed reach distance would, and the page hedges with 'start at,' signaling coach adjustability. But the rule as written gives one absolute number with no instruction to scale it to the pairing's relative skill/size gap, so a much stronger top vs. a weaker bottom faces a categorically easier problem at the same count. Acceptable as a starting default; flagging only because it is an absolute.
    - Suggested fix: Add a half-sentence making the count explicitly coach-tunable to the pairing, e.g. 'start at 20 seconds, shorten it when the top dominates or lengthen it when escapes come too easily, so both fighters face a live race.'

### close-range-defense

- **[J15] Opponent-affordance reading**
    - Quote: "Attune to the rate of expansion (τ) of each incoming strike"
    - Issue: The reading instruction is almost entirely about perceiving the incoming strike (what the attack affords the defender to defend), which is appropriate for a defensive game. But J15 also wants the defender to perceive what the opponent's position affords THEM. Levels 4-6 introduce countering, turning the corner, and shot/clinch threat, where reading the attacker's openings and grappling-entry posture matters, yet the "What to Read" and coaching cues never direct attention to the attacker's affordances (e.g. when the attacker is over-committed/off-base and exposed to a counter or a level change). Borderline; flagging for Alex.
    - Suggested fix: In a Level 4-6 popover or a coaching cue, add an opponent-affordance read, e.g. "After defending, read whether the attacker's recovery leaves them off-base (affords your counter) or hips loaded (affords their shot)" so the defender perceives the attacker's options, not only the incoming strike.

### closed-guard-bottom

- **[J9] Repeat the problem, not the movement**
    - Quote: "The back-take counts when the bottom's hips climb outside the top's arms and reach chest-to-back, held 3 seconds. The climb route (hips to shoulder line) is ..."
    - Issue: Scoring the back-take only when reached via a specified 'climb route' (hips to shoulder line) and explicitly disallowing the scramble ('jumping past it into a scramble proves nothing') leans toward rewarding a prescribed movement path rather than the outcome (getting to the back). This is borderline: it constrains HOW the back is reached, which can edge from problem-repetition (J9) toward movement-rehearsal. It stays mostly compliant because the route still emerges against a live, resisting top who chooses where to base, but it's worth Alex's eyes given the page repeatedly frames the route itself as 'the skill.'
    - Suggested fix: Consider scoring any chest-to-back-3s control as the win regardless of route, while keeping 'hips outside the arms' as the position requirement; if the climb route matters, isolate it as a Level (which Level 3 already does) rather than gating the win condition on it.

### closed-guard-pass

- **[J2] Constrain to afford, never prescribe**
    - Quote: "Top must open the guard by standing."
    - Issue: Level 3 narrows the opening to a single mode (standing). This is a legal option-space restriction in the spirit of 'may only parry' (it isolates the standing-break problem without scripting a fixed movement sequence), so it is not over-constraining. It is flagged only as a borderline judgment call because, unlike L2 which permits 'posture, knee position, or standing pressure,' L3 removes the alternative legal solutions for that level. The synergy that produces a sound standing break still soft-assembles freely, so the design stays compliant; worth Alex's eyes to confirm it reads as task-isolation, not technique mandate.
    - Suggested fix: Optional clarity: add a popover note that L3 deliberately removes the seated-opening solutions to force the harder standing read, framing it as a problem constraint (the affordance set is restricted) rather than a prescribed technique. No mechanical change needed.

### counter-striking

- **[J16] Two ranges + dead middle (distance games)**
    - Quote: "<div class="emma-setup__item"><span class="emma-setup__k">Range</span>Striking range, not clinch.</div>"
    - Issue: This is a striking-domain game played at a single relationally-defined 'striking range,' but its design does not make two preferred ranges (a near range that affords offense, a far range that affords defense) and a dead middle perceptually real. J16 asks distance/striking games to build an advantageous range into the structure. The game's primary axis here is counter-TIMING (tau / rate of expansion), not distance, so this is borderline rather than a defect: timing-isolation is a legitimate design choice and adding a distance axis could muddy what the game isolates. Flagging for Alex because the game lives at striking range and currently treats range as a static start condition rather than a live, exploitable variable.
    - Suggested fix: Optional: add a higher level or variant where the counter-striker can use range as a counter window (e.g., a 'pull-and-punish' read off the far edge of range vs. an intercept off the near edge), so an advantageous range becomes perceptually real without diluting the core timing read. Alternatively, note explicitly that range is intentionally held constant to isolate timing, and that distance management is trained in a sibling game.

### evade-the-punch

- **[J2] Constrain to afford, never prescribe**
    - Quote: "Trying to evade each punch with the matching movement, slip straights, roll under hooks."
    - Issue: The win condition maps each punch type to one named correct evasion (straight to slip, hook to roll-under). This is borderline: it is a legal option-space restriction (head movement only) and the 1:1 mapping reflects a real affordance structure (a slip genuinely will not beat a hook, as the page itself argues). The defender still self-organizes timing, depth, direction, and which side. So it is not a scripted fixed-technique sequence and reads as task simplification rather than prescription. Flagging only because the scoring rewards 'the matching movement' by name rather than the functional outcome alone (full miss while staying in the pocket), which edges toward naming the solution. Worth Alex's eyes; not a violation.
    - Suggested fix: Optional: lean the win-statement on the functional outcome (clean full miss via head movement, no block/parry/retreat) and let the slip-vs-roll matching emerge as the reason wrong choices get hit, rather than scoring 'the matching movement' as the named target. The 'one right evasion beats ten wrong ones' framing already supports this.

### evasive-movement

- **[J16] Two ranges + dead middle (distance games)**
    - Quote: "the pursuer's preferred distance, far affords your escape, near affords their engagement"
    - Issue: This is a distance/striking game, so J16 applies. The page names two ranges with opposing affordances (far affords escape, near affords engagement), which is the desired structure. However it never makes the 'dead middle that affords neither' perceptually real for the evader, the third element of the kendo finding (J16). The evader is taught a binary far/near read rather than a near-offense / far-defense / avoid-the-middle triad. This is borderline because the evader is purely defensive at L1 (no offense range to manage), so a two-range framing is arguably appropriate, but once the evader can counter (L3) and shoot/clinch is live (L4) the missing middle-zone read becomes a real gap worth Alex's eyes.
    - Suggested fix: At L3+, add a cue or read-band that names the neutral middle distance explicitly, e.g. 'far affords your reset, near affords their engagement, the middle affords neither, so do not idle there.' Tie it to the kendo two-preferred-ranges + dead-middle structure once the evader has an offensive option.

### ground-defensive-submission

- **[J5] Reward the taken opportunity**
    - Quote: "Bottom finishes or threatens to escape/reverse → switch roles."
    - Issue: The top win condition (controls and defends the duration) and the finish are clean realized-behavior scoring. But the Switch win counts a mere "threat" of escape/reversal as a full win equal to a completed finish. J5 wants wins to score realized behavior, and a "threat" is borderline an isolated cue rather than a completed action. The page defends this deliberately (the band: "The threat itself buys the escape") and the order parameter measures "threats that force a top reaction (finish, escape, or reversal) vs. attacks shut down," which anchors the threat to an observable opponent response rather than a posture cue, so it is defensible. Flagging for Alex because adjudicating "threatened to escape" live is more subjective than adjudicating a finish or a held duration, and could drift toward rewarding effort over realized advantage if not refereed against a top reaction.
    - Suggested fix: Optional tightening: word the Switch condition so the threat must produce an observed top reaction to count, e.g. "Bottom finishes, OR a submission threat forces the top to release control / abandon position, letting the bottom escape or reverse → switch." This binds the win to a realized change in the top's behavior (matching the order parameter already stated on the page) rather than to the threat alone.

### ground-escape

- **[J9] Repeat the problem, not the movement**
    - Quote: "Begin under mount. Higher urgency and fewer options, focus on bridge and roll and the elbow-knee escape."
    - Issue: The level popovers name specific techniques with the definite article ("the elbow-knee escape", "the sit-up escape"), which leans toward prescribing one named solution rather than purely varying the problem. This stays on the right side of J9/J2 because the levels actually vary the PROBLEM constraint (side control vs mount vs back vs MMA strikes), the win condition rewards any escape (guard/reversal/standing) not a specific technique, and the framing is "focus on" rather than "must use." But the definite-article phrasing reads as more prescriptive than the open option-space the game otherwise maintains, and is worth Alex's eyes.
    - Suggested fix: Soften to affordance/exploration language, e.g. "explore frames and hip escapes" or "escapes that go where the weight isn't (bridge, elbow-knee, sit-up among them)" so the named techniques read as examples of the solution space, not the prescribed answer.

### ground-to-standing

- **[J9] Repeat the problem, not the movement**
    - Quote: "Start in open guard; bottom works the technical standup."
    - Issue: Levels 1 and 2 vary the PROBLEM constraint (start position: guard vs turtle vs under), which is correct for J9. But Level 1's instruction names a specific technique ("the technical standup"), and Level 2 says "bottom bases and stands." Naming one canonical get-up nudges toward a fixed movement to rehearse rather than letting the standup synergy soft-assemble to the goal. The actual win condition (stand + disengage, clear of control) is open and emergent, so this is a borderline prose-vs-design issue, not a hard violation: the rule does not force the technical standup to count as the only win.
    - Suggested fix: Soften the level cue to name the PROBLEM, not the technique: e.g. "Start in open guard; bottom gets to the feet however the position allows" instead of "works the technical standup." Let the get-up emerge from the start constraint.

### half-guard-pass

- **[J17] Information over instruction**
    - Quote: "Chest before leg, always. Yanking the knee while the bottom is on their side feeds the sweep. Flatten the shoulders, kill the inside frames, and the leg slid..."
    - Issue: This top-role popover edges toward dictating the solution (do chest, then flatten, then leg) rather than purely directing attention to information. It is defensible because the game's actual enforcement is information/rule-based: the pass only counts with a held 3s pin, and a live resisting bottom punishes an early knee-yank with the sweep, so the correct sequence emerges from the constraints rather than the cue. The cue stating the reasoning is fine; just keep the rule structure (not the instruction) as the thing that does the enforcing.
    - Suggested fix: Optional: reframe the imperative slightly toward the read, e.g. 'Watch the bottom's torso angle: while they are on their side the underhook and sweep are live, so the chest is the fight; the leg frees once they are flat.' Keeps it attention-directing rather than prescriptive.

### land-the-target

- **[J5] Reward the taken opportunity**
    - Quote: "The attacker calls their own clean landing on the honor system, this is an academic exercise."
    - Issue: J5 wants wins to score realized behavior. The win condition itself (clean contact reaching the target zone with real energy transfer) is correctly a taken-opportunity criterion, which is compliant. The tension is purely in adjudication: a self-called honor-system win makes the realized-behavior signal soft and gameable (the attacker can claim a graze as a landing), which weakens the very order parameter the page says it measures ("committing shot lands on the opening the probe created"). This is a borderline issue worth Alex's eyes, not a design violation of what counts as a win.
    - Suggested fix: Add a lightweight external check so the affordance, not the claim, is scored: the defender (who has no win condition anyway) confirms or denies the clean landing, or a third athlete/coach calls it. Keep honor-system as the fallback for solo rounds, but make defender-confirmation the default.

### lead-hand-offense

- **[J16] Two ranges + dead middle (distance games)**
    - Quote: "Maintain striking range<span class="emma-chip__detail">Both players hold striking range so the lead hand stays viable and necessary, no drifting out to where..."
    - Issue: This is a striking game whose whole premise is distance and timing, yet the range design is a single 'hold striking range' rule rather than the kendo-style two-preferred-ranges + dead-middle structure (J16/rule 16). It treats range as a constant to maintain instead of a perceptual problem the attacker reads. Not a violation (the game is deliberately a skill-isolation offense game, not a distance-management game), but the lead hand is precisely the tool used to find and own offensive range, so building in a near range that affords the lead-hand commit vs. a far range that affords only the probe would make the range affordance perceptually real and strengthen the read.
    - Suggested fix: Optionally reframe the range chip as two perceptual ranges: a 'commit range' where the lead hand reaches and a 'probe/feint range' just outside it, rewarding the attacker for stepping into commit range only after a probe creates the opening, rather than statically holding one range.

### lead-leg-offense

- **[J3] Scale by ratios, not absolutes**
    - Quote: "Maintain kicking range"
    - Issue: The boundary and range constraint is expressed as 'kicking range' rather than a fixed absolute distance, which is body-relative and good. But the page never explicitly anchors it to the athlete's own leg length / reach, so a coach could read it as one absolute gap for the pair. The accompanying detail 'closer for round kicks, further for teeps' actually pushes the right way (the athlete discovers per-tool range), so this is borderline rather than a break. Worth a one-line anchor to make body-relative scaling explicit.
    - Suggested fix: Add to the 'Maintain kicking range' chip detail: 'kicking range = the attacker's own lead-leg reach, so taller/longer fighters settle at a different gap; each athlete finds their own.'

### leg-reclaim

- **[J17] Information over instruction**
    - Quote: "<div class="emma-card"><div class="emma-card__i">🦵</div><div class="emma-card__t">Knee inside</div><p>Ask: "Can you get your knee inside?" Knee recovery is t..."
    - Issue: Most cues here are attention-directing questions, which is correct (J17). This one borders on dictating a single solution: by naming the knee-inside as 'the key mechanic' and the Recall Check calling it 'the key mechanic the whole game turns on,' the game nudges toward one specific re-entry over the multiple paths the rules otherwise honor (half guard, full guard, feet on hips). It stays a question rather than a hard rule, so it is a tension, not a violation, but it slightly narrows the emergent space the 'any leg recovery counts' rule opens.
    - Suggested fix: Reframe to attune to the affordance rather than name the technique, e.g. 'Where has the connection gone light enough to insert something between you and them?' and soften the Recall answer from 'the key mechanic the whole game turns on' to 'one reliable read: get something inside before the top re-pins.'

### one-shot-discovery

- **[J16] Two ranges + dead middle (distance games)**
    - Quote: "A marked rectangular perimeter, kept deliberately tight. Both feet out, you lose."
    - Issue: This is a striking/distance-relevant game, so J16 is in scope. The design deliberately collapses distance into a single tight perimeter to force solving in the pocket, rather than making two preferred ranges (a near offensive range, a far defensive range) and a dead middle perceptually real. That is a legitimate task-simplification choice (isolate read-and-commit), but it means the game does not teach the kendo-style range advantage J16 calls for; distance management is intentionally removed rather than trained. Worth Alex's eyes on whether a companion game restores the two-range problem this one suppresses.
    - Suggested fix: No change required if the suppression of range is intentional. Optionally add a one-line note in the Constraints-Led analysis acknowledging that the tight perimeter deliberately removes the two-range distance problem so the read-and-commit problem can be isolated, and point to a follow-on game (e.g. distance-management) that restores it.
- **[J2] Constrain to afford, never prescribe**
    - Quote: "Defender's counter must be a kick to the body (front kick, round kick, lead or rear leg, switch stance allowed) OR a leg connection. Forces the body-kick int..."
    - Issue: L5 narrows the defender's winning counter to a single weapon class (body kick). This sits near the J2 line between a legal option-space restriction (like 'may only parry') and prescribing one named solution. It stays on the compliant side because it permits a class of solutions (front/round, lead/rear, switch stance, or any leg connection) and leaves the read-feint-commit problem fully live rather than scripting a fixed movement sequence, with an explicit ecological rationale (repairing an under-represented weapon in the menu). Flagging only so Alex confirms the narrowing is curriculum-driven skill isolation and not creeping toward 'must use this technique.'
    - Suggested fix: Keep as is. To stay clearly on the afford side, optionally reframe the L5 win as a constraint on the offense or scoring (e.g. 'only a body-target counter scores this level') rather than a prescription on the defender's body, so the body kick emerges as the rewarded solution rather than the mandated one.

### open-guard-pass

- **[J9] Repeat the problem, not the movement**
    - Quote: "Top adds the leg ride: shin across the bottom's thigh, weight settling, surfing the legs flat before advancing. Teaches passing as pressure over time, not a ..."
    - Issue: Level 3 'Shin surf' names a specific technique (the shin-surf leg ride) as the level's content rather than varying the PROBLEM constraints the way the other levels do (which line, strikes on/off). This edges toward rehearsing a fixed movement. It stays on the right side of the line because it is still played live against a bottom winning by the dump, the win condition remains the held pass (not 'execute the shin surf correctly'), and the framing ('passing as pressure over time, not a sprint') is a problem-constraint, not a scripted sequence. Worth Alex's eyes: the safest framing would constrain the affordance ('settle and flatten the legs before advancing; a pass that races the recovery gets dumped') and let the shin-surf synergy emerge, rather than instructing the specific shin-across-thigh action.
    - Suggested fix: Reframe Level 3 as a constraint rather than a named technique, e.g. 'Settle: the top may only advance once the bottom's legs are flattened and weight is committed through them; race the recovery and you get dumped.' Keep the Craig Jones credit as a 'this is what tends to emerge' note in the popover rather than as the prescribed move.

### pressure-to-wall

- **[J17] Information over instruction**
    - Quote: "If a free push wins the game, take it. The skill being built is getting somebody pressed to the wall, not landing shots."
    - Issue: The Stalk and Corral variant's 'Beware shark eyes' chip explicitly rewards a free push to win, which is in tension with the base game's core rule 'Strikes create pressure, not pushing.' Both appear on the same page under the same destination (the wall). A reader scanning the constraints could be unsure whether pushing is rewarded behavior or prohibited. This is reconcilable (the variant is a distinct touch-win game emphasizing positional herding over strike-hunting, whereas the base game develops striking-based herding), but the two messages live side by side without a note distinguishing why pushing is OK in the variant and not in the base. Worth Alex's eyes to confirm the intent reads cleanly to a coach.
    - Suggested fix: Add a one-line clarifier to the variant's 'No moral wins'/'shark eyes' chip noting that the touch-win variant deliberately relaxes the base game's 'strikes not pushing' rule to isolate the positional skill (getting them to the wall), so the two are not contradictory.

### rear-hand-offense

- **[J16] Two ranges + dead middle (distance games)**
    - Quote: "Both players hold striking range so the rear hand stays viable with a proper entry, no drifting out to where power can't land."
    - Issue: This is a striking game, so J16 is in scope. The page collapses distance into a single 'striking range' band and even rules out the far range ('no drifting out'). The kendo two-preferred-ranges principle (near affords offense, far affords defense, dead middle affords neither) would make range a perceptually live affordance. Here distance is fixed-as-constraint rather than something the attacker exploits. This is a defensible task-simplification choice (the whole point is to force entry-building at power range, not to teach distance management), so it is a judgment call rather than a clear break, but it forecloses the opponent-distance-reading dimension the game otherwise gestures at ('manage distance for power').
    - Suggested fix: Keep the single-range simplification for L1, but consider noting in the Levels or a popover that at higher levels the attacker may earn the opening by entering from a far range the defender reads as safe, restoring the near/far affordance contrast rather than holding one fixed band.

### rear-leg-offense

- **[J6] Preferred transitions, not forced maximums**
    - Quote: "Reset to a neutral stance after a clean strike lands or after a set time, so each rep begins from the same problem."
    - Issue: The 'after a set time' reset is a soft time cap to recycle stalled exchanges, which is reasonable. The borderline point is only that the page does not specify what keys level progression to demonstrated readiness; the Readiness-to-progress checklist exists (lands without telegraph, varies targets, composed under counter), which satisfies J6, but it is in a collapsed accordion while the visible Levels stepper reads as a simple 1-2-3 ladder. Worth a glance to ensure progression is read as readiness-gated, not rep-count or time-driven.
    - Suggested fix: Surface a one-line cue in the Levels stepper such as 'advance when the readiness markers below hold,' linking to the checklist so progression visibly keys off demonstrated competence.

### seated-guard-retention

- **[J9] Repeat the problem, not the movement**
    - Quote: "Now the post is the beginning: bottom must capture and hold the posted arm (2-on-1 or wrist-and-elbow) before it recovers."
    - Issue: Level 3 names two specific grip configurations (2-on-1, wrist-and-elbow). Because they are offered as alternatives and the actual task constraint is 'capture and hold the posted arm before it recovers' (a problem, not a movement), this stays on the right side of J9. It is flagged as a tension only because parenthetical named techniques can drift toward prescription if a coach reads them as the required solution rather than examples of what capturing affords.
    - Suggested fix: Optional: soften to '(however you can keep it: a 2-on-1, wrist-and-elbow, whatever holds)' to make explicit these are example affordances, not a required grip.

### side-control-escape

- **[J17] Information over instruction**
    - Quote: "Build the near elbow and forearm frames against the cross-face and hip. Use them to make space, then shrimp the knee through or turn in to the knees. Frames ..."
    - Issue: This role popover, the coaching card "Frame before move," and the recall answer "the frame comes back first, then the space, then the knee" repeatedly script a fixed solution order (frame -> space -> knee) and proscribe a named alternative (the flat-armed bridge). It is borderline: as an attention-direction toward felt information it is defensible (the goal is still recovery, with multiple end-states offered), but as written it edges toward instructing one canonical method rather than letting the synergy soft-assemble. Information-over-instruction (J17) prefers the rule/environment to make the flat-armed bridge fail rather than a cue forbidding it.
    - Suggested fix: Soften the prescriptive sequencing to an attention cue, e.g. change "Frames first, then move, never bridge with the arms flat" to "Notice what a flat-armed bridge feeds the cross-face vs. what a frame buys you" and reframe the "Frame before move" card question to point at the felt outcome rather than mandating order. Let the GnP/cross-face pressure punish the flat bridge so the lesson emerges.

### standup-loop

- **[J17] Information over instruction**
    - Quote: "Turn to face before disengaging<span class="emma-chip__detail">Turn to face before attempting to disengage, disengaging while facing away exposes the back to..."
    - Issue: This appears as a hard Rule (and is reinforced in the role popover, win-condition, recall check, and coaching cues). It edges toward prescribing a specific sub-behavior rather than letting the consequence teach it. It is borderline-compliant because the consequence (back exposure) is itself the information, and disengage-facing-away could simply be allowed to fail by the attacker re-clinching, which would make the lesson emerge rather than be mandated. Worth Alex deciding whether this stays a rule or becomes purely an emergent affordance.
    - Suggested fix: Consider demoting the rule to an environmental consequence: rather than 'Turn to face before disengaging' as a rule, let disengaging while facing away be a legal but losing choice (attacker takes the back / re-clinches for the win). The page already states the consequence; leaning on it via scoring rather than a prohibition makes the behavior emerge (J17/J19, information over instruction).

### the-square

- **[J9] Repeat the problem, not the movement**
    - Quote: "Start from a single-leg position, inside grip, alternating to outside."
    - Issue: Level 5 specifies a fixed starting grip (inside) and a prescribed grip-switching pattern (alternating to outside). Constraining the START position to a single-leg is legal task simplification, but 'inside grip, alternating to outside' edges toward scripting a movement sequence to rehearse rather than varying the PROBLEM the defender must solve. The defender's win conditions (separate / strike / redirect to top / strangle / guillotine) are left open, which is good, but the offense's grip choreography is over-specified relative to the rest of the page, which constrains to afford rather than prescribe.
    - Suggested fix: Reframe as a problem rather than a grip script, e.g. 'Start from a single-leg with the offense already attached to one leg; offense works to finish the takedown, defense works to separate and get out. Vary which grip the offense holds across reps.' Let the inside/outside grip be one of several variations the players cycle, not a mandated alternation.

### tight-block

- **[J3] Scale by ratios, not absolutes**
    - Quote: "Inside punching distance."
    - Issue: The start range is given functionally ('inside punching distance' / 'Close range → Blocking is viable and necessary'), which is body-relative in spirit and avoids a hard absolute number, so it does not concretely bake in body bias. But it is not scaled by an explicit critical ratio of the defender's arm length, which Section 4 rule 3 names as the precise way to individualize. A 5'5" defender and a 6'2" defender eyeballing 'punching distance' can end up facing materially different blocking problems. This is a judgment-call worth Alex's eyes, not a clear break.
    - Suggested fix: Define the start range as a ratio of the defender's arm length (e.g. 'attacker set just inside the defender's full-extension reach') so every body faces the same relational blocking problem, matching the audit's own recommendation in section 2.4/rule 3.

### touch-game

- **[J16] Two ranges + dead middle (distance games)**
    - Quote: "near affords your touch and offense, far affords their escape"
    - Issue: This is the system's foundational distance game and it correctly makes two preferred ranges perceptually real (near = offense, far = their escape). But J16 specifically calls for distance games to also make the DEAD MIDDLE (the range that affords neither) perceptually real and penalized, so fighters learn to live in their advantageous range and avoid the neutral zone. The page never names or scores the dead middle: the coaching question is only 'were you in range, or did you reach?', and the warning signs ('Reaching / lunging', 'Crashes forward') describe symptoms of being caught in the middle without ever framing the middle itself as the zone to avoid. Borderline because the touch/counter scoring implicitly punishes mid-range mistakes, but the dead-middle affordance is not designed in explicitly as J16 prescribes.
    - Suggested fix: Add a third range concept to 'What to Read' and the outcomes/warning signs: name the dead middle (close enough to be touched, not close enough to land or far enough to escape) as the zone that affords neither, and make getting caught there the canonical 'lost exchange' read. E.g. add a warning sign 'Stalls in the middle, touchable but not in range' and a coaching cue 'Live in your range, pass through the middle, don't camp in it.'

### turtle-breakout

- **[J2] Constrain to afford, never prescribe**
    - Quote: "No supine: back to the mat = loss"
    - Issue: The no-supine rule eliminates a legal region of the option space (turning to guard / facing from the bottom), which is a genuine grappling affordance in live wrestling and BJJ. This is defensible as an option-space restriction rather than a technique prescription (the get-up itself can soft-assemble many ways, so it does not force one named solution, and the page is candid that supine drift was a tested-and-ruled flaw, not an affordance). But it sits in mild tension with 'let behavior emerge': the game decides in advance that one emergent solution is wrong rather than letting the win conditions sort it out. Worth Alex's eyes because the justification ('Turning to face from the bottom isn't an escape, it's a worse fight') is a coaching value judgment baked into a hard rule. It is acceptable if the explicit design scope is the explosive get-up specifically; flagged so that scoping is a conscious choice.
    - Suggested fix: Keep the rule but make its scope explicit in the constraint copy, e.g. note that this game deliberately trains ONLY the explosive get-up and that turning-to-guard is a valid escape trained in a separate game (link the guard-recovery / ground-escape game). That frames no-supine as defining this game's problem rather than declaring a real affordance illegitimate in general.

### wall-control

- **[J3] Scale by ratios, not absolutes**
    - Quote: "Start 1–2 feet from the wall"
    - Issue: This sets the start as a fixed absolute distance rather than a body-relative ratio. Per rule 3, ranges/distances should be scaled to a critical ratio (e.g., a fraction of the clinching pair's reach/arm length) so a small wrestler and a tall kickboxer face the same relational control problem. As an absolute, 1–2 feet is a different problem for very different bodies. This is mild because it is a coarse setup placement (the wall, not the distance, is the dominant constraint) rather than a body-biasing target height/aperture, so it is a judgment-call tension, not a violation.
    - Suggested fix: Express the start as a relational placement instead of an absolute, e.g. 'defender within roughly a forearm's length of the wall, close enough that the wall is their backstop,' or note the coach scales the gap per athlete so the wall is always the live backstop.

### wall-escape

- **[J2] Constrain to afford, never prescribe**
    - Quote: "Rotate before disengaging<span class="emma-chip__detail">Escapes follow rotate → frame → move hips → turn to face → disengage. Trying to disengage before rot..."
    - Issue: A specific named technique sequence (rotate → frame → move hips → turn to face → disengage) is elevated into the game's Rules block. A constraint reduces the option space so behavior emerges; embedding a fixed solution order as a rule edges toward prescription rather than affordance. It is softened by 'typically fails' (a consequence, not a mandate) and elsewhere the page says the sequence 'emerges through exploration, not instruction,' which is why this is a tension and not a violation. The risk is that athletes rehearse the script instead of reading the slackening resistance the game otherwise centers.
    - Suggested fix: Reframe this as a coaching heuristic/cue rather than a Rule. Keep the win-and-reset rules (active escape required, no takedowns, stay in perimeter) as the constraints, and move 'rotate before disengaging' into the Go Deeper coaching cues as an observation ('disengaging before you've broken rotation usually re-sets the pin'), so the order is discovered, not mandated.
- **[J17] Information over instruction**
    - Quote: "Wall constraint</span><span class="emma-flow__arr">→</span><span class="emma-flow__to">Forces a structured rotate → frame → hip → face sequence"
    - Issue: The Constraints-Led analysis claims the wall constraint 'Forces a structured rotate → frame → hip → face sequence.' A constraint should steer behavior so a functional solution emerges, not force one named sequence. The wall affords many break paths (under/overhook, hip-switch, duck-under, neck threat per the page's own DNS line); asserting it forces one sequence overstates the constraint into instruction. The same page elsewhere correctly says the sequence 'emerges through exploration,' so this is an internal tension worth a wording fix.
    - Suggested fix: Change 'Forces a structured ... sequence' to something affordance-true, e.g. 'Wall constraint → makes rotation the gateway affordance; multiple break paths (frame, hip-switch, neck threat) become available once rotation is won.' This preserves the wall as the controlling constraint without baking in a single solution.

### wall-to-ground

- **[J6] Preferred transitions, not forced maximums**
    - Quote: "<div class="emma-stepper">   <div class="emma-step emma-has-pop" tabindex="0"><span class="emma-step__n">1</span><b>Controlled descent</b>"
    - Issue: The four levels escalate by layer (no strikes, active scramble, TKO-pin/strike threats, full MMA) but the page gives no readiness trigger keyed to demonstrated competence for advancing between them. J6 wants progression to key off the athlete's demonstrated readiness rather than implicit sequence. This is borderline, not a violation: a 'Readiness to progress' checklist does exist further down the page ('Descents are controlled, not dumped' etc.), so the readiness signal is present, it is just not wired explicitly to the level stepper. Worth Alex's eyes to confirm the checklist is understood as the gate for advancing levels.
    - Suggested fix: Add a one-line note on the Levels block, e.g. 'Advance only when the current level's readiness markers (see Readiness to progress) hold consistently,' so progression is explicitly competence-gated rather than sequential by default.

## Notes (informational, no action implied)

- `back-escape` [J9]: Levels 1 to 4 each name a specific sub-task (hands on choke arm, strip one hook, turn the corner, break the seatbelt). This reads close to a fixed escape sequence rehearsed step by step, which would risk J9 (repeat the movement, not the ...
- `close-range-defense` [J3]: The distance constraint is expressed as a coach-judged, relational quality ("reasonable range," "keeping the defensive problem readable") rather than a fixed absolute measure, and the start is "Inside striking range." This is J3-complian...
- `close-range-defense` [J6]: Level progression is correctly keyed to demonstrated readiness elsewhere ("scale variety, speed, and combo length only as the defender succeeds"; readiness checklist at ~70%+ correct selection), satisfying J6. Noting only that the six-le...
- `closed-guard-bottom` [J5]: Level 1's win keys off 'owning the posture' rather than a completed conversion. By J5 this is a component-cue-style win (broken posture is a means, not the realized escape/attack). This is acceptable as a deliberate task-simplification o...
- `closed-guard-pass` [J6]: Progression to L5 strikes is gated on coach permission rather than on the athlete's demonstrated readiness. This is acceptable as a safety gate (matches the library's threshold-clock and coach-dial pattern) and the readiness checklist su...
- `counter-striking` [J2]: The three counter windows (intercept / simultaneous / punish) are presented with specific named techniques as examples (jab over jab, check hook vs cross, counter after a pull). These are framed as illustrative examples inside a 'Go Deep...
- `counter-wrestling` [J17]: This recall-check answer (and the matching coaching cue) supplies a fairly specific heuristic mapping striker behavior to a chosen entry. It is borderline because it edges toward giving the solution rather than only directing attention. ...
- `counter-wrestling` [J16]: This game lives partly in the striking/distance domain, where J16's two-preferred-ranges-plus-dead-middle framing could deepen it (a far range that affords the striker offense, a near range that affords the counter-wrestler the clinch en...
- `evade-the-punch` [J16]: This is a striking game, so J16 is nominally in scope, but the game is deliberately a single-range pocket/evasion game (it forbids retreat to keep both fighters at close range). It is not a distance-management game, so the two-preferred-...
- `evade-the-punch` [J9]: Level 1 uses a known alternating pattern. This could superficially look like rehearsing a fixed sequence, but the defender must still perceive each punch and produce the matched evasion live, and subsequent levels vary the PROBLEM (rando...
- `evasive-movement` [J5]: The 'must keep moving / static defense doesn't count' constraint is a legal option-space restriction (it removes blocking as a solution so footwork emerges), and the actual win is still scored on the realized outcome (kept distance for t...
- `ground-access` [J3]: The perimeter is the live environmental constraint and its crossing is a loss condition, but the page gives no body-relative or coach-adjustable sizing guidance. For a ground game whose explicit trained variable is mat-edge awareness, a ...
- `ground-access` [J15]: Opponent-affordance reading is present and good (the top is cued to read the bottom's hip and frame motion, and a recall item asks 'What gets the top swept mid-pass'). The framing is still mostly top-centric: it teaches reading what the ...
- `ground-control` [J2]: The bottom role popover (and the task card 'bridge and shrimp effectively') names specific movement primitives. This sits close to prescription, but it stays compliant because it is offered as an option menu inside the broader active-esc...
- `ground-control` [J6]: The role-switch trigger is a fixed duration clock rather than demonstrated readiness, which on its own could read as a rep-count style boundary. This is acceptable: the duration is a threshold-clock device the library uses by design, it ...
- `ground-escape` [J17]: The coaching cues are exemplary information-over-instruction design: both cues direct attention to a named invariant (felt weight distribution / space) and the page explicitly states they avoid prescribing technique. No issue; flagged as...
- `ground-to-standing` [J2]: This rule reduces the option space (you cannot legally win while still connected) rather than prescribing a named technique, so it is a compliant affordance-shaping constraint, not over-constraining. The detail text "This forces grip cle...
- `ground-to-standing` [J6]: Progression between the four levels is gated by the "Readiness to progress" checklist (stands consistently, clears grips, timing appropriate not forced), which keys off demonstrated readiness rather than arbitrary rep counts, satisfying ...
- `half-guard-bottom` [J9]: Level 3 names a specific grip (2-on-1 on the posted arm) and a specific hip direction. This sits close to prescribing a movement rather than posing a problem. It stays compliant because the trigger is an emergent event (a post the bottom...
- `half-guard-bottom` [J5]: This is a positive observation, not a problem: the elevation win is an explicitly realized-behavior proxy (base beaten, observable, body-relative 'off the mat' rather than an absolute height), which is exactly J5/J3-compliant. The page a...
- `half-guard-pass` [J3]: The 3-second hold and the 60-second round cap are absolute durations. This is NOT a J3 violation: J3 targets spatial measures (distance/height/aperture) that make different bodies face different problems, and a timing threshold does not ...
- `land-the-target` [J16]: J16 (two preferred ranges + dead middle) applies to distance/striking games. This game tags itself with 'distance' but is actually a single-range target-selection/misdirection problem, not a range-management problem, so J16 is N/A rather...
- `land-the-target` [J9]: Confirming compliance: the levels vary the PROBLEM (hidden vs announced target, then counter-threat added, then clinch added) rather than scripting a fixed movement sequence, and the 'Intent, not technique' cue ('A jab can be the target'...
- `lead-hand-offense` [J3]: The 'striking range' itself is correctly body-relative ('Lead-hand range, with room to create angles' = scaled to the athlete's reach), which is good. The containing perimeter, however, is an unscaled absolute ('a marked perimeter'). For...
- `lead-hand-offense` [J5]: The readiness checklist leads with a hit-rate gate alongside genuinely affordance-based markers ('Varies targets without prompting', 'Creates openings through feints or timing'). A raw landing percentage against a non-countering defender...
- `lead-leg-offense` [J16]: As a striking/distance game, J16 (two preferred ranges + dead middle) is in scope. The game does make distinct ranges perceptually real per tool (round-kick range vs teep range), which is the spirit of J16. It does not, however, name a '...
- `lead-leg-offense` [J17]: Behavior is steered primarily through rule/scoring design (lead-leg-only constraint, clean-landing win, whiff/blocked reset, role switch) rather than coach commands, which is J17-compliant. The coaching cues are attentional questions ('W...
- `leg-reclaim` [J15]: Opponent-affordance reading is well developed for the bottom (the 'What to Read' block and the haptic/visual/proprioceptive cards explicitly teach reading the top's base load, pinned hip, and frame motion). The top role's cues are framed...
- `leg-reclaim` [J6]: Level progression is keyed to demonstrated readiness rather than rep counts (the Readiness-to-progress checklist and warning signs), which is J6-compliant. Noting it as a positive: advancement triggers off 'achieves the target recovery c...
- `mount-escape` [J9]: Level 4 is the most movement-specific level in the ladder: it names a single mechanic (bridge into the post) as the focus. It stays J9-compliant because it is framed as exploiting an emergent affordance (a committed/posted base) rather t...
- `mount-escape` [J3]: The threshold clock uses an absolute time (20s) rather than a body-relative ratio. This is acceptable under the library's threshold-clock convention and is explicitly coach-adjustable ('start at', 'the set count'), so it does not bake in...
- `open-guard-pass` [J2]: The 'lines fall in order' rule restricts the option space (must beat the feet line before the knee line) rather than forcing one named technique, so it is a legal constraint, not over-constraining. The phrase 'Order is the pedagogy' is t...
- `open-space-takedown` [J3]: The 3-second figure is an absolute, but it is a control-hold duration threshold (the library's standard threshold-clock device for confirming realized control), not a body-relative distance/height/aperture that would make different-sized...
- `open-space-takedown` [J5]: Win conditions score realized behavior throughout: a completed controlled takedown for the attacker, and scramble-up / disengage / reverse / caught-DNS for the defender. The Diagnostic explicitly distinguishes a compromised-base finish f...
- `pressure-to-clinch` [J17]: The 'cut, don't chase' directive recurs across the band, role popovers, and cards as a near-imperative. It stays on the compliant side of J17 because the matching coaching cue is posed as an attention-directing question ('Were you cuttin...
- `pressure-to-clinch` [J6]: The 3–5s pin-hold is a fixed absolute time. This is not a J3 body-bias problem (duration of held control is body-neutral, unlike a fixed distance) and it functions as the project's standard threshold-clock to score realized control, so i...
- `pressure-to-wall` [J16]: For a striking/clinch-entry game this is a positive alignment with the two-preferred-ranges principle: it makes a near (offense-affording) and far (escape-affording) range perceptually real and ties reads to opponent affordances. No dead...
- `rear-hand-offense` [J15]: Opponent-affordance reading is well served on the attacker side ('Read the guard, make it move', the 'What the attacker reads' visual block, and the order-parameter framing of reading where the guard goes). The defender role, however, is...
- `rear-leg-offense` [J16]: This is a striking game, but it deliberately collapses distance to a single 'kicking range' rather than affording two preferred ranges plus a dead middle (the kendo finding). That is appropriate here: the game is a skill-isolation OFFENS...
- `rear-leg-offense` [J3]: 'Kicking range' is correctly body-relative (each fighter's own kicking distance) rather than a fixed absolute measure, so it does not bake in body bias. Compliant; noting for the record since range is the kind of constraint J3 scrutinizes.
- `seated-guard-retention` [J17]: The GnP dial-up chip carries a philosophy statement embedded in the rules block rather than a rule that shapes behavior. It is permission-gated by the coach and does not prescribe a technique, so it does not violate J17, but it reads as ...
- `side-control-escape` [J15]: Opponent-affordance reading is present and reasonably well done: the bottom is taught to perceive when the top's reach/climb unloads the chest (what the top's advance attempt affords the bottom). This is a strength, not a defect. Noting ...
- `slip-the-straight` [J2]: This recall answer names a directional heuristic (slip opposite the loading hand), which edges toward prescribing a solution. It stays on the right side of J2 because it is explicitly tied to reading an information variable (shoulder rot...
- `slip-the-straight` [J15]: Opponent-affordance reading is present but light. The game strongly teaches the defender to read the attacker's strike (tau, loading hand), and Level 6 introduces reading the opponent's grappling-entry threat, which does reward perceivin...
- `standup-loop` [J5]: Level 1 scores 'standing with the wall behind you', which is close to scoring a component state rather than a fully realized escape outcome. This is acceptable as deliberate task-simplification for the entry level (the loop's terminal go...
- `the-square` [J6]: The page handles preferred-transition logic well: the 'Readiness to progress' checklist keys phase advancement off demonstrated behavior ('Survives the pocket behind a tight shell', 'Redirects directional force instead of just absorbing'...
- `tight-block` [J15]: The game's reading task is dominantly self-referenced (attune to the incoming punch's tau and center mass). It does teach perceiving the opponent's striking information, and Level 5 broadens to denying the opponent's grappling entry, so ...
- `turtle-breakout` [J5]: The 'Diagnostic' outcome could read like scoring an isolated component cue (first-motion-up) rather than a realized behavior. On inspection it is fine: it is explicitly framed as a coach diagnostic / order-parameter ('The coach watches w...
- `wall-control` [J6]: Level 4 is the full-expression top of the ladder and is correctly framed as a progression endpoint, not a forced default, and the 'Readiness to progress' checklist keys advancement off demonstrated readiness rather than rep counts, which...
- `wall-defensive-submission` [J2]: The chip self-labels as 'Prescriptive,' but the rule it describes is actually a legal option-space restriction (only threaten what the position genuinely affords), not a prescription of one named technique. It reduces the option space to...
- `wall-defensive-submission` [J9]: Level 1 restricts the defender to a single submission to threaten. This is an option-space restriction (task simplification), not a scripted movement sequence: the defender still reads live load and head position to find and apply the gu...
- `wall-defensive-submission` [J6]: The controller win condition keys off a 'duration' timer (threshold clock), which is a deliberate compliant pattern in this library. It rewards realized behavior (control actually held, neck/arms safe) rather than an isolated cue, so it ...
- `wall-escape` [J3]: The win clock is a fixed absolute (10s) rather than a body-relative or coach-adjustable value. This is a deliberate, library-standard threshold-clock device (compliant by design) and the page reasons it ('longer 10-second hold reflects t...
- `wall-to-ground` [J2]: This rule is labeled 'Prescriptive' but is compliant: it constrains the ORDER of the problem (off-balance must precede descent) without naming a specific technique, so a single/double/trip synergy can still soft-assemble to the goal. The...

## What this proves and does not prove

- **Proves (paper tier):** every playable game now has a documented two-tier eco review: mechanical checks pass 47/48 and an independent judgment review raised zero confirmed violations.
- **Does not prove:** R5, that each game matches how Alex actually coaches it on the mat. That tier only closes with class recordings (the 12 WIP games wait on a grappling-heavy class).
- **Next action:** Alex skims the tension list; each item is accept-as-designed (most likely) or a one-line page edit. The six J16 range-structure tensions are the most interesting design conversation.
