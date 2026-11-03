# Portfolio foundation

Approved in chat: six pages (Home, About Me, Projects, Experience, GitHub,
Contact), shared navigation and footer, clear placeholders, responsive basics,
and thorough teaching comments plus a README. Audience: software engineering
recruiters reviewing a sophomore CS student's work.

## Approach
React + TypeScript + Vite + React Router + Tailwind CSS, with Node/npm tooling.
Plain HTML/CSS was rejected in favor of learning modern tools. Next.js was
considered; server features are unnecessary for the initial static portfolio.

## Constraints
Build the structure before visual design. No invented achievements or personal
details. No backend, contact submission, live GitHub API, or publishing in this
phase. GitHub page will explain where to add a profile and repositories.

## Implementation decisions
Use one file per page, a shared layout, and a typed profile data file. Empty
contact details render instructions rather than fake actionable links. Unknown
URLs show a friendly not-found page. Browser routing needs a hosting fallback
to index.html when eventually deployed. Comments explain React, JSX,
TypeScript, routing and Tailwind in context.
