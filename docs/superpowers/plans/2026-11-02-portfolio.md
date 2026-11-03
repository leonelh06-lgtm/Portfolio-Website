# Portfolio Implementation Plan

> **For agentic workers:** Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** Build an understandable six-page portfolio foundation.
**Architecture:** A static React application with BrowserRouter, a shared layout,
individual page components, and editable typed data.
**Tech Stack:** React, TypeScript, Vite, React Router, Tailwind, Node/npm.
**Spec:** ../specs/2026-11-02-portfolio-design.md

## Global Constraints
- Structure first; no elaborate design or backend.
- Explain unfamiliar code in comments and README.
- Personal information and achievements must remain explicit placeholders.

## Review Focus
- Six routes and active navigation; nested unknown URLs show recovery link.
- Unconfigured contact/profile values produce no fake external links.
- Navigation wraps on small screens and keyboard focus remains visible.
- Production build includes Tailwind utilities and TypeScript checks.
- README covers installation, editing, and production routing fallback.

## Task 1: Tooling and foundation
- [x] Create package.json, Vite/TypeScript configuration, index.html and global CSS.
- [x] Install dependencies and lock versions using npm.

## Task 2: Routes and content
- [x] Create src/main.tsx, App.tsx, components/Layout.tsx, PageHeading.tsx.
- [x] Create typed src/data/profile.ts and six src/pages/*Page.tsx files.
- [x] Add recovery page and route-change focus/title handling.
- [x] Verify routes and unset contact behavior with a focused integration suite.

## Task 3: Teaching and verification
- [x] Add comments for JSX, props, arrays, routing, types and utility styling.
- [x] Write README with setup, file map, learning order, customization and checks.
- [x] Run npm test and npm run build; inspect results and review against spec.

## Execution notes
Work directly in the supplied empty directory (no existing Git repository or
branch to isolate). Continue under the user's approval to build. Use native
execution. Automated checks target navigation and missing data behavior rather
than static presentation. No commits are required in this uninitialized folder.


## Verification result
All 3 integration tests pass with Vitest 5.1.0. TypeScript and Vite production build pass. npm install reports zero vulnerabilities after test runner update. Local preview HTTP readiness check returned 200 after starting Vite outside the sandbox and bypassing the proxy. Visual browser inspection was not performed. Independent source review found no significant issues. Browser visual inspection was not performed. Local Node runtime is in ignored .tools; system PATH was not modified.


