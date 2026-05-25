# LANGUAGE.md — Octagon Edge / Ecological MMA vocabulary discipline

Domain-driven controlled vocabulary. The agent rejects synonym substitution. Borrowed from `mattpocock/skills/engineering/improve-codebase-architecture/LANGUAGE.md` pattern.

## Approved terms

### Betting math

| Term | Definition |
|---|---|
| **Closing Line Value (CLV)** | Bet odds compared to the closing line. Positive CLV = beat the market. |
| **Expected Value (EV)** | Probability-weighted return on a bet. Positive EV = +profit over time. |
| **Kelly Fraction** | Optimal bet sizing as a fraction of bankroll. Full Kelly is theoretical; practice usually 1/4 to 1/2 Kelly. |
| **Bankroll** | Total capital allocated for betting. Tracked separately from operational cash. |
| **No-vig odds** | Odds adjusted to remove the bookmaker's overround. Used as the baseline probability estimate. |
| **Steam** | Sharp money moving the line in a direction. Indicator of consensus among informed bettors. |
| **Contrarian play** | Bet against the public (sharp money signal). |

### Fight analysis

| Term | Definition |
|---|---|
| **Stylistic matchup** | The interaction of two fighters' offensive + defensive skill sets. The actual subject of analysis, not the names. |
| **Method** | How a fight ends: KO/TKO, submission, decision (split / unanimous / majority), no contest. |
| **Round-by-round** | Per-round scoring based on output, control, damage. NOT just judges' cards. |
| **Activity** | Significant strikes per minute + takedown attempts per minute. Quantitative output measure. |
| **Pace** | The cadence at which one fighter forces the engagement. Distinct from activity. |
| **Distance management** | Footwork + range control. The substrate underneath striking output. |
| **Grappling threat** | Probability of a takedown landing AND being meaningful, conditional on a ground exchange happening. |

## Forbidden terms

| Forbidden | Why | Use instead |
|---|---|---|
| "lock" | Implies certainty that doesn't exist in -EV-driven analysis | Specify the EV: "+12% EV at +180" |
| "smart money" | Vague; could mean Vegas books, sharp bettors, or syndicates | Specify: **Steam from sharps** or **books moved on respect for the play** |
| "should win" | Probability without specifying confidence | "Implied win probability X% per no-vig odds; my model: Y%" |
| "feeling" / "vibe" | Anti-rigorous | Quote a specific signal (camp footage, weight cut, recent activity, layoff length) |
| "lay the favorite" | Unclear: line or moneyline? | Specify: ML at -X, spread at -Y rounds |
| "easy fight" | Sloppy; favorites lose in MMA more than other sports | Specify the implied probability and the model probability |

## Decision rules

1. Every bet recommendation must cite: (a) line at time of recommendation, (b) implied probability, (c) model probability, (d) EV, (e) Kelly fraction.
2. Never use "lock" in any output, even casually.
3. When summarizing fights for Alex, distinguish "what happened" (descriptive) from "why it happened" (analytical).
4. Track CLV on every recommended bet — over time, CLV correlates with profitability more than win rate.

## Game naming convention

Games in the Ecological Games Library follow consistent name patterns. When Alex invents a game on the spot, he describes the **constraints** (not a name) on the mic; the name is derived afterward from the patterns below.

### Six things to narrate on the mic (the naming inputs)
1. **Environment / position** — open space, wall, square, ground, clinch
2. **Roles** — who is offense / defense; is it asymmetric?
3. **Core constraint** — what is forbidden or forced (the invariant that defines the game)
4. **Win condition** — how each side wins
5. **Terminal goal** — where the game is meant to lead (takedown, pin, survival, etc.)
6. **The information the athlete must attune to** — the *invariant that specifies the affordance*: **τ (time-to-contact)** on a closing strike/shot, **global optic flow** for self-motion/cage approach, the **inertial array (resistance-to-rotation)** through grips/clinch, or the **preferred distance** that affords offense vs. defense. "Reading" must name *what* is read, not just "see the opening." (Blau & Wagman, 2022 — p. 82, 123–127, 165–166, 188–189; see `docs/principles/cla/key-concepts.md`.)

### Name patterns

| Pattern | Use for | Examples |
|---|---|---|
| **[Action] the [Target]** | skill-isolation games | Slip the Straight, Parry the Straight, Evade the Punch |
| **[Position] [Objective]** | position / skill games | Tight Block, Close-Range Defense, Wall Control |
| **[Goal phrase]** | objective-driven games | Winning the Circle, Touch and Don't Get Touched |
| **[A] → [B]** | game that transforms toward a finish | Open Space Control → Takedown, The Square — Close Defense to Takedown |
| **[Base] — [Qualifier]** | a variant of an existing game | Wall Control — Establish the Pin, Winning the Circle — Boundary Trigger |

### Rules
1. Prefer the **most specific pattern that fits**; a variant of an existing game uses the `[Base] — [Qualifier]` form so its lineage is visible.
2. Improvised / not-yet-blessed games get a **`[WIP]` prefix** in the filename and title (e.g., `[WIP] The Square — Close Defense to Takedown`) until Alex confirms or renames them. This keeps invented-on-the-spot games visually distinct from the canonical library.
3. Names use **approved vocabulary** — no synonym substitution (a "pin" is a pin, not a "hold").
4. Filenames keep the existing `# GAME_ <name>.md` form.
5. **Reserve "adaptation" vs. "learning" precisely.** Use **"learning"** only for *acquiring a new coordination pattern* (the *birth* of a new attractor) and **"adaptation"** only for *moving an existing attractor* — adjusting a skill you already have to a new opponent/context. Do not use "adaptation" to mean both. (Blau & Wagman, 2022 — p. 241; see `docs/principles/cla/theory.md`.)

## Game content conventions

How every game page is written (applied across the board):

1. **Boundary = "marked perimeter," never "square."** The confined space is a *marked perimeter* of any shape — square mats, a circle, taped lines, the cage. "Square" is one gym's instance; don't bake it into the rule. Write "inside the marked perimeter" / "both feet leave the perimeter." (List square/circle only as *examples*.)
2. **State goals as intentions.** Each role's objective reads "[Role] is trying to / attempting to ___" — e.g., "The attacker is trying to land a clean shot."
3. **State outcomes as consequence ← condition.** "When [condition], [consequence]" where the consequence is **win / loss / switch roles / reset** — e.g., "When both feet leave the perimeter, that player loses."
4. **Lead with the start, end with the finish.** Every game page runs **Start → Goal → Finish**: a one-glance arc ribbon, a prominent detailed **Starting Position**, clear role intentions, then explicit end conditions.

## Why this exists

Sports betting is dominated by sloppy vocabulary that hides which bettors are profitable. Controlled vocabulary forces every recommendation to be quantified, every analysis to be falsifiable, every prediction to be testable against the closing line.

Pattern source: domain-driven design's ubiquitous language, imported via `mattpocock/skills`.
