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

  // Project page player: variant switching, play/pause, progress/seek and t*.
  const initPlayers = () => {
    document.querySelectorAll("[data-rh-player]").forEach((player) => {
      const video = player.querySelector("video");
      if (!video) return;
      const playButton = player.querySelector("[data-rh-play]");
      const seek = player.querySelector("[data-rh-seek]");
      const fill = player.querySelector("[data-rh-progress]");
      const time = player.querySelector("[data-rh-time]");
      const variantName = player.querySelector("[data-rh-variant-name]");
      const min = player.querySelector("[data-rh-min]");
      const max = player.querySelector("[data-rh-max]");
      const variants = player.querySelectorAll(".rh-variant[data-src]");
      const tEnd = parseFloat(player.dataset.tEnd);

      const fraction = () => (video.duration ? video.currentTime / video.duration : 0);
      const syncPlaying = () => playButton.classList.toggle("is-playing", !video.paused);
      const syncTime = () => {
        fill.style.width = `${fraction() * 100}%`;
        if (time && !isNaN(tEnd)) time.textContent = (fraction() * tEnd).toFixed(2);
      };

      video.addEventListener("play", syncPlaying);
      video.addEventListener("pause", syncPlaying);
      video.addEventListener("timeupdate", syncTime);
      playButton.addEventListener("click", () => {
        if (video.paused) {
          video.play().catch(() => {});
        } else {
          video.pause();
        }
      });
      seek.addEventListener("click", (event) => {
        if (!video.duration) return;
        const rect = seek.getBoundingClientRect();
        video.currentTime = ((event.clientX - rect.left) / rect.width) * video.duration;
      });

      // Switching variant keeps the same point in time and play state.
      variants.forEach((button) => {
        button.addEventListener("click", () => {
          if (button.classList.contains("is-active")) return;
          const at = fraction();
          const wasPlaying = !video.paused;
          variants.forEach((b) => {
            b.classList.toggle("is-active", b === button);
            b.setAttribute("aria-pressed", b === button);
          });
          if (variantName) variantName.textContent = button.dataset.name;
          if (min && button.dataset.min) min.textContent = button.dataset.min;
          if (max && button.dataset.max) max.textContent = button.dataset.max;

          video.replaceChildren();
          [button.dataset.src, button.dataset.mp4].forEach((src) => {
            if (!src) return;
            const source = document.createElement("source");
            source.src = src;
            source.type = src.endsWith(".mp4") ? "video/mp4" : "video/webm";
            video.append(source);
          });
          if (button.dataset.poster) {
            video.poster = button.dataset.poster;
          } else {
            video.removeAttribute("poster");
          }
          video.addEventListener(
            "loadedmetadata",
            () => {
              video.currentTime = at * video.duration;
              if (wasPlaying) video.play().catch(() => {});
            },
            { once: true }
          );
          video.load();
        });
      });
      syncPlaying();
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
  initPlayers();
  loadVisits();
})();
