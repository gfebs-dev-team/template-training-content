<script setup>
import SlideContent from '../components/SlideContent.vue'
import { useSlidesStore } from '../stores/slides'
import { onBeforeMount } from 'vue'
import image from '../assets/img/module_checkpoint.png'
import cash from '../assets/img/Cash Balancing Process Flow.svg'
import ImageExpander from '../components/ImageExpander.vue'

const slideData = {
  title: 'Image Slide',
  type: 'content',
  section: 'Section 1: Slide Types',
  img: cash
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
      <img class="max-h-1/2 h-full md:h-auto md:p-8 object-contain" :src="image" />
    </template>
  </SlideContent>
</template>
