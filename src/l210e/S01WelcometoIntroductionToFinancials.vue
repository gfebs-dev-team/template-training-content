<script setup>
import SlideContent from '../components/SlideContent.vue'
import { useSlidesStore } from '../stores/slides'
import { onBeforeMount } from 'vue'
import slide01 from '../assets/img/essentials-introduction-slide01-multiple.svg'

const slideData = {
  title: 'Welcome to GFEBS L210E Financials Process Overview',
  type: 'content',
  img: slide01
}

const slides = useSlidesStore()
const { addSlide } = slides

onBeforeMount(() => {
  addSlide(slideData, 0)
})
</script>

<template>
  <SlideContent v-bind="slideData" :columns="1">
    <p>
     This training course will introduce you to the process, coordination, and information required to understand the Financials process in GFEBS.</p>
  </SlideContent>
</template>

<style scoped lang="scss">

</style>
../../stores/slides