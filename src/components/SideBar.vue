<script setup lang="ts">
import { RouterLink } from 'vue-router'
import slides from '../router/slides.json'
defineProps<{
  title?: string
}>()

function closeSideBar() {
    document.getElementById("sidebar")?.setAttribute
}
</script>

<template>
  <div id="sidebar">
    <h1>Index</h1>
    <div class="links">
      <h2>{{ title }}</h2>
      <li v-for="(slide, index) in slides" :key="index">
        <RouterLink :to="slide.router">
          {{ slide.name }}
        </RouterLink>
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
    padding: 0 0.5em;
    background-color: #009bd1;
  }

  .links {
    padding: 1em;
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
      margin-left: 1em;

      a {
        text-decoration: none;
        color: white;
        font-size: 1.2em;
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
