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
  portrait: assets/img/portrait.jpg
  portrait_role: Visiting Fellow
  portrait_unit: Cardiovascular Technology Laboratory
  viewport: PASSIVELY PITCHING WINGS · JFM 2023
  video: assets/video/passively-flapping-wings/passively_flapping_wings.webm # autoplay loop
  video_mp4: assets/video/passively-flapping-wings/Passively_flapping_wings.mp4
  poster: assets/video/passively-flapping-wings/passively_flapping_wings.jpg
  params: # up to 4 cells under the viewport; [placeholders] are hidden. Values from _projects/passively-flapping-wings.md
    - { label: Re, value: "300" }
    - { label: Hinge Ch, value: "0.45 (soft)" }
    - { label: Grid, value: "7.25 M" }
    - { label: Method, value: "IB–LBM" }

# Impact panel under the hero. Update by hand from Google Scholar and refresh `snapshot`;
# metrics older than 3 months should be re-checked before relying on them.
impact:
  snapshot: 2026-10-26
  source: Google Scholar
  url: https://scholar.google.com/citations?user=RVQMTLsAAAAJ
  metrics:
    - { label: Citations, value: "355" }
    - { label: h-index, value: "10" }
    - { label: i10-index, value: "11" }
    - { label: Journal papers, value: "18", note: peer-reviewed research articles }

# Filter chips above the simulation cards; each matches a project's `category`.
simulations:
  categories: [Cardiovascular, Bio-locomotion, Heat transfer, Multiphase, Aerospace, FSI methods]

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
