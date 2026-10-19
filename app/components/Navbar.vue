<script setup lang="ts">
import { ref } from 'vue'
import { useLocale } from '../composables/useLocale'
import { useTheme } from '../composables/useTheme'

const { locale, content, toggleLocale } = useLocale()
const { isDark, toggleTheme } = useTheme()
const assetUrl = useAssetUrl()
const isMobileMenuOpen = ref(false)

function closeMobileMenu() {
  isMobileMenuOpen.value = false
}
</script>

<template>
  <header class="sticky top-0 z-50 w-full border-b border-surface-light-border dark:border-surface-dark-border bg-surface-light/85 dark:bg-surface-dark/85 backdrop-blur-md transition-colors duration-200">
    <!-- Accessible Skip to Content Link -->
    <a
      href="#main-content"
      class="sr-only focus:not-sr-only focus:absolute focus:top-3 focus:left-3 focus:z-50 focus:px-4 focus:py-2 focus:bg-emerald-500 focus:text-white focus:rounded-md focus:shadow-lg focus:outline-none focus:ring-2 focus:ring-emerald-400 font-medium text-sm"
    >
      {{ content.nav.skipLink }}
    </a>

    <div class="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
      <!-- Logo / Monogram -->
      <a
        href="#"
        class="group flex items-center gap-2 text-gray-900 dark:text-gray-100 font-serif text-xl tracking-tight focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 rounded px-1"
        aria-label="Luiz Lins Home"
      >
        <span class="font-bold text-emerald-600 dark:text-emerald-400">LL</span>
        <span class="text-xs tracking-widest text-gray-500 dark:text-gray-400 uppercase font-mono group-hover:text-gray-900 dark:group-hover:text-gray-200 transition-colors">/ engineer</span>
      </a>

      <!-- Desktop Navigation Links -->
      <nav class="hidden md:flex items-center gap-8 text-sm font-medium text-gray-600 dark:text-gray-300" aria-label="Navegação principal">
        <a
          href="#projects"
          class="hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 rounded py-1 px-1.5"
        >
          {{ content.nav.projects }}
        </a>
        <a
          href="#experience"
          class="hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 rounded py-1 px-1.5"
        >
          {{ content.nav.experience }}
        </a>
        <a
          href="#principles"
          class="hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 rounded py-1 px-1.5"
        >
          {{ content.nav.principles }}
        </a>
        <a
          href="#contact"
          class="hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 rounded py-1 px-1.5"
        >
          {{ content.nav.contact }}
        </a>
      </nav>

      <!-- Utility Controls (Locale & Theme & CV) -->
      <div class="flex items-center gap-3">
        <!-- Bilingual Toggle Button -->
        <button
          type="button"
          @click="toggleLocale"
          :aria-label="content.nav.langToggleAria"
          class="inline-flex items-center gap-1 px-2.5 py-1.5 rounded-md border border-surface-light-border dark:border-surface-dark-border text-xs font-mono font-medium hover:border-emerald-500/50 dark:hover:border-emerald-500/50 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500"
        >
          <span :class="locale === 'pt' ? 'text-emerald-600 dark:text-emerald-400 font-bold' : 'text-gray-400'">PT</span>
          <span class="text-gray-300 dark:text-gray-600">/</span>
          <span :class="locale === 'en' ? 'text-emerald-600 dark:text-emerald-400 font-bold' : 'text-gray-400'">EN</span>
        </button>

        <!-- Theme Toggle Button -->
        <button
          type="button"
          @click="toggleTheme"
          :aria-label="content.nav.themeToggleAria"
          class="p-2 rounded-md border border-surface-light-border dark:border-surface-dark-border text-gray-700 dark:text-gray-300 hover:border-emerald-500/50 dark:hover:border-emerald-500/50 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500"
        >
          <!-- Sun Icon (when dark) -->
          <svg v-if="isDark" class="w-4 h-4 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 3v1m0 16v1m9-9h-1M4 9h-1m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
          </svg>
          <!-- Moon Icon (when light) -->
          <svg v-else class="w-4 h-4 text-gray-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
          </svg>
        </button>

        <!-- Download CV Button Desktop -->
        <a
          :href="assetUrl('/Luiz-Lins-CV.pdf')"
          download="Luiz-Lins-CV.pdf"
          class="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium rounded-md bg-emerald-600 hover:bg-emerald-700 text-white dark:bg-emerald-500 dark:hover:bg-emerald-400 dark:text-zinc-950 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400"
        >
          <svg class="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
          </svg>
          {{ content.nav.cvButton }}
        </a>

        <!-- Mobile Menu Trigger -->
        <button
          type="button"
          @click="isMobileMenuOpen = !isMobileMenuOpen"
          class="md:hidden p-2 rounded-md text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500"
          :aria-expanded="isMobileMenuOpen"
          aria-label="Abrir menu"
        >
          <svg class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path v-if="!isMobileMenuOpen" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
            <path v-else stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>
    </div>

    <!-- Mobile Navigation Drawer -->
    <div v-show="isMobileMenuOpen" class="md:hidden border-b border-surface-light-border dark:border-surface-dark-border px-6 py-4 space-y-3 bg-surface-light dark:bg-surface-dark">
      <a
        href="#projects"
        @click="closeMobileMenu"
        class="block py-2 text-sm font-medium text-gray-700 dark:text-gray-200 hover:text-emerald-500"
      >
        {{ content.nav.projects }}
      </a>
      <a
        href="#experience"
        @click="closeMobileMenu"
        class="block py-2 text-sm font-medium text-gray-700 dark:text-gray-200 hover:text-emerald-500"
      >
        {{ content.nav.experience }}
      </a>
      <a
        href="#principles"
        @click="closeMobileMenu"
        class="block py-2 text-sm font-medium text-gray-700 dark:text-gray-200 hover:text-emerald-500"
      >
        {{ content.nav.principles }}
      </a>
      <a
        href="#contact"
        @click="closeMobileMenu"
        class="block py-2 text-sm font-medium text-gray-700 dark:text-gray-200 hover:text-emerald-500"
      >
        {{ content.nav.contact }}
      </a>
      <a
        :href="assetUrl('/Luiz-Lins-CV.pdf')"
        download="Luiz-Lins-CV.pdf"
        class="flex items-center justify-center gap-2 w-full py-2.5 text-xs font-medium rounded-md bg-emerald-600 text-white dark:bg-emerald-500 dark:text-zinc-950"
      >
        <svg class="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
        </svg>
        {{ content.nav.cvButton }}
      </a>
    </div>
  </header>
</template>
