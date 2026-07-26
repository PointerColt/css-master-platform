# PROJECT_MEMORY.md

> Version: 1.0
> Project: CSS Master Platform
> Stack: HTML + CSS + Vanilla JavaScript
> Status: Active Development

---

# 1. Project Vision

Build a production-quality learning platform similar to:

- W3Schools
- freeCodeCamp
- Codecademy
- GeeksForGeeks

using only:

- HTML
- CSS
- Vanilla JavaScript

No frameworks until the platform is mature.

Primary goals:

- Learn HTML, CSS and JavaScript deeply.
- Build a real product instead of a practice project.
- Follow professional software engineering principles.
- Make adding hundreds of lessons easy.
- Create an excellent learning experience.

---

# 2. Teaching Style (VERY IMPORTANT)

This project is also my learning journey.

The assistant should act as:

- Senior Frontend Engineer
- Software Architect
- Mentor

Not as a code generator.

Always:

✔ Explain WHY before HOW.

✔ Keep answers concise.

✔ Avoid unnecessary words.

✔ Never reduce technical quality.

✔ Don't simplify architecture just because it is advanced.

✔ Introduce professional concepts when appropriate.

✔ Never dump huge amounts of code.

✔ Teach one concept at a time.

For every concept explain:

1. Problem
2. Theory
3. Implementation
4. Best Practice
5. Common Mistakes
6. Scalability

---

# 3. Development Philosophy

Never code first.

Always follow:

Understand

↓

Design

↓

Implement

↓

Review

↓

Refactor

Never patch bugs randomly.

Always understand WHY they happen.

---

# 4. Project Architecture

Project type:

Vanilla JavaScript SPA (Single Page Application)

Browser opens only:

index.html

Tutorial pages are loaded dynamically.

Browser never leaves index.html.

Flow:

index.html

↓

User clicks topic

↓

fetch(topic.html)

↓

Insert HTML into #content-area

↓

Initialize Features

---

# 5. File Responsibilities

## index.html

Responsible for:

- Navbar
- Sidebar
- Content Area
- Footer
- Loading CSS
- Loading JS

Never stores tutorial content.

---

## script.js

Application Controller

Responsible only for:

- Sidebar events
- Navigation
- fetch()
- Loading topic HTML
- Calling initialization functions

Should NEVER contain:

- Exercise logic
- Code editor logic
- Theme logic
- Feature-specific code

It coordinates.

It does not implement features.

---

## exercise.js

Responsible only for:

- Quiz
- Option selection
- Correct/Wrong state
- Progress
- Score
- Navigation
- Feedback

Nothing else.

---

## editor.js

Responsible only for:

- Code editor
- Run Code
- Reset
- Live Preview
- Future Monaco/CodeMirror

---

## theme.js (Future)

Responsible only for:

- Dark Mode
- Light Mode
- Font Size
- User Preferences

---

# 6. Software Engineering Principles

Every file has ONE responsibility.

Every function has ONE responsibility.

Every component has ONE responsibility.

Follow:

Single Responsibility Principle (SRP)

Don't mix unrelated logic.

---

# 7. DOM Timing

Important concept learned.

JavaScript cannot interact with elements that do not exist.

Wrong:

script.js

↓

querySelector()

↓

Element doesn't exist.

Correct:

fetch()

↓

Insert HTML

↓

Initialize Feature

↓

Attach Events

Golden Rule:

Whenever using

document.querySelector()

Always ask:

"Does this element exist in the DOM at this moment?"

---

# 8. Feature Initialization

Current architecture goal:

fetch()

↓

content.innerHTML = html

↓

initializeFeatures()

↓

initializeExercise()

initializeEditor()

initializeTabs()

initializeCopyButtons()

Every future feature should have its own initialization function.

Never execute feature logic before HTML exists.

---

# 9. Exercise System

Current structure:

exercise-page

↓

exercise-container

↓

exercise-header

↓

question-card

↓

options-container

↓

feedback-message

↓

exercise-navigation

Only exercise-container owns:

- background
- border
- radius
- shadow

question-card is layout only.

Avoid nested cards.

---

# 10. Quiz Decisions

Correct option:

data-correct="true"

Never compare button text.

Always use:

button.dataset.correct

JavaScript only changes classes.

CSS controls appearance.

Classes:

.selected

.correct

.wrong

---

# 11. CSS Philosophy

Prefer:

Reusable classes

Avoid:

Repeated CSS

Think in components.

Every section should be reusable.

---

# 12. JavaScript Philosophy

JavaScript should control:

Behavior

Never appearance.

CSS controls appearance.

JavaScript changes state.

Example:

button.classList.add("correct")

instead of

button.style.background = "green"

---

# 13. Current Progress

Completed:

✔ Sidebar

✔ Dynamic topic loading

✔ Exercise layout

✔ Exercise container

✔ Header

✔ Question card

✔ Options

✔ Feedback placeholder

✔ Navigation buttons

✔ Initial architecture planning

---

# 14. Current Learning

Learned:

✔ SPA architecture

✔ fetch()

✔ DOM

✔ Event Listeners

✔ DOM Timing

✔ Single Responsibility Principle

✔ Dynamic HTML loading

✔ Why querySelector() failed

✔ Feature initialization

---

# 15. Current Issue

Exercise JS fails because:

script.js executes before topic HTML exists.

Solution:

Initialize features AFTER fetch() inserts HTML.

Do NOT place feature logic inside script.js.

---

# 16. Immediate Roadmap

1.
Review script.js completely.

2.
Understand every function.

3.
Locate fetch().

4.
Improve loading architecture.

5.
Create initializeFeatures().

6.
Build exercise.js properly.

7.
Build editor.js.

No shortcuts.

---

# 17. Long-Term Roadmap

Exercise System

Code Editor

Search

Bookmarks

Progress Tracking

Notes

Theme

Accessibility

Performance

SEO

Backend

Authentication

Database

---

# 18. Coding Rules

Semantic HTML first.

Reusable CSS.

Clean JavaScript.

Meaningful names.

No magic numbers.

No duplicate code.

No inline styles.

No unnecessary comments.

Architecture before implementation.

---

# 19. UI Philosophy

UI should feel comparable to:

- W3Schools
- freeCodeCamp
- Codecademy

Not by copying.

By following:

- consistency
- spacing
- accessibility
- responsiveness
- maintainability

---

# 20. Working Rules

The assistant should:

- Correct bad architecture immediately.
- Explain WHY before changing code.
- Recommend better patterns when appropriate.
- Never encourage shortcuts that hurt scalability.
- Teach like a senior engineer mentoring a junior developer.
- Stop implementation if architecture is becoming poor.

The user wants to become a better engineer, not just finish the website.

---

# 21. Next Session Starts Here

Review script.js.

Understand every function.

Locate fetch().

Refactor loading flow.

Implement initializeFeatures().

Continue building feature modules one by one.

No code should be written without first understanding its purpose.

---

END OF MEMORY