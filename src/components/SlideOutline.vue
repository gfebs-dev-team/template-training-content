<script setup>
import SlideBase from './SlideBase.vue'
import { ref } from 'vue'
import slide06 from '../assets/img/essentials-introduction-slide06.svg'
const props = defineProps(['title', 'sections', 'twClasses'])
const activeSection = ref(0)
</script>

<template>
  <SlideBase>
    <ol class="bg-spacecadet hidden p-8 md:flex flex-col justify-between md:w-2/5">
      <li
        :class="[{ 'text-saffron': activeSection == index }, 'tbsection_' + index]"
        v-for="index in sections"
        :key="index"
      >
        <slot :name="'tablesection_' + index" />
      </li>
    </ol>
    <div class="bg-spacecadet p-8 flex w-full h-full relative">
      <div
        class="flex flex-col gap-2"
        :class="twClasses && twClasses[main] ? twClasses.main : ''"
        v-if="activeSection == 0"
      >
        <slot name="mainsection_0"></slot>
      </div>
      <template v-for="index in sections + 1" :key="index">
        <div
          class="flex flex-col gap-2"
          :class="twClasses && twClasses[`tw_ ${index}`] ? twClasses[`tw_ ${index}`] : ''"
          v-if="activeSection == index"
        >
          <slot :name="'mainsection_' + index" />
        </div>
      </template>
      <div class="grid absolute bottom-4 left-0 right-0 grid-cols-2 p-4">
        <button
          class="font-bold fill-aliceblue size-20 rounded-full bg-richblack bg-opacity-60 p-2 m-2 back"
          @click="activeSection -= 1"
          v-if="activeSection > 0"
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
            <path
              d="M7.82843 10.9999H20V12.9999H7.82843L13.1924 18.3638L11.7782 19.778L4 11.9999L11.7782 4.22168L13.1924 5.63589L7.82843 10.9999Z"
            ></path>
          </svg>
        </button>
        <button
          class="font-bold fill-aliceblue size-20 rounded-full bg-richblack bg-opacity-60 p-2 m-2 col-start-2 justify-self-end next"
          @click="activeSection += 1"
          v-if="activeSection < props.sections + 1"
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
            <path
              d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"
            ></path>
          </svg>
        </button>
      </div>
      <img class="target absolute size-20 -right-7 -top-7" :src="slide06" />
    </div>
  </SlideBase>
</template>
