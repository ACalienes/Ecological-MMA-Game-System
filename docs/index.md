# Ecological MMA Games System

A constraints-led, game-based training framework for MMA.

---

## Core Principles

### Game-Based Training

MMA is a decision system, not a technique collection. This framework organizes training around **repeatable problems**, not named moves.

### Environment-Led Learning

The environment does the teaching. Games are designed so correct behavior is **rewarded by the constraints**, not prescribed by a coach.

### Control Before Damage

Across all environments, **control precedes striking**. Stability comes before exploitation. This principle is non-negotiable.

### Offensive-Defensive Symmetry

Every offensive layer has a defensive counter. If we teach pinning, we teach escaping. **No domination without resistance.**

---

## Quick Navigation

| Section | Description |
|---------|-------------|
| [System Map](system/map.md) | Visual overview of all games and their relationships |
| [Games Library](games/index.md) | Complete catalog of training games |
| [Concepts](concepts/tko-pin.md) | Key concepts that span multiple games |
| [Coach Tools](tools/safety.md) | Safety rules, assessment rubrics, templates |

---

## The Four Decision States

Every MMA interaction maps to one of four decision states:

```mermaid
flowchart LR
    A[ACCESS] --> B[STABILIZE]
    B --> C[EXPLOIT]
    C --> D[COUNTER]
    D --> A

    style A fill:#4CAF50,color:#fff
    style B fill:#2196F3,color:#fff
    style C fill:#FF5722,color:#fff
    style D fill:#9C27B0,color:#fff
```

| State | Question |
|-------|----------|
| **Access** | Can I connect or engage? |
| **Stabilize** | Can I prevent escape or reversal? |
| **Exploit** | Can I strike, submit, or advance? |
| **Counter** | Can the opponent interrupt or escape? |

---

## Current System Status

!!! info "Version 0.1"

    **8 games documented** across Open Space and Wall environments.

    Ground-only games are in development.

### Games Available

- [x] Touch and Don't Get Touched
- [x] Winning the Circle
- [x] Boundary Trigger
- [x] Wall Control — Establish Pin
- [x] Wall Escape — Anti-Pin
- [x] Wall Pin → Ground Control
- [x] Stand-Up & Re-Pin Loop
- [x] Open Space Takedown

---

## System Evolution Notice

This framework is intentionally **non-dogmatic**. Concepts may be refined, definitions updated, and games reorganized as understanding improves.

The only requirements are:

- Ecological validity
- Internal consistency
- Safety
- Clarity of learning objectives
