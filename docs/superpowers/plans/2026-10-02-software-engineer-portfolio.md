# Software Engineer Portfolio — Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Build an elite, minimalist, bilingual (PT/EN), dark/light mode personal portfolio for Luiz Matheus Rodrigues Lins using Nuxt 4, Vue 3.5, and Tailwind CSS with 100% static generation.

**Architecture:** Single-page scroll architecture with modular Vue 3 components, zero-overhead reactive composables for theme and internationalization (`useLocale`, `useTheme`), fully typed isolated content files (`app/content/pt.ts`, `app/content/en.ts`), and hand-crafted technical SVG previews for case studies.

**Tech Stack:** Nuxt 4 (`^4.5.2`), Vue 3.5, Tailwind CSS (`@nuxtjs/tailwindcss`), TypeScript, Google Fonts (Newsreader, Inter), Static Site Generation (`nuxt generate`).

## Global Constraints

- **Strict Content Fidelity:** Use only the verified facts and projects from Luiz's CV (Single Software, Brasystem, AnimaBrindes, UniFacisa). No invented metrics or placeholders.
- **Visual Direction:** Editorial Brutalist / Technical Minimalist. Newsreader serif for headings, Inter for body, monospace for metrics/tags, and `#10B981` (emerald) as the single accent color.
- **Accessibility:** Semantic HTML5, WCAG 2.1 AA contrast compliance, keyboard focus rings (`focus-visible:ring-2 focus-visible:ring-emerald-500`), skip-to-content link, and `prefers-reduced-motion` support.
- **SSG Target:** Output must build cleanly via `pnpm run generate` into purely static HTML/CSS/JS without SSR server dependencies.

---

### Task 1: Setup & Tailwind CSS Configuration

**Files:**
- Modify: `portifolio/package.json`
- Modify: `portifolio/nuxt.config.ts`
- Create: `portifolio/app/assets/css/main.css`

**Interfaces:**
- Consumes: Nuxt 4 base config
- Produces: Tailwind CSS utilities, `@apply` rules, typography variables, and dark mode class strategy (`class`).

- [ ] **Step 1: Install `@nuxtjs/tailwindcss` module**

Run: `pnpm add -D @nuxtjs/tailwindcss` in `portifolio/`
Expected: Success, dependency added to `package.json`.

- [ ] **Step 2: Configure `nuxt.config.ts`**

Update `portifolio/nuxt.config.ts` to include `@nuxtjs/tailwindcss`, Google Fonts (`Newsreader` and `Inter`), compatibility date, SSG nitro config, and anti-FOUC theme script:

```typescript
// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: false },
  modules: ['@nuxtjs/tailwindcss'],
  app: {
    head: {
      htmlAttrs: {
        lang: 'pt-BR'
      },
      title: 'Luiz Matheus Rodrigues Lins — Software Engineer',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'description', content: 'Software Engineer focado em front-end (React, Vue, Nuxt, Node.js). Experiência corporativa e freelance, infraestrutura própria e código sustentável.' },
        { name: 'theme-color', content: '#0B0F12' }
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' },
        { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Newsreader:ital,opsz,wght@0,6..72,400;0,6..72,500;0,6..72,600;1,6..72,400&family=JetBrains+Mono:wght@400;500&display=swap' }
      ],
      script: [
        {
          children: `(function(){try{var t=localStorage.getItem('portfolio-theme');var d=window.matchMedia('(prefers-color-scheme: dark)').matches;if(t==='dark'||(!t&&d)){document.documentElement.classList.add('dark')}else{document.documentElement.classList.remove('dark')}}catch(e){}})();`,
          type: 'text/javascript'
        }
      ]
    }
  },
  tailwindcss: {
    config: {
      darkMode: 'class',
      theme: {
        extend: {
          fontFamily: {
            serif: ['Newsreader', 'Georgia', 'serif'],
            sans: ['Inter', 'system-ui', 'sans-serif'],
            mono: ['JetBrains Mono', 'monospace']
          },
          colors: {
            emerald: {
              400: '#34d399',
              500: '#10b981',
              600: '#059669'
            },
            surface: {
              dark: '#0B0F12',
              'dark-card': '#13181D',
              'dark-border': 'rgba(255, 255, 255, 0.08)',
              light: '#F9FAFB',
              'light-card': '#FFFFFF',
              'light-border': 'rgba(0, 0, 0, 0.08)'
            }
          }
        }
      }
    }
  }
})
```

- [ ] **Step 3: Create `app/assets/css/main.css`**

Create `portifolio/app/assets/css/main.css`:

```css
@tailwind base;
@tailwind components;
@tailwind utilities;

@layer base {
  html {
    scroll-behavior: smooth;
    font-family: 'Inter', system-ui, sans-serif;
  }

  body {
    @apply bg-surface-light text-gray-900 dark:bg-surface-dark dark:text-gray-100 transition-colors duration-200 antialiased;
  }

  ::selection {
    @apply bg-emerald-500/20 text-emerald-600 dark:text-emerald-400;
  }
}

@media (prefers-reduced-motion: reduce) {
  *, ::before, ::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
    scroll-behavior: auto !important;
  }
}
```

- [ ] **Step 4: Verify Nuxt prepares and builds styles**

Run: `pnpm exec nuxt prepare` in `portifolio/`
Expected: Nuxt generates `.nuxt` types without error.

---

### Task 2: Content Layer & Type Definitions

**Files:**
- Create: `portifolio/app/content/types.ts`
- Create: `portifolio/app/content/pt.ts`
- Create: `portifolio/app/content/en.ts`

**Interfaces:**
- Consumes: None
- Produces: `PortfolioContent`, `ptContent`, `enContent` typed data objects.

- [ ] **Step 1: Create `app/content/types.ts`**

Define strong TypeScript interfaces for all textual and project content:

```typescript
export interface ProjectItem {
  id: string
  title: string
  year: string
  role: string
  category: string
  liveUrl: string
  previewImage: string
  metric: string
  problem: string
  solution: string
  result: string
  tags: string[]
}

export interface ExperienceItem {
  company: string
  role: string
  period: string
  location: string
  description: string[]
}

export interface EducationItem {
  institution: string
  degree: string
  period: string
  location: string
}

export interface PrincipleItem {
  number: string
  title: string
  description: string
}

export interface SkillCategory {
  category: string
  skills: string[]
}

export interface PortfolioContent {
  nav: {
    projects: string
    experience: string
    principles: string
    contact: string
    cvButton: string
    skipLink: string
    themeToggleAria: string
    langToggleAria: string
  }
  hero: {
    status: string
    location: string
    greeting: string
    name: string
    role: string
    positioning: string
    ctaProjects: string
    ctaContact: string
    downloadCv: string
  }
  works: {
    sectionNumber: string
    title: string
    subtitle: string
    problemLabel: string
    solutionLabel: string
    resultLabel: string
    visitLive: string
    projects: ProjectItem[]
  }
  experience: {
    sectionNumber: string
    title: string
    subtitle: string
    jobs: ExperienceItem[]
    educationTitle: string
    education: EducationItem[]
  }
  principles: {
    sectionNumber: string
    title: string
    subtitle: string
    items: PrincipleItem[]
    skillsTitle: string
    skills: SkillCategory[]
    languagesTitle: string
    languages: { name: string; level: string }[]
  }
  contact: {
    sectionNumber: string
    title: string
    subtitle: string
    emailLabel: string
    copyEmail: string
    copied: string
    linkedinLabel: string
    githubLabel: string
    cvLabel: string
    availabilityNote: string
  }
  footer: {
    copyright: string
    techStack: string
    backToTop: string
  }
}
```

- [ ] **Step 2: Create `app/content/pt.ts`**

Populate with verified data from the user and CV:

```typescript
import type { PortfolioContent } from './types'

export const ptContent: PortfolioContent = {
  nav: {
    projects: 'Projetos',
    experience: 'Experiência',
    principles: 'Como trabalho',
    contact: 'Contato',
    cvButton: 'Baixar CV',
    skipLink: 'Pular para o conteúdo principal',
    themeToggleAria: 'Alternar tema claro e escuro',
    langToggleAria: 'Mudar para Inglês'
  },
  hero: {
    status: 'Disponível para remoto',
    location: 'Campina Grande, PB, Brasil',
    greeting: 'Olá, sou',
    name: 'Luiz Matheus Rodrigues Lins',
    role: 'Software Engineer · Front-end & Full Stack',
    positioning: 'Desenvolvedor focado em front-end com experiência de ponta a ponta: de interfaces resilientes em Vue, Nuxt e React a APIs em Node.js e Java, com infraestrutura própria (VPS, DNS, SSL). Foco em código sustentável, impacto mensurável e colaboração direta.',
    ctaProjects: 'Ver trabalhos selecionados',
    ctaContact: 'Entrar em contato',
    downloadCv: 'Baixar Currículo (PDF)'
  },
  works: {
    sectionNumber: '01',
    title: 'Trabalhos Selecionados',
    subtitle: 'Aplicações reais desenvolvidas com rigor técnico, foco em experiência do usuário e arquitetura enxuta.',
    problemLabel: 'Problema',
    solutionLabel: 'O que fiz',
    resultLabel: 'Resultado',
    visitLive: 'Visitar aplicação',
    projects: [
      {
        id: 'brasystem',
        title: 'Brasystem',
        year: '2026',
        role: 'Full Stack & Infraestrutura',
        category: 'Freelance · Web Application',
        liveUrl: 'https://brasystem.net',
        previewImage: '/projects/brasystem-preview.svg',
        metric: '92 PageSpeed SEO',
        problem: 'A empresa necessitava de uma presença web de alta performance comercial com autonomia total para gerenciamento de banners e preços de planos, eliminando custos de plataformas gerenciadas.',
        solution: 'Desenvolvimento do site do zero (front-end, back-end e infraestrutura). Configuração e gestão de VPS Hostinger autogerenciada com DNS, certificados SSL e ambiente de produção, além de painel administrativo sob medida para o cliente.',
        result: 'Pontuação de 92 no PageSpeed Insights para SEO, zero dependência de suporte técnico para edição de planos e infraestrutura resiliente com HTTPS.',
        tags: ['Vue.js / Nuxt', 'Node.js', 'Hostinger VPS', 'DNS & SSL/HTTPS', 'PageSpeed 92 SEO']
      },
      {
        id: 'animabrindes',
        title: 'AnimaBrindes',
        year: '2025',
        role: 'Front-end & Produto',
        category: 'Freelance · Catálogo Comercial',
        liveUrl: 'https://animabrindes.com',
        previewImage: '/projects/animabrindes-preview.svg',
        metric: 'Zero Retrabalho',
        problem: 'Demanda por catálogo comercial digital de brindes com prazos curtos e necessidade de validação antecipada da identidade visual antes de codificar.',
        solution: 'Liderança ponta a ponta: prototipação completa no Figma alinhada diretamente com o cliente, desenvolvimento ágil e deploy em produção com HTTPS/SSL configurado.',
        result: 'Aprovação do layout no Figma antes da implementação evitou retrabalho de código tardio, entregando a plataforma pronta e segura para uso comercial imediato.',
        tags: ['Figma Prototyping', 'Front-end', 'HTTPS/SSL', 'Produção Comercial']
      }
    ]
  },
  experience: {
    sectionNumber: '02',
    title: 'Experiência & Formação',
    subtitle: 'Atuação corporativa com foco em sistemas de design e engenharia sustentável.',
    jobs: [
      {
        company: 'Single Software',
        role: 'Desenvolvedor Front-end Júnior',
        period: '2026 – Presente',
        location: 'Remoto',
        description: [
          'Desenvolvimento de componentes reutilizáveis em arquitetura multibrand utilizada por mais de 5 marcas, reduzindo o retrabalho e o tempo de lançamento de novas telas.',
          'Manutenção da consistência de Design System entre múltiplas aplicações, prevenindo divergências visuais e assegurando padrões de UI sem duplicidade.',
          'Contribuição ativa para melhorias de performance de renderização e carregamento, impactando diretamente na experiência do usuário final.'
        ]
      }
    ],
    educationTitle: 'Formação Acadêmica',
    education: [
      {
        institution: 'UniFacisa Centro Universitário',
        degree: 'Bacharelado em Sistemas de Informação',
        period: '2023 – Previsão de Formatura em 2027',
        location: 'Campina Grande, PB'
      },
      {
        institution: 'Colégio Imaculada Conceição Damas',
        degree: 'Ensino Médio',
        period: '2020 – 2022',
        location: 'Campina Grande, PB'
      }
    ]
  },
  principles: {
    sectionNumber: '03',
    title: 'Como Eu Trabalho & Stack',
    subtitle: 'Princípios fundamentais que orientam minhas decisões de código e produto.',
    items: [
      {
        number: '01',
        title: 'Engenharia de Front-end com Visão de Produto',
        description: 'Interfaces devem ser construídas como sistemas consistentes e previsíveis. Não apenas telas estéticas, mas componentes sustentáveis que reduzem o custo de manutenção da equipe.'
      },
      {
        number: '02',
        title: 'Propriedade Técnica Ponta a Ponta',
        description: 'Confortável transitando desde o protótipo no Figma até a escrita de APIs, configuração de VPS própria no Linux, apontamento de DNS e emissão de certificados SSL.'
      },
      {
        number: '03',
        title: 'Performance e Acessibilidade como Padrão',
        description: 'SEO, tempos rápidos de carregamento, semântica correta e contrastes adequados não são adicionados no final — são definidos na primeira linha de código.'
      }
    ],
    skillsTitle: 'Stack Tecnológica',
    skills: [
      {
        category: 'Front-end',
        skills: ['JavaScript (ES6+)', 'React', 'Vue.js', 'Nuxt.js', 'HTML5', 'CSS3', 'Tailwind CSS']
      },
      {
        category: 'Back-end & Dados',
        skills: ['Node.js', 'Java', 'PostgreSQL', 'APIs RESTful']
      },
      {
        category: 'Infraestrutura & Ferramentas',
        skills: ['Git', 'Gestão de VPS (Hostinger)', 'Configuração de DNS', 'SSL/HTTPS', 'Figma']
      }
    ],
    languagesTitle: 'Idiomas',
    languages: [
      { name: 'Português', level: 'Nativo' },
      { name: 'Inglês', level: 'Profissional' }
    ]
  },
  contact: {
    sectionNumber: '04',
    title: 'Vamos Conversar',
    subtitle: 'Aberto a oportunidades como Front-end ou Full Stack Engineer em times com foco em código sustentável e resultados de negócio.',
    emailLabel: 'E-mail direto',
    copyEmail: 'Copiar e-mail',
    copied: 'E-mail copiado!',
    linkedinLabel: 'LinkedIn',
    githubLabel: 'GitHub',
    cvLabel: 'Currículo em PDF',
    availabilityNote: 'Residência em Campina Grande, PB · Disponível para contratação remota imediata.'
  },
  footer: {
    copyright: '© 2026 Luiz Matheus Rodrigues Lins. Todos os direitos reservados.',
    techStack: 'Construído com Nuxt 4 & Tailwind CSS · SSG Puro',
    backToTop: 'Voltar ao topo'
  }
}
```

- [ ] **Step 3: Create `app/content/en.ts`**

Populate with English copy:

```typescript
import type { PortfolioContent } from './types'

export const enContent: PortfolioContent = {
  nav: {
    projects: 'Projects',
    experience: 'Experience',
    principles: 'How I Work',
    contact: 'Contact',
    cvButton: 'Download CV',
    skipLink: 'Skip to main content',
    themeToggleAria: 'Toggle light and dark theme',
    langToggleAria: 'Switch to Portuguese'
  },
  hero: {
    status: 'Available for remote work',
    location: 'Campina Grande, PB, Brazil',
    greeting: 'Hello, I am',
    name: 'Luiz Matheus Rodrigues Lins',
    role: 'Software Engineer · Front-end & Full Stack',
    positioning: 'Front-end focused developer with end-to-end delivery: from resilient interfaces in Vue, Nuxt, and React to Node.js and Java APIs, backed by self-managed infrastructure (VPS, DNS, SSL). Dedicated to sustainable code, measurable impact, and direct collaboration.',
    ctaProjects: 'View selected works',
    ctaContact: 'Get in touch',
    downloadCv: 'Download Resume (PDF)'
  },
  works: {
    sectionNumber: '01',
    title: 'Selected Works',
    subtitle: 'Real-world applications engineered with precision, user-first ergonomics, and clean architecture.',
    problemLabel: 'The Problem',
    solutionLabel: 'What I Did',
    resultLabel: 'Outcome',
    visitLive: 'Visit live application',
    projects: [
      {
        id: 'brasystem',
        title: 'Brasystem',
        year: '2026',
        role: 'Full Stack & Infrastructure',
        category: 'Freelance · Web Application',
        liveUrl: 'https://brasystem.net',
        previewImage: '/projects/brasystem-preview.svg',
        metric: '92 PageSpeed SEO',
        problem: 'Client required a high-performing commercial presence with complete autonomy to manage promotional banners and service plan pricing, bypassing expensive managed platforms.',
        solution: 'Built the site entirely from scratch (front-end, back-end, and infrastructure). Configured and operated a self-managed Hostinger VPS with custom DNS, SSL/HTTPS certificates, and an intuitive custom administration panel for the client.',
        result: 'Achieved a 92 PageSpeed Insights SEO score, eliminated reliance on external technical support for pricing updates, and established resilient HTTPS production hosting.',
        tags: ['Vue.js / Nuxt', 'Node.js', 'Hostinger VPS', 'DNS & SSL/HTTPS', 'PageSpeed 92 SEO']
      },
      {
        id: 'animabrindes',
        title: 'AnimaBrindes',
        year: '2025',
        role: 'Front-end & Product',
        category: 'Freelance · Commercial Catalog',
        liveUrl: 'https://animabrindes.com',
        previewImage: '/projects/animabrindes-preview.svg',
        metric: 'Zero Rework',
        problem: 'Commercial promotional gifts catalog needed on a tight deadline with zero margin for visual misalignment before starting code implementation.',
        solution: 'Led the project end-to-end: comprehensive Figma prototyping validated directly with the client, followed by agile development and production deployment with SSL/HTTPS.',
        result: 'Validating the complete visual design in Figma beforehand prevented late-stage code rewrites, delivering a secure commercial catalog ready for immediate customer traffic.',
        tags: ['Figma Prototyping', 'Front-end', 'HTTPS/SSL', 'Commercial Production']
      }
    ]
  },
  experience: {
    sectionNumber: '02',
    title: 'Experience & Education',
    subtitle: 'Corporate engineering delivering design systems and sustainable front-end architecture.',
    jobs: [
      {
        company: 'Single Software',
        role: 'Junior Front-end Developer',
        period: '2026 – Present',
        location: 'Remote',
        description: [
          'Engineered reusable front-end components within a multibrand architecture serving 5+ brands, substantially accelerating screen rollouts and cutting duplicate effort.',
          'Maintained Design System consistency across multi-team applications, eliminating UI drift and enforcing consistent component standards.',
          'Implemented rendering and bundle optimizations that directly enhanced end-user experience and application responsiveness.'
        ]
      }
    ],
    educationTitle: 'Education',
    education: [
      {
        institution: 'UniFacisa Centro Universitário',
        degree: 'B.Tech. in Information Systems',
        period: '2023 – Expected Graduation: 2027',
        location: 'Campina Grande, PB'
      },
      {
        institution: 'Colégio Imaculada Conceição Damas',
        degree: 'High School Diploma',
        period: '2020 – 2022',
        location: 'Campina Grande, PB'
      }
    ]
  },
  principles: {
    sectionNumber: '03',
    title: 'How I Work & Stack',
    subtitle: 'Core engineering principles guiding architectural and product decisions.',
    items: [
      {
        number: '01',
        title: 'Front-end as Product Engineering',
        description: 'Interfaces are scalable component systems. Beyond aesthetics, they must be robust, accessible, and maintainable to lower long-term team overhead.'
      },
      {
        number: '02',
        title: 'End-to-End Technical Ownership',
        description: 'Equally comfortable designing validated Figma prototypes as configuring Linux VPS instances, provisioning DNS records, and securing SSL/HTTPS certs.'
      },
      {
        number: '03',
        title: 'Performance & Accessibility by Default',
        description: 'SEO, low latency, semantic markup, and accessible contrast ratios are treated as first-class constraints right from project inception.'
      }
    ],
    skillsTitle: 'Technology Stack',
    skills: [
      {
        category: 'Front-end',
        skills: ['JavaScript (ES6+)', 'React', 'Vue.js', 'Nuxt.js', 'HTML5', 'CSS3', 'Tailwind CSS']
      },
      {
        category: 'Back-end & Data',
        skills: ['Node.js', 'Java', 'PostgreSQL', 'RESTful APIs']
      },
      {
        category: 'Infrastructure & Tools',
        skills: ['Git', 'Hostinger VPS Management', 'DNS & SSL/HTTPS Configuration', 'Figma']
      }
    ],
    languagesTitle: 'Languages',
    languages: [
      { name: 'Portuguese', level: 'Native' },
      { name: 'English', level: 'Professional Working' }
    ]
  },
  contact: {
    sectionNumber: '04',
    title: 'Let’s Connect',
    subtitle: 'Interested in Front-end and Full Stack engineering roles in teams valuing code quality and business impact.',
    emailLabel: 'Direct Email',
    copyEmail: 'Copy Email',
    copied: 'Email Copied!',
    linkedinLabel: 'LinkedIn',
    githubLabel: 'GitHub',
    cvLabel: 'Resume (PDF)',
    availabilityNote: 'Based in Campina Grande, PB · Available for immediate remote employment.'
  },
  footer: {
    copyright: '© 2026 Luiz Matheus Rodrigues Lins. All rights reserved.',
    techStack: 'Built with Nuxt 4 & Tailwind CSS · Pure SSG',
    backToTop: 'Back to top'
  }
}
```

- [ ] **Step 4: Verify TypeScript compilation of content layer**

Run: `pnpm exec vue-tsc --noEmit` or `pnpm exec nuxt typecheck` in `portifolio/`
Expected: Zero type errors.

---

### Task 3: Reactive Composables (`useLocale.ts` & `useTheme.ts`)

**Files:**
- Create: `portifolio/app/composables/useLocale.ts`
- Create: `portifolio/app/composables/useTheme.ts`

**Interfaces:**
- Consumes: `ptContent`, `enContent`
- Produces: `useLocale()` returning `{ locale, content, toggleLocale, setLocale }`, `useTheme()` returning `{ theme, isDark, toggleTheme, setTheme }`.

- [ ] **Step 1: Implement `app/composables/useLocale.ts`**

```typescript
import { ref, computed, watch, onMounted } from 'vue'
import { ptContent } from '../content/pt'
import { enContent } from '../content/en'
import type { PortfolioContent } from '../content/types'

export type Locale = 'pt' | 'en'

const currentLocale = ref<Locale>('pt')

export function useLocale() {
  const content = computed<PortfolioContent>(() => {
    return currentLocale.value === 'en' ? enContent : ptContent
  })

  function setLocale(loc: Locale) {
    currentLocale.value = loc
    if (typeof window !== 'undefined') {
      localStorage.setItem('portfolio-locale', loc)
      document.documentElement.setAttribute('lang', loc === 'pt' ? 'pt-BR' : 'en')
    }
  }

  function toggleLocale() {
    setLocale(currentLocale.value === 'pt' ? 'en' : 'pt')
  }

  onMounted(() => {
    const saved = localStorage.getItem('portfolio-locale') as Locale | null
    if (saved === 'pt' || saved === 'en') {
      currentLocale.value = saved
    } else {
      const browserLang = navigator.language.toLowerCase()
      if (browserLang.startsWith('en')) {
        currentLocale.value = 'en'
      }
    }
    document.documentElement.setAttribute('lang', currentLocale.value === 'pt' ? 'pt-BR' : 'en')
  })

  return {
    locale: computed(() => currentLocale.value),
    content,
    setLocale,
    toggleLocale
  }
}
```

- [ ] **Step 2: Implement `app/composables/useTheme.ts`**

```typescript
import { ref, computed, onMounted } from 'vue'

export type Theme = 'dark' | 'light'

const currentTheme = ref<Theme>('dark')

export function useTheme() {
  const isDark = computed(() => currentTheme.value === 'dark')

  function applyTheme(theme: Theme) {
    currentTheme.value = theme
    if (typeof window !== 'undefined') {
      localStorage.setItem('portfolio-theme', theme)
      if (theme === 'dark') {
        document.documentElement.classList.add('dark')
      } else {
        document.documentElement.classList.remove('dark')
      }
    }
  }

  function toggleTheme() {
    applyTheme(currentTheme.value === 'dark' ? 'light' : 'dark')
  }

  onMounted(() => {
    const saved = localStorage.getItem('portfolio-theme') as Theme | null
    if (saved === 'dark' || saved === 'light') {
      applyTheme(saved)
    } else {
      const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
      applyTheme(prefersDark ? 'dark' : 'light')
    }

    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)')
    mediaQuery.addEventListener('change', (e) => {
      const userSaved = localStorage.getItem('portfolio-theme')
      if (!userSaved) {
        applyTheme(e.matches ? 'dark' : 'light')
      }
    })
  })

  return {
    theme: computed(() => currentTheme.value),
    isDark,
    toggleTheme,
    setTheme: applyTheme
  }
}
```

- [ ] **Step 3: Verification**

Run `pnpm exec nuxt prepare` to verify type resolution of composables.

---

### Task 4: Visual Assets & Case Study Mockups

**Files:**
- Create: `portifolio/public/projects/brasystem-preview.svg`
- Create: `portifolio/public/projects/animabrindes-preview.svg`
- Copy: `portifolio/Luiz Lins.pdf` to `portifolio/public/Luiz-Lins-CV.pdf`

**Interfaces:**
- Consumes: Project details from spec
- Produces: Polished high-res SVG mockup graphics in `public/projects/` and downloadable CV in `public/Luiz-Lins-CV.pdf`.

- [ ] **Step 1: Create `public/projects/brasystem-preview.svg`**

Craft a refined dark-themed browser mockup SVG featuring the Brasystem dashboard, Hostinger VPS infrastructure status badge, and the PageSpeed Insights 92 SEO score gauge:

```svg
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 500" width="100%" height="100%">
  <defs>
    <linearGradient id="bgGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#0f172a"/>
      <stop offset="100%" stop-color="#020617"/>
    </linearGradient>
    <linearGradient id="accentGrad" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" stop-color="#10b981"/>
      <stop offset="100%" stop-color="#059669"/>
    </linearGradient>
  </defs>

  <rect width="800" height="500" rx="16" fill="url(#bgGrad)"/>
  <rect x="1" y="1" width="798" height="498" rx="15" fill="none" stroke="rgba(255,255,255,0.1)" stroke-width="1"/>

  <!-- Browser Header -->
  <rect x="0" y="0" width="800" height="48" rx="16" fill="#1e293b"/>
  <circle cx="28" cy="24" r="6" fill="#ef4444"/>
  <circle cx="48" cy="24" r="6" fill="#f59e0b"/>
  <circle cx="68" cy="24" r="6" fill="#10b981"/>

  <rect x="120" y="12" width="460" height="24" rx="6" fill="#0f172a" stroke="rgba(255,255,255,0.08)"/>
  <text x="140" y="28" fill="#94a3b8" font-family="Inter, sans-serif" font-size="11">https://brasystem.net · Production VPS (Hostinger)</text>

  <!-- Content Canvas -->
  <!-- Brand Nav -->
  <rect x="40" y="70" width="720" height="40" rx="8" fill="rgba(255,255,255,0.03)" stroke="rgba(255,255,255,0.05)"/>
  <text x="60" y="95" fill="#f8fafc" font-family="Newsreader, Georgia, serif" font-size="18" font-weight="600">BRASYSTEM</text>
  <rect x="620" y="78" width="120" height="24" rx="4" fill="rgba(16, 185, 129, 0.15)"/>
  <text x="635" y="94" fill="#34d399" font-family="JetBrains Mono, monospace" font-size="11">HTTPS Active</text>

  <!-- Metric Card: PageSpeed 92 SEO -->
  <g transform="translate(40, 130)">
    <rect width="220" height="220" rx="12" fill="#1e293b" stroke="rgba(16,185,129,0.3)" stroke-width="1.5"/>
    <text x="24" y="40" fill="#94a3b8" font-family="Inter, sans-serif" font-size="13" font-weight="500">PageSpeed Insights</text>
    <circle cx="110" cy="115" r="50" fill="none" stroke="rgba(255,255,255,0.1)" stroke-width="8"/>
    <circle cx="110" cy="115" r="50" fill="none" stroke="#10b981" stroke-width="8" stroke-dasharray="290" stroke-dashoffset="23" stroke-linecap="round"/>
    <text x="96" y="123" fill="#10b981" font-family="JetBrains Mono, monospace" font-size="28" font-weight="700">92</text>
    <text x="75" y="190" fill="#f8fafc" font-family="Inter, sans-serif" font-size="14" font-weight="600">SEO Score</text>
  </g>

  <!-- Admin Panel & Infrastructure Card -->
  <g transform="translate(280, 130)">
    <rect width="480" height="220" rx="12" fill="#1e293b" stroke="rgba(255,255,255,0.08)"/>
    <text x="24" y="40" fill="#f8fafc" font-family="Inter, sans-serif" font-size="15" font-weight="600">Custom Admin & Pricing Panel</text>
    <text x="24" y="65" fill="#94a3b8" font-family="Inter, sans-serif" font-size="12">Self-managed Hostinger VPS · Full client autonomy</text>

    <!-- Simulated Table -->
    <rect x="24" y="85" width="432" height="34" rx="6" fill="#0f172a"/>
    <text x="40" y="106" fill="#cbd5e1" font-family="Inter, sans-serif" font-size="12">Plano Empresarial Pro</text>
    <text x="320" y="106" fill="#34d399" font-family="JetBrains Mono, monospace" font-size="12">R$ 189,00 /mês</text>

    <rect x="24" y="128" width="432" height="34" rx="6" fill="#0f172a"/>
    <text x="40" y="149" fill="#cbd5e1" font-family="Inter, sans-serif" font-size="12">Plano Inicial Fibra</text>
    <text x="320" y="149" fill="#34d399" font-family="JetBrains Mono, monospace" font-size="12">R$ 99,00 /mês</text>

    <rect x="24" y="171" width="432" height="34" rx="6" fill="#0f172a"/>
    <text x="40" y="192" fill="#cbd5e1" font-family="Inter, sans-serif" font-size="12">Banner Promocional Outubro</text>
    <text x="360" y="192" fill="#38bdf8" font-family="JetBrains Mono, monospace" font-size="11">Ativo</text>
  </g>

  <!-- Bottom Terminal Tag -->
  <g transform="translate(40, 375)">
    <rect width="720" height="85" rx="8" fill="rgba(15, 23, 42, 0.8)" stroke="rgba(255,255,255,0.05)"/>
    <text x="24" y="32" fill="#34d399" font-family="JetBrains Mono, monospace" font-size="12">$ vps status: active | nginx reverse-proxy 200 OK | certbot renewal: automated</text>
    <text x="24" y="60" fill="#64748b" font-family="JetBrains Mono, monospace" font-size="11">Architecture: Nuxt Front-end · Node.js API · Custom DNS Zone · Production SSL</text>
  </g>
</svg>
```

- [ ] **Step 2: Create `public/projects/animabrindes-preview.svg`**

Craft a refined browser mockup SVG for AnimaBrindes featuring Figma prototype validation and catalog deployment:

```svg
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 500" width="100%" height="100%">
  <defs>
    <linearGradient id="bgGrad2" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#18181b"/>
      <stop offset="100%" stop-color="#09090b"/>
    </linearGradient>
  </defs>

  <rect width="800" height="500" rx="16" fill="url(#bgGrad2)"/>
  <rect x="1" y="1" width="798" height="498" rx="15" fill="none" stroke="rgba(255,255,255,0.1)" stroke-width="1"/>

  <!-- Browser Header -->
  <rect x="0" y="0" width="800" height="48" rx="16" fill="#27272a"/>
  <circle cx="28" cy="24" r="6" fill="#ef4444"/>
  <circle cx="48" cy="24" r="6" fill="#f59e0b"/>
  <circle cx="68" cy="24" r="6" fill="#10b981"/>

  <rect x="120" y="12" width="460" height="24" rx="6" fill="#18181b" stroke="rgba(255,255,255,0.08)"/>
  <text x="140" y="28" fill="#a1a1aa" font-family="Inter, sans-serif" font-size="11">https://animabrindes.com · Validated Figma to Production</text>

  <!-- Left Side: Figma Prototype Blueprint -->
  <g transform="translate(40, 70)">
    <rect width="340" height="380" rx="12" fill="#1f1f23" stroke="#a855f7" stroke-width="1.5" stroke-dasharray="4 4"/>
    <rect x="16" y="16" width="110" height="24" rx="4" fill="#a855f7"/>
    <text x="24" y="32" fill="#ffffff" font-family="Inter, sans-serif" font-size="11" font-weight="600">FIGMA VALIDADO</text>
    <text x="16" y="65" fill="#f4f4f5" font-family="Inter, sans-serif" font-size="14" font-weight="600">Alinhamento Antecipado</text>
    <text x="16" y="85" fill="#a1a1aa" font-family="Inter, sans-serif" font-size="11">Zero retrabalho de interface no desenvolvimento</text>

    <!-- Grid Preview -->
    <rect x="16" y="110" width="145" height="110" rx="6" fill="#27272a"/>
    <rect x="175" y="110" width="145" height="110" rx="6" fill="#27272a"/>
    <circle cx="88" cy="155" r="24" fill="#3f3f46"/>
    <circle cx="247" cy="155" r="24" fill="#3f3f46"/>
    <rect x="30" y="195" width="117" height="12" rx="3" fill="#52525b"/>
    <rect x="189" y="195" width="117" height="12" rx="3" fill="#52525b"/>

    <rect x="16" y="235" width="304" height="120" rx="8" fill="#27272a" stroke="rgba(255,255,255,0.05)"/>
    <text x="32" y="265" fill="#34d399" font-family="JetBrains Mono, monospace" font-size="12">✓ Layout client-approved</text>
    <text x="32" y="295" fill="#34d399" font-family="JetBrains Mono, monospace" font-size="12">✓ Design tokens export</text>
    <text x="32" y="325" fill="#34d399" font-family="JetBrains Mono, monospace" font-size="12">✓ Ready for code rollout</text>
  </g>

  <!-- Right Side: Production Storefront Preview -->
  <g transform="translate(410, 70)">
    <rect width="350" height="380" rx="12" fill="#18181b" stroke="rgba(16,185,129,0.4)" stroke-width="1.5"/>
    <rect x="16" y="16" width="120" height="24" rx="4" fill="#10b981"/>
    <text x="24" y="32" fill="#ffffff" font-family="Inter, sans-serif" font-size="11" font-weight="600">PRODUÇÃO ATIVA</text>
    <text x="16" y="65" fill="#f4f4f5" font-family="Newsreader, Georgia, serif" font-size="16" font-weight="600">Catálogo AnimaBrindes</text>
    <text x="16" y="85" fill="#10b981" font-family="JetBrains Mono, monospace" font-size="11">100% Fidelidade Visual</text>

    <!-- Commercial catalog items -->
    <rect x="16" y="110" width="318" height="60" rx="8" fill="#27272a"/>
    <text x="30" y="135" fill="#f4f4f5" font-family="Inter, sans-serif" font-size="13" font-weight="500">Kits Corporativos & Brindes</text>
    <text x="30" y="153" fill="#a1a1aa" font-family="Inter, sans-serif" font-size="11">Entrega rápida · Personalização sob medida</text>

    <rect x="16" y="180" width="318" height="60" rx="8" fill="#27272a"/>
    <text x="30" y="205" fill="#f4f4f5" font-family="Inter, sans-serif" font-size="13" font-weight="500">Mochilas & Canecas Térmicas</text>
    <text x="30" y="223" fill="#a1a1aa" font-family="Inter, sans-serif" font-size="11">Catálogo dinâmico com fotos otimizadas</text>

    <!-- Infrastructure badge -->
    <rect x="16" y="260" width="318" height="95" rx="8" fill="rgba(16,185,129,0.06)" stroke="rgba(16,185,129,0.2)"/>
    <text x="30" y="290" fill="#34d399" font-family="Inter, sans-serif" font-size="12" font-weight="600">Deploy Ponta a Ponta</text>
    <text x="30" y="312" fill="#a1a1aa" font-family="Inter, sans-serif" font-size="11">SSL Let's Encrypt · Fast CDN Caching · Mobile Ready</text>
    <text x="30" y="334" fill="#a1a1aa" font-family="Inter, sans-serif" font-size="11">Propriedade técnica exclusiva: Luiz Lins</text>
  </g>
</svg>
```

- [ ] **Step 3: Copy `Luiz Lins.pdf` to `public/Luiz-Lins-CV.pdf`**

Copy `portifolio/Luiz Lins.pdf` to `portifolio/public/Luiz-Lins-CV.pdf`.

- [ ] **Step 4: Verify assets existence**

Check that both SVGs and `Luiz-Lins-CV.pdf` exist in `portifolio/public/`.

---

### Task 5: Navbar Component with Skip-to-Content & Controls

**Files:**
- Create: `portifolio/app/components/Navbar.vue`

**Interfaces:**
- Consumes: `useLocale()`, `useTheme()`
- Produces: `<Navbar />` component.

- [ ] **Step 1: Create `app/components/Navbar.vue`**

Implement accessible header with sticky glassmorphism, skip link, anchors, and locale/theme toggles:

```vue
<script setup lang="ts">
import { ref } from 'vue'
import { useLocale } from '../composables/useLocale'
import { useTheme } from '../composables/useTheme'

const { locale, content, toggleLocale } = useLocale()
const { isDark, toggleTheme } = useTheme()
const isMobileMenuOpen = ref(false)

function closeMobileMenu() {
  isMobileMenuOpen.value = false
}
</script>

<template>
  <header class="sticky top-0 z-50 w-full border-b border-surface-light-border dark:border-surface-dark-border bg-surface-light/85 dark:bg-surface-dark/85 backdrop-blur-md transition-colors duration-200">
    <!-- Accessible Skip to Content Link -->
    <a
      href="#main-content"
      class="sr-only focus:not-sr-only focus:absolute focus:top-3 focus:left-3 focus:z-50 focus:px-4 focus:py-2 focus:bg-emerald-500 focus:text-white focus:rounded-md focus:shadow-lg focus:outline-none focus:ring-2 focus:ring-emerald-400 font-medium text-sm"
    >
      {{ content.nav.skipLink }}
    </a>

    <div class="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
      <!-- Logo / Monogram -->
      <a
        href="#"
        class="group flex items-center gap-2 text-gray-900 dark:text-gray-100 font-serif text-xl tracking-tight focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 rounded px-1"
        aria-label="Luiz Lins Home"
      >
        <span class="font-bold text-emerald-600 dark:text-emerald-400">LL</span>
        <span class="text-sm tracking-widest text-gray-500 dark:text-gray-400 uppercase font-mono group-hover:text-gray-900 dark:group-hover:text-gray-200 transition-colors">/ engineer</span>
      </a>

      <!-- Desktop Navigation Links -->
      <nav class="hidden md:flex items-center gap-8 text-sm font-medium text-gray-600 dark:text-gray-300" aria-label="Navegação principal">
        <a
          href="#projects"
          class="hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 rounded py-1 px-1.5"
        >
          {{ content.nav.projects }}
        </a>
        <a
          href="#experience"
          class="hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 rounded py-1 px-1.5"
        >
          {{ content.nav.experience }}
        </a>
        <a
          href="#principles"
          class="hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 rounded py-1 px-1.5"
        >
          {{ content.nav.principles }}
        </a>
        <a
          href="#contact"
          class="hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 rounded py-1 px-1.5"
        >
          {{ content.nav.contact }}
        </a>
      </nav>

      <!-- Utility Controls (Locale & Theme & CV) -->
      <div class="flex items-center gap-3">
        <!-- Bilingual Toggle Button -->
        <button
          type="button"
          @click="toggleLocale"
          :aria-label="content.nav.langToggleAria"
          class="inline-flex items-center gap-1 px-2.5 py-1.5 rounded-md border border-surface-light-border dark:border-surface-dark-border text-xs font-mono font-medium hover:border-emerald-500/50 dark:hover:border-emerald-500/50 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500"
        >
          <span :class="locale === 'pt' ? 'text-emerald-600 dark:text-emerald-400 font-bold' : 'text-gray-400'">PT</span>
          <span class="text-gray-300 dark:text-gray-600">/</span>
          <span :class="locale === 'en' ? 'text-emerald-600 dark:text-emerald-400 font-bold' : 'text-gray-400'">EN</span>
        </button>

        <!-- Theme Toggle Button -->
        <button
          type="button"
          @click="toggleTheme"
          :aria-label="content.nav.themeToggleAria"
          class="p-2 rounded-md border border-surface-light-border dark:border-surface-dark-border text-gray-700 dark:text-gray-300 hover:border-emerald-500/50 dark:hover:border-emerald-500/50 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500"
        >
          <!-- Sun Icon (when dark) -->
          <svg v-if="isDark" class="w-4 h-4 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 3v1m0 16v1m9-9h-1M4 9h-1m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
          </svg>
          <!-- Moon Icon (when light) -->
          <svg v-else class="w-4 h-4 text-gray-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
          </svg>
        </button>

        <!-- Download CV Button Desktop -->
        <a
          href="/Luiz-Lins-CV.pdf"
          download="Luiz-Matheus-Lins-CV.pdf"
          class="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium rounded-md bg-emerald-600 hover:bg-emerald-700 text-white dark:bg-emerald-500 dark:hover:bg-emerald-400 dark:text-zinc-950 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400"
        >
          <svg class="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
          </svg>
          {{ content.nav.cvButton }}
        </a>

        <!-- Mobile Menu Trigger -->
        <button
          type="button"
          @click="isMobileMenuOpen = !isMobileMenuOpen"
          class="md:hidden p-2 rounded-md text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500"
          :aria-expanded="isMobileMenuOpen"
          aria-label="Abrir menu"
        >
          <svg class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path v-if="!isMobileMenuOpen" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
            <path v-else stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>
    </div>

    <!-- Mobile Navigation Drawer -->
    <div v-show="isMobileMenuOpen" class="md:hidden border-b border-surface-light-border dark:border-surface-dark-border px-6 py-4 space-y-3 bg-surface-light dark:bg-surface-dark">
      <a
        href="#projects"
        @click="closeMobileMenu"
        class="block py-2 text-sm font-medium text-gray-700 dark:text-gray-200 hover:text-emerald-500"
      >
        {{ content.nav.projects }}
      </a>
      <a
        href="#experience"
        @click="closeMobileMenu"
        class="block py-2 text-sm font-medium text-gray-700 dark:text-gray-200 hover:text-emerald-500"
      >
        {{ content.nav.experience }}
      </a>
      <a
        href="#principles"
        @click="closeMobileMenu"
        class="block py-2 text-sm font-medium text-gray-700 dark:text-gray-200 hover:text-emerald-500"
      >
        {{ content.nav.principles }}
      </a>
      <a
        href="#contact"
        @click="closeMobileMenu"
        class="block py-2 text-sm font-medium text-gray-700 dark:text-gray-200 hover:text-emerald-500"
      >
        {{ content.nav.contact }}
      </a>
      <a
        href="/Luiz-Lins-CV.pdf"
        download="Luiz-Matheus-Lins-CV.pdf"
        class="flex items-center justify-center gap-2 w-full py-2.5 text-xs font-medium rounded-md bg-emerald-600 text-white dark:bg-emerald-500 dark:text-zinc-950"
      >
        <svg class="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
        </svg>
        {{ content.nav.cvButton }}
      </a>
    </div>
  </header>
</template>
```

- [ ] **Step 2: Verification**

Ensure template compiles without type or syntax errors.

---

### Task 6: Hero Section Component (`Hero.vue`)

**Files:**
- Create: `portifolio/app/components/Hero.vue`

**Interfaces:**
- Consumes: `useLocale()`
- Produces: `<Hero />` component with active remote status, positioning statement, and primary CTAs.

- [ ] **Step 1: Create `app/components/Hero.vue`**

```vue
<script setup lang="ts">
import { useLocale } from '../composables/useLocale'

const { content } = useLocale()
</script>

<template>
  <section class="pt-20 pb-16 md:pt-32 md:pb-24 border-b border-surface-light-border dark:border-surface-dark-border">
    <div class="max-w-4xl mx-auto px-6">
      <!-- Status Badge & Location -->
      <div class="flex flex-wrap items-center gap-3 mb-6">
        <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-600 dark:text-emerald-400 text-xs font-mono font-medium">
          <span class="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" aria-hidden="true"></span>
          {{ content.hero.status }}
        </div>
        <span class="text-xs font-mono text-gray-500 dark:text-gray-400">
          {{ content.hero.location }}
        </span>
      </div>

      <!-- Main Headline: Name in Editorial Serif -->
      <h1 class="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-serif font-normal tracking-tight text-gray-900 dark:text-white leading-[1.08] mb-6">
        {{ content.hero.name }}
      </h1>

      <!-- Role Subtitle -->
      <p class="text-lg md:text-xl font-mono text-emerald-600 dark:text-emerald-400 font-medium mb-6">
        {{ content.hero.role }}
      </p>

      <!-- Positioning Statement -->
      <p class="text-base sm:text-lg md:text-xl text-gray-600 dark:text-gray-300 font-sans leading-relaxed max-w-3xl mb-10">
        {{ content.hero.positioning }}
      </p>

      <!-- CTAs -->
      <div class="flex flex-wrap items-center gap-4">
        <a
          href="#projects"
          class="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-emerald-600 hover:bg-emerald-700 text-white dark:bg-emerald-500 dark:hover:bg-emerald-400 dark:text-zinc-950 font-medium text-sm transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400 shadow-sm"
        >
          <span>{{ content.hero.ctaProjects }}</span>
          <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </a>

        <a
          href="#contact"
          class="inline-flex items-center gap-2 px-6 py-3 rounded-lg border border-surface-light-border dark:border-surface-dark-border text-gray-800 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-surface-dark-card font-medium text-sm transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500"
        >
          {{ content.hero.ctaContact }}
        </a>

        <a
          href="/Luiz-Lins-CV.pdf"
          download="Luiz-Matheus-Lins-CV.pdf"
          class="inline-flex items-center gap-2 px-4 py-3 text-gray-600 dark:text-gray-400 hover:text-emerald-600 dark:hover:text-emerald-400 text-sm font-mono transition-colors"
        >
          <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
          </svg>
          <span>{{ content.hero.downloadCv }}</span>
        </a>
      </div>
    </div>
  </section>
</template>
```

- [ ] **Step 2: Verification**

Ensure template compiles and links are correctly bound.

---

### Task 7: Selected Works Section & Project Cards

**Files:**
- Create: `portifolio/app/components/ProjectCard.vue`
- Create: `portifolio/app/components/SelectedWorks.vue`

**Interfaces:**
- Consumes: `ProjectItem`, `content.works`
- Produces: `<SelectedWorks />` and `<ProjectCard />` components.

- [ ] **Step 1: Create `app/components/ProjectCard.vue`**

```vue
<script setup lang="ts">
import type { ProjectItem } from '../content/types'

defineProps<{
  project: ProjectItem
  problemLabel: string
  solutionLabel: string
  resultLabel: string
  visitLive: string
}>()
</script>

<template>
  <article class="rounded-2xl border border-surface-light-border dark:border-surface-dark-border bg-white dark:bg-surface-dark-card p-6 md:p-8 transition-all hover:border-emerald-500/40 dark:hover:border-emerald-500/40 shadow-sm">
    <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
      <!-- Left / Top: Mockup Visual -->
      <div class="lg:col-span-7">
        <a
          :href="project.liveUrl"
          target="_blank"
          rel="noopener noreferrer"
          class="group block relative overflow-hidden rounded-xl border border-surface-light-border dark:border-surface-dark-border bg-gray-950 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500"
          :aria-label="`${visitLive} - ${project.title}`"
        >
          <img
            :src="project.previewImage"
            :alt="`Interface e métricas de ${project.title}`"
            loading="lazy"
            class="w-full h-auto object-cover transition-transform duration-300 group-hover:scale-[1.01]"
          />
          <div class="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
            <span class="inline-flex items-center gap-1.5 text-xs font-mono text-emerald-400 bg-black/80 px-3 py-1 rounded">
              {{ visitLive }}
              <svg class="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </span>
          </div>
        </a>
      </div>

      <!-- Right / Bottom: Technical Breakdown -->
      <div class="lg:col-span-5 flex flex-col justify-between h-full space-y-6">
        <div>
          <!-- Meta Header -->
          <div class="flex items-center justify-between gap-3 mb-2">
            <span class="text-xs font-mono text-gray-500 dark:text-gray-400 uppercase tracking-wider">
              {{ project.category }} · {{ project.year }}
            </span>
            <span class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-mono font-medium bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20">
              {{ project.metric }}
            </span>
          </div>

          <h3 class="text-2xl sm:text-3xl font-serif font-normal text-gray-900 dark:text-white mb-2">
            {{ project.title }}
          </h3>

          <p class="text-xs font-mono text-emerald-600 dark:text-emerald-400 mb-4">
            {{ project.role }}
          </p>

          <!-- Problem / Solution / Result Flow -->
          <div class="space-y-3 text-sm text-gray-600 dark:text-gray-300">
            <div>
              <span class="font-mono text-xs font-semibold uppercase tracking-wider text-gray-400 dark:text-gray-500 block mb-0.5">
                {{ problemLabel }}
              </span>
              <p class="leading-relaxed">{{ project.problem }}</p>
            </div>

            <div>
              <span class="font-mono text-xs font-semibold uppercase tracking-wider text-gray-400 dark:text-gray-500 block mb-0.5">
                {{ solutionLabel }}
              </span>
              <p class="leading-relaxed">{{ project.solution }}</p>
            </div>

            <div class="p-3 rounded-lg bg-emerald-500/5 dark:bg-emerald-500/10 border border-emerald-500/15">
              <span class="font-mono text-xs font-semibold uppercase tracking-wider text-emerald-600 dark:text-emerald-400 block mb-0.5">
                {{ resultLabel }}
              </span>
              <p class="text-gray-700 dark:text-gray-200 leading-relaxed">{{ project.result }}</p>
            </div>
          </div>
        </div>

        <!-- Tags & Live Link -->
        <div>
          <div class="flex flex-wrap gap-1.5 mb-5">
            <span
              v-for="tag in project.tags"
              :key="tag"
              class="px-2.5 py-1 text-xs font-mono rounded bg-gray-100 dark:bg-surface-dark text-gray-700 dark:text-gray-300 border border-surface-light-border dark:border-surface-dark-border"
            >
              {{ tag }}
            </span>
          </div>

          <a
            :href="project.liveUrl"
            target="_blank"
            rel="noopener noreferrer"
            class="inline-flex items-center gap-2 text-sm font-mono font-medium text-emerald-600 dark:text-emerald-400 hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 rounded py-1"
          >
            <span>{{ visitLive }} ({{ project.liveUrl.replace('https://', '') }})</span>
            <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
          </a>
        </div>
      </div>
    </div>
  </article>
</template>
```

- [ ] **Step 2: Create `app/components/SelectedWorks.vue`**

```vue
<script setup lang="ts">
import { useLocale } from '../composables/useLocale'
import ProjectCard from './ProjectCard.vue'

const { content } = useLocale()
</script>

<template>
  <section id="projects" class="py-20 md:py-28 border-b border-surface-light-border dark:border-surface-dark-border">
    <div class="max-w-6xl mx-auto px-6">
      <!-- Section Header -->
      <div class="mb-12 max-w-2xl">
        <div class="flex items-center gap-2 text-emerald-600 dark:text-emerald-400 font-mono text-xs font-medium mb-3">
          <span>// {{ content.works.sectionNumber }}</span>
          <span>·</span>
          <span>CASE STUDIES</span>
        </div>
        <h2 class="text-3xl sm:text-4xl md:text-5xl font-serif font-normal text-gray-900 dark:text-white tracking-tight mb-4">
          {{ content.works.title }}
        </h2>
        <p class="text-base text-gray-600 dark:text-gray-400 font-sans">
          {{ content.works.subtitle }}
        </p>
      </div>

      <!-- Project Cards List -->
      <div class="space-y-12">
        <ProjectCard
          v-for="project in content.works.projects"
          :key="project.id"
          :project="project"
          :problem-label="content.works.problemLabel"
          :solution-label="content.works.solutionLabel"
          :result-label="content.works.resultLabel"
          :visit-live="content.works.visitLive"
        />
      </div>
    </div>
  </section>
</template>
```

- [ ] **Step 3: Verification**

Ensure template compiles and both cards render cleanly.

---

### Task 8: Corporate Experience & Education Timeline

**Files:**
- Create: `portifolio/app/components/Experience.vue`

**Interfaces:**
- Consumes: `useLocale()`
- Produces: `<Experience />` component.

- [ ] **Step 1: Create `app/components/Experience.vue`**

```vue
<script setup lang="ts">
import { useLocale } from '../composables/useLocale'

const { content } = useLocale()
</script>

<template>
  <section id="experience" class="py-20 md:py-28 border-b border-surface-light-border dark:border-surface-dark-border">
    <div class="max-w-4xl mx-auto px-6">
      <!-- Section Header -->
      <div class="mb-12">
        <div class="flex items-center gap-2 text-emerald-600 dark:text-emerald-400 font-mono text-xs font-medium mb-3">
          <span>// {{ content.experience.sectionNumber }}</span>
          <span>·</span>
          <span>CAREER & ACADEMICS</span>
        </div>
        <h2 class="text-3xl sm:text-4xl md:text-5xl font-serif font-normal text-gray-900 dark:text-white tracking-tight mb-4">
          {{ content.experience.title }}
        </h2>
        <p class="text-base text-gray-600 dark:text-gray-400 font-sans">
          {{ content.experience.subtitle }}
        </p>
      </div>

      <!-- Corporate Experience -->
      <div class="mb-16">
        <div class="space-y-8">
          <div
            v-for="job in content.experience.jobs"
            :key="job.company"
            class="relative pl-6 md:pl-8 border-l-2 border-emerald-500/40 dark:border-emerald-500/30 space-y-3"
          >
            <span class="absolute -left-[9px] top-1 w-4 h-4 rounded-full bg-emerald-500 border-4 border-surface-light dark:border-surface-dark"></span>

            <div class="flex flex-wrap items-baseline justify-between gap-2">
              <h3 class="text-xl sm:text-2xl font-serif font-medium text-gray-900 dark:text-white">
                {{ job.company }}
              </h3>
              <span class="font-mono text-xs text-emerald-600 dark:text-emerald-400 font-medium">
                {{ job.period }}
              </span>
            </div>

            <p class="text-sm font-mono text-gray-600 dark:text-gray-300">
              {{ job.role }} · <span class="text-gray-400">{{ job.location }}</span>
            </p>

            <ul class="space-y-2 pt-2 text-sm text-gray-600 dark:text-gray-300">
              <li v-for="(item, idx) in job.description" :key="idx" class="flex items-start gap-2.5">
                <span class="text-emerald-500 mt-1">▸</span>
                <span class="leading-relaxed">{{ item }}</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <!-- Education Section -->
      <div>
        <h3 class="text-xl font-serif font-medium text-gray-900 dark:text-white mb-6">
          {{ content.experience.educationTitle }}
        </h3>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div
            v-for="edu in content.experience.education"
            :key="edu.institution"
            class="p-5 rounded-xl border border-surface-light-border dark:border-surface-dark-border bg-white dark:bg-surface-dark-card"
          >
            <p class="text-xs font-mono text-emerald-600 dark:text-emerald-400 mb-1">
              {{ edu.period }}
            </p>
            <h4 class="text-base font-serif font-medium text-gray-900 dark:text-white mb-1">
              {{ edu.degree }}
            </h4>
            <p class="text-xs text-gray-500 dark:text-gray-400">
              {{ edu.institution }} · {{ edu.location }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
```

- [ ] **Step 2: Verification**

Ensure template compiles cleanly.

---

### Task 9: Principles & Categorized Stack Tags

**Files:**
- Create: `portifolio/app/components/HowIWork.vue`

**Interfaces:**
- Consumes: `useLocale()`
- Produces: `<HowIWork />` component.

- [ ] **Step 1: Create `app/components/HowIWork.vue`**

```vue
<script setup lang="ts">
import { useLocale } from '../composables/useLocale'

const { content } = useLocale()
</script>

<template>
  <section id="principles" class="py-20 md:py-28 border-b border-surface-light-border dark:border-surface-dark-border">
    <div class="max-w-6xl mx-auto px-6">
      <!-- Section Header -->
      <div class="mb-12 max-w-2xl">
        <div class="flex items-center gap-2 text-emerald-600 dark:text-emerald-400 font-mono text-xs font-medium mb-3">
          <span>// {{ content.principles.sectionNumber }}</span>
          <span>·</span>
          <span>ENGINEERING APPROACH</span>
        </div>
        <h2 class="text-3xl sm:text-4xl md:text-5xl font-serif font-normal text-gray-900 dark:text-white tracking-tight mb-4">
          {{ content.principles.title }}
        </h2>
        <p class="text-base text-gray-600 dark:text-gray-400 font-sans">
          {{ content.principles.subtitle }}
        </p>
      </div>

      <!-- 3 Principles Grid -->
      <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
        <div
          v-for="item in content.principles.items"
          :key="item.number"
          class="p-6 md:p-8 rounded-xl border border-surface-light-border dark:border-surface-dark-border bg-white dark:bg-surface-dark-card flex flex-col justify-between"
        >
          <div>
            <span class="text-2xl font-mono font-bold text-emerald-600 dark:text-emerald-400 block mb-4">
              {{ item.number }}
            </span>
            <h3 class="text-xl font-serif font-medium text-gray-900 dark:text-white mb-3">
              {{ item.title }}
            </h3>
            <p class="text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
              {{ item.description }}
            </p>
          </div>
        </div>
      </div>

      <!-- Tech Stack & Languages Grid -->
      <div class="p-6 md:p-8 rounded-2xl border border-surface-light-border dark:border-surface-dark-border bg-white/50 dark:bg-surface-dark-card/50">
        <h3 class="text-xl font-serif font-medium text-gray-900 dark:text-white mb-6">
          {{ content.principles.skillsTitle }}
        </h3>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div v-for="cat in content.principles.skills" :key="cat.category">
            <h4 class="text-xs font-mono uppercase tracking-wider text-gray-400 dark:text-gray-500 mb-3">
              {{ cat.category }}
            </h4>
            <div class="flex flex-wrap gap-2">
              <span
                v-for="skill in cat.skills"
                :key="skill"
                class="px-3 py-1 text-xs font-mono rounded bg-gray-100 dark:bg-surface-dark text-gray-800 dark:text-gray-200 border border-surface-light-border dark:border-surface-dark-border"
              >
                {{ skill }}
              </span>
            </div>
          </div>
        </div>

        <!-- Languages row -->
        <div class="pt-6 border-t border-surface-light-border dark:border-surface-dark-border flex flex-wrap items-center gap-6">
          <span class="text-xs font-mono uppercase tracking-wider text-gray-400 dark:text-gray-500">
            {{ content.principles.languagesTitle }}:
          </span>
          <div class="flex flex-wrap gap-4">
            <span
              v-for="lang in content.principles.languages"
              :key="lang.name"
              class="text-xs font-mono text-gray-700 dark:text-gray-300"
            >
              <strong class="text-gray-900 dark:text-white">{{ lang.name }}</strong> ({{ lang.level }})
            </span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
```

- [ ] **Step 2: Verification**

Ensure template compiles cleanly.

---

### Task 10: Contact Section & Footer

**Files:**
- Create: `portifolio/app/components/Contact.vue`
- Create: `portifolio/app/components/Footer.vue`

**Interfaces:**
- Consumes: `useLocale()`
- Produces: `<Contact />` and `<Footer />` components.

- [ ] **Step 1: Create `app/components/Contact.vue`**

```vue
<script setup lang="ts">
import { ref } from 'vue'
import { useLocale } from '../composables/useLocale'

const { content } = useLocale()
const emailCopied = ref(false)

function copyEmailAddress() {
  if (typeof navigator !== 'undefined') {
    navigator.clipboard.writeText('luizmatheuslins55@gmail.com')
    emailCopied.value = true
    setTimeout(() => {
      emailCopied.value = false
    }, 2500)
  }
}
</script>

<template>
  <section id="contact" class="py-20 md:py-28">
    <div class="max-w-4xl mx-auto px-6">
      <!-- Section Header -->
      <div class="mb-12 text-center max-w-2xl mx-auto">
        <div class="inline-flex items-center gap-2 text-emerald-600 dark:text-emerald-400 font-mono text-xs font-medium mb-3">
          <span>// {{ content.contact.sectionNumber }}</span>
          <span>·</span>
          <span>GET IN TOUCH</span>
        </div>
        <h2 class="text-3xl sm:text-4xl md:text-5xl font-serif font-normal text-gray-900 dark:text-white tracking-tight mb-4">
          {{ content.contact.title }}
        </h2>
        <p class="text-base text-gray-600 dark:text-gray-400 font-sans">
          {{ content.contact.subtitle }}
        </p>
      </div>

      <!-- Contact Direct Cards -->
      <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
        <!-- Email Copy Card -->
        <div class="p-6 rounded-xl border border-surface-light-border dark:border-surface-dark-border bg-white dark:bg-surface-dark-card flex flex-col justify-between">
          <div>
            <span class="text-xs font-mono text-gray-400 dark:text-gray-500 uppercase tracking-wider block mb-1">
              {{ content.contact.emailLabel }}
            </span>
            <a
              href="mailto:luizmatheuslins55@gmail.com"
              class="text-base sm:text-lg font-mono font-medium text-gray-900 dark:text-white hover:text-emerald-500 break-all"
            >
              luizmatheuslins55@gmail.com
            </a>
          </div>
          <button
            type="button"
            @click="copyEmailAddress"
            class="mt-4 inline-flex items-center gap-2 text-xs font-mono font-medium text-emerald-600 dark:text-emerald-400 hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 rounded py-1 self-start"
          >
            <svg class="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2m0 0h2a2 2 0 012 2v3m2 4H10m0 0l3-3m-3 3l3 3" />
            </svg>
            <span>{{ emailCopied ? content.contact.copied : content.contact.copyEmail }}</span>
          </button>
        </div>

        <!-- Direct Resume Download Card -->
        <div class="p-6 rounded-xl border border-surface-light-border dark:border-surface-dark-border bg-white dark:bg-surface-dark-card flex flex-col justify-between">
          <div>
            <span class="text-xs font-mono text-gray-400 dark:text-gray-500 uppercase tracking-wider block mb-1">
              {{ content.contact.cvLabel }}
            </span>
            <p class="text-base sm:text-lg font-serif text-gray-900 dark:text-white">
              Luiz Lins · Software Engineer
            </p>
          </div>
          <a
            href="/Luiz-Lins-CV.pdf"
            download="Luiz-Matheus-Lins-CV.pdf"
            class="mt-4 inline-flex items-center gap-2 text-xs font-mono font-medium text-emerald-600 dark:text-emerald-400 hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 rounded py-1 self-start"
          >
            <svg class="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
            </svg>
            <span>Download (PDF)</span>
          </a>
        </div>
      </div>

      <!-- Social Links Row -->
      <div class="flex flex-wrap items-center justify-center gap-6 p-4 rounded-xl border border-surface-light-border dark:border-surface-dark-border bg-gray-50 dark:bg-surface-dark-card/50">
        <a
          href="https://www.linkedin.com/in/luiz-lins-13a850324/"
          target="_blank"
          rel="noopener noreferrer"
          class="inline-flex items-center gap-2 text-sm font-mono text-gray-700 dark:text-gray-300 hover:text-emerald-500 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 rounded px-2 py-1"
        >
          <span>LinkedIn</span>
          <svg class="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
          </svg>
        </a>

        <a
          href="https://github.com/LuizMatt"
          target="_blank"
          rel="noopener noreferrer"
          class="inline-flex items-center gap-2 text-sm font-mono text-gray-700 dark:text-gray-300 hover:text-emerald-500 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 rounded px-2 py-1"
        >
          <span>GitHub</span>
          <svg class="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
          </svg>
        </a>

        <a
          href="tel:+5583993409288"
          class="inline-flex items-center gap-2 text-sm font-mono text-gray-700 dark:text-gray-300 hover:text-emerald-500 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 rounded px-2 py-1"
        >
          <span>+55 83 99340-9288</span>
        </a>
      </div>

      <!-- Availability Footnote -->
      <p class="text-center text-xs font-mono text-gray-500 dark:text-gray-400 mt-6">
        {{ content.contact.availabilityNote }}
      </p>
    </div>
  </section>
</template>
```

- [ ] **Step 2: Create `app/components/Footer.vue`**

```vue
<script setup lang="ts">
import { useLocale } from '../composables/useLocale'

const { content } = useLocale()

function scrollToTop() {
  if (typeof window !== 'undefined') {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }
}
</script>

<template>
  <footer class="border-t border-surface-light-border dark:border-surface-dark-border py-10 bg-surface-light dark:bg-surface-dark text-xs font-mono text-gray-500 dark:text-gray-400">
    <div class="max-w-6xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
      <div>
        <p>{{ content.footer.copyright }}</p>
        <p class="text-gray-400 dark:text-gray-500 mt-1">{{ content.footer.techStack }}</p>
      </div>

      <button
        type="button"
        @click="scrollToTop"
        class="inline-flex items-center gap-1.5 hover:text-emerald-500 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 rounded p-1"
      >
        <span>{{ content.footer.backToTop }}</span>
        <svg class="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 10l7-7m0 0l7 7m-7-7v18" />
        </svg>
      </button>
    </div>
  </footer>
</template>
```

- [ ] **Step 3: Verification**

Ensure components compile without errors.

---

### Task 11: App Integration, Dynamic SEO & Static Generation

**Files:**
- Modify: `portifolio/app/app.vue`
- Create: `portifolio/public/robots.txt`
- Create: `portifolio/public/sitemap.xml`

**Interfaces:**
- Consumes: All components from Tasks 5-10
- Produces: Complete working page, static files, and successful static output in `.output/public`.

- [ ] **Step 1: Replace `app/app.vue`**

Assemble the entire application into a single-page layout with dynamic SEO meta:

```vue
<script setup lang="ts">
import { watch } from 'vue'
import { useLocale } from './composables/useLocale'
import Navbar from './components/Navbar.vue'
import Hero from './components/Hero.vue'
import SelectedWorks from './components/SelectedWorks.vue'
import Experience from './components/Experience.vue'
import HowIWork from './components/HowIWork.vue'
import Contact from './components/Contact.vue'
import Footer from './components/Footer.vue'

const { locale, content } = useLocale()

useSeoMeta({
  title: () => `${content.value.hero.name} — ${content.value.hero.role}`,
  ogTitle: () => `${content.value.hero.name} — ${content.value.hero.role}`,
  description: () => content.value.hero.positioning,
  ogDescription: () => content.value.hero.positioning,
  ogType: 'website',
  twitterCard: 'summary_large_image',
  twitterTitle: () => `${content.value.hero.name} — ${content.value.hero.role}`,
  twitterDescription: () => content.value.hero.positioning
})
</script>

<template>
  <div class="min-h-screen flex flex-col bg-surface-light dark:bg-surface-dark transition-colors duration-200">
    <Navbar />

    <main id="main-content" class="flex-grow focus:outline-none">
      <Hero />
      <SelectedWorks />
      <Experience />
      <HowIWork />
      <Contact />
    </main>

    <Footer />
  </div>
</template>
```

- [ ] **Step 2: Create `public/robots.txt` & `public/sitemap.xml`**

`portifolio/public/robots.txt`:
```text
User-agent: *
Allow: /
Sitemap: https://luizmatheus.dev/sitemap.xml
```

`portifolio/public/sitemap.xml`:
```xml
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>https://luizmatheus.dev/</loc>
    <lastmod>2026-10-02</lastmod>
    <changefreq>monthly</changefreq>
    <priority>1.0</priority>
  </url>
</urlset>
```

- [ ] **Step 3: Run static generation**

Run: `pnpm run generate` in `portifolio/`
Expected: Static build completes successfully with exit code 0, generating `.output/public/index.html`.

---

### Task 12: Documentation & README

**Files:**
- Modify: `portifolio/README.md`

**Interfaces:**
- Consumes: Project details
- Produces: Polished `README.md` explaining commands, deployment, and content editing.

- [ ] **Step 1: Write `portifolio/README.md`**

```markdown
# Luiz Matheus Rodrigues Lins — Software Engineer Portfolio

Personal engineering portfolio built with **Nuxt 4**, **Vue 3.5**, and **Tailwind CSS**. Fully static, bilingual (Portuguese & English), light/dark mode enabled, and optimized for high-score Lighthouse performance.

## Key Features

- **Editorial Brutalist / Technical Minimalist Design:** Clean Newsreader serif typography paired with Inter and JetBrains Mono.
- **Bilingual (PT / EN):** Reactive instant language switcher without page reload.
- **Zero-Flicker Dark & Light Mode:** System-preference aware (`prefers-color-scheme`) with anti-FOUC script.
- **Accessibility & SEO:** WCAG 2.1 AA compliant, keyboard focus navigation, skip-to-content anchor, semantic HTML, and Open Graph metadata.
- **Pure Static Site Generation (SSG):** Pre-rendered to zero-dependency HTML files.

## Project Structure

```text
portifolio/
├── app/
│   ├── app.vue                 # Main application view with dynamic SEO
│   ├── assets/css/main.css     # Tailwind and global styles
│   ├── components/             # Reusable UI components
│   │   ├── Navbar.vue
│   │   ├── Hero.vue
│   │   ├── SelectedWorks.vue
│   │   ├── ProjectCard.vue
│   │   ├── Experience.vue
│   │   ├── HowIWork.vue
│   │   ├── Contact.vue
│   │   └── Footer.vue
│   ├── composables/            # useLocale & useTheme
│   └── content/                # Content dictionaries (pt.ts, en.ts, types.ts)
└── public/
    ├── projects/               # Case study preview SVGs
    └── Luiz-Lins-CV.pdf        # Downloadable resume
```

## How to Edit Content

All text, project details, and principles are isolated in:
- Portuguese: `app/content/pt.ts`
- English: `app/content/en.ts`

You can edit any text or project data without touching component code.

## Development

```bash
# Install dependencies
pnpm install

# Start local development server
pnpm run dev
```

## Static Build & Deployment

```bash
# Generate static files into .output/public
pnpm run generate

# Preview the static output locally
pnpm run preview
```

### Deploy to Vercel
1. Push the code to a GitHub repository.
2. Import project in Vercel.
3. Framework Preset: **Nuxt.js**. Output Directory: `.output/public`.

### Deploy to GitHub Pages
1. Run `pnpm run generate`.
2. Configure GitHub Actions with the standard Nuxt static deploy workflow pointing to `.output/public`.
```

- [ ] **Step 2: Verification**

Ensure README is accurate and complete.
