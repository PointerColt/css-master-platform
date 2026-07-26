# CSS Master Platform

An interactive CSS learning platform with a live code editor, instant-feedback quizzes, and hands-on lessons — built while learning CSS/JS myself, as a first-year engineering student.

Free, no paywall, built to eventually scale into a full public learning tool.

## Why this project

Most CSS tutorials are read-only. This one lets you actually write CSS and see it work in real time, then checks your understanding with quizzes that grade the *actual rendered result* — not just what text you typed.

## Features

- **Live CSS playground** — type CSS, see it applied instantly to a real preview element
- **Real validation, not string-matching** — checks computed styles (`getComputedStyle`), so `#fff` and `#ffffff` are both accepted correctly
- **Interactive quizzes** — locks after answering, tracks correct/incorrect, resets cleanly
- **Topic-to-topic navigation** — Previous/Next buttons move between lessons, reusing the sidebar's own logic instead of duplicating it
- **Single Page Application architecture** — one `index.html`, lesson content loaded dynamically via `fetch()`, browser never reloads

## Tech stack

Pure HTML, CSS, and vanilla JavaScript — no frameworks yet, intentionally. Planned roadmap:

| Phase | Stack |
|---|---|
| Current | HTML + CSS + Vanilla JS |
| Later | React (component-based rebuild) |
| Later | Node.js + Express + MongoDB (accounts, progress sync) |

## Architecture

`index.html` — user clicks a topic — `fetch(topic.html)`
— inject into `#dynamic-content-area`
— `initializeFeatures()` wires up quiz + live editor


Each JS file owns exactly one responsibility:
- `script.js` — navigation controller (sidebar clicks, fetching, topic loading)
- `exercise.js` — quiz logic (answer checking, locking, question navigation)
- `workspace.js` — live code editor (CSS injection, validation)

CSS is split by component (`sidebar.css`, `exercise.css`, `workspace.css`, etc.) and driven by a single `variables.css` theme file — colors are never hardcoded in component files.

## Running locally

No build step required.
```bash
git clone <your-repo-url>
cd CSS-Master-Platform
```
Open `index.html` directly, or serve it locally (e.g. VS Code's Live Server extension) to avoid any `fetch()` path issues.

## Status

Actively in development. See `PROGRESS.md` for detailed phase-by-phase status.