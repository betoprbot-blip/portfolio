---
layout: single
title: "Building Hermes v4 — A Personal Automation System That Actually Works"
date: 2026-05-20
categories: [project-log]
tags: [automation, wsl2, rclone, obsidian, jekyll]
classes: wide
author_profile: true
show_date: true
read_time: true
---

After 4 failed attempts with OpenClaw and earlier Hermes versions, I built a personal automation system that runs without daily intervention. Here's how it works and what I learned.

## The Problem

I needed a system that could:

- Sync financial data from Google Drive automatically
- Track critical dates (debts, vacations, payments)
- Maintain operational continuity across session resets
- Run in under 5 minutes of daily maintenance

Previous attempts failed because they were too complex, too fragile, or required constant manual intervention.

## The Solution: Hermes v4

A WSL2-based automation stack built on three principles:

1. **Stability over complexity** — Every component must be proven and reliable
2. **Incremental evolution** — Add features only when the base is solid
3. **Unidirectional sync** — Data flows one way to prevent conflicts

### Architecture

- **WSL2** as the base environment — stable, persistent, always available
- **rclone** for unidirectional Google Drive sync (6:00 AM daily)
- **Cron jobs** for scheduled tasks (sync, curation, reminders)
- **Obsidian** as the documentation and knowledge layer
- **Jekyll + GitHub Pages** for this portfolio and blog

### Key Design Decisions

**Why rclone instead of Google Drive API directly?** Because rclone handles auth tokens, retries, and edge cases. I don't want to debug OAuth flows at 6 AM.

**Why Obsidian instead of a database?** Because I can read and edit notes without any tool. The vault is just Markdown files — future-proof and portable.

**Why Jekyll instead of a custom dashboard?** Because GitHub Pages handles hosting, SSL, and uptime. I focus on content, not infrastructure.

## Results

- **20+ days** of uninterrupted automated operation
- **Under 5 minutes/day** of maintenance
- **Zero data loss** across session resets
- Financial tracking, date reminders, and status reporting all running automatically

## What's Next

- Adding more cron jobs for proactive monitoring
- Expanding the knowledge base with structured project logs (like this post)
- Integrating LLM-based reasoning for smarter automation

The system isn't flashy. It just works. And that's the point.
