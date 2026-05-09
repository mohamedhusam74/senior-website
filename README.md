# Agentic AI Vulnerabilities Framework — Senior Project Showcase

> University of Bahrain · Senior Capstone Exhibition 2025

## Quick Start

```bash
npm install
npm run dev
```

Open http://localhost:3000

---

## Updating Content

All editable content is in two files — change these, redeploy, done.

**Research info** → `src/data/research.ts`
- `abstract` — replace placeholder with real abstract text
- `pillars` — the four research pillar cards
- `title`, `university`, `year` — top-level metadata

**Team info** → `src/data/team.ts`
- Per-member: name, phone, email, linkedin, role, bio, skills, certifications, activities
- Set `linkedin` from `null` to the actual URL string when ready

---

## Adding PDFs

**Research Paper**
1. Drop `research.pdf` into `/public/`
2. Open `src/components/sections/PaperSection.tsx`
3. Set `PDF_AVAILABLE = true`
4. Redeploy — the embedded viewer and download button activate automatically

**CV Files**
1. Drop `mohamed_cv.pdf` into `/public/cvs/`
2. Drop `kaltham_cv.pdf` into `/public/cvs/`
3. The Download CV buttons on the Team cards activate automatically

---

## Deploy to Vercel

1. Push this repo to GitHub
2. Go to vercel.com → New Project → import the repo
3. Framework: Next.js (auto-detected)
4. Click Deploy

For a custom domain: Vercel project → Settings → Domains → add your domain.

---

## Tech Stack

- Next.js 14 (App Router) + TypeScript
- Tailwind CSS
- Framer Motion (animations)
- next-themes (dark/light mode)
- lucide-react (icons)

---

## Project Structure

```
src/
  app/
    layout.tsx        fonts, metadata, theme provider
    page.tsx          assembles all sections
    globals.css       base styles, keyframes
  components/
    Navbar.tsx
    Footer.tsx
    ThemeProvider.tsx
    sections/
      HeroSection.tsx
      ResearchSection.tsx
      TeamSection.tsx
      PaperSection.tsx
      ContactSection.tsx
  data/
    team.ts           ALL student info — edit here
    research.ts       ALL research info — edit here
  lib/
    utils.ts
public/
  research.pdf        drop here to activate paper viewer
  cvs/
    mohamed_cv.pdf    drop here to activate CV download
    kaltham_cv.pdf    drop here to activate CV download
```
