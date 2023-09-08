<script setup>
import { watch } from 'vue'
import { useSlidesStore } from '@/stores/slides'
import { storeToRefs } from 'pinia'

const slides = useSlidesStore()
const { goPrev, goNext, total, enableNext, disableNext, enablePrev, disablePrev } = slides
const { current, prev, next } = storeToRefs(slides)

watch(current, () => {
  current.value <= 0 ? disablePrev() : enablePrev()
  current.value >= total - 1 ? disableNext() : enableNext()
})
</script>

<template>
  <div class="unit-header">
    <h1 class="heading"><slot /></h1>
    <nav>
      <button class="button" @click="goPrev" :disabled=!prev>
        <p>Back</p>
      </button>
      <button class="button" @click="goNext" :disabled=!next>
        <p>Next</p>
      </button>
    </nav>
  </div>
</template>

<style scoped lang="scss">
.unit-header {
  width: 100%;
  background-color: var(--color-heading);
  display: flex;
  padding: 1.25rem 2rem;
  justify-content: space-between;
  align-items: center;
  align-self: stretch;
  h1 {
    color: var(--color-text-dark);
    font-size: var(--m2);
  }
  nav {
    display: flex;
    gap: 1rem;
    .button {
      padding: 0.25rem 1.5rem; 
      color: var(--color-accent-light);
      background-color: transparent;
      p {
        font-size: var(--m-2);
      }
      &:hover {
        background-color: var(--color-accent-light);
      }
    }
  }
}
</style>
