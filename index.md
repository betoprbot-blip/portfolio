---
layout: default
title: Home
description: "Gilberto Miranda — IT Infrastructure & Technical Support professional with 20+ years in telecommunications, networking, and remote troubleshooting. Based in Austin, TX."
---

<!-- Hero Section -->
<section class="hero" id="hero">
  <div class="container">
    <p class="hero-label">IT Professional — Austin, TX</p>
    <h1 class="hero-title">Gilberto Miranda</h1>
    <p class="hero-subtitle">
      20+ years solving complex infrastructure and support problems in telecommunications and networking. I help businesses stay connected — remotely, efficiently, and without unnecessary downtime.
    </p>
    <div class="hero-cta">
      <a href="{{ '/#contact' | relative_url }}" class="btn btn-primary">Get in Touch</a>
      <a href="{{ '/#projects' | relative_url }}" class="btn btn-secondary">View Projects</a>
      <a href="{{ '/resume/' | relative_url }}" class="btn btn-secondary">Resume</a>
    </div>
  </div>
</section>

<!-- About Section (brief) -->
<section class="section" id="about">
  <div class="container">
    <h2 class="section-title">About Me</h2>
    <div class="about-grid">
      <div class="about-text">
        <p>
          I'm an IT professional with over two decades of hands-on experience in telecommunications, network engineering, and technical support. Currently at <strong>Charter Communications (Spectrum)</strong> in Austin, TX, I handle complex business-tier support — resolving voice, video, and data issues while preventing unnecessary field dispatches at a <strong>89.98% rate</strong>.
        </p>
        <p>
          Before Charter, I spent years as an independent IT infrastructure consultant in Puerto Rico, designing and maintaining LAN/WAN environments for businesses with 100+ users across multiple sites.
        </p>
        <p>
          I'm now looking for <strong>remote or hybrid IT roles</strong> — infrastructure, support engineering, or network operations — and open to <strong>freelance projects</strong> in network design, system automation, and technical documentation.
        </p>
        <p>
          <a href="{{ '/about/' | relative_url }}" class="btn btn-secondary">Read More →</a>
        </p>
      </div>
      <div class="about-skills">
        <h3>Core Skills</h3>
        <ul class="skill-list">
          <li>Remote Troubleshooting &amp; Incident Management</li>
          <li>LAN/WAN Administration &amp; Network Analysis</li>
          <li>VoIP / Voice over IP</li>
          <li>Virtualization (VMware, Hyper-V)</li>
          <li>System Monitoring &amp; Disaster Recovery</li>
          <li>Windows Server Administration</li>
          <li>Active Directory, DNS, DHCP, VPN</li>
          <li>Technical Documentation &amp; Knowledge Bases</li>
          <li>Bilingual (English/Spanish)</li>
        </ul>
        <h3>Tools &amp; Stack</h3>
        <ul class="skill-list">
          <li>VMware vSphere / Hyper-V</li>
          <li>Windows Server (NT – 2019)</li>
          <li>Active Directory / Group Policy</li>
          <li>Wireshark / Network Analyzers</li>
          <li>Python / Bash (scripting &amp; automation)</li>
          <li>WSL2, rclone, Cron (infrastructure)</li>
          <li>Obsidian / Markdown (documentation)</li>
        </ul>
      </div>
    </div>
  </div>
</section>

<!-- Projects Section -->
<section class="section section-alt" id="projects">
  <div class="container">
    <h2 class="section-title">Projects</h2>
    <p class="section-subtitle">Selected work — from production systems to personal automation. <a href="{{ '/blog/' | relative_url }}">Read the blog →</a></p>
    <div class="projects-grid">

      <article class="project-card">
        <div class="project-header">
          <h3>Hermes v4 — Personal Automation System</h3>
          <span class="project-type">Personal / Infrastructure</span>
        </div>
        <div class="project-body">
          <p><strong>Problem:</strong> After 4 failed attempts with OpenClaw and earlier Hermes versions, I needed a reliable personal system to automate finances, sync data across cloud and local storage, and maintain operational continuity — without daily maintenance overhead.</p>
          <p><strong>Solution:</strong> Designed and built a WSL2-based automation stack with unidirectional sync (rclone), scheduled cron jobs, and Obsidian-based documentation. Implemented checkpoint-based continuity so the system survives context resets and session failures.</p>
          <p><strong>Stack:</strong> WSL2, rclone, Python, Bash, Cron, Obsidian, Google Drive API, NVIDIA NIM (LLMs)</p>
          <p><strong>Result:</strong> 20+ days of uninterrupted automated operation. Daily sync, financial tracking, and status reporting run without manual intervention. Reduced daily maintenance to under 5 minutes.</p>
        </div>
      </article>

      <article class="project-card">
        <div class="project-header">
          <h3>89.98% Truck Roll Prevention Rate</h3>
          <span class="project-type">Production / Support</span>
        </div>
        <div class="project-body">
          <p><strong>Problem:</strong> Business clients at Spectrum frequently required on-site technician visits for issues that could be resolved remotely — costing time, money, and customer satisfaction.</p>
          <p><strong>Solution:</strong> Developed deep diagnostic workflows for voice, video, and data services over coaxial and fiber infrastructure. Learned to guide non-technical users through self-service tools and remote diagnostics, even when they were resistant or frustrated.</p>
          <p><strong>Stack:</strong> Spectrum Business Platform, VoIP diagnostics, Remote Desktop, Ticketing System, Knowledge Base</p>
          <p><strong>Result:</strong> Achieved 89.98% truck roll prevention rate across 4,100+ annual technical interactions, with a 4.03/5 tech satisfaction score.</p>
        </div>
      </article>

      <article class="project-card">
        <div class="project-header">
          <h3>Multi-Site LAN/WAN Deployment</h3>
          <span class="project-type">Consulting / Infrastructure</span>
        </div>
        <div class="project-body">
          <p><strong>Problem:</strong> Small and medium businesses in Puerto Rico needed reliable, scalable network infrastructure across multiple physical sites — with limited budgets and no dedicated IT staff.</p>
          <p><strong>Solution:</strong> Designed and deployed LAN/WAN environments for businesses with 100+ users. Handled physical installation, server configuration, network segmentation, and ongoing monitoring. Executed physical-to-virtual server migrations to optimize hardware costs.</p>
          <p><strong>Stack:</strong> Cisco/HP switches, Windows Server, VMware/Hyper-V, Active Directory, DNS/DHCP, VPN</p>
          <p><strong>Result:</strong> Delivered stable multi-site networks with documented monitoring protocols and disaster recovery procedures. Clients maintained operations without dedicated on-site IT.</p>
        </div>
      </article>

      <article class="project-card">
        <div class="project-header">
          <h3>YouTube Knowledge Base &amp; Tonal Analysis</h3>
          <span class="project-type">Personal / Data</span>
        </div>
        <div class="project-body">
          <p><strong>Problem:</strong> Accumulated hundreds of YouTube transcripts but had no structured way to organize, evaluate, or extract value from them. Most content was noise.</p>
          <p><strong>Solution:</strong> Built an automated pipeline that organizes transcripts into a structured vault (Obsidian), evaluates content quality using tonal analysis, and filters out low-value material. Created a numbered taxonomy for knowledge management.</p>
          <p><strong>Stack:</strong> Python, Obsidian, YouTube Data API, Custom tonal evaluation scripts</p>
          <p><strong>Result:</strong> Processed 500+ transcripts, identified 80% as reliable sources, and built a searchable personal knowledge base for continuous learning.</p>
        </div>
      </article>

    </div>
  </div>
</section>

<!-- Contact Section -->
<section class="section" id="contact">
  <div class="container">
    <h2 class="section-title">Contact</h2>
    <p class="section-subtitle">Open to remote/hybrid IT roles and freelance projects. Based in Austin, TX.</p>

    <div class="contact-grid">
      <div class="contact-item">
        <h3>Email</h3>
        <p><a href="mailto:betoprbot@agentmail.to">betoprbot@agentmail.to</a></p>
        <p class="contact-note">Proxy contact — responses forwarded within 24 hours.</p>
      </div>
      <div class="contact-item">
        <h3>Location</h3>
        <p>Austin, TX area</p>
        <p class="contact-note">Open to remote or hybrid roles. Relocation possible.</p>
      </div>
      <div class="contact-item">
        <h3>Availability</h3>
        <p>Open to opportunities now.</p>
        <p class="contact-note">Full-time, contract, or freelance — infrastructure, support engineering, network operations.</p>
      </div>
      <div class="contact-item">
        <h3>Response</h3>
        <p>All inquiries handled via proxy.</p>
        <p class="contact-note">Expect a reply within 24 hours on business days.</p>
      </div>
    </div>
  </div>
</section>
