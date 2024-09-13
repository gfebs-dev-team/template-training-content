<script setup>
import { SlideQuestion, SlideQuestionInput } from '@/components/Slide'
import { useSlidesStore } from '../stores/slides'
import { onBeforeMount, provide, ref } from 'vue'

const slideData = {
  title: 'Multiple Choice Question',
  type: 'question',
  section: 'Section 1: Slide Types',
  viewed: false,
  answer: 'third',
  user: ''
}

const slides = useSlidesStore()
const { addSlide } = slides

const answer = ref()
const checked_el = ref(0)

provide('answer', answer)
provide('checked_el', checked_el)

onBeforeMount(() => {
  addSlide(slideData, 4)
})
</script>

<template>
  <SlideQuestion :title="slideData.title">
    <template #question>What is the answer to this question?</template>
    <template #options>
      <SlideQuestionInput value="first" label="first" index="1" count="1" />
      <SlideQuestionInput value="second" label="second" index="2" count="1" />
      <SlideQuestionInput value="third" label="third" index="3" count="1" />
      <SlideQuestionInput value="fourth" label="fourth" index="4" count="1" />
    </template>
  </SlideQuestion>
</template>

<style scoped lang="scss"></style>
