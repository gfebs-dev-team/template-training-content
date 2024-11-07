<script setup>
import AppHeader from '@/components/AppHeader.vue'
import { NavBar, NavGlossary } from '@/components/NavBar'
import TheSideBar from '@/components/TheSideBar.vue'
import { SlideContainer } from '@/components/Slide'
import glossary from './assets/glossary.json'
import { useSlidesStore } from '@/stores/slides'
import { storeToRefs } from 'pinia'
import config from '/gfebs.config.js'

const courseData = config.data.course
const slides = useSlidesStore()
const { glossaryState, sidebarState } = storeToRefs(slides)
const { toggleSidebar } = slides
</script>

<template>
  <main
    class="flex h-dvh flex-col justify-between xl:items-center xl:bg-spacecadet xl:px-32 xl:py-10"
  >
    <NavGlossary :glossary="glossary" v-if="glossaryState"></NavGlossary>

    <AppHeader @toggleSidebar="toggleSidebar()" :courseData />
    <section
      class="relative flex size-full h-full flex-col justify-between overflow-auto xl:rounded-b-lg bg-oxfordblue xl:max-w-[1200px]"
    >
      <TheSideBar :sidebarState="sidebarState" />

      <SlideContainer />
    </section>

    <NavBar :courseData="courseData" />
    <!-- Bottom Nav -->
  </main>
</template>
