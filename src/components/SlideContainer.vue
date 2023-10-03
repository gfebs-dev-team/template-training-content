<script setup>
import SlideHeader from './SlideHeader.vue'
import SideBar from './SideBar.vue'
import { Transition } from 'vue'
import { storeToRefs } from 'pinia'
import { useSlidesStore } from '@/stores/slides'
import views from '../views'

let slidesComp = Object.keys(views).map((key) => {
  return views[key]
})

const slides = useSlidesStore()
const { current } = storeToRefs(slides)

defineProps(['topic', 'title'])
</script>

<template>
  <div class="slide-container">
    <SlideHeader>{{ topic }}</SlideHeader>
    <div class="slide-area">
      <SideBar :title="title"/>
      <div :class="['slide', {active: index == current}]" v-for="(slide, index) in slidesComp" :key="index">
        <Transition>
          <component :is="slide" v-show="index == current"></component>
        </Transition>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.slide-container {
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  background-color: var(--color-background-dark);
}
.slide-area {
  display: flex;
  transition: ease-in-out 1s;
  overflow: hidden;
  height: 100%;
  flex-direction: column;
  .slide {
    position: absolute;
    height:100%;
    width: 100%;
    z-index: -99;
    &.active {
      z-index: 0;
    }
  }
}

.v-enter-active,
.v-leave-active {
  transition: opacity 0.5s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}
</style>
