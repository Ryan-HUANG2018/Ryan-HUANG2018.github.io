---
layout: simulation
title: Adaptive mesh refinement with hash tables
description: A block-structured Cartesian grid refines and coarsens as an oscillating cylinder and a flapping NACA0015 foil move through it, using a hash-table AMR framework coupled to the IB–LBM.
importance: 9
category: FSI methods
tags: ["2D", "AMR", "IB–LBM"]
summary: >
  The grid follows the body: fine cells cluster around an oscillating cylinder and a flapping NACA0015 foil, and coarsen again
  once the body has passed. The adaptive mesh refinement (AMR) framework of Liu et al. (2022) stores each refinement level
  in its own hash table, which makes finding a node and its neighbours fast. Coupled to the immersed boundary–lattice
  Boltzmann method, it is the solver of our 2023 Physics of Fluids paper on a flapping-foil power generator. Colours show
  the streamwise velocity.
thumbnail: assets/video/amr/preview.webm
thumbnail_poster: assets/video/amr/preview.jpg
variant_label: case
variants:
  - {
      name: Oscillating cylinder,
      src: assets/video/amr/amr_for_2d_cylinder.webm,
      mp4: assets/video/amr/AMR_for_2D_cylinder.mp4,
      poster: assets/video/amr/amr_for_2d_cylinder.jpg,
    }
  - {
      name: Flapping NACA0015,
      src: assets/video/amr/amr_for_2d_naca0015.webm,
      mp4: assets/video/amr/AMR_for_2D_NACA0015.mp4,
      poster: assets/video/amr/amr_for_2d_naca0015.jpg,
    }
media_aspect: 1050 / 720
params:
  - { label: Data structure, value: Hash table (Morton keys) }
  - { label: Refinement levels, value: "5" }
  - { label: Finest grid (foil), value: "0.00625c" }
  - { label: Grid nodes (cylinder), value: "32× fewer" }
links:
  paper: https://doi.org/10.1063/5.0134701
  video: https://youtu.be/lhvr0__Jp9k
---

## Setup

**Hash-table AMR.** Tree-based AMR either stores pointers from each cell to its parent, children and neighbours, which costs memory, or finds them by walking the tree, which costs time. The framework of Liu, Tian & Feng (2022) avoids both:

- each node is labelled by a Morton code, and the codes of its neighbours follow from the key with simple arithmetic and bit operations;
- the nodes of each refinement level are stored in their own hash table (`std::unordered_map`), so finding any node takes constant time, and keys from different levels never collide; and
- because each table holds one level, every neighbour lookup costs the same, and finer levels can take smaller time steps (multi-time-stepping).

As the body moves, the grid is refined around its new position and coarsened where it has left. Using a hash table instead of a binary (red–black) tree cut the computational time by more than 65%, with larger gains in 3D. The framework is written with the standard C++ library and is [open source](https://github.com/dugudyoudi/AMR-framework).

**Coupling to the IB–LBM.** The lattice Boltzmann method runs on the refined Cartesian blocks, and the immersed boundary method represents the moving body, so no body-fitted mesh is needed. Two layers of nodes overlap where blocks of different levels meet, and information passes between them by interpolation.

## Results

**Oscillating cylinder.** Compared with our earlier multi-block Fortran IB–LBM code on the same case, the AMR solver needs 32 times fewer grid nodes (45,863 instead of 1,441,301) and runs 18 times faster ([video](https://youtu.be/Xte7dpTSsao)).

**Flapping NACA0015 foil.** The foil pitches and plunges in a uniform flow at _Re_ = 1100, with pitching amplitude 76.3°, plunging amplitude 1 chord, reduced frequency _fc_/_U_ = 0.14 and a 90° phase between the two motions. These are the high-efficiency kinematics of Kinsey & Dumas (2008) for a flapping-foil power generator, and the predicted lift matches their results.

| Item                 | Value                                                                         |
| -------------------- | ----------------------------------------------------------------------------- |
| Computational domain | 40*c* × 30*c*                                                                 |
| Grid spacing         | 0.00625*c* (finest) to 0.2*c* (coarsest)                                      |
| Grid nodes           | 42,672                                                                        |
| Run time             | 15 minutes for 6 flapping cycles, on a laptop, serial (no OpenMP, MPI or GPU) |

**Flapping-foil power generator.** In Liu et al. (2023), we used this solver to study a flapping-foil generator placed between two thin plates of finite length, 1.5 to 4 chords from the foil, with the plates 10 to 50 chords long. Unlike walls of infinite length, which have been reported to raise the efficiency, the finite plates lower it:

- the plates' boundary layers interact with the leading-edge vortices and shrink the low-pressure region on the foil, which reduces lift and power;
- a large mass-flow deficit forms between closely spaced plates, so less power is available in the oncoming flow;
- the plate length upstream of the foil matters much more than the length downstream; and
- the efficiency falls by up to 35% with the plates 1.5 chords away, so these generators should be placed at least four chords from such obstacles.

## Publications

Liu, Z., Huang, Q., Li, Z., Li, Y. & Feng, X. (2023). Partial confinement effects on the performance of a flapping foil power generator. _Physics of Fluids_ 35(2), 027108.

Liu, Z., Tian, F.-B. & Feng, X. (2022). An efficient geometry-adaptive mesh refinement framework and its application in the immersed boundary lattice Boltzmann method. _Computer Methods in Applied Mechanics and Engineering_ 392, 114662. [doi:10.1016/j.cma.2022.114662](https://doi.org/10.1016/j.cma.2022.114662)
