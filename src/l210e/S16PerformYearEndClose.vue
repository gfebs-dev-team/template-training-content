<script setup>
import { useSlidesStore } from '../stores/slides'
import { onBeforeMount } from 'vue'
//import slide016 from '../assets/img/L210E-slide016.jpeg'

const slideData = {
  title: 'Perform Year End Close',
  type: 'content',
  //img: slide016
}

const slides = useSlidesStore()
const { addSlide } = slides

onBeforeMount(() => {
  addSlide(slideData, 0)
})
</script>

<template>
  <SlideContent v-bind="slideData" :columns="1">
    <p>In the Perform Year-End Close sub-process, the financial activities 
        involved in closing out the year are carried out. To do this, 
        users involved in the GFEBS Year-End Close sub-process must:</p> <br>

        <ol start="8">
            <li>Perform Asset-Fiscal Year Change</li>
            <li>Complete Closing</li>
            <li>Carry out Reconciliation</li>
            <li>Close and Open Posting Periods</li>
            <li>Run Reports and Send Trial Balance</li>
            <li>Carry Forward Balances for General Ledger</li>
            <li>Carry Out Year-Start Activities.</li>
        </ol>


      </SlideContent>
</template>

<style scoped lang="scss">

</style>
../../stores/slides