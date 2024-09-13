<script setup>
import SlideBase from './Base.vue'
import { ref } from 'vue'
import { RiArrowLeftWideLine, RiArrowRightWideLine } from '@remixicon/vue'
import slide06 from '@/assets/img/essentials-introduction-slide06.svg'
const props = defineProps(['title', 'sections', 'twClasses'])
const activeSection = ref(0)
</script>

<template>
  <SlideBase>
    <div class="flex h-full w-full">
      <ol class="bg-spacecadet hidden p-8 m-2 md:flex flex-col justify-between md:w-2/5">
        <li
          :class="[{ 'text-saffron': activeSection == index }, 'tbsection_' + index]"
          v-for="index in sections"
          :key="index"
        >
          <slot :name="'tablesection_' + index" />
        </li>
      </ol>
      <div class="p-2 px-8 relative w-full h-full">
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

          <img class="target absolute size-20 -right-7 -top-7" :src="slide06" />
        </div>
        <div class="grid absolute w-full h-full top-0 left-0 grid-cols-2 p-0">
          <button
            class="font-bold fill-aliceblue h-full back"
            @click="activeSection -= 1"
            v-if="activeSection > 0"
          >
            <RiArrowLeftWideLine size="32" />
          </button>
          <button
            class="font-bold col-start-2 place-self-end fill-aliceblue h-full back"
            @click="activeSection += 1"
            v-if="activeSection < props.sections + 1"
          >
            <RiArrowRightWideLine size="32" />
          </button>
        </div>
      </div>
    </div>
  </SlideBase>
</template>
