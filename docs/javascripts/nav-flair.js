/* Nav v2 "fight map" (post-Codex 2026-07-05).
   Structures the desktop sidebar into section bands with ghost numerals,
   live per-band progress (from progress.js's localStorage set), completion
   ticks, WIP chips, and a "you are here" context panel on game pages.
   All decoration is idempotent and re-runs on Material instant navigation. */
(function () {
  var KEY = "emma-progress-v1";

  function completedSet() {
    try { return new Set(JSON.parse(localStorage.getItem(KEY) || "[]")); }
    catch (e) { return new Set(); }
  }
  /* Codex fix #2: resolve relative hrefs before slug matching */
  function slugFromLink(link) {
    var href = link.getAttribute("href");
    if (!href) return null;
    var path;
    try { path = new URL(href, location.href).pathname; }
    catch (e) { return null; }
    var m = path.match(/\/games\/([a-z0-9-]+)\/?$/i);
    return (m && m[1] !== "index") ? m[1] : null;
  }
  function currentGameSlug() {
    var m = location.pathname.match(/\/games\/([a-z0-9-]+)\/?$/i);
    return (m && m[1] !== "index") ? m[1] : null;
  }
  function pad2(n) { return n < 10 ? "0" + n : "" + n; }

  /* ---- structure: classify wrapper / bands / sub-groups ---- */
  function classify(sidebar) {
    var primary = sidebar.querySelector(".md-nav--primary");
    if (!primary) return;
    var topItems = primary.querySelectorAll(":scope > .md-nav__list > .md-nav__item--section");

    if (topItems.length === 1) {
      /* single tab-wrapper: its children are the bands */
      var root = topItems[0];
      root.classList.add("emma-nav-root");
      var bands = root.querySelectorAll(":scope > .md-nav > .md-nav__list > .md-nav__item--section");
      bands.forEach(function (band, i) { markBand(band, i + 1); });
    } else {
      /* no wrapper (or several): top sections are the bands themselves */
      topItems.forEach(function (band, i) { markBand(band, i + 1); });
    }
  }
  function markBand(band, n) {
    band.classList.add("emma-nav-band");
    var face = band.querySelector(":scope > .md-nav__container") || band.querySelector(":scope > .md-nav__link");
    if (face) face.setAttribute("data-num", pad2(n));
    /* deeper sections inside a band are sub-group eyebrows */
    band.querySelectorAll(".md-nav__item--section").forEach(function (sub) {
      sub.classList.add("emma-nav-sub");
    });
  }

  /* ---- per-band progress: count chip + ember rail ---- */
  function bandProgress(sidebar, done) {
    sidebar.querySelectorAll(".emma-nav-band").forEach(function (band) {
      var slugs = [];
      band.querySelectorAll("a.md-nav__link").forEach(function (a) {
        var s = slugFromLink(a);
        if (s) slugs.push(s);
      });
      var face = band.querySelector(":scope > .md-nav__container") || band.querySelector(":scope > .md-nav__link");
      if (!face) return;
      var count = face.querySelector(".emma-band-count");
      var rail = face.querySelector(".emma-band-rail");
      if (!slugs.length) { if (count) count.remove(); if (rail) rail.remove(); return; }
      var doneN = slugs.filter(function (s) { return done.has(s); }).length;
      if (!count) {
        count = document.createElement("span");
        count.className = "emma-band-count";
        face.appendChild(count);
      }
      count.textContent = doneN > 0 ? (doneN + " of " + slugs.length + " complete") : (slugs.length + " games");
      if (!rail) {
        rail = document.createElement("span");
        rail.className = "emma-band-rail";
        rail.setAttribute("aria-hidden", "true");
        rail.appendChild(document.createElement("i"));
        face.appendChild(rail);
      }
      rail.firstChild.style.width = Math.round((doneN / slugs.length) * 100) + "%";
    });
  }

  /* ---- link flair: WIP chips + completion ticks (Codex fixes #6, #7) ---- */
  function linkFlair(scope, done) {
    scope.querySelectorAll(".md-nav__link, .md-tabs__link").forEach(function (link) {
      if (!link.dataset.emmaWip) {
        link.dataset.emmaWip = "1";
        var label = link.querySelector(".md-ellipsis") || link;
        label.childNodes.forEach(function (node) {
          if (node.nodeType === 3 && /\(WIP\)/.test(node.nodeValue)) {
            var frag = document.createDocumentFragment();
            frag.appendChild(document.createTextNode(node.nodeValue.split(/\s*\(WIP\)\s*/).join(" ").trim()));
            var chip = document.createElement("span");
            chip.className = "emma-nav-wip";
            chip.setAttribute("aria-hidden", "true");
            chip.textContent = "WIP";
            frag.appendChild(chip);
            var sr = document.createElement("span");
            sr.className = "emma-visually-hidden";
            sr.textContent = " (work in progress)";
            frag.appendChild(sr);
            node.parentNode.replaceChild(frag, node);
          }
        });
      }
      var slug = slugFromLink(link);
      var tick = link.querySelector(".emma-nav-tick");
      if (slug && done.has(slug)) {
        if (!tick) {
          tick = document.createElement("span");
          tick.className = "emma-nav-tick";
          tick.setAttribute("aria-hidden", "true");
          tick.textContent = "✓";
          var sr2 = document.createElement("span");
          sr2.className = "emma-visually-hidden";
          sr2.textContent = " (completed)";
          var target = link.querySelector(".md-ellipsis") || link;
          target.appendChild(tick);
          target.appendChild(sr2);
        }
      } else if (tick) {
        var srOld = link.querySelector(".emma-visually-hidden");
        tick.remove();
        if (srOld && /completed/.test(srOld.textContent)) srOld.remove();
      }
    });
  }

  /* ---- context panel: "you are here" on game pages (desktop) ---- */
  function contextPanel(sidebar, done) {
    var old = sidebar.querySelector(".emma-nav-context");
    if (old) old.remove();
    var slug = currentGameSlug();
    if (!slug) return;
    var scroll = sidebar.querySelector(".md-sidebar__scrollwrap .md-nav--primary");
    if (!scroll) return;

    var h1 = document.querySelector(".md-content h1");
    var title = h1 ? h1.textContent.replace(/\(WIP\)/, "").replace(/¶/, "").trim() : slug;
    var isDone = done.has(slug);
    var nextA = document.querySelector(".md-footer__link--next");
    var nextEl = nextA ? (nextA.querySelector(".md-ellipsis") || nextA.querySelector(".md-footer__title") || nextA) : null;
    var nextTitle = nextEl ? nextEl.textContent.replace(/^\s*Next\s*/i, "").trim() : null;

    var card = document.createElement("div");
    card.className = "emma-nav-context";
    var img = document.createElement("img");
    img.src = new URL("../../assets/img/heroes/" + slug + ".png", location.href).href;
    img.alt = "";
    img.onerror = function () { img.remove(); };
    card.appendChild(img);
    var body = document.createElement("div");
    body.className = "cx-body";
    body.innerHTML =
      '<span class="cx-eyebrow">You are here</span>' +
      '<div class="cx-title"></div>' +
      '<span class="cx-state ' + (isDone ? "is-done" : "is-open") + '">' + (isDone ? "Completed" : "In progress") + "</span>";
    body.querySelector(".cx-title").textContent = title;
    if (nextA && nextTitle) {
      var nx = document.createElement("a");
      nx.className = "cx-next";
      nx.href = nextA.href;
      nx.innerHTML = 'Up next → <b></b>';
      nx.querySelector("b").textContent = nextTitle;
      body.appendChild(nx);
    }
    card.appendChild(body);
    scroll.parentNode.insertBefore(card, scroll);
  }

  function decorate() {
    var done = completedSet();
    var sidebar = document.querySelector(".md-sidebar--primary");
    if (sidebar) {
      classify(sidebar);
      bandProgress(sidebar, done);
      contextPanel(sidebar, done);
    }
    linkFlair(document, done);
  }

  /* refresh when the mark-complete toggle fires (same tab) or another tab changes progress */
  window.addEventListener("storage", decorate);
  document.addEventListener("click", function (e) {
    if (e.target.closest && e.target.closest(".emma-progress-toggle")) {
      setTimeout(decorate, 60);
    }
  });

  if (window.document$ && window.document$.subscribe) {
    window.document$.subscribe(decorate);
  } else {
    document.addEventListener("DOMContentLoaded", decorate);
  }
})();
