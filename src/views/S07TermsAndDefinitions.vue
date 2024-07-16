<script setup>
import { useSlidesStore } from '../stores/slides'
import { onBeforeMount } from 'vue'
import SlideTerms from '@/components/SlideTerms.vue'
import {
  RiCheckLine,
  RiCheckFill,
  RiCheckDoubleFill,
  RiCheckboxLine,
  RiCheckboxCircleLine,
  RiCheckboxFill,
  RiCheckboxCircleFill
} from '@remixicon/vue'

const slideData = {
  title: 'Terms and Definition Slide',
  type: 'content',
  section: 'Section 1: What to Expect'
}

const slides = useSlidesStore()
const { addSlide } = slides

onBeforeMount(() => {
  addSlide(slideData, 6)
})
</script>

<template>
  <SlideTerms v-bind="slideData" :termsNum="5">
    <template #main-text>
      <p>Here are a number key terms and concepts related to this section.</p>
      <p><span style="font-weight: bold">Click</span> each term to the right to learn more.</p>
    </template>

    <template #termButton_1>Journal Voucher Workflow Maintainer</template>
    <template #termDef_1>
      The Journal Voucher Workflow Maintainer loads the two tables. One table stores the user IDs of
      Journal Voucher Processors and the related organizations. The other table stores the user IDs
      of the Journal Voucher Reviewers and the Journal Voucher Approvers, and maintains the dollar
      thresholds for routing. GFEBS will route JVs automatically to their appropriate reviewers
      based on the organization from the JV originate, and to approvers based on the dollar amount
      of the JV.
    </template>
    <template #check_1>
      <RiCheckLine />
    </template>

    <template #termButton_2>Journal Voucher Processor</template>
    <template #termDef_2> The Journal Voucher Processor prepares and parks JV. </template>

    <template #termButton_3>Journal Voucher Reviewer</template>
    <template #termDef_3>
      The Journal Voucher Reviewer reviews parked JVs and releases or rejects the JV. If the Journal
      Voucher Reviewer releases a JV, he/she sends it on the Journal Voucher Approver for final
      approval.
    </template>

    <template #termButton_4>Journal Voucher Approver</template>
    <template #termDef_4>
      The Journal Voucher Approver approves or rejects JV and processes JV documents.
    </template>

    <template #termButton_5>Journal Voucher Master Processor</template>
    <template #termDef_5>
      The Journal Voucher Master Processor uploads JVs into GFEBS and updates funding changes on
      purchase orders (POs)
    </template>
  </SlideTerms>
</template>
