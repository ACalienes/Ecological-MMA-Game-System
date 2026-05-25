# Common Pitfalls & Solutions

<div class="emma-meta"><span>CLA Methodology</span><span>10 Pitfalls</span><span>Signs · Cause · Fix</span></div>

<p style="font-size:.8rem;color:var(--fog-dim);margin:-.6rem 0 1.4rem;">← <a href="../implementation/">Implementation</a> · <a href="../index/">CLA Index</a> · <a href="../glossary/">Glossary</a> →</p>

<p class="emma-hl"><b>Most CLA failures are calibration errors at the extremes.</b> Too tight or too loose, too safe or too chaotic, too much instruction or none at all. Each pitfall below names the warning signs, why it fails, and the fix.</p>

??? abstract "Sources"
    Common implementation challenges identified in Renshaw et al. (2019). For complete bibliography, see <a href="../../../reference/sources/">Sources &amp; Theoretical Foundations</a>.

<p class="emma-glabel">The Ten Pitfalls</p>

<div class="emma-warns">
  <span class="emma-warn emma-has-pop" tabindex="0">1 · Over-Constraining<span class="emma-pop"><b>Forcing behavior rather than inviting it.</b> Signs: no decisions to make, only one "correct" solution, creativity stifled, training feels like following orders. <b>Fix:</b> design constraints that channel exploration while allowing choice.</span></span>
  <span class="emma-warn emma-has-pop" tabindex="0">2 · Under-Constraining<span class="emma-pop"><b>Environment too vague, lacks direction.</b> Signs: athletes don't know what to focus on, randomness without purpose, no learning direction, sessions feel aimless. <b>Fix:</b> establish clear session intentions, design specific affordances.</span></span>
  <span class="emma-warn emma-has-pop" tabindex="0">3 · Low Representative Design<span class="emma-pop"><b>Practice doesn't transfer to competition.</b> Signs: techniques work in training but fail in fights, athletes can't read opponents, poor decision-making under pressure. <b>Fix:</b> include relevant information sources, maintain perception-action coupling.</span></span>
  <span class="emma-warn emma-has-pop" tabindex="0">4 · "Game is the Teacher" Misinterpretation<span class="emma-pop"><b>Coach becomes too passive, lacks direction.</b> Signs: vague practice, no targeted development, athletes under/overwhelmed, coach watches without adjusting. <b>Fix:</b> coach is an active environment architect, not a passive observer.</span></span>
  <span class="emma-warn emma-has-pop" tabindex="0">5 · Ignoring Individual Differences<span class="emma-pop"><b>One-size-fits-all approach.</b> Signs: same drills for all, mismatched challenge, some progress while others stagnate. <b>Fix:</b> scale by critical π ratios, not absolutes — know each athlete's history, level, needs.</span></span>
  <span class="emma-warn emma-has-pop" tabindex="0">6 · Eliminating All Instruction<span class="emma-pop"><b>Thinking CLA means no verbal guidance.</b> Signs: athletes have no context, waste time discovering basics, principles of play unknown, frustration. <b>Fix:</b> instruction supports exploration rather than replacing it.</span></span>
  <span class="emma-warn emma-has-pop" tabindex="0">7 · Abandoning Structure<span class="emma-pop"><b>Thinking CLA means chaotic, unplanned sessions.</b> Signs: no session intention, random manipulation, no progression, athletes unsure what to learn. <b>Fix:</b> use a systematic framework (GROW, EDP) while remaining adaptive.</span></span>
  <span class="emma-warn emma-has-pop" tabindex="0">8 · Misunderstanding Variability<span class="emma-pop"><b>Adding randomness without purpose.</b> Signs: constant change with no rationale, athletes never develop stability, no skill consolidation. <b>Fix:</b> match variability to learning stage and intention.</span></span>
  <span class="emma-warn emma-has-pop" tabindex="0">9 · Confusing Simplification with Decomposition<span class="emma-pop"><b>Breaking tasks apart instead of scaling them.</b> Signs: isolated technical drilling, skills without context, perception separated from action. <b>Fix:</b> simplify by scaling the whole task, not by decomposing it.</span></span>
  <span class="emma-warn emma-has-pop" tabindex="0">10 · Neglecting Affective Design<span class="emma-pop"><b>Practice looks like competition but doesn't feel like it.</b> Signs: perform well in training but freeze in competition, emotional regulation doesn't transfer. <b>Fix:</b> include emotional representativeness (Affective Learning Design).</span></span>
</div>

<p class="emma-glabel">Each Pitfall, In Depth</p>

??? danger "1 · Over-Constraining — forcing behavior rather than inviting it"
    <p class="emma-sub">Signs</p>
    <div class="emma-warns">
      <span class="emma-warn">Athletes have no decisions to make</span>
      <span class="emma-warn">Only one "correct" solution exists</span>
      <span class="emma-warn">Creativity is stifled</span>
      <span class="emma-warn">Training feels like following orders</span>
    </div>
    <p class="emma-sub">The trap vs. the fix</p>
    <div class="emma-flow">
      <div class="emma-flow__row"><span class="emma-flow__from">Over-constrained ✗</span><span class="emma-flow__arr">→</span><span class="emma-flow__to">"When I throw, you must parry with your lead hand, then throw a jab-cross." Removes all decision-making — the athlete learns to follow instructions, not read situations.</span></div>
      <div class="emma-flow__row"><span class="emma-flow__from">Better ✓</span><span class="emma-flow__arr">→</span><span class="emma-flow__to">"Defend my attack, then counter. Points for clean counters." The athlete chooses the defense and counter based on what they perceive.</span></div>
    </div>

??? danger "2 · Under-Constraining — environment too vague"
    <p class="emma-sub">Signs</p>
    <div class="emma-warns">
      <span class="emma-warn">Athletes don't know what to focus on</span>
      <span class="emma-warn">Randomness without purpose</span>
      <span class="emma-warn">No learning direction</span>
      <span class="emma-warn">Sessions feel aimless</span>
    </div>
    <p class="emma-sub">The trap vs. the fix</p>
    <div class="emma-flow">
      <div class="emma-flow__row"><span class="emma-flow__from">Under-constrained ✗</span><span class="emma-flow__arr">→</span><span class="emma-flow__to">"Just spar and work on stuff." No session intention — athletes default to comfortable patterns, no targeted development.</span></div>
      <div class="emma-flow__row"><span class="emma-flow__from">Better ✓</span><span class="emma-flow__arr">→</span><span class="emma-flow__to">"Spar with a focus on creating angles after your opponent attacks. Points for landing while off the center line."</span></div>
    </div>

??? danger "3 · Low Representative Design — practice doesn't transfer"
    <p class="emma-sub">Signs</p>
    <div class="emma-warns">
      <span class="emma-warn">Techniques work in training, fail in fights</span>
      <span class="emma-warn">Athletes can't read opponents</span>
      <span class="emma-warn">Decision-making poor under pressure</span>
      <span class="emma-warn">Drill performance ≠ sparring performance</span>
    </div>
    <p class="emma-sub">The trap vs. the fix</p>
    <div class="emma-flow">
      <div class="emma-flow__row"><span class="emma-flow__from">Low RLD ✗</span><span class="emma-flow__arr">→</span><span class="emma-flow__to">Takedown defense against a partner who shoots on command without setups. No reading required — the defender knows when the attack is coming.</span></div>
      <div class="emma-flow__row"><span class="emma-flow__from">Better ✓</span><span class="emma-flow__arr">→</span><span class="emma-flow__to">Attacker can shoot anytime within a round; may or may not shoot. Defender must read the level change and react.</span></div>
    </div>

??? danger "4 · 'Game is the Teacher' Misinterpretation — coach too passive"
    <p class="emma-sub">Signs</p>
    <div class="emma-warns">
      <span class="emma-warn">Vague practice without purpose</span>
      <span class="emma-warn">No targeted development</span>
      <span class="emma-warn">Athletes underchallenged or overwhelmed</span>
      <span class="emma-warn">Coach watches without adjusting</span>
    </div>
    <p class="emma-sub">The trap vs. the fix</p>
    <div class="emma-flow">
      <div class="emma-flow__row"><span class="emma-flow__from">The trap ✗</span><span class="emma-flow__arr">→</span><span class="emma-flow__to">"The game teaches, so I just let them play." The game only teaches if it's well-designed — without manipulation, athletes repeat existing patterns.</span></div>
    </div>
    <p class="emma-sub">The coach's job</p>
    <ul class="emma-checklist">
      <li>Design the game with clear intention</li>
      <li>Observe athlete responses</li>
      <li>Adjust constraints based on what emerges</li>
      <li>Create progressions that challenge and develop</li>
    </ul>

??? danger "5 · Ignoring Individual Differences — one-size-fits-all"
    <p class="emma-sub">Signs</p>
    <div class="emma-warns">
      <span class="emma-warn">Same drills for all athletes</span>
      <span class="emma-warn">Frustration from mismatched challenge</span>
      <span class="emma-warn">Some progress, others stagnate</span>
      <span class="emma-warn">No consideration of physical/psych differences</span>
    </div>
    <p class="emma-sub">The trap vs. the fix</p>
    <div class="emma-flow">
      <div class="emma-flow__row"><span class="emma-flow__from">The trap ✗</span><span class="emma-flow__arr">→</span><span class="emma-flow__to">Running all athletes through identical sessions regardless of size, background, or skill. A 5'5" wrestler and a 6'2" kickboxer have different individual constraints.</span></div>
    </div>
    <p class="emma-hl"><b>How to individualize — scale by critical π ratios, not absolutes.</b> Saying "individualize" is not enough; the mechanism is <b>body-scaling</b>. Warren's stair-climbing studies showed that whether a step is "step-on-able" depends not on its absolute height but on the <b>ratio of step height to leg length</b> — plotted against the ratio, tall and short people fall on the <i>same</i> curve, crossing a single critical π value (≈0.88) where the action becomes impossible, and people <i>perceive</i> that boundary accurately (Blau &amp; Wagman, 2022 — p. 79–81). The same logic governs crossing gaps (leg length), passing through apertures (shoulder width, critical ratio ≈1.16–1.3), and reaching (arm length).</p>
    <p class="emma-hl"><b>Apply it:</b> when a game sets a distance, target height, aperture, or range, define it as a <b>ratio of the athlete's reach / leg length / shoulder width</b> rather than a fixed number — so a 5'5" wrestler and a 6'2" kickboxer face the <i>same relational problem</i> (e.g. a "close range" start scaled to each defender's arm length, so blocking is the live affordance for both). (See the <a href="../../ecological-psychology/index/">Ecological Psychology</a> section.)</p>
    <p class="emma-sub">Considerations</p>
    <div class="emma-cards">
      <div class="emma-card"><div class="emma-card__i">📏</div><div class="emma-card__t">Physical</div><p>Reach, weight, mobility — set constraints as <b>critical ratios</b> of these.</p></div>
      <div class="emma-card"><div class="emma-card__i">🥋</div><div class="emma-card__t">Technical</div><p>Grappling vs. striking base.</p></div>
      <div class="emma-card"><div class="emma-card__i">🧠</div><div class="emma-card__t">Psychological</div><p>Aggressive vs. reactive profile.</p></div>
      <div class="emma-card"><div class="emma-card__i">📈</div><div class="emma-card__t">Learning stage</div><p>Coordination vs. adaptability.</p></div>
    </div>

??? danger "6 · Eliminating All Instruction — misunderstanding CLA"
    <p class="emma-sub">Signs</p>
    <div class="emma-warns">
      <span class="emma-warn">Athletes have no context</span>
      <span class="emma-warn">Wasted time discovering basics</span>
      <span class="emma-warn">Principles of play unknown</span>
      <span class="emma-warn">Frustrated by lack of direction</span>
    </div>
    <p class="emma-sub">The trap</p>
    <p class="emma-hl">Refusing to explain anything because "discovery learning means they figure it out themselves." CLA doesn't mean no instruction — it means instruction <b>supports exploration rather than replacing it</b>.</p>
    <p class="emma-sub">Good vs. not-good instruction</p>
    <div class="emma-cards">
      <div class="emma-card"><div class="emma-card__i">✅</div><div class="emma-card__t">Good</div><p>"Notice when their weight shifts forward — that's your cue." · "The goal is to create space; how you do it is up to you." · "Pay attention to the pressure through their grips."</p></div>
      <div class="emma-card"><div class="emma-card__i">🚫</div><div class="emma-card__t">Not good</div><p>"When they do X, you must do Y." · "Your elbow needs to be at this angle." · "Execute the technique exactly like this."</p></div>
    </div>

??? danger "7 · Abandoning Structure — chaos isn't CLA"
    <p class="emma-sub">Signs</p>
    <div class="emma-warns">
      <span class="emma-warn">No session intention</span>
      <span class="emma-warn">Random constraint manipulation</span>
      <span class="emma-warn">No progression between sessions</span>
      <span class="emma-warn">Athletes unsure what they're learning</span>
    </div>
    <p class="emma-sub">The trap</p>
    <p class="emma-hl">"CLA is all about emergence, so I don't plan sessions — I just see what happens." But <b>emergence happens within constraints</b> — without thoughtful design, nothing meaningful emerges.</p>
    <p class="emma-sub">CLA sessions are…</p>
    <ul class="emma-checklist">
      <li><b>Planned</b> — clear intention, designed constraints</li>
      <li><b>Structured</b> — progression through zones</li>
      <li><b>Adaptive</b> — adjustments based on what emerges</li>
      <li><b>Connected</b> — build on previous sessions</li>
    </ul>

??? danger "8 · Misunderstanding Variability — randomness without purpose"
    <p class="emma-sub">Signs</p>
    <div class="emma-warns">
      <span class="emma-warn">Constant change with no rationale</span>
      <span class="emma-warn">Athletes never develop stability</span>
      <span class="emma-warn">Sessions feel chaotic</span>
      <span class="emma-warn">No skill consolidation</span>
    </div>
    <p class="emma-sub">The trap</p>
    <p class="emma-hl">Changing the drill every 2 minutes "for variability." Variability serves adaptability, but athletes also need time to explore and stabilize solutions.</p>
    <p class="emma-sub">Match variability to stage</p>
    <div class="emma-flow">
      <div class="emma-flow__row"><span class="emma-flow__from">Coordination</span><span class="emma-flow__arr">→</span><span class="emma-flow__to">Lower variability, allow exploration of solutions</span></div>
      <div class="emma-flow__row"><span class="emma-flow__from">Adaptability</span><span class="emma-flow__arr">→</span><span class="emma-flow__to">Higher variability, stress-test solutions</span></div>
    </div>
    <p class="emma-hl"><b>Remember:</b> the goal is "repetition without repetition" — repeating the problem-solving process, not identical movements. This still requires time with each problem.</p>

??? danger "9 · Confusing Simplification with Decomposition"
    <p class="emma-sub">Signs</p>
    <div class="emma-warns">
      <span class="emma-warn">Isolated technical drilling</span>
      <span class="emma-warn">Skills practiced without context</span>
      <span class="emma-warn">Perception separated from action</span>
      <span class="emma-warn">"Parts" practiced independently</span>
    </div>
    <p class="emma-sub">The trap</p>
    <p class="emma-hl"><b>Decomposition ✗:</b> practicing the "hand movement" of a jab without footwork, then footwork without hands, then "putting it together." The jab is a whole-body action where all parts inform each other — separating them breaks the synergy.</p>
    <p class="emma-sub">Simplify, don't decompose</p>
    <div class="emma-cards">
      <div class="emma-card"><div class="emma-card__i">🐢</div><div class="emma-card__t">Slower tempo</div><p>…but the whole technique.</p></div>
      <div class="emma-card"><div class="emma-card__i">🪶</div><div class="emma-card__t">Reduced threat</div><p>Lighter contact, but the whole exchange.</p></div>
      <div class="emma-card"><div class="emma-card__i">📐</div><div class="emma-card__t">Smaller space</div><p>…but the whole movement.</p></div>
      <div class="emma-card"><div class="emma-card__i">🔢</div><div class="emma-card__t">Limited options</div><p>…but the whole decision process.</p></div>
    </div>

??? danger "10 · Neglecting Affective Design — looks like competition, doesn't feel like it"
    <p class="emma-sub">Signs</p>
    <div class="emma-warns">
      <span class="emma-warn">Perform well in training, freeze in competition</span>
      <span class="emma-warn">Emotional regulation doesn't transfer</span>
      <span class="emma-warn">Pressure causes breakdown</span>
      <span class="emma-warn">"It's different when it counts"</span>
    </div>
    <p class="emma-sub">The trap</p>
    <p class="emma-hl">Sparring that's technically similar to fighting but has no consequences, pressure, or emotional intensity. Competition includes emotional demands — if training doesn't represent these, athletes aren't prepared for them. The fix: <b>Affective Learning Design</b>.</p>
    <p class="emma-sub">Methods</p>
    <div class="emma-chips">
      <span class="emma-chip"><span class="emma-chip__i">🏅</span> Scoring with visible results</span>
      <span class="emma-chip"><span class="emma-chip__i">⚖️</span> Consequences for outcomes</span>
      <span class="emma-chip"><span class="emma-chip__i">⏱️</span> Time pressure</span>
      <span class="emma-chip"><span class="emma-chip__i">🥊</span> Competition simulation</span>
      <span class="emma-chip"><span class="emma-chip__i">👀</span> Audience / observation</span>
      <span class="emma-chip"><span class="emma-chip__i">🧹</span> Stakes (loser cleans the mats)</span>
    </div>

<p class="emma-glabel">Quick Diagnostic</p>

<div class="emma-flow">
  <div class="emma-flow__row"><span class="emma-flow__from">Athletes don't explore</span><span class="emma-flow__arr">→</span><span class="emma-flow__to"><b>Over-constraining</b> — loosen constraints, allow more choice</span></div>
  <div class="emma-flow__row"><span class="emma-flow__from">Training is aimless</span><span class="emma-flow__arr">→</span><span class="emma-flow__to"><b>Under-constraining</b> — add clear intention and constraints</span></div>
  <div class="emma-flow__row"><span class="emma-flow__from">Skills don't transfer</span><span class="emma-flow__arr">→</span><span class="emma-flow__to"><b>Low RLD</b> — increase representativeness</span></div>
  <div class="emma-flow__row"><span class="emma-flow__from">Coach feels useless</span><span class="emma-flow__arr">→</span><span class="emma-flow__to"><b>"Game teaches" misunderstanding</b> — be active architect, not passive</span></div>
  <div class="emma-flow__row"><span class="emma-flow__from">Some athletes stagnate</span><span class="emma-flow__arr">→</span><span class="emma-flow__to"><b>Ignoring individual differences</b> — individualize constraints</span></div>
  <div class="emma-flow__row"><span class="emma-flow__from">Athletes are lost</span><span class="emma-flow__arr">→</span><span class="emma-flow__to"><b>Eliminating instruction</b> — add attention-directing cues</span></div>
  <div class="emma-flow__row"><span class="emma-flow__from">Sessions feel random</span><span class="emma-flow__arr">→</span><span class="emma-flow__to"><b>Abandoning structure</b> — use GROW/EDP frameworks</span></div>
  <div class="emma-flow__row"><span class="emma-flow__from">No skill stability</span><span class="emma-flow__arr">→</span><span class="emma-flow__to"><b>Misunderstanding variability</b> — allow consolidation time</span></div>
  <div class="emma-flow__row"><span class="emma-flow__from">Parts don't integrate</span><span class="emma-flow__arr">→</span><span class="emma-flow__to"><b>Decomposition</b> — use simplification instead</span></div>
  <div class="emma-flow__row"><span class="emma-flow__from">Freeze under pressure</span><span class="emma-flow__arr">→</span><span class="emma-flow__to"><b>Neglecting affect</b> — add emotional demands</span></div>
</div>

<p style="font-size:.82rem;color:var(--fog-dim);margin:1.4rem 0 0;">Next · <a href="../glossary/">Glossary</a> — complete A–Z terminology reference.</p>
