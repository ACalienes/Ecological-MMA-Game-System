# System Map

This page provides visual navigation of the entire game system. Click any category in the diagram to jump to its games.

---

## Fight States & Transitions

**The fight is cyclical.** You move between positions until someone finishes. Every path has a reverse.

<div class="fight-diagram">
  <!-- SVG Arrow Definitions -->
  <svg class="diagram-arrows" viewBox="0 0 1100 520" preserveAspectRatio="xMidYMid meet">
    <defs>
      <marker id="arrowhead" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto">
        <polygon points="0 0, 10 3.5, 0 7" fill="#757575"/>
      </marker>
      <marker id="arrowhead-orange" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto">
        <polygon points="0 0, 10 3.5, 0 7" fill="#FF9800"/>
      </marker>
      <marker id="arrowhead-brown" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto">
        <polygon points="0 0, 10 3.5, 0 7" fill="#795548"/>
      </marker>
      <marker id="arrowhead-green" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto">
        <polygon points="0 0, 10 3.5, 0 7" fill="#4CAF50"/>
      </marker>
      <marker id="arrowhead-red" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto">
        <polygon points="0 0, 10 3.5, 0 7" fill="#D32F2F"/>
      </marker>
      <marker id="arrowhead-tko" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto">
        <polygon points="0 0, 10 3.5, 0 7" fill="#FF5722"/>
      </marker>
      <marker id="arrowhead-purple" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto">
        <polygon points="0 0, 10 3.5, 0 7" fill="#7B1FA2"/>
      </marker>
    </defs>

    <!-- Main Forward Flow -->
    <path d="M 90 260 L 140 260" stroke="#757575" stroke-width="2" fill="none" marker-end="url(#arrowhead)"/>
    <path d="M 260 260 L 310 260" stroke="#757575" stroke-width="2" fill="none" marker-end="url(#arrowhead)"/>

    <!-- Open Space to Transitions -->
    <path d="M 430 200 L 480 140" stroke="#FF9800" stroke-width="2" fill="none" marker-end="url(#arrowhead-orange)"/>
    <path d="M 430 320 L 480 380" stroke="#795548" stroke-width="2" fill="none" marker-end="url(#arrowhead-brown)"/>

    <!-- Transitions to Positions -->
    <path d="M 620 140 L 680 140" stroke="#FF9800" stroke-width="2" fill="none" marker-end="url(#arrowhead-orange)"/>
    <path d="M 620 380 L 680 380" stroke="#795548" stroke-width="2" fill="none" marker-end="url(#arrowhead-brown)"/>

    <!-- Wall to Ground (Takedown) -->
    <path d="M 780 200 L 780 310" stroke="#795548" stroke-width="2" fill="none" marker-end="url(#arrowhead-brown)"/>
    <text x="790" y="255" class="arrow-label" fill="#795548">Takedown</text>

    <!-- Escape Paths (back to Open Space) -->
    <path d="M 720 120 Q 550 50 400 180" stroke="#4CAF50" stroke-width="2" stroke-dasharray="5,3" fill="none" marker-end="url(#arrowhead-green)"/>
    <text x="530" y="70" class="arrow-label" fill="#4CAF50">Escape</text>

    <path d="M 720 400 Q 550 480 400 340" stroke="#4CAF50" stroke-width="2" stroke-dasharray="5,3" fill="none" marker-end="url(#arrowhead-green)"/>
    <text x="520" y="470" class="arrow-label" fill="#4CAF50">Stand Up</text>

    <!-- To Finish States -->
    <path d="M 860 140 L 950 200" stroke="#FF5722" stroke-width="2" fill="none" marker-end="url(#arrowhead-tko)"/>
    <path d="M 860 380 L 950 320" stroke="#FF5722" stroke-width="2" fill="none" marker-end="url(#arrowhead-tko)"/>
    <path d="M 860 420 L 950 420" stroke="#7B1FA2" stroke-width="2" fill="none" marker-end="url(#arrowhead-purple)"/>

    <!-- KO from Open Space -->
    <path d="M 430 240 Q 700 150 950 180" stroke="#D32F2F" stroke-width="2" fill="none" marker-end="url(#arrowhead-red)"/>
    <text x="680" y="170" class="arrow-label" fill="#D32F2F">KO</text>
  </svg>

  <!-- Grid Layout -->
  <div class="fight-diagram-grid">

    <!-- Column 1: START -->
    <div class="diagram-column">
      <a href="#" class="diagram-box box-start">FIGHT<br>START</a>
    </div>

    <!-- Column 2: FOUNDATION -->
    <div class="diagram-column">
      <div class="diagram-section">
        <div class="section-header">Foundation</div>
        <a href="#foundation-defensive" class="diagram-box box-defensive">Defensive</a>
        <a href="#foundation-offensive" class="diagram-box box-offensive">Offensive</a>
      </div>
    </div>

    <!-- Column 3: OPEN SPACE -->
    <div class="diagram-column">
      <div class="diagram-section">
        <div class="section-header">Open Space</div>
        <a href="#open-space-striking-defense" class="diagram-box box-defensive">Defense</a>
        <a href="#open-space-striking-offense" class="diagram-box box-offensive">Offense</a>
        <a href="#open-space-control" class="diagram-box box-combined">Control</a>
      </div>
    </div>

    <!-- Column 4: TRANSITIONS -->
    <div class="diagram-column">
      <div class="diagram-section">
        <div class="section-header">Open → Wall</div>
        <a href="#open-wall-prevent" class="diagram-box box-defensive">Prevent</a>
        <a href="#open-wall-initiate" class="diagram-box box-offensive">Initiate</a>
      </div>
      <div class="diagram-section">
        <div class="section-header">Open → Ground</div>
        <a href="#open-ground-prevent" class="diagram-box box-defensive">Prevent</a>
        <a href="#open-ground-initiate" class="diagram-box box-offensive">Initiate</a>
      </div>
    </div>

    <!-- Column 5: POSITIONS -->
    <div class="diagram-column">
      <div class="diagram-section">
        <div class="section-header">Wall</div>
        <a href="#wall-escape-defend" class="diagram-box box-defensive">Escape</a>
        <a href="#wall-control-grind" class="diagram-box box-offensive">Control</a>
        <a href="#wall-combined" class="diagram-box box-combined">Combined</a>
      </div>
      <div class="diagram-section">
        <div class="section-header">Ground</div>
        <a href="#ground-escape-defend" class="diagram-box box-defensive">Escape</a>
        <a href="#ground-control-finish" class="diagram-box box-offensive">Control</a>
        <a href="#ground-combined" class="diagram-box box-combined">Combined</a>
      </div>
    </div>

    <!-- Column 6: FINISH -->
    <div class="diagram-column">
      <div class="diagram-section">
        <div class="section-header">Finish</div>
        <div class="diagram-box box-finish-ko">KO</div>
        <div class="diagram-box box-finish-tko">TKO</div>
        <div class="diagram-box box-finish-sub">SUB</div>
      </div>
    </div>

  </div>
</div>

<!-- Legend -->
<div class="diagram-legend">
  <div class="legend-item">
    <div class="legend-color" style="background: #4CAF50;"></div>
    <span>Defensive (Prevent / Escape)</span>
  </div>
  <div class="legend-item">
    <div class="legend-color" style="background: #FF5722;"></div>
    <span>Offensive (Initiate / Control)</span>
  </div>
  <div class="legend-item">
    <div class="legend-color" style="background: #9C27B0;"></div>
    <span>Combined</span>
  </div>
  <div class="legend-item">
    <div class="legend-line" style="background: #FF9800;"></div>
    <span>Path to Wall</span>
  </div>
  <div class="legend-item">
    <div class="legend-line" style="background: #795548;"></div>
    <span>Path to Ground</span>
  </div>
  <div class="legend-item">
    <div class="legend-line-dashed" style="color: #4CAF50;"></div>
    <span>Escape Path</span>
  </div>
</div>

---

## Reading the Diagram

**Arrow Colors = Where It Goes:**

| Color | Meaning |
|-------|---------|
| **Gray** | Foundation flow |
| **Orange** | Path toward Wall |
| **Brown** | Path toward Ground |
| **Green** | Escape back to Open Space |
| **Red** | Path to KO |
| **Orange-Red** | Path to TKO |
| **Purple** | Path to Submission |

**Line Styles:**

- **Solid** = Primary/common path
- **Dotted** = Secondary/less common path

**Node Colors:**

- **🟢 Green** = Defensive (survive, escape, prevent)
- **🟠 Orange** = Offensive (attack, control, initiate)
- **🟣 Purple** = Combined (both roles active)

---

## The Three End States

| End State | Definition | Primary Paths |
|-----------|------------|---------------|
| **Knockout (KO)** | Single strike ends the fight | Clean strike with power and precision |
| **TKO** | Accumulated damage overwhelms defense | Sustained offense, wall grinding, ground control |
| **Submission** | Choke or joint lock forces tap | Ground control, defensive submissions |

---

## Foundation (Skill Isolation)

Skills developed in isolation before integration into live fighting.

### Foundation — Defensive

| Game | What It Develops |
|------|------------------|
| [Parry the Straight](../games/parry-the-straight.md) | Hand deflection timing |
| [Tight Block](../games/tight-block.md) | Guard absorption |
| [Slip the Straight](../games/slip-the-straight.md) | Head movement |
| [Evade the Punch](../games/evade-the-punch.md) | Full evasion vocabulary |

### Foundation — Offensive

| Game | What It Develops |
|------|------------------|
| [Lead Hand Offense](../games/lead-hand-offense.md) | Jab mechanics and setups |
| [Rear Hand Offense](../games/rear-hand-offense.md) | Cross/power hand timing |
| [Lead Leg Offense](../games/lead-leg-offense.md) | Lead kick variety |
| [Rear Leg Offense](../games/rear-leg-offense.md) | Power kick delivery |

---

## Open Space

Standing at distance. This is where every fight starts.

### Open Space — Striking Defense

| Game | What It Develops |
|------|------------------|
| [Close-Range Defense](../games/close-range-defense.md) | Layered defensive response |
| [Evasive Movement](../games/evasive-movement.md) | Creating distance under fire |
| [Counter-Striking](../games/counter-striking.md) | Punishing initiation |

### Open Space — Striking Offense

| Game | What It Develops |
|------|------------------|
| [Land the Target](../games/land-the-target.md) | Reading defense, landing clean |
| [Sustained Offense](../games/sustained-offense.md) | Maintaining pressure to finish |

### Open Space — Control

| Game | What It Develops |
|------|------------------|
| [Touch and Don't Get Touched](../games/touch-game.md) | Range awareness and timing |

---

## Open Space → Wall

Transitions from standing at distance to the cage/clinch.

### Open → Wall — Prevent

| Game | What It Develops |
|------|------------------|
| [Clinch Denial](../games/clinch-denial.md) | Breaking clinch attempts |

### Open → Wall — Initiate

| Game | What It Develops |
|------|------------------|
| [Pressure to Clinch](../games/pressure-to-clinch.md) | Space control and clinch entry |
| [Pressure to Wall](../games/pressure-to-wall.md) | Driving opponent to cage |

---

## Open Space → Ground

Transitions from standing to the ground (takedowns/knockdowns).

### Open → Ground — Prevent

| Game | What It Develops |
|------|------------------|
| [Takedown Defense](../games/takedown-defense.md) | Sprawl, underhooks, recovery |
| [Counter-Wrestling](../games/counter-wrestling.md) | Punishing shot attempts |

### Open → Ground — Initiate

| Game | What It Develops |
|------|------------------|
| [Pressure to Takedown](../games/pressure-to-takedown.md) | Chaining strikes to takedown |
| [Open Space Takedown](../games/open-space-takedown.md) | Takedowns without wall |

---

## Wall

Standing against the cage. You arrive via clinch or pressure.

### Wall — Escape & Defend

| Game | What It Develops |
|------|------------------|
| [Wall Escape](../games/wall-escape.md) | Breaking the pin, returning to open space |
| [Wall Defensive Submission](../games/wall-defensive-submission.md) | Submissions to deter/punish control |

### Wall — Control & Grind

| Game | What It Develops |
|------|------------------|
| [Wall Control](../games/wall-control.md) | Maintaining the pin |
| [Wall Grinding](../games/wall-grinding.md) | Accumulating damage toward TKO |

### Wall → Ground

| Game | What It Develops |
|------|------------------|
| [Wall to Ground](../games/wall-to-ground.md) | Taking fight to ground from wall |

### Wall — Combined

| Game | What It Develops |
|------|------------------|
| [Stand-Up Loop](../games/standup-loop.md) | Managing repeated stand-up/re-pin cycles |

---

## Ground

Horizontal grappling. You arrive via takedown or knockdown.

### Ground — Escape & Defend

| Game | What It Develops |
|------|------------------|
| [Ground Escape](../games/ground-escape.md) | Basic escapes from bottom |
| [Leg Reclaim](../games/leg-reclaim.md) | Guard recovery |
| [Ground to Standing](../games/ground-to-standing.md) | Technical stand-up |
| [Ground Defensive Submission](../games/ground-defensive-submission.md) | Submissions from bottom |

### Ground — Control & Finish

| Game | What It Develops |
|------|------------------|
| [Ground Access](../games/ground-access.md) | Passing guard |
| [Ground Control](../games/ground-control.md) | Maintaining dominant position |

### Ground — Combined

| Game | What It Develops |
|------|------------------|
| [Positional Battle](../games/positional-battle.md) | Winning scrambles and exchanges |

---

## The Complete Cycle

Every position has a way IN and a way OUT:

| From | To | How (Forward) | How (Reverse) |
|------|-----|---------------|---------------|
| **Open Space** | **Wall** | Pressure to Clinch, Pressure to Wall | Wall Escape |
| **Open Space** | **Ground** | Pressure to Takedown, Open Space Takedown, Knockdown | Ground to Standing |
| **Wall** | **Ground** | Wall to Ground | Stand-Up Loop (scramble) |
| **Wall** | **Open Space** | — | Wall Escape |
| **Ground** | **Open Space** | — | Ground to Standing |
| **Ground** | **Wall** | — | Scramble (Stand-Up Loop) |

---

## System Statistics

| Category | Games |
|----------|-------|
| **Foundation** | 8 |
| **Open Space** | 6 |
| **Open Space → Wall** | 3 |
| **Open Space → Ground** | 4 |
| **Wall** | 6 |
| **Ground** | 7 |
| **Total** | **34** |

---

## Concept Integration

| Concept | Where It Appears | Function |
|---------|------------------|----------|
| [Three Zones](../concepts/three-zones.md) | Land the Target, Sustained Offense | Offensive target selection |
| [Confidence Rating](../concepts/confidence-rating.md) | Land the Target, Skill Isolation | Commitment timing |
| [Defensive Solutions](../concepts/defensive-solutions.md) | All skill isolation, Close-Range Defense | Defense selection |
| [Hand Controls](../concepts/hand-controls.md) | Touch, Pressure to Clinch, Pressure games | Bridges striking and clinch |
| [TKO Pin](../concepts/tko-pin.md) | Wall Grinding, Ground Control | Exploitation endpoint |
| [Decision States](../concepts/decision-states.md) | All games | Access → Stabilize → Exploit → Counter |
| [Full MMA Expression](../concepts/full-mma-expression.md) | Level 4 of all games | Cross-domain threat integration |
| [Fight Philosophy](../concepts/fight-philosophy.md) | System-wide | Finish while taking minimal damage |

---

!!! abstract "System Evolution Notice"
    Games can be added infinitely — the fight states and transitions are the structure, games are the teaching tools. See [Change Log](../reference/changelog.md) for version history.
