<script setup>
import SlideQuestion from '../components/SlideQuestion.vue'
import SlideQuestionInput from '../components/SlideQuestionInput.vue';
import { useSlidesStore } from '../stores/slides'
import { onBeforeMount, provide, ref} from 'vue'

const slideData = {
  title: 'Question 3',
  type: 'question',
  viewed: false,
  answer: 'fourth',
  user: ''
}

const slides = useSlidesStore()
const { addSlide } = slides

const answer = ref();
const checked_el= ref(0);

provide("answer", answer);
provide("checked_el", checked_el);

onBeforeMount(() => {
  addSlide(slideData, 29)
})
</script>

<template>
  <SlideQuestion :title="slideData.title">
    <template #question>GFEBS enables efficient and accurate financial management of the Army by:</template>
    <template #options>
      <SlideQuestionInput value="first" label="Centralizing Master Data" index="1" count="1"/>
      <SlideQuestionInput value="second" label="Standardizing Financial Management" index="2" count="1"/>
      <SlideQuestionInput value="third" label="Expediting the Period-End and Year-End Close processes" index="3" count="1"/>
      <SlideQuestionInput value="fourth" label="All of the above" index="4" count="1"/>
    </template>
  </SlideQuestion>
</template>

<style scoped lang="scss">
</style>