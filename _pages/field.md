---
layout: page
permalink: /field/
title: In the field
description: Talks, workshops and the people I work with.
nav: false
---

{% include field_grid.liquid %}

{% if site.data.life and site.data.life.size > 0 %}

  <section id="beyond-the-lab" class="rh-section rh-life">
    <div class="rh-section-head">
      {% include section_title.liquid title='Beyond the lab' sub='Places and moments away from the solver.' %}
    </div>
    {% include field_grid.liquid photos=site.data.life thirds=true %}
  </section>
{% endif %}
