<script setup>
import { twMerge } from 'tailwind-merge'
import { ref } from 'vue'
import { RiCheckLine } from '@remixicon/vue'
const props = defineProps(['index', 'currIndex'])
defineEmits(['setTerm'])
const viewed = ref(false)
</script>

<template>
  <button
    @click="viewed = true"
    :id="'term_' + index"
    :class="
      twMerge(
        'relative outline-none p-4 min-w-0 min-h-0 rounded-md text-center text-xs sm:text-base cursor-pointer border-2 border-transparent hover:bg-transparent hover:border-saffron hover:text-aliceblue bg-spacecadet text-aliceblue font-bold transition-all',
        currIndex === index ? 'bg-saffron text-spacecadet pointer-events-none' : ''
      )
    "
  >
    <slot name="term" />
    <span
      class="absolute right-4"
      :class="`${viewed ? 'inline-block' : 'hidden'}`"
      :data-viewed="viewed"
      ><RiCheckLine
    /></span>
  </button>
</template>
