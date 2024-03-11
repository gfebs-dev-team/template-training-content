<script setup>
import SlideHeader from './SlideHeader.vue'
import SlideSection from './SlideSection.vue'
import SideBar from './SideBar.vue'
import { Transition,onMounted, watch} from 'vue'
import { storeToRefs } from 'pinia'
import { useSlidesStore } from '@/stores/slides'

const slides = useSlidesStore()
const { current, slidesList, slidesComp } = storeToRefs(slides)

//watch(current, ()=>{
//})

onMounted(() => {
  let pageFilter;

  let queryString = window.location.search
  let urlParams = new URLSearchParams(queryString)

  if (urlParams.has('page')) {
    pageFilter = parseInt(urlParams.get('page'));
    current.value = pageFilter-1;
  }
})

defineProps(['topic', 'title'])
</script>

<template>
  <div class="slide-container">
    <SlideHeader>{{ topic }}</SlideHeader>
    <div class="slide-area">
      <SideBar :title="title" />
      
      <template v-for="(slide, index) in slidesComp" :key="index">
        <Transition>
          <component
            :class="[{ active: index == current }]"
            :is="slide"
            v-show="index == current"
            v-if="slide"
          ></component>
        </Transition>
      </template>
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
