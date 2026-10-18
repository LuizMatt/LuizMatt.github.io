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
    copyright: '© 2026 Luiz Lins. All rights reserved.',
    techStack: 'Built with Nuxt 4 & Tailwind CSS · Pure SSG',
    backToTop: 'Back to top'
  }
}
