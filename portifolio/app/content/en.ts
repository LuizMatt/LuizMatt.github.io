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
    role: 'Software Engineer · Front-end & Full Stack',
    positioning: 'Front-end focused developer with end-to-end delivery: from resilient interfaces in <strong>Vue</strong>, <strong>Nuxt</strong>, and <strong>React</strong> to <strong>Node.js</strong>, <strong>PHP (Laravel)</strong>, and <strong>Java</strong> APIs, backed by self-managed infrastructure (VPS, DNS, SSL). Dedicated to sustainable code, measurable impact, and direct collaboration.',
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
          detail: 'Client updates the site autonomously.'
        },
        problem: 'The company needed a fast, easily editable website without paying for expensive managed platforms.',
        solution: 'Engineered front-end, API, and infrastructure from scratch, with custom DNS, SSL, and VPS deployment, plus a client dashboard to update plans, pricing, and banners.',
        tags: ['Nuxt', 'Node.js', 'Nginx', 'VPS']
      },
      {
        id: 'animabrindes',
        title: 'AnimaBrindes',
        year: '2025',
        role: 'Commercial catalog & digital prototyping',
        category: 'Freelance',
        liveUrl: 'https://animabrindes.com',
        previewImage: '/projects/animabrindes-preview.svg',
        metric: {
          value: '0',
          label: 'code rework.',
          detail: 'Upfront validation and approval in Figma.'
        },
        problem: 'Urgent commercial digital catalog with zero tolerance for visual rework during code implementation.',
        solution: 'End-to-end Figma prototyping validated upfront with the client, followed by agile development and HTTPS production deploy.',
        tags: ['Figma', 'Front-end', 'Tailwind', 'HTTPS']
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
    copyright: '© 2026 Luiz Lins. All rights reserved.',
    techStack: 'Built with Nuxt 4 & Tailwind CSS · Pure SSG',
    backToTop: 'Back to top'
  }
}
