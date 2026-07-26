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
- [x] Fixed `.layout-wrapper` missing `width: 100%` (flex-parent shrink-to-fit bug causing scrollbar to sit inset from true edge)
- [x] Git initialized, `.gitignore` added (pre-empting `node_modules`/`.env` for later phases)
- [x] README.md written
## Known Gaps / Not Yet Done
- [ ] Instruction text says `.signup-buttons` (plural) but actual class is `.signup-button` — cosmetic mismatch, not yet fixed
- [ ] Only `topic-1-1.html` exists — sidebar links to `topic-1-2.html`, which doesn't exist yet (will show fetch error)
- [ ] No progress tracking yet (localStorage) — Phase 5, not started
- [ ] No data-driven content (JSON-based lessons) yet — Phase 3, not started
- [ ] Accessibility/performance pass not done yet — Phase 7
## Current Status
**Active phase:** Building out Chapter 1 content + polishing Topic 1.1
**Next likely task:** Write `topic-1-2.html` content, or begin Phase 3 (move content to JSON)
 
## Notes / Decisions Log
- Chose vanilla JS over jumping to React early, to build real fundamentals first.
- Decided charcoal/amber over red/champagne after a UX-psychology discussion (color-semantic conflict with existing green/red correct/wrong states, reading fatigue over long sessions).
- Deliberately kept the code editor's dark IDE-style background even though the rest of the site is light — matches convention (GitHub, VS Code, MDN).
---
### How to use this file
Paste this whole file as the first message in any new AI chat session about this project. It gives full context: what's built, what's fixed, what's next, and how to teach/respond.