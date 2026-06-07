# QA pass findings — 2026-05-26 (unpublished; staging)

Full-library critical review (5 reviewers: striking ×2, wrestling, grappling, concepts).
Report-only — **none of these are fixed yet.** Headline: the Positional-Battle "no clear
start" flaw mostly does NOT recur in the other games, but real issues exist. Split into
objective fixes (I can make) vs domain calls (Alex).

## HIGH — objective, fix first
- **tight-block** — `body-kick` tag contradicts the "straights & hooks only, no kicks" rule. Remove the tag (or add a kick level).
- **standup-loop** — offers THREE starts ("seated OR turtle OR elbow-post") + undefined "partial control" = the Positional-Battle failure mode. Pick ONE canonical start or make the variants explicit levels.
- **winning-the-circle** — bottom "Related Concepts" links use wrong depth + `.md` ext (`../games/x.md` → should be `../../games/x/`); these 404. Frontmatter `related_concepts: [wall-pin, pressure]` point to non-existent concept files → remove/redirect.
- **ground-access** — STILL lists `positional-battle` as a prereq in FRONTMATTER (the circular dep, from the other side). Remove it; real prereqs are open-space-takedown / wall-to-ground (body is already fixed).

## HIGH — domain calls (Alex)
- **50/50 clinch definition** (pressure-to-clinch, winning-the-circle, clinch-denial chips) — reviewers flag our wording "one overhook + one underhook, **mirror grips**" as self-contradictory; mirror grips would be same-side. Likely should be "underhook on one side, overhook on the other, **diagonally matched**, neither has inside control." NEEDS ALEX'S CALL. Also: clinch-denial shouldn't carry a 50/50 chip at all (the clinch never forms in that game).
- **evade-the-punch** — teaches "duck the hook"; in MMA that drops the head into uppercut/knee range. Should likely be "roll/weave under the hook." Alex's call. (Also: frontmatter `skill-isolation` but it reads as integration of two evasions.)

## MED — mostly objective
- **evasive-movement** — outcome table self-contradicts: cornering = pursuer WIN in a chip but only a RESET in the outcomes; misapplied `--lose` class; no real loss row. Reconcile.
- **sustained-offense** — vague "defensive posture" start + subjective "rhythm fully broken" win (no observable threshold). Define a concrete start + threshold.
- **wall-grinding** — "sustained damage" win has no count/time threshold (siblings use 5s/10s/2-3s). Add one.
- **pressure-to-wall** — conflates "wall control" vs "pin" vs "pin+damage" as the win + in the order-parameter. Disambiguate (win = pin AND damage).
- **wall-control** — win-pop ("shoulders *substantially* flat, hips *or* compromised") is weaker than the strict 2-point wall-pin definition the doc uses elsewhere → tighten. Starting clinch untyped.
- **open-space-takedown** — starting clinch untyped ("hands connected"); outcome `--lose` class mislabel on the scramble row.
- **takedown-defense** — start says "clinch range" but content is sprawl/shot-defense → should be "open wrestling / shooting range." Prereq recommended-vs-required mismatch with frontmatter.
- **slip-the-straight** — Recall Q4 "slip to the opposite side of the loading hand" is shaky/likely wrong AND not on the page → "slip to the outside of the straight; read shoulder rotation," and put it in the body. (domain-ish)
- **lead-leg-offense** — band "the fastest weapon you own" overstates (jab is faster) → "fastest, lowest-commitment KICKING weapon." Recall echoes it.
- **counter-striking** — simultaneous clean-exchange outcome undefined (switch or reset?).
- **land-the-target** — L1 "private/unannounced target" win is honor-system/unobservable; lean on L2 (announced). "Misdirection Principle" link label → relabel "Three Zones".
- **ground-defensive-submission** — start "bottom under established top control" contradicts L1 "From Guard" (guard isn't under top control).
- **leg-reclaim** — "Win" tag is on the TOP; the defensive protagonist has no labeled win. Hierarchy ladder worded 3 different ways across the page → standardize.
- **full-mma-expression** — overlapping level bands ("Lower 1-3" and "Mid 3-4" both claim L3); level scale never defined.

## LOW (batch later)
ground-control (win duration only in pop, surface in Rules) · ground-access (name default start "top in closed guard") · rear-hand-offense (stance matchup unaddressed; Recall "travels further" loose) · rear-leg-offense (range contradiction; head-kick beginner safety thin; Recall "slowest" overgeneralizes) · tko-pin (cross-link to the formal wall-pin standard) · touch-game (VS layout for a symmetric game; arc "comfortable distance" vs setup "outside touching range"; L5/6 "denial" mislabel → "counter-entry") · close-range-defense (Finish "no winner" undersells L4+ counter scoring) · parry-the-straight (τ tells *when*, not *which way*; "belly"→"body") · wall-defensive-submission (no Reset/perimeter-loss outcome row; confirm `dns` concept exists; controller styled `--atk`) · positional-battle file/slug name drift ("Positional Sparring" content, `positional-battle` slug/hero/links — intentional freeze, acceptable).

## Suggested order
1. The 4 HIGH objective fixes (quick, real bugs).
2. Get Alex's calls on the 2 HIGH domain items (50/50 clinch wording; duck-vs-roll the hook).
3. MED objective batch (start/win-condition clarity, mislabeled outcome classes).
4. LOW batch.
