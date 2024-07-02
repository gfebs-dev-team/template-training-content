<script setup>
import SlideOutline from '../components/SlideOutline.vue'
import { useSlidesStore } from '../stores/slides'
import { onBeforeMount } from 'vue'

const slideData = {
  title: 'Outline Summary Slide',
  type: 'content',
  section: 'Section 1: What to Expect'
}

const slides = useSlidesStore()
const { addSlide } = slides

onBeforeMount(() => {
  addSlide(slideData, 7)
})
</script>

<template>
  <SlideOutline v-bind="slideData" :sections="4">
    <template #tablesection_1>
      <span class="font-bold mb-2">GFEBS Essentials Introductions</span>
      <ul class="text-xs flex flex-col gap-2">
        <li>What to Expect</li>
        <li>Key Concepts</li>
        <li>Key Features</li>
      </ul>
    </template>
    <template #tablesection_2>
      <span class="font-bold mb-2">GFEBS Essentials Introductions</span>
      <ul class="text-xs flex flex-col gap-2">
        <li>What to Expect</li>
        <li>Key Concepts</li>
        <li>Key Features</li>
      </ul>
    </template>
    <template #tablesection_3>
      <span class="font-bold mb-2">GFEBS Essentials Introductions</span>
      <ul class="text-xs flex flex-col gap-2">
        <li>What to Expect</li>
        <li>Key Concepts</li>
        <li>Key Features</li>
      </ul>
    </template>
    <template #tablesection_4>
      <span class="font-bold mb-2">GFEBS Essentials Introductions</span>
      <ul class="text-xs flex flex-col gap-2">
        <li>What to Expect</li>
        <li>Key Concepts</li>
        <li>Key Features</li>
      </ul>
    </template>
    <template #mainsection_0>
      <h2 class="font-bold text-xl text-saffron">Module Outline</h2>
      <p>
        There are 5 lessons in this module as seen in the numbered list on the left. Each lesson
        contains multiple supporting sections
      </p>
      <p>
        This learning module requires satisfactory completion of the Post Assessment in order to
        attain credit.
      </p>
      <p>
        <span style="font-weight: bold">Click the arrows</span> in this box to examine the lessons
        and objectives.
      </p>
    </template>
    <template #mainsection_1>
      <h2 class="font-bold text-xl text-saffron">Lesson 1:</h2>
      <p>
        There are 5 lessons in this module as seen in the numbered list on the left. Each lesson
        contains multiple supporting sections
      </p>
      <p>
        This learning module requires satisfactory completion of the Post Assessment in order to
        attain credit.
      </p>
      <p>
        <span style="font-weight: bold">Click the arrows</span> in this box to examine the lessons
        and objectives.
      </p>
    </template>
    <template #mainsection_2>
      <h2 class="font-bold text-xl text-saffron">Lesson 2:</h2>
      <p>
        There are 5 lessons in this module as seen in the numbered list on the left. Each lesson
        contains multiple supporting sections
      </p>
      <p>
        This learning module requires satisfactory completion of the Post Assessment in order to
        attain credit.
      </p>
      <p>
        <span style="font-weight: bold">Click the arrows</span> in this box to examine the lessons
        and objectives.
      </p>
    </template>
  </SlideOutline>
</template>
