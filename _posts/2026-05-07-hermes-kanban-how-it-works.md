---
layout: single
title: "Hermes Kanban — How It Works: Multi-Agent Task Management with Human Approval"
date: 2026-05-07
categories: [project-log]
tags: [hermes, kanban, automation, multi-agent, workflow]
classes: wide
author_profile: true
show_date: true
read_time: true
last_modified_at: 2026-06-20
---

After 4 failed attempts with earlier automation systems, I built **Hermes Kanban** — a multi-agent task management system designed for durable, collaborative workflows that require human approval.

## The Problem

Most task management tools fall into two extremes:
- **Too simple**: Trello, Notion — great for tracking, no execution
- **Too autonomous**: AutoGPT-style agents — execute but no human oversight

I needed something in between: **agents that do the work, but pause for my approval at key decisions.**

## What Is Hermes Kanban?

**Kanban** is a persistent task management system built on top of Hermes (my personal AI agent framework). It combines:

| Feature | Description |
|---------|-------------|
| **Persistent state** | Tasks survive session resets (SQLite DB) |
| **Multi-agent** | Orchestrator + specialized workers (researcher, analyst) |
| **Human approval gates** | Workers block tasks for review before proceeding |
| **Workspace isolation** | Each task gets its own file workspace |
| **Dashboard** | Web UI at `localhost:9119` to visualize progress |

## When to Use Kanban vs. Other Approaches

| Need | Use |
|------|-----|
| Quick question, single response | `delegate_task` (RPC-style) |
| Batch file processing (>10 files) | Direct Python script with rate limiting |
| **Multi-step research + approval** | **Kanban** |
| Strategy, planning, complex investigation | **Kanban** |

**Rule of thumb:** If you need to **approve intermediate steps** or the work spans **more than one session**, use Kanban.

## Architecture

```
User creates task → Gateway assigns → Worker executes → Blocks for approval → User reviews → Worker completes
```

### Components

1. **Gateway/Dispatcher** — Runs continuously, assigns tasks to available workers
2. **Workers** — Specialized agents (`researcher`, `analyst`) with injected skills
3. **Kanban DB** — SQLite at `~/.hermes/kanban.db` (task state, metadata)
4. **Workspaces** — Per-task directories at `~/.hermes/kanban/workspaces/<task_id>/`
5. **Dashboard** — Flask web UI showing task board, progress, logs

## Real Example: Job Search Research

**Task:** Research IT roles at Charter/Spectrum, analyze gaps, create 30-60-90 plan.

**Flow:**
1. `hermes kanban create "Research IT roles at Charter" --assignee researcher`
2. Gateway spawns researcher worker → searches, extracts requirements
3. Worker blocks: "Found 3 target roles. Proceed to gap analysis?"
4. User approves → worker creates `analisis-brechas.md`
5. Worker blocks: "Gaps identified. Create 30-60-90 plan?"
6. User approves → worker creates `plan-30-60-90.md` + `tabla-comparativa.md`
7. Task complete → files copied to Obsidian for persistence

**Result:** 3 structured documents created with human checkpoints at each phase.

## Key Commands

```bash
# Initialize (once)
hermes kanban init
hermes gateway start

# Task management
hermes kanban create "Task title" --assignee researcher
hermes kanban list
hermes kanban show <task_id>
hermes kanban complete <task_id>

# Dispatch (run workers)
hermes kanban dispatch --max 1    # One at a time (avoids rate limits)
hermes kanban dispatch --max 5    # Parallel (needs rate limit handling)

# Profiles
hermes profile create researcher
hermes -p researcher config set model qwen/qwen3.5-397b-a17b
```

## Lessons Learned (So Far)

✅ **What works:**
- Human approval gates prevent runaway agents
- Workspace isolation keeps task artifacts organized
- Dashboard provides instant visibility
- Skills auto-inject (`kanban-worker`, `kanban-orchestrator`)

⚠️ **Watch out for:**
- **Rate limits**: NVIDIA NIM = 40 RPM. Running 5 workers in parallel = guaranteed 429 errors. Fix: `dispatch --max 1` or configure OpenAI fallback.
- **Workspace is temporary**: Copy important files to Obsidian/Dropbox immediately after task completion.
- **Profiles must exist first**: Tasks assigned to non-existent profiles go to "terminal lane" (ignored forever).

## What's Next

- Formalize the `kanban-workflow` skill after 3-5 successful uses
- Automate workspace → Obsidian sync
- Add webhook notifications for approval requests

---

*Part of the Hermes v4 personal automation system. [View on GitHub](https://github.com/beto-agent/hermes).*