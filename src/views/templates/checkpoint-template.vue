<script setup>
import { SlideCheckpoint } from '@/components/Slide'
import { useSlidesStore } from '@/stores/slides'
import { onBeforeMount } from 'vue'
import checkpoint from '@/assets/module_checkpoint.png'

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
  <SlideCheckpoint
    v-bind="slideData"
    :columns="1"
    :image="checkpoint"
  >
  </SlideCheckpoint>
</template>
