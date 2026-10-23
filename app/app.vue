<script setup lang="ts">
import { useLocale } from './composables/useLocale'
import Navbar from './components/Navbar.vue'
import Hero from './components/Hero.vue'
import SelectedWorks from './components/SelectedWorks.vue'
import Articles from './components/Articles.vue'
import Experience from './components/Experience.vue'
import HowIWork from './components/HowIWork.vue'
import Contact from './components/Contact.vue'
import Footer from './components/Footer.vue'

const { content } = useLocale()

const stripHtml = (text: string) => text ? text.replace(/<[^>]*>/g, '') : ''

useSeoMeta({
  title: () => `${content.value.hero.name} — ${content.value.hero.role}`,
  ogTitle: () => `${content.value.hero.name} — ${content.value.hero.role}`,
  description: () => stripHtml(content.value.hero.positioning),
  ogDescription: () => stripHtml(content.value.hero.positioning),
  ogType: 'website',
  twitterCard: 'summary_large_image',
  twitterTitle: () => `${content.value.hero.name} — ${content.value.hero.role}`,
  twitterDescription: () => stripHtml(content.value.hero.positioning)
})
</script>

<template>
  <div class="min-h-screen flex flex-col bg-surface-light dark:bg-surface-dark transition-colors duration-200">
    <Navbar />

    <main id="main-content" class="flex-grow focus:outline-none" tabindex="-1">
      <Hero />
      <SelectedWorks />
      <Articles />
      <Experience />
      <HowIWork />
      <Contact />
    </main>

    <Footer />
  </div>
</template>
