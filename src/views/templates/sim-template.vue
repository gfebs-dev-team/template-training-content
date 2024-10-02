<script setup>
import { SlideColumns } from '@/components/Slide'
import { useSlidesStore } from '@/stores/slides'
import { onBeforeMount } from 'vue'
import target from '@/assets/demonstration.svg'

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
    <p><span class="font-bold">Role</span>:</p>
    <p><span class="font-bold">Scenario</span>:</p>
    <p><span class="font-bold">Transaction Code:</span></p>
    <p>
      <span class="font-bold">Click</span> the icon on the right to
      begin.
    </p>
    <template #column_2>
      <a href="#"><img :src="target" alt="chart" class="p-8" /></a>
    </template>
  </SlideColumns>
</template>
