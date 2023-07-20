<script setup>
import SlideQuestion from '../components/SlideQuestion.vue'
import { useSlidesStore } from '../stores/slides'
import { onMounted } from 'vue';

const slideData = {
    "title": "Question 1",
    "type": "question"
}

const slides = useSlidesStore()
const { addSlide } = slides

onMounted(()=>{
  addSlide(slideData, 2)
})
</script>

<template>
  <SlideQuestion v-bind="slideData">
    <p>
      This training course will introduce you to the process, coordination, and information required
      to understand the Financials process in GFEBS.
    </p>
    <img src="/shield-01.png" />
  </SlideQuestion>
</template>
