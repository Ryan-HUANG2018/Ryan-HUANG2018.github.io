---
layout: simulation
title: Convective heat transfer — heated cylinder and stenotic channel
description: Temperature transported by the flow past a heated cylinder and through a constricted channel, with a finite-difference energy equation coupled to the IB–LBM flow solver.
importance: 4.5 # after the FSI benchmarks
category: Heat transfer
tags: ["2D", "Heat transfer", "IB–LBM"]
stack: ["LBM", "Immersed boundary", "FDM", "Heat transfer"]
summary: >
  Two convective heat-transfer cases from my PhD. Heat leaves a heated cylinder in cross-flow and is carried
  downstream by the shed vortices; in a channel with a constriction, the jet and the recirculation behind the
  constriction reshape the thermal boundary layers on the heated walls. The temperature equation is solved with finite
  differences and coupled to my immersed boundary–lattice Boltzmann flow solver.
img: assets/img/heat-transfer/card.jpg
params:
  - { label: Dimension, value: 2D }
  - { label: Flow solver, value: IB–LBM }
  - { label: Temperature solver, value: Finite differences }
  - { label: Energy equation, value: Advection–diffusion }
links:
  paper: https://doi.org/10.26190/unsworks/3993
---

## Setup

The flow is solved with my immersed boundary–lattice Boltzmann (IB–LBM) solver. At each time step, its velocity field advects the temperature, which obeys the advection–diffusion (energy) equation

$$
\frac{\partial T}{\partial t} + \mathbf{u} \cdot \nabla T = \alpha \nabla^2 T ,
$$

where _T_ is the temperature, **u** the flow velocity and _α_ the thermal diffusivity. The equation is discretised with finite differences on the same grid as the flow. Temperatures in the figures are non-dimensional.

- **Heated cylinder in cross-flow.** A cylinder held at a higher temperature than the incoming flow.
- **Stenotic channel.** A two-dimensional channel with a constriction on one wall and heated walls.

Both cases are part of my [PhD thesis](https://doi.org/10.26190/unsworks/3993) (UNSW, 2021).

## Results

**Heated cylinder.** A thin thermal boundary layer forms on the upstream face of the cylinder, where the heat transfer is strongest. Behind the cylinder the warm fluid is rolled up into the shed vortices, so heat leaves in separate pockets that alternate from side to side and diffuse as they travel downstream.

<div class="rh-figs is-single is-narrow">
  <figure>
    <img src="{{ '/assets/img/heat-transfer/heated-cylinder-temperature.png' | relative_url }}" alt="Temperature field around a heated cylinder in cross-flow, with warm fluid carried downstream in a wavy wake" loading="lazy">
    <figcaption>Heated cylinder in cross-flow: temperature.</figcaption>
  </figure>
</div>

**Stenotic channel.** The constriction drives a fast jet along the opposite wall, with reversed flow behind the constriction. The thermal boundary layers grow from the heated walls; at the constriction the layer is squeezed against the narrowed wall, and downstream the flow pattern sets how far the warm near-wall fluid spreads into the channel.

<div class="rh-figs is-single">
  <figure>
    <img src="{{ '/assets/img/heat-transfer/stenotic-channel-velocity.png' | relative_url }}" alt="Streamwise velocity in a channel with a constriction on the upper wall, showing a jet and reversed flow downstream" loading="lazy">
    <figcaption>Stenotic channel: streamwise velocity <em>u</em>.</figcaption>
  </figure>
</div>

<div class="rh-figs is-single">
  <figure>
    <img src="{{ '/assets/img/heat-transfer/stenotic-channel-temperature.png' | relative_url }}" alt="Temperature in the same channel, with thermal boundary layers on both walls deformed by the constriction" loading="lazy">
    <figcaption>Stenotic channel: temperature.</figcaption>
  </figure>
</div>

The temperature equation has the same form as the transport of a dissolved species, such as a nutrient or a drug, with a source term added for uptake or release. Depending on the Péclet number, the next step is to solve the scalar with a lattice Boltzmann model of its own or with a hybrid LBM–finite-difference scheme.
