# Game Template

<div class="emma-meta"><span>Authoring Tool</span><span>Page Structure</span><span>Copy & Adapt</span></div>

<p class="emma-hl">Use this template when documenting new games. Every game page follows the same skeleton so coaches always know where to look.</p>

<p class="emma-glabel">Anatomy of a Game Page</p>

<p>A complete game page moves top-to-bottom through eight sections — from identity to connections.</p>

<div class="emma-stepper">
  <div class="emma-step emma-has-pop" tabindex="0"><span class="emma-step__n">1</span><b>Game Identity</b>Problem · environment · stage<span class="emma-pop emma-pop--l">The identity box at the top: the core problem the game solves, where it takes place, and its decision stage.</span></div>
  <div class="emma-step emma-has-pop" tabindex="0"><span class="emma-step__n">2</span><b>Roles & Objectives</b>What each side is trying to do<span class="emma-pop emma-pop--l">Uses neutral A Side / B Side labels with a one-line objective each.</span></div>
  <div class="emma-step emma-has-pop" tabindex="0"><span class="emma-step__n">3</span><b>Setup</b>Starting position · reset trigger<span class="emma-pop emma-pop--l">Positions, distances, and the conditions that send play back to neutral.</span></div>
  <div class="emma-step emma-has-pop" tabindex="0"><span class="emma-step__n">4</span><b>Rules</b>Allowed · not allowed<span class="emma-pop emma-pop--l">The invariants that shape behavior toward the learning goal.</span></div>
  <div class="emma-step emma-has-pop" tabindex="0"><span class="emma-step__n">5</span><b>Win Conditions</b>Observable outcomes per side<span class="emma-pop emma-pop--l">Specific, observable conditions — no vague "controls the opponent".</span></div>
  <div class="emma-step emma-has-pop" tabindex="0"><span class="emma-step__n">6</span><b>Levels</b>Progressive difficulty<span class="emma-pop emma-pop--l">Same problem, escalating constraints — from core skill to full expression.</span></div>
  <div class="emma-step emma-has-pop" tabindex="0"><span class="emma-step__n">7</span><b>Safety</b>Contact limits · stop conditions<span class="emma-pop emma-pop--l">Every game declares how hard contact may be and when play pauses.</span></div>
  <div class="emma-step emma-has-pop" tabindex="0"><span class="emma-step__n">8</span><b>Connections</b>Prerequisites · leads to<span class="emma-pop emma-pop--l">How the game sits in the curriculum — what comes before and after.</span></div>
</div>

<p class="emma-glabel">Copy These Blocks</p>

=== "Frontmatter"

    ```yaml
    ---
    title: Game Name
    environment: open-space
    domain: striking
    focus: defensive
    difficulty: beginner
    duration: short
    min_players: 2
    equipment: none
    prerequisites:
      concepts: []
      games: []
    tags:
      - tag1
      - tag2
    ---
    ```

=== "Page Structure"

    ```markdown
    # Game Name

    !!! info "Game Identity"
        - **Problem:** What this game solves
        - **Environment:** Where it takes place
        - **Stage:** Decision state (Access/Stabilize/Exploit/Counter)

    Brief description.

    ## Roles & Objectives
    | Role | Objective |
    |------|-----------|
    | **A Side** | What they're trying to do |
    | **B Side** | What they're trying to do |

    ## Setup
    **Starting Position:** Positions and distances
    **Reset When:** Conditions that trigger reset

    ## Rules
    **Allowed:** ...   **Not Allowed:** ...

    ## Win Conditions
    | Role | Wins By |
    |------|---------|
    | A Side | Specific, observable condition |
    | B Side | Specific, observable condition |

    ## Levels
    | Level | Focus | Constraints |
    |-------|-------|-------------|
    | 1 | Core skill | Most restricted |

    ## Safety
    - Contact limits
    - Stop conditions

    ## Connections
    **Prerequisites:** Games/concepts needed first
    **Leads To:** Follow-on games
    ```

<p class="emma-glabel">Section Guide</p>

??? note "Game Identity"

    The identity box appears at the top of every game page.

    <div class="emma-cards">
      <div class="emma-card"><div class="emma-card__i">🎯</div><div class="emma-card__t">Problem</div><p>The core learning challenge in one sentence — e.g. "Defending strikes at close range."</p></div>
      <div class="emma-card"><div class="emma-card__i">📍</div><div class="emma-card__t">Environment</div><p>The physical context — Open Space, Wall, or Ground.</p></div>
      <div class="emma-card"><div class="emma-card__i">🧭</div><div class="emma-card__t">Stage</div><p>The decision state — Access, Stabilize, Exploit, or Counter.</p></div>
    </div>

??? note "Roles & Objectives"

    Games use **A Side** and **B Side** as neutral role labels, mapped per game type.

    <div class="emma-flow">
      <div class="emma-flow__row"><span class="emma-flow__from">Offense vs Defense</span><span class="emma-flow__arr">→</span><span class="emma-flow__to">Attacker · Defender</span></div>
      <div class="emma-flow__row"><span class="emma-flow__from">Positional</span><span class="emma-flow__arr">→</span><span class="emma-flow__to">Top Player · Bottom Player</span></div>
      <div class="emma-flow__row"><span class="emma-flow__from">Skill Isolation</span><span class="emma-flow__arr">→</span><span class="emma-flow__to">Feeder · Practitioner</span></div>
      <div class="emma-flow__row"><span class="emma-flow__from">Mirrored</span><span class="emma-flow__arr">→</span><span class="emma-flow__to">Player 1 · Player 2 (same goal)</span></div>
    </div>

??? note "Rules (Invariants)"

    Rules define the problem space. Good rules:

    <ul class="emma-checklist">
      <li>Are clear and unambiguous</li>
      <li>Shape behavior toward the learning goal</li>
      <li>Remove distracting options</li>
    </ul>

    !!! example "Example"
        "No clinching" removes grappling so athletes focus on striking range.

??? note "Win Conditions"

    Win conditions must be **specific and observable**.

    <div class="emma-outcomes">
      <div class="emma-outcome emma-outcome--lose"><span class="emma-outcome__tag">Bad</span> "A Side wins by controlling B Side" — vague and unmeasurable.</div>
      <div class="emma-outcome emma-outcome--win"><span class="emma-outcome__tag">Good</span> "A Side wins by holding pin (flat shoulders, controlled hips) for 5 seconds."</div>
    </div>

??? note "Levels"

    Progressive difficulty within the same problem.

    <div class="emma-stepper">
      <div class="emma-step"><span class="emma-step__n">1</span><b>Core skill</b>In isolation, most restricted</div>
      <div class="emma-step"><span class="emma-step__n">2</span><b>Added resistance</b>More options introduced</div>
      <div class="emma-step"><span class="emma-step__n">3</span><b>Full expression</b>Realistic pressure with counters</div>
      <div class="emma-step"><span class="emma-step__n">4</span><b>Full MMA</b>Cross-domain threats</div>
    </div>

??? note "Safety"

    Every game declares three things.

    <div class="emma-chips">
      <span class="emma-chip emma-chip--info" tabindex="0"><span class="emma-chip__i">🤝</span> Contact limits<span class="emma-chip__detail">How hard can strikes be?</span></span>
      <span class="emma-chip emma-chip--info" tabindex="0"><span class="emma-chip__i">🛑</span> Stop conditions<span class="emma-chip__detail">When does play pause automatically?</span></span>
      <span class="emma-chip emma-chip--info" tabindex="0"><span class="emma-chip__i">👁️</span> Intervention criteria<span class="emma-chip__detail">When must the coach step in?</span></span>
    </div>

    <p style="font-size:.82rem;color:var(--fog-dim);margin:.7rem 0 0;">See the <a href="../safety/">Safety &amp; Intensity Rules</a> for the system-wide non-negotiables.</p>

<p class="emma-glabel">Pre-Publish Checklist</p>

<ul class="emma-checklist">
  <li>Problem is clearly defined</li>
  <li>Environment and stage are tagged</li>
  <li>Win conditions are observable</li>
  <li>Safety section is complete</li>
  <li>Prerequisites are mapped</li>
  <li>At least 3 levels defined</li>
  <li>Tags added for search</li>
</ul>

??? abstract "Template evolution"
    This template updates as patterns emerge. See the [Change Log](../reference/changelog.md) for history.
