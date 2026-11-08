---
layout: simulation
title: Passively pitching flapping wings in hover
description: An insect-like wing flaps on a prescribed stroke while a torsional spring at the hinge lets it pitch freely — wing shape and hinge stiffness set the lift and the power economy.
importance: 1
category: Bio-locomotion
tags: ["3D", "FSI", "Insect flight"]
summary: >
  A hovering insect-like wing flaps back and forth on a prescribed stroke, but its pitch is not prescribed: a torsional
  spring at the hinge lets it pitch passively under aerodynamic, inertial and elastic torques. I mapped eight wing shapes
  against the hinge stiffness to find where lift and power economy are highest. Switch between a soft and a stiff hinge
  on the same wing to compare the lift coefficient over a stroke cycle and the vortex structures. From our 2023
  Journal of Fluid Mechanics paper.
thumbnail: assets/video/passively-flapping-wings/preview.webm
thumbnail_poster: assets/video/passively-flapping-wings/preview.jpg
variant_label: case
variants:
  - {
      name: "Soft hinge · Ch = 0.45",
      src: assets/video/passively-flapping-wings/passively_flapping_wings.webm,
      mp4: assets/video/passively-flapping-wings/Passively_flapping_wings.mp4,
      poster: assets/video/passively-flapping-wings/passively_flapping_wings.jpg,
    }
  - {
      name: "Stiff hinge · Ch = 0.05",
      src: assets/video/passively-flapping-wings/passively_flapping_wings_2.webm,
      mp4: assets/video/passively-flapping-wings/Passively_flapping_wings_2.mp4,
      poster: assets/video/passively-flapping-wings/passively_flapping_wings_2.jpg,
    }
media_aspect: 1048 / 720
params:
  - { label: Reynolds number, value: "300" }
  - { label: Cauchy number Ch, value: "0.05–0.6" }
  - { label: Wing shapes r̄₁, value: "0.39–0.63 (8)" }
  - { label: Grid, value: "7.25 M (Δx = 0.04c)" }
links:
  paper: https://doi.org/10.1017/jfm.2023.821
---

## Setup

A wing of span _L_ and mean chord _c_ flaps about a vertical axis through its root with the stroke angle _φ_ = −(_φ<sub>A</sub>_/2) cos(2π*ft*), where the peak-to-peak amplitude _φ<sub>A</sub>_ = 140° matches that of fruit flies. The pitch angle _θ_ about the leading edge is not prescribed. A torsional spring of stiffness _K<sub>s</sub>_ at the hinge pulls the wing back to vertical, and _θ_ follows from the balance of the inertial, aerodynamic and elastic torques:

$$
-J_{yy}\ddot{\theta} + J_{zy}\ddot{\phi}\cos\theta + \tfrac{1}{2}J_{yy}\dot{\phi}^{2}\sin 2\theta + T^{\mathrm{pitch}}_{\mathrm{aero}} - K_s(\theta-\theta_0) = 0
$$

<div class="rh-figs is-single is-narrow">
  <figure>
    <img src="{{ '/assets/img/flapping-wings/schematic.png' | relative_url }}" alt="Schematic of the flapping wing: span L, mean chord c, stroke angle phi about the vertical z axis, pitch angle theta about the leading edge, and a torsional spring at the wing hinge" loading="lazy">
    <figcaption class="caption">Two-angle kinematics: prescribed stroke <em>φ</em> and passive pitch <em>θ</em>, with a torsional spring at the hinge.</figcaption>
  </figure>
</div>

The hinge stiffness is measured by the Cauchy number _Ch_ = _ρφ<sub>A</sub>_<sup>2</sup>_f_<sup>2</sup>_c_<sup>3</sup>_L_<sup>2</sup> / _K<sub>s</sub>_, the ratio of aerodynamic to elastic torsional forces, varied from 0.05 (stiff) to 0.6 (soft). The wing shape is set by the radius of the first moment of area, _r̄_<sub>1</sub>. Eight planforms from 0.39 to 0.63 cover the range of most insect wings (0.43–0.6), with the area moving outboard as _r̄_<sub>1</sub> grows. Span, mean chord, area and aspect ratio (_AR_ = 2.96) are the same for every wing. The Reynolds number based on the mean wingtip speed is _Re_ = 300, and the chord-based mass ratio is 1, close to that of fruit flies and honeybees.

<div class="rh-figs is-single">
  <figure>
    <img src="{{ '/assets/img/flapping-wings/planforms.png' | relative_url }}" alt="Eight wing planforms with the radius of the first moment of area r1 from 0.39 to 0.63" loading="lazy">
    <figcaption class="caption">The eight wing planforms, <em>r̄</em><sub>1</sub> = 0.39 to 0.63.</figcaption>
  </figure>
</div>

The flow is solved with my D3Q19 multi-relaxation-time lattice Boltzmann solver and a feedback immersed boundary method. A multi-block grid in a 30*c* cube refines from 0.32*c* in the far field to 0.04*c* around the wing (7.25 million nodes). Six stroke cycles are run, and the averages are taken over the last one.

## Results

**Lift and power economy.** Mean lift peaks for 0.05 < _Ch_ ≤ 0.2, where the minimum angle of attack at midstroke is close to 45°. The highest lift (_C̄<sub>L</sub>_ ≈ 0.67) comes from wings with more outboard area (_r̄_<sub>1</sub> ≥ 0.565) and _Ch_ ≈ 0.1. The power economy _PE_ = _C̄<sub>L</sub>_ / _C̄<sub>P</sub>_, the lift per unit aerodynamic power, is highest (≈ 0.71) for _r̄_<sub>1</sub> ≈ 0.45 and _Ch_ ≈ 0.2. That wing shape is close to a hawkmoth's (_r̄_<sub>1</sub> ≈ 0.47).

<div class="rh-figs is-single">
  <figure>
    <img src="{{ '/assets/img/flapping-wings/performance-map.png' | relative_url }}" alt="Contour maps of (a) mean lift coefficient and (b) power economy over wing shape r1 from 0.39 to 0.63 and Cauchy number Ch from 0.05 to 0.6" loading="lazy">
    <figcaption class="caption">(a) Mean lift coefficient and (b) power economy over wing shape <em>r̄</em><sub>1</sub> and hinge stiffness <em>Ch</em>.</figcaption>
  </figure>
</div>

**Power synchronisations.** The best power economy appears when two synchronisations happen together:

- the pitching elastic power of the spring is in anti-phase with the pitching aerodynamic and inertial powers; and
- the flapping aerodynamic power is nearly in phase with the total input power of the system.

In these cases pitch reversal is timed with stroke reversal, so the input power passes effectively from flapping into passive pitching and into the fluid. At the optimum the flapping aerodynamic power is about three times the flapping inertial power.

**Soft and stiff hinges.** The two animations show the same wing (_r̄_<sub>1</sub> = 0.63). With the stiff hinge (_Ch_ = 0.05) the angle of attack at midstroke stays near 45°, and a large leading-edge vortex over the outboard wing gives strong suction and high lift. With the soft hinge (_Ch_ = 0.45) the wing pitches much more and pitches up rapidly just before midstroke. During stroke reversal a strong negative pressure develops near the trailing edge on the pressure side, and the lift coefficient turns strongly negative near midstroke, lowering the mean lift.

These results suggest that matching wing shape to hinge stiffness lets insects, and flapping-wing robots, exploit passive pitching to support their weight while keeping power economy high.

## Publication

Huang, Q., Bhat, S.S., Yeo, E.C., Young, J., Lai, J.C.S., Tian, F.-B. & Ravi, S. (2023). Power synchronisations determine the hovering flight efficiency of passively pitching flapping wings. _Journal of Fluid Mechanics_ 974, A41.
