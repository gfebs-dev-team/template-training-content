<script setup>
import { onBeforeMount } from 'vue'
import { SlideColumns } from '@/components/Slide'
import { useSlidesStore } from '@/stores/slides'
import chart from '../assets/img/essentials-introduction-slide012.svg'
import ImageExpander from '@/components/ImageExpander.vue'

const slideData = {
  title: 'Image Slide',
  type: 'content',
  section: 'Section 1: Slide Types'
}

const slides = useSlidesStore()
const { addSlide } = slides

onBeforeMount(() => {
  addSlide(slideData, 2)
})
</script>

<template>
  <SlideColumns v-bind="slideData" :columns="1">
    <p>
      This training course will introduce you to the process, coordination, and information required
      to understand the Financials process in GFEBS.
    </p>

    <template #column_2>
      <ImageExpander :src="chart" className="w-full"></ImageExpander>
    </template>
  </SlideColumns>
</template>
