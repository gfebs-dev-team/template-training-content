<script setup>
import { storeToRefs } from 'pinia'
import { onMounted } from 'vue'
import { useSlidesStore } from '@/stores/slides'
import ContentHeader from '../components/ContentHeader.vue'
import ContentNavigation from './ContentNavigation.vue'
import SideBar from '../components/SideBar.vue'
import views from '../views'

let slidesComp = Object.keys(views).map((key) => {
  return views[key]
})

const slides = useSlidesStore()
const { current } = storeToRefs(slides)

onMounted(()=>{

})

const props = defineProps(['course', 'topic'])
</script>

<template>
  <main>
    <ContentHeader>{{ course }}</ContentHeader>
    <div class="layout">
      <ContentNavigation>
        <div class="content-box">
          <SideBar v-bind="props"></SideBar>
          <div v-for="(slide, index) in slidesComp" :key=index>
            <component :is="slide" :topic="topic" v-show="(index==current)"></component>
          </div>
        </div>
      </ContentNavigation>
    </div>
  </main>
</template>

<style scoped lang="scss">
main {
  display: flex;
  flex-direction: column;
  height: 100%;
}
.layout {
  position: relative;
  display: grid;
  grid-gap: 1em;
  height: 100%;
  align-items: center;
  grid-template-columns: 2em 1fr 2em;
  grid-template-areas: 'a b c';
  padding: 0em 1em 3em 1em;
  .content-box {
    grid-area: b;
    width: 100%;
    height: 100%;
    background-color: white;
  }
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
}
</style>
