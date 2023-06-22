<script setup lang="ts">
import { useSlidesStore } from '@/stores/slides'
import { storeToRefs } from 'pinia'
import { watch } from 'vue'

defineProps<{
  title?: string
}>()

const slides = useSlidesStore()
const { slidesList, totalSlides } = slides
const { current } = storeToRefs(slides)

function closeSideBar() {
  document.getElementById('sidebar')?.setAttribute('style', 'display:none')
}

function goToSlide(i: number) {
  document.getElementById('sidebar')?.setAttribute('style', 'display:none')
}

var checkpoint = totalSlides + 1
function isLocked(slide: number) {
  for (var i = current.value; i < totalSlides; i++) {
    if (slidesList[i].type == 'question' && slidesList[i].answer == false) {
      checkpoint = i
      return;
    }
  }

  return slide >= checkpoint ? true : false
}

function setLinks() {
  document.querySelectorAll('#sidebar .links li a').forEach((link, index) => {
    if (isLocked(index)) {
      link.classList.add('disabled')
    } else {
      link.classList.remove('disabled')
    }
  })
}

setLinks();

watch(current, () => {
  setLinks();
})
</script>

<template>
  <div id="sidebar" style="display: none">
    <h1>Index</h1>
    <div class="links">
      <h2>{{ title }}</h2>
      <li v-for="(slide, index) in slidesList" :key="index">
        <a @click="goToSlide(index)">
          {{ slide.name }}
        </a>
      </li>
    </div>
    <button id="close-sidebar" @click="closeSideBar">X</button>
  </div>
</template>

<style scoped lang="scss">
#sidebar {
  position: absolute;
  height: 125%;
  bottom: 2px;
  left: 2px;
  width: 30em;
  z-index: 1;
  background-color: #133038;
  padding: 1em;
  display: flex;
  flex-direction: column;
  gap: 1em;

  h1 {
    text-transform: uppercase;
    font-weight: bold;
    color: white;
    line-height: 1.2em;
    padding: 0.1em 0.5em;
    background-color: #009bd1;
  }

  .links {
    padding: 1em;
    display: flex;
    flex-direction: column;
    gap: 0.2em;
    color: white;
    background-color: #636d74;
    height: 100%;
    overflow-y: scroll;
    clip-path: polygon(100% 0, 100% 100%, 12% 100%, 0 92%, 0 0); //Start Top Right
    h2 {
      font-weight: bold;
    }

    li {
      list-style-type: none;
      display: flex;
      a {
        text-decoration: none;
        width: 100%;
        padding-left: 1em;
        color: white;
        font-size: 1.2em;
        &.disabled {
          color: grey;
          &:hover {
            color: grey;
          }
        }
        &:hover {
          color: rgb(228, 192, 31);
        }
      }
    }
  }

  #close-sidebar {
    position: absolute;
    bottom: 0.6rem;
    left: 0.8rem;
    z-index: 2;
    font-weight: bold;
    background: none;
    border: none;
    font-size: 1.5em;
    padding: 0;
    color: white;
    &:hover {
      cursor: pointer;
    }
  }
}
</style>
