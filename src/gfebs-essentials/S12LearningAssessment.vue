<script setup>
import { useSlidesStore } from '../stores/slides'
import { onBeforeMount } from 'vue'
import slide08 from '../assets/img/essentials-introduction-slide08.svg'

const slideData = {
  title: 'Learning Assessment',
  type: 'content',
  section: 'Section 1: What to Expect',
  img: slide08
}

const slides = useSlidesStore()
const { addSlide } = slides

onBeforeMount(() => {
  addSlide(slideData, 11)
})
</script>

<template>
  <SlideContent v-bind="slideData" :columns="1">
    <p>
      After the completion of this module, you must score a minimum of 80 percent on the Post Assessment in order to pass. The assessment covers all the lessons. After answering all the questions, a summary screen will display your score.  
    </p>
    <p>
      You will have unlimited attempts to pass the Post Assesment
    </p>
  </SlideContent>
</template>

<style scoped lang="scss"></style>
../../stores/slides