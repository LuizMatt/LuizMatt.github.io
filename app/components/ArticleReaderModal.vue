<script setup lang="ts">
import { ref, watch, onMounted, onUnmounted, nextTick } from 'vue'
import type { ArticleItem, ArticleImage } from '../content/types'

const props = defineProps<{
  article: ArticleItem | null
  isOpen: boolean
  closeAction: string
  backToArticles: string
  tapToZoomHint: string
}>()

const emit = defineEmits<{
  (e: 'close'): void
}>()

const scrollContainerRef = ref<HTMLElement | null>(null)
const readingProgress = ref(0)
const zoomedImage = ref<ArticleImage | null>(null)
const displayedArticle = ref<ArticleItem | null>(props.article)

watch(() => props.article, (newVal) => {
  if (newVal) {
    displayedArticle.value = newVal
  }
})

const handleScroll = () => {
  const el = scrollContainerRef.value
  if (!el) return
  const total = el.scrollHeight - el.clientHeight
  readingProgress.value = total > 0 ? Math.min(100, Math.max(0, (el.scrollTop / total) * 100)) : 0
}

const scrollToTop = () => {
  scrollContainerRef.value?.scrollTo({ top: 0, behavior: 'smooth' })
}

const openZoom = (image: ArticleImage) => {
  zoomedImage.value = image
}

const closeZoom = () => {
  zoomedImage.value = null
}

const handleKeydown = (e: KeyboardEvent) => {
  if (e.key === 'Escape') {
    if (zoomedImage.value) {
      closeZoom()
    } else if (props.isOpen) {
      emit('close')
    }
  }
}

watch(() => props.isOpen, (open) => {
  if (typeof document === 'undefined') return
  if (open) {
    document.body.style.overflow = 'hidden'
    nextTick(() => {
      if (scrollContainerRef.value) {
        scrollContainerRef.value.scrollTop = 0
      }
      readingProgress.value = 0
    })
  } else {
    document.body.style.overflow = ''
    zoomedImage.value = null
  }
})

onMounted(() => {
  window.addEventListener('keydown', handleKeydown)
})

onUnmounted(() => {
  window.removeEventListener('keydown', handleKeydown)
  if (typeof document !== 'undefined') {
    document.body.style.overflow = ''
  }
})
</script>

<template>
  <Transition
    enter-active-class="transition duration-300 ease-out"
    enter-from-class="opacity-0 scale-[0.99]"
    enter-to-class="opacity-100 scale-100"
    leave-active-class="transition duration-200 ease-in"
    leave-from-class="opacity-100 scale-100"
    leave-to-class="opacity-0 scale-[0.99]"
  >
    <div
      v-if="isOpen && displayedArticle"
      role="dialog"
      aria-modal="true"
      :aria-label="displayedArticle.title"
      class="fixed inset-0 z-50 flex flex-col bg-surface-light dark:bg-surface-dark text-gray-900 dark:text-gray-100"
    >
      <header class="relative z-20 flex-shrink-0 h-16 border-b border-surface-light-border dark:border-surface-dark-border bg-surface-light/95 dark:bg-surface-dark/95 backdrop-blur-md px-4 sm:px-8 flex items-center justify-between">
        <div class="absolute top-0 left-0 right-0 h-1 bg-surface-light-border/40 dark:border-surface-dark-border/40">
          <div
            class="h-full bg-emerald-500 transition-all duration-150 ease-out"
            :style="{ width: `${readingProgress}%` }"
          />
        </div>

        <div class="flex items-center gap-3 overflow-hidden pr-4">
          <button
            type="button"
            @click="emit('close')"
            class="group inline-flex items-center gap-2 text-xs font-mono font-medium text-gray-500 dark:text-gray-400 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 rounded py-1 px-1.5"
            :aria-label="backToArticles"
          >
            <svg class="w-4 h-4 transition-transform group-hover:-translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            <span class="hidden sm:inline">{{ backToArticles }}</span>
          </button>

          <span class="text-gray-300 dark:text-gray-700 hidden sm:inline">/</span>

          <span class="text-xs font-mono text-gray-600 dark:text-gray-400 truncate max-w-[200px] sm:max-w-md">
            {{ displayedArticle.title }}
          </span>
        </div>

        <div class="flex items-center gap-3">
          <span class="hidden md:inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-mono font-medium bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20">
            <svg class="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            {{ displayedArticle.readTime }}
          </span>

          <button
            type="button"
            @click="emit('close')"
            class="min-w-[44px] min-h-[44px] rounded-full border border-surface-light-border dark:border-surface-dark-border bg-white dark:bg-surface-dark-card flex items-center justify-center text-gray-700 dark:text-gray-200 hover:text-emerald-600 dark:hover:text-emerald-400 hover:border-emerald-500/50 shadow-sm transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 cursor-pointer"
            :aria-label="closeAction"
            title="Fechar (Esc)"
          >
            <svg class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
      </header>

      <div
        ref="scrollContainerRef"
        @scroll="handleScroll"
        class="flex-1 overflow-y-auto overflow-x-hidden scroll-smooth px-4 sm:px-6 md:px-8 py-8 sm:py-14"
      >
        <article class="max-w-3xl mx-auto space-y-10 sm:space-y-12">
          <div class="space-y-4 border-b border-surface-light-border dark:border-surface-dark-border pb-8 sm:pb-10">
            <div class="flex flex-wrap items-center gap-2.5 sm:gap-3 text-xs font-mono">
              <span class="inline-flex items-center px-2.5 py-0.5 rounded-full font-medium bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20">
                {{ displayedArticle.category }}
              </span>
              <span class="text-gray-400 dark:text-gray-600">·</span>
              <span class="text-gray-500 dark:text-gray-400">{{ displayedArticle.date }}</span>
              <span class="text-gray-400 dark:text-gray-600">·</span>
              <span class="text-gray-500 dark:text-gray-400">{{ displayedArticle.readTime }}</span>
            </div>

            <h1 class="text-3xl sm:text-4xl md:text-5xl font-serif font-medium tracking-tight text-gray-900 dark:text-white leading-[1.15]">
              {{ displayedArticle.title }}
            </h1>

            <p class="text-base sm:text-lg text-gray-600 dark:text-gray-300 font-sans leading-relaxed">
              {{ displayedArticle.subtitle }}
            </p>

            <div class="flex flex-wrap gap-2 pt-2">
              <span
                v-for="tag in displayedArticle.tags"
                :key="tag"
                class="px-2.5 py-1 text-xs font-mono rounded bg-gray-100 dark:bg-gray-800/80 text-gray-600 dark:text-gray-300 border border-surface-light-border dark:border-surface-dark-border"
              >
                #{{ tag }}
              </span>
            </div>
          </div>

          <div class="space-y-10 sm:space-y-12 text-gray-700 dark:text-gray-200">
            <section
              v-for="section in displayedArticle.sections"
              :key="section.id"
              class="space-y-5"
            >
              <h2
                v-if="section.title"
                class="text-2xl sm:text-3xl font-serif font-medium text-gray-900 dark:text-white tracking-tight pt-4 border-t border-surface-light-border/40 dark:border-surface-dark-border/40 flex items-center gap-2"
              >
                <span class="text-emerald-500 dark:text-emerald-400 font-mono text-lg font-normal">##</span>
                <span>{{ section.title }}</span>
              </h2>

              <p
                v-for="(para, pIdx) in section.paragraphs"
                :key="pIdx"
                class="text-base sm:text-lg leading-relaxed text-gray-700 dark:text-gray-300 font-sans"
              >
                {{ para }}
              </p>

              <div
                v-if="section.image"
                class="my-6 rounded-xl border border-surface-light-border dark:border-surface-dark-border bg-white dark:bg-surface-dark-card p-3 sm:p-5 shadow-sm transition-all hover:border-emerald-500/40 group cursor-pointer"
                @click="openZoom(section.image)"
              >
                <div class="relative overflow-hidden rounded-lg bg-white p-2 sm:p-4 flex items-center justify-center">
                  <img
                    :src="section.image.src"
                    :alt="section.image.alt"
                    loading="lazy"
                    class="w-full max-h-[460px] object-contain transition-transform duration-300 group-hover:scale-[1.02]"
                  />

                  <div class="absolute bottom-3 right-3 inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-mono font-medium bg-gray-900/80 text-white backdrop-blur-sm shadow-md group-hover:bg-emerald-600 transition-colors">
                    <svg class="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v6m3-3H7" />
                    </svg>
                    <span>{{ tapToZoomHint }}</span>
                  </div>
                </div>

                <p class="mt-3 text-xs sm:text-sm text-center font-mono text-gray-500 dark:text-gray-400">
                  <span class="text-emerald-600 dark:text-emerald-400 font-semibold">Diagrama:</span> {{ section.image.caption }}
                </p>
              </div>

              <div
                v-if="section.points && section.points.length > 0"
                class="space-y-3 pt-2"
              >
                <div
                  v-for="(point, ptIdx) in section.points"
                  :key="ptIdx"
                  class="rounded-lg border border-surface-light-border dark:border-surface-dark-border bg-gray-50/60 dark:bg-surface-dark-card/60 p-4 sm:p-5 flex items-start gap-3.5 transition-colors hover:border-emerald-500/30"
                >
                  <span class="flex-shrink-0 inline-flex items-center justify-center w-6 h-6 rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 font-mono text-xs font-bold mt-0.5">
                    {{ ptIdx + 1 }}
                  </span>

                  <div class="space-y-1 text-sm sm:text-base leading-relaxed">
                    <strong class="font-semibold text-gray-900 dark:text-white font-sans block sm:inline sm:mr-1">
                      {{ point.label }}:
                    </strong>
                    <span class="text-gray-700 dark:text-gray-300 font-sans">
                      {{ point.text }}
                    </span>
                  </div>
                </div>
              </div>
            </section>
          </div>

          <footer class="pt-10 border-t border-surface-light-border dark:border-surface-dark-border flex flex-col sm:flex-row items-center justify-between gap-4">
            <button
              type="button"
              @click="scrollToTop"
              class="inline-flex items-center gap-2 text-sm font-mono font-medium text-gray-600 dark:text-gray-300 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 rounded py-1 px-2"
            >
              <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 10l7-7m0 0l7 7m-7-7v18" />
              </svg>
              <span>Voltar ao topo</span>
            </button>

            <button
              type="button"
              @click="emit('close')"
              class="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-lg border border-surface-light-border dark:border-surface-dark-border bg-white dark:bg-surface-dark-card text-sm font-medium text-gray-900 dark:text-gray-100 hover:border-emerald-500/50 hover:text-emerald-600 dark:hover:text-emerald-400 shadow-sm transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500"
            >
              <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
              <span>{{ closeAction }}</span>
            </button>
          </footer>
        </article>
      </div>

      <Transition
        enter-active-class="transition duration-200 ease-out"
        enter-from-class="opacity-0"
        enter-to-class="opacity-100"
        leave-active-class="transition duration-150 ease-in"
        leave-from-class="opacity-100"
        leave-to-class="opacity-0"
      >
        <div
          v-if="zoomedImage"
          class="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-3 sm:p-6"
          @click.self="closeZoom"
        >
          <button
            type="button"
            @click="closeZoom"
            class="absolute top-4 right-4 z-50 min-w-[44px] min-h-[44px] rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400 cursor-pointer"
            aria-label="Fechar zoom"
          >
            <svg class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          <div class="max-w-5xl max-h-[90vh] flex flex-col items-center justify-center gap-3">
            <div class="bg-white rounded-lg p-2 sm:p-4 shadow-2xl overflow-auto max-h-[80vh]">
              <img
                :src="zoomedImage.src"
                :alt="zoomedImage.alt"
                class="w-full h-auto max-h-[75vh] object-contain"
              />
            </div>
            <p class="text-sm font-mono text-gray-300 text-center max-w-xl">
              {{ zoomedImage.caption }}
            </p>
          </div>
        </div>
      </Transition>
    </div>
  </Transition>
</template>
