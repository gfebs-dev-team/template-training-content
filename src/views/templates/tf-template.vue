<script setup>
import { SlideQuestion, SlideQuestionInput } from '@/components/Slide'
import { useSlidesStore } from '@/stores/slides'
import { onBeforeMount, provide, ref } from 'vue'

const slideData = {
  title: 'Question {#}',
  type: 'question',
  section: '{ section }',
  viewed: false,
  answer: 'true',
  user: ''
}

const slides = useSlidesStore()
const { addSlide } = slides

const answer = ref()
const checked_el = ref(0)

provide('answer', answer)
provide('checked_el', checked_el)

onBeforeMount(() => {
  addSlide(slideData, { count })
})
</script>

<template>
  <SlideQuestion :title="slideData.title">
    <template #question></template>
    <template #options>
      <SlideQuestionInput
        value="true"
        label="True"
        index="1"
        count="{#}"
      />
      <SlideQuestionInput
        value="false"
        label="False"
        index="2"
        count="{#}"
      />
    </template>
  </SlideQuestion>
</template>
