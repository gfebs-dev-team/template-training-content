<script setup>
import SlideQuestion from '../components/SlideQuestion.vue'
import SlideQuestionInput from '../components/SlideQuestionInput.vue';
import { useSlidesStore } from '../stores/slides'
import { onBeforeMount, provide, ref, watch } from 'vue'

const slideData = {
  title: 'Question 1',
  type: 'question',
  viewed: false,
  answer: 'true',
  user: ''
}

const answer = ref();
const checked_el= ref(0);
const slides = useSlidesStore()
const { addSlide } = slides
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
      <SlideQuestionInput value="True" index="1"/>
      <li class="choice" @click="checked_el=2; answer='false'" :class="{checked: checked_el == 2}">
        <input id="1_false" value="false" v-model="answer" type="radio"/> <label for="1_false">False</label>
      </li>
    </template>
  </SlideQuestion>
</template>

<style scoped lang="scss">
</style>