---
layout: simulation
title: Structural solver verification
description: Stand-alone tests of my in-house structural solvers, a large-deformation beam and explicit 3D finite elements, against published solutions.
importance: 3
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

The set-up, grids and further results of every test on this page are given in my [PhD thesis](https://doi.org/10.26190/unsworks/3993) (UNSW, 2021).

## Results

**Element choice for thin walls.** This test, from the appendix of our 2024 Physics of Fluids paper, decided which element to use for the thin walls of the 3D collapsible tubes. A cantilever of length _L_ = 10 m, thickness _h_ = 0.1 m and width _b_ = 1 m (Young's modulus 6 × 10⁴ Pa, Poisson's ratio 0.2) is clamped at one end and loaded by a uniform pressure _P_ = 0.015 N/m² on its free end. Geometric nonlinearity is included, and light damping (2% of critical) lets the tip settle to its static deflection. Euler–Bernoulli beam theory gives a tip deflection of _δ_<sub>max</sub> = _PL_<sup>3</sup>/(3*EI*) = 1 m. Three hexahedral elements are compared:

- **C3D8**: linear, 8 nodes, full integration (2 × 2 × 2 points);
- **C3D20**: quadratic, 20 nodes, full integration (3 × 3 × 3 points); and
- **C3D20R**: quadratic, 20 nodes, reduced integration (2 × 2 × 2 points).

<div class="rh-figs is-single">
  <figure>
    <img src="{{ '/assets/img/structural-validation/cantilever-schematic.png' | relative_url }}" alt="(a) Thin-walled cantilever of length L, thickness h and width b under end load P, with monitor point A at the free end; (b) 8-node C3D8 element; (c) 20-node C3D20 element" loading="lazy">
    <figcaption>(a) Thin-walled cantilever (not to scale); A is the monitor point at the free end. (b) C3D8 element. (c) C3D20 element; C3D20R has the same nodes with reduced integration.</figcaption>
  </figure>
</div>

With one element through the thickness, C3D8 is far too stiff in bending and stops at about two-thirds of the analytical deflection, while C3D20 and C3D20R both settle on it. With two elements through the thickness, the C3D8 error shrinks but remains, and the 20-node elements still agree. C3D20R is as accurate as C3D20 at a lower cost, so it is used for the thin, flexible tube walls.

<div class="rh-figs is-single">
  <figure>
    <img src="{{ '/assets/img/structural-validation/element-locking.png' | relative_url }}" alt="Tip deflection of the cantilever over time with C3D8, C3D20R and C3D20 elements compared with the analytical solution, using (a) one and (b) two elements through the thickness" loading="lazy">
    <figcaption>Deflection at point A with (a) one and (b) two elements through the thickness, compared with the analytical solution.</figcaption>
  </figure>
</div>

**Free vibration of a 3D cantilever.** The tip displacement over time matches Tian et al. (2014) and Bathe &amp; Wilson (1974).

**Buckling of a tube cross-section.** In plane strain, the post-buckling wall shapes at P = 4.75 and P = 5.247 agree with Kozlovsky et al. (2014).

**Large-deformation beam.** Deformed shapes from 1 s to 15 s under a tip load, computed with three grid spacings, agree with Sugiyama et al. (2006).

<div class="rh-figs">
  <figure>
    <img src="{{ '/assets/img/structural-validation/cantilever-tip.png' | relative_url }}" alt="Tip displacement of the 3D cantilever compared with Tian et al. (2014) and Bathe and Wilson (1974)" loading="lazy">
    <figcaption>3D cantilever: tip displacement compared with Tian et al. (2014) and Bathe &amp; Wilson (1974).</figcaption>
  </figure>
  <figure>
    <img src="{{ '/assets/img/structural-validation/beam-shapes.png' | relative_url }}" alt="Deformed beam shapes from 1 s to 15 s for three grid spacings compared with Sugiyama et al. (2006)" loading="lazy">
    <figcaption>2D beam: deformed shapes from 1 s to 15 s for three grid spacings, compared with Sugiyama et al. (2006).</figcaption>
  </figure>
  <figure>
    <img src="{{ '/assets/img/structural-validation/buckling-p4p75.png' | relative_url }}" alt="Post-buckling shape of a tube cross-section at P = 4.75 compared with Kozlovsky et al. (2014)" loading="lazy">
    <figcaption>Tube cross-section after buckling, P = 4.75 (line: present; circles: Kozlovsky et al., 2014).</figcaption>
  </figure>
  <figure>
    <img src="{{ '/assets/img/structural-validation/buckling-p5p247.png' | relative_url }}" alt="Post-buckling shape of a tube cross-section at P = 5.247 compared with Kozlovsky et al. (2014)" loading="lazy">
    <figcaption>Tube cross-section after buckling, P = 5.247 (line: present; circles: Kozlovsky et al., 2014).</figcaption>
  </figure>
</div>

## Publications

Huang, Q. (2021). _Low Reynolds Number Turbulent FSI and its Applications in Biological Flows_. PhD thesis, UNSW Canberra, University of New South Wales. [doi:10.26190/unsworks/3993](https://doi.org/10.26190/unsworks/3993)

Huang, Q., Ji, X., Ma, J., Wang, L., Young, J. & Lai, J.C.S. (2024). Self-excited oscillations of three-dimensional collapsible tubes conveying both laminar and turbulent flows. _Physics of Fluids_ 36(12), 121920.

Kozlovsky, P., Zaretsky, U., Jaffa, A.J. & Elad, D. (2014). General tube law for collapsible thin and thick-wall tubes. _Journal of Biomechanics_ 47(10), 2378–2384.
