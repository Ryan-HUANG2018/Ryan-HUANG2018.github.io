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

  // Simulation cards play their preview only while hovered or focused.
  const initHoverPlay = () => {
    document.querySelectorAll("video[data-rh-hover-play]").forEach((video) => {
      const card = video.closest(".rh-card") || video;
      const play = () => {
        if (!reduceMotion.matches) video.play().catch(() => {});
      };
      const stop = () => video.pause();
      card.addEventListener("mouseenter", play);
      card.addEventListener("focus", play);
      card.addEventListener("mouseleave", stop);
      card.addEventListener("blur", stop);
    });
  };

  // Category chips above the simulation grid; matches each card's data-rh-category.
  const initFilters = () => {
    document.querySelectorAll(".rh-filters").forEach((group) => {
      const grid = group.closest("section").querySelector(".rh-grid");
      const chips = group.querySelectorAll("[data-rh-filter]");
      chips.forEach((chip) => {
        chip.addEventListener("click", () => {
          const filter = chip.dataset.rhFilter;
          chips.forEach((c) => {
            c.classList.toggle("is-active", c === chip);
            c.setAttribute("aria-pressed", c === chip);
          });
          grid.querySelectorAll("[data-rh-category]").forEach((card) => {
            card.hidden = filter !== "all" && card.dataset.rhCategory !== filter;
          });
        });
      });
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
  initHoverPlay();
  initFilters();
  loadVisits();
})();
