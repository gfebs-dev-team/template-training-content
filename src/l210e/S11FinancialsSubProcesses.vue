<script setup>
import { useSlidesStore } from '../stores/slides'
import { onBeforeMount } from 'vue'
import slide011 from '../assets/img/L210E-slide011.jpeg'
const slideData = {
  title: 'Financials Sub-Processes',
  type: 'content',
  img: slide011
}

const slides = useSlidesStore()
const { addSlide } = slides

onBeforeMount(() => {
  addSlide(slideData, 0)
})
</script>

<template>
  <SlideContent v-bind="slideData" :columns="1">
    <p>The FI process area in GFEBS relies on the execution of 
        five key sub-processes to gather financial data that accurately 
        reflects and conveys the current financial status of the Army's General Fund.</p> <br>
        <p>These five key sub-processes are:</p>
        <ul>
            <li>Manage General Ledger Accounts</li>
            <li>Process Journal Vouchers</li>
            <li>Perform Cash Balancing</li>
            <li>Perform Period-End Close</li>
            <li>Perform Year-End Close</li>
        </ul>
    
      </SlideContent>
</template>

<style scoped lang="scss">

</style>
../../stores/slides