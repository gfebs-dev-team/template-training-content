<script setup>
import { SlideQuestion, SlideQuestionInput } from '@/components/Slide'
import { useSlidesStore } from '../stores/slides'
import { onBeforeMount, provide, ref } from 'vue'

const slideData = {
  title: 'True-False Question',
  type: 'question',
  section: 'Section 1: What to Expect',
  viewed: false,
  answer: 'false',
  user: ''
}

const answer = ref()
const checked_el = ref(0)
const slides = useSlidesStore()
const { addSlide } = slides

provide('answer', answer)
provide('checked_el', checked_el)

onBeforeMount(() => {
  addSlide(slideData, 5)
})
</script>

<template>
  <SlideQuestion :title="slideData.title">
    <template #question>What is the answer to this question?</template>
    <template #options>
      <SlideQuestionInput value="true" label="true" index="1" count="2" />
      <SlideQuestionInput value="false" label="false" index="2" count="2" />
    </template>
  </SlideQuestion>
</template>

<style scoped lang="scss"></style>
