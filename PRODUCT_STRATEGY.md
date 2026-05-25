# Ecological MMA System — Product Strategy

> Status: **Direction approved 2026-05-25.** Goal: take the system live as a paid,
> tiered freemium product — the definitive structured, constraints-led curriculum
> for all of MMA. This doc is the reference for the phased build.

---

## 1. Thesis (what the research proved)

**Structure is the product.** Across the paid landscape, people don't pay for *more*
content — they pay for a **complete, ordered system that tells them what to do next.**

| Platform | Model | Verdict from the market |
|---|---|---|
| BJJ Fanatics | $150–300 one-time · 3,393 titles | Volume, but *"you won't build a complete game from random techniques"* — unstructured, 10+ hrs |
| **Submeta** (Lachlan Giles) | $25/mo streaming | Wins on **structure**: 174 courses → 34 curated "Sets" (roadmaps), **quizzes/recall**, progress bars that *"feel like a video game"*, *"easiest to understand"* |
| BJJ Mental Models | $20/mo | Conceptual frameworks, not techniques |

Our system is *already* structured (environment → stage → finish, prerequisite maps,
progression pathways) and competitors aren't. **The asset the market pays for is the
thing we already have — the current site just buries it.**

## 2. The wedge

Ecological / constraints-led training is the dominant trend in grappling in 2025, but
it's almost entirely **BJJ-only**. Applying it to **whole-MMA** (striking, clinch, wall,
ground — all phases) is at the academic frontier (a 2024 paper only just proposed the
framework for MMA). **A productized, complete CLA curriculum for all of MMA does not
exist yet.** That is our differentiator and it's defensible.

## 3. Customers & tiers (approved: tiered freemium)

| Tier | Who | Gets | Price intent |
|---|---|---|---|
| **Free** | Curious practitioner/coach | Philosophy, one signature game, one full learning path, ~3 games — enough to hit the "aha" | $0 |
| **Practitioner** | Fighters / serious hobbyists | Full game library, all learning paths, progress tracking, recall checks, video (as added) | ~$15–25/mo |
| **Coach / Gym** | Coaches, gym owners | Everything + **coach tools** (lesson generator, session planning, assessment rubrics) + curriculum licensing + multi-seat | Higher / per-location |

**Gate after the aha, not before** (freemium converts 2–5% when users hit real value
first). The **coach tools are the high-willingness-to-pay wedge** — coaches pay for
curriculum + workflow, not just content.

## 4. Content architecture — apply Diátaxis

The current game pages fail by mixing four content types into one dense spec. Split them:

| Type | Need it serves | Here |
|---|---|---|
| **Tutorial** | guided learning | **Learning Paths** — curated tracks through the games |
| **How-to** | run it now | **Game pages** — decluttered, lead with a "How to Play" TL;DR |
| **Reference** | look up facts | Game Finder, Prerequisite Map, Glossary, full game spec |
| **Explanation** | understand *why* | **Concepts** — eco-dynamics theory pulled OUT of game pages |

- **Single source of truth:** consolidate the `docs/` and `Ecological Games Library/`
  trees — author once, publish everywhere. (They have drifted; the site currently lags
  real work. This is foundational and blocks everything else.)
- Declutter game pages: actionable content on top, academic framing linked out to Concepts.

## 5. Engagement system (what makes it sticky)

Research: progress bars, curated paths, "next step", and active recall drive completion
and retention. We have none; competitors prove they convert.

- **Clickable relationships** — every game links to its prerequisites/follow-ons (currently plain text). Biggest engagement win for least effort.
- **Related-Games cards + next/prev** at the bottom of each game.
- **Learning Paths** featured up front (not buried in Reference).
- **Progress tracking** — client-side now (localStorage) → accounts later.
- **Active-recall checks** per game/path (Submeta's most-praised feature).
- **Visible progression map** as a hero navigation device.
- Later: badges / streaks / completion stats.

## 6. Visual & media strategy

- **Now (scalable):** AI-generated imagery — per-environment cover art, position
  diagrams, and **sequential cue images with arrows** (proven effective for motor
  skills). Consistent iconography per environment (Open Space / Wall / Ground). Break up
  the table monotony.
- **Later (premium):** **video**. Video beats static for motor-skill learning
  (mirror-neuron imitation). The **class recordings are the video pipeline** — this
  connects directly to the audio-ingestion workflow ([[project-class-audio-ingestion]]).
  Video is a key justification for the paid tier.

## 7. Platform roadmap (approved: phased — MkDocs now, app later)

**Phase 0 — Foundation (now, low effort / high impact, on MkDocs)**
- Fix the source-of-truth drift (one tree).
- Make game relationships clickable (prereq/follow-on auto-linked).
- Fix orphan pages (CLA section, etc.) + the broken `wall-pin` link; collapse the
  120-link sidebar (`navigation.expand` off).

**Phase 1 — Restructure + visual (free site goes live)**
- Diátaxis IA: Learning Paths, decluttered Game pages with "How to Play" TL;DR,
  Concepts/Explanation separated, Reference tightened.
- AI imagery + iconography; refine landing; light client-side progress + next/prev.
- Ship the **free tier** publicly to start validating.

**Phase 2 — Monetize + interactive (paid tier)**
- Migrate the gated experience to **Next.js + Supabase + Stripe** (stack already in use
  on Kameha/pitch-deck work). Accounts, progress, recall quizzes, gating, payments.
- Coach tools become interactive app features. Begin video.

**Phase 3 — Scale**
- Coach/gym licensing & multi-seat, community, learning analytics.

Markdown stays the single source of truth throughout; Phase 2 renders the gated layer
from the same content.

## 8. Immediate next actions (Phase 0)
1. Consolidate to one content tree (decide `docs/` as canonical) and sync today's work.
2. Auto-link prerequisite/follow-on games across the library.
3. Nav cleanup: collapse, de-orphan, fix broken link.

## 9. Assumptions to validate with real users
- Price points (practitioner $/mo; coach/gym license).
- Which free games best drive the upgrade.
- Coach willingness-to-pay for the planning/assessment tools.

## Sources
- Submeta structure & pricing — https://bjjmore.com/submeta-review/ ; https://submeta.io/
- BJJ Fanatics value/criticism — https://bjjmore.com/best-bjj-fanatics-instructionals-review/
- Eco/CLA trend in 2025 BJJ — https://matborntv.com/the-complete-guide-to-modern-bjj-training-ecological-training-methods-taking-over-2025-and-revolutionizing-jiu-jitsu-education/
- Eco dynamics framework for MMA (2024) — https://www.tandfonline.com/doi/full/10.1080/21640629.2024.2325822
- Diátaxis documentation framework — https://diataxis.fr/start-here/
- E-learning engagement / gamification / progress — https://elearningindustry.com/gamification-in-learning-enhancing-engagement-and-retention-in-2025 ; https://mindstamp.com/blog/online-learning-best-practices
- Freemium gating / pricing — https://stripe.com/resources/more/freemium-pricing-explained ; https://demogo.com/2025/11/24/feature-gating-in-saas-practical-models-for-freemium-conversion-with-examples/
- Motor-skill learning: video vs static — https://pmc.ncbi.nlm.nih.gov/articles/PMC7730545/ ; https://www.nature.com/articles/s41598-023-45278-x
