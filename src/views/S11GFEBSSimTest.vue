<script setup>
import SlideSimulation from '../components/SlideSimulation.vue';
import { useSlidesStore } from '../stores/slides'
import { onBeforeMount } from 'vue'
import slide01 from '../assets/img/essentials-introduction-slide01-multiple.svg'

const slideData = {
  title: 'GFEBS Navigation and GFEBS Reports',
  type: 'content',
  section: 'Section 1: What to Expect',
  img: slide01
}

const slides = useSlidesStore()
const { addSlide } = slides

onBeforeMount(() => {
  addSlide(slideData, 10)
})
</script>

<template>
  <SlideSimulation><template #question>This is a simluation question</template></SlideSimulation>
</template>

<style scoped lang="scss"></style>
