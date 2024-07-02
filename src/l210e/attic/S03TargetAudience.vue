<script setup>
import { useSlidesStore } from '../../stores/slides'
import { onBeforeMount } from 'vue'
import slide02 from '../assets/img/essentials-introduction-slide02.svg'

const slideData = {
  title: 'Target Audience',
  type: 'content',
  img: slide02
}

const slides = useSlidesStore()
const { addSlide } = slides

onBeforeMount(() => {
  addSlide(slideData, 2)
})
</script>

<template>
  <SlideContent v-bind="slideData" :columns="1">
    <p>
      The target audience for this course is anyone who is assigned a GFEBS user role according to
      their installation requirements or organizational needs. Successful completion of this course
      is paramount before a user is provisioned for GFEBS user-role functions.
    </p>
  </SlideContent>
</template>

<style scoped lang="scss"></style>
