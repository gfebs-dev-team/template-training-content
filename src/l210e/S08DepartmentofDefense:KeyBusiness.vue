<script setup>
import { useSlidesStore } from '../stores/slides'
import { onBeforeMount } from 'vue'
import slide017 from '../assets//img/L210E-slide017.jpeg'

const slideData = {
  title: 'Department of Defense: Key Business',
  type: 'content',
  img: slide017
}

const slides = useSlidesStore()
const { addSlide } = slides

onBeforeMount(() => {
  addSlide(slideData, 0)
})
</script>

<template>
  <SlideContent v-bind="slideData" :columns="1">
    <p>Business transformation in the Department of Defense (DoD)
         is being driven by a series of strategic objectives, 
         each of which illustrates a different aspect of the overall challenge.</p> <br>
        <ul>
            <li>Support the joint warfighting capability of the DoD</li>
            <li>Enable rapid access to information for strategic decisions</li>
            <li>Reduce the cost of Defense Business Operations</li>
            <li>Improve financial stewardship of the American people</li>
        </ul>

    
      </SlideContent>
</template>

<style scoped lang="scss">

</style>
../../stores/slides