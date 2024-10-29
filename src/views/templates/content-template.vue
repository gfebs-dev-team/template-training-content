<script setup>
import { SlideColumns } from '@/components/Slide'
import { useSlidesStore } from '@/stores/slides'
import { onBeforeMount } from 'vue'
//import slideImg from '@/assets/__COURSE_LOGO__.svg'

const slideData = {
  type: 'content',
  section: '{ section }',
  title: '{ title }'
}

const slides = useSlidesStore()
const { addSlide } = slides

onBeforeMount(() => {
  addSlide(slideData, { count })
})
</script>

<template>
  <SlideColumns v-bind="slideData" :columns="1">
    <template #column_2>
      <!-- <img :src="slideImg" alt="chart" class="slideImg" /> -->
    </template>
  </SlideColumns>
</template>
