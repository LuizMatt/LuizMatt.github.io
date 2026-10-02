<script setup lang="ts">
import { useLocale } from '../composables/useLocale'

const { content } = useLocale()
</script>

<template>
  <section id="principles" class="py-20 md:py-28 border-b border-surface-light-border dark:border-surface-dark-border">
    <div class="max-w-6xl mx-auto px-6">
      <!-- Section Header -->
      <div class="mb-12 max-w-2xl">
        <div class="flex items-center gap-2 text-emerald-600 dark:text-emerald-400 font-mono text-xs font-medium mb-3">
          <span>// {{ content.principles.sectionNumber }}</span>
          <span>·</span>
          <span>ENGINEERING APPROACH</span>
        </div>
        <h2 class="text-3xl sm:text-4xl md:text-5xl font-serif font-normal text-gray-900 dark:text-white tracking-tight mb-4">
          {{ content.principles.title }}
        </h2>
        <p class="text-base text-gray-600 dark:text-gray-400 font-sans">
          {{ content.principles.subtitle }}
        </p>
      </div>

      <!-- 3 Principles Grid -->
      <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
        <div
          v-for="item in content.principles.items"
          :key="item.number"
          class="p-6 md:p-8 rounded-xl border border-surface-light-border dark:border-surface-dark-border bg-white dark:bg-surface-dark-card flex flex-col justify-between"
        >
          <div>
            <span class="text-2xl font-mono font-bold text-emerald-600 dark:text-emerald-400 block mb-4">
              {{ item.number }}
            </span>
            <h3 class="text-xl font-serif font-medium text-gray-900 dark:text-white mb-3">
              {{ item.title }}
            </h3>
            <p class="text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
              {{ item.description }}
            </p>
          </div>
        </div>
      </div>

      <!-- Tech Stack & Languages Grid -->
      <div class="p-6 md:p-8 rounded-2xl border border-surface-light-border dark:border-surface-dark-border bg-white/50 dark:bg-surface-dark-card/50">
        <h3 class="text-xl font-serif font-medium text-gray-900 dark:text-white mb-6">
          {{ content.principles.skillsTitle }}
        </h3>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div v-for="cat in content.principles.skills" :key="cat.category">
            <h4 class="text-xs font-mono uppercase tracking-wider text-gray-400 dark:text-gray-500 mb-3">
              {{ cat.category }}
            </h4>
            <div class="flex flex-wrap gap-2">
              <span
                v-for="skill in cat.skills"
                :key="skill"
                class="px-3 py-1 text-xs font-mono rounded bg-gray-100 dark:bg-surface-dark text-gray-800 dark:text-gray-200 border border-surface-light-border dark:border-surface-dark-border"
              >
                {{ skill }}
              </span>
            </div>
          </div>
        </div>

        <!-- Languages row -->
        <div class="pt-6 border-t border-surface-light-border dark:border-surface-dark-border flex flex-wrap items-center gap-6">
          <span class="text-xs font-mono uppercase tracking-wider text-gray-400 dark:text-gray-500">
            {{ content.principles.languagesTitle }}:
          </span>
          <div class="flex flex-wrap gap-4">
            <span
              v-for="lang in content.principles.languages"
              :key="lang.name"
              class="text-xs font-mono text-gray-700 dark:text-gray-300"
            >
              <strong class="text-gray-900 dark:text-white">{{ lang.name }}</strong> ({{ lang.level }})
            </span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
