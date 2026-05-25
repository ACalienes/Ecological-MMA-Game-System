# Game Finder

<div class="emma-meta"><span>Reference</span><span>Find Your Game</span><span>By Goal · Time · Gear · Partner</span></div>

<p class="emma-hl"><b>Not sure which game to play?</b> Tell the finder what you want — it points you to the game that builds it. Start with the decision tree, then narrow by goal, time, equipment, or partner.</p>

<p class="emma-glabel">Quick Decision Tree</p>

```mermaid
flowchart TD
    START[What do you want to work on?] --> STRIKING[Striking]
    START --> WRESTLING[Wrestling/Grappling]
    START --> BOTH[Both Together]

    STRIKING --> S_FOCUS[Offense or Defense?]
    S_FOCUS --> S_DEF[Defense]
    S_FOCUS --> S_OFF[Offense]
    S_FOCUS --> S_BOTH[Both]

    S_DEF --> S_DEF_LEVEL[Skill level?]
    S_DEF_LEVEL --> S_DEF_BEG[Beginner]
    S_DEF_LEVEL --> S_DEF_INT[Intermediate+]

    S_DEF_BEG --> PARRY[Parry the Straight]
    S_DEF_BEG --> SLIP[Slip the Straight]
    S_DEF_BEG --> TIGHT[Tight Block]

    S_DEF_INT --> EVADE[Evade the Punch]
    S_DEF_INT --> CRD[Close-Range Defense]

    S_OFF --> LT[Land the Target]

    S_BOTH --> TOUCH[Touch Game]

    WRESTLING --> W_ENV[Environment?]
    W_ENV --> W_OPEN[Open Space]
    W_ENV --> W_WALL[Wall]

    W_OPEN --> W_OPEN_Q[What aspect?]
    W_OPEN_Q --> W_SPACE[Space Control]
    W_OPEN_Q --> W_TD[Takedowns]
    W_OPEN_Q --> W_FULL[Full Sequence]

    W_SPACE --> PC[Pressure to Clinch]
    W_TD --> OST[Open Space Takedown]
    W_FULL --> PTT[Pressure to Takedown]

    W_WALL --> W_WALL_Q[Offense or Defense?]
    W_WALL_Q --> W_WALL_OFF[Offense]
    W_WALL_Q --> W_WALL_DEF[Defense]
    W_WALL_Q --> W_WALL_BOTH[Both]

    W_WALL_OFF --> WCON[Wall Control]
    W_WALL_OFF --> WG[Wall to Ground]
    W_WALL_DEF --> WE[Wall Escape]
    W_WALL_BOTH --> SUL[Stand-Up Loop]

    BOTH --> PC2[Pressure to Clinch]

    style PARRY fill:#4CAF50,color:#fff
    style SLIP fill:#4CAF50,color:#fff
    style TIGHT fill:#4CAF50,color:#fff
    style EVADE fill:#4CAF50,color:#fff
    style CRD fill:#4CAF50,color:#fff
    style LT fill:#FF5722,color:#fff
    style TOUCH fill:#9C27B0,color:#fff
    style PC fill:#9C27B0,color:#fff
    style OST fill:#9C27B0,color:#fff
    style PTT fill:#FF5722,color:#fff
    style WCON fill:#FF5722,color:#fff
    style WG fill:#FF5722,color:#fff
    style WE fill:#4CAF50,color:#fff
    style SUL fill:#9C27B0,color:#fff
    style PC2 fill:#FF9800,color:#fff
```

<p class="emma-glabel">Find by Training Goal — Defense</p>

=== "Against Punches"

    <p class="emma-sub">Beginner — start here</p>

    <div class="emma-flow">
      <div class="emma-flow__row"><span class="emma-flow__from">Deflect punches with the hands</span><span class="emma-flow__arr">→</span><span class="emma-flow__to"><a href="../../games/parry-the-straight/">Parry the Straight</a></span></div>
      <div class="emma-flow__row"><span class="emma-flow__from">Evade with head movement</span><span class="emma-flow__arr">→</span><span class="emma-flow__to"><a href="../../games/slip-the-straight/">Slip the Straight</a></span></div>
      <div class="emma-flow__row"><span class="emma-flow__from">Absorb on a tight guard</span><span class="emma-flow__arr">→</span><span class="emma-flow__to"><a href="../../games/tight-block/">Tight Block</a></span></div>
    </div>

    <p class="emma-sub">Intermediate — build on foundations</p>

    <div class="emma-flow">
      <div class="emma-flow__row"><span class="emma-flow__from">Match evasion to punch type</span><span class="emma-flow__arr">→</span><span class="emma-flow__to"><a href="../../games/evade-the-punch/">Evade the Punch</a></span></div>
      <div class="emma-flow__row"><span class="emma-flow__from">Layer multiple solutions</span><span class="emma-flow__arr">→</span><span class="emma-flow__to"><a href="../../games/close-range-defense/">Close-Range Defense</a></span></div>
    </div>

=== "Against Takedowns"

    <div class="emma-flow">
      <div class="emma-flow__row"><span class="emma-flow__from">Avoid being cornered</span><span class="emma-flow__arr">→</span><span class="emma-flow__to"><a href="../../games/pressure-to-clinch/">Pressure to Clinch</a></span></div>
      <div class="emma-flow__row"><span class="emma-flow__from">Scrambles &amp; DNS defense</span><span class="emma-flow__arr">→</span><span class="emma-flow__to"><a href="../../games/open-space-takedown/">Open Space Takedown</a></span></div>
    </div>

=== "Against Wall Pins"

    <div class="emma-flow">
      <div class="emma-flow__row"><span class="emma-flow__from">Break pins, create space</span><span class="emma-flow__arr">→</span><span class="emma-flow__to"><a href="../../games/wall-escape/">Wall Escape</a></span></div>
      <div class="emma-flow__row"><span class="emma-flow__from">Get up when taken down near the wall</span><span class="emma-flow__arr">→</span><span class="emma-flow__to"><a href="../../games/standup-loop/">Stand-Up Loop</a></span></div>
    </div>

<p class="emma-glabel">Find by Training Goal — Offense</p>

=== "Striking"

    <div class="emma-flow">
      <div class="emma-flow__row"><span class="emma-flow__from">Read defense, set up, land targets</span><span class="emma-flow__arr">→</span><span class="emma-flow__to"><a href="../../games/land-the-target/">Land the Target</a></span></div>
    </div>

=== "Takedowns"

    <div class="emma-flow">
      <div class="emma-flow__row"><span class="emma-flow__from">Chain strikes into takedowns</span><span class="emma-flow__arr">→</span><span class="emma-flow__to"><a href="../../games/pressure-to-takedown/">Pressure to Takedown</a></span></div>
      <div class="emma-flow__row"><span class="emma-flow__from">Controlled takedowns from the clinch</span><span class="emma-flow__arr">→</span><span class="emma-flow__to"><a href="../../games/open-space-takedown/">Open Space Takedown</a></span></div>
    </div>

=== "Wall Control"

    <div class="emma-flow">
      <div class="emma-flow__row"><span class="emma-flow__from">Establish &amp; maintain pins</span><span class="emma-flow__arr">→</span><span class="emma-flow__to"><a href="../../games/wall-control/">Wall Control</a></span></div>
      <div class="emma-flow__row"><span class="emma-flow__from">Transition pin to ground control</span><span class="emma-flow__arr">→</span><span class="emma-flow__to"><a href="../../games/wall-to-ground/">Wall Pin to Ground</a></span></div>
    </div>

<p class="emma-glabel">Find by Training Goal — Fundamentals &amp; Integration</p>

=== "Fundamentals"

    <div class="emma-cards">
      <div class="emma-card emma-has-pop" tabindex="0"><div class="emma-card__i">🎯</div><div class="emma-card__t"><a href="../../games/touch-game/">Touch &amp; Don't Get Touched</a></div><p>Range, timing, composure under contact.<span class="emma-pop">The foundational engagement game — learn to manage distance before anything else.</span></p></div>
      <div class="emma-card emma-has-pop" tabindex="0"><div class="emma-card__i">🧭</div><div class="emma-card__t"><a href="../../games/pressure-to-clinch/">Pressure to Clinch</a></div><p>Space awareness, pressure vs. movement.<span class="emma-pop">Low contact, space-focused — teaches how to cut off the marked perimeter.</span></p></div>
      <div class="emma-card emma-has-pop" tabindex="0"><div class="emma-card__i">🥊</div><div class="emma-card__t"><a href="../../games/parry-the-straight/">Parry the Straight</a></div><p>Basic defensive mechanics.<span class="emma-pop">The simplest skill-isolation game — a clean first rep of defensive reading.</span></p></div>
    </div>

=== "Realistic MMA Integration"

    <div class="emma-cards">
      <div class="emma-card emma-has-pop" tabindex="0"><div class="emma-card__i">⛓️</div><div class="emma-card__t"><a href="../../games/pressure-to-takedown/">Pressure to Takedown</a></div><p>Full strike-to-takedown sequence.<span class="emma-pop">Chains striking and wrestling into one continuous problem.</span></p></div>
      <div class="emma-card emma-has-pop" tabindex="0"><div class="emma-card__i">🔀</div><div class="emma-card__t"><a href="../../games/pressure-to-clinch/">Pressure to Clinch</a> (L3+)</div><p>Recognizing when domains change.<span class="emma-pop">At higher levels, the moment striking becomes wrestling becomes the focus.</span></p></div>
      <div class="emma-card emma-has-pop" tabindex="0"><div class="emma-card__i">🥋</div><div class="emma-card__t">Any game at Full MMA</div><p>Adding cross-domain threats.<span class="emma-pop">The highest level of any game introduces threats from the other domain.</span></p></div>
    </div>

    <p style="font-size:.85rem;margin:.6rem 0 0;">See: <a href="../../concepts/full-mma-expression/">Full MMA Expression</a></p>

<p class="emma-glabel">Find by Time Available</p>

<div class="emma-cards">
  <div class="emma-card emma-has-pop" tabindex="0"><div class="emma-card__i">⏱️</div><div class="emma-card__t">Short — 15–20 min</div><p>Pick <b>one</b> game, work levels 1–3: a skill-isolation game (Parry, Slip, Block, Evade), Touch Game, or Pressure to Clinch.<span class="emma-pop">One focused problem, repeated cleanly, beats spreading thin across many games.</span></p></div>
  <div class="emma-card emma-has-pop" tabindex="0"><div class="emma-card__i">⏳</div><div class="emma-card__t">Medium — 30–45 min</div><p>Pair <b>two</b> related games and let one feed the other.<span class="emma-pop">Skill Isolation → Close-Range Defense · Touch Game → Pressure to Clinch · Wall Control → Wall Escape.</span></p></div>
  <div class="emma-card emma-has-pop" tabindex="0"><div class="emma-card__i">🕐</div><div class="emma-card__t">Full — 60+ min</div><p>Run a full <b>pathway</b> from isolation to integration.<span class="emma-pop">Skill Isolation → Close-Range Defense → Land the Target · Touch Game → Pressure to Clinch → Wall Control · Wall Control → Wall Escape → Wall to Ground.</span></p></div>
</div>

<p class="emma-glabel">Find by Equipment</p>

=== "No Equipment"

    <div class="emma-flow">
      <div class="emma-flow__row"><span class="emma-flow__from">Light contact only</span><span class="emma-flow__arr">→</span><span class="emma-flow__to"><a href="../../games/touch-game/">Touch &amp; Don't Get Touched</a></span></div>
      <div class="emma-flow__row"><span class="emma-flow__from">Use tape/cones for the marked perimeter</span><span class="emma-flow__arr">→</span><span class="emma-flow__to"><a href="../../games/pressure-to-clinch/">Pressure to Clinch</a></span></div>
    </div>

=== "Gloves Only"

    <div class="emma-chips">
      <span class="emma-chip"><span class="emma-chip__i">🥊</span> All Skill Isolation games</span>
      <span class="emma-chip"><span class="emma-chip__i">🛡️</span> <a href="../../games/close-range-defense/">Close-Range Defense</a></span>
      <span class="emma-chip"><span class="emma-chip__i">🎯</span> <a href="../../games/land-the-target/">Land the Target</a></span>
    </div>

=== "Wall + Mats"

    <div class="emma-chips">
      <span class="emma-chip emma-chip--info" tabindex="0"><span class="emma-chip__i">🧱</span> <a href="../../games/wall-control/">Wall Control</a><span class="emma-chip__detail">Padded wall preferred for repeated pin work.</span></span>
      <span class="emma-chip"><span class="emma-chip__i">↩️</span> <a href="../../games/wall-escape/">Wall Escape</a></span>
      <span class="emma-chip emma-chip--info" tabindex="0"><span class="emma-chip__i">⬇️</span> <a href="../../games/wall-to-ground/">Wall Pin to Ground</a><span class="emma-chip__detail">Mats essential — play ends on the ground.</span></span>
      <span class="emma-chip"><span class="emma-chip__i">🔁</span> <a href="../../games/standup-loop/">Stand-Up Loop</a></span>
    </div>

<p class="emma-glabel">Find by Partner Skill Level</p>

=== "Partner Less Experienced"

    <div class="emma-flow">
      <div class="emma-flow__row"><span class="emma-flow__from">Clear roles, adjustable intensity</span><span class="emma-flow__arr">→</span><span class="emma-flow__to">Skill Isolation games</span></div>
      <div class="emma-flow__row"><span class="emma-flow__from">Defender doesn't counter</span><span class="emma-flow__arr">→</span><span class="emma-flow__to"><a href="../../games/land-the-target/">Land the Target</a></span></div>
      <div class="emma-flow__row"><span class="emma-flow__from">Space-based, low contact</span><span class="emma-flow__arr">→</span><span class="emma-flow__to"><a href="../../games/pressure-to-clinch/">Pressure to Clinch</a></span></div>
    </div>

=== "Partner More Experienced"

    <div class="emma-cards">
      <div class="emma-card"><div class="emma-card__i">🎭</div><div class="emma-card__t">Any asymmetric game</div><p>Put the less experienced player in the learning role.</p></div>
      <div class="emma-card"><div class="emma-card__i">🪜</div><div class="emma-card__t">Use lower levels</div><p>The experienced partner moderates intensity.</p></div>
      <div class="emma-card"><div class="emma-card__i">🛡️</div><div class="emma-card__t">Focus on defensive games</div><p>Less experienced defends and learns to read.</p></div>
    </div>

=== "Equal Partners"

    <p class="emma-hl"><b>Any game works.</b> Progress through the levels together — both sides feed and learn in turn.</p>

<p class="emma-glabel">Still Not Sure?</p>

<div class="emma-flow">
  <div class="emma-flow__row"><span class="emma-flow__from">Brand new to the system</span><span class="emma-flow__arr">→</span><span class="emma-flow__to"><a href="../../games/touch-game/">Touch &amp; Don't Get Touched</a> — the foundational game</span></div>
  <div class="emma-flow__row"><span class="emma-flow__from">Want striking defense</span><span class="emma-flow__arr">→</span><span class="emma-flow__to"><a href="../../games/parry-the-straight/">Parry the Straight</a> — the simplest isolation game</span></div>
  <div class="emma-flow__row"><span class="emma-flow__from">Want wrestling</span><span class="emma-flow__arr">→</span><span class="emma-flow__to"><a href="../../games/pressure-to-clinch/">Pressure to Clinch</a> — low contact, space-focused</span></div>
  <div class="emma-flow__row"><span class="emma-flow__from">Want full MMA feel</span><span class="emma-flow__arr">→</span><span class="emma-flow__to"><a href="../../games/pressure-to-takedown/">Pressure to Takedown</a> — chains everything together</span></div>
</div>

??? abstract "System evolution notice"
    More games will be added as the system develops. This finder will be updated accordingly.
