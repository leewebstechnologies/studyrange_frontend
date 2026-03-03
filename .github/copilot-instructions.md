# Copilot Instructions for StudyRange Frontend

This document is intended for AI agents (Copilot, Claude, etc.) working on the
`studyrange_frontend` repository. The goal is to summarise the architecture,
conventions, and workflows so the agent can be productive immediately.

---

## 🧩 Big‑Picture Architecture

- **Framework**: Next.js 16.x (App Router) with TypeScript. Bootstrapped via
  `create-next-app`.
- **Entry point**: the `app/` directory. Every folder under `app/` may contain a
  `layout.tsx` and/or `page.tsx`. Layouts nest automatically; `app/layout.tsx`
  is the root HTML wrapper and imports the global CSS and `Navbar` component.
- **Components**: reusable UI pieces live in `app/components/*`. Each component
  has its own folder containing a `*.tsx` and an optional `*.module.css` file.
  Example: `app/components/navbar/Navbar.tsx` with `navbar.module.css`.
- **Pages**: top‑level sections (home, about, contact, services, etc.) are
  simple pages under `app/`. Each page uses a `page.module.css` companion file
  for scoped styling.
- **Styling**: a mix of CSS modules and occasional tailwind utility classes.
  There is no tailwind configuration file—global styles are in
  `app/globals.css` (currently only resets). Components import their own
  `.module.css` files. Expect CSS‑module class names to be referenced via
  `styles.whatever`.
- **Fonts**: Google Font `Inter` is loaded via `app/ui/fonts.ts` and applied in
  `layout.tsx` (`inter.className`).
- **Static assets**: stored in `public/images/*` (hero images, etc.).
- **Data & API**: currently there is no internal API layer. `axios` is listed
  as a dependency but not yet used in source. Future network code should live
  alongside the page or component that needs it, using `fetch`/`axios` from
  server/client components as appropriate.

## ⚙️ Developer Workflows

- **Install**: `npm install` (or `yarn`/`pnpm`/`bun`).
- **Development server**: `npm run dev` → opens on `http://localhost:3000`.
- **Build**: `npm run build`. Production preview: `npm run start`.
- **Linting**: `npm run lint` runs ESLint with `eslint-config-next`.
- **There are no automated tests** in this repo; the lock file contains a
  Playwright dependency but no test files.
- **Deployment**: standard Vercel configuration works out‑of‑the‑box. Nothing
  special in `next.config.ts` (empty placeholder).

## 📁 Project‑Specific Conventions

1. **File names**:
   - Always use `page.tsx` for a route and `layout.tsx` for its layout.
   - Component folder names are capitalised (`Navbar`, `Hero`, etc.).
   - CSS module files follow the pattern `*.module.css` and are colocated with
     the component or page.
2. **Styling**:
   - Global resets in `app/globals.css` only. No `tailwind.config.js` exists; if
     you add Tailwind utilities make sure to add the appropriate config or
     remove the dependency.
   - Keep styles scoped; avoid leaking global selectors.
3. **Routing**:
   - Nested folders automatically map to nested routes. For example,
     `app/university/page.tsx` becomes `/university`.
   - Dynamic routes (`[param]`) are not yet used but follow Next.js conventions
     if added.
4. **Components**:
   - Prefer pure client components for interactive UI and mark them with
     `"use client";` at the top of the file. Server components (the default)
     are encouraged for static content and data fetching on the server.
   - All component props should be typed explicitly. Use `React.FC` or
     interface definitions and keep components small and focused.
   - Import components using relative paths (e.g. `import Navbar from "./Navbar"`)
     since no path alias is configured.

5. **Adding new features**:
   - When introducing new external libraries, update `package.json` and run
     `npm install` locally. Commit both `package.json` and the lock file.
   - New global state or context should be created under `app/context` and
     provided from `layout.tsx` if needed across many pages.

## 📌 Notes for the agent

- Look at existing components (`Navbar`, `Hero`, `Match`, `Loader`) for
  examples of structure and naming.
- There are no tests yet; if you add them, choose a framework (Jest,
  React Testing Library, or Playwright) and update the README accordingly.
- Avoid breaking changes to the App Router; always re-run the dev server if
  you modify `app/layout.tsx` or add new routes to ensure Next.js picks them
  up.

---

Please review these instructions and let me know if any areas are unclear or
missing important context.