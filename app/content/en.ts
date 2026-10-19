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
    status: '',
    location: '',
    greeting: 'Hello, I am',
    name: 'Luiz Lins',
    role: 'Software Engineer · Back-end & Full Stack',
    positioning: 'Back-end focused developer with end-to-end delivery: from resilient interfaces in <strong>Vue</strong>, <strong>Nuxt</strong>, and <strong>React</strong> to robust APIs in <strong>Node.js</strong>, <strong>PHP (Laravel)</strong>, and <strong>Java</strong>, backed by self-managed infrastructure (VPS, DNS, SSL) and <strong>Docker</strong>. Dedicated to sustainable code, measurable impact, and direct collaboration.',
    ctaProjects: 'View production projects',
    ctaContact: 'Get in touch',
    downloadCv: 'Download Resume (PDF)'
  },
  works: {
    sectionNumber: '01',
    title: 'Production Projects',
    subtitle: 'Real-world applications engineered with precision, user-first ergonomics, and clean architecture.',
    problemLabel: 'The Problem',
    solutionLabel: 'What I Did',
    visitLive: 'View site',
    projects: [
      {
        id: 'brasystem',
        title: 'Brasystem',
        year: '2026',
        role: 'Institutional website, full-stack & infrastructure',
        category: 'Freelance',
        liveUrl: 'https://brasystem.net',
        previewImage: '/projects/brasystem.png',
        metric: {
          value: '92',
          label: 'on PageSpeed Insights (SEO).',
          detail: '100% responsive with autonomous client CMS.'
        },
        problem: 'The business required a fast, modern digital presence that was easy to update without paying recurring fees for managed platforms.',
        solution: 'Engineered a modern, fully responsive front-end with Nuxt and Tailwind CSS, Node.js API, and full VPS infrastructure (Nginx, DNS, and SSL/HTTPS), plus a custom dashboard for client autonomy.',
        tags: ['Node.js', 'Nginx', 'VPS', 'HTTPS', 'Nuxt', 'Tailwind']
      },
      {
        id: 'animabrindes',
        title: 'AnimaBrindes',
        year: '2025',
        role: 'Full-stack e-commerce & digital catalog',
        category: 'Freelance',
        liveUrl: 'https://animabrindes.com.br',
        previewImage: '/projects/animabrindes.png',
        metric: {
          value: '100%',
          label: 'responsive & secure (HTTPS).',
          detail: 'Custom VPS deployment with Nginx, high availability, and fluid mobile UX.'
        },
        problem: 'Demand for a fast commercial catalog with strong branding and seamless navigation across mobile and desktop, avoiding high recurring SaaS costs.',
        solution: 'Figma prototyping, fully responsive React front-end development, Node.js API, and end-to-end VPS deployment orchestrated with Nginx and SSL.',
        tags: ['Node.js', 'VPS', 'Nginx', 'React', 'Figma']
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
        title: 'Resilient API Architecture with Product Vision',
        description: 'Systems and APIs must be engineered for reliability and business rule clarity, featuring predictable contracts, strategic caching, and graceful failure handling. Beyond just working code, building maintainable services that drive tangible product value.'
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
        category: 'Back-end & Data',
        skills: ['Node.js', 'PHP (Laravel)', 'Java', 'PostgreSQL', 'Redis', 'RESTful APIs']
      },
      {
        category: 'Infrastructure & Tools',
        skills: ['Docker', 'Git', 'Linux VPS Management', 'Nginx', 'DNS & SSL/HTTPS Configuration']
      },
      {
        category: 'Front-end',
        skills: ['JavaScript (ES6+)', 'Vue.js', 'Nuxt.js', 'React', 'Tailwind CSS', 'Figma']
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
    subtitle: 'Interested in Back-end and Full Stack engineering roles in teams valuing clean architecture, sustainable code, and business impact.',
    emailLabel: 'Direct Email',
    copyEmail: 'Copy Email',
    copied: 'Email Copied!',
    linkedinLabel: 'LinkedIn',
    githubLabel: 'GitHub',
    cvLabel: 'Resume (PDF)',
    availabilityNote: 'Based in Campina Grande, PB · Available for immediate remote employment.'
  },
  footer: {
    copyright: '© 2026 Luiz Lins. All rights reserved.',
    techStack: 'Built with Nuxt 4 & Tailwind CSS · Pure SSG',
    backToTop: 'Back to top'
  }
}
