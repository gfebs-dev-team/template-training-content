<script setup>
import { useSlidesStore } from '../stores/slides'
import { onBeforeMount } from 'vue'
import slide018 from '../assets/img/L210E-slide018.jpeg'

const slideData = {
  title: 'Financials Business Process Area',
  type: 'content',
  img: slide018
}

const slides = useSlidesStore()
const { addSlide } = slides

onBeforeMount(() => {
  addSlide(slideData, 0)
})
</script>

<template>
  <SlideContent v-bind="slideData" :columns="1">
    <p>GFEBS is the financial book of record for the Army's General Fund. 
        It is the responsibility of the FI procethe Army's General Fund. 
        While GFEBS interacts with all business process areas in GFEBS, 
        FI has an especially close relationship with both Cost Management (CM) 
        and Funds Management (FM).</p> <br>

        <p>CM takes financial data posted to the GL and stores it in a way the 
        makes it useful for management. CM facilitates internal management accounting 
        functions, whereas the FI module is more concerned with recording financial data 
        for external reporting purposes.</p> <br>

        <p>FM performs the budgeting and funds control for general fund appropriations 
        received by the Army. FM posts the budget for the fiscal year in GFEBS, which, 
        in turn, impacts the relevant GL Budgetary Accounts. FI ensures that these 
        Budgetary Accounts are maintained throughout the year and appropriately opened 
        and closed during the Year-End Close process. Whereas FM allocates and allots 
        the appropriations that the Army receives, FI manages the GL Accounts to which 
        those allocations and allotments are posted. FI also tracks and records, via the 
        GL Proprietary Accounts, how those funds are used.</p>
    
      </SlideContent>
</template>

<style scoped lang="scss">

</style>
../../stores/slides