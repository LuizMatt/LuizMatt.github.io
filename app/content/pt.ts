import type { PortfolioContent } from './types'

export const ptContent: PortfolioContent = {
  nav: {
    projects: 'Projetos',
    articles: 'Artigos',
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
        liveUrl: 'https://animabrindes.com',
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
  articles: {
    sectionNumber: '02',
    title: 'Artigos Técnicos',
    subtitle: 'Estudos de caso arquiteturais, padrões de resiliência e soluções para desafios em sistemas distribuídos.',
    readAction: 'Ler artigo completo',
    closeAction: 'Fechar leitor',
    backToArticles: 'Voltar aos artigos',
    tapToZoomHint: 'Toque na imagem para ampliar',
    items: [
      {
        id: 'dual-write-outbox-pattern',
        slug: 'falhas-ocultas-em-arquiteturas-o-problema-de-dual-write',
        title: 'Falhas ocultas em arquiteturas: o problema de dual write',
        subtitle: 'Como inconsistências silenciosas em pagamentos revelam a necessidade do Transactional Outbox Pattern.',
        category: 'Arquitetura',
        readTime: '5 min de leitura',
        date: '2026',
        tags: ['Dual Write', 'Outbox Pattern', 'Sistemas Distribuídos'],
        summary: 'Em sistemas distribuídos, tentar manter dois sistemas atualizados ao mesmo tempo sem garantia atômica gera falhas silenciosas. Entenda como o Transactional Outbox Pattern resolve o problema de dual write.',
        sections: [
          {
            id: 'cenario-dual-write',
            title: 'O cenário e a inconsistência silenciosa',
            paragraphs: [
              'Imagine o seguinte cenário: você tem um e-commerce onde o usuário irá comprar produtos cadastrados na plataforma. Há uma série de procedimentos para que o pagamento seja concluído. Analise o seguinte fluxo:'
            ],
            image: {
              src: '/articles/fluxo-pagamento-dual-write.webp',
              alt: 'Fluxo inicial de pagamento com dual write',
              caption: 'Fluxo de pagamento síncrono padrão: a API tenta coordenar o gateway e o banco.'
            }
          },
          {
            id: 'problema-dual-write',
            paragraphs: [
              'O fluxo parece simples, mas esconde uma falha crítica: o que ocorre se durante o processo de pagamentos se um dos serviços falhar? Esse tipo de problema de dual write ocorre quando dois sistemas precisam ser atualizados de maneira atômica, porém não temos garantia de que isso está ocorrendo. Isso pode gerar dados inconsistentes, como um pagamento CONCLUÍDO constar como PENDENTE.'
            ]
          },
          {
            id: 'cenarios-de-falha',
            title: 'Cenários críticos de falha',
            paragraphs: [
              'Podemos mapear alguns cenários de falha da seguinte maneira:'
            ],
            image: {
              src: '/articles/pontos-de-falha-dual-write.webp',
              alt: 'Mapeamento de pontos de falha no fluxo',
              caption: 'Pontos críticos de ruptura (A, B e C) onde falhas parciais corrompem o estado do sistema.'
            },
            points: [
              {
                label: 'Ponto A',
                text: 'depois de o gateway ter cobrado, o banco falha ao salvar os dados por causa de um problema interno, como uma queda de conexão. O pagamento é realizado, mas não há registro dele.'
              },
              {
                label: 'Ponto B',
                text: 'o webhook não chega à API, por exemplo porque o endpoint está fora do ar ou porque ocorre um timeout. O pagamento é concluído, mas a API não fica sabendo, e o pedido continua como pendente.'
              },
              {
                label: 'Ponto C',
                text: 'a API cai entre a confirmação (3) e o registro (4). Nesse caso, a gravação no banco nem chega a ser tentada, porque o fluxo é interrompido antes dessa etapa. O resultado é um pagamento realizado e sem registro, como no ponto A.'
              }
            ]
          },
          {
            id: 'solucao-outbox-pattern',
            title: 'A solução: Transactional Outbox Pattern',
            paragraphs: [
              'Diante desse cenário, uma das soluções mais conhecidas é o Transactional Outbox Pattern. Em vez de gravar a transação em dois sistemas distintos (o banco de dados e o gateway de pagamento), registramos, em uma única transação local, o pagamento na tabela principal e um evento correspondente em uma tabela auxiliar, chamada de outbox. Como as duas gravações ocorrem na mesma transação, ou ambas são persistidas ou nenhuma é, o que elimina o risco de inconsistência entre elas. A outbox guarda os eventos pendentes de publicação e é lida por um componente chamado relay, que pode ser implementado por polling periódico da tabela ou por CDC (Change Data Capture), técnica que captura as mudanças diretamente do log do banco. A cada evento lido, o relay dispara a solicitação de cobrança ao gateway, e a confirmação do pagamento acontece depois, de forma assíncrona.'
            ],
            image: {
              src: '/articles/outbox-pattern-fluxo.webp',
              alt: 'Fluxo com Transactional Outbox Pattern e Relay',
              caption: 'Novo fluxo com Transactional Outbox: persistência local atômica garantida e relay assíncrono.'
            }
          },
          {
            id: 'como-a-outbox-resolve',
            title: 'Como a outbox resolve os cenários de falha',
            paragraphs: [
              'Com o novo fluxo, vamos revisitar os pontos que mapeamos antes:'
            ],
            points: [
              {
                label: 'Ponto A (o banco falha depois da cobrança)',
                text: 'esse cenário deixa de existir da forma original. A cobrança só é disparada depois que o pagamento e o evento já foram gravados de forma durável no banco. Se o banco falhar na hora de gravar, nada é persistido e nenhuma cobrança é feita. Se a gravação der certo, o pagamento sempre terá um registro, mesmo que alguma etapa posterior falhe.'
              },
              {
                label: 'Ponto B (o webhook não chega à API)',
                text: 'a outbox não resolve esse ponto sozinha, porque ele acontece depois do envio da cobrança, fora do controle do nosso banco. Ele exige uma estratégia complementar: contar com a política de reenvio de webhooks do gateway e manter um job de reconciliação, que consulta o status dos pagamentos que ficaram em PENDENTE por tempo demais e os atualiza de acordo com a resposta do gateway.'
              },
              {
                label: 'Ponto C (a API cai antes de registrar a confirmação)',
                text: 'o pagamento já existe no banco como PENDENTE, então nenhuma informação se perde. Quando o webhook for reenviado ou o job de reconciliação rodar, o status é atualizado. Se a queda ocorrer no relay, o evento continua na outbox e será processado quando o componente voltar, já que só deixa de estar pendente depois de ser marcado como enviado.'
              }
            ]
          },
          {
            id: 'trade-offs',
            title: 'Trade-offs',
            paragraphs: [
              'A outbox resolve o problema do dual write, mas traz custos que precisam ser considerados. O primeiro deles é que a entrega passa a ser at-least-once: o relay pode enviar o mesmo evento mais de uma vez, por exemplo se cair depois de chamar o gateway e antes de marcar o evento como enviado. Para evitar cobranças duplicadas, é necessário usar uma idempotency key (como o ID do pagamento) na chamada ao gateway. O mesmo raciocínio vale para a confirmação, já que o webhook também pode chegar mais de uma vez, e por isso a atualização para PROCESSADO deve ser idempotente, alterando o status apenas se o pagamento ainda estiver PENDENTE.',
              'Outro ponto é que o fluxo se torna assíncrono. O usuário recebe PENDENTE na hora e o resultado final chega depois, então o front-end precisa lidar com esse estado, seja por polling, WebSocket ou notificação. Isso também significa aceitar a consistência eventual: banco e gateway deixam de estar sincronizados no mesmo instante, e a inconsistência, embora temporária, existe e precisa ser considerada no projeto do sistema. Por fim, há um custo operacional, pois passa a existir uma tabela a mais para manter e um novo componente, o relay, que precisa ser operado e monitorado, principalmente para detectar eventos que estão se acumulando na outbox.'
            ]
          },
          {
            id: 'conclusao',
            title: 'Conclusão',
            paragraphs: [
              'Com base nisso, dual write é um problema fácil de ignorar porque o fluxo “feliz” funciona bem. A falha aparece quando algo dá errado entre duas escritas em sistemas diferentes, e o resultado são pagamentos cobrados sem registro ou pedidos que ficam eternamente pendentes.',
              'O Transactional Outbox Pattern ataca a raiz do problema: em vez de tentar manter dois sistemas consistentes ao mesmo tempo, grava-se a intenção da operação e o dado de negócio em uma única transação local, e o envio ao sistema externo acontece depois, de forma assíncrona e com possibilidade de nova tentativa. Com isso, trocamos a atomicidade imediata por consistência eventual.',
              'Essa troca tem um preço: idempotência nas chamadas e nos webhooks, um fluxo assíncrono para o usuário e um componente a mais para operar. Mas, na maioria dos casos de pagamento e outros fluxos críticos, é um custo que vale a pena, porque o sistema deixa de perder dados silenciosamente e passa a se recuperar sozinho das falhas.'
            ]
          }
        ]
      }
    ]
  },
  experience: {
    sectionNumber: '03',
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
    sectionNumber: '04',
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
    sectionNumber: '05',
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
