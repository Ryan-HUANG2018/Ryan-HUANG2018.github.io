---
layout: simulation
title: Transition to chaos in a collapsible channel
description: A 2D channel with two elastic wall segments — depending on Re and the wall mass, the walls stay still or oscillate periodically, through period-doubling, quasi-periodically or chaotically.
importance: 0 # first card (SIM-01)
category: FSI methods
tags: ["2D", "FSI", "Collapsible channel"]
summary: >
  Flow through a two-dimensional channel in which a segment of both walls is elastic, a model of the Starling resistor
  and of collapsible vessels such as compressed coronary arteries. Over 100 ≤ Re ≤ 3000 and wall-to-fluid mass ratios
  0.3 ≤ M ≤ 100, the walls can be steady or oscillate periodically, through period-doubling, quasi-periodically or
  chaotically. Switch between four cases at M = 1, and one with large-amplitude wall oscillation, to compare the jet
  through the throat and the vortices downstream.
  From our 2021 Journal of Fluid Mechanics paper.
thumbnail: assets/video/collapsible-re/preview.webm
thumbnail_poster: assets/video/collapsible-re/preview.jpg
variant_label: case
variants:
  - {
      name: "Re = 200 · periodic",
      src: assets/video/collapsible-re/re200.webm,
      mp4: assets/video/collapsible-re/Collapsible_Re200.mp4,
      poster: assets/video/collapsible-re/re200.jpg,
    }
  - {
      name: "Re = 550 · chaotic",
      src: assets/video/collapsible-re/re550.webm,
      mp4: assets/video/collapsible-re/Collapsible_Re550.mp4,
      poster: assets/video/collapsible-re/re550.jpg,
    }
  - {
      name: "Re = 650 · quasi-periodic",
      src: assets/video/collapsible-re/re650.webm,
      mp4: assets/video/collapsible-re/Collapsible_Re650.mp4,
      poster: assets/video/collapsible-re/re650.jpg,
    }
  - {
      name: "Re = 800 · chaotic",
      src: assets/video/collapsible-re/re800.webm,
      mp4: assets/video/collapsible-re/Collapsible_Re800.mp4,
      poster: assets/video/collapsible-re/re800.jpg,
    }
  - {
      name: "Large-amplitude",
      src: assets/video/collapsible-re/large-amplitude.webm,
      mp4: assets/video/collapsible-re/large-amplitude.mp4,
      poster: assets/video/collapsible-re/large-amplitude.jpg,
    }
media_aspect: 4 / 1
params:
  - { label: Reynolds number, value: "100–3000" }
  - { label: Mass ratio M, value: "0.3–100" }
  - { label: Grid, value: "4000 × 140 (Δx = 0.01D)" }
  - { label: Method, value: IB–LBM + nonlinear beam }
links:
  paper: https://doi.org/10.1017/jfm.2021.710
---

## Setup

A two-dimensional channel of width _D_ has rigid walls upstream (_L<sub>u</sub>_ = 5*D*) and downstream (_L<sub>d</sub>_ = 30*D*). Between them, a segment of length _L_ = 5*D* on both walls is replaced by an elastic beam, loaded by an external pressure _p<sub>e</sub>_. A Poiseuille flow with mean velocity _U_<sub>0</sub> enters on the left, and the outlet pressure is _p<sub>d</sub>_. The elastic walls are initially flat and clamped to the rigid walls at both ends. Extending the classical one-sided collapsible channel to two sides makes the model closer to real vessels and airways, and to the Starling resistor used in experiments.

<div class="rh-figs is-single">
  <figure>
    <img src="{{ '/assets/img/collapsible-channel/schematic.png' | relative_url }}" alt="Schematic of the two-sided collapsible channel: rigid upstream and downstream sections, an elastic wall segment of length L on both sides, inlet velocity U0, external pressure pe and downstream pressure pd" loading="lazy">
    <figcaption class="caption">Two-sided collapsible channel. Both walls are elastic over the length <em>L</em> and are loaded by the external pressure <em>p<sub>e</sub></em>.</figcaption>
  </figure>
</div>

Scaled by _U_<sub>0</sub>, _D_ and the fluid density _ρ_<sub>0</sub>, the system has five governing parameters:

| Parameter            | Definition                                                                                           | Values studied                                                         |
| -------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------- |
| Reynolds number      | _Re_ = _U_<sub>0</sub>_D_ / _ν_                                                                      | 100–3000                                                               |
| Mass ratio           | _M_ = _ρ<sub>s</sub>_ / (_ρ_<sub>0</sub>_D_)                                                         | 0.3–100                                                                |
| Stretching stiffness | _K<sub>s</sub>_ = _Eh_ / (_ρ_<sub>0</sub>_U_<sub>0</sub><sup>2</sup>_D_)                             | 2400                                                                   |
| Bending stiffness    | _K<sub>b</sub>_ = _EI_ / (_ρ_<sub>0</sub>_U_<sub>0</sub><sup>2</sup>_D_<sup>3</sup>)                 | _K<sub>b</sub>_ / _K<sub>s</sub>_ ≈ 10<sup>−5</sup> (_h_ = 1 % of _D_) |
| External pressure    | _P<sub>e</sub>_ = (_p<sub>e</sub>_ − _p<sub>d</sub>_) / (_ρ_<sub>0</sub>_U_<sub>0</sub><sup>2</sup>) | 1–10 (1.95 for the regime map)                                         |

The fluid is solved with a D2Q9 multi-relaxation-time lattice Boltzmann method, and the walls with a geometrically nonlinear beam equation discretised by finite differences. An iterative feedback immersed boundary method couples the two: it reduces velocity slip on the walls and improves mass conservation in confined flows. The solver was validated against the one-sided collapsible channel of Luo et al. (2008), and a grid of 4000 × 140 lattice nodes (Δ*x* = 0.01*D*) was chosen after a mesh-independence study.

## Results

**Regime map.** Each case is classified from the wall-motion time history, its power spectrum, the phase portrait of the wall mid-point and the dominant Lyapunov exponent. Chaos appears mainly at high _Re_ with light walls, or at low _Re_ with heavy walls. At _M_ = 50 and 100 only chaotic states are found.

<div class="rh-figs is-single">
  <figure>
    <img src="{{ '/assets/img/collapsible-channel/regime-map.png' | relative_url }}" alt="Regime map in the Reynolds number–mass ratio plane, with Re from 100 to 1000 and M from 0.3 to 100, marking steady, periodic, period-doubling, quasi-periodic and chaotic cases" loading="lazy">
    <figcaption class="caption">Motion states in the (<em>Re</em>, <em>M</em>) plane, <em>K<sub>s</sub></em> = 2400, <em>P<sub>e</sub></em> = 1.95.</figcaption>
  </figure>
</div>

**Routes to chaos at _M_ = 1.** The channel is steady at _Re_ = 100. A supercritical Hopf bifurcation then gives a period-1 limit-cycle oscillation at _Re_ = 150–200. The walls are steady again for 250 ≤ _Re_ ≤ 500, become chaotic at _Re_ = 550, show period-doubling at _Re_ = 600 and are quasi-periodic at _Re_ = 650, before returning to chaos at _Re_ = 800. This second path follows the quasi-periodic (Ruelle–Takens–Newhouse) route. At _M_ = 3 the system instead reaches chaos at _Re_ = 200 by period-doubling, the classical Feigenbaum route.

<div class="rh-vort">
  <figure>
    <video data-rh-autoplay muted loop playsinline poster="{{ '/assets/video/collapsible-re/vorticity-m1-re100.jpg' | relative_url }}" aria-label="Vorticity at Re = 100, M = 1: steady">
      <source src="{{ '/assets/video/collapsible-re/vorticity-m1-re100.webm' | relative_url }}" type="video/webm">
      <source src="{{ '/assets/video/collapsible-re/vorticity-m1-re100.mp4' | relative_url }}" type="video/mp4">
    </video>
    <figcaption><span>Re = 100</span><span>steady</span></figcaption>
  </figure>
  <figure>
    <video data-rh-autoplay muted loop playsinline poster="{{ '/assets/video/collapsible-re/vorticity-m1-re200.jpg' | relative_url }}" aria-label="Vorticity at Re = 200, M = 1: periodic">
      <source src="{{ '/assets/video/collapsible-re/vorticity-m1-re200.webm' | relative_url }}" type="video/webm">
      <source src="{{ '/assets/video/collapsible-re/vorticity-m1-re200.mp4' | relative_url }}" type="video/mp4">
    </video>
    <figcaption><span>Re = 200</span><span>periodic</span></figcaption>
  </figure>
  <figure>
    <video data-rh-autoplay muted loop playsinline poster="{{ '/assets/video/collapsible-re/vorticity-m1-re600.jpg' | relative_url }}" aria-label="Vorticity at Re = 600, M = 1: period-doubling">
      <source src="{{ '/assets/video/collapsible-re/vorticity-m1-re600.webm' | relative_url }}" type="video/webm">
      <source src="{{ '/assets/video/collapsible-re/vorticity-m1-re600.mp4' | relative_url }}" type="video/mp4">
    </video>
    <figcaption><span>Re = 600</span><span>period-doubling</span></figcaption>
  </figure>
  <figure>
    <video data-rh-autoplay muted loop playsinline poster="{{ '/assets/video/collapsible-re/vorticity-m1-re800.jpg' | relative_url }}" aria-label="Vorticity at Re = 800, M = 1: chaotic">
      <source src="{{ '/assets/video/collapsible-re/vorticity-m1-re800.webm' | relative_url }}" type="video/webm">
      <source src="{{ '/assets/video/collapsible-re/vorticity-m1-re800.mp4' | relative_url }}" type="video/mp4">
    </video>
    <figcaption><span>Re = 800</span><span>chaotic</span></figcaption>
  </figure>
</div>

The dominant Lyapunov exponents confirm the classification (_M_ = 1, _K<sub>s</sub>_ = 2400, _P<sub>e</sub>_ = 1.95):

| _Re_ | Motion state    | Lyapunov exponent _λ_ |
| ---- | --------------- | --------------------- |
| 100  | steady          | —                     |
| 200  | periodic        | 0.0021                |
| 500  | steady          | —                     |
| 550  | chaotic         | 0.0385                |
| 600  | period-doubling | 0.0076                |
| 650  | quasi-periodic  | 0.0124                |
| 800  | chaotic         | 0.0417                |

**Mechanisms.**

- Increasing _Re_ breaks the symmetry of the jet through a supercritical pitchfork bifurcation, but this alone does not make the walls oscillate: symmetry breaking is not a prerequisite for self-excited oscillations.
- The oscillations are driven by the unbalanced transmural pressure, the wall inertia and shear-layer instabilities in the vorticity waves downstream of the throat.
- Period-doubling, quasi-periodic and chaotic states come with vortex pairing and merging, and with interactions between the vortex rows on the upper and lower walls.
- For a heavy wall, travelling-wave flutter along the elastic walls breaks their symmetry and triggers chaos. High mass ratio and external pressure produce large-amplitude oscillations.

## Publication

Huang, Q., Tian, F.-B., Young, J. & Lai, J.C.S. (2021). Transition to chaos in a two-sided collapsible channel flow. _Journal of Fluid Mechanics_ 926, A15.

Luo, X.Y., Cai, Z.X., Li, W.G. & Pedley, T.J. (2008). The cascade structure of linear instability in collapsible channel flows. _Journal of Fluid Mechanics_ 600, 45–76.
