---
layout: single
title: "Memory Migration: From Honcho to Mem0 + ChromaDB — Zero-Config Semantic Memory"
date: 2026-06-20
categories: [project-log]
tags: [hermes, mem0, chromadb, memory, migration, semantic-search, vector-db]
classes: wide
author_profile: true
show_date: true
read_time: true
last_modified_at: 2026-06-20
---

After 4-5 days wrestling with Honcho (hardcoded model bug, docker-compose issues, Windows/WSL2 friction), I migrated Hermes' memory layer to **Mem0 + ChromaDB**. Result: zero-config, semantic search working, 99% → 33% memory pressure relieved.

## The Problem: Honcho Was Fighting Me

| Issue | Impact |
|-------|--------|
| **Hardcoded model** (gpt-4o-mini) | Couldn't use local/cheaper models |
| **Docker-compose on Windows** | WSL2 networking, volume mounts, permissions |
| **No semantic search** | Only keyword lookup |
| **Complex setup** | 3 services (API, Postgres, Qdrant) just for memory |

**Breaking point:** 47 historical sessions to process, Honcho deriver failing, zero visibility into what was stored.

## The Migration: Two Tools, One Purpose Each

### Mem0 — User Facts & Preferences (Semantic)
- **What:** Long-term memory for user facts, preferences, corrections
- **Backend:** Qdrant (vector) + SQLite (metadata)
- **API:** Simple `mem0_conclude()`, `mem0_search()`, `mem0_profile()`
- **Config:** `provider: mem0` in Hermes `config.yaml`
- **Result:** 20 facts stored, semantic search with relevance scores

### ChromaDB — Obsidian Vault Content (Semantic Search)
- **What:** 3,162 Markdown notes → vector embeddings → concept search
- **Backend:** Local ChromaDB at `E:/hermes/chroma_db`
- **Scripts:** `chroma_ingest.py`, `chroma_search.py`, `hybrid_search.py`
- **Skills:** `busqueda-semantica-obsidian`, `busqueda-hibrida-mem0-chroma`
- **Result:** Search by *concept*, not keyword ("truck roll prevention" finds relevant notes even without exact phrase)

## Architecture

```
┌─────────────────────────────────────────────────────────────┐
│                        HERMES AGENT                         │
├─────────────────────┬───────────────────────────────────────┤
│      Mem0           │           ChromaDB                    │
│  (User Facts)       │      (Vault Content)                  │
│  • Preferences      │  • 3,162 .md files                    │
│  • Corrections      │  • Project logs                       │
│  • Decisions        │  • Technical docs                     │
│  • API keys         │  • Meeting notes                      │
│  • Semantic search  │  • Semantic search                    │
└─────────────────────┴───────────────────────────────────────┘
```

## The Migration Process

### 1. Extract from Honcho (Manual)
```bash
# Honcho had no export. Read sessions manually, extract key facts.
# 47 sessions → 20 durable facts
```

### 2. Populate Mem0
```python
mem0_conclude(conclusion="User: Gilberto Miranda, Austin TX, Spectrum Tech Support I...")
mem0_conclude(conclusion="Finanzas: Tito_Finance_Master.xlsx in G:\\My Drive\\Hermes\\...")
mem0_conclude(conclusion="Obsidian vault: E:\\Dropbox\\Hermes (3,162 files)...")
mem0_conclude(conclusion="OpenRouter API key → E:\\hermes\\config\\openrouter_key.txt...")
mem0_conclude(conclusion="Preferences: Direct, concise, 'si/ya/yolo' = execute...")
```

### 3. Clean Hermes Built-in Memory
```bash
# Built-in was 99% full (2,195/2,200 chars)
# Removed: financial details, vault structure, project lists
# Kept: Only essential config pointers
# Result: 33% (742/2,200) — breathing room
```

### 4. Index Obsidian Vault to ChromaDB
```bash
cd E:/hermes/scripts
python chroma_ingest.py --vault "E:/Dropbox/Hermes" --db "E:/hermes/chroma_db"
# 3,162 files → ~45 min → indexed
```

### 5. Verify
```bash
# Mem0 search
mem0_search("Gilberto Miranda Austin") → 0.255 score ✓
mem0_search("Tito_Finance_Master.xlsx") → 0.22 score ✓

# Chroma search
python chroma_search.py "truck roll prevention" → finds relevant notes ✓
python chroma_search.py "kanban rate limit" → finds lessons learned ✓
```

## Configuration (Hermes `config.yaml`)

```yaml
memory:
  memory_enabled: true
  user_profile_enabled: true
  provider: mem0          # ← NEW: Mem0 as primary
  flush_min_turns: 6
  nudge_interval: 10
  memory_char_limit: 2200
  user_char_limit: 1375
```

## Search Comparison

| Query | Old (Keyword) | Mem0 (Semantic) | ChromaDB (Semantic) |
|-------|---------------|-----------------|---------------------|
| "truck roll" | Exact match only | Finds "89.98% prevention" | Finds project logs + metrics |
| "kanban 429" | Exact match | Finds "rate limit NVIDIA" | Finds lessons learned doc |
| "Susan Patterson" | Exact match | Finds "church contact recruiter" | — |
| "finanzas excel" | Exact match | Finds "G:\\My Drive\\Hermes" | Finds dashboard notes |

## What's Better Now

| Before (Honcho) | After (Mem0 + ChromaDB) |
|-----------------|-------------------------|
| Docker required | **Pure Python, local** |
| Single model (gpt-4o-mini) | **Any OpenRouter model** |
| Keyword search | **Semantic/concept search** |
| 3 services to manage | **2 local DBs (Qdrant + Chroma)** |
| No vault integration | **3,162 notes searchable** |
| Opaque storage | **Visible, queryable, portable** |

## What's Next

- [ ] Auto-ingest new Obsidian notes on save (file watcher)
- [ ] Mem0 dashboard plugin for Hermes web UI
- [ ] Cross-reference: Mem0 fact → ChromaDB note links
- [ ] Scheduled re-ingestion (weekly cron)

## Key Takeaway

**Don't over-engineer memory.** Two focused tools beat one complex platform:

- **Mem0** = "What do I know about the user?" (facts, preferences)
- **ChromaDB** = "What's in my vault?" (content, concepts)

Both local. Both semantic. Both queryable. Zero Docker.

---

*Part of Hermes v4.2. [Previous: YouTube Experiment](/2026/05/12/youtube-ai-experiment-lessons/). [View on GitHub](https://github.com/beto-agent/hermes).*