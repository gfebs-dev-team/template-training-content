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
      <svg
        @click="toggleSidebar()"
        :class="{ open: sidebarState }"
        class="hamburger"
        width="26"
        height="26"
        viewBox="0 0 30 30"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect class="bar" x="3" y="3" height="2" fill="#DEE4F1" />
        <rect class="bar" x="3" y="12" height="2" fill="#DEE4F1" />
        <rect class="bar" x="3" y="22" height="2" fill="#DEE4F1" />
      </svg>

      <!--<div class="hamburger" @click="toggleSidebar()" :class="{ open: sidebarState }">
        <div class="bar" />
        <div class="bar" />
        <div class="bar" />
      </div>-->
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
    display: flex;
    align-items: center;
    gap: 1rem;
    .hamburger {
      display: flex;
      font-size: 20px;
      height: 1.2em;
      justify-content: space-between;
      flex-direction: column;
      cursor: pointer;
      @media only screen and (max-width:1200px) {
        transform: scale(.75);
      }
      .bar {
        height: 0.2em;
        width: 1.5em;
        background-color: var(--color-text-dark);
        transition: 0.5s;
      }
      &.open {
        .bar:first-child {
          -webkit-transform: rotate(45deg) translate(6px, -2px);
          transform: rotate(45deg) translate(6px, -2px);
        }
        .bar:nth-child(2) {
          opacity: 0;
        }
        .bar:nth-child(3) {
          -webkit-transform: rotate(-45deg) translate(-17px, -3px);
          transform: rotate(-45deg) translate(-17px, -3px);
        }
      }
    }

    h1 {
      color: var(--color-text-dark);
      font-size: var(--m0);
      font-weight: bold;
    }
  }
  nav {
    display: flex;
    gap: 1rem;
  }
}
</style>
