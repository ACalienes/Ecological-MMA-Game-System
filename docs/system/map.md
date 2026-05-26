# System Map

<div class="emma-meta"><span>Visual Navigation</span><span>All 34 Games</span><span>Environment → Finish</span></div>

<p class="emma-hl"><b>The fight is cyclical.</b> You move between environments until someone finishes, and every path has a reverse. This map routes you from foundation skills through every game to a finish.</p>

<p class="emma-glabel">Fight States &amp; Transitions</p>

```mermaid
flowchart LR
    OS[Open Space] -->|Clinch| W[Wall]
    OS -->|Takedown| G[Ground]
    W -->|Takedown| G
    W -.->|Escape| OS
    G -.->|Stand Up| OS

    OS --> KO((KO))
    OS --> TKO((TKO))
    OS --> SUB((SUB))
    W --> KO
    W --> TKO
    W --> SUB
    G --> TKO
    G --> SUB

    style OS fill:#2196F3, color:#fff
    style W fill:#FF9800, color:#fff
    style G fill:#795548, color:#fff
    style KO fill:#D32F2F, color:#fff
    style TKO fill:#FF5722, color:#fff
    style SUB fill:#E91E63, color:#fff
```

<p class="emma-glabel">How to Read the Map</p>

<div class="emma-flow">
  <div class="emma-flow__row"><span class="emma-flow__from">Foundation</span><span class="emma-flow__arr">→</span><span class="emma-flow__to">Open Space</span></div>
  <div class="emma-flow__row"><span class="emma-flow__from">Open Space</span><span class="emma-flow__arr">→</span><span class="emma-flow__to">Transitions (to Wall / Ground)</span></div>
  <div class="emma-flow__row"><span class="emma-flow__from">Transitions</span><span class="emma-flow__arr">→</span><span class="emma-flow__to">Positions (Wall / Ground)</span></div>
  <div class="emma-flow__row"><span class="emma-flow__from">Positions</span><span class="emma-flow__arr">→</span><span class="emma-flow__to">Finish (KO · TKO · SUB)</span></div>
</div>

<div class="emma-chips">
  <span class="emma-chip emma-chip--info" tabindex="0"><span class="emma-chip__i">🟢</span> Defensive<span class="emma-chip__detail">Survive, escape, prevent transitions. The B Side is developing skills.</span></span>
  <span class="emma-chip emma-chip--info" tabindex="0"><span class="emma-chip__i">🟠</span> Offensive<span class="emma-chip__detail">Attack, control, initiate transitions. The A Side is developing skills.</span></span>
  <span class="emma-chip emma-chip--info" tabindex="0"><span class="emma-chip__i">🟣</span> Combined<span class="emma-chip__detail">Both roles active, scrambles and mixed situations where both sides have live objectives.</span></span>
</div>

<p class="emma-glabel">The Cycle in Four Beats</p>

<div class="emma-cards">
  <div class="emma-card"><div class="emma-card__i">1️⃣</div><div class="emma-card__t">Start standing</div><p>Every fight starts in <b>Open Space</b>, standing at distance.</p></div>
  <div class="emma-card"><div class="emma-card__i">2️⃣</div><div class="emma-card__t">Transition</div><p>From Open Space, move to <b>Wall</b> (clinch) or <b>Ground</b> (grappling).</p></div>
  <div class="emma-card"><div class="emma-card__i">3️⃣</div><div class="emma-card__t">Escape back</div><p>From Wall or Ground, you can <b>escape</b> to Open Space.</p></div>
  <div class="emma-card"><div class="emma-card__i">4️⃣</div><div class="emma-card__t">Finish</div><p>Any position can lead to a <b>finish</b>, KO, TKO, or Submission.</p></div>
</div>

<p class="emma-glabel">The Three End States</p>

<div class="emma-cards">
  <div class="emma-card emma-has-pop" tabindex="0"><div class="emma-card__i">💥</div><div class="emma-card__t">Knockout (KO)</div><p>A single strike ends the fight.<span class="emma-pop">Primary path: a clean strike landed with power and precision.</span></p></div>
  <div class="emma-card emma-has-pop" tabindex="0"><div class="emma-card__i">🥊</div><div class="emma-card__t">TKO</div><p>Accumulated damage overwhelms the defense.<span class="emma-pop">Primary paths: sustained offense, wall grinding, ground control.</span></p></div>
  <div class="emma-card emma-has-pop" tabindex="0"><div class="emma-card__i">🔒</div><div class="emma-card__t">Submission</div><p>A choke or joint lock forces the tap.<span class="emma-pop">Primary paths: ground control, defensive submissions.</span></p></div>
</div>

---

<p class="emma-glabel">🏗️ Foundation: Skill Isolation</p>

Skills developed in isolation before integration into live fighting.

<p class="emma-sub">Defensive 🟢</p>

<div class="emma-cards">
  <a class="emma-card" href="../../games/parry-the-straight/"><div class="emma-card__i">🤚</div><div class="emma-card__t">Parry the Straight</div><p>Hand deflection timing.</p></a>
  <a class="emma-card" href="../../games/tight-block/"><div class="emma-card__i">🛡️</div><div class="emma-card__t">Tight Block</div><p>Guard absorption.</p></a>
  <a class="emma-card" href="../../games/slip-the-straight/"><div class="emma-card__i">↪️</div><div class="emma-card__t">Slip the Straight</div><p>Head movement.</p></a>
  <a class="emma-card" href="../../games/evade-the-punch/"><div class="emma-card__i">💨</div><div class="emma-card__t">Evade the Punch</div><p>Full evasion vocabulary.</p></a>
</div>

<p class="emma-sub">Offensive 🟠</p>

<div class="emma-cards">
  <a class="emma-card" href="../../games/lead-hand-offense/"><div class="emma-card__i">👊</div><div class="emma-card__t">Lead Hand Offense</div><p>Jab mechanics and setups.</p></a>
  <a class="emma-card" href="../../games/rear-hand-offense/"><div class="emma-card__i">🥊</div><div class="emma-card__t">Rear Hand Offense</div><p>Cross / power hand timing.</p></a>
  <a class="emma-card" href="../../games/lead-leg-offense/"><div class="emma-card__i">🦵</div><div class="emma-card__t">Lead Leg Offense</div><p>Lead kick variety.</p></a>
  <a class="emma-card" href="../../games/rear-leg-offense/"><div class="emma-card__i">🦿</div><div class="emma-card__t">Rear Leg Offense</div><p>Power kick delivery.</p></a>
</div>

---

<p class="emma-glabel">🥊 Open Space</p>

Standing at distance. This is where every fight starts.

<p class="emma-sub">Striking Defense 🟢</p>

<div class="emma-cards">
  <a class="emma-card" href="../../games/close-range-defense/"><div class="emma-card__i">🛡️</div><div class="emma-card__t">Close-Range Defense</div><p>Layered defensive response.</p></a>
  <a class="emma-card" href="../../games/evasive-movement/"><div class="emma-card__i">💨</div><div class="emma-card__t">Evasive Movement</div><p>Creating distance under fire.</p></a>
  <a class="emma-card" href="../../games/counter-striking/"><div class="emma-card__i">⚡</div><div class="emma-card__t">Counter-Striking</div><p>Punishing initiation.</p></a>
</div>

<p class="emma-sub">Striking Offense 🟠</p>

<div class="emma-cards">
  <a class="emma-card" href="../../games/land-the-target/"><div class="emma-card__i">🎯</div><div class="emma-card__t">Land the Target</div><p>Reading defense, landing clean.</p></a>
  <a class="emma-card" href="../../games/sustained-offense/"><div class="emma-card__i">🔥</div><div class="emma-card__t">Sustained Offense</div><p>Maintaining pressure to finish.</p></a>
</div>

<p class="emma-sub">Control 🟣</p>

<div class="emma-cards">
  <a class="emma-card" href="../../games/touch-game/"><div class="emma-card__i">✋</div><div class="emma-card__t">Touch and Don't Get Touched</div><p>Range awareness and timing.</p></a>
</div>

---

<p class="emma-glabel">🧱 Open Space → Wall</p>

Transitions from standing at distance to the cage / clinch.

<p class="emma-sub">Prevent 🟢</p>

<div class="emma-cards">
  <a class="emma-card" href="../../games/clinch-denial/"><div class="emma-card__i">🚫</div><div class="emma-card__t">Clinch Denial</div><p>Breaking clinch attempts.</p></a>
</div>

<p class="emma-sub">Initiate 🟠</p>

<div class="emma-cards">
  <a class="emma-card" href="../../games/pressure-to-clinch/"><div class="emma-card__i">➡️</div><div class="emma-card__t">Pressure to Clinch</div><p>Space control and clinch entry.</p></a>
  <a class="emma-card" href="../../games/pressure-to-wall/"><div class="emma-card__i">🧱</div><div class="emma-card__t">Pressure to Wall</div><p>Driving opponent to the cage.</p></a>
</div>

---

<p class="emma-glabel">🤼 Open Space → Ground</p>

Transitions from standing to the ground (takedowns / knockdowns).

<p class="emma-sub">Prevent 🟢</p>

<div class="emma-cards">
  <a class="emma-card" href="../../games/takedown-defense/"><div class="emma-card__i">🛑</div><div class="emma-card__t">Takedown Defense</div><p>Sprawl, underhooks, recovery.</p></a>
  <a class="emma-card" href="../../games/counter-wrestling/"><div class="emma-card__i">⚡</div><div class="emma-card__t">Counter-Wrestling</div><p>Punishing shot attempts.</p></a>
</div>

<p class="emma-sub">Initiate 🟠</p>

<div class="emma-cards">
  <a class="emma-card" href="../../games/pressure-to-takedown/"><div class="emma-card__i">⬇️</div><div class="emma-card__t">Pressure to Takedown</div><p>Chaining strikes to takedown.</p></a>
  <a class="emma-card" href="../../games/open-space-takedown/"><div class="emma-card__i">🤸</div><div class="emma-card__t">Open Space Takedown</div><p>Takedowns without the wall.</p></a>
</div>

---

<p class="emma-glabel">🧱 Wall</p>

Standing against the cage. You arrive via clinch or pressure.

<p class="emma-sub">Escape &amp; Defend 🟢</p>

<div class="emma-cards">
  <a class="emma-card" href="../../games/wall-escape/"><div class="emma-card__i">🚪</div><div class="emma-card__t">Wall Escape</div><p>Breaking the pin, returning to open space.</p></a>
  <a class="emma-card" href="../../games/wall-defensive-submission/"><div class="emma-card__i">🔒</div><div class="emma-card__t">Wall Defensive Submission</div><p>Submissions to deter / punish control.</p></a>
</div>

<p class="emma-sub">Control &amp; Grind 🟠</p>

<div class="emma-cards">
  <a class="emma-card" href="../../games/wall-control/"><div class="emma-card__i">📌</div><div class="emma-card__t">Wall Control</div><p>Maintaining the pin.</p></a>
  <a class="emma-card" href="../../games/wall-grinding/"><div class="emma-card__i">⚙️</div><div class="emma-card__t">Wall Grinding</div><p>Accumulating damage toward TKO.</p></a>
</div>

<p class="emma-sub">Wall → Ground 🟠</p>

<div class="emma-cards">
  <a class="emma-card" href="../../games/wall-to-ground/"><div class="emma-card__i">⬇️</div><div class="emma-card__t">Wall to Ground</div><p>Taking the fight to ground from the wall.</p></a>
</div>

<p class="emma-sub">Combined 🟣</p>

<div class="emma-cards">
  <a class="emma-card" href="../../games/standup-loop/"><div class="emma-card__i">🔁</div><div class="emma-card__t">Stand-Up Loop</div><p>Managing repeated stand-up / re-pin cycles.</p></a>
</div>

---

<p class="emma-glabel">🤼 Ground</p>

Horizontal grappling. You arrive via takedown or knockdown.

<p class="emma-sub">Escape &amp; Defend 🟢</p>

<div class="emma-cards">
  <a class="emma-card" href="../../games/ground-escape/"><div class="emma-card__i">🚪</div><div class="emma-card__t">Ground Escape</div><p>Basic escapes from bottom.</p></a>
  <a class="emma-card" href="../../games/leg-reclaim/"><div class="emma-card__i">🦵</div><div class="emma-card__t">Leg Reclaim</div><p>Guard recovery.</p></a>
  <a class="emma-card" href="../../games/ground-to-standing/"><div class="emma-card__i">🧍</div><div class="emma-card__t">Ground to Standing</div><p>Technical stand-up.</p></a>
  <a class="emma-card" href="../../games/ground-defensive-submission/"><div class="emma-card__i">🔒</div><div class="emma-card__t">Ground Defensive Submission</div><p>Submissions from bottom.</p></a>
</div>

<p class="emma-sub">Control &amp; Finish 🟠</p>

<div class="emma-cards">
  <a class="emma-card" href="../../games/ground-access/"><div class="emma-card__i">🗝️</div><div class="emma-card__t">Ground Access</div><p>Passing guard.</p></a>
  <a class="emma-card" href="../../games/ground-control/"><div class="emma-card__i">📌</div><div class="emma-card__t">Ground Control</div><p>Maintaining dominant position.</p></a>
</div>

<p class="emma-sub">Combined 🟣</p>

<div class="emma-cards">
  <a class="emma-card" href="../../games/positional-battle/"><div class="emma-card__i">⚔️</div><div class="emma-card__t">Positional Battle</div><p>Winning scrambles and exchanges.</p></a>
</div>

---

<p class="emma-glabel">The Complete Cycle: In &amp; Out</p>

Every position has a way IN and a way OUT.

<div class="emma-flow">
  <div class="emma-flow__row"><span class="emma-flow__from">Open Space → Wall</span><span class="emma-flow__arr">⇄</span><span class="emma-flow__to">In: Pressure to Clinch / Wall · Out: Wall Escape</span></div>
  <div class="emma-flow__row"><span class="emma-flow__from">Open Space → Ground</span><span class="emma-flow__arr">⇄</span><span class="emma-flow__to">In: Pressure to Takedown / Open Space Takedown / Knockdown · Out: Ground to Standing</span></div>
  <div class="emma-flow__row"><span class="emma-flow__from">Wall → Ground</span><span class="emma-flow__arr">⇄</span><span class="emma-flow__to">In: Wall to Ground · Out: Stand-Up Loop (scramble)</span></div>
  <div class="emma-flow__row"><span class="emma-flow__from">Ground → Wall</span><span class="emma-flow__arr">←</span><span class="emma-flow__to">Out: Scramble (Stand-Up Loop)</span></div>
</div>

<p class="emma-glabel">System Statistics</p>

<div class="emma-stats">
  <div class="emma-stat"><span class="emma-stat__num">8</span><span class="emma-stat__label">Foundation</span></div>
  <div class="emma-stat"><span class="emma-stat__num">6</span><span class="emma-stat__label">Open Space</span></div>
  <div class="emma-stat"><span class="emma-stat__num">3</span><span class="emma-stat__label">Open → Wall</span></div>
  <div class="emma-stat"><span class="emma-stat__num">4</span><span class="emma-stat__label">Open → Ground</span></div>
  <div class="emma-stat"><span class="emma-stat__num">6</span><span class="emma-stat__label">Wall</span></div>
  <div class="emma-stat"><span class="emma-stat__num">7</span><span class="emma-stat__label">Ground</span></div>
  <div class="emma-stat"><span class="emma-stat__num">34</span><span class="emma-stat__label">Total Games</span></div>
</div>

<p class="emma-glabel">Concept Integration</p>

Where the system's core concepts show up across the games.

<div class="emma-cards">
  <a class="emma-card emma-has-pop" href="../../concepts/three-zones/" tabindex="0"><div class="emma-card__i">🎯</div><div class="emma-card__t">Three Zones</div><p>Offensive target selection.<span class="emma-pop">Appears in: Land the Target, Sustained Offense.</span></p></a>
  <a class="emma-card emma-has-pop" href="../../concepts/confidence-rating/" tabindex="0"><div class="emma-card__i">📊</div><div class="emma-card__t">Confidence Rating</div><p>Commitment timing.<span class="emma-pop">Appears in: Land the Target, Skill Isolation.</span></p></a>
  <a class="emma-card emma-has-pop" href="../../concepts/defensive-solutions/" tabindex="0"><div class="emma-card__i">🛡️</div><div class="emma-card__t">Defensive Solutions</div><p>Defense selection.<span class="emma-pop">Appears in: all skill isolation, Close-Range Defense.</span></p></a>
  <a class="emma-card emma-has-pop" href="../../concepts/hand-controls/" tabindex="0"><div class="emma-card__i">🤝</div><div class="emma-card__t">Hand Controls</div><p>Bridges striking and clinch.<span class="emma-pop">Appears in: Touch, Pressure to Clinch, Pressure games.</span></p></a>
  <a class="emma-card emma-has-pop" href="../../concepts/tko-pin/" tabindex="0"><div class="emma-card__i">📌</div><div class="emma-card__t">TKO Pin</div><p>Exploitation endpoint.<span class="emma-pop">Appears in: Wall Grinding, Ground Control.</span></p></a>
  <a class="emma-card emma-has-pop" href="../../concepts/decision-states/" tabindex="0"><div class="emma-card__i">🔄</div><div class="emma-card__t">Decision States</div><p>Access → Stabilize → Exploit → Counter.<span class="emma-pop">Appears in: all games.</span></p></a>
  <a class="emma-card emma-has-pop" href="../../concepts/full-mma-expression/" tabindex="0"><div class="emma-card__i">🌐</div><div class="emma-card__t">Full MMA Expression</div><p>Cross-domain threat integration.<span class="emma-pop">Appears in: Level 4 of all games.</span></p></a>
  <a class="emma-card emma-has-pop" href="../../concepts/fight-philosophy/" tabindex="0"><div class="emma-card__i">⚖️</div><div class="emma-card__t">Fight Philosophy</div><p>Finish while taking minimal damage.<span class="emma-pop">Appears: system-wide.</span></p></a>
</div>

??? abstract "System evolution notice"
    Games can be added infinitely, the fight states and transitions are the structure; games are the teaching tools. See the <a href="../../reference/changelog/">Change Log</a> for version history.
