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
    <p>The following exercise consists questions to test your comprehension 
      of the previous information presented. </p>
        <br>
      <p>Proceed to test your knowledge. Click Next to continue.</p>
   


      </SlideContent>
</template>

<style scoped lang="scss">

</style>
../../stores/slides