<script setup>
import SlideContent from '../components/SlideContent.vue'
import { useSlidesStore } from '../stores/slides'
import { onBeforeMount } from 'vue'

const slideData = {
  title: 'Motivator',
  type: 'content',
  img: '/essentials-introduction-slide04.svg'
}

const slides = useSlidesStore()
const { addSlide } = slides

onBeforeMount(() => {
  addSlide(slideData, 5)
})
</script>

<template>
  <SlideContent v-bind="slideData" columns="1">
    <p>
      <strong>
        Why is the General Fund Enterprise Business System (GFEBS) Essentials course important to
        you?
      </strong>
    </p>
    <p>
      GFEBS Essentials provides a history and overview of GFEBS. It details the basics of the
      program, its key functional components and processes, reports, as well as navigation
      techniques. Your successful completion of GFEBS Essentials provides you with the basic
      knowledge and tools you need to begin your GFEBS training. Successful completion of your GFEBS
      training enables you to support your commander and operational forces whether in a support
      role or while deployed.
    </p>
    <p>The graphic on the right depicts the main business process areas in GFEBS.</p>
  </SlideContent>
</template>

<style scoped lang="scss"></style>
