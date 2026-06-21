# Lesson Plan Generator

<div class="emma-meta"><span>Coaching Tool</span><span>~60 Minute Sessions</span><span>Simple → Complex</span></div>

<p class="emma-hl">Select your focus areas and the generator suggests a <b>5-game session plan</b> (~60 minutes). Each plan follows a logical progression from simpler to more complex games.</p>

!!! warning "Supervision Required"
    All sessions should be conducted under qualified coach supervision. See the [Disclaimer](../about/disclaimer.md) for important safety information.

<p class="emma-glabel">Quick Generator</p>

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

<p class="emma-glabel">Manual Session Templates</p>

<p>If you prefer structured sessions, use these pre-designed days. Each runs roughly 60 minutes, progressing from a warm-up game to live application.</p>

??? note "Template A · Striking Defense Day"

    <p class="emma-hl"><b>Goal:</b> build defensive striking skills from isolation to integration.</p>

    <div class="emma-stepper">
      <div class="emma-step"><span class="emma-step__n">1</span><b>Parry the Straight</b>8 min · warm-up, hand defense</div>
      <div class="emma-step"><span class="emma-step__n">2</span><b>Slip the Straight</b>8 min · head movement foundation</div>
      <div class="emma-step"><span class="emma-step__n">3</span><b>Close-Range Defense</b>12 min · layered defense</div>
      <div class="emma-step"><span class="emma-step__n">4</span><b>Evasive Movement</b>10 min · footwork, ring generalship</div>
      <div class="emma-step"><span class="emma-step__n">5</span><b>Touch and Don't Get Touched</b>15 min · integration</div>
    </div>

??? note "Template B · Pressure Wrestling Day"

    <p class="emma-hl"><b>Goal:</b> develop pressure-based wrestling from striking range.</p>

    <div class="emma-stepper">
      <div class="emma-step"><span class="emma-step__n">1</span><b>Pressure to Clinch</b>10 min · space control warm-up</div>
      <div class="emma-step"><span class="emma-step__n">2</span><b>Pressure to Clinch (L3)</b>10 min · clinch to wall transition</div>
      <div class="emma-step"><span class="emma-step__n">3</span><b>Clinch Denial</b>10 min · defensive transition</div>
      <div class="emma-step"><span class="emma-step__n">4</span><b>Pressure to Takedown</b>15 min · offensive chain</div>
      <div class="emma-step"><span class="emma-step__n">5</span><b>Open Space Takedown</b>15 min · full wrestling exchange</div>
    </div>

??? note "Template C · Wall Work Day"

    <p class="emma-hl"><b>Goal:</b> the complete wall game from entry through resolution.</p>

    <div class="emma-stepper">
      <div class="emma-step"><span class="emma-step__n">1</span><b>Pressure to Wall</b>10 min · getting to the wall</div>
      <div class="emma-step"><span class="emma-step__n">2</span><b>Wall Control</b>12 min · establishing control</div>
      <div class="emma-step"><span class="emma-step__n">3</span><b>Wall Escape</b>12 min · defensive response</div>
      <div class="emma-step"><span class="emma-step__n">4</span><b>Wall Grinding</b>12 min · damage from the wall</div>
      <div class="emma-step"><span class="emma-step__n">5</span><b>Stand-Up Loop</b>14 min · full wall exchange</div>
    </div>

??? note "Template D · Ground Survival Day"

    <p class="emma-hl"><b>Goal:</b> defensive ground skills for MMA survival.</p>

    <div class="emma-stepper">
      <div class="emma-step"><span class="emma-step__n">1</span><b>Ground Escape</b>12 min · basic escape patterns</div>
      <div class="emma-step"><span class="emma-step__n">2</span><b>Leg Reclaim</b>12 min · guard recovery mechanics</div>
      <div class="emma-step"><span class="emma-step__n">3</span><b>Ground to Standing</b>10 min · technical standup</div>
      <div class="emma-step"><span class="emma-step__n">4</span><b>Ground Defensive Submission</b>12 min · bottom submissions</div>
      <div class="emma-step"><span class="emma-step__n">5</span><b>Positional Sparring</b>14 min · full ground exchange</div>
    </div>

??? note "Template E · Offensive Ground Day"

    <p class="emma-hl"><b>Goal:</b> the offensive ground path from takedown to finish.</p>

    <div class="emma-stepper">
      <div class="emma-step"><span class="emma-step__n">1</span><b>Open Space Takedown</b>12 min · entry to ground</div>
      <div class="emma-step"><span class="emma-step__n">2</span><b>Ground Access</b>12 min · passing, advancing</div>
      <div class="emma-step"><span class="emma-step__n">3</span><b>Ground Control</b>12 min · maintaining position</div>
      <div class="emma-step"><span class="emma-step__n">4</span><b>Positional Sparring</b>12 min · live positional work</div>
      <div class="emma-step"><span class="emma-step__n">5</span><b>Ground Control → Finish</b>12 min · control to TKO / submission</div>
    </div>

??? note "Template F · Counter Fighting Day"

    <p class="emma-hl"><b>Goal:</b> develop a reactive, counter-based fighting style.</p>

    <div class="emma-stepper">
      <div class="emma-step"><span class="emma-step__n">1</span><b>Evade the Punch</b>10 min · defensive reading</div>
      <div class="emma-step"><span class="emma-step__n">2</span><b>Close-Range Defense</b>10 min · handling pressure</div>
      <div class="emma-step"><span class="emma-step__n">3</span><b>Counter-Striking</b>12 min · punishing initiation</div>
      <div class="emma-step"><span class="emma-step__n">4</span><b>Counter-Wrestling</b>12 min · wrestling as counter</div>
      <div class="emma-step"><span class="emma-step__n">5</span><b>Takedown Defense</b>16 min · full defensive wrestling</div>
    </div>

??? note "Template G · Full MMA Integration"

    <p class="emma-hl"><b>Goal:</b> practice all games at Full MMA Expression level.</p>

    <div class="emma-stepper">
      <div class="emma-step"><span class="emma-step__n">1</span><b>Touch and Don't Get Touched (L4)</b>10 min · striking with TD threat</div>
      <div class="emma-step"><span class="emma-step__n">2</span><b>Pressure to Clinch (L4)</b>10 min · space control, full MMA</div>
      <div class="emma-step"><span class="emma-step__n">3</span><b>Pressure to Clinch (L5)</b>12 min · Full MMA Expression</div>
      <div class="emma-step"><span class="emma-step__n">4</span><b>Open Space Takedown (L4)</b>14 min · wrestling with strikes</div>
      <div class="emma-step"><span class="emma-step__n">5</span><b>Stand-Up Loop (L4)</b>14 min · complete MMA exchange</div>
    </div>

<p class="emma-glabel">Building Custom Sessions</p>

<p class="emma-sub">The five-beat session shape</p>

<div class="emma-stepper">
  <div class="emma-step"><span class="emma-step__n">1</span><b>Warm-up game</b>8–10 min · simpler, lower intensity</div>
  <div class="emma-step"><span class="emma-step__n">2</span><b>Skill builder #1</b>10–12 min · isolated skill</div>
  <div class="emma-step"><span class="emma-step__n">3</span><b>Skill builder #2</b>10–12 min · related skill or progression</div>
  <div class="emma-step"><span class="emma-step__n">4</span><b>Integration game</b>12–15 min · combine skills</div>
  <div class="emma-step"><span class="emma-step__n">5</span><b>Live application</b>15–20 min · combined or free play</div>
</div>

<p class="emma-sub">Pairing principles</p>

<div class="emma-flow">
  <div class="emma-flow__row"><span class="emma-flow__from">Defensive striking</span><span class="emma-flow__arr">→</span><span class="emma-flow__to">Offensive striking (for combined)</span></div>
  <div class="emma-flow__row"><span class="emma-flow__from">Wall offense</span><span class="emma-flow__arr">→</span><span class="emma-flow__to">Wall escape (understand both sides)</span></div>
  <div class="emma-flow__row"><span class="emma-flow__from">Ground access</span><span class="emma-flow__arr">→</span><span class="emma-flow__to">Ground escape (attacker needs a defender)</span></div>
  <div class="emma-flow__row"><span class="emma-flow__from">Counter-striking</span><span class="emma-flow__arr">→</span><span class="emma-flow__to">Land the Target (need an initiator)</span></div>
  <div class="emma-flow__row"><span class="emma-flow__from">Takedown offense</span><span class="emma-flow__arr">→</span><span class="emma-flow__to">Takedown defense (balance the session)</span></div>
</div>

<p class="emma-sub">Progression within a session</p>

<div class="emma-chips">
  <span class="emma-chip emma-chip--info" tabindex="0"><span class="emma-chip__i">🧩</span> Simpler → Complex<span class="emma-chip__detail">Start with fewer variables, add them as athletes succeed.</span></span>
  <span class="emma-chip emma-chip--info" tabindex="0"><span class="emma-chip__i">⏩</span> Slower → Faster<span class="emma-chip__detail">Build up intensity across the session.</span></span>
  <span class="emma-chip emma-chip--info" tabindex="0"><span class="emma-chip__i">🔗</span> Isolated → Integrated<span class="emma-chip__detail">Move from single skills to combined expression.</span></span>
  <span class="emma-chip emma-chip--info" tabindex="0"><span class="emma-chip__i">🔓</span> Constrained → Open<span class="emma-chip__detail">More rules early, fewer rules as the skill holds.</span></span>
</div>

<p class="emma-glabel">Session Notes Template</p>

<p>Document each session so the next one builds on it.</p>

```markdown
## Session: [Date]

### Focus: [Primary skill/environment]

### Games Played:
1. [Game], [Duration], Notes:
2. [Game], [Duration], Notes:
3. [Game], [Duration], Notes:
4. [Game], [Duration], Notes:
5. [Game], [Duration], Notes:

### Observations:
- What worked:
- What to adjust:
- Player standouts:
- Safety notes:

### Next Session:
- Follow up on:
- Progress to:
```

<p class="emma-glabel">Game Reference Quick List</p>

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

    **Combined:** Positional Sparring

<script>
const games = {
    'skill-isolation': {
        'defensive': [
            {name: 'Parry the Straight', link: '../../games/parry-the-straight/', difficulty: 'beginner'},
            {name: 'Tight Block', link: '../../games/tight-block/', difficulty: 'beginner'},
            {name: 'Slip the Straight', link: '../../games/slip-the-straight/', difficulty: 'beginner'},
            {name: 'Evade the Punch', link: '../../games/evade-the-punch/', difficulty: 'intermediate'}
        ],
        'offensive': [
            {name: 'Lead Hand Offense', link: '../../games/lead-hand-offense/', difficulty: 'beginner'},
            {name: 'Rear Hand Offense', link: '../../games/rear-hand-offense/', difficulty: 'beginner'},
            {name: 'Lead Leg Offense', link: '../../games/lead-leg-offense/', difficulty: 'intermediate'},
            {name: 'Rear Leg Offense', link: '../../games/rear-leg-offense/', difficulty: 'intermediate'}
        ]
    },
    'striking': {
        'defensive': [
            {name: 'Close-Range Defense', link: '../../games/close-range-defense/', difficulty: 'intermediate'},
            {name: 'Evasive Movement', link: '../../games/evasive-movement/', difficulty: 'intermediate'}
        ],
        'offensive': [
            {name: 'Land the Target', link: '../../games/land-the-target/', difficulty: 'intermediate'},
            {name: 'Sustained Offense', link: '../../games/sustained-offense/', difficulty: 'intermediate'}
        ],
        'combined': [
            {name: 'Touch and Don\'t Get Touched', link: '../../games/touch-game/', difficulty: 'beginner'},
            {name: 'Pressure to Clinch', link: '../../games/pressure-to-clinch/', difficulty: 'beginner'}
        ]
    },
    'transition': {
        'defensive': [
            {name: 'Clinch Denial', link: '../../games/clinch-denial/', difficulty: 'intermediate'},
            {name: 'Counter-Striking', link: '../../games/counter-striking/', difficulty: 'intermediate'},
            {name: 'Counter-Wrestling', link: '../../games/counter-wrestling/', difficulty: 'intermediate'}
        ],
        'combined': [
            {name: 'Pressure to Clinch (L3+)', link: '../../games/pressure-to-clinch/', difficulty: 'intermediate'}
        ]
    },
    'wrestling': {
        'defensive': [
            {name: 'Takedown Defense', link: '../../games/takedown-defense/', difficulty: 'intermediate'}
        ],
        'offensive': [
            {name: 'Pressure to Takedown', link: '../../games/pressure-to-takedown/', difficulty: 'advanced'},
            {name: 'Pressure to Wall', link: '../../games/pressure-to-wall/', difficulty: 'advanced'}
        ],
        'combined': [
            {name: 'Open Space Takedown', link: '../../games/open-space-takedown/', difficulty: 'intermediate'}
        ]
    },
    'wall': {
        'defensive': [
            {name: 'Wall Escape', link: '../../games/wall-escape/', difficulty: 'intermediate'},
            {name: 'Wall Defensive Submission', link: '../../games/wall-defensive-submission/', difficulty: 'advanced'}
        ],
        'offensive': [
            {name: 'Wall Control', link: '../../games/wall-control/', difficulty: 'intermediate'},
            {name: 'Wall to Ground', link: '../../games/wall-to-ground/', difficulty: 'intermediate'},
            {name: 'Wall Grinding', link: '../../games/wall-grinding/', difficulty: 'intermediate'}
        ],
        'combined': [
            {name: 'Stand-Up Loop', link: '../../games/standup-loop/', difficulty: 'advanced'}
        ]
    },
    'ground': {
        'defensive': [
            {name: 'Ground Escape', link: '../../games/ground-escape/', difficulty: 'intermediate'},
            {name: 'Leg Reclaim', link: '../../games/leg-reclaim/', difficulty: 'intermediate'},
            {name: 'Ground to Standing', link: '../../games/ground-to-standing/', difficulty: 'intermediate'},
            {name: 'Ground Defensive Submission', link: '../../games/ground-defensive-submission/', difficulty: 'advanced'}
        ],
        'offensive': [
            {name: 'Ground Access', link: '../../games/ground-access/', difficulty: 'intermediate'},
            {name: 'Ground Control', link: '../../games/ground-control/', difficulty: 'intermediate'}
        ],
        'combined': [
            {name: 'Positional Sparring', link: '../../games/positional-battle/', difficulty: 'intermediate'}
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

??? abstract "Session planning philosophy"
    The best sessions balance challenge and success. Players should succeed enough to build confidence while being pushed enough to grow. Adjust games and levels based on what you observe during play. For the reasoning behind game selection, see the [Session Planning Guide](session-planning.md).
