---
layout: simulation
title: Mechanical heart valve leaflet in pulsatile flow
description: A rigid valve leaflet swings open and shut in pulsatile flow past an aortic sinus — validated against experiment, then applied to supravalvular aortic stenosis.
importance: 5
category: Cardiovascular
tags: ["2D", "FSI", "Heart valve"]
summary: >
  A rigid mechanical heart-valve leaflet, hinged at the entrance of an aortic sinus, is driven open and shut by a pulsatile
  inflow. Its motion is not prescribed: the leaflet rotates under the torque of the blood flow. This is the benchmark
  experiment of Stijnen et al. (2004), which I used to validate my immersed boundary–lattice Boltzmann solver for heart
  valves before applying it to an idealised model of supravalvular aortic stenosis. From our 2024 Australasian Fluid
  Mechanics Conference paper.
thumbnail: assets/video/mechanical-heart-valve/preview.webm
thumbnail_poster: assets/video/mechanical-heart-valve/preview.jpg
variants:
  - {
      name: Vorticity,
      src: assets/video/mechanical-heart-valve/mhv.webm,
      mp4: assets/video/mechanical-heart-valve/MHV.mp4,
      poster: assets/video/mechanical-heart-valve/mhv.jpg,
    }
media_aspect: 1000 / 332
params:
  - { label: Reynolds number, value: "750" }
  - { label: Strouhal number, value: "0.055" }
  - { label: Leaflet, value: "Rigid, l = 1.07D" }
  - { label: Method, value: IB–LBM (D2Q9 MRT) }
links:
  paper: https://doi.org/10.5281/zenodo.14213360
---

## Setup

Fluid flows through a two-dimensional channel of height _D_ = 2 cm with a semicircular sinus on one wall, the shape of the aortic root behind a valve. A rigid leaflet of length _l_ = 1.07*D*, thickness _h_ = 0.05*D* and density 1100 kg/m³ is hinged at the start of the sinus (point O), with an initial opening angle of 22°. A pulsatile, spatially uniform velocity enters on the left, with a peak of _U_<sub>max</sub> = 0.15 m/s. This gives _Re_ = _Ul_/_ν_ = 750 and a Strouhal number _St_ = _D_/(_U_<sub>max</sub>_T<sub>p</sub>_) = 0.055.

<div class="rh-figs is-single">
  <figure>
    <img src="{{ '/assets/img/mechanical-heart-valve/validation-schematic.png' | relative_url }}" alt="Schematic of the validation case: a channel of height D with a semicircular sinus of radius R, and a rigid leaflet of length l hinged at point O at opening angle theta" loading="lazy">
    <figcaption>Rigid leaflet hinged at O at the entrance of the sinus. <em>θ</em> is the opening angle.</figcaption>
  </figure>
</div>

The leaflet turns only under the fluid torque _T<sub>o</sub>_ about its hinge:

$$
J_o\,\ddot{\theta}(t) = T_o(t), \qquad J_o = \tfrac{1}{3}(\rho_s l h)\,l^{2}
$$

The blood (density 1090 kg/m³, kinematic viscosity 4 × 10⁻⁶ m²/s) is solved with a D2Q9 multi-relaxation-time lattice Boltzmann method, and the leaflet equation with finite differences. A diffused-interface immersed boundary method couples the two in both directions.

## Results

**Validation.** Over one cardiac cycle, the opening angle agrees closely with the simulations of Stijnen et al. (2004) and Li et al. (2022). All simulations open slightly wider than the experiment, which Stijnen et al. attribute to fluid leaking over the top of the valve between the strips of adhesive tape that held the leaflet. At _t_/_T_ = 0.37, with the leaflet pushed wide open, a large vortex rolls up at its trailing edge, as observed in the experiment.

<div class="rh-figs is-single">
  <figure>
    <img src="{{ '/assets/img/mechanical-heart-valve/validation-results.png' | relative_url }}" alt="(a) Inlet velocity over one cycle, (b) opening angle over one cycle compared with Stijnen et al. 2004 experiment and simulation and Li et al. 2022, (c) vorticity at t/T = 0.37" loading="lazy">
    <figcaption>(a) Inlet velocity over one cycle. (b) Opening angle compared with the experiment and simulation of Stijnen et al. (2004) and Li et al. (2022). (c) Vorticity at <em>t</em>/<em>T</em> = 0.37.</figcaption>
  </figure>
</div>

**Application: supravalvular aortic stenosis.** Supravalvular aortic stenosis is a rare congenital narrowing of the ascending aorta just above the aortic valve. It alters how the valve moves and creates a large pressure drop across the narrowing. I built an idealised, axisymmetric model from the aortic root to the ascending aorta:

- aortic diameter _D_ = 2 cm, with a sinus cavity of radius _R_ = _D_;
- two rigid leaflets of length 0.57*D*, initially open at 40°;
- a cosine-shaped stenosis of length 2*D* that reduces the diameter by 70%; and
- _Re_ = _UD_/_ν_ = 200, _St_ = 0.055, and a grid of 0.01*D* in a 35*D* × 3.4*D* domain.

<div class="rh-figs is-single">
  <figure>
    <img src="{{ '/assets/img/mechanical-heart-valve/svas-schematic.png' | relative_url }}" alt="Idealised supravalvular aortic stenosis model: inlet, two leaflets at the entrance of a sinus cavity, and a cosine-shaped stenosis downstream" loading="lazy">
    <figcaption>Idealised model of supravalvular aortic stenosis (not to scale).</figcaption>
  </figure>
</div>

After about four cycles, the leaflet motion repeats from cycle to cycle. The valve stays open for more than half of each cycle. While it is open, the pressure in the sinus is nearly uniform, but a strong negative pressure develops downstream of the stenosis, where a high-speed jet forms. A vortex shed from the leaflets hits the junction between the sinus and the downstream aortic wall.

<div class="rh-figs is-single">
  <figure>
    <img src="{{ '/assets/img/mechanical-heart-valve/svas-fields.png' | relative_url }}" alt="Pressure, streamwise velocity and vorticity in the stenosis model at t/T = 9.4 with the valve open" loading="lazy">
    <figcaption>(a) Pressure, (b) streamwise velocity and (c) vorticity with the valve open, <em>t</em>/<em>T</em> = 9.4.</figcaption>
  </figure>
</div>

## Publication

Huang, Q., Li, Z. & Li, Z. (2024). Numerical analysis of aortic valve dynamics in patients with supravalvular aortic stenosis. _Proceedings of the 24th Australasian Fluid Mechanics Conference_ (AFMC2024), Canberra, Paper AFMC2024-158.

Stijnen, J.M.A., de Hart, J., Bovendeerd, P.H.M. & van de Vosse, F.N. (2004). Evaluation of a fictitious domain method for predicting dynamic response of mechanical heart valves. _Journal of Fluids and Structures_ 19(6), 835–850.
