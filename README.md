# Witt Law Offices — website

Ground-up rebuild of the Witt Law (St. George, Utah) site in **Next.js (App Router)
+ TypeScript + Tailwind v4**. Server Components by default, deployed on Vercel.

## Stack
- Next.js 16 (App Router) · React 19 · TypeScript
- Tailwind CSS v4 (tokens in `app/globals.css` via `@theme`)
- `next/font` (Inter + Newsreader) · `lucide-react` icons
- No CMS for v1 — copy/data lives in typed files under `content/`

## Getting started
```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build
npx tsc --noEmit # typecheck
```
Visit **`/styleguide/`** for the design system + component library.

## Project layout
```
app/        layout (header/footer/skip-link/call bar), placeholder home,
            /styleguide, sitemap.ts, robots.ts
components/  Hero, CTA, PracticeCard, PracticeSection, TestimonialCard,
            AttorneyCard, ContactForm, FAQAccordion, JumpList, TrustBar, PostCard,
            Header/Footer + ui/ primitives (Button, Container, Logo, …)
content/     firm.ts, team.ts, testimonials.ts, practiceAreas.ts, faqs.ts
lib/         seo.ts (metadata), jsonld.ts + JsonLd.tsx (schema), nav.ts,
            site.ts, analytics.tsx, actions/contact.ts
```

## Conventions (non-negotiable)
- All NAP/phone/social comes from `content/firm.ts` — never hard-coded.
- All content is in the initial server-rendered DOM (FAQs use `<details>`, never
  click-gated). One `<h1>` per page; AA contrast; visible focus; skip link.
- `next/image` (AVIF/WebP) with explicit dimensions; placeholders until assets land.
- `copyStatus: "write-verify"` copy is rendered but flagged (CopyStatusBadge) and
  must be attorney-reviewed before launch.

## Environment
See `.env.example`. Analytics/verification are **off** unless env vars are set.

## Build phases
Phase 0 (this work): F1 tokens · F2 layout · F3 components · F4 content · F5 SEO ·
F6 redirects/analytics. Phases 1–3 (pages) follow the page plan.
