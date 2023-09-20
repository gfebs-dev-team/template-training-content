<script setup>
import SlideQuestion from '../components/SlideQuestion.vue'
import SlideQuestionInput from '../components/SlideQuestionInput.vue';
import { useSlidesStore } from '../stores/slides'
import { onBeforeMount, provide, ref} from 'vue'

const slideData = {
  title: 'Question 1',
  type: 'question',
  viewed: false,
  answer: 'true',
  user: ''
}

const slides = useSlidesStore()
const { addSlide } = slides

const answer = ref();
const checked_el= ref(0);

provide("answer", answer);
provide("checked_el", checked_el);

onBeforeMount(() => {
  addSlide(slideData, 2)
})
</script>

<template>
  <SlideQuestion :title="slideData.title">
    <template #question>What is the answer to this question?</template>
    <template #options>
      <SlideQuestionInput value="true" label="true" index="1" count="1"/>
      <SlideQuestionInput value="false" label="false" index="2" count="1"/>
    </template>
  </SlideQuestion>
</template>

<style scoped lang="scss">
</style>