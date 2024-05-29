<script setup>
import SlideContent from '../components/SlideContent.vue'
import { useSlidesStore } from '../stores/slides'
import { onBeforeMount } from 'vue'

const slideData = {
  title: 'Image Slide',
  type: 'content',
  section: 'Section 1: Slide Types',
  img: '/essentials-introduction-slide01-multiple.svg'
}

const slides = useSlidesStore()
const { addSlide } = slides

onBeforeMount(() => {
  addSlide(slideData, 1)
})
</script>

<template>
  <SlideContent v-bind="slideData" :columns="1">
    <p>
      This training course will introduce you to the process, coordination, and information required
      to understand the Financials process in GFEBS.
    </p>
  </SlideContent>
</template>
