<script setup>
import SlideContent from '../components/SlideContent.vue'
import { useSlidesStore } from '../stores/slides'
import { onBeforeMount } from 'vue'

const slideData = {
  title: 'Triple Columns',
  type: 'content',
  section: 'Section 1: Slide Types'
}

const slides = useSlidesStore()
const { addSlide } = slides

onBeforeMount(() => {
  addSlide(slideData, 3)
})
</script>

<template>
  <SlideContent v-bind="slideData" :columns="2">
    <p>
      This training course will introduce you to the process, coordination, and information required
      to understand the Financials process in GFEBS.
    </p>
    <template #column_2>
      <p>
        This training course will introduce you to the process, coordination, and information
        required to understand the Financials process in GFEBS.
      </p>
    </template>
    <template #column_3>
      <p>
        This training course will introduce you to the process, coordination, and information
        required to understand the Financials process in GFEBS.
      </p>
    </template>
  </SlideContent>
</template>
