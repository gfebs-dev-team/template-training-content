<script setup>
import SlideContent from '../components/SlideContent.vue'
import  { ref } from "vue";
import { useSlidesStore } from '../stores/slides'
import { onBeforeMount } from 'vue';

import SlideTerms from "@/components/SlideTerms.vue";
import SlideTermButtons from "@/components/SlideTermButtons.vue";

const buttons = ref([
  { id: 1, termName: 'Journal Voucher Workflow Maintainer' },
  { id: 2, termName: 'Journal Voucher Processor' },
  { id: 3, termName: 'Journal Voucher Reviewer' },
  { id: 4, termName: 'Journal Voucher Approver' },
  { id: 5, termName: 'Journal Voucher Master Processor' }

])

let terms = [] =[
  'The Journal Voucher Workflow Maintainer loads the two tables. ' +
  'One table stores the user IDs of Journal Voucher Processors and the '+ 
  'related organizations. The other table stores the user IDs of the Journal ' +
  'Voucher Reviewers and the Journal Voucher Approvers, and maintains the dollar ' + 
  'thresholds for routing. GFEBS will route JVs automatically to their appropriate ' + 
  'reviewers based on the organization from the JV originate, and to approvers based ' +
  'on the dollar amount of the JV.',

  'The Journal Voucher Processor prepares and parks JV.',

  'The Journal Voucher Reviewer reviews parked JVs and releases or rejects the JV. ' + 
  'If the Journal Voucher Reviewer releases a JV, he/she sends it on the Journal Voucher ' + 
  'Approver for final approval.',

  'The Journal Voucher Approver approves or rejects JV and processes JV documents.',

  'The Journal Voucher Master Processor uploads JVs into GFEBS and updates funding ' +
  'changes on purchase orders (POs)'
]

    const activeDef = ref("");
    const activeName = ref("");

function PassNameAndDef ( name, def ) {
  return activeName.value = name, activeDef.value = def;
}

const slideData = {
    "title": "Master Data Maintenance Roles",
    "type": "content"
}

const slides = useSlidesStore()
const { addSlide } = slides

onBeforeMount(()=>{
  addSlide(slideData, 6)
})
</script>

<template>
  <SlideContent v-bind="slideData">
  <div class="term-window">
    <SlideTerms :defName="activeName" :defParagraph= "activeDef" ></SlideTerms>
  </div>
  
  <div class="buttons">
    <SlideTermButtons v-for="button in buttons" :key="button.id" :termName="button.termName" 
    @click="PassNameAndDef(button.termName, terms[button.id-1])"></SlideTermButtons>
  </div>
  </SlideContent>
</template>

<style scoped>


.term-window {
  width: 100%;
}
.buttons {
  margin-left: auto;
  width: 100%;
}

</style>