<script setup>
import { useSlidesStore } from '../stores/slides'
import { onBeforeMount, ref } from 'vue'

import SlideTerms from '@/components/SlideTerms.vue'
import SlideTermButton from '@/components/SlideTermButton.vue'

const buttons = ref([
  { id: 1, termName: 'General Ledger Data Maintainer' },
  { id: 2, termName: 'General Ledger Master Data Reviewer' },
  { id: 3, termName: 'General Ledger Master Data Approver' },

])

let terms = [
'The General Ledger Master Data Maintainer adds, changes, or blocks the GL accounts. They also coordinate with the Funds Master Data Maintainer for Commitment items and coordinates with Centralized Controlling Master Data Maintainer for Cost Elements.',
  'The General Ledger Master Data Reviewer reviews updates to the GL accounts for accuracy and notifies GFEBS users of account creations as well as account modifications.',
  'The General Ledger Master Data Approver approves and validates GL account requests.',

]

const activeDef = ref('')
const activeName = ref('')



function PassNameAndDef(name, def) {
  return (activeName.value = name), (activeDef.value = def)
}

const slideData = {
  title: 'Master Data Maintenance Roles',
  type: 'content',
  section: 'Section 1'
}

const slides = useSlidesStore()
const { addSlide } = slides

onBeforeMount(() => {
  addSlide(slideData, 20)
})
</script>

<template>
  <SlideTerms :defName="activeName" :defParagraph="activeDef" v-bind="slideData">
    <template #main-text>
      <p>Here are a number key terms and concepts related to this section. <span style="font-weight: bold">Click</span> each term to the right to learn more.</p>
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
