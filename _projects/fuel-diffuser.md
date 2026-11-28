---
layout: simulation
title: Even outflow from an aircraft fuel diffuser
description: ANSYS Fluent design study of a perforated fuel diffuser for the pressure-refuelling system of the AG600 amphibious aircraft, from failed hole layouts to an internal baffle design.
category: Aerospace
importance: 10.6 # master's Fluent results, shown at Ryan's request 2026-11-28; placement not yet confirmed
tags: ["3D", "Turbulent", "Internal flow", "ANSYS Fluent"]
stack: ["ANSYS Fluent"]
summary: >
  A fuel diffuser is a tube closed at one end, with hundreds of small holes in its wall, that releases fuel into a tank
  during pressure refuelling. In a group project for the AG600 amphibious aircraft I carried out the design work: the
  goal was to keep the exit velocity of every hole below 1 m/s at maximum flow. I built the variants in CATIA, meshed
  them in ANSYS ICEM CFD and ran them in ANSYS Fluent.
img: assets/img/fuel-diffuser/card.jpg
params:
  - { label: Tube, value: "300 mm long, 50 mm diameter" }
  - { label: Fluid, value: Kerosene }
  - { label: Turbulence, value: Spalart–Allmaras }
  - { label: Mesh, value: "≈ 9 million cells" }
---

## Setup

The diffuser tube is 300 mm long and 50 mm in diameter, closed at the far end, with holes on the upper half of its wall. The flow is incompressible and isothermal kerosene. Turbulence is modelled with the Spalart–Allmaras model, chosen for its robustness on complex meshes, with SIMPLE pressure–velocity coupling and second-order upwind discretisation.

Neither a fixed-pressure nor a zero-gradient condition at the holes is physical, because pressure builds up toward the closed end. So I added an external far-field domain around the diffuser and let the fuel leave the holes into it. An inlet pipe extension gives fully developed turbulent inflow. The unstructured mesh, refined near the walls and holes, has about 9 million cells and was run in parallel. I first checked the setup on turbulent pipe flow at _Re_ = 44,000 against the measurements of Zagarola & Smits (1998).

<div class="rh-figs is-single is-narrow">
  <figure>
    <img src="{{ '/assets/img/fuel-diffuser/model.jpg' | relative_url }}" alt="CATIA model of a perforated diffuser tube divided into six segments with different hole sizes, 300 mm long and 50 mm in diameter" loading="lazy">
    <figcaption>One of the hole-layout variants: six segments with different hole sizes.</figcaption>
  </figure>
</div>

## Results

Designs that changed only the hole size and layout failed. The holes near the inlet hardly flowed, while those near the closed end were far too fast. The pressure along the tube showed why: pressure builds up toward the closed end, and the exit velocity of a hole depends on the pressure difference across it, not on its size. Even the largest open area the wall could hold could not fix this, so the hole layout alone could not meet the requirement.

I proposed internal baffles to even out the pressure inside the tube and simulated four baffle arrangements. The third met the 1 m/s limit at every hole, and the fourth, with one more baffle, made the outflow more uniform still. The results were summarised as design rules for baffle position and height.

<div class="rh-figs is-single">
  <figure>
    <img src="{{ '/assets/img/fuel-diffuser/outlet-velocity.jpg' | relative_url }}" alt="Three contour plots of velocity over the circular outlet section of the diffuser" loading="lazy">
    <figcaption>Velocity over the outlet section of the diffuser for different designs.</figcaption>
  </figure>
</div>

## About this work

A summer project in my master's at Nanjing University of Aeronautics and Astronautics (2014–2015), for the AG600 pressure-refuelling system. My co-supervisor received the project and gave me the design work: CATIA models, ICEM CFD meshing, Fluent simulations and Tecplot post-processing.

## Other Fluent cases from my master's

While learning CFD at NUAA I also ran ANSYS Fluent cases for two labmates' projects. These were their studies, not mine: I set up and ran the cases.

<div class="rh-figs">
  <figure>
    <img src="{{ '/assets/img/fuel-diffuser/cockpit-catia.jpg' | relative_url }}" alt="CATIA model of a two-seat aircraft cockpit with seated occupant models and ventilation outlets" loading="lazy">
    <figcaption>Aircraft cockpit thermal comfort: the cockpit and occupants modelled in CATIA.</figcaption>
  </figure>
  <figure>
    <img src="{{ '/assets/img/fuel-diffuser/cockpit-occupant.jpg' | relative_url }}" alt="Temperature contours around a seated occupant in the cockpit" loading="lazy">
    <figcaption>Temperature around an occupant.</figcaption>
  </figure>
</div>

<div class="rh-figs">
  <figure>
    <img src="{{ '/assets/img/fuel-diffuser/cockpit-temperature.jpg' | relative_url }}" alt="Temperature contours on a section through an aircraft cockpit with two seated occupants, cooler air near the supply vents" loading="lazy">
    <figcaption>Temperature on a section through the cockpit, with the energy equation and supply-air inlets.</figcaption>
  </figure>
  <figure>
    <img src="{{ '/assets/img/fuel-diffuser/pche-temperature.jpg' | relative_url }}" alt="Temperature contours and velocity vectors in a wavy channel of a printed circuit heat exchanger" loading="lazy">
    <figcaption>Printed circuit heat exchanger: temperature (K) and velocity vectors in a wavy channel, meshed in ICEM CFD.</figcaption>
  </figure>
</div>
