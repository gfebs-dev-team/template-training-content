<script setup>
import { twMerge } from 'tailwind-merge'
const props = defineProps(['index', 'currIndex'])
defineEmits(['setTerm'])
</script>

<template>
  <button
    :id="'term_' + index"
    :class="
      twMerge(
        'outline-none p-4 min-w-0 min-h-0 rounded-md h-14 text-center text-xs sm:text-base cursor-pointer border-2 border-transparent hover:bg-transparent hover:border-saffron hover:text-aliceblue bg-spacecadet text-aliceblue font-bold transition-all',
        currIndex === index ? 'bg-saffron text-spacecadet' : ''
      )
    "
  >
    <slot name="term" />
  </button>
</template>
