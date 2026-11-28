---
layout: simulation
title: Porting the blood-flow solver from my master's research to modern C++
description: An AI-assisted port of a legacy Fortran finite element solver, checked to reproduce the original bit for bit.
importance: 3.5 # next to the FSI benchmarks (Ryan, 2026-11-27)
category: Cardiovascular
tags: ["3D", "FEM", "Haemodynamics", "Verification"]
stack: ["FEM", "OpenMP", "AI coding assistant", "C++"]
summary: >
  During my master's research (2013–2016) I simulated pulsatile, non-Newtonian blood flow with a Fortran finite
  element code. With an AI coding assistant, I have ported it routine by routine to C++17. Built with the same
  compiler toolchain, the port reproduces the original exactly: the same internal arrays, bit for bit, and the same
  output files, byte for byte.
thumbnail: assets/video/legacy-solver-port/preview.webm
thumbnail_poster: assets/video/legacy-solver-port/preview.jpg
variants:
  - {
      name: Flow through a 90° bend over three cardiac cycles,
      src: assets/video/legacy-solver-port/bend-peak-systole.webm,
      mp4: assets/video/legacy-solver-port/bend-peak-systole.mp4,
      poster: assets/video/legacy-solver-port/bend-peak-systole.jpg,
    }
media_aspect: 16 / 9
params:
  - { label: Agreement with the original, value: Bit-for-bit }
  - { label: Mesh, value: "77,385 nodes" }
  - { label: Speed-up, value: "3.3× (4 threads)" }
  - { label: Language, value: Fortran → C++17 }
links: { paper: "https://doi.org/10.1177/0954406220911397" }
---

## Why port a working code

For my master's research at Nanjing University of Aeronautics and Astronautics, I learned and adapted a Fortran finite element code for three-dimensional pulsatile blood flow, obtained from another research group. It is a fractional-step solver on tetrahedral meshes, with Carreau–Yasuda shear-thinning blood and Womersley inlet profiles. Versions of this code produced the results of our paper on inlet waveform shape in an artery bifurcation (Proc IMechE Part C, 2021; see below).

The code still runs, but its case parameters are compiled into the program, it reads one family of structured meshes, and it runs on one core. Before extending it to imported, patient-specific meshes, I wanted a modern, tested version that I could trust to be the same solver. The version ported first is the 90° bend: its solver is the one used for the paper's validation case against the experiments of Gijsen et al.

## How the port was done

An AI coding assistant wrote the code. I wrote the requirements and the acceptance test, reviewed the work and checked the results against the reference:

- **Regression first.** Before any C++ was written, the original Fortran source was compiled with gfortran, with a stand-in for the one IMSL library routine it calls (a complex Bessel function). An instrumented build writes out the internal arrays (matrices, velocity gradients, viscosity, inlet flux) after each main routine of a time step. These dumps are the reference.
- **Routine by routine.** Each ported routine was compared with its reference arrays: the 58 arrays of the initialisation, then the 16 arrays of each of the first time steps.
- **The strictest test.** The internal arrays must agree bit for bit, not within a tolerance, and every file the original program writes must be byte-identical over long runs.
- **A second review.** Each batch of changes was reviewed a second time, in a separate session, before it was merged.

The C++ code uses only the standard library, plus OpenMP for the parallel build. Bit-for-bit agreement holds when the C++ is compiled with g++ from the same GCC version as the Fortran reference, and needs two compiler settings: no fused multiply–add (`-ffp-contract=off`), and Fortran's rule for complex division (`-fcx-fortran-rules`). Without the second, the Womersley inlet velocities differ by up to 60 units in the last place.

## Results

**Identical results.** Starting from rest, the Fortran and the C++ port were each run for 3,750 time steps through the 90° bend, up to the peak systole of the inlet waveform. All 75 saved flow fields (velocity and pressure at all 77,385 nodes) are byte-identical, and so are the restart files and the convergence histories. Earlier checks found the same for restarts, and for the OpenMP build on 1, 2, 3 or 4 threads. A few branches that a normal run never reaches were ported from the source and are covered by unit tests only.

<div class="rh-figs is-single">
  <figure>
    <img src="{{ '/assets/img/legacy-solver-port/fortran-vs-cpp.png' | relative_url }}" alt="Velocity magnitude on the symmetry plane of the 90° bend at peak systole computed by the C++ port, with velocity profiles across the bend from the Fortran (lines) and the C++ port (symbols), which coincide" loading="lazy">
    <figcaption>Top: velocity magnitude on the symmetry plane at peak systole (C++ port). Bottom: profiles across the tube at the two dashed lines, Fortran (lines) and C++ port (symbols). The saved fields of the two codes are identical at every node.</figcaption>
  </figure>
</div>

**Faster.** The time per step fell from 0.62 s for the Fortran (one core) to 0.39 s for the serial C++, mainly because the element geometry of the convection matrix is now computed once instead of every step. Parallelising, with OpenMP, only the parts whose result does not depend on the number of threads (element-by-element assembly, matrix–vector products and the independent linear systems of each step) brings it to 0.19 s on four threads, with identical results. Further speed-ups, including GPUs, will be added here once they are measured.

<div class="rh-figs is-single">
  <figure>
    <img src="{{ '/assets/img/legacy-solver-port/speedup.png' | relative_url }}" alt="Wall time per time step of the Fortran and of the C++ port in serial and with 2, 3 and 4 OpenMP threads" loading="lazy">
    <figcaption>Wall time per time step after the start-up transient (steps 101–200; 77,385 nodes; single runs on a 4-core cloud virtual machine, Intel Xeon at 2.1 GHz). All C++ runs give results identical to the Fortran.</figcaption>
  </figure>
</div>

**What the port taught me about the old code.** Bit-for-bit matching makes small effects visible. In one test, a round-off-level change in the inlet flux (about 2 × 10⁻⁷ relative) grew to a pressure difference of about 1.5% after 100 steps. A plausible, not yet confirmed, cause is the stopping test of the iterative (SOR) solvers: they stop when the largest single update falls below a fixed threshold, so one sweep more or less can depend on round-off. Similarly, the same source compiled with two gfortran versions on two operating systems differs in the fourth significant figure at a monitored node after 100 steps. Any future change to the numerics will therefore be judged against tolerances of this size; only the faithful port is held to bitwise identity.

## The 2021 paper: does the inlet waveform shape matter?

With a bifurcation version of the same code (not yet ported), we simulated pulsatile non-Newtonian flow in an idealised artery bifurcation with a non-planar daughter branch (254,448 elements). Three inlet waveforms with the same mean velocity drove the flow: a simplified waveform A, and two characteristic waveforms B and C, which peak later in the cycle and fluctuate during diastole.

<div class="rh-figs">
  <figure>
    <img src="{{ '/assets/img/legacy-solver-port/jmes-waveforms.png' | relative_url }}" alt="Mean inlet velocity over one cardiac cycle for waveforms A, B and C" loading="lazy">
    <figcaption>The three inlet waveforms (digitised; the simulations used Fourier fits of them), with pulsatility indices PI = 1.13, 1.35 and 1.48.</figcaption>
  </figure>
  <figure>
    <img src="{{ '/assets/img/legacy-solver-port/jmes-wss-cycle.png' | relative_url }}" alt="Wall shear stress over one cardiac cycle at the minimum- and maximum-WSS points of the planar daughter branch for the three waveforms" loading="lazy">
    <figcaption>Wall shear stress over a cycle at the minimum-WSS point (outer wall) and the maximum-WSS point (inner wall) of the planar branch, normalised by the inlet value.</figcaption>
  </figure>
  <figure>
    <img src="{{ '/assets/img/legacy-solver-port/jmes-osi-pi.png' | relative_url }}" alt="Maximum and mean oscillatory shear index of the planar and non-planar branches against the pulsatility index of the inlet waveform" loading="lazy">
    <figcaption>Maximum and mean oscillatory shear index (OSI) of each daughter branch against the pulsatility index of the waveform; lines are least-squares fits.</figcaption>
  </figure>
</div>

Flow separation, the position and magnitude of the peak wall shear stress at peak systole, and the maximum time-averaged wall shear stress were remarkably similar for all three waveforms. The clearest difference is in the oscillatory shear index (OSI), whose maximum and mean values grow with the pulsatility index of the waveform. Along the planar branch, the peak OSI for waveform C was 8.7% higher than for the other waveforms; on the non-planar branch, its curvature largely offset the effect of the waveform. These small differences suggest that a suitably scaled simplified waveform is a reasonable inlet condition when a patient's own waveform is not available.

Figures redrawn from the original post-processing data of Q. Huang, J. Sun and C. Xu, "Effects of waveform shape of pulsatile blood flow on hemodynamics in an artery bifurcation model", _Proceedings of the Institution of Mechanical Engineers, Part C: Journal of Mechanical Engineering Science_ 235(2), 428–440 (2021), [doi:10.1177/0954406220911397](https://doi.org/10.1177/0954406220911397).
