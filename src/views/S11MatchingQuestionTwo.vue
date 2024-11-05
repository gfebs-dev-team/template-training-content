<script setup>
import { SlideMatching, SlideMatchingDrag, SlideMatchingDrop } from '@/components/Slide'
import { useSlidesStore } from '@/stores/slides'
import { onBeforeMount, provide, ref, reactive } from 'vue'
import { onDrop, dataHandler, setElems } from '@/components/Slide/Matching/draggable.js'
import { shuffleArray } from '@/script/utils'

const slideData = {
  title: 'Matching Question 2',
  type: 'question',
  section: 'Section 2: Slide Types',
  viewed: false,
  answer: {
    one: 'a1',
    two: 'a2',
    three: 'a3',
    four: 'a4'
  },
  user: ''
}

const slides = useSlidesStore()
const { addSlide } = slides

const answer = reactive({})

provide('answer', answer)
onBeforeMount(() => {
  addSlide(slideData, 10)
})
</script>

<template>
  <SlideMatching :title="slideData.title" :index="10">
    <template #question>What is the answer to this question?</template>
  </SlideMatching>
</template>

<style scoped lang="scss"></style>
