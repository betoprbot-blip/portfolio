---
layout: single
title: "The YouTube + AI Experiment: 865 Videos Processed, 0 Actions Taken — What I Learned"
date: 2026-05-12
categories: [reflection]
tags: [youtube, ai, knowledge-management, productivity, hubbard-tonal-scale, lessons-learned]
classes: wide
author_profile: true
show_date: true
read_time: true
last_modified_at: 2026-06-20
---

**TL;DR:** I spent 14 days building an automated pipeline to download, evaluate, and organize 865 YouTube transcripts using Hubbard's Tonal Scale. Result: beautiful structure, zero concrete actions. The experiment was deleted. Here's why — and what it taught me.

## The Setup

**Goal:** Automate consumption of technical/finance YouTube content → filter for quality → extract actionable insights for job search and finances.

**Pipeline:**
1. Download transcripts from curated channels (finance, IT, dev, productivity)
2. Evaluate each with **Hubbard's Tonal Scale** (4.0 = enthusiasm → -40.0 = apathy)
3. Filter: keep ≥2.5 (constructive), archive <2.5 (toxic/doubtful)
3. Organize into numbered Obsidian vault: `00-inbox`, `10-knowledge`, `20-reports`, `90-archive`
4. Generate executive reports with Dataview dashboards

**Tools:** Python, yt-dlp, Hermes (NVIDIA NIM LLMs), Obsidian, Dataview, cron jobs

## The Numbers

| Metric | Result | Verdict |
|--------|--------|---------|
| Videos processed | 865 | High volume |
| Average tone | ~2.5-2.8 | Barely constructive |
| **Videos ≥ 4.0 (enthusiasm)** | **0** | ❌ None |
| **Videos ≥ 3.5 (strong interest)** | **0** | ❌ None |
| Videos < 2.5 (toxic/doubtful) | ~47% | High noise |
| **Concrete actions generated** | **0** | ❌ Zero |
| Impact on job search/finances | None | ❌ No ROI |

## The Trap: "Collecting ≠ Executing"

This is the core lesson. I fell into **collector mode**:

✅ **What I did:** Processed 865 videos, built beautiful taxonomy, created dashboards, generated reports  
❌ **What I didn't do:** Apply to a single job, change a financial habit, send one networking email

**The illusion:** "I'm making progress because my vault is growing."  
**The reality:** My life wasn't changing — only my folder structure was.

### Signals I Ignored (Collector Mode Red Flags)

- [x] More time organizing than executing
- [x] Metrics of quantity (865 videos) over quality of life
- [x] "Soon I'll have enough info to act"
- [x] Vault grew, situation didn't

**Antidote:** Every time you process information, ask:
> **"What concrete action will I take TODAY with this?"**

If the answer is "none," you're collecting, not executing.

## AI ≠ Judgment

**What AI did well:**
- Process 865 transcripts in hours (not days)
- Identify emotional tone patterns at scale
- Classify massively

**What AI could NOT do:**
- Tell me **which video to apply to my life**
- Give me **criteria to select content BEFORE processing**
- **Execute anything on my behalf**

**Lesson:** AI is a tool, not a replacement for your judgment. It amplifies — it doesn't decide.

## Tone Filtering Is Necessary But Insufficient

**Valid finding:** 47% of YouTube content is tonal <2.5 (toxic/doubtful). Even "serious" channels (Bannon 1.5, CNBC 2.5) scored low. Constructive content (≥3.0) was a minority.

**But:** Filtering garbage ≠ finding gold. The best available tone (3.0) was barely "slightly constructive." No video hit 4.0+ (enthusiasm/action-oriented).

**Lesson:** YouTube is not a source of high-tonal, action-driving content for my goals.

## Structure ≠ Value

I built:
- Numbered taxonomy (00-99)
- Dataview dashboards
- Tonal evaluation scripts
- Executive reports

**Result:** Elegant structure. Empty content. **Organization without execution is just procrastination with better filing.**

## What I Actually Gained (The Real Value)

Despite zero actions from the videos themselves, the experiment produced:

1. ✅ **Validated:** 47% of YouTube is tonal-toxic (now I know)
2. ✅ **Learned to detect** collector mode (dangerous pattern)
3. ✅ **Built reusable Hermes skills:** `curador-obsidian`, `higiene-mental-ia`, tonal evaluation
4. ✅ **Confirmed:** Need tonal 4.0+ sources (not on YouTube)
5. ✅ **Documented process** (this post)

## Decision: Delete and Restart (May 12, 2026)

- 🗑️ **Deleted:** 865 videos, dashboards, reports → `/mnt/e/Dropbox/YouTube/90-archive/`
- 📦 **Kept:** This document, tonal scripts, `curador-obsidian` skill
- 🚫 **Won't do again:** Process YouTube "just in case," build structure without validated content, confuse organization with execution

## New Criteria for Future Experiments

**Before starting:**
1. **What concrete action will this enable?** (If "learn" → define what you'll DO with it)
2. **How will I measure value?** (Actions taken, not files created)
3. **Success criteria?** (e.g., "If 7 days = 0 actions → archive")

**During:**
4. **Weekly review:** Actions taken? Executor or collector mode? Closer to goal or distraction?

**After:**
5. **Closing questions:** What action did I take I wouldn't have? What would I do different? Continue or archive?

## The Formula

```
Value = (Content Quality) × (Actions Taken)
NOT:  Value = (Files Created) × (Organization)
```

## Next Iteration (If Ever)

**If I find a tonal 4.0+ source:**
1. Validate with 10 videos (not 865)
2. Extract 1 actionable insight per video
3. **Execute TODAY** (not "when I have more")
4. Measure weekly
5. **If 14 days = no results → archive and move on**

---

*Experiment archived with learning. [Previous: Kanban Lessons](/2026/05/10/hermes-kanban-lessons-learned/). [View on GitHub](https://github.com/beto-agent/hermes).*