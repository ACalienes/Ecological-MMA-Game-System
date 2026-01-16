# System Map

This page provides visual navigation of the entire game system.

---

## Complete Flowchart

```mermaid
flowchart TD
    subgraph SKILL_ISOLATION["SKILL ISOLATION"]
        P[Parry the Straight<br/>Stage: Access]
        TB[Tight Block<br/>Stage: Access]
        SS[Slip the Straight<br/>Stage: Access]
        EP[Evade the Punch<br/>Stage: Access]
    end

    subgraph STRIKING["OPEN SPACE - STRIKING"]
        CRD[Close-Range Defense<br/>Stage: Access / Counter]
        A[Touch and Don't Get Touched<br/>Stage: Access]
        B[Winning the Circle<br/>Stage: Access]
        PTT[Pressure to Takedown<br/>Stage: Access to Exploit]
    end

    subgraph TRANSITION["TRANSITION"]
        C[Boundary Trigger<br/>Stage: Access to Transition]
    end

    subgraph WALL["WALL ENVIRONMENT"]
        D[Wall Control<br/>Stage: Stabilize]
        E[Wall Escape<br/>Stage: Counter]
        F[Wall to Ground<br/>Stage: Stabilize to Exploit]
        G[Stand-Up Loop<br/>Stage: Counter and Stabilize]
    end

    subgraph OPEN_GRAPPLING["OPEN SPACE - GRAPPLING"]
        H[Open Space Takedown<br/>Stage: Stabilize to Exploit]
    end

    subgraph CONCEPTS["CROSS-CUTTING CONCEPTS"]
        DNS[DNS]
        TKO[TKO Pin]
        HC[Hand Controls]
    end

    P --> CRD
    TB --> CRD
    SS --> EP
    EP --> CRD
    CRD --> A
    CRD --> PTT
    A --> B
    B --> C
    C --> D
    C --> H
    PTT --> D
    PTT --> H
    D --> E
    D --> F
    F --> G

    HC -.-> A
    HC -.-> B
    HC -.-> C

    DNS -.-> D
    DNS -.-> F
    DNS -.-> H

    TKO -.-> F
    TKO -.-> G

    click P "/games/parry-the-straight/"
    click TB "/games/tight-block/"
    click SS "/games/slip-the-straight/"
    click EP "/games/evade-the-punch/"
    click CRD "/games/close-range-defense/"
    click A "/games/touch-game/"
    click B "/games/winning-circle/"
    click PTT "/games/pressure-to-takedown/"
    click C "/games/boundary-trigger/"
    click D "/games/wall-control/"
    click E "/games/wall-escape/"
    click F "/games/wall-to-ground/"
    click G "/games/standup-loop/"
    click H "/games/open-space-takedown/"
    click HC "/concepts/hand-controls/"
    click TKO "/concepts/tko-pin/"
    click DNS "/concepts/tko-pin/"

    style P fill:#8BC34A,color:#fff
    style TB fill:#8BC34A,color:#fff
    style SS fill:#8BC34A,color:#fff
    style EP fill:#8BC34A,color:#fff
    style CRD fill:#4CAF50,color:#fff
    style A fill:#4CAF50,color:#fff
    style B fill:#4CAF50,color:#fff
    style PTT fill:#9C27B0,color:#fff
    style C fill:#FF9800,color:#fff
    style D fill:#2196F3,color:#fff
    style E fill:#2196F3,color:#fff
    style F fill:#2196F3,color:#fff
    style G fill:#2196F3,color:#fff
    style H fill:#9C27B0,color:#fff
```

---

## Progression Pathways

### Wall Pathway (Primary)

```mermaid
flowchart LR
    A[Touch] --> B[Circle] --> C[Boundary] --> D[Wall Control]
    D --> E[Wall Escape]
    D --> F[Wall→Ground] --> G[Stand-Up Loop]

    style A fill:#4CAF50,color:#fff
    style D fill:#2196F3,color:#fff
    style F fill:#2196F3,color:#fff
```

### Open Space Pathway

```mermaid
flowchart LR
    A[Touch] --> B[Circle] --> C[Boundary] --> D[Open Takedown]
    D --> E[Ground games - pending]

    style A fill:#4CAF50,color:#fff
    style D fill:#9C27B0,color:#fff
    style E fill:#757575,color:#fff
```

---

## Game Inventory

| # | Game | Environment | Stage |
|---|------|-------------|-------|
| 1 | [Parry the Straight](../games/parry-the-straight.md) | Open Space | Access (Skill Isolation) |
| 2 | [Tight Block](../games/tight-block.md) | Open Space | Access (Skill Isolation) |
| 3 | [Slip the Straight](../games/slip-the-straight.md) | Open Space | Access (Skill Isolation) |
| 4 | [Evade the Punch](../games/evade-the-punch.md) | Open Space | Access (Skill Integration) |
| 5 | [Close-Range Defense](../games/close-range-defense.md) | Open Space | Access / Counter |
| 6 | [Touch and Don't Get Touched](../games/touch-game.md) | Open Space | Access |
| 7 | [Winning the Circle](../games/winning-circle.md) | Open Space | Access |
| 8 | [Pressure to Takedown](../games/pressure-to-takedown.md) | Open Space | Access → Stabilize → Exploit |
| 9 | [Boundary Trigger](../games/boundary-trigger.md) | Transition | Access → Transition |
| 10 | [Wall Control](../games/wall-control.md) | Wall | Stabilize |
| 11 | [Wall Escape](../games/wall-escape.md) | Wall | Counter |
| 12 | [Wall → Ground](../games/wall-to-ground.md) | Wall → Ground | Stabilize → Exploit |
| 13 | [Stand-Up Loop](../games/standup-loop.md) | Wall / Ground | Counter ↔ Stabilize |
| 14 | [Open Space Takedown](../games/open-space-takedown.md) | Open Space | Stabilize → Exploit |

---

## Decision State Coverage

=== "Access"
    Games that teach engagement and connection:

    - Parry the Straight (Skill Isolation)
    - Tight Block (Skill Isolation)
    - Slip the Straight (Skill Isolation)
    - Evade the Punch (Skill Integration)
    - Close-Range Defense
    - Touch and Don't Get Touched
    - Winning the Circle
    - Pressure to Takedown
    - Boundary Trigger

=== "Stabilize"
    Games that teach control establishment:

    - Wall Control — Establish Pin
    - Wall Pin → Ground Control
    - Open Space Takedown

=== "Exploit"
    Games where TKO Pin or damage becomes available:

    - Wall → Ground (Level 3)
    - Stand-Up Loop (TKO access)
    - Open Space Takedown (Level 3)

=== "Counter"
    Games that teach defensive response:

    - Close-Range Defense (Level 4-5)
    - Wall Escape — Anti-Pin
    - Stand-Up & Re-Pin Loop

---

## Concept Integration

| Concept | Where It Appears | Function |
|---------|------------------|----------|
| [Hand Controls](../concepts/hand-controls.md) | Touch, Circle, Boundary | Bridges striking and clinch |
| [DNS](../concepts/tko-pin.md) | Wall Control, Wall→Ground, Open Takedown | Punishes poor posture |
| [TKO Pin](../concepts/tko-pin.md) | Wall→Ground, Stand-Up Loop | Exploitation endpoint |

---

## Gaps (Future Development)

!!! warning "Missing Components"

    | Gap | Priority |
    |-----|----------|
    | Ground-only games (start on ground) | High |
    | Ground Escape game | High |
    | TKO Pin dedicated game | Medium |
    | Submission games | Medium |
    | Shot entry game (takedown from distance) | Lower |
