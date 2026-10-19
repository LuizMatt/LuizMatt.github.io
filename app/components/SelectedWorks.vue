<script setup lang="ts">
import { ref, onMounted, onUnmounted, nextTick } from 'vue'
import { useLocale } from '../composables/useLocale'
import ProjectCard from './ProjectCard.vue'

const { content } = useLocale()

const carouselRef = ref<HTMLElement | null>(null)
const currentIndex = ref(0)
const canScrollPrev = ref(false)
const canScrollNext = ref(true)

const updateScrollState = () => {
  const el = carouselRef.value
  if (!el) return

  const scrollLeft = el.scrollLeft
  const maxScrollLeft = el.scrollWidth - el.clientWidth
  const tolerance = 20

  canScrollPrev.value = scrollLeft > tolerance
  canScrollNext.value = scrollLeft < maxScrollLeft - tolerance

  const children = Array.from(el.children) as HTMLElement[]
  if (children.length === 0) return

  let closestIndex = 0
  let minDistance = Infinity

  children.forEach((child, index) => {
    const childLeft = child.offsetLeft - el.offsetLeft
    const distance = Math.abs(childLeft - scrollLeft)
    if (distance < minDistance) {
      minDistance = distance
      closestIndex = index
    }
  })

  currentIndex.value = closestIndex
}

const scrollToIndex = (index: number) => {
  const el = carouselRef.value
  if (!el) return

  const children = Array.from(el.children) as HTMLElement[]
  if (children[index]) {
    const child = children[index]
    const targetLeft = child.offsetLeft - el.offsetLeft
    el.scrollTo({
      left: targetLeft,
      behavior: 'smooth'
    })
  }
}

const scrollPrev = () => {
  if (currentIndex.value > 0) {
    scrollToIndex(currentIndex.value - 1)
  }
}

const scrollNext = () => {
  const total = content.value.works.projects.length
  if (currentIndex.value < total - 1) {
    scrollToIndex(currentIndex.value + 1)
  }
}

let ticking = false
const handleScroll = () => {
  if (!ticking) {
    window.requestAnimationFrame(() => {
      updateScrollState()
      ticking = false
    })
    ticking = true
  }
}

onMounted(() => {
  nextTick(() => {
    updateScrollState()
    window.addEventListener('resize', updateScrollState)
  })
})

onUnmounted(() => {
  window.removeEventListener('resize', updateScrollState)
})
</script>

<template>
  <section id="projects" class="py-16 sm:py-20 md:py-28 border-b border-surface-light-border dark:border-surface-dark-border overflow-hidden">
    <div class="max-w-6xl mx-auto px-4 sm:px-6">
      <!-- Section Header with Desktop Navigation Controls -->
      <div class="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-8 md:mb-10">
        <div class="max-w-2xl">
          <div class="flex items-center gap-2 text-emerald-600 dark:text-emerald-400 font-mono text-xs font-medium mb-3">
            <span>// {{ content.works.sectionNumber }}</span>
            <span>·</span>
            <span>CASE STUDIES</span>
          </div>
          <h2 class="text-3xl sm:text-4xl md:text-5xl font-serif font-normal text-gray-900 dark:text-white tracking-tight mb-3 md:mb-4">
            {{ content.works.title }}
          </h2>
          <p class="text-sm sm:text-base text-gray-600 dark:text-gray-400 font-sans leading-relaxed">
            {{ content.works.subtitle }}
          </p>
        </div>

        <!-- Desktop Carousel Navigation Controls (Header) -->
        <div class="hidden md:flex items-center gap-3 shrink-0">
          <button
            type="button"
            @click="scrollPrev"
            :disabled="!canScrollPrev"
            class="w-11 h-11 rounded-full border border-surface-light-border dark:border-surface-dark-border bg-white dark:bg-surface-dark-card flex items-center justify-center text-gray-700 dark:text-gray-200 transition-all hover:border-emerald-500/50 hover:text-emerald-500 dark:hover:text-emerald-400 disabled:opacity-30 disabled:cursor-not-allowed disabled:hover:border-surface-light-border dark:disabled:hover:border-surface-dark-border disabled:hover:text-inherit shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 cursor-pointer"
            :aria-label="content.nav?.langToggleAria === 'Mudar para Inglês' ? 'Projeto anterior' : 'Previous project'"
          >
            <svg class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button
            type="button"
            @click="scrollNext"
            :disabled="!canScrollNext"
            class="w-11 h-11 rounded-full border border-surface-light-border dark:border-surface-dark-border bg-white dark:bg-surface-dark-card flex items-center justify-center text-gray-700 dark:text-gray-200 transition-all hover:border-emerald-500/50 hover:text-emerald-500 dark:hover:text-emerald-400 disabled:opacity-30 disabled:cursor-not-allowed disabled:hover:border-surface-light-border dark:disabled:hover:border-surface-dark-border disabled:hover:text-inherit shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 cursor-pointer"
            :aria-label="content.nav?.langToggleAria === 'Mudar para Inglês' ? 'Próximo projeto' : 'Next project'"
          >
            <svg class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>

      <!-- Horizontal Carousel Track (100% width per slide, no cut-offs) -->
      <div
        ref="carouselRef"
        @scroll="handleScroll"
        role="region"
        aria-roledescription="carousel"
        aria-label="Projetos em produção"
        class="flex gap-8 overflow-x-auto snap-x snap-mandatory scroll-smooth pb-2 pt-1 px-0.5 [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden"
      >
        <div
          v-for="(project, index) in content.works.projects"
          :key="project.id"
          class="w-full min-w-full flex-shrink-0 snap-start"
          role="group"
          :aria-roledescription="'slide'"
          :aria-label="`${index + 1} de ${content.works.projects.length}: ${project.title}`"
        >
          <ProjectCard
            :project="project"
            :problem-label="content.works.problemLabel"
            :solution-label="content.works.solutionLabel"
            :visit-live="content.works.visitLive"
          />
        </div>
      </div>

      <!-- Footer Navigation: Indicator Dots, Counter, and Mobile Nav Controls -->
      <div class="flex items-center justify-between mt-6 sm:mt-8 pt-4 border-t border-surface-light-border/40 dark:border-surface-dark-border/40">
        <!-- Indicator Dots -->
        <div class="flex items-center gap-2" role="tablist" aria-label="Slides do projeto">
          <button
            v-for="(project, index) in content.works.projects"
            :key="project.id"
            type="button"
            role="tab"
            :aria-selected="currentIndex === index"
            :aria-label="`Ir para ${project.title}`"
            @click="scrollToIndex(index)"
            class="h-2 rounded-full transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 cursor-pointer"
            :class="currentIndex === index ? 'w-8 bg-emerald-500' : 'w-2 bg-gray-300 dark:bg-gray-700 hover:bg-gray-400 dark:hover:bg-gray-600'"
          />
        </div>

        <!-- Right Side: Counter & Navigation Buttons (Especially accessible on mobile) -->
        <div class="flex items-center gap-4">
          <!-- Counter (e.g. 01 / 02) -->
          <div class="font-mono text-xs text-gray-500 dark:text-gray-400">
            <span class="text-emerald-500 dark:text-emerald-400 font-bold">
              {{ String(currentIndex + 1).padStart(2, '0') }}
            </span>
            <span class="mx-1">/</span>
            <span>{{ String(content.works.projects.length).padStart(2, '0') }}</span>
          </div>

          <!-- Bottom Navigation Arrows (Mobile-first, also handy on desktop) -->
          <div class="flex items-center gap-2">
            <button
              type="button"
              @click="scrollPrev"
              :disabled="!canScrollPrev"
              class="w-9 h-9 sm:w-10 sm:h-10 rounded-full border border-surface-light-border dark:border-surface-dark-border bg-white dark:bg-surface-dark-card flex items-center justify-center text-gray-700 dark:text-gray-200 transition-all hover:border-emerald-500/50 hover:text-emerald-500 dark:hover:text-emerald-400 disabled:opacity-30 disabled:cursor-not-allowed disabled:hover:border-surface-light-border dark:disabled:hover:border-surface-dark-border disabled:hover:text-inherit shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 cursor-pointer"
              :aria-label="content.nav?.langToggleAria === 'Mudar para Inglês' ? 'Projeto anterior' : 'Previous project'"
            >
              <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button
              type="button"
              @click="scrollNext"
              :disabled="!canScrollNext"
              class="w-9 h-9 sm:w-10 sm:h-10 rounded-full border border-surface-light-border dark:border-surface-dark-border bg-white dark:bg-surface-dark-card flex items-center justify-center text-gray-700 dark:text-gray-200 transition-all hover:border-emerald-500/50 hover:text-emerald-500 dark:hover:text-emerald-400 disabled:opacity-30 disabled:cursor-not-allowed disabled:hover:border-surface-light-border dark:disabled:hover:border-surface-dark-border disabled:hover:text-inherit shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 cursor-pointer"
              :aria-label="content.nav?.langToggleAria === 'Mudar para Inglês' ? 'Próximo projeto' : 'Next project'"
            >
              <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
