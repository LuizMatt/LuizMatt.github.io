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
    status: '',
    location: '',
    greeting: 'Olá, sou',
    name: 'Luiz Lins',
    role: 'Software Engineer · Back-end & Full Stack',
    positioning: 'Desenvolvedor focado em back-end com experiência de ponta a ponta: de interfaces resilientes em <strong>Vue</strong>, <strong>Nuxt</strong> e <strong>React</strong> a APIs em <strong>Node.js</strong>, <strong>PHP (Laravel)</strong> e <strong>Java</strong>, com infraestrutura própria (VPS, DNS, SSL) e <strong>Docker</strong>. Foco em código sustentável, impacto mensurável e colaboração direta.',
    ctaProjects: 'Ver projetos em produção',
    ctaContact: 'Entrar em contato',
    downloadCv: 'Baixar Currículo (PDF)'
  },
  works: {
    sectionNumber: '01',
    title: 'Projetos em produção',
    subtitle: 'Aplicações reais desenvolvidas com rigor técnico, foco em experiência do usuário e arquitetura enxuta.',
    problemLabel: 'Problema',
    solutionLabel: 'O que fiz',
    visitLive: 'Ver site',
    projects: [
      {
        id: 'brasystem',
        title: 'Brasystem',
        year: '2026',
        role: 'Site institucional, full stack e infraestrutura',
        category: 'Freelance',
        liveUrl: 'https://brasystem.net',
        previewImage: '/projects/brasystem.png',
        metric: {
          value: '92',
          label: 'no PageSpeed Insights (SEO).',
          detail: '100% responsivo e com autonomia total para o cliente.'
        },
        problem: 'A empresa precisava de uma presença digital rápida, moderna e fácil de atualizar, sem custos recorrentes de plataformas gerenciadas.',
        solution: 'Desenvolvi interface 100% responsiva com Nuxt e Tailwind CSS, API em Node.js e infraestrutura completa em VPS (Nginx, DNS e SSL/HTTPS), com painel autônomo para o cliente gerenciar planos e banners.',
        tags: ['Node.js', 'Nginx', 'VPS', 'HTTPS', 'Nuxt', 'Tailwind']
      },
      {
        id: 'animabrindes',
        title: 'AnimaBrindes',
        year: '2025',
        role: 'E-commerce & Catálogo digital full stack',
        category: 'Freelance',
        liveUrl: 'https://animabrindes.com.br',
        previewImage: '/projects/animabrindes.png',
        metric: {
          value: '100%',
          label: 'responsivo e seguro com HTTPS.',
          detail: 'VPS própria em Nginx com alta disponibilidade e UX adaptativa.'
        },
        problem: 'Demanda por um catálogo comercial ágil, com identidade visual forte e navegação fluida em mobile e desktop, sem depender de plataformas caras.',
        solution: 'Prototipação no Figma, desenvolvimento do front-end totalmente responsivo em React, API em Node.js e orquestração do deploy em VPS própria com Nginx e SSL.',
        tags: ['Node.js', 'VPS', 'Nginx', 'React', 'Figma']
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
        title: 'Arquitetura de APIs Resiliente com Visão de Produto',
        description: 'Sistemas e APIs devem ser construídos para estabilidade e clareza de regras de negócio, com contratos consistentes, cache inteligente e tratamento de falhas. Não apenas código que roda, mas serviços sustentáveis que geram valor direto ao produto e reduzem custos de manutenção.'
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
        category: 'Back-end & Dados',
        skills: ['Node.js', 'PHP (Laravel)', 'Java', 'PostgreSQL', 'Redis', 'APIs RESTful']
      },
      {
        category: 'Infraestrutura & Ferramentas',
        skills: ['Docker', 'Git', 'Gestão de VPS (Linux/Hostinger)', 'Nginx', 'Configuração de DNS', 'SSL/HTTPS']
      },
      {
        category: 'Front-end',
        skills: ['JavaScript (ES6+)', 'Vue.js', 'Nuxt.js', 'React', 'Tailwind CSS', 'Figma']
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
    subtitle: 'Aberto a oportunidades como Back-end ou Full Stack Engineer em times com foco em código sustentável, arquitetura resiliente e resultados de negócio.',
    emailLabel: 'E-mail direto',
    copyEmail: 'Copiar e-mail',
    copied: 'E-mail copiado!',
    linkedinLabel: 'LinkedIn',
    githubLabel: 'GitHub',
    cvLabel: 'Currículo em PDF',
    availabilityNote: 'Residência em Campina Grande, PB · Disponível para contratação remota imediata.'
  },
  footer: {
    copyright: '© 2026 Luiz Lins. Todos os direitos reservados.',
    techStack: 'Construído com Nuxt 4 & Tailwind CSS · SSG Puro',
    backToTop: 'Voltar ao topo'
  }
}
