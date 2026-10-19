const appBaseURL = process.env.NUXT_APP_BASE_URL || '/'
const withBase = (path: string) => `${appBaseURL.replace(/\/$/, '')}/${path.replace(/^\//, '')}`

export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: false },
  modules: ['@nuxtjs/tailwindcss'],
  typescript: {
    nodeTsConfig: {
      compilerOptions: {
        types: ['node']
      }
    }
  },
  app: {
    baseURL: appBaseURL,
    head: {
      htmlAttrs: {
        lang: 'pt-BR'
      },
      title: 'Luiz Lins — Software Engineer',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'description', content: 'Software Engineer focado em front-end (Vue, Nuxt, React) e APIs (Node.js, PHP/Laravel, Java). Infraestrutura própria e código sustentável.' },
        { name: 'theme-color', content: '#0B0F12' },
        { property: 'og:type', content: 'website' },
        { property: 'og:title', content: 'Luiz Lins — Software Engineer' },
        { property: 'og:description', content: 'Software Engineer focado em front-end (Vue, Nuxt, React) e APIs (Node.js, PHP/Laravel, Java). Infraestrutura própria e código sustentável.' }
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: withBase('favicon.ico') },
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' },
        { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Newsreader:ital,opsz,wght@0,6..72,400;0,6..72,500;0,6..72,600;1,6..72,400&family=JetBrains+Mono:wght@400;500&display=swap' }
      ],
      script: [
        {
          innerHTML: `(function(){try{var t=localStorage.getItem('portfolio-theme');var d=window.matchMedia('(prefers-color-scheme: dark)').matches;if(t==='dark'||(!t&&d)){document.documentElement.classList.add('dark')}else{document.documentElement.classList.remove('dark')}}catch(e){}})();`,
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
