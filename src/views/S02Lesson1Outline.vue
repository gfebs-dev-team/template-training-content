<script setup>
import SlideContent from '../components/SlideContent.vue'
import { useSlidesStore } from '../stores/slides'
import { onBeforeMount } from 'vue'

const slideData = {
  title: 'Lesson 1 Outline',
  type: 'content',
  img: './essentials-introduction-slide01-multiple.svg'
}

const slides = useSlidesStore()
const { addSlide } = slides

onBeforeMount(() => {
  addSlide(slideData, 1)
})
</script>

<template>
  <SlideContent v-bind="slideData" :columns="1">
    <p>
      In this lesson, we're going to cover what you need to get started learning GFEBS. 
    </p>
    <p>The lesson is divided into three sections</p>
    <ol>
      <li>What to Expect</li>
      <li>Key Concepts</li>
      <li>Key Features</li>
    </ol>
    <p>First, we'll cover some basic course information</p>
  </SlideContent>
</template>

<style scoped lang="scss">

</style>
