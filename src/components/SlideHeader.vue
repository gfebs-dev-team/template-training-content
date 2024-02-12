<script setup>
import AppButton from './AppButton.vue'
import { watch } from 'vue'
import { useSlidesStore } from '@/stores/slides'
import { storeToRefs } from 'pinia'

const slides = useSlidesStore()
const { goPrev, goNext, total, enableNext, disableNext, enablePrev, disablePrev, toggleSidebar } =
  slides
const { current, prev, next, sidebarState } = storeToRefs(slides)

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
      <div class="hamburger" @click="toggleSidebar()" :class="{ open: sidebarState }">
        <div class="bar" />
        <div class="bar" />
        <div class="bar" />
      </div>
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
  padding: $p1 $p3;
  justify-content: space-between;
  align-items: center;
  align-self: stretch;
  .heading {
    display: flex;
    align-items: center;
    gap: $p2;
    .hamburger {
      display: grid;
      gap: 5px;
      cursor: pointer;
      
      @media only screen and (max-width:1200px) {
        transform: scale(.7);
      }
      .bar {
        height: 2px;
        width: 16px;
        background-color: var(--color-text-dark);
        transition: 0.5s;
      }
      &.open {
        .bar:first-child {
          -webkit-transform: rotate(45deg) translate(5px, 5px);
          transform: rotate(45deg) translate(5px, 5px);
        }
        .bar:nth-child(2) {
          opacity: 0;
        }
        .bar:nth-child(3) {
          -webkit-transform: rotate(-45deg) translate(5px, -5px);
          transform: rotate(-45deg) translate(5px, -5px);
        }
      }
    }

    h1 {
      color: var(--color-text-dark);
      font-size: $m0;
      font-weight: bold;
    }
  }
  nav {
    display: flex;
    gap: $p1;
  }
}
</style>
