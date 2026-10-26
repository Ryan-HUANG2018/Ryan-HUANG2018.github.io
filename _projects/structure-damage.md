---
layout: simulation
title: Impact damage — plate perforation and Taylor impact
description: Material point method (MPM) simulations of plate perforation and a Taylor impact test, each validated against experiment.
importance: 10
category: FSI methods
tags: ["3D", "Impact", "MPM"]
summary: >
  Two impact problems solved with the material point method (MPM): an ogive-nose projectile perforating an
  A6061-T651 aluminium plate, and a Taylor impact test with the Johnson–Cook constitutive model.
thumbnail: assets/video/structure-damage/preview.webm
thumbnail_poster: assets/video/structure-damage/preview.jpg
variant_label: case
variants:
  - { name: Plate perforation, src: assets/video/structure-damage/perforation.webm, mp4: assets/video/structure-damage/perforation.mp4, poster: assets/video/structure-damage/perforation.jpg }
  - { name: Taylor impact, src: assets/video/structure-damage/taylor-impact.webm, mp4: assets/video/structure-damage/taylor-impact.mp4, poster: assets/video/structure-damage/taylor-impact.jpg }
media_aspect: 1270 / 336
params:
  - { label: Method, value: MPM }
  - { label: Perforation error, value: 4.2% }
  - { label: Taylor test error, value: 3.1% }
---

## Results

**Plate perforation.** An ogive-nose projectile strikes an A6061-T651 aluminium plate at θ = 30° and U₀ = 400 m/s. The predicted residual velocity of 207.8 m/s compares with 217 m/s measured by Piekutowski et al. (1996), a difference of 4.2%.

**Taylor impact test.** A rod with L₀ = 25.4 mm and D₀ = 7.6 mm strikes a rigid surface at v₀ = 190 m/s, using the Johnson–Cook constitutive model.

| | L (mm) | D (mm) | W (mm) |
|---|---|---|---|
| Experiment | 16.2 | 13.5 | 10.1 |
| MPM | 16.3 | 13.0 | 9.6 |

The overall error is 3.1%.

Piekutowski, A.J. et al. (1996). Perforation of aluminum plates with ogive-nose steel rods at normal and oblique impacts. _International Journal of Impact Engineering_ 18(7–8), 877–887.
