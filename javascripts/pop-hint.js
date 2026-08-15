/* One-time hint for the +-badge hover/tap reveal convention.
   Shows once per browser (localStorage), only on pages that actually
   have expandable cards, dismisses on tap or after 12s.
   Re-runs on Material instant navigation via document$. */
(function () {
  var KEY = "emma-pop-hint-seen";

  function init() {
    try { if (localStorage.getItem(KEY)) return; } catch (e) { return; }
    if (!document.querySelector(".emma-has-pop")) return;
    if (document.querySelector(".emma-pop-hint")) return;

    var el = document.createElement("div");
    el.className = "emma-pop-hint";
    el.setAttribute("role", "status");
    el.innerHTML = "<span>Cards marked <b>+</b> hold more detail. Hover or tap them.</span> <button aria-label='Dismiss'>Got it</button>";
    document.body.appendChild(el);

    function dismiss() {
      try { localStorage.setItem(KEY, "1"); } catch (e) {}
      el.classList.add("emma-pop-hint--out");
      setTimeout(function () { el.remove(); }, 400);
    }
    el.querySelector("button").addEventListener("click", dismiss);
    setTimeout(dismiss, 12000);
  }

  if (window.document$ && window.document$.subscribe) {
    window.document$.subscribe(init);
  } else {
    document.addEventListener("DOMContentLoaded", init);
  }
})();
