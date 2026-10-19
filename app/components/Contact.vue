<script setup lang="ts">
import { ref } from 'vue'
import { useLocale } from '../composables/useLocale'

const { content } = useLocale()
const assetUrl = useAssetUrl()
const emailCopied = ref(false)

function copyEmailAddress() {
  if (typeof navigator !== 'undefined') {
    navigator.clipboard.writeText('luizmatheuslins55@gmail.com')
    emailCopied.value = true
    setTimeout(() => {
      emailCopied.value = false
    }, 2500)
  }
}
</script>

<template>
  <section id="contact" class="py-20 md:py-28">
    <div class="max-w-4xl mx-auto px-6">
      <!-- Section Header -->
      <div class="mb-12 text-center max-w-2xl mx-auto">
        <div class="inline-flex items-center gap-2 text-emerald-600 dark:text-emerald-400 font-mono text-xs font-medium mb-3">
          <span>// {{ content.contact.sectionNumber }}</span>
          <span>·</span>
          <span>GET IN TOUCH</span>
        </div>
        <h2 class="text-3xl sm:text-4xl md:text-5xl font-serif font-normal text-gray-900 dark:text-white tracking-tight mb-4">
          {{ content.contact.title }}
        </h2>
        <p class="text-base text-gray-600 dark:text-gray-400 font-sans">
          {{ content.contact.subtitle }}
        </p>
      </div>

      <!-- Contact Direct Cards -->
      <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
        <!-- Email Copy Card -->
        <div class="p-6 rounded-xl border border-surface-light-border dark:border-surface-dark-border bg-white dark:bg-surface-dark-card flex flex-col justify-between">
          <div>
            <span class="text-xs font-mono text-gray-400 dark:text-gray-500 uppercase tracking-wider block mb-1">
              {{ content.contact.emailLabel }}
            </span>
            <a
              href="mailto:luizmatheuslins55@gmail.com"
              class="text-base sm:text-lg font-mono font-medium text-gray-900 dark:text-white hover:text-emerald-500 break-all"
            >
              luizmatheuslins55@gmail.com
            </a>
          </div>
          <button
            type="button"
            @click="copyEmailAddress"
            class="mt-4 inline-flex items-center gap-2 text-xs font-mono font-medium text-emerald-600 dark:text-emerald-400 hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 rounded py-1 self-start"
          >
            <svg class="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2m0 0h2a2 2 0 012 2v3m2 4H10m0 0l3-3m-3 3l3 3" />
            </svg>
            <span>{{ emailCopied ? content.contact.copied : content.contact.copyEmail }}</span>
          </button>
        </div>

        <!-- Direct Resume Download Card -->
        <div class="p-6 rounded-xl border border-surface-light-border dark:border-surface-dark-border bg-white dark:bg-surface-dark-card flex flex-col justify-between">
          <div>
            <span class="text-xs font-mono text-gray-400 dark:text-gray-500 uppercase tracking-wider block mb-1">
              {{ content.contact.cvLabel }}
            </span>
            <p class="text-base sm:text-lg font-serif text-gray-900 dark:text-white">
              Luiz Lins · Software Engineer
            </p>
          </div>
          <a
            :href="assetUrl('/Luiz-Lins-CV.pdf')"
            download="Luiz-Lins-CV.pdf"
            class="mt-4 inline-flex items-center gap-2 text-xs font-mono font-medium text-emerald-600 dark:text-emerald-400 hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 rounded py-1 self-start"
          >
            <svg class="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
            </svg>
            <span>Download (PDF)</span>
          </a>
        </div>
      </div>

      <!-- Social Links Row -->
      <div class="flex flex-wrap items-center justify-center gap-6 p-4 rounded-xl border border-surface-light-border dark:border-surface-dark-border bg-gray-50 dark:bg-surface-dark-card/50">
        <a
          href="https://www.linkedin.com/in/luiz-lins-13a850324/"
          target="_blank"
          rel="noopener noreferrer"
          class="inline-flex items-center gap-2 text-sm font-mono text-gray-700 dark:text-gray-300 hover:text-emerald-500 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 rounded px-2 py-1"
        >
          <span>LinkedIn</span>
          <svg class="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
          </svg>
        </a>

        <a
          href="https://github.com/LuizMatt"
          target="_blank"
          rel="noopener noreferrer"
          class="inline-flex items-center gap-2 text-sm font-mono text-gray-700 dark:text-gray-300 hover:text-emerald-500 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 rounded px-2 py-1"
        >
          <span>GitHub</span>
          <svg class="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
          </svg>
        </a>

        <a
          href="tel:+5583993409288"
          class="inline-flex items-center gap-2 text-sm font-mono text-gray-700 dark:text-gray-300 hover:text-emerald-500 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 rounded px-2 py-1"
        >
          <span>+55 83 99340-9288</span>
        </a>
      </div>

      <!-- Availability Footnote -->
      <p class="text-center text-xs font-mono text-gray-500 dark:text-gray-400 mt-6">
        {{ content.contact.availabilityNote }}
      </p>
    </div>
  </section>
</template>
