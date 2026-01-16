---
title: Ground Finish
environment: ground
domain: grappling
focus: offensive
difficulty: advanced
duration: medium
min_players: 2
equipment:
  - mats
  - gloves
prerequisites:
  concepts:
    - decision-states
    - tko-pin
  games:
    - ground-control
tags:
  - ground
  - offense
  - finish
  - exploit
  - gnp
  - submission
---

# Ground Finish

!!! info "Game Identity"
    - **Problem:** Finishing the fight from dominant ground position
    - **Environment:** Ground
    - **Stage:** Exploit (Offensive Grappling)

This is an **offensive ground game** focused on finishing — either through ground strikes (GnP) or submission. The top player learns to convert control into fight-ending offense.

---

## Goal

This is an **asymmetric game** with distinct roles.

| Role | Objective |
|------|-----------|
| **Top (Attacker)** | Finish via strikes (TKO) or submission |
| **Bottom (Defender)** | Survive, escape, or reverse |

The objective is **finishing the fight**, not just maintaining position.

---

## Entry Condition

- Start with top player in dominant position (side control, mount, or back)
- Top player works to finish
- Bottom player works to survive and escape
- Reset when finish achieved OR bottom escapes to safe position

---

## Invariants

1. Top player must **work toward finish** — just controlling doesn't count
2. Bottom player **actively defends** — not just absorbing
3. Finish must be realistic (controlled strikes, proper submission technique)
4. Control loss = finish attempt failed, not game over

---

## Task Focus

### Top (Attacker)
- Create striking opportunities from position
- Set up submissions from control
- Maintain position while attacking
- Chain finishing attempts

### Bottom (Defender)
- Defend strikes intelligently
- Prevent submission setups
- Create escape opportunities during attacks
- Survive and improve position

!!! question "Key Internal Questions — Top"
    - "Am I damaging or just busy?"
    - "Can I set up a submission from here?"
    - "Am I maintaining control while attacking?"

---

## Key Logic: Exploit the Position

!!! note "The Core Skill"
    Ground Finish is the final stage of the offensive ground progression:

    | Stage | Goal |
    |-------|------|
    | Access | Get past guard (Ground Access) |
    | Stabilize | Hold position (Ground Control) |
    | Exploit | Finish the fight |

    The skill: Converting positional advantage into fight-ending offense.

    Two paths to finish:

    | Path | Method |
    |------|--------|
    | Strikes | Ground and pound → TKO/referee stoppage |
    | Submission | Choke or joint lock → Tap or unconscious |

---

## Win Conditions

| Role | Win Condition |
|------|---------------|
| **Top** | Achieve finish (submission tap or significant accumulated damage) |
| **Bottom** | Escape to guard, stand up, or reverse position |

**On top win:** Roles switch.
**On bottom win:** Reset from dominant position, same roles.

---

## Levels

=== "Level 1 — Strikes Only"
    - Top works ground and pound
    - No submissions
    - Focus: GnP from control

=== "Level 2 — Submissions Only"
    - Top works submission attacks
    - No strikes
    - Focus: Submission setups from position

=== "Level 3 — Combined"
    - Top can use strikes AND submissions
    - Strikes open submissions, submissions open strikes
    - Focus: Integrated finishing

=== "Level 4 — Full MMA Expression"
    - Bottom can submit or sweep
    - Top must finish while managing threats
    - Focus: Finishing under MMA reality
    - See: [Full MMA Expression](../concepts/full-mma-expression.md)

---

## Safety

- **Contact limits:** Light to moderate strikes, controlled submissions
- **Stop conditions:** Tap immediately honored, excessive force
- **Coach intervention:** Reset if finishing becomes grinding without progress

---

## System Position

```mermaid
flowchart LR
    A[Ground Access] --> B[Ground Control]
    B --> C[Ground Finish]

    style C fill:#FF5722,color:#fff
```

- **Prerequisite games:** Ground Control
- **Follow-on games:** N/A (end-state game)
- **Related concepts:** Decision States, TKO Pin

---

!!! abstract "System Evolution Notice"
    This game may be refined as ground finishing patterns emerge.
