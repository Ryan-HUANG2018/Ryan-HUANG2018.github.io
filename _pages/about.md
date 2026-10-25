---
layout: about
title: About
permalink: /
subtitle: PhD | Biomedical/Mechanical Engineer

# Homepage hero (docs/redesign/REDESIGN.md §2.2). The full bio lives in _pages/cv.md.
hero:
  status: QUT · Centre for Biomedical Technologies
  focus: Computational fluid dynamics — fluid–structure interaction and AI-driven modelling for biomedical, aerospace and energy applications.
  bio: >
    Visiting Fellow in the Cardiovascular Technology Laboratory, Centre for Biomedical Technologies, Queensland University of Technology (QUT).
    I develop high-fidelity fluid–structure interaction solvers and use them to study cardiovascular flows,
    insect flight and flapping-wing micro air vehicles.
  viewport: VORTICITY |ω|
  video: # e.g. assets/video/hero/vorticity.webm (autoplay loop)
  video_mp4: # optional H.264 fallback
  poster: # optional first-frame image
  params:
    - { label: Re, value: "[3.9e3]" }
    - { label: MODEL, value: "[LES]" }
    - { label: SOLVER, value: "[OpenFOAM]" }
    - { label: CELLS, value: "[12.4M]" }

# Filter chips above the simulation cards; each matches a project's `category`.
simulations:
  categories: [Cardiovascular, "Insect & flapping flight", FSI methods]

selected_papers: true # includes a list of papers marked as "selected={true}"

announcements:
  enabled: true # includes a list of news items
  scrollable: true # adds a vertical scroll bar if there are more than 3 news items
  limit: 5 # leave blank to include all the news in the `_news` folder

# 04 Connect: Teraviq banner. The social grid below it reads _data/socials.yml (order in _data/social_abbr.yml).
connect:
  teraviq:
    url: https://www.teraviq.com/
    role: MY PROJECT · FOUNDER
    status: IN DEVELOPMENT
    tagline: From heartbeats to wingbeats.
    blurb: Simulating how fluids and structures interact, at scale.
---
