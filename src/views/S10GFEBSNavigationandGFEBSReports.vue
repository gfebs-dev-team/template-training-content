<script setup>
import SlideContent from '../components/SlideContent.vue'
import { useSlidesStore } from '../stores/slides'
import { onBeforeMount } from 'vue'

const slideData = {
  title: 'GFEBS Navigation and GFEBS Reports',
  type: 'content',
  section: 'Section 1: What to Expect',
  img: './essentials-introduction-slide01-multiple.svg'
}

const slides = useSlidesStore()
const { addSlide } = slides

onBeforeMount(() => {
  addSlide(slideData, 9)
})
</script>

<template>
  <SlideContent v-bind="slideData" :columns="1">
    <p>
      The final lessons, GFEBS Navigation and GFEBS Reports, will take up the majority of your time.
    </p>
    <p>
      The lesson on navigation will show you how to get into the system and start performing basic
      tasks. While the next lesson on reports will show you how to generate and save reports. In
      both lessons, you will apply what you've learned in several simulation exercises.
    </p>
  </SlideContent>
</template>

<style scoped lang="scss"></style>
