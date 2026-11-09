---
layout: simulation
title: Pulsatile flow in a coronary artery tree
description: Pulsatile flow rates at the outlets of the left and right coronary branches over successive cardiac cycles.
importance: 6
category: Cardiovascular
tags: ["3D", "Haemodynamics"]
summary: >
  Pulsatile blood flow through a coronary artery tree, with the flow rate traced at each outlet branch
  (LAD, LCx, RCA, PDA) over successive cardiac cycles. The case is set up automatically: boundary conditions, meshing
  and the CFD solve, with Windkessel models at the aortic outlet and every coronary outlet.
thumbnail: assets/video/coronary-pulse/preview.webm
thumbnail_poster: assets/video/coronary-pulse/preview.jpg
variants:
  - {
      name: Outlet flow rates,
      src: assets/video/coronary-pulse/coronary_pulse.webm,
      mp4: assets/video/coronary-pulse/coronary_pulse.mp4,
      poster: assets/video/coronary-pulse/coronary_pulse.jpg,
    }
media_aspect: 16 / 9
params:
  - { label: Flow, value: Pulsatile }
  - { label: Outlet conditions, value: Windkessel }
  - { label: Workflow, value: Automated }
---

## Setup

The whole case is prepared without manual steps: case set-up, boundary-condition configuration, meshing of the computational domain, and the CFD solve. Windkessel boundary conditions are applied at the aortic outlet and at every coronary outlet. Their parameters are derived automatically from physiological measurements: heart rate, systolic blood pressure and myocardial volume.

A [video of the coronary model](https://youtu.be/H_Fi8QXyQ0g) is on my YouTube channel.
