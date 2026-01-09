(function () {
  const px = 100;
  const el = document.querySelector("#header");
  if (!el) return;

  function onScroll() {
    el.classList.toggle("is-scrolled", window.scrollY >= px);
  }

  // Run once on load in case user refreshes mid-page
  onScroll();

  window.addEventListener("scroll", onScroll, { passive: true });
})();
