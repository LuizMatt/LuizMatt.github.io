<script setup lang="ts">
import { useLocale } from '../composables/useLocale'

const { content } = useLocale()
</script>

<template>
  <section class="pt-20 pb-16 md:pt-32 md:pb-24 border-b border-surface-light-border dark:border-surface-dark-border">
    <div class="max-w-4xl mx-auto px-6">
      <!-- Status Badge & Location -->
      <div class="flex flex-wrap items-center gap-3 mb-6">
        <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-600 dark:text-emerald-400 text-xs font-mono font-medium">
          <span class="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" aria-hidden="true"></span>
          {{ content.hero.status }}
        </div>
        <span class="text-xs font-mono text-gray-500 dark:text-gray-400">
          {{ content.hero.location }}
        </span>
      </div>

      <!-- Main Headline: Name in Editorial Serif -->
      <h1 class="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-serif font-normal tracking-tight text-gray-900 dark:text-white leading-[1.08] mb-6">
        {{ content.hero.name }}
      </h1>

      <!-- Role Subtitle -->
      <p class="text-lg md:text-xl font-mono text-emerald-600 dark:text-emerald-400 font-medium mb-6">
        {{ content.hero.role }}
      </p>

      <!-- Positioning Statement -->
      <p class="text-base sm:text-lg md:text-xl text-gray-600 dark:text-gray-300 font-sans leading-relaxed max-w-3xl mb-10">
        {{ content.hero.positioning }}
      </p>

      <!-- CTAs -->
      <div class="flex flex-wrap items-center gap-4">
        <a
          href="#projects"
          class="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-emerald-600 hover:bg-emerald-700 text-white dark:bg-emerald-500 dark:hover:bg-emerald-400 dark:text-zinc-950 font-medium text-sm transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400 shadow-sm"
        >
          <span>{{ content.hero.ctaProjects }}</span>
          <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </a>

        <a
          href="#contact"
          class="inline-flex items-center gap-2 px-6 py-3 rounded-lg border border-surface-light-border dark:border-surface-dark-border text-gray-800 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-surface-dark-card font-medium text-sm transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500"
        >
          {{ content.hero.ctaContact }}
        </a>

        <a
          href="/Luiz-Lins-CV.pdf"
          download="Luiz-Matheus-Lins-CV.pdf"
          class="inline-flex items-center gap-2 px-4 py-3 text-gray-600 dark:text-gray-400 hover:text-emerald-600 dark:hover:text-emerald-400 text-sm font-mono transition-colors"
        >
          <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
          </svg>
          <span>{{ content.hero.downloadCv }}</span>
        </a>
      </div>
    </div>
  </section>
</template>
