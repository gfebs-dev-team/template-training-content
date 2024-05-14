<script setup>
import { useSlidesStore } from '../stores/slides'
import { onBeforeMount } from 'vue'
import slide015 from '../assets/img/L210E-slide015.jpeg'

const slideData = {
  title: 'Perform Period End Close',
  type: 'content',
  img: slide015
}

const slides = useSlidesStore()
const { addSlide } = slides

onBeforeMount(() => {
  addSlide(slideData, 0)
})
</script>

<template>
  <SlideContent v-bind="slideData" :columns="1">
    <p>In the Perform Period-End Close sub-process, the schedule for a 
        period-end close is determined and the necessary steps on that schedule 
        are carried out. To perform this period-end close, users involved must:</p> <br>

      <p style="font-weight: bold;">Steps 1-6:</p>
      <ol start="1">
          <li>Enter Period-End Close Schedule via Schedule Manager Tool</li>
          <li>Run depreciation to track the value of the Army's assets</li>
          <li>Execute any recurring entries</li>
          <li>Run the payment program</li>
          <li>Perform valuation on foreign currency</li>
          <li>Clear open items</li>
      </ol>

      <p style="font-weight: bold;">Steps 7-12:</p>
      <ol start="7">
          <li>Settle project costs</li>
          <li>Perform managerial accounting close</li>
          <li>Run the billing program</li>
          <li>Carry out reconciliation postings</li>
          <li>Close and open GFEBS posting periods</li>
          <li>Send Trial Balance</li>
      </ol>


      </SlideContent>
</template>

<style scoped lang="scss">

</style>
../../stores/slides