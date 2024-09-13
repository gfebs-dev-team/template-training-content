<script setup>
import { SlideColumns } from '@/components/Slide'
import { useSlidesStore } from '../stores/slides'
import { onBeforeMount } from 'vue'

const slideData = {
  title: 'SlideColumns',
  type: 'content',
  section: 'Section 1: Slide Types'
}

const slides = useSlidesStore()
const { addSlide } = slides

onBeforeMount(() => {
  addSlide(slideData, 0)
})
</script>

<template>
  <SlideColumns v-bind="slideData">
    <p>
      This is your standard slide type, <strong>SlideColumns</strong>. The single column is the
      default layout for this slide type. Properties required for <strong>SlideColumns</strong> are
      <em>title, type,</em> and <em>section</em>. All slide data must be added to the store with
      <code>addSlide(slideData, slideNumber)</code> before mount.
    </p>
  </SlideColumns>
</template>

<style scoped lang="scss">
code {
  background-color: #1a1818;
  word-wrap: break-word;
  box-decoration-break: clone;
  padding: 0.1rem 0.3rem 0.2rem;
  border-radius: 0.2rem;
  font-family: Consolas, Monaco, 'Lucida Sans', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
}
</style>
