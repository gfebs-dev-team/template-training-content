<script setup>
import { SlideColumns } from '@/components/Slide'
import { useSlidesStore } from '@/stores/slides'
import { onBeforeMount } from 'vue'

const slideData = {
  title: 'Double Columns',
  type: 'content',
  section: 'Section 1: Slide Types'
}

const slides = useSlidesStore()
const { addSlide } = slides

onBeforeMount(() => {
  addSlide(slideData, 4)
})
</script>

<template>
  <SlideColumns v-bind="slideData" :columns="1">
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
  </SlideColumns>
</template>
