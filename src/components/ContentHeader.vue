<script setup>
import AppButton from './AppButton.vue'
import AppPopover from './AppPopover.vue'
import AppProgress from './AppProgress.vue'
import { RiMenuLine, RiCloseLine, RiDatabaseLine } from '@remixicon/vue'
import { useSlidesStore } from '@/stores/slides'
import { storeToRefs } from 'pinia'

const slides = useSlidesStore()
const { current, glossaryState } = storeToRefs(slides)
const { total, goNext, goPrev, glossaryEnable, testing } = slides

function windowClose() {
  window.close()
}

function openLink(link) {
  window.open(link, '_blank')
}

function disable() {
  var dis = true
  if (testing) {
    dis = !(current.value < total - 1)
  } else {
    dis = !slides.next
  }

  return dis
}

defineProps(['courseData'])
</script>

<template>
  <div
    class="z-10 box-content flex w-full flex-col items-center justify-end bg-spacecadet xl:gap-4 xl:max-w-[1200px]"
  >
    <div
      class="grid h-min sm:h-20 w-full grid-cols-[auto_auto_1fr] items-center gap-4 p-4 xl:h-auto"
    >
      <img class="h-8 md:h-12 xl:h-16" src="/gfebs_white.png" />
      <div class="flex flex-col gap-1">
        <h1 class="text-balance text-sm font-bold uppercase text-aliceblue md:text-base xl:text-xl">
          GFEBS {{ courseData.courseCode }}
          {{ courseData.courseTitle }}
        </h1>
        <h2 class="text-balance text-sm font-bold uppercase text-saffron xl:inline xl:text-base">
          {{ courseData.topic }}
        </h2>
      </div>
      <div class="flex flex-col gap-4 justify-self-end xl:w-2/3">
        <AppProgress class="hidden xl:block" />
        <div
          class="grid grid-rows-2 sm:grid-rows-1 sm:grid-cols-2 w-full justify-end gap-1 md:gap-4"
        >
          <AppPopover
            class-name="order-2 sm:order-none"
            buttonStyle="relative max-w-36 h-full justify-self-end border-masblue border-3 text-coolgrey p-1 px-2 text-xs text-aliceblue lg:text-sm flex xl:w-full xl:max-w-none "
          >
            <template #button-name>
              <RiDatabaseLine class="size-5 fill-coolgrey" /> Resources
            </template>
            <template #menu>
              <a
                v-if="glossaryEnable"
                class="font-bold p-2 rounded hover:bg-masblue transition-colors text-xs text-aliceblue md:text-sm xl:w-full xl:max-w-none"
                @click="glossaryState = !glossaryState"
                >Glossary</a
              >
              <a
                class="font-bold p-2 rounded hover:bg-masblue transition-colors text-xs text-aliceblue md:text-sm xl:w-full xl:max-w-none"
                @click="openLink('https://gfebs.army.mil/gm')"
                >GFEBS Production PSW</a
              >
            </template>
          </AppPopover>
          <AppButton
            class="w-full justify-self-end border-masblue border-3 text-saffron bg-transparent p-1 px-2 text-xs md:text-sm xl:w-full xl:max-w-none"
            @click="windowClose()"
          >
            <RiCloseLine class="size-6 fill-saffron" /> EXIT
          </AppButton>
        </div>
      </div>
    </div>
    <div
      class="grid h-16 w-full grid-cols-[1.5rem_1fr_auto] items-center gap-4 border-t border-masblue p-4 shadow-md transition md:h-12 md:py-1 xl:h-16 xl:rounded-t-lg xl:border-t-0 xl:bg-masblue"
    >
      <RiMenuLine
        @click="$emit('toggleSidebar')"
        class="size-6 fill-coolgrey p-1 hover:cursor-pointer xl:size-8"
      >
      </RiMenuLine>

      <div class="hidden h-12 items-center justify-end gap-4 text-xs text-aliceblue xl:flex">
        <AppButton
          class="h-fit max-w-fit border-2 border-aliceblue p-2 px-4 disabled:border-coolgrey disabled:text-coolgrey"
          @click="goPrev()"
          :disabled="!slides.prev"
        >
          Back
        </AppButton>
        <AppButton
          class="h-fit max-w-fit border-2 border-aliceblue p-2 px-4 disabled:border-coolgrey disabled:text-coolgrey"
          @click="goNext()"
          :disabled="disable()"
        >
          Next
        </AppButton>
      </div>
    </div>
  </div>
</template>
