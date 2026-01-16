# Tags & Taxonomy

Structured metadata for organizing and filtering games.

---

## Environment Tags

| Tag | Description |
|-----|-------------|
| `space` | Open space, no structural constraints |
| `wall` | Wall/cage as dominant constraint |
| `ground` | Ground as dominant constraint |
| `transition` | Moving between environments |

---

## Decision State Tags

| Tag | Description |
|-----|-------------|
| `access` | Engagement and connection phase |
| `stabilize` | Control establishment phase |
| `exploit` | Damage or submission phase |
| `counter` | Defensive response phase |

---

## Control State Tags

| Tag | Description |
|-----|-------------|
| `pin` | Standard control position |
| `tko_pin` | Strike-ready dominant control |
| `scramble` | Contested transition |
| `disengagement` | Separation to neutral |

---

## Level Tags

| Tag | Description |
|-----|-------------|
| `level_1` | Foundation — core problem only |
| `level_2` | Intermediate — added resistance or complexity |
| `level_3` | Advanced — full expression with counters |

---

## Game Tag Matrix

| Game | Environment | Stage | Control |
|------|-------------|-------|---------|
| Touch Game | `space` | `access` | — |
| Winning the Circle | `space` | `access` | — |
| Boundary Trigger | `space`, `transition` | `access` | — |
| Wall Control | `wall` | `stabilize` | `pin` |
| Wall Escape | `wall` | `counter` | `pin`, `disengagement` |
| Wall → Ground | `wall`, `ground`, `transition` | `stabilize`, `exploit` | `pin`, `tko_pin`, `scramble` |
| Stand-Up Loop | `wall`, `ground` | `counter`, `stabilize` | `pin`, `tko_pin`, `scramble` |
| Open Takedown | `space` | `stabilize`, `exploit` | `scramble` |

---

## Usage

These tags can be used to:

1. **Filter games** by environment or decision state
2. **Plan training sessions** focused on specific skills
3. **Track athlete development** across different domains
4. **Identify gaps** in the curriculum

---

## Future Tags (Planned)

| Tag | Description |
|-----|-------------|
| `submission` | Submission-focused games |
| `gnp` | Ground and pound emphasis |
| `defensive` | Primarily defensive focus |
| `offensive` | Primarily offensive focus |
