# Wall Escape — Anti-Pin

!!! info "Game Identity"
    - **Problem:** Escaping wall immobilization
    - **Environment:** Wall
    - **Stage:** Counter

This is the **defensive counterpart** to Wall Control. Every offensive layer requires a defensive response.

---

## Goal

This is an **asymmetric game** with inverted priorities.

| Role | Objective |
|------|-----------|
| **Defender (primary focus)** | Break pin and return to space or reverse position |
| **Attacker** | Maintain pin and deny escape |

The objective is **escape or reversal**, not survival.

---

## Entry Condition

- Start from functional wall pin (attacker has established control)
- Defender's shoulders are substantially flat to wall
- Defender's rotation is initially compromised
- Reset if attacker loses control completely or defender fully disengages

---

## Invariants

1. Wall remains dominant constraint
2. Defender must actively attempt escape — no passive survival
3. No takedowns yet — focus is on breaking the pin

---

## Key Logic: The Escape Sequence

Escapes follow a general pattern:

```mermaid
flowchart LR
    A[Rotate Shoulders] --> B[Create Frames]
    B --> C[Move Hips]
    C --> D[Turn to Face]
    D --> E[Disengage or Reverse]

    style A fill:#4CAF50,color:#fff
    style E fill:#FF5722,color:#fff
```

!!! warning "Critical Order"
    Attempting to disengage before rotating typically fails.

### Early vs Late Escape

| Type | Description | Effort Required |
|------|-------------|-----------------|
| **Early escape** | Act before pin consolidates | Lower — requires reading |
| **Late escape** | Act after pin is established | Higher — exposes to damage |

The game teaches athletes to **escape early** by recognizing consolidation.

### DNS as Escape Catalyst

When the attacker's head drops or posture breaks:

- Guillotine threats become available
- Front headlock entries open up
- Attacker must choose between maintaining pin and protecting neck

!!! tip "DNS doesn't need to finish"
    It creates **decision pressure** that enables escape.

---

## Win Conditions

| Role | Win Condition |
|------|---------------|
| Defender | Escape (creating space and facing attacker) or reversal |
| Attacker | Sustained pin (10 seconds) |

Longer hold requirement reflects the disadvantaged starting position for defender.

---

## Levels

=== "Level 1 — Escape"
    - Focus on breaking pin and creating space
    - No strikes
    - Success = shoulders no longer flat + facing attacker

=== "Level 2 — Escape + Disengage"
    - Must create meaningful space after breaking pin
    - Disengage = return to striking range with defensive posture
    - Attacker may follow and attempt re-clinch

=== "Level 3 — Escape + Reverse"
    - Defender attempts to achieve dominant position
    - Reversal = defender now has attacker against wall
    - Highest difficulty — requires reading attacker's balance

---

## Advanced Expressions (Coach Context)

As athletes develop, escape becomes proactive rather than reactive:

**For defenders:**

- Rotation begins before pin is fully established
- Frames are pre-positioned, not created under pressure
- DNS threats become tactical rather than desperate
- Reversals emerge from attacker over-commitment

**For attackers:**

- Adjustment becomes continuous, not reactive
- Pin maintenance becomes dynamic
- Respect for DNS becomes structural

---

## System Position

```mermaid
flowchart LR
    A[Wall Control] --> B[Wall Escape]

    style B fill:#9C27B0,color:#fff
```

This game maintains **defensive symmetry** in the system.

---

!!! abstract "System Evolution Notice"
    Escape strategies may be refined with experience.
