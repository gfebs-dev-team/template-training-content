<script setup>
import { useSlidesStore } from '../stores/slides'
import { onBeforeMount } from 'vue'
import slide06 from '../assets/img/essentials-introduction-slide06.svg'

const slideData = {
  title: 'Financials and GFEBS',
  type: 'content',
  img: slide06
}

const slides = useSlidesStore()
const { addSlide } = slides

onBeforeMount(() => {
  addSlide(slideData, 5)
})
</script>

<template>
  <SlideContent v-bind="slideData" :columns="1">
    <p style="font-weight: bold;">Benefits of Financials in GFEBS</p> <br>
        <p>GFEBS is a web-enabled system that allows the U.S. Army to share financial
        data across the Service.  GFEBS helps the Army standardize financial management,
        accounting functions, and management across the Army.  As a result, Army
        financials and real property professionals will have access to timely,
        reliable, and accurate information.  Additionally, this will improve
        cost management and control, allow more time to perform financial
        analysis, and facilitate more accurate understanding of the value
        and location/characteristics of all property.</p>
      </SlideContent>
</template>

<style scoped lang="scss">

</style>
../../stores/slides