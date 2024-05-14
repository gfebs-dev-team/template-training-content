<script setup>
import { useSlidesStore } from '../stores/slides'
import { onBeforeMount } from 'vue'
import checkpoint from '../assets/img/module_checkpoint.png'

const slideData = {
  title: 'Learning Checkpoint',
  type: 'content',
  img: checkpoint
}

const slides = useSlidesStore()
const { addSlide } = slides

onBeforeMount(() => {
  addSlide(slideData, 0)
})
</script>

<template>
  <SlideContent v-bind="slideData" :columns="1">
    <p>Now that you have gained an overall understanding of the Financials business process area in GFEBS, you have an opportunity to ensure that you understand the material we have just gone over. You will be asked a series of questions.</p>

<p>Choose the option that best answers the question and click Submit.</p>
<p>Click Next to continue.</p>
   


      </SlideContent>
</template>

<style scoped lang="scss">

</style>
../../stores/slides