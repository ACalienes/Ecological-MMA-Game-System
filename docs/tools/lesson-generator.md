# Lesson Plan Generator

A tool for generating randomized game-based training sessions.

---

## How It Works

Select your focus areas below, and the generator will suggest a 5-game session plan (approximately 60 minutes). Each session follows a logical progression from simpler to more complex games.

!!! warning "Supervision Required"
    All sessions should be conducted under qualified coach supervision. See [Disclaimer](../about/disclaimer.md) for important safety information.

---

## Quick Generator

<div id="lesson-generator">

### Step 1: Select Environment Focus

<div class="generator-options">
<label><input type="checkbox" id="env-skill" checked> Skill Isolation</label>
<label><input type="checkbox" id="env-striking" checked> Open Space Striking</label>
<label><input type="checkbox" id="env-transition" checked> Transition Zone</label>
<label><input type="checkbox" id="env-wrestling" checked> Open Space Wrestling</label>
<label><input type="checkbox" id="env-wall" checked> Wall</label>
<label><input type="checkbox" id="env-ground" checked> Ground</label>
</div>

### Step 2: Select Focus Type

<div class="generator-options">
<label><input type="checkbox" id="focus-defensive" checked> Defensive</label>
<label><input type="checkbox" id="focus-offensive" checked> Offensive</label>
<label><input type="checkbox" id="focus-combined" checked> Combined</label>
</div>

### Step 3: Select Difficulty Range

<div class="generator-options">
<label><input type="checkbox" id="diff-beginner" checked> Beginner</label>
<label><input type="checkbox" id="diff-intermediate" checked> Intermediate</label>
<label><input type="checkbox" id="diff-advanced"> Advanced</label>
</div>

<button onclick="generateLessonPlan()" class="generate-btn">Generate Session Plan</button>

<div id="generated-plan" class="plan-output"></div>

</div>

---

## Manual Session Templates

If you prefer structured templates, use these pre-designed sessions:

### Template A: Striking Defense Day

| Order | Game | Duration | Focus |
|-------|------|----------|-------|
| 1 | Parry the Straight | 8 min | Warm-up, hand defense |
| 2 | Slip the Straight | 8 min | Head movement foundation |
| 3 | Close-Range Defense | 12 min | Layered defense |
| 4 | Evasive Movement | 10 min | Footwork, ring generalship |
| 5 | Touch and Don't Get Touched | 15 min | Integration |

**Session Goal:** Build defensive striking skills from isolation to integration.

---

### Template B: Pressure Wrestling Day

| Order | Game | Duration | Focus |
|-------|------|----------|-------|
| 1 | Pressure to Clinch | 10 min | Space control warm-up |
| 2 | Pressure to Clinch (L3) | 10 min | Clinch to wall transition |
| 3 | Clinch Denial | 10 min | Defensive transition |
| 4 | Pressure to Takedown | 15 min | Offensive chain |
| 5 | Open Space Takedown | 15 min | Full wrestling exchange |

**Session Goal:** Develop pressure-based wrestling from striking range.

---

### Template C: Wall Work Day

| Order | Game | Duration | Focus |
|-------|------|----------|-------|
| 1 | Pressure to Wall | 10 min | Getting to the wall |
| 2 | Wall Control | 12 min | Establishing control |
| 3 | Wall Escape | 12 min | Defensive response |
| 4 | Wall Grinding | 12 min | Damage from wall |
| 5 | Stand-Up Loop | 14 min | Full wall exchange |

**Session Goal:** Complete wall game from entry through resolution.

---

### Template D: Ground Survival Day

| Order | Game | Duration | Focus |
|-------|------|----------|-------|
| 1 | Ground Escape | 12 min | Basic escape patterns |
| 2 | Leg Reclaim | 12 min | Guard recovery mechanics |
| 3 | Ground to Standing | 10 min | Technical standup |
| 4 | Ground Defensive Submission | 12 min | Bottom submissions |
| 5 | Positional Battle | 14 min | Full ground exchange |

**Session Goal:** Defensive ground skills for MMA survival.

---

### Template E: Offensive Ground Day

| Order | Game | Duration | Focus |
|-------|------|----------|-------|
| 1 | Open Space Takedown | 12 min | Entry to ground |
| 2 | Ground Access | 12 min | Passing, advancing |
| 3 | Ground Control | 12 min | Maintaining position |
| 4 | Positional Battle | 12 min | Live positional work |
| 5 | Ground Control → Finish | 12 min | Control to TKO/submission |

**Session Goal:** Offensive ground path from takedown to finish.

---

### Template F: Counter Fighting Day

| Order | Game | Duration | Focus |
|-------|------|----------|-------|
| 1 | Evade the Punch | 10 min | Defensive reading |
| 2 | Close-Range Defense | 10 min | Handling pressure |
| 3 | Counter-Striking | 12 min | Punishing initiation |
| 4 | Counter-Wrestling | 12 min | Wrestling as counter |
| 5 | Takedown Defense | 16 min | Full defensive wrestling |

**Session Goal:** Develop reactive, counter-based fighting style.

---

### Template G: Full MMA Integration

| Order | Game | Duration | Focus |
|-------|------|----------|-------|
| 1 | Touch and Don't Get Touched (L4) | 10 min | Striking with TD threat |
| 2 | Pressure to Clinch (L4) | 10 min | Space control, full MMA |
| 3 | Pressure to Clinch (L5) | 12 min | Full MMA Expression |
| 4 | Open Space Takedown (L4) | 14 min | Wrestling with strikes |
| 5 | Stand-Up Loop (L4) | 14 min | Complete MMA exchange |

**Session Goal:** Practice all games at Full MMA Expression level.

---

## Building Custom Sessions

### Session Structure Guidelines

A well-designed session follows this pattern:

```
1. Warm-up game (simpler, lower intensity)        — 8-10 min
2. Skill builder #1 (isolated skill)              — 10-12 min
3. Skill builder #2 (related skill or progression) — 10-12 min
4. Integration game (combine skills)              — 12-15 min
5. Live application (combined or free play)       — 15-20 min
```

### Pairing Principles

| If you're working on... | Pair with... |
|------------------------|--------------|
| Defensive striking | Offensive striking (for combined) |
| Wall offense | Wall escape (for understanding both sides) |
| Ground access | Ground escape (attacker needs defender) |
| Counter-striking | Land the Target (need initiator) |
| Takedown offense | Takedown defense (balance the session) |

### Progression Within Session

Games should progress:

1. **Simpler → Complex** — Start with fewer variables
2. **Slower → Faster** — Build up intensity
3. **Isolated → Integrated** — Single skill to combined
4. **Constrained → Open** — More rules to fewer rules

---

## Session Notes Template

Use this template to document your sessions:

```markdown
## Session: [Date]

### Focus: [Primary skill/environment]

### Games Played:
1. [Game] — [Duration] — Notes:
2. [Game] — [Duration] — Notes:
3. [Game] — [Duration] — Notes:
4. [Game] — [Duration] — Notes:
5. [Game] — [Duration] — Notes:

### Observations:
- What worked:
- What to adjust:
- Player standouts:
- Safety notes:

### Next Session:
- Follow up on:
- Progress to:
```

---

## Game Reference Quick List

### By Environment

=== "Skill Isolation"
    **Defensive:** Parry the Straight, Tight Block, Slip the Straight, Evade the Punch

    **Offensive:** Lead Hand Offense, Rear Hand Offense, Lead Leg Offense, Rear Leg Offense

=== "Open Space Striking"
    **Defensive:** Close-Range Defense, Evasive Movement

    **Offensive:** Land the Target, Sustained Offense

    **Combined:** Touch and Don't Get Touched, Pressure to Clinch

=== "Transition Zone"
    **Defensive:** Clinch Denial, Counter-Striking, Counter-Wrestling

    **Combined:** Pressure to Clinch (L3+)

=== "Open Space Wrestling"
    **Defensive:** Takedown Defense

    **Offensive:** Pressure to Takedown, Pressure to Wall

    **Combined:** Open Space Takedown

=== "Wall"
    **Defensive:** Wall Escape, Wall Defensive Submission

    **Offensive:** Wall Control, Wall to Ground, Wall Grinding

    **Combined:** Stand-Up Loop

=== "Ground"
    **Defensive:** Ground Escape, Leg Reclaim, Ground to Standing, Ground Defensive Submission

    **Offensive:** Ground Access, Ground Control

    **Combined:** Positional Battle

---

<script>
const games = {
    'skill-isolation': {
        'defensive': [
            {name: 'Parry the Straight', link: '../games/parry-the-straight.md', difficulty: 'beginner'},
            {name: 'Tight Block', link: '../games/tight-block.md', difficulty: 'beginner'},
            {name: 'Slip the Straight', link: '../games/slip-the-straight.md', difficulty: 'beginner'},
            {name: 'Evade the Punch', link: '../games/evade-the-punch.md', difficulty: 'intermediate'}
        ],
        'offensive': [
            {name: 'Lead Hand Offense', link: '../games/lead-hand-offense.md', difficulty: 'beginner'},
            {name: 'Rear Hand Offense', link: '../games/rear-hand-offense.md', difficulty: 'beginner'},
            {name: 'Lead Leg Offense', link: '../games/lead-leg-offense.md', difficulty: 'intermediate'},
            {name: 'Rear Leg Offense', link: '../games/rear-leg-offense.md', difficulty: 'intermediate'}
        ]
    },
    'striking': {
        'defensive': [
            {name: 'Close-Range Defense', link: '../games/close-range-defense.md', difficulty: 'intermediate'},
            {name: 'Evasive Movement', link: '../games/evasive-movement.md', difficulty: 'intermediate'}
        ],
        'offensive': [
            {name: 'Land the Target', link: '../games/land-the-target.md', difficulty: 'intermediate'},
            {name: 'Sustained Offense', link: '../games/sustained-offense.md', difficulty: 'intermediate'}
        ],
        'combined': [
            {name: 'Touch and Don\'t Get Touched', link: '../games/touch-game.md', difficulty: 'beginner'},
            {name: 'Pressure to Clinch', link: '../games/pressure-to-clinch.md', difficulty: 'beginner'}
        ]
    },
    'transition': {
        'defensive': [
            {name: 'Clinch Denial', link: '../games/clinch-denial.md', difficulty: 'intermediate'},
            {name: 'Counter-Striking', link: '../games/counter-striking.md', difficulty: 'intermediate'},
            {name: 'Counter-Wrestling', link: '../games/counter-wrestling.md', difficulty: 'intermediate'}
        ],
        'combined': [
            {name: 'Pressure to Clinch (L3+)', link: '../games/pressure-to-clinch.md', difficulty: 'intermediate'}
        ]
    },
    'wrestling': {
        'defensive': [
            {name: 'Takedown Defense', link: '../games/takedown-defense.md', difficulty: 'intermediate'}
        ],
        'offensive': [
            {name: 'Pressure to Takedown', link: '../games/pressure-to-takedown.md', difficulty: 'advanced'},
            {name: 'Pressure to Wall', link: '../games/pressure-to-wall.md', difficulty: 'advanced'}
        ],
        'combined': [
            {name: 'Open Space Takedown', link: '../games/open-space-takedown.md', difficulty: 'intermediate'}
        ]
    },
    'wall': {
        'defensive': [
            {name: 'Wall Escape', link: '../games/wall-escape.md', difficulty: 'intermediate'},
            {name: 'Wall Defensive Submission', link: '../games/wall-defensive-submission.md', difficulty: 'advanced'}
        ],
        'offensive': [
            {name: 'Wall Control', link: '../games/wall-control.md', difficulty: 'intermediate'},
            {name: 'Wall to Ground', link: '../games/wall-to-ground.md', difficulty: 'intermediate'},
            {name: 'Wall Grinding', link: '../games/wall-grinding.md', difficulty: 'intermediate'}
        ],
        'combined': [
            {name: 'Stand-Up Loop', link: '../games/standup-loop.md', difficulty: 'advanced'}
        ]
    },
    'ground': {
        'defensive': [
            {name: 'Ground Escape', link: '../games/ground-escape.md', difficulty: 'intermediate'},
            {name: 'Leg Reclaim', link: '../games/leg-reclaim.md', difficulty: 'intermediate'},
            {name: 'Ground to Standing', link: '../games/ground-to-standing.md', difficulty: 'intermediate'},
            {name: 'Ground Defensive Submission', link: '../games/ground-defensive-submission.md', difficulty: 'advanced'}
        ],
        'offensive': [
            {name: 'Ground Access', link: '../games/ground-access.md', difficulty: 'intermediate'},
            {name: 'Ground Control', link: '../games/ground-control.md', difficulty: 'intermediate'}
        ],
        'combined': [
            {name: 'Positional Battle', link: '../games/positional-battle.md', difficulty: 'intermediate'}
        ]
    }
};

function generateLessonPlan() {
    const envMap = {
        'env-skill': 'skill-isolation',
        'env-striking': 'striking',
        'env-transition': 'transition',
        'env-wrestling': 'wrestling',
        'env-wall': 'wall',
        'env-ground': 'ground'
    };

    const selectedEnvs = [];
    for (const [id, env] of Object.entries(envMap)) {
        if (document.getElementById(id)?.checked) {
            selectedEnvs.push(env);
        }
    }

    const selectedFocus = [];
    if (document.getElementById('focus-defensive')?.checked) selectedFocus.push('defensive');
    if (document.getElementById('focus-offensive')?.checked) selectedFocus.push('offensive');
    if (document.getElementById('focus-combined')?.checked) selectedFocus.push('combined');

    const selectedDiff = [];
    if (document.getElementById('diff-beginner')?.checked) selectedDiff.push('beginner');
    if (document.getElementById('diff-intermediate')?.checked) selectedDiff.push('intermediate');
    if (document.getElementById('diff-advanced')?.checked) selectedDiff.push('advanced');

    // Collect matching games
    let pool = [];
    for (const env of selectedEnvs) {
        for (const focus of selectedFocus) {
            if (games[env] && games[env][focus]) {
                for (const game of games[env][focus]) {
                    if (selectedDiff.includes(game.difficulty)) {
                        pool.push({...game, env, focus});
                    }
                }
            }
        }
    }

    // Shuffle and select 5
    pool = pool.sort(() => Math.random() - 0.5);
    const selected = pool.slice(0, 5);

    // Sort by difficulty for session flow
    const diffOrder = {'beginner': 0, 'intermediate': 1, 'advanced': 2};
    selected.sort((a, b) => diffOrder[a.difficulty] - diffOrder[b.difficulty]);

    // Generate output
    const durations = [10, 12, 12, 13, 13];
    let html = '<h3>Generated Session Plan</h3>';
    html += '<table><thead><tr><th>Order</th><th>Game</th><th>Duration</th><th>Focus</th></tr></thead><tbody>';

    if (selected.length === 0) {
        html += '<tr><td colspan="4">No games match your criteria. Try broader selections.</td></tr>';
    } else {
        selected.forEach((game, i) => {
            html += `<tr>
                <td>${i + 1}</td>
                <td><a href="${game.link}">${game.name}</a></td>
                <td>${durations[i]} min</td>
                <td>${game.focus} (${game.difficulty})</td>
            </tr>`;
        });
    }

    html += '</tbody></table>';
    html += '<p><strong>Total time:</strong> ~60 minutes</p>';
    html += '<p><em>Adjust durations based on group needs and available time.</em></p>';

    document.getElementById('generated-plan').innerHTML = html;
}
</script>

<style>
.generator-options {
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;
    margin: 1rem 0;
}
.generator-options label {
    display: flex;
    align-items: center;
    gap: 0.5rem;
}
.generate-btn {
    background: #FF5722;
    color: white;
    border: none;
    padding: 0.75rem 1.5rem;
    font-size: 1rem;
    cursor: pointer;
    border-radius: 4px;
    margin: 1rem 0;
}
.generate-btn:hover {
    background: #E64A19;
}
.plan-output {
    margin-top: 1rem;
    padding: 1rem;
    background: var(--md-code-bg-color);
    border-radius: 4px;
}
.plan-output table {
    width: 100%;
}
</style>

---

!!! abstract "Session Planning Philosophy"
    The best sessions balance challenge and success. Players should succeed enough to build confidence while being pushed enough to grow. Adjust games and levels based on what you observe during play.
