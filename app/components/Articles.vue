<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import { useLocale } from '../composables/useLocale'
import type { ArticleItem } from '../content/types'
import ArticleReaderModal from './ArticleReaderModal.vue'

const { content, locale } = useLocale()

const selectedArticle = ref<ArticleItem | null>(null)
let isHistoryPushed = false

const openArticle = (article: ArticleItem) => {
  selectedArticle.value = article
  if (typeof window !== 'undefined') {
    window.history.pushState({ articleModal: true, id: article.id }, '', `#article-${article.id}`)
    isHistoryPushed = true
  }
}

const closeArticle = () => {
  if (!selectedArticle.value) return
  selectedArticle.value = null
  if (typeof window !== 'undefined' && isHistoryPushed) {
    isHistoryPushed = false
    if (window.location.hash.startsWith('#article-')) {
      window.history.back()
    }
  }
}

const handlePopState = () => {
  if (selectedArticle.value) {
    selectedArticle.value = null
    isHistoryPushed = false
  }
}

onMounted(() => {
  window.addEventListener('popstate', handlePopState)
  if (typeof window !== 'undefined' && window.location.hash.startsWith('#article-')) {
    const articleId = window.location.hash.replace('#article-', '')
    const matched = content.value.articles?.items?.find(item => item.id === articleId)
    if (matched) {
      selectedArticle.value = matched
      isHistoryPushed = true
    }
  }
})

onUnmounted(() => {
  if (typeof window !== 'undefined') {
    window.removeEventListener('popstate', handlePopState)
  }
})
</script>

<template>
  <section id="articles" class="py-20 md:py-28 border-b border-surface-light-border dark:border-surface-dark-border">
    <div class="max-w-4xl mx-auto px-6">
      <div class="mb-12">
        <div class="flex items-center gap-2 text-emerald-600 dark:text-emerald-400 font-mono text-xs font-medium mb-3">
          <span>// {{ content.articles?.sectionNumber || '02' }}</span>
          <span>·</span>
          <span>{{ locale === 'pt' ? 'ARTIGOS TÉCNICOS' : 'TECHNICAL WRITING' }}</span>
        </div>
        <h2 class="text-3xl sm:text-4xl md:text-5xl font-serif font-normal text-gray-900 dark:text-white tracking-tight mb-4">
          {{ content.articles?.title }}
        </h2>
        <p class="text-base text-gray-600 dark:text-gray-400 font-sans max-w-2xl">
          {{ content.articles?.subtitle }}
        </p>
      </div>

      <div class="space-y-8">
        <div
          v-for="article in content.articles?.items"
          :key="article.id"
          @click="openArticle(article)"
          class="group relative rounded-2xl border border-surface-light-border dark:border-surface-dark-border bg-white dark:bg-surface-dark-card p-6 sm:p-8 md:p-10 shadow-sm transition-all duration-300 hover:border-emerald-500/50 hover:shadow-lg dark:hover:shadow-emerald-950/20 cursor-pointer overflow-hidden"
        >
          <div class="absolute -right-20 -top-20 w-48 h-48 rounded-full bg-emerald-500/5 blur-3xl pointer-events-none group-hover:bg-emerald-500/10 transition-colors duration-500" />

          <div class="flex flex-wrap items-center justify-between gap-3 mb-5">
            <div class="flex items-center gap-2 sm:gap-3 text-xs font-mono">
              <span class="inline-flex items-center px-2.5 py-0.5 rounded-full font-medium bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20">
                {{ article.category }}
              </span>
              <span class="text-gray-300 dark:text-gray-700">·</span>
              <span class="text-gray-500 dark:text-gray-400">{{ article.date }}</span>
            </div>

            <div class="flex items-center gap-1.5 text-xs font-mono text-gray-500 dark:text-gray-400">
              <svg class="w-3.5 h-3.5 text-emerald-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span>{{ article.readTime }}</span>
            </div>
          </div>

          <h3 class="text-2xl sm:text-3xl font-serif font-medium text-gray-900 dark:text-white tracking-tight leading-snug mb-3 group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">
            {{ article.title }}
          </h3>

          <p class="text-base text-gray-600 dark:text-gray-300 font-sans leading-relaxed mb-6">
            {{ article.summary }}
          </p>

          <div class="mb-6 p-3 rounded-xl bg-gray-50 dark:bg-gray-800/40 border border-surface-light-border/60 dark:border-surface-dark-border/60 flex items-center justify-between gap-4">
            <div class="flex items-center gap-3">
              <div class="w-9 h-9 rounded-lg bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 flex items-center justify-center flex-shrink-0">
                <svg class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 17V7m0 10a2 2 0 01-2 2H5a2 2 0 01-2-2V7a2 2 0 012-2h2a2 2 0 012 2m0 10a2 2 0 002 2h2a2 2 0 002-2M9 7a2 2 0 012-2h2a2 2 0 012 2m0 10V7m0 10a2 2 0 002 2h2a2 2 0 002-2V7a2 2 0 00-2-2h-2a2 2 0 00-2 2" />
                </svg>
              </div>
              <div>
                <p class="text-xs font-mono font-medium text-gray-900 dark:text-gray-200">
                  {{ locale === 'pt' ? '3 diagramas de arquitetura inclusos' : '3 architecture diagrams included' }}
                </p>
                <p class="text-xs text-gray-500 dark:text-gray-400">
                  {{ locale === 'pt' ? 'Fluxos, pontos de falha e resolução com Transactional Outbox' : 'Payment flows, failure points & Transactional Outbox resolution' }}
                </p>
              </div>
            </div>

            <span class="hidden sm:inline-flex text-xs font-mono text-emerald-600 dark:text-emerald-400">
              {{ locale === 'pt' ? 'Visualizar →' : 'Preview →' }}
            </span>
          </div>

          <div class="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pt-4 border-t border-surface-light-border/50 dark:border-surface-dark-border/50">
            <div class="flex flex-wrap gap-2">
              <span
                v-for="tag in article.tags"
                :key="tag"
                class="px-2.5 py-0.5 text-xs font-mono rounded bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 border border-surface-light-border dark:border-surface-dark-border"
              >
                #{{ tag }}
              </span>
            </div>

            <div class="inline-flex items-center gap-1.5 text-sm font-medium text-emerald-600 dark:text-emerald-400 group-hover:translate-x-1 transition-transform">
              <span>{{ content.articles?.readAction || 'Ler artigo completo' }}</span>
              <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>

    <ArticleReaderModal
      :article="selectedArticle"
      :is-open="!!selectedArticle"
      :close-action="content.articles?.closeAction || 'Fechar leitor'"
      :back-to-articles="content.articles?.backToArticles || 'Voltar aos artigos'"
      :tap-to-zoom-hint="content.articles?.tapToZoomHint || 'Toque para ampliar'"
      @close="closeArticle"
    />
  </section>
</template>
