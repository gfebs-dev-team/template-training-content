<script setup>
import { useSlidesStore } from '../stores/slides'
import { onBeforeMount, ref } from 'vue'

import SlideTerms from '@/components/SlideTerms.vue'
import SlideTermButton from '@/components/SlideTermButton.vue'

const buttons = ref([
  { id: 1, termName: 'Cash Balancing Processor' },
  { id: 2, termName: 'Cash Balancing Approver' }
])

let terms =[
  'The Cash Balancing Processor reconciles GFEBS cash postings with DoD, makes corrections, and performs reversals.',
  'The Cash Balancing Approver approves adjustments to cash transactions and reviews and updates reports.'
]

const activeDef = ref('')
const activeName = ref('')



function PassNameAndDef(name, def) {
  return (activeName.value = name), (activeDef.value = def)
}

const slideData = {
  title: "Cash Balancing Roles",
  type: 'content',
  section: 'Section 1'
}

const slides = useSlidesStore()
const { addSlide } = slides

onBeforeMount(() => {
  addSlide(slideData, 24)
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
