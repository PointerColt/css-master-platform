# PROJECT: CSS Master Platform

## Overview
An interactive CSS learning platform — live code editor, auto-graded quizzes, topic-by-topic lessons. Free, no paywall. Built as a learning project by a first-year engineering student, alongside AI as a coding/teaching partner (not blind copy-paste).

## Stack
Pure HTML + CSS + Vanilla JS (current phase). Planned: React rebuild (Phase 9), then Node + Express + MongoDB backend (Phase 10).

## AI Collaboration Workflow (read this first, every new chat)
This is a recurring, repeatable process — follow it exactly, don't skip steps:

1. **Scope check first.** Before any new topic, confirm what's already covered (see roadmap below) so nothing gets rebuilt or forward-referenced.
2. **NotebookLM does content extraction, not Claude.** The user runs a structured prompt in NotebookLM (three sources: Apna College video, Kevin Powell playlist, Eric Meyer's O'Reilly CSS book) and pastes the raw extraction output into chat.
3. **Claude's job on that output:** organize it into content "blocks" in teaching order, state how much depth each block deserves, and flag anywhere a real decision belongs to the user (scope calls, UI/architecture tradeoffs, color/design choices) — Claude does not silently decide these.
4. **Claude does NOT write ready-made HTML/CSS for topic content unless explicitly asked.** The user writes the actual file content themselves; Claude gives structure, sequencing, and reviews/debugs what the user writes.
5. **Strictly one step at a time.** Claude presents one block, then stops and waits. Claude does not move to the next block until the user says "next" (or otherwise confirms the current block is done). No dumping the whole topic at once.
6. **Flag real bugs/architecture drift proactively**, the moment they're noticed — even mid-conversation on an unrelated request, even if not explicitly asked.
7. **Concept before syntax, always.** Never lead with code.
8. **Tell the user exactly which file/line to change** — let them make the actual edit themselves, unless they explicitly ask Claude to write it directly (e.g. small CSS snippets, established as OK case-by-case).
9. Never assume prior knowledge, but never dumb down real architecture either.

## Teaching Style Rules (apply every session)
- Explain the concept/theory first, syntax second — never syntax first.
- One step at a time — wait for confirmation before continuing.
- Concise answers, no unnecessary words.
- Tell the user exactly which file/line to change and why — let them make the edit themselves when they ask for that.
- Never assume prior knowledge, but never dumb down real architecture either.
- Flag real bugs/bad patterns proactively, don't just answer the literal question asked.

## Architecture (established, do not casually change)
- SPA: `index.html` never reloads. Topics load via `fetch()` into `#dynamic-content-area`.
- **Relative paths inside topic HTML files resolve against `index.html`'s location (root), NOT the topic file's own folder** — because `script.js` injects fetched HTML via `.innerHTML`, not an iframe. So `assets/file.mp4` is correct, `../assets/file.mp4` is wrong.
- **Scrolling container is `.main-content`, NOT `window`.** `body` has `overflow: hidden`, killing the browser's native scrollbar — the real scrollable element is `.main-content` (`overflow-y: auto`). Any scroll-to-top logic must target `.main-content`, not `window`.
- One responsibility per JS file: `script.js` (navigation controller only), `exercise.js` (quiz only), `workspace.js` (live editor only).
- CSS split by component, all colors driven through `variables.css` — never hardcode hex values in component CSS files.
- JS controls state (classes, disabled, visibility) — CSS controls appearance. Never `element.style.color = ...` for anything semantic.
- File naming: lowercase kebab-case only (`main-content.css`, not `mainContent.css` or `Base.css`) — case-sensitive hosts (Netlify/Vercel) will break on inconsistent casing.

## Theme
**Charcoal & Amber** — warm off-white background, charcoal text, amber accent used sparingly.

Tokens (`css/variables.css`):

--bg-base: 
#F5F1E8
--bg-surface: 
#FFFFFF
--text-primary: 
#1C1917
--text-secondary: 
#6B6560
--accent-primary: 
#B45A08
--accent-hover: 
#8A4406
--border-color: 
#E4DFD3

`color-scheme: light` is set (in both `<meta>` and `:root`) to stop Android Chrome's Force Dark from repainting the page.

**Amber usage rule (locked in during Topic 1.3):** Amber is restricted to `.chapter-label` and interactive elements only (buttons, links, active nav states, `:hover` states). Never a static heading or decorative color. Exception pattern: amber CAN appear on `:hover` for interactive-feeling components (e.g. mistake callout box border shifts to amber only on hover) — keeps the color meaningfully rare instead of decorative noise.

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
- [x] Fixed scroll-to-top on topic navigation (`window.scrollTo` → `.main-content.scrollTo`, since `window` has nothing to scroll)
- [x] Git initialized, `.gitignore` added, README.md written
- [x] **Topic 1.1: Core Frontend web Architecture** — complete
- [x] **Topic 1.2: Workspace Configuration** — complete
- [x] **Topic 1.3: Syntax Mechanics** — complete

## next target
- [] **Topic 1.4: Connecting CSS to HTML** 


## Known Gaps / Not Yet Done
- [ ] `workspace.js` still hardcoded to Topic 1.1's exact values instead of reading `data-*` attributes generically. Deferred until a topic needs a second live-coding exercise.
- [ ] Topic 1.2's DevTools demo — to be rebuilt as CSS/animation instead of video
- [ ] No progress tracking yet (localStorage) — Phase 5, not started
- [ ] No data-driven content (JSON-based lessons) yet — Phase 3, not started
- [ ] Accessibility/performance pass not done yet — Phase 7



## Master CSS Topic Roadmap (NotebookLM full-course extraction)
Generated by cross-referencing the Apna College video, Kevin Powell playlist, and Eric Meyer's O'Reilly CSS book. This is a **content reference list**, not the site's literal topic numbering — cross-check the ✅ marks below before starting any new topic, since several of these are already built on the live site under different numbers.

**Chapter 1: The Foundations of Styling**
- 1.1 Core Frontend Web Architecture (HTML, CSS, JS roles) — ✅ done 
- 1.2 Workspace Configurations (VS Code environments, file linking, and Emmet boilerplates) — ✅ done 
- 1.3 Syntax Mechanics (Selectors, curly braces, properties, values, colons, and semicolons) — ✅ done 
- 1.4 Connecting CSS to HTML (Inline attributes, internal style tags, and external link tags) — 🔲 not covered
- 1.5 DevTools Diagnostics (Inspect element panel, temporary stylesheet testing, and typo flags) — 🔲 not covered
- 1.6 CSS Comments (Single-line vs. multi-line comments and closure pitfalls) — 🔲 not covered

**Chapter 2: The Cascade, Specificity, and Inheritance**
- 2.1 The CSS Cascade (Sorting styles by origin, explicit weight, specificity, and source order) — 🔲 not covered
- 2.2 Value Inheritance (Typography auto-inheritance vs. layout block boundaries) — 🔲 not covered 
- 2.3 Calculations of Specificity (The ABCD specificity columns vs. the points-scale myth) — 🔲 not covered
- 2.4 Selector Chaining (Targeting elements carrying multiple classes, e.g., `.urgent.warning`) — 🔲 not covered 

**Chapter 3: Basic Selectors and Colors**
- 3.1 Fundamental Selectors (Universal *, Element tag, unique ID #, and Class . selectors) — 🔲 not covered 
- 3.2 Grouping Selectors (Preventing redundant stylesheets via comma-separation) — 🔲 not covered 
- 3.3 CSS Colors I (Keyword names, functional RGB values, and Hexadecimal representations) — 🔲 not covered 
- 3.4 Universal Reset (Overriding browser default margins and padding parameters) — 🔲 not covered

**Chapter 4: Typography and Sizing Units** — all 5 topics 🔲 not covered
**Chapter 5: The CSS Box Model** — all 8 topics 🔲 not covered
**Chapter 6: Background Customizations and Asset Paths** — all 3 topics 🔲 not covered

**Chapter 7: Advanced Structural and Contextual Selectors**
- 7.1 Descendant Selectors — 🔲 not covered 
- 7.2 Child Selectors (`>`) — 🔲 not covered 
- 7.3 Adjacent Sibling Selectors (`+`) — 🔲 not covered 
- 7.4 Attribute Selectors — 🔲 not covered

**Chapter 8: Positioning and Document Flow** — all 6 topics 🔲 not covered
**Chapter 9: List Styling, Pseudo-Classes, and Generated Content** — all 5 topics 🔲 not covered (9.5 Counters ⚠️ only 1 source — Eric Meyer)
**Chapter 10: Flexbox and Grid** — all 8 topics 🔲 not covered
**Chapter 11: Responsive Web Design** — all 3 topics 🔲 not covered
**Chapter 12: Transitions, Transforms, and Animations** — all 3 topics 🔲 not covered
**Chapter 13: Specialized and Alternative Formatting Systems** — all 5 topics 🔲 not covered (13.1, 13.3, 13.4, 13.5 ⚠️ only 1 source — Eric Meyer)


## Notes / Decisions Log
- Chose vanilla JS over jumping to React early, to build real fundamentals first.
- Decided charcoal/amber over red/champagne after a UX-psychology discussion (color-semantic conflict with quiz correct/wrong states, reading fatigue over long sessions).
- Deliberately kept the code editor's dark IDE-style background even though the rest of the site is light — matches convention (GitHub, VS Code, MDN).
- **Amber restricted to interactive-only usage (Topic 1.3):** caught mid-build that `.reading-zone h3` was using amber as a static heading color, drifting from original theme rationale. Fixed to weight/size hierarchy instead of color.
- **Quiz color collision avoided:** confirmed `exercise.css` uses red for "incorrect answer" — ruled out red for the mistakes-callout box.
- **Table styling: class-based (`.spec-table`), not tag-scoped** — allows different table styles in future topics without forcing one global look.
- **Scroll-to-top bug root cause:** `body { overflow: hidden }` kills the window scrollbar; real scroll container is `.main-content`. `window.scrollTo()` was silently a no-op.
- NotebookLM workflow established: per-topic prompts forcing per-source extraction before synthesis, explicit "already taught" scope boundaries to prevent forward-references, explicit request for common mistakes per source. Separate roadmap-generation prompt used once to build the full course ToC (above) — cross-referenced against the live site to catch already-covered topics before they'd be accidentally rebuilt.

---
### How to use this file
Paste this whole file as the first message in any new AI chat session about this project. It gives full context: what's built, what's fixed, what's next, and how to teach/respond — including the exact step-by-step, one-block-at-a-time workflow this project uses.