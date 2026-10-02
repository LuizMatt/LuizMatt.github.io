<script setup lang="ts">
import type { ProjectItem } from '../content/types'

defineProps<{
  project: ProjectItem
  problemLabel: string
  solutionLabel: string
  resultLabel: string
  visitLive: string
}>()
</script>

<template>
  <article class="rounded-2xl border border-surface-light-border dark:border-surface-dark-border bg-white dark:bg-surface-dark-card p-6 md:p-8 transition-all hover:border-emerald-500/40 dark:hover:border-emerald-500/40 shadow-sm">
    <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
      <!-- Left / Top: Mockup Visual -->
      <div class="lg:col-span-7">
        <a
          :href="project.liveUrl"
          target="_blank"
          rel="noopener noreferrer"
          class="group block relative overflow-hidden rounded-xl border border-surface-light-border dark:border-surface-dark-border bg-gray-950 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500"
          :aria-label="`${visitLive} - ${project.title}`"
        >
          <img
            :src="project.previewImage"
            :alt="`Interface e métricas de ${project.title}`"
            loading="lazy"
            class="w-full h-auto object-cover transition-transform duration-300 group-hover:scale-[1.01]"
          />
          <div class="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
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
      <div class="lg:col-span-5 flex flex-col justify-between h-full space-y-6">
        <div>
          <!-- Meta Header -->
          <div class="flex items-center justify-between gap-3 mb-2">
            <span class="text-xs font-mono text-gray-500 dark:text-gray-400 uppercase tracking-wider">
              {{ project.category }} · {{ project.year }}
            </span>
            <span class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-mono font-medium bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20">
              {{ project.metric }}
            </span>
          </div>

          <h3 class="text-2xl sm:text-3xl font-serif font-normal text-gray-900 dark:text-white mb-2">
            {{ project.title }}
          </h3>

          <p class="text-xs font-mono text-emerald-600 dark:text-emerald-400 mb-4">
            {{ project.role }}
          </p>

          <!-- Problem / Solution / Result Flow -->
          <div class="space-y-3 text-sm text-gray-600 dark:text-gray-300">
            <div>
              <span class="font-mono text-xs font-semibold uppercase tracking-wider text-gray-400 dark:text-gray-500 block mb-0.5">
                {{ problemLabel }}
              </span>
              <p class="leading-relaxed">{{ project.problem }}</p>
            </div>

            <div>
              <span class="font-mono text-xs font-semibold uppercase tracking-wider text-gray-400 dark:text-gray-500 block mb-0.5">
                {{ solutionLabel }}
              </span>
              <p class="leading-relaxed">{{ project.solution }}</p>
            </div>

            <div class="p-3 rounded-lg bg-emerald-500/5 dark:bg-emerald-500/10 border border-emerald-500/15">
              <span class="font-mono text-xs font-semibold uppercase tracking-wider text-emerald-600 dark:text-emerald-400 block mb-0.5">
                {{ resultLabel }}
              </span>
              <p class="text-gray-700 dark:text-gray-200 leading-relaxed">{{ project.result }}</p>
            </div>
          </div>
        </div>

        <!-- Tags & Live Link -->
        <div>
          <div class="flex flex-wrap gap-1.5 mb-5">
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
            class="inline-flex items-center gap-2 text-sm font-mono font-medium text-emerald-600 dark:text-emerald-400 hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 rounded py-1"
          >
            <span>{{ visitLive }} ({{ project.liveUrl.replace('https://', '') }})</span>
            <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
          </a>
        </div>
      </div>
    </div>
  </article>
</template>
