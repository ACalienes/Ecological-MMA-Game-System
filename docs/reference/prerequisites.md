# Prerequisite Map

This page shows how games connect through prerequisites and progressions.

---

## System Overview

```mermaid
flowchart TD
    subgraph Foundations["Foundational Games"]
        T[Touch Game]
        P[Parry the Straight]
        TB[Tight Block]
        SS[Slip the Straight]
    end

    subgraph SkillDev["Skill Development"]
        EP[Evade the Punch]
        CRD[Close-Range Defense]
        LT[Land the Target]
    end

    subgraph SpaceControl["Space Control"]
        WC[Winning the Circle]
        BT[Boundary Trigger]
    end

    subgraph Wrestling["Wrestling Games"]
        PTT[Pressure to Takedown]
        OST[Open Space Takedown]
        WCon[Wall Control]
        WE[Wall Escape]
        WG[Wall to Ground]
        SUL[Stand-Up Loop]
    end

    %% Connections
    P --> CRD
    TB --> CRD
    SS --> EP
    EP --> CRD

    T --> WC
    WC --> BT

    CRD --> LT
    LT --> T
    CRD --> T

    CRD --> PTT
    WC --> PTT

    BT --> OST
    BT --> WCon

    WCon --> WE
    WCon --> WG
    WG --> SUL

    style T fill:#4CAF50,color:#fff
    style LT fill:#FF5722,color:#fff
```

---

## By Environment

### Skill Isolation

| Game | Prerequisites | Leads To |
|------|---------------|----------|
| Parry the Straight | None | Close-Range Defense |
| Tight Block | None | Close-Range Defense |
| Slip the Straight | None | Evade the Punch |
| Evade the Punch | Slip the Straight | Close-Range Defense |

### Open Space — Striking

| Game | Prerequisites | Leads To |
|------|---------------|----------|
| Touch Game | None | Winning the Circle, Land the Target |
| Close-Range Defense | Skill isolation games | Land the Target, Touch Game |
| Land the Target | Three Zones concept | Touch Game |

### Open Space — Wrestling

| Game | Prerequisites | Leads To |
|------|---------------|----------|
| Winning the Circle | Touch Game | Boundary Trigger |
| Boundary Trigger | Winning the Circle | Wall Control, Open Space Takedown |
| Pressure to Takedown | Close-Range Defense, Winning the Circle | Wall Control |
| Open Space Takedown | Boundary Trigger | Ground games |

### Wall

| Game | Prerequisites | Leads To |
|------|---------------|----------|
| Wall Control | Boundary Trigger | Wall Escape, Wall to Ground |
| Wall Escape | Wall Control | Stand-Up Loop |
| Wall to Ground | Wall Control | Stand-Up Loop, Ground games |
| Stand-Up Loop | Wall to Ground | Ground games |

---

## By Focus

### Defensive Progression

```mermaid
flowchart LR
    A[Skill Isolation] --> B[Close-Range Defense]
    B --> C[Touch Game]
    C --> D[Full Sparring]

    style A fill:#4CAF50,color:#fff
    style D fill:#9C27B0,color:#fff
```

### Offensive Progression

```mermaid
flowchart LR
    A[Land the Target] --> B[Touch Game]
    B --> C[Pressure Games]
    C --> D[Full Sparring]

    style A fill:#FF5722,color:#fff
    style D fill:#9C27B0,color:#fff
```

### Wrestling Progression

```mermaid
flowchart LR
    A[Winning the Circle] --> B[Boundary Trigger]
    B --> C[Wall/Takedown Games]
    C --> D[Ground Games]
    D --> E[Full Integration]

    style A fill:#4CAF50,color:#fff
    style E fill:#9C27B0,color:#fff
```

---

## Concept Prerequisites

Some games require understanding specific concepts:

| Concept | Required For |
|---------|--------------|
| Three Zones of Attack | Land the Target |
| Confidence Rating | Land the Target (recommended) |
| TKO Pin | Wall Control, Ground games |
| Defensive Solutions | All skill isolation games |
| Hand Controls | Close-Range Defense, Pressure to Takedown |

---

!!! abstract "Development Notice"
    This map will expand as new games are added to the system.
