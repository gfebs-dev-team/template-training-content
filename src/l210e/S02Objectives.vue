<script setup>
import { useSlidesStore } from '../stores/slides'
import { onBeforeMount } from 'vue'
import slide06 from '../assets/img/essentials-introduction-slide06.svg'

const slideData = {
  title: 'Objectives',
  type: 'content',
  img: slide06
}

const slides = useSlidesStore()
const { addSlide } = slides

onBeforeMount(() => {
  addSlide(slideData, 1)
})
</script>

<template>
  <SlideContent v-bind="slideData" :columns="1">
    <p>After completing this course, you will be able to:</p>
      <ul>
        <li>Describe how the Financials process works in GFEBS.</li>
        <li>Explain how General Ledger accounts are managed in GFEBS.</li>
        <li>Explain how a Journal Voucher is processed in GFEBS.</li>
        <li>Describe how a period is closed in GFEBS.</li>
        <li>Explain how the year is closed in GFEBS.</li>
        <li>Describe the Cash Balancing process in GFEBS.</li>
        <li>Define the key concepts and terms related to GFEBS Financials.</li>
      </ul></SlideContent>
</template>

<style scoped lang="scss">

</style>
../../stores/slides