<script setup>
import { useSlidesStore } from '../../stores/slides'
import { onBeforeMount } from 'vue'
import slide09 from '../assets/img/essentials-introduction-slide01-multiple.svg'

const slideData = {
  title: 'History (1 of 2)',
  type: 'content',
  section: 'Section 2: ',
  img: slide09
}

const slides = useSlidesStore()
const { addSlide } = slides

onBeforeMount(() => {
  addSlide(slideData, 12)
})
</script>

<template>
  <SlideContent v-bind="slideData" :columns="1">
    <p>
      GFEBS is the result of the Chief Financial Officers Act of 1990, the Federal Financial
      Management Improvement Act of 1996 and the DoD Business Transformation Act of 1999.
    </p>
    <p>
      The GFEBS system is a product of both a congressional mandate and the Army's desire to bring
      systems into the Standard Army Financial Enterprise, also referred to as SAFE, environment. In
      1966, Congress passed the Federal Financial Management Improvement Act. This act escalated the
      need for federal financial management systems to provide accurate, reliable and timely financial management information to the government's highest levels. In 2002, the Office of the Secretary of Defense (OSD) directed that Army services comply with this act by the 2007 fiscal year.
    </p>
  </SlideContent>
</template>

<style scoped lang="scss"></style>
../../stores/slides