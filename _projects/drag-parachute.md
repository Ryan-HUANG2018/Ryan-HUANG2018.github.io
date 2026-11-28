---
layout: simulation
title: Drag parachutes behind a test sled and an aircraft
description: ANSYS Fluent simulations of drag parachutes in the wake of rocket sleds and a fighter aircraft, used to correct sled-test drag.
importance: 10.7 # master's Fluent results, shown at Ryan's request 2026-11-28; placement not yet confirmed
tags: ["3D", "Turbulent", "External aerodynamics", "ANSYS Fluent"]
stack: ["ANSYS Fluent"]
summary: >
  New drag parachutes are often tested on a rocket sled running along a track before they fly. But a sled is shaped
  nothing like an aircraft, so the parachute sits in a different wake and its measured drag needs correcting. For a
  senior labmate's PhD project I built the parachute, sled and aircraft models in CATIA, meshed them in ANSYS ICEM CFD,
  ran the ANSYS Fluent simulations and post-processed them in Tecplot.
img: assets/img/drag-parachute/card.jpg
params:
  - { label: Parachutes, value: Cross and ring-slot }
  - { label: Forebodies, value: "Three sleds, a fighter aircraft" }
  - { label: Turbulence, value: RNG k–ε }
  - { label: Solver, value: "ANSYS Fluent · density-based" }
---

## Setup

The study compares the same parachutes in a wind tunnel, behind three rocket sleds and behind a fighter aircraft, plus the sleds and aircraft without parachutes. The simulations solve the Reynolds-averaged Navier–Stokes equations with the RNG k–ε turbulence model, using a finite-volume scheme with second-order Roe flux-difference splitting and implicit time marching. The ground and side boundaries are slip walls, and the sled flow was checked on three meshes of 3.6, 5.1 and 6.4 million cells.

<div class="rh-figs is-single">
  <figure>
    <img src="{{ '/assets/img/drag-parachute/sled-vs-aircraft.jpg' | relative_url }}" alt="Four side-view contour plots of streamwise velocity: three rocket sleds and the tail of a fighter aircraft, each with its wake" loading="lazy">
    <figcaption>Streamwise velocity in the wake of sleds 1, 2 and 3 (top left, top right, bottom left) and of the aircraft (bottom right).</figcaption>
  </figure>
</div>

## Results

The forebody changes the flow that reaches the parachute. Each sled leaves a different wake from the aircraft, so the pressure and velocity over the canopy differ from one test condition to the next. The project combined these results with wind-tunnel and sled-test data to build a drag correction for sled tests.

<div class="rh-figs">
  <figure>
    <img src="{{ '/assets/img/drag-parachute/canopy-pressure.jpg' | relative_url }}" alt="Three front-view contour plots of pressure on a section through a ring-slot parachute canopy" loading="lazy">
    <figcaption>Pressure on a section through the canopy, three test conditions.</figcaption>
  </figure>
  <figure>
    <img src="{{ '/assets/img/drag-parachute/canopy-velocity.jpg' | relative_url }}" alt="Three front-view contour plots of streamwise velocity on a section through a ring-slot parachute canopy" loading="lazy">
    <figcaption>Streamwise velocity on the same section.</figcaption>
  </figure>
</div>

## About this work

Part of a senior labmate's PhD project at Nanjing University of Aeronautics and Astronautics (2014–2016), supported by the Aviation Science Foundation of China. My part was the geometry, meshing, CFD runs and post-processing. The drag correction and the canopy shape-finding model belong to the project as a whole.
