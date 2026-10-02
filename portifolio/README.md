# Luiz Matheus Rodrigues Lins — Software Engineer Portfolio

Portfólio profissional e pessoal de Engenharia de Software com foco em front-end e entrega de ponta a ponta (Vue, Nuxt, React, Node.js, infraestrutura própria e design systems).

Construído com **Nuxt 4**, **Vue 3.5** e **Tailwind CSS**. 100% estático (SSG), bilíngue (Português e Inglês), suporte a tema claro e escuro, semântico e otimizado para pontuação 95+ no Lighthouse.

---

## ⚡ Diferenciais Técnicos

- **Design Editorial & Minimalista:** Tipografia serifada elegante (*Newsreader*) em títulos combinada com sans-serif moderna (*Inter*) e monospace (*JetBrains Mono*) para métricas e tags. Destaque em Verde Esmeralda Técnico (`#10B981`).
- **Bilíngue (PT / EN):** Alternância reativa de idiomas sem reload de página, com sincronização automática do atributo `lang` no HTML e persistência no `localStorage`.
- **Tema Claro / Escuro Anti-FOUC:** Respeita o `prefers-color-scheme` do sistema operacional com script inline preventivo contra flashes brancos ou pretos ao carregar a página.
- **Acessibilidade (WCAG 2.1 AA):** Navegação completa por teclado, anéis de foco evidentes (`focus-visible`), link acessível de salto (*Skip to content*) e respeito automático a `prefers-reduced-motion`.
- **SSG Estático Puro:** Pré-renderizado com `nuxt generate` gerando HTML estático limpo em `.output/public`, pronto para deploy sem custo em Vercel ou GitHub Pages.
- **Isolamento de Conteúdo:** Textos e projetos completamente desacoplados dos componentes em arquivos TypeScript tipados (`app/content/pt.ts` e `app/content/en.ts`).

---

## 📂 Estrutura do Projeto

```text
portifolio/
├── app/
│   ├── app.vue                 # Layout principal e metadados SEO reativos
│   ├── assets/
│   │   └── css/main.css        # Configurações do Tailwind, foco acessível e fontes
│   ├── components/             # Componentes modulares e reutilizáveis
│   │   ├── Navbar.vue          # Header fixo com blur, menu, seletor PT/EN e tema
│   │   ├── Hero.vue            # Hero com status de trabalho remoto e CTAs
│   │   ├── SelectedWorks.vue   # Container dos estudos de caso
│   │   ├── ProjectCard.vue     # Card de case com mockup SVG, problema, solução e métricas
│   │   ├── Experience.vue      # Linha do tempo corporativa (Single Software) e formação
│   │   ├── HowIWork.vue        # 3 princípios de engenharia e tags de tecnologias
│   │   ├── Contact.vue         # Contato direto, cópia de e-mail e download do CV
│   │   └── Footer.vue          # Rodapé sóbrio com link para voltar ao topo
│   ├── composables/            # useLocale.ts e useTheme.ts
│   └── content/                # types.ts, pt.ts e en.ts
├── public/
│   ├── projects/               # Mockups técnicos em SVG dos cases
│   ├── Luiz-Lins-CV.pdf        # Currículo em PDF para download
│   ├── robots.txt              # Regras para motores de busca
│   └── sitemap.xml             # Sitemap estático
├── nuxt.config.ts              # Configuração Nuxt 4, Tailwind e meta tags
└── package.json
```

---

## ✏️ Como Editar Conteúdo

Para editar qualquer texto, projeto, cargo ou princípio, basta alterar os arquivos em `app/content/`:
- **Português:** `app/content/pt.ts`
- **Inglês:** `app/content/en.ts`
- **Tipagem:** `app/content/types.ts`

Você não precisa alterar o código dos componentes para atualizar suas informações.

---

## 🚀 Como Executar Localmente

```bash
# 1. Instalar as dependências
pnpm install

# 2. Iniciar o servidor de desenvolvimento
pnpm run dev
```

Acesse [http://localhost:3000](http://localhost:3000) no seu navegador.

---

## 📦 Como Gerar Build Estático e Fazer Deploy

```bash
# Gerar arquivos estáticos na pasta .output/public
pnpm run generate

# Testar a versão estática pré-compilada localmente
pnpm run preview
```

### Deploy na Vercel
1. Crie um repositório no seu GitHub e suba o código.
2. Na [Vercel](https://vercel.com), clique em **Add New Project** e selecione o repositório.
3. O preset do Nuxt será detectado automaticamente.
4. O diretório de saída será configurado automaticamente como `.output/public`.

### Deploy no GitHub Pages
1. No repositório do GitHub, vá em **Settings > Pages**.
2. Em **Build and deployment**, selecione **GitHub Actions**.
3. Crie um workflow com o Node.js e `pnpm run generate`, apontando o upload do artefato para `./.output/public`.
