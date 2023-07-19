<script setup>
import SlideContent from '../components/SlideContent.vue'
import { provide } from 'vue';

const slideData = {
    "title": "This is a second slide, Surprise!",
    "type": "content"
}
provide("slideData", slideData)

</script>

<template>
  <SlideContent v-bind="slideData">
    <p>
      This training course will introduce you to the process, coordination, and information required
      to understand the Financials process in GFEBS.
    </p>
    <img src="/shield-01.png" />
  </SlideContent>
</template>
