---
layout: default
title: Blog
description: "Blog — IT infrastructure, automation, networking, and technical notes by Gilberto Miranda."
permalink: /blog/
---

<section class="section" id="blog">
  <div class="container">
    <h2 class="section-title">Blog &amp; Notes</h2>
    <p class="section-subtitle">Technical notes, project logs, and thoughts on IT infrastructure, automation, and networking.</p>

    <div class="projects-grid">
      {% for post in site.posts %}
      <article class="project-card">
        <div class="project-header">
          <h3><a href="{{ post.url | relative_url }}" style="color: inherit; text-decoration: none;">{{ post.title }}</a></h3>
          <span class="project-type">{{ post.category | default: "Post" }}</span>
        </div>
        <div class="project-body">
          <p>{{ post.excerpt | strip_html | truncatewords: 40 }}</p>
          <p style="font-size: 0.85rem; color: var(--color-text-dim); margin-top: 12px;">
            <time datetime="{{ post.date | date: '%Y-%m-%d' }}">{{ post.date | date: "%B %d, %Y" }}</time>
            {% if post.tags %} · {{ post.tags | join: ", " }}{% endif %}
          </p>
        </div>
      </article>
      {% endfor %}
    </div>
  </div>
</section>
