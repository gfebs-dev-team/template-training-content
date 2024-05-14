<script setup>
import SlideQuestion from '../components/SlideQuestion.vue'
import SlideQuestionInput from '../components/SlideQuestionInput.vue';
import { useSlidesStore } from '../stores/slides'
import { onBeforeMount, provide, ref} from 'vue'

const slideData = {
  title: 'Question 4',
  type: 'question',
  viewed: false,
  answer: 'third',
  user: ''
}

const slides = useSlidesStore()
const { addSlide } = slides

const answer = ref();
const checked_el= ref(0);

provide("answer", answer);
provide("checked_el", checked_el);

onBeforeMount(() => {
  addSlide(slideData, 28)
})
</script>

<template>
  <SlideQuestion :title="slideData.title">
    <template #question>Which role reviews updates to the GL for accuracy?</template>
    <template #options>
      <SlideQuestionInput value="first" label="Open/Close Processor" index="1" count="1"/>
      <SlideQuestionInput value="second" label="Journal Voucher Processor" index="2" count="1"/>
      <SlideQuestionInput value="third" label="General Ledger Master Data Reviewer" index="3" count="1"/>
      <SlideQuestionInput value="fourth" label=" General Ledger Master Data Maintainer" index="4" count="1"/>
    </template>
  </SlideQuestion>
</template>

<style scoped lang="scss">
</style>