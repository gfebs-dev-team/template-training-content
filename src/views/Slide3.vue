<script setup>
import SlideQuestion from '../components/SlideQuestion.vue'
import { useSlidesStore } from '../stores/slides'
import { onBeforeMount, provide, ref } from 'vue'

const slideData = {
  title: 'Question 1',
  type: 'question',
  viewed: false,
  answer: 'true',
  user: ''
}

const answer = ref();
const slides = useSlidesStore()
const { addSlide } = slides
provide("answer", answer);


onBeforeMount(() => {
  addSlide(slideData, 2)
})
</script>

<template>
  <SlideQuestion :title="slideData.title">
    <template #question>What is the answer to this question?</template>
    <template #options>
      <li class="choice">
        <input id="true" value="true" v-model="answer" type="radio" /> <label for="true">True</label>
      </li>
      <li class="choice">
        <input id="false" value="false" v-model="answer" type="radio" /> <label for="false">False</label>
      </li>
    </template>
  </SlideQuestion>
</template>

<style scoped lang="scss">
  label {
    padding: .5rem;
    width: 100%;
  }
</style>