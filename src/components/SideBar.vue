<script setup>
import { useSlidesStore } from '@/stores/slides'
import { storeToRefs } from 'pinia'
import { RiLockFill } from '@remixicon/vue'
import { onUpdated, onMounted, watchEffect, watch } from 'vue'

const slides = useSlidesStore()
const { current, currIndex, checkpoint, slidesList, sidebarState } = storeToRefs(slides)
let links = slidesList.value
let sections = new Array()

watchEffect(() => {
  links = slidesList.value
})

function goToSlide(i) {
  if (i < checkpoint.value + 1) {
    current.value = i
    slides.toggleSidebar()
  }
}

function setLinks() {
  document.querySelectorAll('#sidebar .links a').forEach((link, index) => {
    if (index > checkpoint.value) {
      link.setAttribute('disabled', '')
    } else {
      link.removeAttribute('disabled')
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
})

onUpdated(() => {
  //slides.setCheckpoint()
  //setLinks()
})

watch(current, (curr) => {
  //slides.setCheckpoint()
  setLinks()
})

defineProps(['title'])
</script>

<template>
  <div
    id="sidebar"
    class="absolute z-10 flex h-full w-1/3 bg-spacecadet p-6 transition xl:bg-masblue overflow-auto"
    v-bind:class="{ '-translate-x-full': !sidebarState }"
  >
    <div class="links flex w-full flex-col gap-2 xl:gap-4">
      <div
        class="section flex flex-col gap-2 pr-2"
        v-for="(section, index) in sections"
        :key="index"
      >
        <h2 class="section-title font-bold text-lg xl:text-xl">{{ section }}</h2>
        <div
          class="flex justify-between"
          v-for="slide in links.filter((link) => {
            return link.section === section
          })"
          :key="slidesList.indexOf(slide)"
        >
          <a
            class="w-full text-sm text-aliceblue xl:text-base hover:font-semibold hover:cursor-pointer"
            :class="{
              'text-saffron font-semibold': current == slidesList.indexOf(slide),
              'text-coolgrey cursor-none': slidesList.indexOf(slide) > checkpoint
            }"
            @click="goToSlide(slidesList.indexOf(slide))"
            :disabled="slidesList.indexOf(slide) > checkpoint.value"
          >
            {{ slidesList.indexOf(slide) + 1 + '. ' + slide.title }}
          </a>
          <RiLockFill class="size-4 fill-aliceblue" v-if="slidesList.indexOf(slide) > checkpoint" />
        </div>
      </div>
    </div>
  </div>
</template>
