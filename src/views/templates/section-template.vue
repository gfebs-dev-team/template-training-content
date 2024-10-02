<script setup>
import { SlideSection } from '@/components/Slide'
import { useSlidesStore } from '@/stores/slides'
import { onBeforeMount } from 'vue'

const slideData = {
  type: 'section',
  section: '{ section }',
  title: '{ title }',
  sectionNum: '',
  subtitle: ''
}

const slides = useSlidesStore()
const { addSlide } = slides

onBeforeMount(() => {
  addSlide(slideData, { count })
})
</script>

<template>
  <SlideSection v-bind="slideData" />
</template>
