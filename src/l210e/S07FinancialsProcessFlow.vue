<script setup>
import { useSlidesStore } from '../stores/slides'
import { onBeforeMount } from 'vue'
import slide016 from '../assets//img/GFEBS_Diagram-slide016.jpeg'

const slideData = {
  title: 'Financials Process Flow',
  type: 'content',
  img: slide016
}

const slides = useSlidesStore()
const { addSlide } = slides

onBeforeMount(() => {
  addSlide(slideData, 0)
})
</script>

<template>
  <SlideContent v-bind="slideData" :columns="1">
    <p>When learning about Financials (FI)
        it is important to understand the 
        processes involved with processing 
        Journal Vouchers (JVs).</p> <br>
        <p>You can view the process to the right.</p>
    
      </SlideContent>
</template>

<style scoped lang="scss">

</style>
../../stores/slides