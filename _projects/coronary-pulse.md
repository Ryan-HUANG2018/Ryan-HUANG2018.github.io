---
layout: simulation
title: Pulsatile flow in a coronary artery tree
description: Pulsatile flow rates at the outlets of the left and right coronary branches over successive cardiac cycles.
importance: 3.8 # SIM-07, after the C++ port (Ryan, 2026-11-28)
category: Cardiovascular
tags: ["3D", "Haemodynamics"]
stack: ["OpenFOAM", "ANSYS Fluent", "Windkessel outlets", "Automated workflow", "C++"]
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
  - { label: Typical steady run, value: "≈ 8 M cells · 64 cores · ≈ 8 min" }
  - { label: Solver, value: OpenFOAM }
---

## Setup

The whole case is prepared without manual steps: case set-up, boundary-condition configuration, meshing of the computational domain, and the CFD solve in OpenFOAM. Windkessel boundary conditions are applied at the aortic outlet and at every coronary outlet. Their parameters are derived automatically from physiological measurements: heart rate, systolic blood pressure and myocardial volume.

## Pipeline and validation

This is the CFD part of EzyCardio, a coronary analysis platform from CT scans, where I led the CFD development at QUT. The first version used our in-house research solver, and a single vessel segment took over two hours. A clinical tool needs a result for the whole coronary tree within minutes, so I replaced it with an automated open-source pipeline:

| Step     | Tool     |
| -------- | -------- |
| Geometry | FreeCAD  |
| Meshing  | Gmsh     |
| CFD      | OpenFOAM |
| Output   | VTK      |

I cross-validated the OpenFOAM results against ANSYS Fluent on the same case: velocities agreed within 0.35%. A typical steady case of about 8 million cells runs on 64 cores in about 8 minutes, so a whole tree now takes minutes instead of hours for one segment.

A [video of the coronary model](https://youtu.be/H_Fi8QXyQ0g) is on my YouTube channel.
