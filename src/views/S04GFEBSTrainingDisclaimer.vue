<script setup>
import SlideContent from '../components/SlideContent.vue'
import { useSlidesStore } from '../stores/slides'
import { onBeforeMount } from 'vue'

const slideData = {
  title: 'GFEBS Training Disclaimer',
  type: 'content',
  img: '/essentials-introduction-slide03.svg'
}

const slides = useSlidesStore()
const { addSlide } = slides

onBeforeMount(() => {
  addSlide(slideData, 3)
})
</script>

<template>
  <SlideContent v-bind="slideData" columns="1">
    <p>
      GFEBS Essentials Training is based upon procedures and screens at the time of development.
      Production environments are updated on a regular basis and therefore the procedures and
      screens contained within this product may not reflect the latest information.
    </p>
    <p>
      For the most up to date information visit the GFEBS Training and Performance Support Website
      (GFEBS Help):
    </p>
    <a href="https://gfebs.army.mil/gm">https://gfebs.army.mil/gm</a>
    <p>You may be required to use your CAC to access this site</p>
  </SlideContent>
</template>

<style scoped lang="scss"></style>
