---
layout: simulation
title: A jet impinging on a free surface in waves
description: Two-phase VOF simulation in ANSYS Fluent of a submerged vertical jet rising into a free surface under second-order Stokes waves, for ocean sewage outfall design.
importance: 10.5 # after the NACA0012 foil; placement and category not yet confirmed by Ryan
category: Multiphase
tags: ["2D", "Multiphase", "VOF", "ANSYS Fluent"]
stack: ["VOF", "ANSYS Fluent"]
summary: >
  Ocean sewage outfalls release treated wastewater as submerged jets, and waves change how those jets mix with the sea.
  In my bachelor's thesis I built a numerical wave tank in ANSYS Fluent and simulated a vertical jet rising from the
  seabed and hitting the free surface, first in still water and then under waves, tracking the air–water interface with
  the volume-of-fluid (VOF) method.
img: assets/img/jet-waves/card.jpg
params:
  - { label: Phases, value: Water + air (VOF) }
  - { label: Waves, value: Second-order Stokes }
  - { label: Turbulence, value: k–ε }
  - { label: Solver, value: ANSYS Fluent · PISO }
---

## Setup

The flow is two-dimensional and incompressible, with water below and air above. The volume-of-fluid (VOF) method tracks the free surface, turbulence is modelled with the k–ε model and pressure–velocity coupling uses the PISO scheme. The mesh was built in Pointwise and the results post-processed in Tecplot.

A numerical wave tank generates second-order Stokes waves. Wave generation was checked against the simulations in an earlier master's thesis, a numerical comparison rather than an experiment. A vertical jet then enters through a nozzle in the bottom wall, first into still water (nozzle velocity 1.21 m/s) and then into the wave field at several jet velocities.

<div class="rh-figs is-single is-narrow">
  <figure>
    <img src="{{ '/assets/img/jet-waves/wave-tank.jpg' | relative_url }}" alt="Free surface in the numerical wave tank at t = 0, 0.5, 1.5 and 2.5 s, with waves travelling along the tank" loading="lazy">
    <figcaption>Numerical wave tank: the free surface at <em>t</em> = 0, 0.5, 1.5 and 2.5 s as the waves develop.</figcaption>
  </figure>
</div>

## Results

Waves make the jet sway from side to side and deflect its axis in the free-jet and impingement regions, while the core region near the nozzle is barely affected. Waves also speed up the decay of the centreline velocity, roughly exponentially. A faster jet entrains more fluid, enlarges the recirculation zone and raises a larger bulge on the free surface. Cross-section velocity profiles stay broadly self-similar.

<div class="rh-figs is-single">
  <figure>
    <img src="{{ '/assets/img/jet-waves/vorticity.jpg' | relative_url }}" alt="Vorticity contours of the vertical jet: left, the jet in still water; right, the jet reaching the wavy free surface, with counter-rotating regions on either side" loading="lazy">
    <figcaption>Vorticity of the jet in still water (left) and of the jet reaching the free surface under waves (right).</figcaption>
  </figure>
</div>

<div class="rh-figs is-single">
  <figure>
    <img src="{{ '/assets/img/jet-waves/velocity-vectors.jpg' | relative_url }}" alt="Velocity magnitude contours and velocity vectors for a jet with nozzle velocity 1.72 m/s under waves; the jet bends and recirculation forms beneath the free surface" loading="lazy">
    <figcaption>Velocity contours (left) and vectors (right) for a nozzle velocity of 1.72 m/s under waves.</figcaption>
  </figure>
</div>

## About this work

Bachelor's thesis, Nanjing University of Aeronautics and Astronautics, 2013: _Numerical simulation of a jet impinging a free surface in a wave environment_. Two-dimensional only, and not validated against experiment.
