<script setup>
import { useSlidesStore } from '../stores/slides'
import { onBeforeMount, ref } from 'vue'

import SlideTerms from '@/components/SlideTerms.vue'
import SlideTermButton from '@/components/SlideTermButton.vue'

const buttons = ref([
{ id: 1, termName: 'Balance Forward Processor' },
  { id: 2, termName: 'Year-End Certifier' },
  { id: 3, termName: 'Year-End Processor' }

])

let terms = [
'The Balance Forward Processor carries forward balances for GL.',
'The Year-End Certifier performs year-end close certification.',
'The Year-End Processor performs closing of open items, executes ' +
'pre-closing and closing of accounts, transfers balances from cancelled ' +
'accounts, and executes year-start activities.'
]

const activeDef = ref('')
const activeName = ref('')



function PassNameAndDef(name, def) {
  return (activeName.value = name), (activeDef.value = def)
}

const slideData = {
  title: "Year End Close Roles",
  type: 'content',
  section: 'Section 1'
}

const slides = useSlidesStore()
const { addSlide } = slides

onBeforeMount(() => {
  addSlide(slideData, 23)
})
</script>

<template>
  <SlideTerms :defName="activeName" :defParagraph="activeDef" v-bind="slideData">
    <template #main-text>
      <p>Here are a number key terms and concepts related to this section.</p>
      <p><span style="font-weight: bold">Click</span> each term to the right to learn more.</p>  </template>
    <SlideTermButton
      v-for="button in buttons"
      :key="button.id"
      :termName="button.termName"
      @click="PassNameAndDef(button.termName, terms[button.id - 1])"
      :activeName="activeName"
    ></SlideTermButton>
  </SlideTerms>
</template>

<style scoped></style>
