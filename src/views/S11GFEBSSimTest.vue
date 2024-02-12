<script setup>
import SlideSimulation from '../components/SlideSimulation.vue';
import { useSlidesStore } from '../stores/slides'
import { onBeforeMount } from 'vue'

const slideData = {
  title: 'GFEBS Simulation Example',
  type: 'content',
  section: 'Section 1: What to Expect',
}

const slides = useSlidesStore()
const { addSlide } = slides

onBeforeMount(() => {
  addSlide(slideData, 10)
})
</script>

<template>
  <SlideSimulation v-bind="slideData"><template #question>This is a simluation question</template></SlideSimulation>
</template>

<style scoped lang="scss"></style>
