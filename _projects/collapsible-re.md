---
layout: simulation
title: Transition to chaos in a collapsible channel
description: A 2D channel with two elastic wall segments — as the Reynolds number rises, the flow goes from steady to periodic, period-doubling and chaotic.
importance: 0 # first card (SIM-01)
category: FSI methods
tags: ["2D", "FSI", "Collapsible channel"]
summary: >
  Flow through a two-dimensional channel in which a segment of both walls is elastic. Depending on the Reynolds
  number and the wall-to-fluid mass ratio, the walls stay still or oscillate periodically, through period-doubling
  or chaotically. Switch between Re = 250, 550, 650 and 800 to compare the jet through the collapsed segment and
  the downstream wake. From our 2021 Journal of Fluid Mechanics paper.
thumbnail: assets/video/collapsible-re/preview.webm
thumbnail_poster: assets/video/collapsible-re/preview.jpg
variant_label: case
variants:
  - {
      name: "Re = 250",
      src: assets/video/collapsible-re/re250.webm,
      mp4: assets/video/collapsible-re/Collapsible_Re250.mp4,
      poster: assets/video/collapsible-re/re250.jpg,
    }
  - {
      name: "Re = 550",
      src: assets/video/collapsible-re/re550.webm,
      mp4: assets/video/collapsible-re/Collapsible_Re550.mp4,
      poster: assets/video/collapsible-re/re550.jpg,
    }
  - {
      name: "Re = 650",
      src: assets/video/collapsible-re/re650.webm,
      mp4: assets/video/collapsible-re/Collapsible_Re650.mp4,
      poster: assets/video/collapsible-re/re650.jpg,
    }
  - {
      name: "Re = 800",
      src: assets/video/collapsible-re/re800.webm,
      mp4: assets/video/collapsible-re/Collapsible_Re800.mp4,
      poster: assets/video/collapsible-re/re800.jpg,
    }
media_aspect: 4 / 1
params:
  - { label: Reynolds number (map), value: "100–1000" }
  - { label: Mass ratio M, value: "0.3–100" }
  - { label: Dynamic regimes, value: "5" }
  - { label: Method, value: IB–LBM + nonlinear beam }
links:
  paper: https://doi.org/10.1017/jfm.2021.710
---

## Setup

A two-dimensional channel of width _D_ has rigid walls upstream (length _L<sub>u</sub>_) and downstream (_L<sub>d</sub>_). Between them, a segment of length _L_ on both walls is elastic. A parabolic velocity profile with mean speed _U_<sub>0</sub> enters on the left, an external pressure _p<sub>e</sub>_ acts on the outside of the elastic walls, and the pressure at the outlet is _p<sub>d</sub>_.

<div class="rh-figs is-single">
  <figure>
    <img src="{{ '/assets/img/collapsible-channel/schematic.png' | relative_url }}" alt="Schematic of the two-sided collapsible channel: rigid upstream and downstream sections, an elastic wall segment of length L on both sides, inlet velocity U0, external pressure pe and downstream pressure pd" loading="lazy">
    <figcaption class="caption">Two-sided collapsible channel. Both walls are elastic over the length <em>L</em> and are loaded by the external pressure <em>p<sub>e</sub></em>.</figcaption>
  </figure>
</div>

The flow is governed by four parameters:

- **Reynolds number** _Re_, based on _U_<sub>0</sub> and _D_;
- **mass ratio** _M_ between the elastic wall and the fluid;
- the wall's **stretching stiffness**; and
- the wall's **bending stiffness**.

The flow is solved with my immersed boundary–lattice Boltzmann method, and the walls with a geometrically nonlinear beam model. The coupled solver was first validated on the one-sided collapsible channel of Luo et al. (2008).

## Results

At a mass ratio of _M_ = 1, raising the Reynolds number takes the flow from steady to periodic, then period-doubling, and finally chaotic. The vorticity fields below show one case from each regime.

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

The regime map places every case in the (_Re_, _M_) plane. Besides the four states above, some cases are quasi-periodic. A heavier wall becomes chaotic at a much lower Reynolds number: at _M_ = 1 the first chaotic case appears at _Re_ = 550, while at _M_ = 20 and above the flow is already chaotic at _Re_ = 200.

<div class="rh-figs is-single">
  <figure>
    <img src="{{ '/assets/img/collapsible-channel/regime-map.png' | relative_url }}" alt="Regime map in the Reynolds number–mass ratio plane, with Re from 100 to 1000 and M from 0.3 to 100, marking steady, periodic, period-doubling, quasi-periodic and chaotic cases" loading="lazy">
    <figcaption class="caption">Regime map in the (<em>Re</em>, <em>M</em>) plane. The row at <em>M</em> = 1 corresponds to the vorticity fields above.</figcaption>
  </figure>
</div>

## Publication

Huang, Q., Tian, F.-B., Young, J. & Lai, J.C.S. (2021). Transition to chaos in a two-sided collapsible channel flow. _Journal of Fluid Mechanics_ 926, A15.

Luo, X.Y., Cai, Z.X., Li, W.G. & Pedley, T.J. (2008). The cascade structure of linear instability in collapsible channel flows. _Journal of Fluid Mechanics_ 600, 45–76.
