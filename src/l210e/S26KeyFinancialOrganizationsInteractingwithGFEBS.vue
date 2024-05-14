<script setup>
import { useSlidesStore } from '../stores/slides'
import { onBeforeMount, ref } from 'vue'

import SlideTerms from '@/components/SlideTerms.vue'
import SlideTermButton from '@/components/SlideTermButton.vue'

const buttons = ref([
{ id: 1, termName: 'United States Congress' },
  { id: 2, termName: 'Office of Management and Budget (OMB)' },
  { id: 3, termName: 'General Accountability Office (GAO)' },
  { id: 4, termName: 'United States Treasury' },
  { id: 5, termName: 'Defense Finance and Accounting Service (DFAS)' },
  { id: 6, termName: 'Deputy Assistant Secretary of the Army-Financial Operations (DASA-FO)' }
])

let terms =[
  'Appropriates funds through the yearly budget.',
  'Provides guidance for the (1) budget preparation, budget execution, reporting, ' +
  '(2) form and content of the financial statements, and (3) object classification reporting.',
  'Examines the use of public funds, evaluates federal programs, and audits ' +
  'activities to help Congress make effective oversight, policy, and funding decisions.',
  'Serves as the central bank for all Government agencies, including DoD, and subsequently, ' +
  'the Army. Within the Treasury, the Financial Management Services (U.S. Treasury FMS) ' +
  'provides central payment services to federal agencies. Additionally, it provides operations ' +
  'for the federal government\'s collections and deposit systems and provides the government-wide ' +
  'accounting and reporting services.',
  'Within the DoD, the key organization that interacts with GFEBS is DFAS. DFAS is responsible ' +
  'for providing accounting and finance services for the military departments and defense agencies.',
  'Within the Department of the Army (DoA), DASA-FO is responsible for: ' +
  'Financial and accounting policies, procedures, programs, and systems. ' +
  'Army financial management systems and integration activities. ' +
  'Army management control, internal review, and audit compliance. ' +
  'Government Travel Charge Card, fraud, waste, and abuse. ' +
  'Management evaluation activities.'
]

const activeDef = ref('')
const activeName = ref('')



function PassNameAndDef(name, def) {
  return (activeName.value = name), (activeDef.value = def)
}

const slideData = {
  title: "Key Financial Organizations Interacting with GFEBS",
  type: 'content',
  section: 'Section 1'
}

const slides = useSlidesStore()
const { addSlide } = slides

onBeforeMount(() => {
  addSlide(slideData, 25)
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
