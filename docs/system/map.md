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
            SIO[Coming Soon]
        end
    end

    subgraph OPEN_STRIKING["OPEN SPACE - STRIKING"]
        subgraph OS_DEF["Defensive"]
            CRD[Close-Range Defense]
        end
        subgraph OS_OFF["Offensive"]
            LT[Land the Target]
        end
        subgraph OS_COM["Combined"]
            TG[Touch Game]
        end
    end

    subgraph OPEN_WRESTLING["OPEN SPACE - WRESTLING"]
        subgraph OW_OFF["Offensive"]
            PTT[Pressure to Takedown]
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
        end
        subgraph W_DEF["Defensive"]
            WE[Wall Escape]
        end
        subgraph W_COM["Combined"]
            SUL[Stand-Up Loop]
        end
    end

    subgraph GROUND["GROUND"]
        GRD[Coming Soon]
    end

    %% Skill Isolation flows
    P --> CRD
    TB --> CRD
    SS --> EP
    EP --> CRD

    %% Offensive/Defensive convergence
    CRD --> TG
    LT --> TG

    %% Open Space progression
    TG --> WC
    WC --> BT

    %% Wrestling progression
    BT --> WCon
    BT --> OST
    CRD --> PTT
    WC --> PTT
    PTT --> WCon
    PTT --> OST

    %% Wall progression
    WCon --> WE
    WCon --> WG
    WG --> SUL

    %% To Ground
    OST --> GRD
    SUL --> GRD

    %% Styling by focus
    style P fill:#4CAF50,color:#fff
    style TB fill:#4CAF50,color:#fff
    style SS fill:#4CAF50,color:#fff
    style EP fill:#4CAF50,color:#fff
    style CRD fill:#4CAF50,color:#fff
    style WE fill:#4CAF50,color:#fff

    style LT fill:#FF5722,color:#fff
    style PTT fill:#FF5722,color:#fff
    style WCon fill:#FF5722,color:#fff
    style WG fill:#FF5722,color:#fff

    style TG fill:#9C27B0,color:#fff
    style WC fill:#9C27B0,color:#fff
    style BT fill:#9C27B0,color:#fff
    style OST fill:#9C27B0,color:#fff
    style SUL fill:#9C27B0,color:#fff

    style SIO fill:#757575,color:#fff
    style GRD fill:#757575,color:#fff
```

**Legend:**
- Green = Defensive Focus
- Orange = Offensive Focus
- Purple = Combined Focus
- Gray = Coming Soon

---

## Offensive/Defensive Convergence

The system is built around the principle that offensive and defensive skills converge in combined games:

```mermaid
flowchart LR
    subgraph Defensive["Defensive Track"]
        A[Skill Isolation] --> B[Close-Range Defense]
    end

    subgraph Offensive["Offensive Track"]
        C[Land the Target]
    end

    B --> D[Touch and Don't Get Touched]
    C --> D
    D --> E[Full Integration]

    style B fill:#4CAF50,color:#fff
    style C fill:#FF5722,color:#fff
    style D fill:#9C27B0,color:#fff
```

---

## Environment Pathways

### Striking Pathway

```mermaid
flowchart LR
    A[Skill Isolation<br/>Parry, Block, Slip, Evade] --> B[Close-Range Defense]
    C[Land the Target] --> D[Touch Game]
    B --> D
    D --> E[Winning the Circle]

    style A fill:#4CAF50,color:#fff
    style B fill:#4CAF50,color:#fff
    style C fill:#FF5722,color:#fff
    style D fill:#9C27B0,color:#fff
```

### Wall Pathway

```mermaid
flowchart LR
    A[Boundary Trigger] --> B[Wall Control]
    B --> C[Wall Escape]
    B --> D[Wall→Ground]
    D --> E[Stand-Up Loop]

    style B fill:#FF5722,color:#fff
    style C fill:#4CAF50,color:#fff
    style D fill:#FF5722,color:#fff
    style E fill:#9C27B0,color:#fff
```

### Open Space Wrestling Pathway

```mermaid
flowchart LR
    A[Winning the Circle] --> B[Boundary Trigger]
    B --> C[Open Space Takedown]
    C --> D[Ground games]

    style A fill:#9C27B0,color:#fff
    style B fill:#9C27B0,color:#fff
    style C fill:#9C27B0,color:#fff
    style D fill:#757575,color:#fff
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
| 5 | [Close-Range Defense](../games/close-range-defense.md) | Open Space | Striking | Defensive | Intermediate |
| 6 | [Land the Target](../games/land-the-target.md) | Open Space | Striking | Offensive | Intermediate |
| 7 | [Touch and Don't Get Touched](../games/touch-game.md) | Open Space | Striking | Combined | Beginner |
| 8 | [Winning the Circle](../games/winning-circle.md) | Open Space | Wrestling | Combined | Beginner |
| 9 | [Boundary Trigger](../games/boundary-trigger.md) | Open Space | Wrestling | Combined | Intermediate |
| 10 | [Pressure to Takedown](../games/pressure-to-takedown.md) | Open Space | Wrestling | Offensive | Advanced |
| 11 | [Open Space Takedown](../games/open-space-takedown.md) | Open Space | Wrestling | Combined | Intermediate |
| 12 | [Wall Control](../games/wall-control.md) | Wall | Wrestling | Offensive | Intermediate |
| 13 | [Wall Escape](../games/wall-escape.md) | Wall | Wrestling | Defensive | Intermediate |
| 14 | [Wall Pin to Ground](../games/wall-to-ground.md) | Wall | Wrestling | Offensive | Intermediate |
| 15 | [Stand-Up Loop](../games/standup-loop.md) | Wall | Wrestling | Combined | Advanced |

---

## Focus Distribution

=== "Defensive"
    Games where the defender is the primary learner:

    - Parry the Straight
    - Tight Block
    - Slip the Straight
    - Evade the Punch
    - Close-Range Defense
    - Wall Escape

=== "Offensive"
    Games where the attacker is the primary learner:

    - Land the Target
    - Pressure to Takedown
    - Wall Control
    - Wall Pin to Ground

=== "Combined"
    Games where both sides have active learning objectives:

    - Touch and Don't Get Touched
    - Winning the Circle
    - Boundary Trigger
    - Open Space Takedown
    - Stand-Up Loop

---

## Concept Integration

| Concept | Where It Appears | Function |
|---------|------------------|----------|
| [Three Zones](../concepts/three-zones.md) | Land the Target | Offensive target selection |
| [Confidence Rating](../concepts/confidence-rating.md) | Land the Target, Skill Isolation | Commitment timing |
| [Defensive Solutions](../concepts/defensive-solutions.md) | All skill isolation, Close-Range Defense | Defense selection |
| [Hand Controls](../concepts/hand-controls.md) | Touch, Circle, Boundary, Pressure | Bridges striking and clinch |
| [TKO Pin](../concepts/tko-pin.md) | Wall→Ground, Stand-Up Loop, Ground games | Exploitation endpoint |

---

## Development Roadmap

| Area | Status | Priority |
|------|--------|----------|
| Offensive Skill Isolation | Planned | Medium |
| Defensive Wrestling (Open Space) | Planned | Medium |
| Ground - Offensive | Planned | High |
| Ground - Defensive | Planned | High |
| Ground - Combined | Planned | High |
| Transitions | Planned | Medium |

See placeholder pages for conceptual frameworks.

---

!!! abstract "System Evolution Notice"
    This map will be updated as new games are added to the system.
