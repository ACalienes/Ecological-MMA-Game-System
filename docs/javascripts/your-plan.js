/* Prescription engine: short intake -> personal game plan.
   Runs only on the Get Your Plan page (#emma-plan-root).
   Data: assets/data/games.json (built by scripts/build-game-index.py).
   Answers persist in localStorage; re-runs on Material instant nav. */
(function () {
  var KEY = "emma-plan-v1";
  var DIFF_RANK = { beginner: 0, intermediate: 1, advanced: 2 };

  /* ---------- intake definition ---------- */
  var STEPS = {
    who: {
      label: "Build a plan for",
      options: [
        { id: "fighter", icon: "🥊", t: "Myself", d: "I train and want to know what to play next" },
        { id: "coach", icon: "📋", t: "My class", d: "I coach and need a session plan" }
      ]
    },
    fighter: [
      {
        key: "exp", label: "Your experience",
        options: [
          { id: "new", icon: "🌱", t: "New to this", d: "First months of training" },
          { id: "some", icon: "🔁", t: "Trained a bit", d: "Comfortable in light sparring" },
          { id: "exp", icon: "🔥", t: "Experienced", d: "Years on the mat" }
        ]
      },
      {
        key: "goal", label: "Build what",
        options: [
          { id: "strike-def", icon: "🛡️", t: "Striking defense", d: "Stop eating punches" },
          { id: "strike-off", icon: "🎯", t: "Striking offense", d: "Land more, land cleaner" },
          { id: "takedowns", icon: "🤼", t: "Takedowns", d: "Close distance, hit entries" },
          { id: "wall", icon: "🧱", t: "The wall game", d: "Pin, grind, escape" },
          { id: "ground", icon: "🥋", t: "The ground game", d: "Control, escape, finish" },
          { id: "whole", icon: "♾️", t: "The whole fight", d: "Chain every phase together" }
        ]
      },
      {
        key: "gear", label: "Your gear",
        options: [
          { id: "none", icon: "🙌", t: "No gear", d: "Just a partner and space" },
          { id: "gloves", icon: "🥊", t: "Gloves", d: "Striking gear only" },
          { id: "mats", icon: "🧘", t: "Gloves + mats", d: "Ground work is on" },
          { id: "full", icon: "🏟️", t: "Full gym", d: "Wall, mats, all gear" }
        ]
      },
      {
        key: "time", label: "Time per session",
        options: [
          { id: "short", icon: "⏱️", t: "15-20 min", d: "One focused game" },
          { id: "medium", icon: "⏳", t: "30-45 min", d: "Pair two games" },
          { id: "long", icon: "🕐", t: "60+ min", d: "Run a full pathway" }
        ]
      }
    ],
    coach: [
      {
        key: "theme", label: "Session theme",
        options: [
          { id: "striking", icon: "🥊", t: "Striking", d: "Hands, feet, defense" },
          { id: "wrestling", icon: "🤼", t: "Wrestling", d: "Clinch and takedowns" },
          { id: "wall", icon: "🧱", t: "Wall", d: "Pins, grinding, escapes" },
          { id: "ground", icon: "🥋", t: "Ground", d: "Top, bottom, scrambles" },
          { id: "mma", icon: "♾️", t: "Full MMA", d: "Cross-phase integration" }
        ]
      },
      {
        key: "level", label: "Class level",
        options: [
          { id: "new", icon: "🌱", t: "Beginners", d: "Keep constraints tight" },
          { id: "mixed", icon: "🔀", t: "Mixed", d: "The usual open class" },
          { id: "adv", icon: "🔥", t: "Advanced", d: "Open it up" }
        ]
      },
      {
        key: "length", label: "Session length",
        options: [
          { id: "s45", icon: "⏱️", t: "45 min", d: "" },
          { id: "s60", icon: "⏳", t: "60 min", d: "" },
          { id: "s90", icon: "🕐", t: "90 min", d: "" }
        ]
      }
    ]
  };

  var GOAL_FILTERS = {
    "strike-def": function (g) { return g.domain === "striking" && g.focus === "defensive"; },
    "strike-off": function (g) { return g.domain === "striking" && g.focus !== "defensive"; },
    "takedowns": function (g) { return g.domain === "wrestling" && g.focus !== "defensive" && g.environment !== "wall" && g.environment !== "ground"; },
    "wall": function (g) { return g.environment === "wall"; },
    "ground": function (g) { return g.environment === "ground"; },
    "whole": function (g) { return g.focus === "combined" || g.domain === "mixed" || g.environment === "transition"; }
  };
  var THEME_FILTERS = {
    striking: function (g) { return g.domain === "striking"; },
    wrestling: function (g) { return g.domain === "wrestling"; },
    wall: GOAL_FILTERS.wall,
    ground: GOAL_FILTERS.ground,
    mma: GOAL_FILTERS.whole
  };
  var GEAR_SETS = {
    none: ["boundary-markers"],
    gloves: ["boundary-markers", "gloves", "shin-guards"],
    mats: ["boundary-markers", "gloves", "shin-guards", "mats"],
    full: ["boundary-markers", "gloves", "shin-guards", "mats", "wall"]
  };
  var GOAL_PATHS = {
    "strike-def": { href: "../paths/foundations-first/", t: "Foundations First" },
    "strike-off": { href: "../paths/striking-offense/", t: "Striking Offense" },
    "takedowns": { href: "../paths/closing-the-distance/", t: "Closing the Distance" },
    "wall": { href: "../paths/wall-game/", t: "The Wall Game" },
    "ground": { href: "../paths/ground-game/", t: "The Ground Game" },
    "whole": { href: "../paths/complete-fight/", t: "The Complete Fight" }
  };
  // Gear-accurate guidance when a goal's games are all filtered out by gear.
  // Wall games need a wall (only "Full gym" has it), ground needs mats, etc.
  var GEAR_HINTS = {
    "wall": "Wall games need a wall, that comes with the \"Full gym\" option. Switch your gear to Full gym and try again.",
    "ground": "Ground games need mats. Pick \"Gloves + mats\" or \"Full gym\" and try again.",
    "takedowns": "Takedown games need mats to land on. Pick \"Gloves + mats\" or \"Full gym\" and try again.",
    "strike-def": "Striking games need gloves. Pick \"Gloves\" or higher and try again.",
    "strike-off": "Striking games need gloves. Pick \"Gloves\" or higher and try again.",
    "whole": "The full-fight games need more gear, mats and a wall open up most of them. Try \"Full gym.\""
  };
  var TIME_NOTES = {
    short: "Pick <b>one game per session</b> and work it at levels 1-3. One clean problem beats three rushed ones.",
    medium: "Pair <b>two games per session</b>, one from Start Here, one from Build. Let the first feed the second.",
    long: "Chain <b>three games per session</b> across the phases below, simple to complex."
  };

  /* ---------- state ---------- */
  var games = null;
  var bySlug = {};
  var state = loadState();

  function loadState() {
    var raw;
    try { raw = JSON.parse(localStorage.getItem(KEY) || "{}"); }
    catch (e) { raw = {}; }
    return sanitizeState(raw);
  }
  // Persisted state is untrusted (hand-edited, stale schema, another tab).
  // An unknown `who` made STEPS[who] undefined and blanked the whole page with
  // an uncaught error, so we keep only values that match the current intake.
  function sanitizeState(raw) {
    if (!raw || typeof raw !== "object" || (raw.who !== "fighter" && raw.who !== "coach")) {
      return {};
    }
    var clean = { who: raw.who };
    STEPS[raw.who].forEach(function (st) {
      var val = raw[st.key];
      if (val && st.options.some(function (o) { return o.id === val; })) {
        clean[st.key] = val;
      }
    });
    return clean;
  }
  function saveState() {
    try { localStorage.setItem(KEY, JSON.stringify(state)); } catch (e) {}
  }

  /* ---------- plan logic ---------- */
  function playable(g) { return g.status === "live" && !g.is_format; }

  function gearOk(g, gearId) {
    var allowed = GEAR_SETS[gearId] || GEAR_SETS.full;
    var eq = Array.isArray(g.equipment) ? g.equipment : [];
    return eq.every(function (e) {
      return e === "none" || allowed.indexOf(e) >= 0;
    });
  }

  function topoSort(pool) {
    var inPool = {};
    pool.forEach(function (g) { inPool[g.slug] = true; });
    var sorted = [], seen = {}, active = {};
    function visit(g) {
      if (seen[g.slug]) return;
      // `active` breaks a prerequisite loop deterministically instead of
      // emitting a silently wrong order. build-game-index.py now refuses to
      // build a graph containing a loop, so this is the second line of defence.
      if (active[g.slug]) return;
      active[g.slug] = true;
      (g.prereq_games || []).forEach(function (p) {
        if (inPool[p]) visit(bySlug[p]);
      });
      active[g.slug] = false;
      if (seen[g.slug]) return;
      seen[g.slug] = true;
      sorted.push(g);
    }
    pool
      .slice()
      .sort(function (a, b) { return DIFF_RANK[a.difficulty] - DIFF_RANK[b.difficulty]; })
      .forEach(visit);
    return sorted;
  }

  // Pull every prerequisite a plan leans on INTO the plan, all the way down.
  // The old code rescued only beginner-rank prerequisites, so a plan could tell
  // an athlete to run a game while silently omitting the foundation it is built
  // on. 42 of 62 games have a prerequisite that is intermediate or harder, so
  // that was most of the library. Any game can be scaled down for the person in
  // front of you, which makes including a harder foundation honest. Hiding it
  // is not.
  function closePrereqs(pool, gearId) {
    var have = {}, out = [];
    pool.forEach(function (g) { have[g.slug] = true; out.push(g); });
    var queue = out.slice();
    while (queue.length) {
      var g = queue.shift();
      (g.prereq_games || []).forEach(function (p) {
        if (have[p]) return;
        var pg = bySlug[p];
        if (!pg || !playable(pg) || !gearOk(pg, gearId)) return;
        have[p] = true; out.push(pg); queue.push(pg);
      });
    }
    // A game whose foundation still cannot be included (unfinished, or needs
    // gear they do not have) is dropped rather than shipped with a hole in it.
    var changed = true;
    while (changed) {
      changed = false;
      out = out.filter(function (g) {
        var ok = (g.prereq_games || []).every(function (p) { return have[p]; });
        if (!ok) { delete have[g.slug]; changed = true; }
        return ok;
      });
    }
    return out;
  }

  // A game must never sit in an earlier phase than something it depends on.
  // Three games in the library have a prerequisite HARDER than themselves, so
  // phasing on difficulty alone would print the foundation after the game that
  // needs it. Start from the difficulty-derived phase, then push a game later if
  // any of its prerequisites landed later.
  function phaseFor(g) {
    var r = DIFF_RANK[g.difficulty];
    if (r === 0) return 0;
    if (r === 1 && g.focus !== "combined") return 1;
    return 2;
  }
  function assignPhases(ordered) {
    var phase = {};
    ordered.forEach(function (g) {
      var p = phaseFor(g);
      (g.prereq_games || []).forEach(function (q) {
        if (phase[q] !== undefined && phase[q] > p) p = phase[q];
      });
      phase[g.slug] = p;
    });
    return phase;
  }

  // Trimming a phase to fit the layout can cut a foundation while keeping the
  // game built on it, which would reintroduce the same hole one step later.
  // Drop dependents to a fixpoint after trimming.
  function pruneToSelection(phases) {
    var kept = {};
    phases.forEach(function (p) { p.games.forEach(function (g) { kept[g.slug] = true; }); });
    var changed = true;
    while (changed) {
      changed = false;
      phases.forEach(function (p) {
        p.games = p.games.filter(function (g) {
          var ok = (g.prereq_games || []).every(function (q) { return kept[q] || !bySlug[q]; });
          if (!ok) { delete kept[g.slug]; changed = true; }
          return ok;
        });
      });
    }
    return phases;
  }

  // Stable topological re-order: keeps the given order everywhere it can, and
  // only moves a game earlier when something ahead of it depends on it. Used for
  // the coach session, where beats are chosen by ROLE (warm-up, defensive,
  // offensive, integration) and that selection can otherwise pick a foundation
  // after the game built on it.
  function stableTopo(list) {
    var inList = {};
    list.forEach(function (g) { inList[g.slug] = true; });
    var out = [], placed = {};
    function place(g, guard) {
      if (placed[g.slug] || guard[g.slug]) return;
      guard[g.slug] = true;
      (g.prereq_games || []).forEach(function (p) {
        if (inList[p]) place(bySlug[p], guard);
      });
      guard[g.slug] = false;
      if (placed[g.slug]) return;
      placed[g.slug] = true;
      out.push(g);
    }
    list.forEach(function (g) { place(g, {}); });
    return out;
  }

  function buildFighterPlan(s) {
    var goalFilter = GOAL_FILTERS[s.goal] || function () { return true; };
    var goalPool = games.filter(playable).filter(goalFilter);
    var gearPool = goalPool.filter(function (g) { return gearOk(g, s.gear); });
    // Experience is a difficulty ceiling: new = beginner, trained = up to
    // intermediate, experienced = up to advanced.
    var maxRank = s.exp === "exp" ? 2 : (s.exp === "some" ? 1 : 0);
    var pool = gearPool.filter(function (g) { return DIFF_RANK[g.difficulty] <= maxRank; });
    // Some goals (wall, ground, takedowns) have no beginner content. Rather than
    // dead-end a new fighter, give them the easiest tier that goal offers
    // (still never harder than necessary) instead of nothing.
    // Difficulty is not a fixed property of a game. A harder game is one
    // carrying more variables, and any game can be scaled down so the athlete
    // tracks fewer things at once. So a new fighter still gets the easiest tier
    // the goal offers rather than a dead end, but the plan SAYS it needs
    // simplifying instead of pretending it was built for them.
    var simplify = false;
    if (!pool.length && gearPool.length) {
      var easiest = Math.min.apply(null, gearPool.map(function (g) { return DIFF_RANK[g.difficulty]; }));
      pool = gearPool.filter(function (g) { return DIFF_RANK[g.difficulty] <= easiest; });
      simplify = easiest > maxRank;
    }

    pool = closePrereqs(pool, s.gear);
    var ordered = topoSort(pool);
    var phase = assignPhases(ordered);
    function inPhase(n) {
      return ordered.filter(function (g) { return phase[g.slug] === n; });
    }

    var phases = pruneToSelection([
      { t: "Start here", d: "Groove the reads with tight constraints.", games: inPhase(0).slice(0, 3) },
      { t: "Build", d: "The core of your focus. Earn each game before the next.", games: inPhase(1).slice(0, 4) },
      { t: "Put it together", d: "Fewer rules, live resistance, full expression.", games: inPhase(2).slice(0, 3) }
    ]).filter(function (p) { return p.games.length; });

    // A valid set of answers can still match no games (e.g. the ground game
    // with no mats). Explain why instead of rendering an empty plan.
    var empty = null;
    if (!phases.length) {
      if (!goalPool.length) {
        empty = "We don't have field-tested games for that focus yet. Browse the full library while we build it out.";
      } else if (!gearPool.length) {
        empty = GEAR_HINTS[s.goal] || "Those games need more gear than you picked. Add mats or gloves, then try again.";
      } else {
        empty = "Your experience level filtered these out. Pick a broader focus, or come back as you log more mat time.";
      }
    }

    return { phases: phases, path: GOAL_PATHS[s.goal], note: TIME_NOTES[s.time],
             empty: empty, simplify: simplify };
  }

  function buildCoachPlan(s) {
    var pool = games.filter(playable).filter(THEME_FILTERS[s.theme]);
    var cap = s.level === "new" ? 1 : 2;
    var floor = s.level === "adv" ? 1 : 0;
    var filtered = pool.filter(function (g) {
      var r = DIFF_RANK[g.difficulty];
      return r <= cap && r >= floor;
    });
    // If thin, relax the floor but NEVER the cap: a beginners class must not be
    // handed advanced games. Too few games just means fewer beats, not harder ones.
    if (filtered.length < 5) filtered = pool.filter(function (g) { return DIFF_RANK[g.difficulty] <= cap; });

    var ordered = topoSort(filtered);
    var beats = [];
    function take(test) {
      for (var i = 0; i < ordered.length; i++) {
        if (beats.indexOf(ordered[i]) < 0 && (!test || test(ordered[i]))) return ordered[i];
      }
      return null;
    }
    beats.push(take(function (g) { return g.duration === "short"; }) || take());
    beats.push(take(function (g) { return g.focus === "defensive"; }) || take());
    beats.push(take(function (g) { return g.focus === "offensive"; }) || take());
    beats.push(take(function (g) { return g.focus === "combined"; }) || take());
    beats.push(take(function (g) { return g.focus === "combined"; }) || take());
    beats = stableTopo(beats.filter(Boolean));

    if (!beats.length) {
      return { beats: [], empty: "No field-tested games match that theme and level yet. Browse the full library while we build it out." };
    }
    // A single session cannot carry every foundation the way a development plan
    // can, so instead of dropping beats we name what the session assumes the
    // room has already played. Silence here reads as "these five stand alone",
    // which is not true for most of the library.
    var inBeats = {};
    beats.forEach(function (g) { inBeats[g.slug] = true; });
    var assumed = [];
    beats.forEach(function (g) {
      (g.prereq_games || []).forEach(function (p) {
        var pg = bySlug[p];
        if (pg && !inBeats[p] && assumed.indexOf(pg) < 0) assumed.push(pg);
      });
    });

    var MINUTES = { s45: [6, 8, 10, 10, 11], s60: [8, 10, 12, 14, 16], s90: [12, 15, 18, 20, 25] };
    var roles = ["Warm-up", "Skill builder", "Skill builder", "Integration", "Live application"];
    return {
      beats: beats.map(function (g, i) {
        return { game: g, min: MINUTES[s.length][i], role: roles[i] };
      }),
      assumed: assumed
    };
  }

  /* ---------- rendering ---------- */
  function esc(t) {
    return String(t).replace(/[&<>"]/g, function (c) {
      return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c];
    });
  }

  function chipHtml(stepKey, opt, selected) {
    return '<button type="button" class="emma-plan__chip' + (selected ? " is-on" : "") +
      '" data-step="' + stepKey + '" data-val="' + opt.id + '">' +
      '<span class="emma-plan__chip-i">' + opt.icon + "</span>" +
      "<b>" + esc(opt.t) + "</b>" +
      (opt.d ? "<span>" + esc(opt.d) + "</span>" : "") +
      "</button>";
  }

  function stepHtml(stepKey, label, options, n, value, open) {
    return '<div class="emma-plan__step' + (open ? " is-open" : "") + (value ? " is-done" : "") +
      '" data-stepbox="' + stepKey + '">' +
      '<p class="emma-plan__q"><span class="emma-plan__n">' + n + "</span>" + esc(label) + "</p>" +
      '<div class="emma-plan__chips">' +
      options.map(function (o) { return chipHtml(stepKey, o, value === o.id); }).join("") +
      "</div></div>";
  }

  function heroImg(g) {
    // Suppress when the index has no hero, and drop the node if the file 404s
    // (defensive against a hand-edited or stale index), so a plan never shows a
    // broken image.
    return g.hero
      ? '<img src="../' + g.hero + '" alt="" loading="lazy" onerror="this.remove()">'
      : "";
  }

  function gameCard(g) {
    return '<a class="emma-plan__game" href="../games/' + g.slug + '/">' +
      heroImg(g) +
      '<span class="emma-plan__game-body"><b>' + esc(g.title) + "</b>" +
      "<span>" + esc(g.description) + "</span>" +
      '<em class="emma-plan__diff emma-plan__diff--' + g.difficulty + '">' + g.difficulty + "</em></span></a>";
  }

  function renderPlanFighter(plan) {
    var html = '<div class="emma-plan__result">';
    html += '<p class="emma-glabel">Your game plan</p>';
    if (plan.empty) {
      return html + '<p class="emma-plan__note">' + plan.empty +
        ' Browse the <a href="../games/">full library</a>.</p></div>';
    }
    if (plan.simplify) {
      html += '<p class="emma-plan__note">We have no beginner games for this focus yet, so these sit a tier above where you said you are. That is workable rather than a blocker: a harder game is simply one carrying more variables. Strip it back to start, fewer weapons, one win condition, slower pace, then add a variable back each round as it gets comfortable.</p>';
    }
    if (plan.note) html += '<p class="emma-plan__note">' + plan.note + "</p>";
    plan.phases.forEach(function (p, i) {
      html += '<div class="emma-plan__phase" style="animation-delay:' + i * 0.12 + 's">' +
        '<p class="emma-plan__phase-t"><span>' + (i + 1) + "</span>" + esc(p.t) +
        ' <i>' + esc(p.d) + "</i></p>" +
        '<div class="emma-plan__games">' + p.games.map(gameCard).join("") + "</div></div>";
    });
    if (plan.path) {
      html += '<p class="emma-plan__cta">Go deeper: the <a href="' + plan.path.href + '">' +
        esc(plan.path.t) + "</a> learning path covers this ground step by step.</p>";
    }
    html += "</div>";
    return html;
  }

  function renderPlanCoach(plan) {
    if (plan.empty || !plan.beats.length) {
      return '<div class="emma-plan__result"><p class="emma-glabel">Your session plan</p>' +
        '<p class="emma-plan__note">' + (plan.empty || "No games match that theme and level yet.") +
        ' Browse the <a href="../games/">full library</a>.</p></div>';
    }
    var total = plan.beats.reduce(function (a, b) { return a + b.min; }, 0);
    var html = '<div class="emma-plan__result">';
    html += '<p class="emma-glabel">Your session plan · ' + total + " min of play</p>";
    html += '<div class="emma-plan__session">';
    plan.beats.forEach(function (b, i) {
      var g = b.game;
      html += '<div class="emma-plan__beat" style="animation-delay:' + i * 0.1 + 's">' +
        '<span class="emma-plan__beat-n">' + (i + 1) + "</span>" +
        heroImg(g) +
        '<span class="emma-plan__beat-body"><i>' + b.role + " · " + b.min + ' min</i>' +
        '<a href="../games/' + g.slug + '/"><b>' + esc(g.title) + "</b></a>" +
        "<span>" + esc(g.description) + "</span></span></div>";
    });
    html += "</div>";
    if (plan.assumed && plan.assumed.length) {
      html += '<p class="emma-plan__note">This session assumes the room has already played ' +
        plan.assumed.map(function (g) {
          return '<a href="../games/' + g.slug + '/">' + esc(g.title) + "</a>";
        }).join(", ") +
        '. If they have not, run the foundation first or simplify the beat that needs it.</p>';
    }
    html += '<p class="emma-plan__note">Between rounds, run the <a href="../principles/cla/session-design/">30-second game plan ritual</a>: each player names one thing to try next round. ' +
      'Want pre-built days instead? See the <a href="../tools/lesson-generator/">Lesson Plan Generator</a>.</p>';
    html += "</div>";
    return html;
  }

  function answersComplete(s) {
    if (!s.who) return false;
    return STEPS[s.who].every(function (st) { return s[st.key]; });
  }

  function render(root) {
    var html = "";
    html += stepHtml("who", STEPS.who.label, STEPS.who.options, 1, state.who, !state.who);
    if (state.who) {
      STEPS[state.who].forEach(function (st, i) {
        var prev = i === 0 ? state.who : state[STEPS[state.who][i - 1].key];
        html += stepHtml(st.key, st.label, st.options, i + 2, state[st.key], !!prev && !state[st.key]);
      });
    }
    if (answersComplete(state)) {
      var plan = state.who === "fighter" ? buildFighterPlan(state) : buildCoachPlan(state);
      html += state.who === "fighter" ? renderPlanFighter(plan) : renderPlanCoach(plan);
      html += '<p class="emma-plan__reset"><button type="button" class="emma-btn emma-btn--ghost" data-reset>Start over</button></p>';
    }
    root.innerHTML = html;

    root.querySelectorAll(".emma-plan__chip").forEach(function (btn) {
      btn.addEventListener("click", function () {
        var step = btn.getAttribute("data-step");
        var val = btn.getAttribute("data-val");
        if (step === "who" && state.who !== val) state = { who: val };
        else state[step] = val;
        saveState();
        render(root);
        var result = root.querySelector(".emma-plan__result");
        var next = root.querySelector(".emma-plan__step.is-open");
        var target = result || next;
        if (target && target.scrollIntoView) target.scrollIntoView({ behavior: "smooth", block: "nearest" });
      });
    });
    var reset = root.querySelector("[data-reset]");
    if (reset) reset.addEventListener("click", function () {
      state = {};
      saveState();
      render(root);
    });
  }

  function init() {
    var root = document.getElementById("emma-plan-root");
    if (!root || root.getAttribute("data-ready")) return;
    root.setAttribute("data-ready", "1");
    if (games) { render(root); return; }
    fetch("../assets/data/games.json")
      .then(function (r) { return r.json(); })
      .then(function (data) {
        // Validate shape BEFORE caching: a malformed-but-valid-JSON index
        // (e.g. {games:{}}) must hit the fallback, not poison `games` and throw
        // on the next instant-nav init.
        if (!data || !Array.isArray(data.games)) throw new Error("malformed game index");
        games = data.games.filter(function (g) { return g && g.slug; });
        games.forEach(function (g) { bySlug[g.slug] = g; });
        render(root);
      })
      .catch(function () {
        games = null;
        root.innerHTML = '<p class="emma-hl">Could not load the game index. Browse the <a href="../games/">full library</a> instead.</p>';
      });
  }

  if (window.document$ && typeof window.document$.subscribe === "function") {
    window.document$.subscribe(init);
  } else if (document.readyState !== "loading") {
    init();
  } else {
    document.addEventListener("DOMContentLoaded", init);
  }
})();
