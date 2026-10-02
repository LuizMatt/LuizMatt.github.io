<script setup lang="ts">
import { useLocale } from '../composables/useLocale'

const { content } = useLocale()

function scrollToTop() {
  if (typeof window !== 'undefined') {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }
}
</script>

<template>
  <footer class="border-t border-surface-light-border dark:border-surface-dark-border py-10 bg-surface-light dark:bg-surface-dark text-xs font-mono text-gray-500 dark:text-gray-400">
    <div class="max-w-6xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
      <div>
        <p>{{ content.footer.copyright }}</p>
        <p class="text-gray-400 dark:text-gray-500 mt-1">{{ content.footer.techStack }}</p>
      </div>

      <button
        type="button"
        @click="scrollToTop"
        class="inline-flex items-center gap-1.5 hover:text-emerald-500 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 rounded p-1"
      >
        <span>{{ content.footer.backToTop }}</span>
        <svg class="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 10l7-7m0 0l7 7m-7-7v18" />
        </svg>
      </button>
    </div>
  </footer>
</template>
