<script setup lang="ts">
import type { ProjectItem } from '../content/types'

defineProps<{
  project: ProjectItem
  problemLabel: string
  solutionLabel: string
  visitLive: string
}>()
</script>

<template>
  <article class="h-full rounded-2xl border border-surface-light-border dark:border-surface-dark-border bg-white dark:bg-surface-dark-card p-5 sm:p-7 md:p-8 transition-all hover:border-emerald-500/40 dark:hover:border-emerald-500/40 shadow-sm">
    <div class="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10 items-center h-full">
      <!-- Left / Top: Mockup Visual -->
      <div class="lg:col-span-6">
        <a
          :href="project.liveUrl"
          target="_blank"
          rel="noopener noreferrer"
          class="group block relative overflow-hidden rounded-xl border border-surface-light-border dark:border-surface-dark-border bg-gray-950/40 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500"
          :aria-label="`${visitLive} - ${project.title}`"
        >
          <img
            :src="project.previewImage"
            :alt="`Interface de ${project.title}`"
            loading="lazy"
            class="w-full aspect-[16/10] sm:aspect-auto object-cover object-top transition-transform duration-300 group-hover:scale-[1.01]"
          />
          <div class="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
            <span class="inline-flex items-center gap-1.5 text-xs font-mono text-emerald-400 bg-black/80 px-3 py-1 rounded">
              {{ visitLive }}
              <svg class="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </span>
          </div>
        </a>
      </div>

      <!-- Right / Bottom: Technical Breakdown -->
      <div class="lg:col-span-6 flex flex-col justify-between h-full">
        <div>
          <!-- Meta Header -->
          <div class="mb-1">
            <span class="text-xs font-mono text-gray-500 dark:text-gray-400">
              {{ project.category }}, {{ project.year }}
            </span>
          </div>

          <!-- Project Title & Subtitle -->
          <h3 class="text-2xl sm:text-3xl font-serif font-normal text-gray-900 dark:text-white mb-1">
            {{ project.title }}
          </h3>

          <p class="text-sm text-gray-600 dark:text-gray-400 font-sans mb-4 sm:mb-5">
            {{ project.role }}
          </p>

          <!-- Problem & Solution Flow -->
          <div class="space-y-3 mb-5 text-sm text-gray-700 dark:text-gray-300">
            <div>
              <span class="text-xs font-medium text-gray-400 dark:text-gray-500 block mb-0.5">
                {{ problemLabel }}
              </span>
              <p class="leading-relaxed">{{ project.problem }}</p>
            </div>

            <div>
              <span class="text-xs font-medium text-gray-400 dark:text-gray-500 block mb-0.5">
                {{ solutionLabel }}
              </span>
              <p class="leading-relaxed">{{ project.solution }}</p>
            </div>
          </div>

          <!-- Prominent Metric Callout -->
          <div class="flex items-center gap-3 sm:gap-4 pt-3 pb-3 mb-4 sm:mb-5 border-t border-surface-light-border/60 dark:border-surface-dark-border/60">
            <span class="text-3xl sm:text-5xl font-mono font-bold text-emerald-500 dark:text-emerald-400 tracking-tight leading-none">
              {{ project.metric.value }}
            </span>
            <div class="text-xs leading-snug">
              <span class="font-medium text-gray-800 dark:text-gray-200 block">
                {{ project.metric.label }}
              </span>
              <span v-if="project.metric.detail" class="text-gray-500 dark:text-gray-400 block mt-0.5">
                {{ project.metric.detail }}
              </span>
            </div>
          </div>
        </div>

        <!-- Tags & Live Link -->
        <div>
          <div class="flex flex-wrap gap-1.5 mb-4 sm:mb-5">
            <span
              v-for="tag in project.tags"
              :key="tag"
              class="px-2.5 py-1 text-xs font-mono rounded bg-gray-100 dark:bg-surface-dark text-gray-700 dark:text-gray-300 border border-surface-light-border dark:border-surface-dark-border"
            >
              {{ tag }}
            </span>
          </div>

          <a
            :href="project.liveUrl"
            target="_blank"
            rel="noopener noreferrer"
            class="inline-flex items-center gap-1.5 text-sm font-mono font-medium text-emerald-600 dark:text-emerald-400 hover:text-emerald-500 dark:hover:text-emerald-300 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 rounded py-0.5"
          >
            <span>{{ visitLive }}</span>
            <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
          </a>
        </div>
      </div>
    </div>
  </article>
</template>
