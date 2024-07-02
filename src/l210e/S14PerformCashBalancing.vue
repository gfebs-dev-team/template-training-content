<script setup>
import { useSlidesStore } from '../stores/slides'
import { onBeforeMount } from 'vue'
import slide014 from '../assets/img/L210E-slide014.jpeg'

const slideData = {
  title: 'Perform Cash Balancing',
  type: 'content',
  img: slide014
}

const slides = useSlidesStore()
const { addSlide } = slides

onBeforeMount(() => {
  addSlide(slideData, 0)
})
</script>

<template>
  <SlideContent v-bind="slideData" :columns="1">
    <p>The Perform Cash Balancing sub-process ensures that the Army's cash 
        accounts are in balance and fully reconciled with DoD and the 
        United States Treasury. During this process:</p> <br>

        <ul>
            <li>GFEBS identifies any unmatched collections and expenditures.</li>
            <li>GFEBS matches and corrects these transactions so that the Army's 
            cash accounts reconcile with the United States Treasury.</li>
        </ul>


      </SlideContent>
</template>

<style scoped lang="scss">

</style>
../../stores/slides