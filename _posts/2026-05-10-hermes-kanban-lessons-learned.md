---
layout: single
title: "Hermes Kanban — Lessons Learned: Rate Limits, Fallbacks, and When NOT to Use It"
date: 2026-05-10
categories: [project-log]
tags: [hermes, kanban, rate-limiting, nvidia, lessons-learned, debugging]
classes: wide
author_profile: true
show_date: true
read_time: true
last_modified_at: 2026-06-20
---

After 4 days of production use (processing 43 files across multiple Kanban tasks), here are the hard lessons about multi-agent workflows, rate limits, and knowing when to reach for a script instead.

## The Context

I built Hermes Kanban for tasks requiring **human approval at decision points**. First real test: processing YouTube transcripts with tonal analysis — 502 files, 7 Kanban batches.

## Lesson 1: NVIDIA NIM Rate Limit Is Brutal (40 RPM)

**The problem:** 5 parallel workers × 3-5 requests each = 15-25 requests in seconds. NVIDIA allows 40/minute.

**Symptom:**
```
HTTP 429: Too Many Requests
Worker exited cleanly (rc=0) without calling kanban_complete or kanban_block
```

**Partial fix — OpenAI fallback in profile config:**
```yaml
# ~/.hermes/profiles/researcher/config.yaml
model: qwen/qwen3.5-397b-a17b
fallback:
  enabled: true
  model: gpt-5.5/openai-codex
  trigger: rate_limit
```

**Real fix for batch processing:** Don't use Kanban. Use a direct script with strict rate limiting:
```python
DELAY = 2.0  # seconds between requests
for archivo in archivos:
    tono = evaluar_con_hermes(archivo)
    time.sleep(DELAY)
```

**Result:** 43 files processed in 10 minutes, 0 errors, 36 classified as knowledge, 7 archived.

## Lesson 2: "Terminal Lane" = Tasks Assigned to Non-Existent Profiles

**Symptom:**
```
Skipped (non-spawnable assignee — terminal lane, OK): t_f4e1d550, t_86515a24...
```

**Cause:** Tasks assigned to profiles that don't exist yet. The dispatcher ignores them silently.

**Fix:** Create profiles BEFORE assigning tasks:
```bash
hermes profile create researcher
hermes profile create analyst
hermes -p researcher config set model qwen/qwen3.5-397b-a17b
hermes -p researcher config set fallback.enabled true
```

## Lesson 3: Protocol Violation — Workers Must Complete or Block

**Symptom:**
```
worker exited cleanly (rc=0) without calling kanban_complete or kanban_block — protocol violation
```

**Cause:** Worker hits rate limit, crashes silently, doesn't call the completion API. Task stays "in progress" forever.

**Fix:** Workers need try/catch that ALWAYS calls `kanban_block` on failure:
```python
try:
    result = do_work()
    kanban_complete(task_id, result)
except RateLimitError:
    kanban_block(task_id, "Rate limited - retry later")
except Exception as e:
    kanban_block(task_id, f"Error: {e}")
```

## Lesson 4: Workspaces Are Ephemeral

**Problem:** Workspaces live in `~/.hermes/kanban/workspaces/<task_id>/` — WSL2 sessions can lose them.

**Fix:** Copy immediately after task completion:
```bash
cp ~/.hermes/kanban/workspaces/t_ff242220/*.md /mnt/e/Dropbox/Hermes/04-personal/kanban/
```

## Lesson 5: Kanban ≠ Batch Processor

| Use Case | Tool |
|----------|------|
| 500+ files, same operation, no decisions | **Direct script** (2s delay, full control) |
| 3-5 steps, need human approval at each | **Kanban** |
| Research → analyze → plan with checkpoints | **Kanban** |
| Quick question, single answer | **delegate_task** |

**The rule:** If no human approval needed → **script**. If approval gates needed → **Kanban**.

## Updated Decision Matrix

| Factor | Kanban | delegate_task | Direct Script |
|--------|--------|---------------|---------------|
| Duration | Hours/days | Seconds/minutes | Minutes/hours |
| Human approval | ✅ Required | ❌ None | ❌ None |
| Rate limit handling | Complex (fallbacks) | Complex | **Full control** |
| State persistence | ✅ SQLite DB | ❌ Ephemeral | Manual |
| Parallel workers | ⚠️ Rate limit risk | ✅ Easy | ✅ With delay |

## Current Profile Config (Working)

```yaml
# ~/.hermes/profiles/researcher/config.yaml
model: qwen/qwen3.5-397b-a17b
providers:
  - name: nvidia
    api_key: $NVIDIA_KEY
fallback:
  enabled: true
  model: gpt-5.5/openai-codex
  trigger: rate_limit
```

## Checklist for New Kanban Tasks

- [ ] Multi-step with decision points?
- [ ] Need human approval?
- [ ] Spans multiple sessions?
- [ ] Profiles created + fallback configured?
- [ ] Rate limiting strategy defined?
- [ ] Workspace copy plan defined?

**If 5+ YES → Kanban. If batch processing → Script.**

---

*Part of Hermes v4.1. [Previous post: How Kanban Works](/2026/05/07/hermes-kanban-how-it-works/). [View on GitHub](https://github.com/beto-agent/hermes).*