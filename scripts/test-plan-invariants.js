/* Exhaustive intake test for the real your-plan.js logic.
   Loads the actual source, stubs the DOM so the IIFE does not run its
   initialiser, and exports the plan builders for direct exercise. */
const fs = require('fs');
const path = require('path');

const REPO = path.resolve(__dirname, '..');
const src = fs.readFileSync(path.join(REPO, 'docs/javascripts/your-plan.js'), 'utf8');

// Export the internals by appending to the IIFE body, without touching the file.
const EXPORTS = `
  __out.buildFighterPlan = buildFighterPlan;
  __out.buildCoachPlan = buildCoachPlan;
  __out.setGames = function (gs) { games = gs; bySlug = {}; gs.forEach(function (g) { bySlug[g.slug] = g; }); };
})();`;
const idx = src.lastIndexOf('})();');
const patched = src.slice(0, idx) + EXPORTS;

const __out = {};
const stubEl = { innerHTML: '', addEventListener() {}, querySelector: () => null, querySelectorAll: () => [], classList: { add() {}, remove() {}, toggle() {} }, dataset: {} };
const sandbox = {
  __out,
  window: { document$: null, matchMedia: () => ({ matches: false }) },
  document: { readyState: 'loading', addEventListener() {}, getElementById: () => null, querySelector: () => null, querySelectorAll: () => [], createElement: () => stubEl },
  localStorage: { getItem: () => null, setItem() {}, removeItem() {} },
  fetch: () => Promise.reject(new Error('no fetch in test')),
};
new Function(...Object.keys(sandbox), patched)(...Object.values(sandbox));

const games = JSON.parse(fs.readFileSync(path.join(REPO, 'docs/assets/data/games.json'), 'utf8')).games;
__out.setGames(games);
const bySlug = {}; games.forEach(g => bySlug[g.slug] = g);
const RANK = { beginner: 0, intermediate: 1, advanced: 2 };

const EXP = ['new', 'some', 'exp'];
const GOAL = ['strike-def', 'strike-off', 'takedowns', 'wall', 'ground', 'whole'];
const GEAR = ['none', 'gloves', 'mats', 'full'];
const TIME = ['short', 'medium', 'long'];
const THEME = ['striking', 'wrestling', 'wall', 'ground', 'mma'];
const LEVEL = ['new', 'mixed', 'adv'];
const LENGTH = ['s45', 's60', 's90'];

let fails = [], combos = 0, plansWithGames = 0, emptyPlans = 0, simplified = 0;

for (const exp of EXP) for (const goal of GOAL) for (const gear of GEAR) for (const time of TIME) {
  combos++;
  const s = { who: 'fighter', exp, goal, gear, time };
  const plan = __out.buildFighterPlan(s);
  const label = `fighter/${exp}/${goal}/${gear}/${time}`;

  const flat = [];
  (plan.phases || []).forEach(p => p.games.forEach(g => flat.push(g)));

  if (!flat.length) {
    emptyPlans++;
    if (!plan.empty) fails.push(`${label}: empty plan with NO explanation`);
    continue;
  }
  plansWithGames++;
  if (plan.simplify) simplified++;

  // INVARIANT 1: every prerequisite of every listed game is also listed
  const present = new Set(flat.map(g => g.slug));
  for (const g of flat) {
    for (const p of g.prereq_games || []) {
      if (!present.has(p)) fails.push(`${label}: "${g.slug}" listed but its prerequisite "${p}" is missing`);
    }
  }
  // INVARIANT 2: a prerequisite never appears after the game that needs it
  const pos = {}; flat.forEach((g, i) => pos[g.slug] = i);
  for (const g of flat) {
    for (const p of g.prereq_games || []) {
      if (pos[p] !== undefined && pos[p] > pos[g.slug]) {
        fails.push(`${label}: "${p}" appears AFTER "${g.slug}" which depends on it`);
      }
    }
  }
  // INVARIANT 3: difficulty ceiling holds unless the plan says it is simplifying
  const maxRank = exp === 'exp' ? 2 : (exp === 'some' ? 1 : 0);
  const over = flat.filter(g => RANK[g.difficulty] > maxRank);
  if (over.length && !plan.simplify) {
    fails.push(`${label}: over-ceiling games ${over.map(g => g.slug + '/' + g.difficulty)} with no simplify note`);
  }
  // INVARIANT 4: never recommend unfinished or format pages
  for (const g of flat) {
    if (g.status !== 'live') fails.push(`${label}: recommends non-live "${g.slug}"`);
    if (g.is_format) fails.push(`${label}: recommends format overlay "${g.slug}"`);
  }
}

let coachCombos = 0, coachAssumed = 0;
for (const theme of THEME) for (const level of LEVEL) for (const length of LENGTH) {
  coachCombos++;
  const s = { who: 'coach', theme, level, length };
  const plan = __out.buildCoachPlan(s);
  const label = `coach/${theme}/${level}/${length}`;
  if (!plan.beats || !plan.beats.length) {
    if (!plan.empty) fails.push(`${label}: empty session with NO explanation`);
    continue;
  }
  const beats = plan.beats.map(b => b.game);
  // ceiling: a beginners class must never be handed advanced content
  const cap = level === 'new' ? 1 : 2;
  for (const g of beats) {
    if (RANK[g.difficulty] > cap) fails.push(`${label}: beat "${g.slug}" (${g.difficulty}) exceeds the cap`);
    if (g.status !== 'live') fails.push(`${label}: non-live beat "${g.slug}"`);
    if (g.is_format) fails.push(`${label}: format overlay as a beat "${g.slug}"`);
  }
  // ordering among the beats themselves
  const bpos = {}; beats.forEach((g, i) => bpos[g.slug] = i);
  for (const g of beats) {
    for (const p of g.prereq_games || []) {
      if (bpos[p] !== undefined && bpos[p] > bpos[g.slug]) {
        fails.push(`${label}: "${p}" runs after "${g.slug}" which depends on it`);
      }
    }
  }
  // the assumed-foundations note must be complete
  const inBeats = new Set(beats.map(g => g.slug));
  const assumedSlugs = new Set((plan.assumed || []).map(g => g.slug));
  if (plan.assumed && plan.assumed.length) coachAssumed++;
  for (const g of beats) {
    for (const p of g.prereq_games || []) {
      if (!inBeats.has(p) && bySlug[p] && !assumedSlugs.has(p)) {
        fails.push(`${label}: prerequisite "${p}" neither in the session nor named as assumed`);
      }
    }
  }
  // no duplicate beats
  if (new Set(beats.map(g => g.slug)).size !== beats.length) fails.push(`${label}: duplicate beat`);
}

console.log(`fighter intakes tested: ${combos}  (with games: ${plansWithGames}, honest empty: ${emptyPlans}, simplified: ${simplified})`);
console.log(`coach intakes tested:   ${coachCombos}  (${coachAssumed} name assumed foundations)`);
if (fails.length) {
  console.log(`\nFAILURES: ${fails.length}`);
  [...new Set(fails)].slice(0, 25).forEach(f => console.log('  ✗ ' + f));
  process.exit(1);
}
console.log('\nALL INVARIANTS HOLD across every intake combination.');
