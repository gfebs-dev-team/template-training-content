<script setup>
import { twMerge } from 'tailwind-merge'
defineProps({
  termName: String,
  activeName: String
})
</script>

<template>
  <button
    :class="
      twMerge(
        'outline-none p-4 min-w-0 min-h-0 rounded-md text-center cursor-pointer border-2 border-transparent hover:bg-transparent hover:border-saffron hover:text-aliceblue bg-spacecadet text-aliceblue font-bold transition-all',
        termName == activeName ? 'bg-saffron text-spacecadet' : ''
      )
    "
  >
    {{ termName }}
  </button>
</template>
