/* Client-side progress tracking (no backend, localStorage only).
   - Adds a "Mark complete" toggle on each game page.
   - Renders a progress bar + completion ticks on Learning Path pages.
   Re-runs on Material instant navigation via document$. */
(function () {
  var KEY = "emma-progress-v1";

  function load() {
    try { return new Set(JSON.parse(localStorage.getItem(KEY) || "[]")); }
    catch (e) { return new Set(); }
  }
  function save(set) {
    try { localStorage.setItem(KEY, JSON.stringify(Array.from(set))); } catch (e) {}
  }
  function slugFromHref(href) {
    var m = href && href.match(/\/games\/([a-z0-9-]+)\/?(?:$|[#?])/i);
    return m ? m[1] : null;
  }
  function currentGameSlug() {
    var m = location.pathname.match(/\/games\/([a-z0-9-]+)\/?$/i);
    return (m && m[1] !== "index") ? m[1] : null;
  }
  function isPathPage() {
    return /\/paths\/[a-z0-9-]+\/?$/i.test(location.pathname);
  }

  /* --- game page: mark-complete toggle --- */
  function initGameToggle() {
    var slug = currentGameSlug();
    if (!slug) return;
    if (document.querySelector(".emma-progress-toggle")) return;
    var anchor = document.querySelector(".md-typeset .emma-meta")
              || document.querySelector(".md-typeset .emma-phero");
    if (!anchor) return;

    function render(btn, done) {
      btn.classList.toggle("is-done", done);
      btn.querySelector(".ico").textContent = done ? "✓" : "○";
      btn.querySelector(".lbl").textContent = done ? "Completed" : "Mark complete";
    }
    var done = load().has(slug);
    var btn = document.createElement("button");
    btn.type = "button";
    btn.className = "emma-progress-toggle";
    btn.innerHTML = '<span class="ico"></span><span class="lbl"></span>';
    render(btn, done);
    btn.addEventListener("click", function () {
      var set = load();
      if (set.has(slug)) set.delete(slug); else set.add(slug);
      save(set);
      render(btn, set.has(slug));
    });
    anchor.insertAdjacentElement("afterend", btn);
  }

  /* --- path page: progress bar + ticks on completed games --- */
  function initPathProgress() {
    if (!isPathPage()) return;
    var content = document.querySelector(".md-typeset");
    if (!content) return;
    var links = Array.prototype.slice.call(content.querySelectorAll('a[href*="/games/"]'));
    var slugs = [];
    links.forEach(function (a) {
      var s = slugFromHref(a.getAttribute("href"));
      if (s && slugs.indexOf(s) < 0) slugs.push(s);
    });
    if (slugs.length < 2) return;

    var set = load();
    var doneCount = slugs.filter(function (s) { return set.has(s); }).length;
    var pct = Math.round((doneCount / slugs.length) * 100);

    // tick completed game links
    links.forEach(function (a) {
      var s = slugFromHref(a.getAttribute("href"));
      if (set.has(s) && !a.querySelector(".emma-done-tick")) {
        var t = document.createElement("span");
        t.className = "emma-done-tick";
        t.textContent = "✓";
        a.appendChild(t);
      }
    });

    if (document.querySelector(".emma-progress-bar")) return;
    var bar = document.createElement("div");
    bar.className = "emma-progress-bar" + (pct === 100 ? " is-complete" : "");
    bar.innerHTML =
      '<div class="emma-progress-bar__meta"><span>Your progress</span>' +
      '<span class="emma-progress-bar__count">' + doneCount + ' / ' + slugs.length +
      (pct === 100 ? '  ✓ complete' : '') + '</span></div>' +
      '<div class="emma-progress-bar__track"><div class="emma-progress-bar__fill" style="width:' + pct + '%"></div></div>';
    var intro = content.querySelector("p");
    if (intro) intro.insertAdjacentElement("afterend", bar);
    else content.insertAdjacentElement("afterbegin", bar);
  }

  function init() {
    initGameToggle();
    initPathProgress();
  }

  if (window.document$ && typeof window.document$.subscribe === "function") {
    window.document$.subscribe(init);
  } else if (document.readyState !== "loading") {
    init();
  } else {
    document.addEventListener("DOMContentLoaded", init);
  }
})();
