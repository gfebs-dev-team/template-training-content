<script setup>
import { useSlidesStore } from '../stores/slides'
import { onBeforeMount } from 'vue'
import slide012 from '../assets/img/L210E-slide012.jpeg'

const slideData = {
  title: 'Manage GL Accounts',
  type: 'content',
  img: slide012
}

const slides = useSlidesStore()
const { addSlide } = slides

onBeforeMount(() => {
  addSlide(slideData, 0)
})
</script>

<template>
  <SlideContent v-bind="slideData" :columns="1">
    <p>The Manage General Ledger Accounts sub-process area is responsible for maintaining
         the General Ledger (GL) accounts in GFEBS. Approvals for the following financial 
         activities are issued in this sub-process:</p> <br>
        <ul>
            <li>Creation of a new GL account, as required by U.S. Congressional legislation, U.S. Treasury policy changes</li>
            <li>Modification of a GL account.</li>
            <li>Blocking of a GL account.</li>
        </ul>
    
      </SlideContent>
</template>

<style scoped lang="scss">

</style>
../../stores/slides