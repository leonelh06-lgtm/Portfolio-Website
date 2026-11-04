# Student portfolio foundation

Five pages built with React, TypeScript, Vite, React Router, and Tailwind CSS.
This first phase provides content structure and simple responsive styling.
Personal details and sample entries are deliberately placeholders.

## Run the website

Install Node.js 22.12 or newer (an LTS release is a good choice) from
[nodejs.org](https://nodejs.org/). npm is included. Open a **new terminal** after
installation so it can find Node. From this project directory, run:

```powershell
npm install
npm run dev
```

Open the local URL printed in your terminal (usually http://localhost:5173).
Leave that terminal running while you edit. Vite updates the browser when you
save a file. Press Ctrl+C in the terminal to stop the server.

Do not double-click index.html: the browser cannot execute our TypeScript source
directly. Vite transforms it into browser-compatible JavaScript.

If this session downloaded a project-local runtime, you can use it instead of a
system installation, in a PowerShell terminal opened in this directory:

```powershell
$env:Path = "$PWD\.tools\node-v22.16.0-win-x64;$env:Path"
npm.cmd install
npm.cmd run dev
```

This PATH change lasts only for that terminal. If PowerShell blocks npm.ps1,
use `npm.cmd` instead of changing your execution policy.

## What each tool does

- **Node.js** runs development tools on your computer. This portfolio does not
  require a Node server in production.
- **npm** installs packages listed in package.json. package-lock.json records
  exact resolved versions; keep it in version control. After a lockfile exists,
  `npm ci` installs that exact dependency set.
- **Vite** runs the development server and builds files for publishing.
- **React** describes the interface using reusable functions called components.
- **TypeScript** adds checks to JavaScript. These catch mistakes while developing;
  they don't validate information submitted by a visitor at runtime.
- **React Router** matches the browser URL to a page component.
- **Tailwind CSS** generates CSS from the utility classes in the source code.
- **Vitest** runs automated tests; Testing Library interacts with rendered pages.

## How the files connect

```text
index.html               HTML document and empty #root element
src/main.tsx             Starts React, loads CSS, enables browser routing
src/App.tsx              Maps URLs to page components
src/components/
  Layout.tsx             Shared navigation, content area, footer
  PageHeading.tsx        Reusable page title and description
src/data/profile.ts      Your name, education, and contact links
src/pages/               One component per page, plus a not-found page
src/index.css            Tailwind import and a few shared styles
src/App.test.tsx         Navigation and missing-contact behavior checks
vite.config.ts           React, Tailwind and test-tool configuration
tsconfig.json            TypeScript checking rules
package.json             Dependencies and terminal commands
```

When you visit `/projects`, React Router selects ProjectsPage. The shared Layout
stays on screen and its `<Outlet />` renders that page. There is one HTML entry
document, while visitors navigate between distinct URLs.

## Suggested reading order

1. Start with `HomePage.tsx`. Compare its headings, paragraphs and links with the
   rendered page. JSX resembles HTML, but uses `className` instead of `class`.
2. Read `PageHeading.tsx`. The `title` and `description` props are inputs. Passing
   different inputs reuses the same structure on each page.
3. Read `profile.ts`. An object groups named values; `profile.name` reads one.
   The `Profile` type describes which properties exist and their value types.
4. Read `ProjectsPage.tsx`. An array stores multiple items; `.map()` turns each
   item into UI. The `key` helps React identify list entries.
5. Read `Layout.tsx` and `App.tsx` to follow navigation. `Link` changes internal
   routes, `NavLink` also tracks the active route, and `<a>` handles external URLs.
6. Read `main.tsx` and the configuration files after the page code feels familiar.

`.tsx` means TypeScript with JSX. Braces inside JSX evaluate JavaScript:
`{profile.name}` displays a value rather than the literal text "profile.name".
`export` makes something available to another file; `import` brings it in.
Comments explain the unfamiliar concepts near their first use rather than repeat
the same explanation in every page.

## Tailwind quick reference

```tsx
<section className="grid gap-6 md:grid-cols-2">
```

- `grid` sets `display: grid`.
- `gap-6` adds spacing between grid items (1.5rem with the default theme).
- `md:grid-cols-2` creates two columns at medium widths and above. Smaller screens
  use the single-column default.
- `p-6` adds inside spacing; `mb-4` adds outside spacing below an element.
- `text-sm` sets a text size; `font-semibold` sets font weight.
- `hover:bg-slate-100` changes the background while hovering.

Tailwind is still CSS. Utilities are shortcuts for CSS declarations. Shared
classes such as `panel` are defined in `src/index.css` using `@apply` to group
several utilities. The setup follows the
[Tailwind Vite integration](https://tailwindcss.com/docs/installation/using-vite).
There is no tailwind.config.js required for this basic Tailwind v4 setup.

## Personalize the content

- Edit `src/data/profile.ts` first. Add your actual name, university, email,
  and full `https://` profile URLs. Empty contact values display "coming soon"
  rather than linking to a made-up address.
- Edit HomePage to describe your education, coursework and interests.
- Replace the sample object in ProjectsPage with real work. Add more objects to
  display more cards. Give each project a unique id and list each technology once.
- Replace the sample ExperiencePage entry with work, clubs, or team experience.
- Add real repository descriptions and links to GitHubPage. It does not fetch
  GitHub activity or repositories automatically.
- Update the title and description in index.html before publishing. Layout also
  updates the browser tab title when visitors navigate between pages.

The contact page offers links only; it does not submit a form or send messages.
Do not put passwords, API tokens, or other secrets in frontend source files:
everything bundled into this website is visible to visitors.

## Check and build

```powershell
npm test
npm run build
npm run preview
```

The tests exercise navigation, active links, configured contact details, theme persistence, the old About redirect, and unknown
URLs. The build checks TypeScript first, then creates production files in dist/.
Preview serves that built output locally; it does not publish the website.

Also check the pages in a browser at phone width and navigate using the Tab key.
The navigation wraps, links have focus outlines, and a skip link jumps to content.

## Publishing later

Upload the built `dist/` directory to a static host. Because BrowserRouter uses
paths such as `/about`, configure the host to serve `index.html` for application
routes. Otherwise a direct visit or refresh on `/about` may return a server 404.
If hosting under a repository subpath, configure Vite's `base` and the router's
`basename` to that subpath; the current configuration targets the domain root.
Deployment and visual design are later phases.

## References

- [React: describing the UI](https://react.dev/learn/describing-the-ui)
- [React Router: declarative setup](https://reactrouter.com/start/declarative/installation)
- [Vite guide](https://vite.dev/guide/)
- [Tailwind documentation](https://tailwindcss.com/docs/installation/using-vite)

## Retro layout and themes

Home now includes About, education and interests. Edit those in
`src/pages/HomePage.tsx`; `/about` redirects home to preserve old links.
The site has five navigation destinations rather than six.

`src/components/ThemeSelector.tsx` stores the selected theme in React state.
An effect writes `data-theme` onto the HTML element and saves `portfolio-theme`
in localStorage. That browser storage remembers the choice between visits.
Invalid stored names fall back to Classic; blocked storage doesn't break switching.

In `src/index.css`, Classic, Midnight and Bubblegum each define the same CSS
variables. For example, `background: var(--surface)` uses the active theme's panel
color. Add a new theme by adding its option/type in ThemeSelector and a matching
`[data-theme="name"]` block. Keep text and focus indicators clearly contrasted.
The imported Google Fonts supply Quicksand for headings and Nunito for text;
sans-serif fallbacks render if the font service is unavailable.


