<script setup>
import SlideOutline from '../components/SlideOutling.vue'
import { useSlidesStore } from '../stores/slides'
import { onBeforeMount } from 'vue'

const slideData = {
  title: 'Module Outline',
  type: 'content',
  section: "Section 1: What to Expect"
}

const slides = useSlidesStore()
const { addSlide } = slides

onBeforeMount(() => {
  addSlide(slideData, 6)
})
</script>

<template>
  <SlideOutline v-bind="slideData">

  </SlideOutline>
</template>

<style scoped lang="scss"></style>
