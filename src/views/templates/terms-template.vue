<script setup>
import { onBeforeMount } from 'vue'
import { useSlidesStore } from '@/stores/slides'
import { SlideTerms } from '@/components/Slide'
const slideData = {
  type: 'content',
  section: '{ section }',
  title: '{ title }'
}

const slides = useSlidesStore()
const { addSlide } = slides

onBeforeMount(() => {
  addSlide(slideData, { count })
})
</script>

<template>
  <SlideTerms v-bind="slideData" :termsNum="1">
    <template #main-text> </template>

    <template #termButton_1></template>
    <template #termDef_1></template>
  </SlideTerms>
</template>
