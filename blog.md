---
layout: archive
title: "Blog & Notes"
permalink: /blog/
classes: wide
author_profile: true
---

Technical notes, project logs, and thoughts on IT infrastructure, automation, and networking.

{% for post in site.posts %}
  {% include archive-single.html %}
{% endfor %}
