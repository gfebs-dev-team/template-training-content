<script setup>
import { SlideCheckpoint } from '@/components/Slide'
import { useSlidesStore } from '@/stores/slides'
import { onBeforeMount } from 'vue'

const slideData = {
  title: 'Learning Checkpoint',
  type: 'content',
  section: '{ section }'
}

const slides = useSlidesStore()
const { addSlide } = slides

onBeforeMount(() => {
  addSlide(slideData, { count })
})
</script>

<template>
  <SlideCheckpoint v-bind="slideData" />
</template>
