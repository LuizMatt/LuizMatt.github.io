<script setup lang="ts">
import { useLocale } from '../composables/useLocale'
import ProjectCard from './ProjectCard.vue'

const { content } = useLocale()
</script>

<template>
  <section id="projects" class="py-20 md:py-28 border-b border-surface-light-border dark:border-surface-dark-border">
    <div class="max-w-6xl mx-auto px-6">
      <!-- Section Header -->
      <div class="mb-12 max-w-2xl">
        <div class="flex items-center gap-2 text-emerald-600 dark:text-emerald-400 font-mono text-xs font-medium mb-3">
          <span>// {{ content.works.sectionNumber }}</span>
          <span>·</span>
          <span>CASE STUDIES</span>
        </div>
        <h2 class="text-3xl sm:text-4xl md:text-5xl font-serif font-normal text-gray-900 dark:text-white tracking-tight mb-4">
          {{ content.works.title }}
        </h2>
        <p class="text-base text-gray-600 dark:text-gray-400 font-sans">
          {{ content.works.subtitle }}
        </p>
      </div>

      <!-- Project Cards List -->
      <div class="space-y-12">
        <ProjectCard
          v-for="project in content.works.projects"
          :key="project.id"
          :project="project"
          :problem-label="content.works.problemLabel"
          :solution-label="content.works.solutionLabel"
          :visit-live="content.works.visitLive"
        />
      </div>
    </div>
  </section>
</template>
