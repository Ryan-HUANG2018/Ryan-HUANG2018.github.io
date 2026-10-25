// Front-end behaviour for the redesign (docs/redesign/REDESIGN.md).
(function () {
  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)");

  // Autoplaying simulation videos stay paused when the viewer prefers reduced motion.
  const syncAutoplay = () => {
    document.querySelectorAll("video[data-rh-autoplay]").forEach((video) => {
      if (reduceMotion.matches) {
        video.pause();
      } else {
        video.play().catch(() => {});
      }
    });
  };

  // Public visit total from GoatCounter, shown in the footer once it loads.
  const loadVisits = () => {
    const el = document.querySelector("[data-rh-visits]");
    if (!el) return;
    fetch(el.dataset.rhVisits)
      .then((res) => (res.ok ? res.json() : Promise.reject(res.status)))
      .then((data) => {
        el.querySelector("[data-rh-visits-count]").textContent = data.count;
        el.hidden = false;
      })
      .catch(() => {});
  };

  syncAutoplay();
  reduceMotion.addEventListener("change", syncAutoplay);
  loadVisits();
})();
