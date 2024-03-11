<script setup>
import { useSlidesStore } from '../stores/slides'
import { onBeforeMount } from 'vue'
import slide01 from '../assets/img/essentials-introduction-slide01-multiple.svg'

const slideData = {
  title: 'GFEBS Overview Lesson',
  type: 'content',
  section: "Section 1: What to Expect",
  img: slide01,
}

const slides = useSlidesStore()
const { addSlide } = slides

onBeforeMount(() => {
  addSlide(slideData, 7)
})
</script>

<template>
  <SlideContent v-bind="slideData" :columns="1">
    <p>Lesson 2 is titled GFEBS Overview</p>
    <p>This lesson contains the following sections:</p>
    <ol>
      <li>Background and Purpose</li>
      <li>Features and Structure</li>
    </ol>
    <p>
      It also provides the basis for the inception of GFEBS, details its origin, and analyzes the
      rationale behind its implementation.
    </p>
    <p>
      First, we will discuss the rationale behind the implementation of GFEBS by taking a look at
      the Army's legacy financial system environment vs. the GFEBS environment. Then, we will
      compare GFEBS's streamlined structure and improved features to the legacy financial
      information structure.
    </p>
  </SlideContent>
</template>

<style scoped lang="scss"></style>
../../stores/slides