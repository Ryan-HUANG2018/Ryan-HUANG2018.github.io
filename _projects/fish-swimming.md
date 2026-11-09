---
layout: simulation
title: Fish swimming
description: A two-dimensional undulating swimmer at Re = 400 and St = 0.573, with the vortices shed into its wake.
importance: 7
category: Bio-locomotion
tags: ["2D", "FSI"]
summary: >
  A two-dimensional fish-like body swims by sending a travelling wave along its length. At a Reynolds number of 400 and
  a Strouhal number of 0.573, each tail beat sheds a pair of opposite-signed vortices into the wake. Colours show the
  vorticity.
thumbnail: assets/video/fish-swimming/preview.webm
thumbnail_poster: assets/video/fish-swimming/preview.jpg
variants:
  - {
      name: Vorticity,
      src: assets/video/fish-swimming/fish_swimming.webm,
      mp4: assets/video/fish-swimming/Fish_swimming.mp4,
      poster: assets/video/fish-swimming/fish_swimming.jpg,
    }
media_aspect: 2 / 1
params:
  - { label: Reynolds number, value: "400" }
  - { label: Strouhal number, value: "0.573" }
  - { label: Method, value: IB–LBM }
links:
  video: https://youtu.be/H9pJUSb2LOY
---
