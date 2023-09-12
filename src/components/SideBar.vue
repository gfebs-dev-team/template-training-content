<script setup>
import { useSlidesStore } from '@/stores/slides'
import { storeToRefs } from 'pinia'
import { watch } from 'vue'
import { onUpdated } from 'vue'

const slides = useSlidesStore();
const { current, checkpoint, slidesList, sidebarState } = storeToRefs(slides);
let links = slidesList.value

watch(slidesList, ()=> {
  links = slidesList.value
})

function goToSlide(i) {
  current.value = i;
  slides.toggleSidebar();
}

function setLinks() {
  document.querySelectorAll('#sidebar .links li a').forEach((link, index) => {
    if (index > checkpoint.value) {
      link.classList.add("disabled")
    } else {
      link.classList.remove("disabled")
    }
  })
} 

onUpdated(() => {
  slides.setCheckpoint();
  links = slidesList.value
  setLinks();
}) 

watch(checkpoint, () => {
  slides.setCheckpoint();
  setLinks();
})

</script>

<template>
  <div id="sidebar" :class="{active: sidebarState}">

    <div class="links">
      <li v-for="(slide, index) in links" :key="index">
        <a @click="goToSlide(index)">
          {{ slide.title }}
        </a>
      </li>
    </div>
  </div>
</template>

<style scoped lang="scss">
#sidebar {
  display: flex;
  position: absolute;
  height: 100%;
  bottom: 0;
  left: -26em;
  width: 26em;
  z-index: 1;
  background-color:var(--delft-blue);
  padding: 1em;
  flex-direction: column;
  overflow: hidden;
  transition: ease-in-out .7s;
  gap: 1em;

  &.active {
    
    left: 0;
    transition: ease-in-out .7s;
  }

  h1 {
    text-transform: uppercase;
    font-weight: bold;
    color: white;
    line-height: 1.2em;
    padding: 0.1em 0.5em;
  }

  .links {
    padding: 1em;
    display: flex;
    flex-direction: column;
    gap: 0.2em;
    color: white;
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
          pointer-events: none;
          display: flex;
          justify-content: space-between;
          &::after {
            content:url("/lock-fill.svg");
            display: inline-block;
            width: 20px;
          }
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
