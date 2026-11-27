---
layout: page
permalink: /publications/
title: Publications
description: Peer-reviewed journal articles and conference papers, newest first.
nav: true
nav_order: 2
---

<!-- _pages/publications.md -->

<!-- Bibsearch Feature -->

{% include bib_search.liquid %}

<h2 class="rh-pub-heading">Journal articles</h2>

<div class="publications">

{% bibliography %}

</div>

<p class="rh-pub-snapshot">{{ site.data.journals.snapshot }}</p>

<h2 class="rh-pub-heading" id="conferences">Conference papers and presentations</h2>

<p class="rh-pub-snapshot">All were oral presentations. “Full paper” means a paper in the conference proceedings.</p>

{% include conferences.liquid %}
