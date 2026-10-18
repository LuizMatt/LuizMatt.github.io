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
    copyright: '© 2026 Luiz Lins. Todos os direitos reservados.',
    techStack: 'Construído com Nuxt 4 & Tailwind CSS · SSG Puro',
    backToTop: 'Voltar ao topo'
  }
}
