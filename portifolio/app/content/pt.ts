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
    role: 'Software Engineer · Front-end & Full Stack',
    positioning: 'Desenvolvedor focado em front-end com experiência de ponta a ponta: de interfaces resilientes em <strong>Vue</strong>, <strong>Nuxt</strong> e <strong>React</strong> a APIs em <strong>Node.js</strong>, <strong>PHP (Laravel)</strong> e <strong>Java</strong>, com infraestrutura própria (VPS, DNS, SSL). Foco em código sustentável, impacto mensurável e colaboração direta.',
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
          detail: 'O cliente atualiza o site sozinho.'
        },
        problem: 'A empresa queria um site rápido e fácil de atualizar, sem pagar por plataforma gerenciada.',
        solution: 'Desenvolvi front-end, API e infraestrutura do zero, com DNS, SSL e deploy em VPS própria, além de um painel para o cliente editar planos, preços e banners.',
        tags: ['Nuxt', 'Node.js', 'Nginx', 'VPS']
      },
      {
        id: 'animabrindes',
        title: 'AnimaBrindes',
        year: '2025',
        role: 'Catálogo comercial e prototipação digital',
        category: 'Freelance',
        liveUrl: 'https://animabrindes.com',
        previewImage: '/projects/animabrindes-preview.svg',
        metric: {
          value: '0',
          label: 'retrabalho de código.',
          detail: 'Validação e aprovação antecipada no Figma.'
        },
        problem: 'Demanda por catálogo digital com prazo curto e sem margem para retrabalho visual durante o código.',
        solution: 'Prototipação validada no Figma alinhada com o cliente, desenvolvimento ágil e deploy em produção com HTTPS.',
        tags: ['Figma', 'Front-end', 'Tailwind', 'HTTPS']
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
    copyright: '© 2026 Luiz Lins. Todos os direitos reservados.',
    techStack: 'Construído com Nuxt 4 & Tailwind CSS · SSG Puro',
    backToTop: 'Voltar ao topo'
  }
}
