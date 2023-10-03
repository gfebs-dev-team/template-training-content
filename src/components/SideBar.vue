<script setup>
import { useSlidesStore } from '@/stores/slides'
import { storeToRefs } from 'pinia'
import { watch} from 'vue'
import { onUpdated, onMounted } from 'vue'

const slides = useSlidesStore()
const { current, checkpoint, slidesList, sidebarState } = storeToRefs(slides)
let links = slidesList.value
let sections = new Array()

watch(slidesList, () => {
  links = slidesList.value
})

function goToSlide(i) {
  current.value = i
  slides.toggleSidebar()
}

function setLinks() {
  document.querySelectorAll('#sidebar .links li a').forEach((link, index) => {
    if (index > checkpoint.value) {
      link.classList.add('disabled')
    } else {
      link.classList.remove('disabled')
    }
  })
}

onMounted(() => {
  links = slidesList.value
  links.forEach((slide) => {
    sections.push(slide.section)
  })

  sections = sections.filter((value, index, array) => {
    return array.indexOf(value) === index
  })

  console.log(sections)
})

onUpdated(() => {
  slides.setCheckpoint()
  setLinks()
})

watch(checkpoint, () => {
  slides.setCheckpoint()
  setLinks()
})

defineProps(['title'])
</script>

<template>
  <div id="sidebar" :class="{ active: sidebarState }">
    <div class="links">
      <div class="section" v-for="(section, index) in sections" :key="index">
        <h2 class="section-title">{{ section }}</h2>
        <li v-for="(slide) in links.filter((link)=>{return link.section === section})" :key="slidesList.indexOf(slide)">
          <a :class="[{ active: current === slidesList.indexOf(slide)}, slide.type]" @click="goToSlide(slidesList.indexOf(slide))">
            {{ slide.title }}
          </a>
        </li>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
#sidebar {
  display: flex;
  position: absolute;
  height: 100%;
  bottom: 0;
  left: -24rem;
  width: 24rem;
  z-index: 99;
  background-color: var(--delft-blue);
  flex-direction: column;
  transition: ease-in-out 0.7s;

  &.active {
    left: 0;
    transition: ease-in-out 0.7s;
  }

  h1 {
    text-transform: uppercase;
    font-weight: bold;
    color: white;
    line-height: 1.2em;
    padding: 0.1em 0.5em;
  }

  .links {
    display: flex;
    flex-direction: column;
    padding: 2rem;
    gap: 2rem;
    color: white;
    height: 100%;
    overflow-y: scroll;

    .section {
      display: flex;
      flex-direction: column;
      gap: 0.75rem;
      h2 {
        font-weight: bold;
        font-size: var(--m0);
        color: var(--color-text-dark);
        padding-bottom: .25rem;
      }

    }

    li {
      list-style-type: none;
      display: flex;

      a {
        text-decoration: none;
        width: 100%;
        padding-left: 1rem;
        color: white;
        font-size: var(--m-1);
        font-weight: 700;

        &.active {
          color: var(--color-accent);
        }
        &.disabled {
          color: grey;
          pointer-events: none;
          display: flex;
          justify-content: space-between;
          align-items: center;
          &::after {
            content: '';
            background-image: url("data:image/svg+xml,%3Csvg width='20' height='20' version='1.1' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='m17 8h1c0.5523 0 1 0.4477 1 1v10c0 0.5523-0.4477 1-1 1h-16c-0.55228 0-1-0.4477-1-1v-10c0-0.5523 0.44772-1 1-1h1v-1c0-3.866 3.134-7 7-7 3.866 0 7 3.134 7 7zm-2 0v-1c0-2.7614-2.2386-5-5-5-2.7614 0-5 2.2386-5 5v1zm-6 4v4h2v-4z' fill='%23fff'/%3E%3C/svg%3E");
            display: block;
            background-size: 16px 16px;
            height: 16px;
            width: 16px;
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
