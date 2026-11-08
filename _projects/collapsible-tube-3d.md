---
layout: simulation
title: Self-excited oscillations of a 3D collapsible tube
description: A thin-walled elastic tube collapses into a two-lobed shape and oscillates, driven by vortex shedding downstream of the throat, in laminar and turbulent flow.
importance: 2
category: Cardiovascular
tags: ["3D", "FSI", "Collapsible tube", "LES"]
summary: >
  A three-dimensional thin-walled elastic tube, mounted between two rigid tubes and squeezed by an external pressure,
  collapses into a two-lobed shape and oscillates on its own. I simulated the full tube, without symmetry assumptions,
  from laminar flow (Re = 100) to turbulent flow (Re = 1000). The animations show the laminar case at Re = 200: switch
  between the wall deformation seen along the tube axis and the vortex structures coloured by pressure. From our 2024
  Physics of Fluids paper.
thumbnail: assets/video/collapsible-tube-3d/preview.webm
thumbnail_poster: assets/video/collapsible-tube-3d/preview.jpg
variant_label: view
variants:
  - {
      name: Wall deformation,
      src: assets/video/collapsible-tube-3d/collapsibletube.webm,
      mp4: assets/video/collapsible-tube-3d/CollapsibleTube.mp4,
      poster: assets/video/collapsible-tube-3d/collapsibletube.jpg,
    }
  - {
      name: Vortex structures,
      src: assets/video/collapsible-tube-3d/collapsibltubevortex.webm,
      mp4: assets/video/collapsible-tube-3d/CollapsiblTubeVortex.mp4,
      poster: assets/video/collapsible-tube-3d/collapsibltubevortex.jpg,
    }
media_aspect: 16 / 9
params:
  - { label: Reynolds number, value: "100–1000" }
  - { label: Mass ratio M, value: "25" }
  - { label: Wall solver, value: Explicit FEM (C3D20R) }
  - { label: Turbulence, value: LES (Smagorinsky) }
links:
  paper: https://doi.org/10.1063/5.0243758
---

## Setup

A thin-walled elastic tube of radius _R_, length _L_ = 5*D* and wall thickness _h_ = 0.025*D* sits between two rigid tubes of diameter _D_, like the Starling resistor used in collapsible-tube experiments. An external pressure _p<sub>e</sub>_ acts on the outside of the elastic section. A Hagen–Poiseuille profile with mean velocity _U_<sub>0</sub> enters at the inlet, and the outlet pressure is _p<sub>d</sub>_ = 0. A small perturbation in the external load starts the collapse into a two-lobed (mode-2) shape.

<div class="rh-figs is-single">
  <figure>
    <img src="{{ '/assets/img/collapsible-tube-3d/schematic.jpg' | relative_url }}" alt="Schematic of the three-dimensional collapsible tube: a rigid upstream tube of length Lu, an elastic tube of length L under external pressure pe, and a rigid downstream tube of length Ld; the cross-section shows radius R and wall thickness h" loading="lazy">
    <figcaption>(a) Rigid upstream tube, elastic tube under external pressure <em>p<sub>e</sub></em>, and rigid downstream tube. (b) Cross-section of the elastic tube.</figcaption>
  </figure>
</div>

| Case      | _Re_    | _L<sub>u</sub>_, _L_, _L<sub>d</sub>_ | _M_ | _K<sub>b</sub>_ | _P<sub>e</sub>_ | Grid points |
| --------- | ------- | ------------------------------------- | --- | --------------- | --------------- | ----------- |
| Laminar   | 100–200 | 0.5*D*, 5*D*, 10*D*                   | 25  | 0.030517        | 5.46875         | 3.36 M      |
| Turbulent | 1000    | 5*D*, 5*D*, 16*D*                     | 25  | 0.030517        | 3.5             | 8.32 M      |

The fluid is solved with a lattice Boltzmann method on a uniform grid of 0.02*D*, with large eddy simulation (Smagorinsky model, _C<sub>s</sub>_ = 0.12) for the turbulent case. The tube wall is a linearly elastic solid undergoing large displacements (Poisson's ratio 0.49), solved with explicit finite elements using 20-node reduced-integration hexahedra (C3D20R). A diffused-interface immersed boundary method couples the two, so the mesh never has to be regenerated as the tube collapses.

## Results

**Laminar flow.** The tube stays at its equilibrium shape at _Re_ = 100 and 160, and small oscillations die out at _Re_ = 180. At _Re_ = 200, periodic vortex shedding downstream of the throat drives small-amplitude, quasi-periodic self-excited oscillations, and strong transverse flow slowly rotates the tube deformation. Stress concentrations near the downstream end of the elastic tube create two regions of local wall thickening, at _z_/_R_ = 7.25. Because the compressive load is cyclic, these regions may make the tube prone to fatigue failure.

<div class="rh-figs is-single is-narrow">
  <figure>
    <img src="{{ '/assets/img/collapsible-tube-3d/wall-thickening-re200.jpg' | relative_url }}" alt="Deformed tube walls in the X-Z plane at four instants during one oscillation at Re = 200, with wall thickening marked at z/R = 7.25" loading="lazy">
    <figcaption>Tube wall in the X–Z plane at four instants of one oscillation, <em>Re</em> = 200. The wall thickens at <em>z</em>/<em>R</em> = 7.25.</figcaption>
  </figure>
</div>

**Turbulent flow.** At _Re_ = 1000, the two-lobed throat produces two axial jets and a strong adverse pressure gradient where the tube reopens. The flow bifurcates and becomes asymmetric, and the two jets merge at about _z_/_R_ = 22 in the downstream rigid tube. Vortex shedding from the throat drives large-amplitude, quasi-periodic oscillations of the wall. The jet merging adds small secondary oscillations to the pressure and streamwise velocity downstream. The spectra there follow the −5/3 Kolmogorov law, showing that the large eddy simulation captures the turbulence.

<div class="rh-figs is-single">
  <figure>
    <img src="{{ '/assets/img/collapsible-tube-3d/flow-fields-re1000.jpg' | relative_url }}" alt="Pressure, streamwise velocity and vorticity in the Y-Z and X-Z planes at Re = 1000 when the tube is most collapsed, showing vortex merging near z/R = 22" loading="lazy">
    <figcaption>(a) Pressure, (b) streamwise velocity and (c) vorticity in the Y–Z (upper) and X–Z (lower) planes at <em>Re</em> = 1000, with the tube most collapsed. m<sub>1</sub> and m<sub>2</sub> are monitor points.</figcaption>
  </figure>
</div>

## Publication

Huang, Q., Ji, X., Ma, J., Wang, L., Young, J. & Lai, J.C.S. (2024). Self-excited oscillations of three-dimensional collapsible tubes conveying both laminar and turbulent flows. _Physics of Fluids_ 36(12), 121920.
