<script setup>
import { useSlidesStore } from '../stores/slides'
import { onBeforeMount } from 'vue'
import slide01 from '../assets/img/essentials-introduction-slide01-multiple.svg'

const slideData = {
  title: 'Welcome to Essentials',
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
      Welcome to the General Fund Enterprise Business System (GFEBS) Essentials module. In this introduction, we provide an overview of the material covered in the module lessons.
    </p>
    <p>
      The GFEBS Essentials learning module provides initial prerequisite training for personnel who will perform duties in GFEBS. GFEBS is the Army's web-enabled financial, asset and accounting management system. It standardizes, streamlines and shares critical data across the active
      Army, the Army National Guard and the Army Reserve. Although this module does not give everyone the tools to perform in every position, it does provide a basic program overview and also introduces some tasks required to understand and navigate through GFEBS.
    </p>
  </SlideContent>
</template>

<style scoped lang="scss">

</style>
