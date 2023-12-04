<script setup>
import SlideContent from '../components/SlideContent.vue'
import { useSlidesStore } from '../stores/slides'
import { onBeforeMount } from 'vue'

const slideData = {
  title: 'GFEBS Instructional Prerequisites',
  type: 'content',
  img: '/essentials-introduction-slide03.svg'
}

const slides = useSlidesStore()
const { addSlide } = slides

onBeforeMount(() => {
  addSlide(slideData, 4)
})
</script>

<template>
  <SlideContent v-bind="slideData" columns="1">
    <p>
      The GFEBS Essentials module includes 5 lessons. Currently, there are no prerequisite training
      requirements to preclude completion.
    </p>
    <p>
      GFEBS Essentials includes lesson checkpoints, simulations and learning assessments that
      provide opportunities to demonstrate learning objective mastery.
    </p>
  </SlideContent>
</template>

<style scoped lang="scss"></style>
