---
layout: simulation
title: Structural solver verification
description: Stand-alone tests of my in-house structural solvers, a large-deformation beam and explicit 3D finite elements, against published solutions.
importance: 11
category: FSI methods
tags: ["2D", "3D", "FEM", "Verification"]
summary: >
  Before coupling them to the flow, I verified both of my structural solvers on their own: a geometrically
  nonlinear beam solved with finite differences, and explicit three-dimensional finite elements with 20-node
  hexahedra.
thumbnail: assets/video/structural-validation/preview.webm
thumbnail_poster: assets/video/structural-validation/preview.jpg
variant_label: case
variants:
  - {
      name: Cantilever vibration (3D),
      src: assets/video/structural-validation/cantilever-3d.webm,
      mp4: assets/video/structural-validation/cantilever-3d.mp4,
      poster: assets/video/structural-validation/cantilever-3d.jpg,
    }
  - {
      name: Tube buckling (3D),
      src: assets/video/structural-validation/tube-buckling.webm,
      mp4: assets/video/structural-validation/tube-buckling.mp4,
      poster: assets/video/structural-validation/tube-buckling.jpg,
    }
  - {
      name: Large-deformation beam (2D),
      src: assets/video/structural-validation/beam-2d.webm,
      mp4: assets/video/structural-validation/beam-2d.mp4,
      poster: assets/video/structural-validation/beam-2d.jpg,
    }
media_aspect: 3 / 2
params:
  - { label: 2D solver, value: Finite differences }
  - { label: 3D solver, value: Explicit FEM (C3D20R) }
  - { label: Kinematics, value: Large deformation }
  - { label: Material, value: Linear elastic }
links: { paper: "https://doi.org/10.1063/5.0243758" }
---

## Setup

Both structural solvers are my own. Each was tested on its own before being coupled to my immersed boundary–lattice Boltzmann flow solver.

- **2D beam.** A geometrically nonlinear beam with stretching and bending stiffness, solved with finite differences. It is used for the collapsible channels and the flexible filament.
- **3D solids.** Explicit time integration with 20-node reduced-integration hexahedral elements (C3D20R). It is used for the three-dimensional collapsible tubes.

## Results

**Free vibration of a 3D cantilever.** The tip displacement over time matches Tian et al. (2014) and Bathe & Wilson (1974).

**Element choice.** For a thin-walled cantilever with one element through the thickness, 8-node bricks (C3D8) lock in shear, while 20-node bricks (C3D20 and C3D20R) match the analytical solution. This is why C3D20R elements are used for thin, flexible walls.

**Buckling of a tube cross-section.** In plane strain, the post-buckling wall shapes at P = 4.75 and P = 5.247 agree with published data.

**Large-deformation beam.** Deformed shapes from 1 s to 15 s under a tip load, computed with three grid spacings, agree with Sugiyama et al. (2006).

<div class="rh-figs">
  <figure>
    <img src="{{ '/assets/img/structural-validation/cantilever-tip.png' | relative_url }}" alt="Tip displacement of the 3D cantilever compared with Tian et al. (2014) and Bathe and Wilson (1974)" loading="lazy">
    <figcaption class="caption">3D cantilever: tip displacement compared with Tian et al. (2014) and Bathe &amp; Wilson (1974).</figcaption>
  </figure>
  <figure>
    <img src="{{ '/assets/img/structural-validation/element-locking.png' | relative_url }}" alt="Tip deflection with C3D8, C3D20 and C3D20R elements compared with the analytical solution" loading="lazy">
    <figcaption class="caption">One element through the thickness: C3D8 locks in shear; C3D20 and C3D20R match the analytical solution.</figcaption>
  </figure>
  <figure>
    <img src="{{ '/assets/img/structural-validation/buckling-p4p75.png' | relative_url }}" alt="Post-buckling shape of a tube cross-section at P = 4.75 compared with published data" loading="lazy">
    <figcaption class="caption">Tube cross-section after buckling, P = 4.75 (line: present; circles: published data).</figcaption>
  </figure>
  <figure>
    <img src="{{ '/assets/img/structural-validation/buckling-p5p247.png' | relative_url }}" alt="Post-buckling shape of a tube cross-section at P = 5.247 compared with published data" loading="lazy">
    <figcaption class="caption">Tube cross-section after buckling, P = 5.247 (line: present; circles: published data).</figcaption>
  </figure>
  <figure>
    <img src="{{ '/assets/img/structural-validation/beam-shapes.png' | relative_url }}" alt="Deformed beam shapes from 1 s to 15 s for three grid spacings compared with Sugiyama et al. (2006)" loading="lazy">
    <figcaption class="caption">2D beam: deformed shapes from 1 s to 15 s for three grid spacings, compared with Sugiyama et al. (2006).</figcaption>
  </figure>
</div>
