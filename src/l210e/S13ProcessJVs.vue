<script setup>
import { useSlidesStore } from '../stores/slides'
import { onBeforeMount } from 'vue'
import slide013 from '../assets/img/L210E-slide013.jpeg'

const slideData = {
  title: 'Manage GL Accounts',
  type: 'content',
  img: slide013
}

const slides = useSlidesStore()
const { addSlide } = slides

onBeforeMount(() => {
  addSlide(slideData, 0)
})
</script>

<template>
  <SlideContent v-bind="slideData" :columns="1">
    <p>The Process Journal Vouchers sub-process is responsible for:</p> <br>

<ul>
    <li>Entering JVs into GFEBS</li>
    <li>Approving or rejecting JVs</li>
    <li>Posting approved JVs to the GL</li>
    <li>Reversing JVs</li>
</ul>
      </SlideContent>
</template>

<style scoped lang="scss">

</style>
../../stores/slides