---
layout: single
title: "Projects"
permalink: /projects/
classes: wide
author_profile: true
---

Selected work — from production systems to personal automation.

---

## Hermes v4 — Personal Automation System
*Personal / Infrastructure*

**Problem:** After 4 failed attempts with OpenClaw and earlier Hermes versions, I needed a reliable personal system to automate finances, sync data across cloud and local storage, and maintain operational continuity — without daily maintenance overhead.

**Solution:** Designed and built a WSL2-based automation stack with unidirectional sync (rclone), scheduled cron jobs, and Obsidian-based documentation. Implemented checkpoint-based continuity so the system survives context resets and session failures.

**Stack:** WSL2, rclone, Python, Bash, Cron, Obsidian, Google Drive API, NVIDIA NIM (LLMs)

**Result:** 20+ days of uninterrupted automated operation. Daily sync, financial tracking, and status reporting run without manual intervention. Reduced daily maintenance to under 5 minutes.

---

## 89.98% Truck Roll Prevention Rate
*Production / Support*

**Problem:** Business clients at Spectrum frequently required on-site technician visits for issues that could be resolved remotely — costing time, money, and customer satisfaction.

**Solution:** Developed deep diagnostic workflows for voice, video, and data services over coaxial and fiber infrastructure. Learned to guide non-technical users through self-service tools and remote diagnostics, even when they were resistant or frustrated.

**Stack:** Spectrum Business Platform, VoIP diagnostics, Remote Desktop, Ticketing System, Knowledge Base

**Result:** Achieved **89.98% truck roll prevention rate** across **4,100+ annual technical interactions**, with a **4.03/5 tech satisfaction score**.

---

## Multi-Site LAN/WAN Deployment
*Consulting / Infrastructure*

**Problem:** Small and medium businesses in Puerto Rico needed reliable, scalable network infrastructure across multiple physical sites — with limited budgets and no dedicated IT staff.

**Solution:** Designed and deployed LAN/WAN environments for businesses with 100+ users. Handled physical installation, server configuration, network segmentation, and ongoing monitoring. Executed physical-to-virtual server migrations to optimize hardware costs.

**Stack:** Cisco/HP switches, Windows Server, VMware/Hyper-V, Active Directory, DNS/DHCP, VPN

**Result:** Delivered stable multi-site networks with documented monitoring protocols and disaster recovery procedures. Clients maintained operations without dedicated on-site IT.

---

## YouTube Knowledge Base & Tonal Analysis
*Personal / Data*

**Problem:** Accumulated hundreds of YouTube transcripts but had no structured way to organize, evaluate, or extract value from them. Most content was noise.

**Solution:** Built an automated pipeline that organizes transcripts into a structured vault (Obsidian), evaluates content quality using tonal analysis, and filters out low-value material. Created a numbered taxonomy for knowledge management.

**Stack:** Python, Obsidian, YouTube Data API, Custom tonal evaluation scripts

**Result:** Processed **500+ transcripts**, identified **80% as reliable sources**, and built a searchable personal knowledge base for continuous learning.