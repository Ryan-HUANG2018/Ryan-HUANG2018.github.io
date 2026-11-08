---
layout: simulation
title: FSI benchmarks — flexible filament and flapping flag
description: Two standard fluid–structure interaction benchmarks, a 2D flexible filament and a 3D flapping flag, compared with published results.
importance: 12
category: FSI methods
tags: ["2D", "3D", "FSI", "Verification"]
summary: >
  A flexible filament in a uniform flow (2D) and a flapping flag (3D), solved with my coupled immersed
  boundary–lattice Boltzmann and structural solvers, and compared with published results.
thumbnail: assets/video/fsi-benchmarks/preview.webm
thumbnail_poster: assets/video/fsi-benchmarks/preview.jpg
variant_label: case
variants:
  - {
      name: Flexible filament (2D),
      src: assets/video/fsi-benchmarks/filament-2d.webm,
      mp4: assets/video/fsi-benchmarks/filament-2d.mp4,
      poster: assets/video/fsi-benchmarks/filament-2d.jpg,
    }
  - {
      name: Flapping flag (3D),
      src: assets/video/fsi-benchmarks/flag-3d.webm,
      mp4: assets/video/fsi-benchmarks/flag-3d.mp4,
      poster: assets/video/fsi-benchmarks/flag-3d.jpg,
    }
media_aspect: 3 / 2
params:
  - { label: Reynolds number (2D), value: "100" }
  - { label: Mass ratio (2D), value: "1" }
  - { label: Stretching / bending (2D), value: "500 / 0.0001" }
  - { label: Method, value: IB–LBM + own structural solvers }
---

## Setup

Slender elastic bodies coupled to the flow are a standard test of a fluid–structure interaction solver. Both cases use my immersed boundary–lattice Boltzmann (IB–LBM) flow solver, coupled to my own structural solvers (see [Structural solver verification]({{ '/projects/structural-solver-verification/' | relative_url }})).

- **2D flexible filament** in a uniform flow at Re = 100, with mass ratio 1, stretching stiffness 500 and bending stiffness 0.0001.
- **3D flapping flag**: a flexible plate in a uniform flow, with the same IB–LBM coupling.

## Results

**Flexible filament.** The transverse (y) and streamwise (x) positions of the trailing end follow the results of Tian et al. and Wang et al. (2017).

**Flapping flag.** The flag motion matches Tian et al. (2014).

<div class="rh-figs">
  <figure>
    <img src="{{ '/assets/img/fsi-benchmarks/filament-y.png' | relative_url }}" alt="Transverse position of the filament trailing end compared with Tian et al. and Wang et al. (2017)" loading="lazy">
    <figcaption class="caption">2D filament: transverse position of the trailing end, compared with Tian et al. and Wang et al. (2017).</figcaption>
  </figure>
  <figure>
    <img src="{{ '/assets/img/fsi-benchmarks/filament-x.png' | relative_url }}" alt="Streamwise position of the filament trailing end compared with Tian et al. and Wang et al. (2017)" loading="lazy">
    <figcaption class="caption">2D filament: streamwise position of the trailing end, compared with Tian et al. and Wang et al. (2017).</figcaption>
  </figure>
  <figure>
    <img src="{{ '/assets/img/fsi-benchmarks/flag-z.png' | relative_url }}" alt="Flag motion compared with Tian et al. (2014)" loading="lazy">
    <figcaption class="caption">3D flag: motion compared with Tian et al. (2014).</figcaption>
  </figure>
</div>
