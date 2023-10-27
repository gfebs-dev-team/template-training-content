<script setup>
import SlideContent from '../components/SlideContent.vue'
import { useSlidesStore } from '../stores/slides'
import { onBeforeMount } from 'vue';

const slideData = {
    title: "SlideContent",
    type: "content",
    section: "Section 1: Slide Types"
}

const slides = useSlidesStore()
const { addSlide } = slides

onBeforeMount(()=>{
  addSlide(slideData, 0)
})
</script>
 
<template>
  <SlideContent v-bind="slideData">
    <p>
      This is your standard slide type, <strong>SlideContent</strong>. The single column is the default layout for this slide type. Properties required for <strong>SlideContent</strong> are <em>title, type,</em> and <em>section</em>. All slide data must be added to the store before mount.
    </p>
  </SlideContent>
</template>  
