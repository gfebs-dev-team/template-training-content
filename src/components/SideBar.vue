<script setup>
import { useSlidesStore } from '@/stores/slides'
import { storeToRefs } from 'pinia'
import { watch } from 'vue'
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
  document.querySelectorAll('#sidebar .links a').forEach((link, index) => {
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

  //console.log(sections)
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
        <template
          v-for="slide in links.filter((link) => {
            return link.section === section
          })"
          :key="slidesList.indexOf(slide)"
        >
          <a
            :class="[{ active: current === slidesList.indexOf(slide) }, slide.type]"
            @click="goToSlide(slidesList.indexOf(slide))"
          >
            {{ slide.title }}
          </a>
        </template>
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
  left: calc(clamp(18rem, 3.2308rem + 23.0769vw, 24rem) * -1);
  width: clamp(18rem, 3.2308rem + 23.0769vw, 24rem);
  z-index: 99;
  background-color: $delft-blue;
  flex-direction: column;
  transition: ease-in-out 0.7s;
  --font-size-heading: clamp($m-1, 0.3846rem + 0.9615vw, $m0);
  --font-size-body: clamp(0.88rem, 0.5846rem + 0.4615vw, 1rem);

  &.active {
    left: 0;
    transition: ease-in-out 0.7s;
  }

  h1 {
    text-transform: uppercase;
    font-weight: bold;
    color: white;
    line-height: 1.2em;
    padding: $p-2 $p-1;
  }

  .links {
    display: flex;
    flex-direction: column;
    padding: $p3;
    gap: $p3;
    color: white;
    height: 100%;
    overflow-y: scroll;
    scrollbar-color: $harvest-gold $delft-blue;

    .section {
      display: flex;
      flex-direction: column;
      gap: $p0;
      h2 {
        font-weight: bold;
        font-size: var(--font-size-heading);
        color: var(--color-text-dark);
        padding-bottom: $p-2;
      }
    }

    a {
      text-decoration: none;
      width: 100%;
      padding-left: $p1;
      color: white;
      font-size: var(--font-size-body);
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
        color: var(--color-accent);
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
    padding: 0;
    color: white;
    &:hover {
      cursor: pointer;
    }
  }
}
</style>
