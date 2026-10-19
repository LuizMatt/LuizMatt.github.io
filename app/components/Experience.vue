<script setup lang="ts">
import { useLocale } from '../composables/useLocale'

const { content } = useLocale()
</script>

<template>
  <section id="experience" class="py-20 md:py-28 border-b border-surface-light-border dark:border-surface-dark-border">
    <div class="max-w-4xl mx-auto px-6">
      <!-- Section Header -->
      <div class="mb-12">
        <div class="flex items-center gap-2 text-emerald-600 dark:text-emerald-400 font-mono text-xs font-medium mb-3">
          <span>// {{ content.experience.sectionNumber }}</span>
          <span>·</span>
          <span>CAREER & ACADEMICS</span>
        </div>
        <h2 class="text-3xl sm:text-4xl md:text-5xl font-serif font-normal text-gray-900 dark:text-white tracking-tight mb-4">
          {{ content.experience.title }}
        </h2>
        <p class="text-base text-gray-600 dark:text-gray-400 font-sans">
          {{ content.experience.subtitle }}
        </p>
      </div>

      <!-- Corporate Experience -->
      <div class="mb-16">
        <div class="space-y-8">
          <div
            v-for="job in content.experience.jobs"
            :key="job.company"
            class="relative pl-6 md:pl-8 border-l-2 border-emerald-500/40 dark:border-emerald-500/30 space-y-3"
          >
            <span class="absolute -left-[9px] top-1 w-4 h-4 rounded-full bg-emerald-500 border-4 border-surface-light dark:border-surface-dark"></span>

            <div class="flex flex-wrap items-baseline justify-between gap-2">
              <h3 class="text-xl sm:text-2xl font-serif font-medium text-gray-900 dark:text-white">
                {{ job.company }}
              </h3>
              <span class="font-mono text-xs text-emerald-600 dark:text-emerald-400 font-medium">
                {{ job.period }}
              </span>
            </div>

            <p class="text-sm font-mono text-gray-600 dark:text-gray-300">
              {{ job.role }} · <span class="text-gray-400">{{ job.location }}</span>
            </p>

            <ul class="space-y-2 pt-2 text-sm text-gray-600 dark:text-gray-300">
              <li v-for="(item, idx) in job.description" :key="idx" class="flex items-start gap-2.5">
                <span class="text-emerald-500 mt-1">▸</span>
                <span class="leading-relaxed">{{ item }}</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <!-- Education Section -->
      <div>
        <h3 class="text-xl font-serif font-medium text-gray-900 dark:text-white mb-6">
          {{ content.experience.educationTitle }}
        </h3>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div
            v-for="edu in content.experience.education"
            :key="edu.institution"
            class="p-5 rounded-xl border border-surface-light-border dark:border-surface-dark-border bg-white dark:bg-surface-dark-card"
          >
            <p class="text-xs font-mono text-emerald-600 dark:text-emerald-400 mb-1">
              {{ edu.period }}
            </p>
            <h4 class="text-base font-serif font-medium text-gray-900 dark:text-white mb-1">
              {{ edu.degree }}
            </h4>
            <p class="text-xs text-gray-500 dark:text-gray-400">
              {{ edu.institution }} · {{ edu.location }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
