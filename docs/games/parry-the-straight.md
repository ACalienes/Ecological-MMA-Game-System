# Parry the Straight

!!! info "Game Identity"
    - **Problem:** Learning to parry straight punches
    - **Environment:** Open Space
    - **Stage:** Access (Defensive Skill Isolation)

This is a **beginner skill isolation game** that teaches the parrying defensive solution. The defender can ONLY parry, forcing them to develop this specific skill.

---

## Goal

This is an **asymmetric game** with distinct roles.

| Role | Objective |
|------|-----------|
| **Attacker** | Land straight punches (jab or cross) to defender's head or belly |
| **Defender** | Parry (deflect) punches using hands or forearms |

The objective is **skill development**, not competition.

---

## Entry Condition

- Both players start in neutral standing position
- Close quarters distance (striking range)
- Roles are assigned; switch after 4 minutes
- Reset to neutral after each exchange

---

## Invariants

1. Attacker throws **straight punches ONLY** (no hooks, uppercuts, or looping strikes)
2. Defender can **ONLY parry** — no blocking, dodging, or backing up continuously
3. Attacker allows reset between strikes (no continuous pressure at Level 1)

---

## Task Focus

### Attacker
- Land clean straight punches to head or body
- Vary targets (head vs belly) to challenge defender
- Incorporate feints at higher levels

### Defender
- Keep hands close to face as base position
- Tap straight punches to the left or right to redirect them
- Read the punch early — parry before it lands

!!! question "Key Internal Questions"
    - "Am I redirecting the punch or just getting hit?"
    - "Can I see the punch coming early enough to parry?"
    - "Am I resetting to a good defensive position after each parry?"

---

## Key Logic: Why Isolate Parrying?

!!! note "Skill Isolation"
    Parrying is one of four core defensive solutions. By constraining the defender to parrying only:

    - Develops timing and hand-eye coordination
    - Learns to read straight punches
    - Builds habit of redirecting rather than absorbing

### Parrying Mechanics

- You can only parry **straight strikes**, not looping strikes
- Less distance = harder to parry, easier to tight block
- Successful parry redirects the punch off your centerline

---

## Win Conditions

| Role | Win Condition |
|------|---------------|
| **Defender** | Successfully parry a punch cleanly (full deflection) |
| **Attacker** | Land a clean punch to the head or body |

**On defender win:** Roles switch — defender becomes attacker.

**On attacker win:** Reset to neutral, same roles, attacker continues.

!!! tip "The Strategic Insight"
    You don't need to parry every punch. The defender can absorb strikes while reading the attacker's pattern and timing. When confidence is high, commit to the parry. This teaches:

    - **Pattern recognition** before commitment
    - **Parrying as opportunity**, not just survival
    - **Timing over volume** — one good parry beats ten bad ones

**Duration:** Play until natural stopping point or time limit. Role switches keep both players engaged.

---

## Levels

=== "Level 1 — Single Punch, Fixed Tempo"
    - One straight punch at a time
    - 1-second reset between punches
    - No feints
    - Defender: parry only

=== "Level 2 — Variable Tempo"
    - Still single punches
    - No reset requirement — attacker varies timing
    - Defender must read rhythm

=== "Level 3 — Add Feints"
    - Attacker can feint before throwing
    - Defender must distinguish real from fake
    - Parrying a feint = wasted movement

=== "Level 4 — Two-Punch Combinations"
    - Attacker throws 2-punch combos (jab-cross, jab-body)
    - Still straight punches only

=== "Level 5 — Counter After Parry"
    - After successful parry, defender can throw one counter punch
    - Teaches parry as setup, not just survival

---

## Safety

- **Contact limits:** Light to moderate — punches should land if not parried, but not full power
- **Stop conditions:** Loss of composure or excessive force
- **Coach intervention:** Reset if defender starts blocking/dodging instead of parrying

---

## System Position

```mermaid
flowchart LR
    A[Parry the Straight] --> B[Close-Range Defense]
    B --> C[Touch and Don't Get Touched]

    style A fill:#4CAF50,color:#fff
```

- **Prerequisite games:** None — this is foundational
- **Follow-on games:** Close-Range Defense, Touch and Don't Get Touched
- **Related concepts:** Defensive Solutions in Striking (Parrying)

---

!!! abstract "System Evolution Notice"
    This game may be refined as defensive skill development patterns emerge.
