<script setup>
import { useSlidesStore } from '../stores/slides'
import { onBeforeMount } from 'vue'
import slide06 from '../assets/img/essentials-introduction-slide06.svg'

const slideData = {
  title: 'Module Objectives',
  type: 'content',
  img: slide06
}

const slides = useSlidesStore()
const { addSlide } = slides

onBeforeMount(() => {
  addSlide(slideData, 3)
})
</script>

<template>
  <SlideContent v-bind="slideData" :columns="1">
    <p>After completing this module, you will be able to:</p>
      <ul>
        <li>Describe the purpose of the Financials process area in GFEBS.</li>
        <li>Describe key Financials roles.</li>
        <li>Identify key Financials organizations.</li>
      </ul>
      </SlideContent>
</template>

<style scoped lang="scss">

</style>
../../stores/slides