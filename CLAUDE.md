@AGENTS.md

# Studio Website — Codebase Guide

## Project Overview

**Esti Studio** is a professional recording studio marketing website located in Brooklyn, NY. It is a static/SSR marketing site with no backend, no database, and no authentication. The contact form is client-side only with no actual submission handler.

## Tech Stack

| Layer | Technology | Version |
|---|---|---|
| Framework | Next.js (App Router) | 16.2.4 |
| UI Library | React | 19.2.4 |
| Language | TypeScript | ^5 |
| Styling | Tailwind CSS | ^4 |
| PostCSS | @tailwindcss/postcss | ^4 |

**Critical:** Next.js 16 and Tailwind CSS v4 have breaking changes from prior versions. Read `node_modules/next/dist/docs/` before touching framework-level code.

## Directory Structure

```
studio-website/
├── app/                    # Next.js App Router — all routes live here
│   ├── layout.tsx          # Root layout: fonts, Navbar, Footer, metadata
│   ├── page.tsx            # Home page
│   ├── globals.css         # Tailwind v4 @import + @theme tokens + base styles
│   ├── about/page.tsx      # About page (philosophy, team, timeline)
│   ├── contact/page.tsx    # Contact form ("use client")
│   ├── services/page.tsx   # Services listing with pricing
│   └── studio/page.tsx     # Studio rooms and gear list
├── components/
│   ├── Navbar.tsx          # Fixed nav with scroll detection ("use client")
│   └── Footer.tsx          # Site footer
├── public/                 # Static assets (SVGs)
├── next.config.ts          # Remote image pattern: images.unsplash.com
├── postcss.config.mjs      # @tailwindcss/postcss plugin
└── tsconfig.json           # Strict mode, path alias @/* → root
```

## Development Commands

```bash
npm run dev      # Start dev server at localhost:3000
npm run build    # Production build
npm run start    # Serve production build
```

There is no lint script, type-check script, or test runner configured.

## Design System

### Color Tokens (defined in `app/globals.css` via Tailwind v4 `@theme`)

| Token | Hex | Usage |
|---|---|---|
| `--color-rose` / `rose` | `#C98BA0` | Primary accent (buttons, highlights) |
| `--color-rose-light` | `#E8B4C4` | Hover states |
| `--color-rose-dark` | `#8A5A70` | Active/pressed states |
| `--color-surface` | `#120e10` | Elevated card backgrounds |
| `--color-surface-elevated` | `#1a141a` | Higher elevation surfaces |
| `--color-border` | `#201820` | Borders and dividers |

Base colors used inline (not tokenized): `#080608` (page bg), `#F5ECEF` (body text).

### Typography

- **Display/headings**: Playfair Display — loaded via `next/font/google`, exposed as `var(--font-playfair)`. Apply with `style={{ fontFamily: "var(--font-playfair)" }}` or `font-display` Tailwind class.
- **Body**: Geist — loaded via `next/font/google`, exposed as `var(--font-geist-sans)`. Applied globally via `--font-sans` theme token.

### Common UI Patterns

**Section wrapper:**
```tsx
<section className="py-32 px-6">
  <div className="max-w-7xl mx-auto">...</div>
</section>
```

**Primary button:**
```tsx
<button className="bg-[#C98BA0] text-[#080608] px-8 py-4 text-xs tracking-[0.3em] uppercase hover:bg-[#E8B4C4] transition-colors">
```

**Secondary/outline button:**
```tsx
<button className="border border-[#C98BA0] text-[#C98BA0] px-8 py-4 text-xs tracking-[0.3em] uppercase hover:bg-[#C98BA0] hover:text-[#080608] transition-colors">
```

**Section heading:**
```tsx
<h2 className="text-5xl md:text-6xl font-bold mb-6" style={{ fontFamily: "var(--font-playfair)" }}>
```

**Decorative rule:** `<div className="w-16 h-px bg-[#C98BA0] mb-8" />`

**Alternating section backgrounds:** `bg-[#080608]` and `bg-[#060406]`

## Key Conventions

### Client vs Server Components
- Page components (`app/*/page.tsx`) are **server components** by default — no `"use client"` directive.
- Add `"use client"` only when a component uses React state, effects, or browser APIs.
- Current client components: `Navbar.tsx` (scroll detection, mobile menu), `app/contact/page.tsx` (form state).

### Images
- Always use Next.js `<Image>` component (not `<img>`).
- Remote images: only `images.unsplash.com` is whitelisted in `next.config.ts`. Add other hostnames there before use.
- Use `fill` layout with a positioned parent for full-bleed images.

### Path Alias
- `@/` resolves to the project root. Use `@/components/Foo` not relative paths like `../../components/Foo`.

### TypeScript
- Strict mode is enabled. Do not use `any`; define proper types.
- No `// @ts-ignore` or `// @ts-nocheck` shortcuts.

### Tailwind CSS v4 Notes
- No `tailwind.config.js` — all theme customization is in `globals.css` under `@theme { ... }`.
- Import is `@import "tailwindcss"` (not `@tailwind base; @tailwind components; @tailwind utilities`).
- Custom tokens defined in `@theme` are available as Tailwind utility classes (e.g., `bg-rose`, `text-rose-light`).

## What Does Not Exist

- No backend, API routes, or server actions
- No database or ORM
- No authentication
- No tests (no Jest, Vitest, Playwright, or Testing Library)
- No ESLint or Prettier config
- No CI/CD (no `.github/workflows/`)
- No environment variables (no `.env.example`)
- No state management library (no Redux, Zustand, etc.)
- No analytics or error tracking
