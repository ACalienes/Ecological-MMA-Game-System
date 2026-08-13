# Octagon Edge / Ecological MMA — Claude Code Audit Digest (2026-04-28)

**Source**: External Claude Code creator-economy audit + independent re-verification (corrections at Kai memory `reference_kameha_claude_code_tools_audit_corrections_2026-04-28.md`).
**Status**: VERIFIED facts only.

---

## TL;DR for Octagon Edge

Two Anthropic-native primitives map directly onto fight-analysis + betting-intelligence work. Both are official, supported, and free of third-party reputational flags.

| Pattern / tool | Verdict | Use case |
|---|---|---|
| **Managed Agents data-analyst recipe** (Anthropic, Apr 8 2026) | Replicate locally | Fight CSV → CLV / Kelly Criterion / EV report with embedded charts |
| **Memory tool primitive** (`memory_20250818`, Anthropic) | Pull Now | Bounded fight datasets that exceed context (historical fight records, fighter career arcs, weight-class trends) |
| **Anthropic Agent/Environment/Session/Events vocabulary** | Adopt | Mesh portability when economics justify ($0.08/session-hour) |
| **mattpocock/skills/engineering/tdd + diagnose** (MIT) | Pull Now | TDD discipline for new analysis pipelines; diagnose for mid-fight model anomalies |

---

## 1. Managed Agents data-analyst recipe — direct fit

**Source**: `https://platform.claude.com/cookbook/managed-agents-data-analyst-agent` (verified live)
**Released**: April 8, 2026 — public beta
**Architecture vocabulary**:

```
Agent       = model + system prompt + tools + MCP servers + skills
Environment = configured container template (packages, network access)
Session     = running agent instance within an environment
Events      = messages exchanged
```

**Default model**: `claude-sonnet-4-6`
**Pricing**: $0.08/session-hour, only during active runtime
**Toolset alias**: `agent_toolset_20260401` (bash, read, write, edit, glob, grep, web_fetch, web_search)

### The pattern as it applies to fight analysis

```
Input:  CSV of fights (fighters, methods, rounds, odds at open/close, betting volume)
   ↓
Agent:  Reads CSV via bash + read tools
   ↓
Tools:  Glob/grep across multi-event datasets for cross-tab analysis
   ↓
Web:    Optional web_fetch for line movement at offshore books, recent injury reports
   ↓
Output: Narrative HTML report with embedded plotly charts:
        - CLV (Closing Line Value) distribution
        - Kelly Criterion bet sizing recommendations
        - EV (Expected Value) per fighter / per method
        - Confidence intervals + sensitivity analysis
```

### Local-first implementation

Run on Mac Mini M4. Adopt the vocabulary. Promote to hosted Managed Agents only when fight-card analysis cadence justifies the per-session cost (e.g., UFC 300-tier event with sustained 3-hour analysis runtime = $0.24, may be worth it for higher availability and Anthropic-managed scaling).

### Cookbook recipes to study

- **Data analyst agent** (CSV → narrative HTML) — direct pattern
- **SRE incident responder** — pattern for "model anomaly detected mid-card; explain why and recommend"
- **CMA in-production** — pattern for always-on fighter-monitoring agent that updates as news drops

---

## 2. Memory tool primitive — for bounded fight datasets

**Tool name**: `memory_20250818`
**Released**: September 29, 2025
**Architecture**: Client-managed `/memories` directory. Agent commands: view/create/insert/delete/rename/str_replace.

### Pairs with Context Editing

`clear_at_least` parameter on Context Editing (`context-management-2025-06-27` beta header) does server-side compaction.

### Use cases for Octagon Edge

- **Historical fight records** — 5-10 years of UFC data exceeds context if loaded raw
- **Fighter career arcs** — per-fighter performance trajectories (signature wins, losses, layoffs)
- **Weight-class trends** — division-level meta shifts (e.g., wrestling-heavy era at LW)
- **Camp / coach / training partner graphs** — relational data where one signal ripples (e.g., new coach announcement affects ~10 fighters in network)

### Why not reinvent

The Memory tool primitive is purpose-built for "bounded data exceeds context, agent needs to manage its own memory." Use it directly. Don't roll a custom JSON+SQLite memory system.

---

## 3. Anthropic Agent/Environment/Session/Events vocabulary

The audit's most strategic recommendation: adopt the vocabulary so any Kameha agent stays portable to hosted Managed Agents when economics justify.

### How Octagon Edge names its existing setup

```
Agent       = Octagon Edge — claude-sonnet-4-6 + system prompt for fight analysis
              + bash/read/write/edit/glob/grep tools
              + (eventually) MCP server for live odds API
              + skills for CLV / Kelly / EV calculations

Environment = Mac Mini M4 container with Python (pandas, numpy, scipy) + Node + ffmpeg
              + network access to odds APIs

Session     = a fight-card analysis run for a specific UFC event
              (started, runs through preliminary card, terminates after main card)

Events      = user turns ("analyze UFC 300 main event")
              + tool results (line movement at +110, then +125)
              + status updates (model confidence threshold breached)
```

This naming makes the eventual port to Anthropic Managed Agents trivial. No code change; just config.

---

## 4. mattpocock/skills relevant to Octagon Edge

**Repo**: `mattpocock/skills` (MIT, 36k stars)
**Structure**: nested under `skills/engineering/`, etc.

### Verified relevant paths

```
skills/engineering/tdd        — strict test-driven development (for new analysis pipelines)
skills/engineering/diagnose   — debugging with explicit hypotheses (for model anomalies)
skills/engineering/triage     — issue triage (for false-positive bet recommendations)
skills/engineering/zoom-out   — pull back from a stuck investigation
```

### Why these

Fight analysis pipelines are notoriously fragile (data sources change, fighter weight-class moves break joins). Strict TDD for new pipelines + structured diagnose discipline for mid-card anomalies = significantly more reliable than ad-hoc debugging.

---

## What NOT to pull

- **claude-mem** — vector memory with $CMEM Solana memecoin reputational flag (verified in their README). Use Anthropic's Memory tool primitive instead — official, supported, no memecoin.
- **Voice-Pro / Evolver / huashu-design / andrej-karpathy-skills** — none are Octagon Edge's lane.
- **Tolaria** — knowledge base is for ACD brand assets / Kai notes. Octagon Edge has structured fight data, not Notion-style notes.

---

## Cross-agent handoffs Octagon Edge should expect

- **Kai** routes "is there a fight tonight?" type queries. Octagon Edge produces analysis on request.
- **CFO** consumes betting EV outputs as a separate revenue stream tracking input.
- **Alex** consumes fight-card analysis HTML reports.

---

## Concrete next steps

1. **Adopt Anthropic Agent/Environment/Session/Events vocabulary** in the existing CLAUDE.md — name the current setup in those terms (this week)
2. **Replicate the data-analyst recipe locally** — pick a UFC event, run the pattern (Fight CSV → HTML report with charts)
3. **Migrate historical fight data to `/memories` directory** with `memory_20250818` tool (next 2 weeks)
4. **Pull `mattpocock/skills/engineering/tdd + diagnose`** for new analysis pipeline discipline
5. **Defer hosted Managed Agents promotion** until per-event analysis economics justify

Detailed verification trail: Kai memory `reference_kameha_claude_code_tools_audit_corrections_2026-04-28.md`.
