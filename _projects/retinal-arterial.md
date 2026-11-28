---
layout: simulation
title: Blood flow in a retinal arterial network
description: Steady non-Newtonian CFD in an 82-segment retinal arterial tree reconstructed from a glaucomatous fundus image, comparing two outlet boundary conditions.
importance: -1 # SIM-01: first and the large card (Ryan, 2026-11-28)
featured: true # large card on the homepage (Ryan, 2026-11-28)
category: Cardiovascular
tags: ["3D", "Haemodynamics", "Image-based"]
stack: ["OpenFOAM"]
summary: >
  Blood flow through the retinal arterial tree of one glaucomatous eye, reconstructed from a public fundus photograph.
  The same geometry and the same total inflow are solved with two outlet conditions, a prescribed Murray flow-split and
  equal outlet pressure, to see how much the predicted flow, pressure and wall shear stress depend on that choice.
  Manuscript in preparation.
img: assets/img/retinal-arterial/card.jpg
badge: INTERACTIVE # card badge; the project page has the 3D viewer
params:
  - { label: Network, value: 82 segments · 42 outlets }
  - { label: Flow, value: Steady }
  - { label: Blood model, value: Diameter-dependent viscosity }
  - { label: Solver, value: OpenFOAM }
---

## Setup

The arterial tree was segmented from a glaucomatous colour fundus photograph in the public High-Resolution Fundus (HRF) image database and mapped onto a spherical surface. The network has 82 segments and 42 outlets, with mean segment radii from about 9 to 84 µm.

Blood is modelled as a non-Newtonian fluid whose apparent viscosity depends on the local vessel diameter (Fåhræus–Lindqvist effect). The steady flow is solved with a custom OpenFOAM solver built on simpleFoam, which adds wall shear stress and per-segment post-processing. Seven inflow levels, matched to intraocular pressures from 13 to 40 mmHg, are run for each outlet condition.

- **Prescribed Murray flow-split.** The flow leaving each outlet is set in advance.
- **Equal-pressure outlet.** All outlets share one pressure, and the network decides how the flow divides.

## Interactive network

Drag to rotate and hover for segment values. Switch between the outlet conditions, the field shown and the intraocular pressure.

<div class="rh-figs is-single">
  <iframe src="{{ '/assets/html/retinal-network/index.html' | relative_url }}" title="Interactive 3-D retinal arterial network" loading="lazy" style="width: 100%; height: 640px; border: 0; background: transparent;"></iframe>
</div>

## Results

With equal outlet pressures, flow follows vessel calibre closely: segment flow scales with radius to the power 3.4. With the prescribed split, the same relation is much looser.

<div class="rh-figs is-single">
  <figure>
    <img src="{{ '/assets/img/retinal-arterial/fig_flow_radius_scaling.png' | relative_url }}" alt="Segment flow against mean radius on log axes for the two outlet conditions, with power-law fits" loading="lazy">
    <figcaption>Segment flow (normalised by inlet flow) against mean radius for the 81 segments.</figcaption>
  </figure>
</div>

Changing the outlet condition moves flow between branches rather than scaling it uniformly, so some branches gain several times their flow while others lose most of it.

<div class="rh-figs is-single">
  <figure>
    <img src="{{ '/assets/img/retinal-arterial/fig_flow_redistribution.png' | relative_url }}" alt="Map of the network coloured by the change in segment flow between the two outlet conditions" loading="lazy">
    <figcaption>Change in segment flow, equal pressure relative to Murray split (log₂ ratio).</figcaption>
  </figure>
</div>

<div class="rh-figs is-single">
  <figure>
    <img src="{{ '/assets/img/retinal-arterial/fig_network_pressure.png' | relative_url }}" alt="Pressure along the network under the two outlet conditions on a shared colour scale" loading="lazy">
    <figcaption>Cross-sectionally averaged pressure along the network, intraocular pressure 13 mmHg.</figcaption>
  </figure>
</div>

In the prescribed-split runs, several outlet flows do not match the outlet radii, which produces very large pressure drops and high wall shear stress in a few terminal branches. This is being checked before the results are published.
