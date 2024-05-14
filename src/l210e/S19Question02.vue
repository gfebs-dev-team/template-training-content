<script setup>
import SlideQuestion from '../components/SlideQuestion.vue'
import SlideQuestionInput from '../components/SlideQuestionInput.vue';
import { useSlidesStore } from '../stores/slides'
import { onBeforeMount, provide, ref} from 'vue'

const slideData = {
  title: 'Question 2',
  type: 'question',
  section: "Section 1",
  viewed: false,
  answer: 'true',
  user: ''
}

const answer = ref();
const checked_el = ref(0);
const slides = useSlidesStore()
const { addSlide } = slides

provide("answer", answer);
provide("checked_el", checked_el);

onBeforeMount(() => {
  addSlide(slideData, 16)
})
</script>

<template>
  <SlideQuestion :title="slideData.title">
    <template #question>The purpose of FI in GFEBS is to manage the Army's General Fund GL and to report the financial status of the Army to the DoD and United States Treasury.</template>
    <template #options>
      <SlideQuestionInput value="true" label="true" index="1" count="2"/>
      <SlideQuestionInput value="false" label="false" index="2" count="2"/>
    </template>
  </SlideQuestion>
</template>

<style scoped lang="scss">
</style>