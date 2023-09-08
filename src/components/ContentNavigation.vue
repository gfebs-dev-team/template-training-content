<script setup>
import { watch } from 'vue'
import { useSlidesStore } from '@/stores/slides'
import { storeToRefs } from 'pinia'

const slides = useSlidesStore()
const { goPrev, goNext, total, enableNext, disableNext, enablePrev, disablePrev} = slides
const { current, prev, next } = storeToRefs(slides)

watch(current, () => {
  current.value <= 0 ? disablePrev() : enablePrev()
  current.value >= total-1 ? disableNext() : enableNext()
})

</script>

<template>
  <slot></slot>
</template>

<style scoped lang="scss">
button {
    font-weight: bold;
    color: white;
    background-color: #1ea3de;
    height: 129px;
    border-width: 1px;
    &:disabled {
      background-color: gray;
    }
  }
</style>
