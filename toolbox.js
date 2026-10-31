/* ============================================================
   CA Toolbox — shared chrome injector for all hosted tools
   Loaded with: <script src="/toolbox.js" data-tool="Tool Name" defer></script>
   Injects the standard top bar, a footer (when the tool has none),
   and powers the inline ⓘ help buttons (.tb-i with data-help="…").
   ============================================================ */
(function () {
  "use strict";

  var TOOL = (document.currentScript && document.currentScript.dataset.tool) ||
    document.title.replace(/\s*[—–-].*$/, "").trim() || "CA Toolbox Tool";

  function el(tag, cls, html) {
    var e = document.createElement(tag);
    if (cls) e.className = cls;
    if (html != null) e.innerHTML = html;
    return e;
  }

  function esc(s) {
    return String(s == null ? "" : s)
      .replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;").replace(/'/g, "&#39;");
  }

  /* ── Top bar ── */
  var bar = el("div", "tb-bar");
  bar.innerHTML =
    '<a href="/" title="Back to CA Toolbox">← CA Toolbox</a>' +
    '<span class="tb-sep">·</span>' +
    '<span class="tb-name">' + esc(TOOL) + "</span>" +
    '<span class="tb-privacy">🔒 100% in-browser — your data never leaves this device</span>';
  document.body.prepend(bar);
  document.body.classList.add("has-tbbar");

  /* ── Footer (only when the tool has no footer of its own) ── */
  function addFooter() {
    if (document.querySelector("footer")) return;
    var host = document.body;
    if (getComputedStyle(document.body).display === "flex") {
      var main = document.querySelector("main") || document.querySelector("#main");
      if (main) host = main; // flex-row layouts: put the footer inside the main column
    }
    host.appendChild(el("div", "tb-footer",
      "🔒 Runs entirely in your browser — nothing is uploaded to any server · A <a href='/' style='color:inherit'>CA Toolbox</a> tool"));
  }

  /* ── ⓘ help popover ── */
  var pop = null;
  function closePop() { if (pop) { pop.remove(); pop = null; } }
  function openPop(btn) {
    closePop();
    pop = el("div", "tb-pop", esc(btn.dataset.help || ""));
    document.body.appendChild(pop);
    var r = btn.getBoundingClientRect();
    var top, left = Math.max(8, Math.min(r.left, window.innerWidth - pop.offsetWidth - 8));
    if (r.bottom + 6 + pop.offsetHeight > window.innerHeight && r.top - pop.offsetHeight - 6 >= 0) {
      top = r.top - pop.offsetHeight - 6;          // flip above when below the fold
    } else {
      top = Math.min(r.bottom + 6, window.innerHeight - pop.offsetHeight - 8);
    }
    pop.style.left = left + "px";
    pop.style.top = top + "px";
  }

  // Capture phase: swallow the click before the host page's own handlers
  // (e.g. clickable cards) can react to it.
  document.addEventListener("click", function (e) {
    var btn = e.target.closest(".tb-i");
    if (btn) {
      e.preventDefault();
      e.stopPropagation();
      if (pop && pop._for === btn) closePop();
      else { openPop(btn); pop._for = btn; }
      return;
    }
    if (pop && !e.target.closest(".tb-pop")) closePop();
  }, true);
  window.addEventListener("scroll", closePop, true);
  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape") closePop();
  });

  /* ── Init after DOM is ready ── */
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", addFooter);
  } else {
    addFooter();
  }
})();
