<script setup>
import SlideOutline from '../components/SlideOutline.vue'
import { useSlidesStore } from '../stores/slides'
import { onBeforeMount } from 'vue'

const slideData = {
  title: 'Module Outline',
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
  <SlideOutline v-bind="slideData" :sections="5">
    <template #tablesection_1>
      <span class="tb-title">GFEBS Essentials Introductions</span>
      <ul class="tb-section">
        <li>What to Expect</li>
        <li>Key Concepts</li>
        <li>Key Features</li>
      </ul>
    </template>
    <template #tablesection_2>
      <span class="tb-title">GFEBS Overview</span>
      <ul class="tb-section">
        <li>Background and Purpose</li>
        <li>Features and Structure</li>
      </ul>
    </template>
    <template #tablesection_3>
      <span class="tb-title">GFEBS Integrated Process Overview</span>
      <ul class="tb-section">
        <li>Integrated Process Basics</li>
        <li>Business Process Areas</li>
      </ul>
    </template>
    <template #tablesection_4>
      <span class="tb-title">GFEBS Navigation</span>
      <ul class="tb-section">
        <li>Navigation Concepts</li>
        <li>Basic Navigation</li>
        <li>Advanced Navigation</li>
      </ul>
    </template>
    <template #tablesection_5>
      <span class="tb-title">GFEBS Reports</span>
      <ul class="tb-section">
        <li>ECC Reporting</li>
        <li>BI Reporting Fundamentals</li>
      </ul>
    </template>
    <template #mainsection_0>
      <h2>Module Outline</h2>
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
      <h2>Lesson 1</h2>
      <p>GFEBS Essentials Introduction</p>
      <h3>Objectives</h3>
      <p>
        The "GFEBS Essentials Introduction" lesson, which you are now viewing, provides the
        overview, purpose and scope of the module including how to use the Graphical User Interface
        (GUI) and student interactions.
      </p>
      <p>
        In addition, this lesson provides an overview of the terminology and processes within GFEBS
        as they related to legacy systems and processes.
      </p>
    </template>
    <template #mainsection_2>
      <h2>Lesson 2</h2>
      <p>GFEBS Overview</p>
      <h3>Objectives</h3>
      <p>After completion, you should be able to:</p>
      <ul>
        <li>Explain the background and purpose of the GFEBS program.</li>
        <li>Describe the impact GFEBS has on Army organizations.</li>
      </ul>
    </template>
    <template #mainsection_3>
      <h2>Lesson 3</h2>
      <p>GFEBS Integrated Process Overview</p>
      <h3>Objectives</h3>
      <p>After completion, you should be able to:</p>
      <ul>
        <li>Identify and describe the various process areas in GFEBS.</li>
        <li>Explain the integration of the GFEBS system.</li>
        <li>
          Have a basic understanding of the process flows and scenarios as they relate to the six
          business process areas.
        </li>
      </ul>
    </template>
    <template #mainsection_4>
      <h2>Lesson 4</h2>
      <p>GFEBS Navigation</p>
      <h3>Objectives</h3>
      <p>After completion, you should be able to:</p>
      <ul>
        <li>Explain key GFEBS terms and concepts.</li>
        <li>Perform basic GFEBS navigation of GFEBS.</li>
        <li>
          Create and manage favorites, print from GFEBS, and export extracts from GFEBS materials as
          Microsoft Office documents.
        </li>
      </ul>
    </template>
    <template #mainsection_5>
      <h2>Lesson 5</h2>
      <p>GFEBS Reports</p>
      <h3>Objectives</h3>
      <p>After completion, you should be able to:</p>
      <ul>
        <li>Explain Business Explorer (BEx) and Web Intelligence (WebI) reporting in GFEBS BI.</li>
        <li>
          Access and generate reports in GFEBS ECC (ERP Central Component) and GFEBS BI (Business
          Intelligence).
        </li>
        <li>Generate, save and distribute ECC and BI reports.</li>
      </ul>
    </template>
    <template #mainsection_6>
      <h3>Summary</h3>
      <p>
        As you can see, these five lessons will cover the 'essentials' needed to begin using GFEBS
        in your field of work.
      </p>
      <p>
        The lesson objectives will be listed at the beginning of each lesson, and each lesson is
        broken down into smaller sections of content. To check what you've learned, you will
        complete 'checkpoint' quizzes in each lesson. All five lessons will be covered in the Post
        Assessment.
      </p>
    </template>
  </SlideOutline>
</template>

<style scoped lang="scss">
.tb-section li {
  font-size: smaller;
  list-style-type: none;
}
h3 {
  font-size: $m2;
}
</style>
