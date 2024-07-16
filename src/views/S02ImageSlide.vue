<script setup>
import SlideContent from '../components/SlideContent.vue'
import { useSlidesStore } from '../stores/slides'
import { onBeforeMount } from 'vue'
import image from '../assets/img/module_checkpoint.png'
import cash from '../assets/img/Cash Balancing Process Flow.svg'
import chart from '../assets/img/GFEBS_Diagram-slide016.jpeg'
import ImageExpander from '../components/ImageExpander.vue'

const slideData = {
  title: 'Image Slide',
  type: 'content',
  section: 'Section 1: Slide Types'
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
      This training course will introduce you to the process, coordination, and information required
      to understand the Financials process in GFEBS.
    </p>

    <template #column_2>
      <ImageExpander :src="chart" className="w-full"></ImageExpander>
    </template>
  </SlideContent>
</template>
