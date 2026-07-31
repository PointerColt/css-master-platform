# PROJECT: CSS Master Platform
 
## Overview
An interactive CSS learning platform — live code editor, auto-graded quizzes, topic-by-topic lessons. Free, no paywall. Built as a learning project by a first-year engineering student, alongside AI as a coding/teaching partner (not blind copy-paste).
 
## Stack
Pure HTML + CSS + Vanilla JS (current phase). Planned: React rebuild (Phase 9), then Node + Express + MongoDB backend (Phase 10).
 
## Teaching Style Rules (apply every session)
- Explain the concept/theory first, syntax second — never syntax first.
- One step at a time — wait for confirmation before continuing.
- Concise answers, no unnecessary words.
- Tell the user exactly which file/line to change and why — let them make the edit themselves when they ask for that.
- Never assume prior knowledge, but never dumb down real architecture either.
- Flag real bugs/bad patterns proactively, don't just answer the literal question asked.
## Architecture (established, do not casually change)
- SPA: `index.html` never reloads. Topics load via `fetch()` into `#dynamic-content-area`.
- One responsibility per JS file: `script.js` (navigation controller only), `exercise.js` (quiz only), `workspace.js` (live editor only).
- CSS split by component, all colors driven through `variables.css` — never hardcode hex values in component CSS files.
- JS controls state (classes, disabled, visibility) — CSS controls appearance. Never `element.style.color = ...` for anything semantic.
- File naming: lowercase kebab-case only (`main-content.css`, not `mainContent.css` or `Base.css`) — case-sensitive hosts (Netlify/Vercel) will break on inconsistent casing.
## Theme
**Charcoal & Amber** — warm off-white background, charcoal text, amber accent used sparingly (links, buttons, active states only — never as a heading color or background fill). Chosen over a red/champagne "Harvard" theme for lower reading fatigue over long sessions and stronger recruiter/engineering-credibility signal.
 
Tokens (`css/variables.css`):
```
--bg-base: #F5F1E8
--bg-surface: #FFFFFF
--text-primary: #1C1917
--text-secondary: #6B6560
--accent-primary: #B45A08
--accent-hover: #8A4406
--border-color: #E4DFD3
```
`color-scheme: light` is set (in both `<meta>` and `:root`) to stop Android Chrome's Force Dark from repainting the page.
 
**Amber usage rule (locked in during Topic 1.3):** Amber is restricted to `.chapter-label` and interactive elements only (buttons, links, active nav states, `:hover` states). It is NOT used as a static heading or decorative color anywhere else — this was specifically checked and fixed on `.reading-zone h3`, which now uses `font-weight: 700` + `--text-primary` for hierarchy instead of color. Exception pattern established: amber CAN appear on `:hover` for interactive-feeling components (e.g. the mistake callout box border transitions to amber only on hover, staying neutral at rest) — this keeps the color meaningfully rare instead of decorative background noise.

## Completed So Far
- [x] Sidebar + dynamic topic loading (fetch-based SPA)
- [x] Charcoal & Amber theme applied across all components
- [x] File naming cleaned up (kebab-case, dead `style.css` removed, `Base.css` casing bug fixed)
- [x] Quiz: locks after answering, no hover/select bugs, disabled-state styling
- [x] Quiz: question-to-question Previous/Next navigation (multi-question support)
- [x] Quiz: Next button becomes "Try Again" on last question, resets cleanly
- [x] Quiz: Next only appears after the current question is answered
- [x] Live code editor: real validation via `getComputedStyle` (fixed `#fff` vs `#ffffff` bug)
- [x] Live code editor: workspace click handler properly scoped (no stray `document.getElementById`)
- [x] Live code editor: unified color palette (removed neon-green/white/orange clash)
- [x] Topic-to-topic Previous/Next navigation (reuses sidebar's existing click logic)
- [x] Fixed `.reading-zone` case-mismatch bug (class was `Reading-Zone` in HTML, never matched CSS)
- [x] Fixed `.layout-wrapper` missing `width: 100%` (flex-parent shrink-to-fit bug)
- [x] Git initialized, `.gitignore` added, README.md written
- [x] **Topic 1.1: Core Architecture** — complete
- [x] **Topic 1.2: Workspace Setup & Inspecting** — complete
  - Fixed unclosed `<h1 class="topic-heading">` tag (was missing `/`)
  - Fixed Question 1 missing all `data-correct="true"` attributes (was unanswerable)
  - Fixed platform-wide `.option-container` vs `.options-container` class mismatch in `exercise.css` — this was silently breaking button spacing on every quiz question across the entire site, not just this topic
  - DevTools demo video **intentionally removed for now** — will be rebuilt as a CSS/animation-based demo instead of a screen recording, added back later
- [x] **Topic 1.3: Syntax Essentials** — complete
  - Covers: anatomy of a CSS rule, the five core selectors, descendant selectors, specificity (column-based scoring, "columns never carry over"), cascade (order as tiebreaker), common mistakes, 4-question MCQ exercise
  - New component: specificity reference table (`.spec-table`, class-based not tag-scoped, in `main-content.css`)
  - New component: common-mistakes callout box (`.callout-mistake`, dedicated `css/mistakebox.css` file) — neutral `1px solid var(--border-color)` at rest, lifts + shadows + border shifts to amber on `:hover` only

## Known Gaps / Not Yet Done
- [ ] `workspace.js` still hardcoded to Topic 1.1's exact values (`.signup-button`, `rgb(180, 90, 8)`, Georgia font) instead of reading `data-*` attributes generically. Deferred until a topic needs a second live-coding exercise. Topic 1.3's specificity challenge was deliberately kept as MCQ instead of triggering this refactor.
- [ ] Topic 1.2's DevTools demo — to be rebuilt as CSS/animation instead of video
- [ ] No progress tracking yet (localStorage) — Phase 5, not started
- [ ] No data-driven content (JSON-based lessons) yet — Phase 3, not started
- [ ] Accessibility/performance pass not done yet — Phase 7

## Current Status
**Active phase:** Chapter 1 content — 3 of N topics complete (1.1, 1.2, 1.3 all done and pushed)
**Next task:** Topic 1.4 — NotebookLM extraction pass planned for next session (sources: Apna College video, Kevin Powell playlist, Eric Meyer's O'Reilly CSS text)

## Notes / Decisions Log
- Chose vanilla JS over jumping to React early, to build real fundamentals first.
- Decided charcoal/amber over red/champagne after a UX-psychology discussion (color-semantic conflict with quiz correct/wrong states, reading fatigue over long sessions).
- Deliberately kept the code editor's dark IDE-style background even though the rest of the site is light — matches convention (GitHub, VS Code, MDN).
- **Amber restricted to interactive-only usage (Topic 1.3):** caught mid-build that `.reading-zone h3` was using amber as a static heading color, which drifted from the original theme rationale. Fixed to use weight/size hierarchy instead of color. Established explicit rule: amber = chapter label + interactive states only, including `:hover`-only accents, never static decoration — repetition across many future topics would otherwise dilute the accent's meaning.
- **Quiz color collision avoided:** confirmed `exercise.css` already uses red for "incorrect answer" — this ruled out red as an option for the mistakes-callout box, keeping color meaning consistent site-wide (red always = wrong, never anything else).
- **Table styling: class-based (`.spec-table`), not tag-scoped** — deliberate choice to allow different table styles in future topics if ever needed, rather than forcing one global look on every `<table>`.
- NotebookLM workflow established for future topics: per-topic prompts forcing per-source extraction before synthesis, explicit "already taught" scope boundaries to prevent forward-references, explicit request for common mistakes per source.

---
### How to use this file
Paste this whole file as the first message in any new AI chat session about this project. It gives full context: what's built, what's fixed, what's next, and how to teach/respond.