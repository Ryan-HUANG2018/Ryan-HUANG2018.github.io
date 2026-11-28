---
layout: simulation
title: A red blood cell squeezing through a microchannel constriction
description: A deformable capsule or red blood cell passes through a narrow constriction, with Newtonian or viscoelastic fluid inside and outside the membrane.
importance: 4.2 # after the FSI benchmarks; placement not yet confirmed by Ryan
category: Cardiovascular
also: [Multiphase] # two fluids separated by the membrane (Ryan picked this, 2026-11-28)
tags: ["3D", "FSI", "Two-fluid", "Viscoelastic", "Red blood cell"]
stack: ["LBM", "Immersed boundary", "Fortran"]
summary: >
  A deformable capsule, or a red blood cell, is carried by pressure-driven flow through a square microchannel with a
  narrow constriction. Blood plasma and the cytoplasm inside a cell are both viscoelastic, so the study asks how the
  rheology of the fluid inside and outside the membrane changes the way the cell deforms and moves through the
  constriction. The animation shows a red blood cell at Weissenberg number Wi = 2.0. From a 2023 Physics of Fluids
  paper led by J. Ma (Editor's Pick); I assisted with the study.
thumbnail: assets/video/capsule-constriction/preview.webm
thumbnail_poster: assets/video/capsule-constriction/preview.jpg
variants:
  - {
      name: Red blood cell,
      src: assets/video/capsule-constriction/rbc-constriction.webm,
      mp4: assets/video/capsule-constriction/rbc-constriction.mp4,
      poster: assets/video/capsule-constriction/rbc-constriction.jpg,
    }
media_aspect: 1000 / 232
params:
  - { label: Channel, value: "20 Hc × 4 Hc × 4 Hc" }
  - { label: Constriction, value: "4 Hc long, Hc high" }
  - { label: Viscoelastic model, value: FENE-CR }
  - { label: Membrane, value: Neo-Hookean / Skalak + Helfrich bending }
links:
  paper: https://doi.org/10.1063/5.0165614
---

## Setup

The microchannel has a square cross-section of 4*H<sub>c</sub>* × 4*H<sub>c</sub>* and a length of 20*H<sub>c</sub>*, with a constriction segment 4*H<sub>c</sub>* long and _H<sub>c</sub>_ high. A fully developed laminar profile enters at the inlet, the outlet has Neumann conditions and the walls are no-slip.

<div class="rh-figs is-single is-narrow">
  <figure>
    <img src="{{ '/assets/img/capsule-constriction/geometry.jpg' | relative_url }}" alt="Microchannel geometry: square cross-section 4Hc by 4Hc, length 20Hc, with a constriction segment 4Hc long and Hc high" loading="lazy">
    <figcaption>Microchannel with a constriction segment. Figure from Ma et al. (2023), <em>Physics of Fluids</em> (AIP Publishing).</figcaption>
  </figure>
</div>

The capsule membrane is an elastic surface of zero thickness with stretching and bending resistance. Stretching follows either the strain-softening neo-Hookean law or the strain-hardening Skalak law, and bending follows the Helfrich energy model. The viscoelastic fluid is a Boger fluid described by the FENE-CR constitutive equation. A front-tracking step marks which fluid is inside and which is outside the membrane, so the two can have different properties: a Newtonian or viscoelastic capsule in a viscoelastic or Newtonian matrix. This makes it a two-fluid problem, with the membrane as the moving interface between the phases. The flow and the membrane are coupled with the immersed boundary–lattice Boltzmann framework, so the membrane moves freely through a fixed grid.

## Results

The capsule's lengths oscillate as it passes through the constriction, and the passage shows three stages of evolution. The study compares four combinations of inner and outer fluid (Newtonian or viscoelastic) and repeats the comparison for a red blood cell, which takes on a crescent, parachute-like shape inside the constriction.

<div class="rh-figs is-single">
  <figure>
    <img src="{{ '/assets/img/capsule-constriction/capsule-positions.jpg' | relative_url }}" alt="Capsule profiles at Wi = 2.0 at four positions before, inside and after the constriction" loading="lazy">
    <figcaption>Capsule profiles at <em>Wi</em> = 2.0 as it enters, crosses and leaves the constriction. Figure from Ma et al. (2023), <em>Physics of Fluids</em> (AIP Publishing).</figcaption>
  </figure>
</div>

<div class="rh-figs is-single">
  <figure>
    <img src="{{ '/assets/img/capsule-constriction/rbc-profiles.jpg' | relative_url }}" alt="Red blood cell shapes at successive positions through the constriction" loading="lazy">
    <figcaption>Red blood cell shapes through the constriction at <em>Wi</em> = 2.0, for two inner/outer fluid combinations (V/N and N/V). Figure from Ma et al. (2023), <em>Physics of Fluids</em> (AIP Publishing).</figcaption>
  </figure>
</div>

## My role

The study was led by J. Ma. I assisted with the work as second author.

## Publication

Ma, J., Huang, Q., Zhu, Y., Xu, Y.-Q. & Tian, F.-B. (2023). Effects of fluid rheology on dynamics of a capsule through a microchannel constriction. _Physics of Fluids_ 35(9), 091901. Editor's Pick. [doi:10.1063/5.0165614](https://doi.org/10.1063/5.0165614)
