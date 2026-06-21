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
    "takedowns": function (g) { return g.domain === "wrestling" && g.environment !== "wall" && g.environment !== "ground"; },
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
    return (g.equipment || []).every(function (e) {
      return e === "none" || allowed.indexOf(e) >= 0;
    });
  }

  function topoSort(pool) {
    var inPool = {};
    pool.forEach(function (g) { inPool[g.slug] = true; });
    var sorted = [], seen = {};
    function visit(g) {
      if (seen[g.slug]) return;
      seen[g.slug] = true;
      (g.prereq_games || []).forEach(function (p) {
        if (inPool[p]) visit(bySlug[p]);
      });
      sorted.push(g);
    }
    pool
      .slice()
      .sort(function (a, b) { return DIFF_RANK[a.difficulty] - DIFF_RANK[b.difficulty]; })
      .forEach(visit);
    return sorted;
  }

  function buildFighterPlan(s) {
    var goalFilter = GOAL_FILTERS[s.goal] || function () { return true; };
    var goalPool = games.filter(playable).filter(goalFilter);
    var gearPool = goalPool.filter(function (g) { return gearOk(g, s.gear); });
    var maxRank = s.exp === "exp" ? 2 : 1;
    var pool = gearPool.filter(function (g) { return DIFF_RANK[g.difficulty] <= maxRank; });

    // pull in out-of-pool prerequisites as foundation material
    var poolSlugs = {};
    pool.forEach(function (g) { poolSlugs[g.slug] = true; });
    var extra = [];
    pool.forEach(function (g) {
      (g.prereq_games || []).forEach(function (p) {
        var pg = bySlug[p];
        if (pg && !poolSlugs[p] && playable(pg) && gearOk(pg, s.gear) &&
            DIFF_RANK[pg.difficulty] === 0 && extra.indexOf(pg) < 0) {
          extra.push(pg);
        }
      });
    });

    var ordered = topoSort(pool);
    var start = extra.concat(ordered.filter(function (g) { return DIFF_RANK[g.difficulty] === 0; }));
    var build = ordered.filter(function (g) { return DIFF_RANK[g.difficulty] === 1 && g.focus !== "combined"; });
    var integrate = ordered.filter(function (g) {
      return DIFF_RANK[g.difficulty] === 2 || (DIFF_RANK[g.difficulty] === 1 && g.focus === "combined");
    });

    var phases = [
      { t: "Start here", d: "Groove the reads with tight constraints.", games: start.slice(0, 3) },
      { t: "Build", d: "The core of your focus. Earn each game before the next.", games: build.slice(0, 4) },
      { t: "Put it together", d: "Fewer rules, live resistance, full expression.", games: integrate.slice(0, 3) }
    ].filter(function (p) { return p.games.length; });

    // A valid set of answers can still match no games (e.g. the ground game
    // with no mats). Explain why instead of rendering an empty plan.
    var empty = null;
    if (!phases.length) {
      if (!goalPool.length) {
        empty = "We don't have field-tested games for that focus yet. Browse the full library while we build it out.";
      } else if (!gearPool.length) {
        empty = "Those games need more gear than you picked. Add mats to open the ground game, or gloves for the striking games, then try again.";
      } else {
        empty = "Your experience level filtered these out. Pick a broader focus, or come back as you log more mat time.";
      }
    }

    return { phases: phases, path: GOAL_PATHS[s.goal], note: TIME_NOTES[s.time], empty: empty };
  }

  function buildCoachPlan(s) {
    var pool = games.filter(playable).filter(THEME_FILTERS[s.theme]);
    var cap = s.level === "new" ? 1 : 2;
    var floor = s.level === "adv" ? 1 : 0;
    var filtered = pool.filter(function (g) {
      var r = DIFF_RANK[g.difficulty];
      return r <= cap && r >= floor;
    });
    if (filtered.length < 5) filtered = pool.filter(function (g) { return DIFF_RANK[g.difficulty] <= cap; });
    if (filtered.length < 5) filtered = pool;

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
    beats = beats.filter(Boolean);

    if (!beats.length) {
      return { beats: [], empty: "No field-tested games match that theme and level yet. Browse the full library while we build it out." };
    }
    var MINUTES = { s45: [6, 8, 10, 10, 11], s60: [8, 10, 12, 14, 16], s90: [12, 15, 18, 20, 25] };
    var roles = ["Warm-up", "Skill builder", "Skill builder", "Integration", "Live application"];
    return {
      beats: beats.map(function (g, i) {
        return { game: g, min: MINUTES[s.length][i], role: roles[i] };
      })
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
