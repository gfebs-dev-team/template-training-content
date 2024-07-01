<script setup>
import ContentHeader from '../components/ContentHeader.vue'
import AppGlossary from './AppGlossary.vue'
import AppNav from './AppNav.vue'
import SideBar from './SideBar.vue'
import SlideContainer from './SlideContainer.vue'
import glossary from '../assets/glossary.json'
import { useSlidesStore } from '@/stores/slides'
import { storeToRefs } from 'pinia'

defineProps(['courseData'])
const slides = useSlidesStore()
const { glossaryState, sidebarState } = storeToRefs(slides)
const { toggleSidebar } = slides
</script>

<template>
  <main
    class="flex h-dvh flex-col justify-between xl:items-center xl:bg-spacecadet xl:px-32 xl:py-10"
  >
    <AppGlossary :glossary="glossary" v-if="glossaryState"></AppGlossary>

    <ContentHeader @toggleSidebar="toggleSidebar()" :courseData="courseData"></ContentHeader>
    <section
      class="relative flex size-full h-full flex-col justify-between overflow-hidden rounded-b-lg bg-oxfordblue xl:max-w-[1200px]"
    >
      <SideBar :sidebarState="sidebarState"/>

      <SlideContainer />
    </section>

    <AppNav :courseData="courseData" />
    <!-- Bottom Nav -->
  </main>
  <!-- <main>
    
    
    
  </main> -->
</template>
