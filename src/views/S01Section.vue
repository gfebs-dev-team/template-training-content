<script setup>
import { SlideSection } from '@/components/Slide'
import { useSlidesStore } from '../stores/slides'
import { onBeforeMount } from 'vue'

const slideData = {
  title: 'Sidebar Slide Title',
  sectionNum: 'Section I',
  subtitle: 'Section Name',
  section: 'Section 1: Slide Types',
  type: 'section'
}

const slides = useSlidesStore()
const { addSlide } = slides

onBeforeMount(() => {
  addSlide(slideData, 0)
})
</script>

<template>
  <SlideSection v-bind="slideData" />
</template>
