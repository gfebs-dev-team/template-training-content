<script setup>
import { storeToRefs } from 'pinia'
import { useSlidesStore } from '@/stores/slides'
import ContentHeader from '../components/ContentHeader.vue'
import SideBar from '../components/SideBar.vue'
import views from '../views'

let slidesComp = Object.keys(views).map((key) => {
  return views[key]
})

const slides = useSlidesStore()
const { current } = storeToRefs(slides)

defineProps(['topic', 'courseCode', 'courseTitle'])
</script>

<template>
  <main>
    <ContentHeader>GFEBS {{ courseCode }} {{ courseTitle }}</ContentHeader>
    <div class="layout">
        <div class="content-box">
          <SideBar v-bind="{'topic': topic}"></SideBar>
          <div v-for="(slide, index) in slidesComp" :key=index>
            <component :is="slide" :topic="topic" v-show="(index==current)"></component>
          </div>
        </div>
    </div>
  </main>
</template>

<style scoped lang="scss">
main {
  display: flex;
  flex-direction: column;
  height: 100%;
  display: flex;
  padding: 5rem 8rem;
  gap: 3rem;
}
.layout {
  position: relative;
  grid-gap: 1em;
  height: 100%;
  align-items: center;
  .content-box {
    grid-area: b;
    width: 100%;
    height: 100%;
    background-color:var(--color-background-dark);
  }
}
</style>
