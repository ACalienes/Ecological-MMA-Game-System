# Change Log

A record of significant changes to the system's logic, structure, and design decisions.

---

## Purpose

This log tracks the evolution of the Ecological MMA Games System. When we refine our thinking, change terminology, or restructure the system, we document it here. This serves as:

- Historical record of design decisions
- Reference for understanding why things are the way they are
- Transparency about system evolution

---

## Version History

### v0.5.0 — CLA Documentation Rollout (Current)

**Date:** January 2026

**Major Changes:**

1. **Constraints-Led Approach (CLA) Sections Added to All Games**
   - Added standardized CLA documentation to all 34 games
   - Each game now includes:
     - **Constraints Analysis** — How task/individual/environmental constraints create affordances
     - **Information Structure** — Perception-action coupling for each role (haptic, visual, proprioceptive)
     - **Representativeness** — How games model real MMA situations with fidelity analysis
     - **Variability Guidelines** — "Repetition without repetition" (Bernstein, 1967)
     - **Readiness Indicators** — When athletes are ready to progress or exit games
   - Theoretical foundations reference Renshaw et al., 2019 throughout

2. **Game Count Verified at 34 Games**
   - Consistency check script added to validate game counts
   - All cross-references verified and updated

3. **Navigation Cleanup**
   - Removed deleted Boundary Trigger references
   - Fixed Winning the Circle → Pressure to Clinch nav links

---

### v0.4.0 — System Restructure

**Date:** January 2026

**Major Changes:**

1. **Transition Zone Added**
   - Created new environment between Striking and Wrestling
   - Added Clinch Denial, Counter-Striking and Counter-Wrestling games

2. **Winning the Circle → Pressure to Clinch**
   - Renamed game to describe the activity, not the outcome
   - "Winning the Circle" became a concept page
   - "Boundary Trigger" merged into Pressure to Clinch as higher levels

3. **Guard Recovery → Leg Reclaim**
   - Renamed to avoid technique-specific terminology
   - New name describes the actual goal: getting legs between you and opponent

4. **Defensive Submissions Added**
   - Wall Defensive Submission (deterrent from wall pin)
   - Ground Defensive Submission (attacks from bottom)
   - Rationale: Defensive options were incomplete without submission threats

5. **End States Explicit**
   - Added KO, TKO, Submission as explicit nodes in flowcharts
   - All pathways now visually lead to fight-ending outcomes

6. **Ground Finish Removed**
   - Split into TKO (via Ground Control) and Submission
   - Clearer representation of actual finishing paths

7. **Evasive Movement Added**
   - New striking defensive game for "getting on your bike"
   - Distinct from Close-Range Defense (avoiding vs. defending)

8. **Combined Game Roles Clarified**
   - Combined games have A/B roles, not necessarily mirrored
   - Documentation updated to reflect distinct objectives

---

### v0.3.0 — Full MMA Expression & Offensive Skill Isolation

**Date:** January 2026

**Major Changes:**

1. **Full MMA Expression Level**
   - Added Level 4 to all games
   - Highest level adds cross-domain threats

2. **Offensive Skill Isolation (Weapon Isolation)**
   - Added Lead Hand Offense, Rear Hand Offense
   - Added Lead Leg Offense, Rear Leg Offense
   - Constraint: Single weapon develops creativity with that tool

3. **System expanded to 31 games**
   - Ground games added (Access, Control, Escape, etc.)
   - Wall games completed (Grinding, Stand-Up Loop)
   - Sustained Offense added to striking

---

### v0.2.0 — Environment Organization

**Date:** January 2026

**Major Changes:**

1. **Environment → Domain → Focus hierarchy**
   - Reorganized entire system by environment first
   - Clearer navigation and game discovery

2. **Wall environment completed**
   - Wall Control, Wall Escape, Wall to Ground
   - Stand-Up Loop for cyclical dynamics

3. **Skill Isolation formalized**
   - Parry, Block, Slip, Evade as foundation
   - Defensive skill development before integration

---

### v0.1.0 — Initial System

**Date:** December 2025

**Foundation established:**

1. **Core striking games**
   - Touch and Don't Get Touched
   - Pressure to Clinch
   - Land the Target
   - Close-Range Defense

2. **Core concepts**
   - Confidence Rating
   - Three Zones of Attack
   - Defensive Solutions
   - TKO Pin

3. **Basic structure**
   - Game template established
   - Level progression system
   - MkDocs site structure

---

## Design Decision Log

### Why "Leg Reclaim" instead of "Guard Recovery"?

**Decision:** Rename Guard Recovery to Leg Reclaim

**Rationale:**
- "Guard" is technique-specific BJJ terminology
- The actual goal is positional: get legs between you and opponent
- "Leg Reclaim" describes the action without prescribing technique
- Maintains ecological principle: environment teaches, not terminology

---

### Why add Transition Zone?

**Decision:** Create a new environment between Striking and Wrestling

**Rationale:**
- Clinch Denial exists at the seam between domains
- Counter-Striking and Counter-Wrestling are defensive responses to pressure
- Visual clarity: shows the critical moment when striking becomes wrestling
- Games in this zone handle domain transitions specifically

---

### Why are Counter-Striking and Counter-Wrestling defensive?

**Decision:** Classify counters as defensive focus

**Rationale:**
- Counters respond to opponent initiation (reactive, not proactive)
- The goal is deterrence: making initiation dangerous
- You cannot counter without opponent action
- Offense that serves defensive purpose

---

### Why make end states explicit in flowcharts?

**Decision:** Add KO, TKO, Submission as visible nodes

**Rationale:**
- System should show where everything leads
- Reinforces Fight Philosophy: all paths lead to finish
- Visual reminder of the goal during training
- Prevents games from feeling disconnected from purpose

---

## Future Considerations

Items under consideration for future versions:

- [ ] Specialized counter-counter games (countering the counter)
- [ ] Dirty boxing as distinct wall striking phase
- [ ] Clinch-specific games (underhook battle, pummel games)
- [ ] Scramble-focused games (chaos transitions)
- [ ] Referee intervention scenarios (stand-ups, breaks)

---

!!! abstract "Contributing to This Log"
    When significant changes are made to the system, document them here with:

    1. What changed
    2. Why it changed
    3. What the old way was (if applicable)

    This maintains institutional knowledge as the system evolves.
