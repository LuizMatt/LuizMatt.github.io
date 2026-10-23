import type { PortfolioContent } from './types'

export const enContent: PortfolioContent = {
  nav: {
    projects: 'Projects',
    articles: 'Articles',
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
        liveUrl: 'https://animabrindes.com',
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
  articles: {
    sectionNumber: '02',
    title: 'Technical Writing',
    subtitle: 'Architectural deep-dives, resilience patterns, and distributed systems engineering solutions.',
    readAction: 'Read full article',
    closeAction: 'Close reader',
    backToArticles: 'Back to articles',
    tapToZoomHint: 'Tap image to enlarge',
    items: [
      {
        id: 'dual-write-outbox-pattern',
        slug: 'hidden-failures-in-architectures-the-dual-write-problem',
        title: 'Hidden failures in architectures: the dual write problem',
        subtitle: 'How silent payment inconsistencies expose the dual write dilemma and why the Transactional Outbox Pattern is essential.',
        category: 'Architecture',
        readTime: '5 min read',
        date: '2026',
        tags: ['Dual Write', 'Outbox Pattern', 'Distributed Systems'],
        summary: 'In distributed architectures, attempting to update two disconnected systems simultaneously without atomic guarantees leads to silent failure modes. Learn how the Transactional Outbox Pattern resolves dual write vulnerabilities.',
        sections: [
          {
            id: 'cenario-dual-write',
            title: 'The Scenario and the Silent Dual Write Dilemma',
            paragraphs: [
              'Imagine the following scenario: you operate an e-commerce platform where users purchase items registered in the system. A sequence of steps must take place for the payment transaction to complete successfully. Analyze the following flow:'
            ],
            image: {
              src: '/articles/fluxo-pagamento-dual-write.webp',
              alt: 'Initial payment flow vulnerable to dual write',
              caption: 'Standard synchronous payment flow: the API attempts to orchestrate both the external gateway and the local database.'
            }
          },
          {
            id: 'problema-dual-write',
            paragraphs: [
              'The flow appears simple at first glance, but harbors a critical flaw: what happens during payment processing if one of the participating services fails? This dual write issue occurs whenever two independent systems must be updated atomically, yet no distributed guarantee exists to enforce that atomicity. This routinely creates inconsistent state—such as a payment marked as COMPLETED by the external gateway remaining stuck as PENDING in our database.'
            ]
          },
          {
            id: 'cenarios-de-falha',
            title: 'Critical Failure Scenarios',
            paragraphs: [
              'We can map out several catastrophic failure points as follows:'
            ],
            image: {
              src: '/articles/pontos-de-falha-dual-write.webp',
              alt: 'Failure points mapping in payment architecture',
              caption: 'Critical breakage points (A, B, and C) where partial failures corrupt state integrity.'
            },
            points: [
              {
                label: 'Point A',
                text: 'After the payment gateway charges the customer, the database write fails due to an internal glitch, such as a dropped network connection. The customer is charged, but no record exists in our system.'
              },
              {
                label: 'Point B',
                text: 'The confirmation webhook never reaches our API—for instance, because our endpoint is temporarily down or experiences a timeout. The transaction completed externally, but our API never learns of it, leaving the order in a perpetual pending state.'
              },
              {
                label: 'Point C',
                text: 'The API server crashes between receiving the webhook confirmation (3) and persisting the record (4). In this scenario, writing to the database is never even attempted. The final outcome is an executed payment with no persistent trace, identical to Point A.'
              }
            ]
          },
          {
            id: 'solucao-outbox-pattern',
            title: 'The Solution: Transactional Outbox Pattern',
            paragraphs: [
              'Faced with this scenario, one of the most battle-tested solutions is the Transactional Outbox Pattern. Instead of attempting to write across two disparate systems (the database and the external payment gateway), we persist—within a single local database transaction—both the payment entity in the primary table and a corresponding event in an auxiliary table called the outbox. Because both writes execute within the exact same database transaction, either both commit or neither does, entirely eliminating inconsistency between them. The outbox table holds events awaiting publication and is polled by a specialized component called a relay. The relay can be implemented through scheduled polling or CDC (Change Data Capture), which streams changes directly from the database transaction log. For every event read, the relay dispatches the charge request to the gateway, and payment confirmation is finalized later, asynchronously.'
            ],
            image: {
              src: '/articles/outbox-pattern-fluxo.webp',
              alt: 'Transactional Outbox Pattern architecture flow',
              caption: 'Resilient architecture with Transactional Outbox: guaranteed local persistence combined with asynchronous relay dispatch.'
            }
          },
          {
            id: 'como-a-outbox-resolve',
            title: 'How the Outbox Resolves Every Failure Scenario',
            paragraphs: [
              'With this redesigned flow in place, let us revisit the critical failure points mapped earlier:'
            ],
            points: [
              {
                label: 'Point A (Database failure after charge)',
                text: 'This scenario is completely eliminated in its original form. The external charge request is only triggered after the payment intent and event have been durably persisted to the database. If the database fails during insertion, nothing commits and no external call is made. If the write succeeds, our system permanently preserves a record, regardless of downstream errors.'
              },
              {
                label: 'Point B (Webhook fails to reach API)',
                text: 'The outbox pattern alone cannot prevent external delivery drops, as this takes place after dispatch, outside the boundaries of our database. It requires a complementary operational strategy: pairing gateway webhook retry policies with an automated reconciliation worker that periodically audits payments remaining in PENDING past a threshold and synchronizes their state against the gateway truth.'
              },
              {
                label: 'Point C (API crashes before persisting confirmation)',
                text: 'The payment already safely exists in our database with PENDING status, meaning zero business context is lost. When the gateway retries the webhook or the reconciliation worker executes, the status updates normally. Furthermore, should a crash occur within the relay component itself, the event remains safe in the outbox queue and will be processed upon restart, as events are only flagged as dispatched once acknowledged.'
              }
            ]
          },
          {
            id: 'trade-offs',
            title: 'Trade-offs and Operational Costs',
            paragraphs: [
              'While the Transactional Outbox pattern comprehensively eliminates dual write issues, it introduces deliberate engineering trade-offs that must be planned for. First, event delivery semantics become at-least-once: the relay may deliver the same event multiple times—for example, if a crash occurs after invoking the gateway but prior to updating the outbox record status. To protect against duplicate charges, an idempotency key (such as the unique payment ID) is strictly mandatory in calls to the payment gateway. The exact same rule applies to incoming confirmation webhooks: updating payment status to PROCESSED must be idempotent, only mutating state when the record remains in PENDING.',
              'Second, the user interaction model shifts from synchronous to asynchronous. The customer receives an immediate PENDING acknowledgement, with the final settlement arriving subsequently. The front-end client must accommodate this transition gracefully via polling, WebSockets, or push notifications. This requires embracing eventual consistency: the database and gateway do not align in the exact same millisecond. Lastly, operational overhead increases: a new database table must be maintained alongside an independent relay service that demands monitoring to prevent event queue backlogs.'
            ]
          },
          {
            id: 'conclusao',
            title: 'Conclusion',
            paragraphs: [
              'Dual write is an deceptively easy pitfall to overlook because the "happy path" works predictably under normal conditions. The failure mode only surfaces when an unpredictable glitch occurs midway between writes across decoupled systems, producing unrecorded customer charges or orders abandoned in eternal limbo.',
              'The Transactional Outbox Pattern strikes directly at the heart of the problem: rather than striving to hold two remote systems in continuous lockstep, it captures both business intent and outgoing messages inside a single atomic local transaction, delegating external dispatch to an asynchronous, retry-enabled subsystem. In doing so, we consciously trade immediate atomicity for eventual consistency.',
              'This trade-off requires its prerequisites: robust idempotency across requests and webhooks, an asynchronous user journey, and an additional service to operate. Yet for payments and high-value distributed workflows, this architecture proves indispensable—ensuring systems never drop records silently and recover autonomously from unexpected real-world infrastructure failures.'
            ]
          }
        ]
      }
    ]
  },
  experience: {
    sectionNumber: '03',
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
    sectionNumber: '04',
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
    sectionNumber: '05',
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
