<script setup>
import { SlideColumns } from '@/components/Slide'
import { useSlidesStore } from '@/stores/slides'
import { onBeforeMount } from 'vue'
import target from '@/assets/gfebs_computer.svg'

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
      <img :src="target" alt="chart" class="p-8" />
    </template>
  </SlideColumns>
</template>
