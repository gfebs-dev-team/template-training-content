<script setup>
import { useSlidesStore } from '../stores/slides'
import { onBeforeMount, ref } from 'vue'

import SlideTerms from '@/components/SlideTerms.vue'
import SlideTermButton from '@/components/SlideTermButton.vue'

const buttons = ref([
{ id: 1, termName: 'Period Close Schedule Processor' },
  { id: 2, termName: 'Period Close Schedule Monitor' },
  { id: 3, termName: 'Open/Close Processor' },
  { id: 4, termName: 'Accounting Processor' },
  { id: 5, termName: 'External Information Monitor' },
  { id: 6, termName: 'LMP Depreciation Reviewer' }

])

let terms = [
  'The Period Close Schedule Processor enters period-end close rules and master schedule into GFEBS.',

  'The Period Close Schedule Monitor monitors the period-end and year-end close progress and notifies ' +
  'the GFEBS user community of any changes to the closing schedule.',

  'The Open/Close Processor Carries out the pre-closing and closing of accounts and closes and opens ' +
  'posting periods in GFEBS.',

  'The Accounting Processor performs valuations and corrects postings and monitors possible exceptions and trends.',

  'The External Information Monitor sends trial balance and reporting extracts for external reporting.',

  'After depreciation posts in GFEBS, the posted monthly depreciation for ARMY Working Capital Fund (AWCF) ' +
  'assets is transmitted to LMP via interface for reporting purposes. In the event an error occurs, the LMP ' +
  'Depreciation reviewer will also execute the interface on demand.'
]

const activeDef = ref('')
const activeName = ref('')



function PassNameAndDef(name, def) {
  return (activeName.value = name), (activeDef.value = def)
}

const slideData = {
  title: "Period End Close Roles",
  type: 'content',
  section: 'Section 1'
}

const slides = useSlidesStore()
const { addSlide } = slides

onBeforeMount(() => {
  addSlide(slideData, 22)
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
