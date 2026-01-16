---
title: Pressure to Wall
environment: open-space
domain: wrestling
focus: offensive
difficulty: advanced
duration: medium
min_players: 2
equipment:
  - gloves
  - wall
prerequisites:
  concepts:
    - hand-controls
  games:
    - winning-circle
    - boundary-trigger
tags:
  - wrestling
  - offense
  - pressure
  - wall
  - dirty-boxing
  - transition
---

# Pressure to Wall

!!! info "Game Identity"
    - **Problem:** Using strikes and pressure to establish wall position for grinding
    - **Environment:** Open Space → Wall
    - **Stage:** Access → Stabilize (Wall Dominance)

This is an **offensive game** that chains strikes to wall control. Unlike Pressure to Takedown, the goal is wall position for damage (dirty boxing, grinding), not transitioning to ground.

---

## Goal

This is an **asymmetric game** with distinct roles.

| Role | Objective |
|------|-----------|
| **Attacker** | Drive opponent to wall and establish control for damage |
| **Defender** | Avoid wall, escape pressure, or reverse position |

The objective is **wall dominance**, not takedown.

---

## Entry Condition

- Both players start in open space at striking range
- Wall/cage is available
- Attacker uses strikes and pressure to drive to wall
- Reset when wall control is established OR defender escapes cleanly

---

## Invariants

1. Attacker must use **strikes to create pressure** — not just pushing
2. Goal is **wall control**, not takedown
3. Once on wall, attacker works damage/grinding, not ground transition
4. Defender cannot simply back up infinitely — wall exists

---

## Task Focus

### Attacker
- Use strikes to back opponent toward wall
- Close distance and establish clinch at wall
- Once on wall: dirty boxing, knees, grinding
- Maintain wall position, deny escape

### Defender
- Avoid being backed to wall
- Circle and create angles
- If on wall: escape or reverse
- Counter to discourage pressure

!!! question "Key Internal Questions — Attacker"
    - "Am I using strikes to move them or just throwing?"
    - "Can I cut off their angle?"
    - "Once on wall, am I damaging or just holding?"

---

## Key Logic: Wall as Destination

!!! note "The Core Skill"
    This game treats the wall as the END STATE, not a waypoint:

    | Pressure to Takedown | Pressure to Wall |
    |---------------------|------------------|
    | Strikes → Clinch → Takedown → Ground | Strikes → Clinch → Wall → Damage |
    | Ground control is goal | Wall control is goal |
    | Transitions through wall | Stays on wall |

    Choose this pathway when ground isn't advantageous or dirty boxing is the game plan.

---

## Win Conditions

| Role | Win Condition |
|------|---------------|
| **Attacker** | Establish wall control AND land damage (knees, dirty boxing) |
| **Defender** | Escape wall cleanly OR reverse position |

**On attacker win:** Roles switch.
**On defender win:** Reset to open space, same roles.

---

## Levels

=== "Level 1 — Pressure to Wall Only"
    - Focus on driving to wall with strikes
    - Once on wall, establish control (no extended damage)
    - Focus: Closing and pinning

=== "Level 2 — Add Wall Damage"
    - Once wall control established, work damage
    - Dirty boxing, knees, grinding
    - Focus: Damage from wall position

=== "Level 3 — Defender Counters"
    - Defender can counter-strike during pressure phase
    - Attacker must close through counters
    - Focus: Pressure under threat

=== "Level 4 — Full MMA Expression"
    - Defender can counter, clinch, OR shoot
    - Attacker must achieve wall while managing all threats
    - Focus: Wall pressure under MMA reality
    - See: [Full MMA Expression](../concepts/full-mma-expression.md)

---

## Safety

- **Contact limits:** Light to moderate
- **Stop conditions:** Excessive force, uncontrolled pressure
- **Coach intervention:** Reset if wall work becomes grinding without purpose

---

## System Position

```mermaid
flowchart LR
    A[Winning the Circle] --> B[Boundary Trigger]
    B --> C[Pressure to Wall]
    C --> D[Wall Grinding]

    style C fill:#FF5722,color:#fff
```

- **Prerequisite games:** Winning the Circle, Boundary Trigger
- **Follow-on games:** Wall Grinding, Wall Control
- **Related concepts:** Hand Controls

---

!!! abstract "System Evolution Notice"
    This game may be refined as wall pressure patterns emerge.
