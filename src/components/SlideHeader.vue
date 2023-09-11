<script setup>
import AppButton from './AppButton.vue'
import { watch } from 'vue'
import { useSlidesStore } from '@/stores/slides'
import { storeToRefs } from 'pinia'

const slides = useSlidesStore()
const { goPrev, goNext, total, enableNext, disableNext, enablePrev, disablePrev } = slides
const { current, prev, next } = storeToRefs(slides)

const buttonStyle = {
  size: 'small',
  color: 'lightMode',
  variant: 'outline'
}

watch(current, () => {
  current.value <= 0 ? disablePrev() : enablePrev()
  current.value >= total - 1 ? disableNext() : enableNext()
})
</script>

<template>
  <div class="unit-header">
    <div class="heading">
      
      <h1><slot /></h1>
    </div>
    <nav>
      <AppButton @click="goPrev" v-bind="buttonStyle" :disabled="!prev"> Back </AppButton>
      <AppButton @click="goNext" v-bind="buttonStyle" :disabled="!next"> Next </AppButton>
    </nav>
  </div>
</template>

<style scoped lang="scss">
.unit-header {
  width: 100%;
  background-color: var(--color-accent-light);
  display: flex;
  padding: 1.25rem 2rem;
  justify-content: space-between;
  align-items: center;
  align-self: stretch;
  .heading {

    h1 {
      color: var(--color-text-dark);
      font-size: var(--m2);
    }
  }
  nav {
    display: flex;
    gap: 1rem;
  }
}
</style>
