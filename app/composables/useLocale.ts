import { ref, computed, onMounted } from 'vue'
import { ptContent } from '../content/pt'
import { enContent } from '../content/en'
import type { PortfolioContent } from '../content/types'

export type Locale = 'pt' | 'en'

const currentLocale = ref<Locale>('pt')

export function useLocale() {
  const content = computed<PortfolioContent>(() => {
    return currentLocale.value === 'en' ? enContent : ptContent
  })

  function setLocale(loc: Locale) {
    currentLocale.value = loc
    if (typeof window !== 'undefined') {
      localStorage.setItem('portfolio-locale', loc)
      document.documentElement.setAttribute('lang', loc === 'pt' ? 'pt-BR' : 'en')
    }
  }

  function toggleLocale() {
    setLocale(currentLocale.value === 'pt' ? 'en' : 'pt')
  }

  onMounted(() => {
    const saved = localStorage.getItem('portfolio-locale') as Locale | null
    if (saved === 'pt' || saved === 'en') {
      currentLocale.value = saved
    } else {
      const browserLang = navigator.language?.toLowerCase() || ''
      if (browserLang.startsWith('en')) {
        currentLocale.value = 'en'
      }
    }
    document.documentElement.setAttribute('lang', currentLocale.value === 'pt' ? 'pt-BR' : 'en')
  })

  return {
    locale: computed(() => currentLocale.value),
    content,
    setLocale,
    toggleLocale
  }
}
