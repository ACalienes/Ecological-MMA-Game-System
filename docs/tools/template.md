# Game Template

Use this template when documenting new games in the system.

---

## Template Structure

```markdown
# GAME: <NAME>

## GAME IDENTITY
- Problem:
- Environment:
- Stage:

Brief description of what this game teaches and why it exists.

---

## GOAL

Describe the game type and overall objective structure.

**Game Type:** <Asymmetric / Mirrored>

**A Side:** <Role Label> (e.g., Attacker, Top Player, Initiator)
- Objective:

**B Side:** <Role Label> (e.g., Defender, Bottom Player, Responder)
- Objective:

(For mirrored games, both sides share the same objective — describe once.)

---

## ENTRY CONDITION
- Starting positions:
- Distance to constraints:
- Reset rules:

---

## INVARIANTS
1.
2.
3.

---

## TASK FOCUS

### A Side (<Role Label>)
-

### B Side (<Role Label>)
-

Key internal questions:
- A Side: ""
- B Side: ""

---

## LEGAL ACTIONS
- Strikes:
- Submissions:
- Wrestling:

---

## KEY LOGIC (GAME-SPECIFIC)

If this game has unique mechanics or decision rules, document them here.

---

## WIN CONDITIONS

**A Side (<Role Label>) wins by:**
-

**B Side (<Role Label>) wins by:**
-

**Role switch / Reset rules:**
-

(For diagnostic games without win conditions, describe success criteria instead.)

---

## LEVELS
- Level 1:
- Level 2:
- Level 3:

---

## ADVANCED EXPRESSIONS (COACH CONTEXT)

How does the game evolve at higher skill levels?

---

## SAFETY
- Contact limits:
- Stop conditions:
- Coach intervention criteria:

---

## SYSTEM POSITION

- Prerequisite games:
- Follow-on games:
- Related concepts:

---

## SYSTEM EVOLUTION NOTICE

This game may be revised as the system evolves.
```

---

## Section Guide

### GAME IDENTITY

| Field | Description |
|-------|-------------|
| Problem | The core learning challenge (1 sentence) |
| Environment | Where this game takes place |
| Stage | Which decision state(s) this addresses |

### GOAL

Describe what each role is trying to achieve.

**A Side / B Side Convention:**

Games use "A Side" and "B Side" as neutral role designators. Label them appropriately for the game:

| Game Type | A Side Label | B Side Label |
|-----------|--------------|--------------|
| Offense vs Defense | Attacker | Defender |
| Positional | Top Player | Bottom Player |
| Territorial | Aggressor | Space Manager |
| Skill Isolation | Feeder | Practitioner |
| Mirrored | Player 1 | Player 2 (same goal) |

**Objective types to consider:**

- Spatial control
- Position establishment
- Escape/reversal
- Transition recognition
- Successful technique execution

### ENTRY CONDITION

Define exactly how the game starts:

- Physical positions
- Distance from constraints (wall, boundary)
- When/how to reset

### INVARIANTS

Rules that **cannot be violated**. These define the problem space.

!!! tip "Good Invariants"
    - Are clear and unambiguous
    - Shape behavior toward the learning goal
    - Remove distracting options

### TASK FOCUS

What should each role (A Side and B Side) be paying attention to? Include:

- Physical tasks
- Perceptual tasks
- Internal questions for self-assessment

Use the same role labels established in the GOAL section.

### KEY LOGIC

Game-specific mechanics that don't fit elsewhere:

- Permission triggers
- Counter-logic rules
- Loop conditions
- Special transitions

### WIN CONDITIONS

Clear, observable criteria for success for each side. Avoid vague conditions.

**Include:**
- A Side win condition
- B Side win condition
- Role switch rules (if applicable)
- Reset rules

!!! warning "Bad Win Condition"
    "A Side wins by controlling B Side"

!!! success "Good Win Condition"
    "A Side (Attacker) wins by holding functional pin (flat shoulders, controlled hips) for 5 seconds"

!!! tip "Gamification"
    Win conditions encourage engagement. Even skill isolation games benefit from clear win conditions with role switching (see Confidence Rating concept — successful defense = role switch).

### LEVELS

Progressive difficulty within the same problem:

- Level 1: Core problem only
- Level 2: Added resistance or complexity
- Level 3: Full expression with counters

### ADVANCED EXPRESSIONS

How does this game look different when experts play it? What emerges naturally?

### SAFETY

Specific to this game:

- Contact limits
- Automatic stop conditions
- When coach must intervene

### SYSTEM POSITION

Where this game fits:

- What must be learned first (prerequisites)
- What this game leads to (follow-ons)
- Related concepts

---

## Checklist Before Publishing

- [ ] Problem is clearly defined
- [ ] Environment and stage are tagged
- [ ] Win conditions are observable
- [ ] Safety section is complete
- [ ] System position is mapped
- [ ] At least 3 levels defined
- [ ] Invariants shape behavior appropriately

---

!!! abstract "System Evolution Notice"
    This template may be updated as new patterns emerge.
