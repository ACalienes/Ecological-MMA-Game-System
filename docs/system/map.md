# System Map

This page provides visual navigation of the entire game system. Click any category in the diagram to jump to its games.

---

## Fight States & Transitions

**The fight is cyclical.** You move between states until someone finishes. Every game teaches skills within one of these states.

```mermaid
flowchart LR
    %% Foundation
    subgraph FOUNDATION["FOUNDATION"]
        direction TB
        SK_D["🟢 Defensive Skills"]
        SK_O["🟠 Offensive Skills"]
    end

    %% Open Space
    subgraph OPEN["OPEN SPACE"]
        direction TB
        OS_D["🟢 Striking Defense"]
        OS_O["🟠 Striking Offense"]
        OS_C["🟣 Space Control"]
        OT["🟢 Transition Zone"]
        OW_D["🟢 Wrestling Defense"]
        OW_O["🟠 Wrestling Offense"]
        OW_C["🟣 Wrestling Combined"]
    end

    %% Wall
    subgraph WALL["WALL"]
        direction TB
        W_D["🟢 Escape & Submit"]
        W_O["🟠 Control & Grind"]
        W_C["🟣 Combined"]
    end

    %% Ground
    subgraph GROUND["GROUND"]
        direction TB
        G_D["🟢 Escape & Submit"]
        G_O["🟠 Control & Finish"]
        G_C["🟣 Combined"]
    end

    %% Finish
    subgraph FINISH["FIGHT ENDS"]
        direction TB
        KO((KO))
        TKO((TKO))
        SUB((Sub))
    end

    %% Foundation feeds everything
    FOUNDATION --> OPEN

    %% Position transitions
    OPEN -->|"Clinch"| WALL
    OPEN -->|"Takedown"| GROUND
    WALL -->|"Escape"| OPEN
    WALL -->|"Takedown"| GROUND
    GROUND -->|"Stand Up"| OPEN
    GROUND -.->|"Scramble"| WALL

    %% Knockdown paths
    OS_O -.->|"Knockdown"| GROUND
    OS_D -.->|"Counter KD"| GROUND

    %% KO paths
    OS_O --> KO
    OS_D -.->|"Counter"| KO
    W_O -.-> KO

    %% TKO paths
    OS_O --> TKO
    W_O --> TKO
    G_O --> TKO

    %% SUB paths
    OS_O -.-> SUB
    W_O -.-> SUB
    G_O --> SUB
    W_D -.->|"Def Sub"| SUB
    G_D -.->|"Def Sub"| SUB

    %% Styling - Foundation
    style SK_D fill:#4CAF50,color:#fff
    style SK_O fill:#FF5722,color:#fff

    %% Styling - Open Space
    style OS_D fill:#4CAF50,color:#fff
    style OS_O fill:#FF5722,color:#fff
    style OS_C fill:#9C27B0,color:#fff
    style OT fill:#4CAF50,color:#fff
    style OW_D fill:#4CAF50,color:#fff
    style OW_O fill:#FF5722,color:#fff
    style OW_C fill:#9C27B0,color:#fff

    %% Styling - Wall
    style W_D fill:#4CAF50,color:#fff
    style W_O fill:#FF5722,color:#fff
    style W_C fill:#9C27B0,color:#fff

    %% Styling - Ground
    style G_D fill:#4CAF50,color:#fff
    style G_O fill:#FF5722,color:#fff
    style G_C fill:#9C27B0,color:#fff

    %% Styling - Finish
    style KO fill:#D32F2F,color:#fff
    style TKO fill:#FF9800,color:#fff
    style SUB fill:#7B1FA2,color:#fff

    %% Click targets
    click SK_D "#foundation-defensive"
    click SK_O "#foundation-offensive"
    click OS_D "#open-space-striking-defense"
    click OS_O "#open-space-striking-offense"
    click OS_C "#open-space-control"
    click OT "#transition-zone"
    click OW_D "#open-space-wrestling-defense"
    click OW_O "#open-space-wrestling-offense"
    click OW_C "#open-space-wrestling-combined"
    click W_D "#wall-defensive"
    click W_O "#wall-offensive"
    click W_C "#wall-combined"
    click G_D "#ground-defensive"
    click G_O "#ground-offensive"
    click G_C "#ground-combined"
```

**Reading the diagram:**

- **Click any box** to jump to that category's games
- **Arrow colors:** Gray = transitions, Red = KO paths, Orange = TKO paths, Purple = Submission paths
- **Solid arrows** = Common paths | **Dotted arrows** = Less common paths
- **🟢 Green** = Defensive | **🟠 Orange** = Offensive | **🟣 Purple** = Combined

---

## The Three End States

Every pathway leads to one of three fight-ending outcomes:

| End State | Definition | Primary Paths |
|-----------|------------|---------------|
| **Knockout (KO)** | Single strike renders opponent unable to continue | Clean strike lands with power and precision |
| **TKO** | Accumulated damage overwhelms defense | Sustained offense, wall grinding, ground control |
| **Submission** | Choke or joint lock forces tap/unconsciousness | Ground control, defensive submissions from bottom |

---

## Foundation (Skill Isolation)

These games develop isolated skills before integration into live fighting.

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

This is where every fight starts. Standing at distance with freedom to move.

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
| [Pressure to Clinch](../games/pressure-to-clinch.md) | Space control and clinch entry |

### Transition Zone

The critical moment when striking becomes wrestling.

| Game | What It Develops |
|------|------------------|
| [Clinch Denial](../games/clinch-denial.md) | Breaking clinch attempts |
| [Counter-Wrestling](../games/counter-wrestling.md) | Punishing shot attempts |

### Open Space — Wrestling Defense

| Game | What It Develops |
|------|------------------|
| [Takedown Defense](../games/takedown-defense.md) | Sprawl, underhooks, recovery |

### Open Space — Wrestling Offense

| Game | What It Develops |
|------|------------------|
| [Pressure to Takedown](../games/pressure-to-takedown.md) | Chaining strikes to takedown |
| [Pressure to Wall](../games/pressure-to-wall.md) | Driving opponent to cage |

### Open Space — Wrestling Combined

| Game | What It Develops |
|------|------------------|
| [Open Space Takedown](../games/open-space-takedown.md) | Takedowns without wall |

---

## Wall

Standing against the cage. You arrive via clinch or pressure.

### Wall — Defensive

| Game | What It Develops |
|------|------------------|
| [Wall Escape](../games/wall-escape.md) | Breaking the pin, returning to open space |
| [Wall Defensive Submission](../games/wall-defensive-submission.md) | Submissions to deter/punish control |

### Wall — Offensive

| Game | What It Develops |
|------|------------------|
| [Wall Control](../games/wall-control.md) | Maintaining the pin |
| [Wall Grinding](../games/wall-grinding.md) | Accumulating damage toward TKO |
| [Wall to Ground](../games/wall-to-ground.md) | Taking fight to ground |

### Wall — Combined

| Game | What It Develops |
|------|------------------|
| [Stand-Up Loop](../games/standup-loop.md) | Managing repeated stand-up/re-pin cycles |

---

## Ground

Horizontal grappling. You arrive via takedown or knockdown.

### Ground — Defensive

| Game | What It Develops |
|------|------------------|
| [Ground Escape](../games/ground-escape.md) | Basic escapes from bottom |
| [Leg Reclaim](../games/leg-reclaim.md) | Guard recovery |
| [Ground to Standing](../games/ground-to-standing.md) | Technical stand-up |
| [Ground Defensive Submission](../games/ground-defensive-submission.md) | Submissions from bottom |

### Ground — Offensive

| Game | What It Develops |
|------|------------------|
| [Ground Access](../games/ground-access.md) | Passing guard |
| [Ground Control](../games/ground-control.md) | Maintaining dominant position |

### Ground — Combined

| Game | What It Develops |
|------|------------------|
| [Positional Battle](../games/positional-battle.md) | Winning scrambles and exchanges |

---

## System Statistics

| Category | Count |
|----------|-------|
| **Total Games** | 34 |
| **Foundation (Skill Isolation)** | 8 |
| **Open Space** | 13 |
| **Wall** | 6 |
| **Ground** | 7 |

| Focus | Count |
|-------|-------|
| **Defensive** | 16 |
| **Offensive** | 13 |
| **Combined** | 5 |

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
    Games can be added infinitely — the fight states are the structure, games are the teaching tools. See [Change Log](../reference/changelog.md) for version history.
