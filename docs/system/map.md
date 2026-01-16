# System Map

This page provides visual navigation of the entire game system, organized by Environment → Domain → Focus.

---

## Master Flowchart

```mermaid
flowchart TD
    subgraph SKILL_ISO["SKILL ISOLATION"]
        subgraph SI_DEF["Defensive"]
            P[Parry the Straight]
            TB[Tight Block]
            SS[Slip the Straight]
            EP[Evade the Punch]
        end
        subgraph SI_OFF["Offensive"]
            LHO[Lead Hand Offense]
            RHO[Rear Hand Offense]
            LLO[Lead Leg Offense]
            RLO[Rear Leg Offense]
        end
    end

    subgraph OPEN_STRIKING["OPEN SPACE - STRIKING"]
        subgraph OS_DEF["Defensive"]
            CRD[Close-Range Defense]
        end
        subgraph OS_OFF["Offensive"]
            LT[Land the Target]
            SO[Sustained Offense]
        end
        subgraph OS_COM["Combined"]
            TG[Touch Game]
        end
    end

    subgraph OPEN_WRESTLING["OPEN SPACE - WRESTLING"]
        subgraph OW_OFF["Offensive"]
            PTT[Pressure to Takedown]
            PTW[Pressure to Wall]
        end
        subgraph OW_DEF["Defensive"]
            TDD[Takedown Defense]
            CD[Clinch Denial]
        end
        subgraph OW_COM["Combined"]
            WC[Winning the Circle]
            BT[Boundary Trigger]
            OST[Open Space Takedown]
        end
    end

    subgraph WALL["WALL"]
        subgraph W_OFF["Offensive"]
            WCon[Wall Control]
            WG[Wall to Ground]
            WGr[Wall Grinding]
        end
        subgraph W_DEF["Defensive"]
            WE[Wall Escape]
        end
        subgraph W_COM["Combined"]
            SUL[Stand-Up Loop]
        end
    end

    subgraph GROUND["GROUND"]
        subgraph G_OFF["Offensive"]
            GA[Ground Access]
            GC[Ground Control]
            GF[Ground Finish]
        end
        subgraph G_DEF["Defensive"]
            GE[Ground Escape]
            GR[Guard Recovery]
            GTS[Ground to Standing]
        end
        subgraph G_COM["Combined"]
            PB[Positional Battle]
        end
    end

    %% Skill Isolation flows
    P --> CRD
    TB --> CRD
    SS --> EP
    EP --> CRD
    LHO --> LT
    RHO --> LT
    LLO --> LT
    RLO --> LT

    %% Offensive/Defensive convergence
    CRD --> TG
    LT --> TG
    LT --> SO

    %% Open Space progression
    TG --> WC
    WC --> BT
    WC --> CD
    WC --> TDD

    %% Wrestling offensive paths
    SO --> PTT
    SO --> PTW
    BT --> PTT
    BT --> PTW
    PTT --> OST
    PTW --> WCon
    PTW --> WGr

    %% Wall progression
    WCon --> WE
    WCon --> WG
    WCon --> WGr
    WG --> SUL

    %% To Ground
    OST --> GA
    OST --> GE
    SUL --> GA
    SUL --> GE

    %% Ground progression
    GA --> GC
    GC --> GF
    GE --> GR
    GE --> GTS
    GR --> PB
    GA --> PB
    PB --> GC

    %% Styling by focus
    style P fill:#4CAF50,color:#fff
    style TB fill:#4CAF50,color:#fff
    style SS fill:#4CAF50,color:#fff
    style EP fill:#4CAF50,color:#fff
    style CRD fill:#4CAF50,color:#fff
    style WE fill:#4CAF50,color:#fff
    style TDD fill:#4CAF50,color:#fff
    style CD fill:#4CAF50,color:#fff
    style GE fill:#4CAF50,color:#fff
    style GR fill:#4CAF50,color:#fff
    style GTS fill:#4CAF50,color:#fff

    style LHO fill:#FF5722,color:#fff
    style RHO fill:#FF5722,color:#fff
    style LLO fill:#FF5722,color:#fff
    style RLO fill:#FF5722,color:#fff
    style LT fill:#FF5722,color:#fff
    style SO fill:#FF5722,color:#fff
    style PTT fill:#FF5722,color:#fff
    style PTW fill:#FF5722,color:#fff
    style WCon fill:#FF5722,color:#fff
    style WG fill:#FF5722,color:#fff
    style WGr fill:#FF5722,color:#fff
    style GA fill:#FF5722,color:#fff
    style GC fill:#FF5722,color:#fff
    style GF fill:#FF5722,color:#fff

    style TG fill:#9C27B0,color:#fff
    style WC fill:#9C27B0,color:#fff
    style BT fill:#9C27B0,color:#fff
    style OST fill:#9C27B0,color:#fff
    style SUL fill:#9C27B0,color:#fff
    style PB fill:#9C27B0,color:#fff
```

**Legend:**
- Green = Defensive Focus
- Orange = Offensive Focus
- Purple = Combined Focus

---

## Offensive/Defensive Convergence

The system is built around the principle that offensive and defensive skills converge in combined games:

```mermaid
flowchart LR
    subgraph Defensive["Defensive Track"]
        A[Skill Isolation] --> B[Close-Range Defense]
    end

    subgraph Offensive["Offensive Track"]
        C[Weapon Isolation] --> D[Land the Target]
    end

    B --> E[Touch and Don't Get Touched]
    D --> E
    E --> F[Full Integration]

    style B fill:#4CAF50,color:#fff
    style D fill:#FF5722,color:#fff
    style E fill:#9C27B0,color:#fff
```

---

## Environment Pathways

### Striking Pathway

```mermaid
flowchart LR
    A[Defensive Skill Isolation<br/>Parry, Block, Slip, Evade] --> B[Close-Range Defense]
    C[Offensive Skill Isolation<br/>Lead Hand, Rear Hand, Legs] --> D[Land the Target]
    D --> E[Sustained Offense]
    B --> F[Touch Game]
    D --> F
    F --> G[Winning the Circle]

    style A fill:#4CAF50,color:#fff
    style B fill:#4CAF50,color:#fff
    style C fill:#FF5722,color:#fff
    style D fill:#FF5722,color:#fff
    style E fill:#FF5722,color:#fff
    style F fill:#9C27B0,color:#fff
```

### Wall Pathways

Three distinct pathways to/through the wall:

```mermaid
flowchart LR
    subgraph Path1["Open Space Takedown Path"]
        A1[Pressure to Takedown] --> B1[Open Space Takedown]
        B1 --> C1[Ground]
    end

    subgraph Path2["Wall to Ground Path"]
        A2[Pressure to Wall] --> B2[Wall Control]
        B2 --> C2[Wall to Ground]
        C2 --> D2[Stand-Up Loop]
    end

    subgraph Path3["Wall Grinding Path"]
        A3[Pressure to Wall] --> B3[Wall Control]
        B3 --> C3[Wall Grinding]
    end

    style A1 fill:#FF5722,color:#fff
    style B1 fill:#9C27B0,color:#fff
    style A2 fill:#FF5722,color:#fff
    style B2 fill:#FF5722,color:#fff
    style C2 fill:#FF5722,color:#fff
    style D2 fill:#9C27B0,color:#fff
    style A3 fill:#FF5722,color:#fff
    style B3 fill:#FF5722,color:#fff
    style C3 fill:#FF5722,color:#fff
```

### Ground Pathway

```mermaid
flowchart LR
    subgraph Offensive["Offensive Track"]
        GA[Ground Access] --> GC[Ground Control]
        GC --> GF[Ground Finish]
    end

    subgraph Defensive["Defensive Track"]
        GE[Ground Escape] --> GR[Guard Recovery]
        GE --> GTS[Ground to Standing]
    end

    subgraph Combined["Combined"]
        PB[Positional Battle]
    end

    GA --> PB
    GE --> PB
    PB --> GC

    style GA fill:#FF5722,color:#fff
    style GC fill:#FF5722,color:#fff
    style GF fill:#FF5722,color:#fff
    style GE fill:#4CAF50,color:#fff
    style GR fill:#4CAF50,color:#fff
    style GTS fill:#4CAF50,color:#fff
    style PB fill:#9C27B0,color:#fff
```

---

## Game Inventory

### By Environment and Focus

| # | Game | Environment | Domain | Focus | Difficulty |
|---|------|-------------|--------|-------|------------|
| 1 | [Parry the Straight](../games/parry-the-straight.md) | Skill Isolation | Striking | Defensive | Beginner |
| 2 | [Tight Block](../games/tight-block.md) | Skill Isolation | Striking | Defensive | Beginner |
| 3 | [Slip the Straight](../games/slip-the-straight.md) | Skill Isolation | Striking | Defensive | Beginner |
| 4 | [Evade the Punch](../games/evade-the-punch.md) | Skill Isolation | Striking | Defensive | Intermediate |
| 5 | [Lead Hand Offense](../games/lead-hand-offense.md) | Skill Isolation | Striking | Offensive | Beginner |
| 6 | [Rear Hand Offense](../games/rear-hand-offense.md) | Skill Isolation | Striking | Offensive | Beginner |
| 7 | [Lead Leg Offense](../games/lead-leg-offense.md) | Skill Isolation | Striking | Offensive | Intermediate |
| 8 | [Rear Leg Offense](../games/rear-leg-offense.md) | Skill Isolation | Striking | Offensive | Intermediate |
| 9 | [Close-Range Defense](../games/close-range-defense.md) | Open Space | Striking | Defensive | Intermediate |
| 10 | [Land the Target](../games/land-the-target.md) | Open Space | Striking | Offensive | Intermediate |
| 11 | [Sustained Offense](../games/sustained-offense.md) | Open Space | Striking | Offensive | Intermediate |
| 12 | [Touch and Don't Get Touched](../games/touch-game.md) | Open Space | Striking | Combined | Beginner |
| 13 | [Winning the Circle](../games/winning-circle.md) | Open Space | Wrestling | Combined | Beginner |
| 14 | [Boundary Trigger](../games/boundary-trigger.md) | Open Space | Wrestling | Combined | Intermediate |
| 15 | [Pressure to Takedown](../games/pressure-to-takedown.md) | Open Space | Wrestling | Offensive | Advanced |
| 16 | [Pressure to Wall](../games/pressure-to-wall.md) | Open Space | Wrestling | Offensive | Advanced |
| 17 | [Takedown Defense](../games/takedown-defense.md) | Open Space | Wrestling | Defensive | Intermediate |
| 18 | [Clinch Denial](../games/clinch-denial.md) | Open Space | Wrestling | Defensive | Intermediate |
| 19 | [Open Space Takedown](../games/open-space-takedown.md) | Open Space | Wrestling | Combined | Intermediate |
| 20 | [Wall Control](../games/wall-control.md) | Wall | Wrestling | Offensive | Intermediate |
| 21 | [Wall Escape](../games/wall-escape.md) | Wall | Wrestling | Defensive | Intermediate |
| 22 | [Wall Pin to Ground](../games/wall-to-ground.md) | Wall | Wrestling | Offensive | Intermediate |
| 23 | [Wall Grinding](../games/wall-grinding.md) | Wall | Wrestling | Offensive | Intermediate |
| 24 | [Stand-Up Loop](../games/standup-loop.md) | Wall | Wrestling | Combined | Advanced |
| 25 | [Ground Access](../games/ground-access.md) | Ground | Grappling | Offensive | Intermediate |
| 26 | [Ground Control](../games/ground-control.md) | Ground | Grappling | Offensive | Intermediate |
| 27 | [Ground Finish](../games/ground-finish.md) | Ground | Grappling | Offensive | Advanced |
| 28 | [Ground Escape](../games/ground-escape.md) | Ground | Grappling | Defensive | Intermediate |
| 29 | [Guard Recovery](../games/guard-recovery.md) | Ground | Grappling | Defensive | Intermediate |
| 30 | [Ground to Standing](../games/ground-to-standing.md) | Ground | Grappling | Defensive | Intermediate |
| 31 | [Positional Battle](../games/positional-battle.md) | Ground | Grappling | Combined | Intermediate |

---

## Focus Distribution

=== "Defensive"
    Games where the defender is the primary learner:

    **Skill Isolation:**
    - Parry the Straight
    - Tight Block
    - Slip the Straight
    - Evade the Punch

    **Open Space:**
    - Close-Range Defense
    - Takedown Defense
    - Clinch Denial

    **Wall:**
    - Wall Escape

    **Ground:**
    - Ground Escape
    - Guard Recovery
    - Ground to Standing

=== "Offensive"
    Games where the attacker is the primary learner:

    **Skill Isolation:**
    - Lead Hand Offense
    - Rear Hand Offense
    - Lead Leg Offense
    - Rear Leg Offense

    **Open Space:**
    - Land the Target
    - Sustained Offense
    - Pressure to Takedown
    - Pressure to Wall

    **Wall:**
    - Wall Control
    - Wall Pin to Ground
    - Wall Grinding

    **Ground:**
    - Ground Access
    - Ground Control
    - Ground Finish

=== "Combined"
    Games where both sides have active learning objectives:

    **Open Space:**
    - Touch and Don't Get Touched
    - Winning the Circle
    - Boundary Trigger
    - Open Space Takedown

    **Wall:**
    - Stand-Up Loop

    **Ground:**
    - Positional Battle

---

## Concept Integration

| Concept | Where It Appears | Function |
|---------|------------------|----------|
| [Three Zones](../concepts/three-zones.md) | Land the Target, Sustained Offense | Offensive target selection |
| [Confidence Rating](../concepts/confidence-rating.md) | Land the Target, Skill Isolation | Commitment timing |
| [Defensive Solutions](../concepts/defensive-solutions.md) | All skill isolation, Close-Range Defense | Defense selection |
| [Hand Controls](../concepts/hand-controls.md) | Touch, Circle, Boundary, Pressure | Bridges striking and clinch |
| [TKO Pin](../concepts/tko-pin.md) | Wall→Ground, Stand-Up Loop, Ground Finish | Exploitation endpoint |
| [Decision States](../concepts/decision-states.md) | All games | Access → Stabilize → Exploit → Counter |
| [Full MMA Expression](../concepts/full-mma-expression.md) | Level 4 of all games | Cross-domain threat integration |

---

## System Statistics

| Category | Count |
|----------|-------|
| **Total Games** | 31 |
| **Defensive Focus** | 11 |
| **Offensive Focus** | 14 |
| **Combined Focus** | 6 |
| **Skill Isolation** | 8 |
| **Open Space** | 11 |
| **Wall** | 5 |
| **Ground** | 7 |

---

!!! abstract "System Evolution Notice"
    This map will be updated as new games are added and existing games are refined.
