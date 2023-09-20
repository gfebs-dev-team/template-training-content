<script setup>
import SlideContent from '../components/SlideContent.vue'
import { useSlidesStore } from '../stores/slides'
import { onBeforeMount } from 'vue';

const slideData = {
    "title": "Phasellus sed urna",
    "type": "content",
    "img": '/shield-01.png'
}

const slides = useSlidesStore()
const { addSlide } = slides

onBeforeMount(()=>{
  addSlide(slideData, 0)
})
</script>

<template>
  <SlideContent v-bind="slideData">
    <p>
      This training course will introduce you to the process, coordination, and information required
      to understand the Financials process in GFEBS.
    </p>
  </SlideContent>
</template>
