import { ref, computed, onMounted } from 'vue'

export type Theme = 'dark' | 'light'

const currentTheme = ref<Theme>('dark')

export function useTheme() {
  const isDark = computed(() => currentTheme.value === 'dark')

  function applyTheme(theme: Theme) {
    currentTheme.value = theme
    if (typeof window !== 'undefined') {
      localStorage.setItem('portfolio-theme', theme)
      if (theme === 'dark') {
        document.documentElement.classList.add('dark')
      } else {
        document.documentElement.classList.remove('dark')
      }
    }
  }

  function toggleTheme() {
    applyTheme(currentTheme.value === 'dark' ? 'light' : 'dark')
  }

  onMounted(() => {
    const saved = localStorage.getItem('portfolio-theme') as Theme | null
    if (saved === 'dark' || saved === 'light') {
      applyTheme(saved)
    } else {
      const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
      applyTheme(prefersDark ? 'dark' : 'light')
    }

    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)')
    mediaQuery.addEventListener('change', (e) => {
      const userSaved = localStorage.getItem('portfolio-theme')
      if (!userSaved) {
        applyTheme(e.matches ? 'dark' : 'light')
      }
    })
  })

  return {
    theme: computed(() => currentTheme.value),
    isDark,
    toggleTheme,
    setTheme: applyTheme
  }
}
