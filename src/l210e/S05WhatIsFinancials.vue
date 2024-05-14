<script setup>
import { useSlidesStore } from '../stores/slides'
import { onBeforeMount } from 'vue'
import slide06 from '../assets/img/essentials-introduction-slide06.svg'

const slideData = {
  title: 'What is Financials?',
  type: 'content',
  img: slide06
}

const slides = useSlidesStore()
const { addSlide } = slides

onBeforeMount(() => {
  addSlide(slideData, 4)
})
</script>

<template>
  <SlideContent v-bind="slideData" :columns="1">
    <p>Financial Management is the art and science of recording,
        classifying, summarizing, and reporting the financial transactions of
        an organization. It focuses on measuring and recording all activities 
        that have a financial impact on the organization.</p>
        
        <p style="font-weight: bold;">What is the purpose of Financial Management?</p>
        <p>Financial Management provides a historical record of actual financial results
         and serves as the basis for future financial decisions for budgeting, allocation
         of resources, and procurement.</p> 
      <ol>
        <li>Provides a historical record of actual financial results</li>
        <li>Serves as the basis for future financial decisions:</li>
        <li>Budgeting.</li>
        <li>Allocation of resources.</li>
        <li>Procurement.</li>
      </ol>
      </SlideContent>
</template>

<style scoped lang="scss">

</style>
../../stores/slides