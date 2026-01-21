# Game Template

Use this template when documenting new games in the system.

---

## Quick Reference

Copy this structure for new games:

=== "Frontmatter"

    ```yaml
    ---
    title: Game Name
    environment: open-space
    domain: striking
    focus: defensive
    difficulty: beginner
    duration: short
    min_players: 2
    equipment: none
    prerequisites:
      concepts: []
      games: []
    tags:
      - tag1
      - tag2
    ---
    ```

=== "Page Structure"

    ```markdown
    # Game Name

    !!! info "Game Identity"
        - **Problem:** What this game solves
        - **Environment:** Where it takes place
        - **Stage:** Decision state (Access/Stabilize/Exploit/Counter)

    Brief description.

    ---

    ## Roles & Objectives

    | Role | Objective |
    |------|-----------|
    | **A Side** | What they're trying to do |
    | **B Side** | What they're trying to do |

    ---

    ## Setup

    **Starting Position:** Describe positions and distances

    **Reset When:** Conditions that trigger reset

    ---

    ## Rules

    **Allowed:**
    - Action 1
    - Action 2

    **Not Allowed:**
    - Restriction 1
    - Restriction 2

    ---

    ## Win Conditions

    | Role | Wins By |
    |------|---------|
    | A Side | Specific, observable condition |
    | B Side | Specific, observable condition |

    ---

    ## Levels

    | Level | Focus | Constraints |
    |-------|-------|-------------|
    | 1 | Core skill | Most restricted |
    | 2 | Integration | Added complexity |
    | 3 | Full expression | Realistic pressure |

    ---

    ## Safety

    - Contact limits
    - Stop conditions

    ---

    ## Connections

    **Prerequisites:** Games/concepts needed first
    **Leads To:** Follow-on games
    ```

---

## Section Guide

??? note "Game Identity"

    The identity box appears at the top of every game page.

    | Field | Description | Example |
    |-------|-------------|---------|
    | **Problem** | Core learning challenge (1 sentence) | "Defending strikes at close range" |
    | **Environment** | Physical context | Open Space, Wall, Ground |
    | **Stage** | Decision state | Access, Stabilize, Exploit, Counter |

??? note "Roles & Objectives"

    Games use **A Side** and **B Side** as neutral role labels.

    | Game Type | A Side | B Side |
    |-----------|--------|--------|
    | Offense vs Defense | Attacker | Defender |
    | Positional | Top Player | Bottom Player |
    | Skill Isolation | Feeder | Practitioner |
    | Mirrored | Player 1 | Player 2 (same goal) |

??? note "Rules (Invariants)"

    Rules define the problem space. Good rules:

    - Are clear and unambiguous
    - Shape behavior toward the learning goal
    - Remove distracting options

    !!! example "Example"
        "No clinching" removes grappling so athletes focus on striking range.

??? note "Win Conditions"

    Must be **specific and observable**.

    !!! failure "Bad"
        "A Side wins by controlling B Side"

    !!! success "Good"
        "A Side wins by holding pin (flat shoulders, controlled hips) for 5 seconds"

??? note "Levels"

    Progressive difficulty within the same problem:

    | Level | Purpose |
    |-------|---------|
    | **1** | Core skill in isolation |
    | **2** | Added resistance or options |
    | **3** | Full expression with counters |
    | **4** | Full MMA Expression (cross-domain threats) |

??? note "Safety"

    Every game needs:

    - **Contact limits** — How hard can strikes be?
    - **Stop conditions** — When does play pause automatically?
    - **Intervention criteria** — When must coach step in?

---

## Checklist

Before publishing a new game:

- [ ] Problem is clearly defined
- [ ] Environment and stage are tagged
- [ ] Win conditions are observable
- [ ] Safety section is complete
- [ ] Prerequisites are mapped
- [ ] At least 3 levels defined
- [ ] Tags added for search

---

!!! abstract "Template Evolution"
    This template updates as patterns emerge. See [Change Log](../reference/changelog.md) for history.
