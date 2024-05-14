<script setup>
import { useSlidesStore } from '../stores/slides'
import { onBeforeMount } from 'vue'

const slideData = {
  title: 'GFEBS and Financial Management',
  type: 'content',

}

const slides = useSlidesStore()
const { addSlide } = slides

onBeforeMount(() => {
  addSlide(slideData, 0)
})
</script>

<template>
  <SlideContent v-bind="slideData" :columns="0">
    <p>GFEBS is the Army's financial initiative to accomplish business 
      transformation objectives established by the DoD.</p> <br>
      <p>GFEBS meets these objectives by:</p>
      <ul>
        <li>Centralizing the Army's master database of financial information.</li>
        <li>Enabling access to this financial data through a web-based portal.</li>
        <li>Managing and representing all accounting data.</li>
        <li>Recording all business transactions according to the document principle.</li>
        <li>Making financial accounting data available in real time.</li>
        <li>Preparing operational information to assist strategic decision making.</li>
      </ul> <br>
      <p>Note: The document principle requires that one FI document is created 
      for every business transaction. Each document receives a unique number. 
      It is a 1:1 relationship.</p>
      </SlideContent>
</template>

<style scoped lang="scss">

</style>
../../stores/slides