# Design Specification: Personal Portfolio — Luiz Matheus Rodrigues Lins

**Date:** 2026-10-02  
**Role:** Software Engineer (Front-end & Full Stack Focus)  
**Target:** Hiring for Front-end / Full Stack engineering roles in high-performance teams focused on sustainable code and measurable impact.  
**Tech Stack:** Nuxt 4, Vue 3.5, Tailwind CSS, TypeScript, Static Site Generation (SSG).

---

## 1. Executive Summary & Goals

The goal of this project is to build an elite, minimalist, and high-performance personal portfolio website for **Luiz Matheus Rodrigues Lins**. 

Key differentiators:
- **Tone:** Direct, technical, and professional. Free of empty clichés ("passionate about technology"), focusing purely on measurable outcomes, architectural decisions, and end-to-end engineering capabilities.
- **Visual Identity:** Editorial Brutalist / Technical Minimalist. Editorial serif headings paired with clean geometric sans body typography and a single technical emerald accent (`#10B981`), backed by generous whitespace.
- **Bilingual (PT / EN):** Instant language switching with typed dictionaries and state persistence.
- **Theme Support:** Dark / Light mode respecting `prefers-color-scheme` with zero flash-of-unstyled-content (anti-FOUC).
- **Accessibility & Performance:** WCAG 2.1 AA compliant, semantic HTML, keyboard accessible with a skip link, targeting 95+ scores across all Lighthouse categories.
- **Zero-Friction Editing:** 100% of portfolio text and project data is isolated in typed TypeScript content files (`app/content/pt.ts` and `app/content/en.ts`).

---

## 2. Architecture & File Structure

The project is built within the existing Nuxt 4 structure in `portifolio/`:

```text
portifolio/
├── app/
│   ├── app.vue                       # Main layout wrapper, skip link, theme/locale injection
│   ├── assets/
│   │   └── css/
│   │       └── main.css              # Tailwind imports, font variables, custom utilities
│   ├── components/
│   │   ├── Navbar.vue                # Fixed header with blur, links, theme & locale toggles
│   │   ├── Hero.vue                  # Positioning statement, active status, CTAs
│   │   ├── SelectedWorks.vue         # Case study section container
│   │   ├── ProjectCard.vue           # Detailed project card with SVG mockups & metric badges
│   │   ├── Experience.vue            # Corporate experience timeline (Single Software) & degree
│   │   ├── HowIWork.vue              # 3 engineering principles + categorized technology tags
│   │   ├── Contact.vue               # Direct email, copy-to-clipboard, social links, CV download
│   │   └── Footer.vue                # Minimalist footer with copyright and build metadata
│   ├── composables/
│   │   ├── useLocale.ts              # Reactive locale state (pt/en) persisted in localStorage
│   │   └── useTheme.ts               # Theme state (dark/light/system) with OS preference listener
│   └── content/
│       ├── types.ts                  # Strict TypeScript interfaces for all portfolio content
│       ├── pt.ts                     # Portuguese content dictionary
│       └── en.ts                     # English content dictionary
├── public/
│   ├── projects/
│   │   ├── brasystem-preview.svg     # Technical SVG mockup of Brasystem & PageSpeed 92 SEO
│   │   └── animabrindes-preview.svg  # Technical SVG mockup of AnimaBrindes & Figma prototype
│   ├── Luiz-Lins-CV.pdf              # Direct downloadable copy of Luiz's CV
│   ├── robots.txt                    # Search crawler rules
│   └── sitemap.xml                   # Static sitemap
├── nuxt.config.ts                    # SSG configuration, Tailwind module, SEO Head, Google Fonts
└── package.json                      # Dependencies and build scripts
```

---

## 3. Visual Identity & Design System

### 3.1 Typography
- **Headings (`h1`, `h2`, `h3`):** *Newsreader* (Google Fonts) — an editorial, refined serif that conveys craftsmanship and maturity.
- **Body & UI Elements:** *Inter* (Google Fonts) — an industry-standard, clean, highly legible sans-serif.
- **Badges, Metrics & Tags:** *JetBrains Mono* / system monospace — technical precision for code, tools, and statistics.

### 3.2 Color Palette & Semantic Tokens
- **Accent Color:**
  - Dark mode: Emerald `#10B981` (tailwind `emerald-500`)
  - Light mode: Deep Emerald `#059669` (tailwind `emerald-600`)
- **Dark Theme:**
  - Background Base: `#0B0F12` (subtle matte zinc/slate)
  - Card Background: `rgba(255, 255, 255, 0.03)` with border `rgba(255, 255, 255, 0.08)` and `backdrop-blur-md`
  - Text Primary: `#F3F4F6` (zinc-100)
  - Text Secondary: `#9CA3AF` (zinc-400)
- **Light Theme:**
  - Background Base: `#F9FAFB` (clean paper off-white)
  - Card Background: `#FFFFFF` with border `rgba(0, 0, 0, 0.06)`
  - Text Primary: `#111827` (gray-900)
  - Text Secondary: `#4B5563` (gray-600)
- **Contrast Ratios:** All text pairings exceed the WCAG AA minimum contrast of 4.5:1.

---

## 4. Content Specifications (Strictly Grounded)

All content is strictly grounded in the user's provided curriculum and verified facts. No fabricated numbers or synthetic projects.

### 4.1 Profile Information
- **Full Name:** Luiz Matheus Rodrigues Lins
- **Role Title:** Software Engineer (Front-end & Full Stack)
- **Location:** Campina Grande, PB, Brasil · Available for remote work
- **Contact:**
  - Email: `luizmatheuslins55@gmail.com`
  - LinkedIn: `https://www.linkedin.com/in/luiz-lins-13a850324/`
  - GitHub: `https://github.com/LuizMatt`
  - Direct PDF Download: `Luiz-Lins-CV.pdf`

### 4.2 Selected Works (2 Featured Case Studies)
1. **Brasystem (2026 — Freelance · brasystem.net)**
   - **Role:** Full Stack Developer & Infrastructure Owner
   - **Problem:** Client needed a high-performance commercial web presence with full autonomy to manage promotional banners and service pricing tables without recurring third-party CMS costs.
   - **Solution:** Engineered the web application from scratch across front-end, back-end, and hosting. Deployed on a self-managed Hostinger VPS without managed intermediaries, configuring DNS records, SSL/HTTPS certificates, and a custom administrative dashboard for client content management.
   - **Outcome / Metric:** Achieved a **92 PageSpeed Insights SEO score** through semantic HTML, performance optimization, and accessibility best practices.
   - **Tech Tags:** `Vue / Nuxt`, `Node.js`, `Hostinger VPS`, `DNS & SSL/HTTPS`, `92 SEO PageSpeed`.
   - **Link:** `https://brasystem.net`

2. **AnimaBrindes (2025 — Freelance · animabrindes.com)**
   - **Role:** End-to-end Product & Front-end Developer
   - **Problem:** Needed a custom promotional gifts catalog with rapid delivery, validated directly with the business owner before development to avoid design misalignment.
   - **Solution:** Prototyped the complete layout in Figma, conducted validation sessions with the client to eliminate late-stage revisions, and built and deployed the full production site with SSL/HTTPS.
   - **Outcome / Metric:** 100% layout fidelity to client-validated prototype, zero late-stage rework, delivered directly into commercial production.
   - **Tech Tags:** `Figma Prototyping`, `Front-end`, `HTTPS/SSL`, `Production Deploy`.
   - **Link:** `https://animabrindes.com`

### 4.3 Corporate Experience & Education
- **Single Software — Junior Front-end Developer (2026 – Present):**
  - Developed reusable front-end components within a multibrand architecture serving 5+ brands, reducing feature rollout time and code rework.
  - Enforced Design System consistency across distributed applications, eliminating visual drift between teams.
  - Implemented client-side rendering and loading performance optimizations, improving the end-user experience.
- **Education:**
  - UniFacisa Centro Universitário — B.Tech. in Information Systems (2023 – Expected Graduation: 2027).

### 4.4 How I Work & Skill Categorization
- **Core Principles:**
  1. *Front-end as Product Engineering:* User interfaces are structured systems of reusable, accessible components built to scale.
  2. *End-to-End Ownership:* Moving seamlessly from Figma prototypes to production code, self-managed VPS hosting, DNS, and SSL.
  3. *Performance from Day One:* SEO, fast initial load, and accessible semantic markup are non-negotiable fundamentals.
- **Tech Stack Categorization:**
  - *Front-end:* JavaScript (ES6+), React, Vue.js, Nuxt.js, HTML5, CSS3, Tailwind CSS.
  - *Back-end & Data:* Node.js, Java, PostgreSQL.
  - *Infrastructure & Tools:* Git, Hostinger VPS Management, DNS & SSL/HTTPS Configuration, Figma.
  - *Languages:* Portuguese (Native), English (Professional Working).

---

## 5. Technical Requirements & Verification Criteria

1. **Framework & Generation:**
   - Nuxt 4 (`^4.5.2`) running in SSG mode (`nuxt generate`).
   - Output purely static HTML/CSS/JS in `.output/public`.
2. **Accessibility (WCAG AA):**
   - Skip to main content link (`#main-content`) functional via keyboard Tab navigation.
   - All interactive elements possess distinct `:focus-visible` outline rings.
   - All animations wrapped in `@media (prefers-reduced-motion: reduce)` fallbacks.
   - Semantic tags throughout (`header`, `nav`, `main`, `section`, `article`, `footer`).
3. **SEO & Metadata:**
   - Server-side rendered `<title>`, `<meta name="description">`, Open Graph tags, and Twitter Cards.
   - Auto-updating `lang="pt-BR"` or `lang="en"` on the `<html>` root upon switching languages.
4. **Theme Handling:**
   - Head-injected anti-FOUC script preventing theme flash on reload.
   - Synchronized with `prefers-color-scheme` media query and manual user override.

---

## 6. Verification Plan

- Run `pnpm run generate` to verify zero static build errors.
- Validate bilingual toggle dynamically re-renders all text without page reload.
- Validate theme toggle switches styles and persists selection.
- Validate keyboard navigation order and skip-link functionality.
- Validate that all links (GitHub, LinkedIn, Email, Brasystem, AnimaBrindes, CV download) are working.
