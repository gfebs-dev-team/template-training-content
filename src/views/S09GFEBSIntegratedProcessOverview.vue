<script setup>
import SlideContent from '../components/SlideContent.vue'
import { useSlidesStore } from '../stores/slides'
import { onBeforeMount } from 'vue'
import slide04 from '../assets/img/essentials-introduction-slide04.svg'

const slideData = {
  title: 'GFEBS Integrated Process',
  type: 'content',
  section: "Section 1: What to Expect",
  img: slide04,
}

const slides = useSlidesStore()
const { addSlide } = slides

onBeforeMount(() => {
  addSlide(slideData, 8)
})
</script>

<template>
  <SlideContent v-bind="slideData" :columns="1">
    <p>The next lesson is GFEBS Integrated Process</p>
    <p>This lesson contains the following sections:</p>
    <ol>
      <li>Integrated Process Basics</li>
      <li>Business Process Areas</li>
    </ol>
    <p>
      Here you learn about the processes, coordination, and concepts required to understand the integrated business process areas in GFEBS
    </p>
  </SlideContent>
</template>

<style scoped lang="scss"></style>
