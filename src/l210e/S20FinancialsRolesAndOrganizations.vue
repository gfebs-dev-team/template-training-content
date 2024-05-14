<script setup>
import { useSlidesStore } from '../stores/slides'
import { onBeforeMount, ref } from 'vue'

import SlideTerms from '@/components/SlideTerms.vue'
import SlideTermButton from '@/components/SlideTermButton.vue'

const buttons = ref([
  { id: 1, termName: 'Manage General Ledger Accounts' },
  { id: 2, termName: 'Process Journal Vouchers' },
  { id: 3, termName: 'Perform Cash Balancing' },
  { id: 4, termName: 'Perform Period-End Close' },
  { id: 5, termName: 'Perform Year-End Close' }
])

let terms = [
'',
  '',
  '',
  '',
  ''
]

const activeDef = ref('')
const activeName = ref('')



function PassNameAndDef(name, def) {
  return (activeName.value = name), (activeDef.value = def)
}

const slideData = {
  title: 'Financial Roles and Organizations',
  type: 'content',
  section: 'Section 1'
}

const slides = useSlidesStore()
const { addSlide } = slides

onBeforeMount(() => {
  addSlide(slideData, 19)
})
</script>

<template>
  <SlideTerms :defName="activeName" :defParagraph="activeDef" v-bind="slideData">
    <template #main-text>
 
      <p><span style="font-weight: bold">Click</span> each term to the right to learn more.</p>
    </template>
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
