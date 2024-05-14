<script setup>
import { useSlidesStore } from '../stores/slides'
import { onBeforeMount } from 'vue'
import slide03 from '../assets/img/essentials-introduction-slide03.svg'

const slideData = {
  title: 'Topics',
  type: 'content',
  img: slide03
}

const slides = useSlidesStore()
const { addSlide } = slides

onBeforeMount(() => {
  addSlide(slideData, 2)
})
</script>

<template>
  <SlideContent v-bind="slideData" :columns="1">
    <p>In this module, we discuss the following topics:</p>
      <ul>
        <li>Course Navigation</li>
        <li>Course Objectives</li>
        <li>What is Financials?</li>
        <li>GFEBS and Financial Management</li>
        <li>Financials Business Process Areas</li>
        <li>Financials Roles and Organizations</li>
        <li>Module Checkpoint</li>
      </ul></SlideContent>
</template>

<style scoped lang="scss">

</style>
../../stores/slides