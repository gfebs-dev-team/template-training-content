<script setup>
import { useSlidesStore } from '../stores/slides'
import { storeToRefs } from 'pinia'
import { computed } from 'vue'

const slides = useSlidesStore()
const { current } = storeToRefs(slides)
const { total } = slides
const progress = computed(() => `${((current.value + 1) / total) * 100}%`)
defineProps(['courseData'])
</script>

<template>
  <div class="left-0 h-2 w-full overflow-hidden bg-masblue xl:h-6 xl:rounded-md">
    <div
      class="ease h-full bg-saffron transition-width duration-700"
      :style="`width: ${progress}`"
    ></div>
  </div>
</template>
