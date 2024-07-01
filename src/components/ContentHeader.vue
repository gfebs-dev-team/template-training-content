<script setup>
import AppButton from './AppButton.vue'
import AppPopover from './AppPopover.vue'
import AppProgress from './AppProgress.vue'
import { RiMenuLine, RiCloseLine, RiDatabaseLine } from '@remixicon/vue'
import { useSlidesStore } from '@/stores/slides'
import { storeToRefs } from 'pinia'

const slides = useSlidesStore()
const { current, glossaryState } = storeToRefs(slides)
const { total, goNext, goPrev } = slides

function windowClose() {
  window.close()
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
      <img class="h-10 md:h-12 xl:h-24" src="/crest.svg" />
      <div class="flex flex-col gap-1 xl:gap-2">
        <h1
          class="max-w-56 text-balance text-sm font-bold uppercase text-aliceblue md:text-base xl:max-w-64 xl:text-xl"
        >
          Financial Management School
        </h1>
        <h2
          class="hidden text-balance text-sm font-bold uppercase text-saffron xl:inline xl:text-base"
        >
          GFEBS {{ courseData.courseCode }}:
          {{ courseData.courseTitle }}
        </h2>
      </div>
      <div class="flex flex-col gap-4 justify-self-end xl:w-2/3">
        <AppProgress class="hidden xl:block" />
        <div
          class="grid grid-rows-2 sm:grid-rows-1 sm:grid-cols-2 w-full justify-end gap-1 md:gap-4"
        >
          <AppPopover
            buttonStyle="relative max-w-36 h-full justify-self-end border-transparent bg-oxfordblue p-1 px-2 text-xs text-aliceblue md:text-sm flex xl:w-full xl:max-w-none xl:text-base"
          >
            <template #button-name>
              <RiDatabaseLine class="size-5 fill-aliceblue" /> Resources
            </template>
            <template #menu>
              <a
                class="font-bold p-2 rounded hover:bg-masblue transition-colors text-xs text-aliceblue md:text-sm xl:w-full xl:max-w-none xl:text-base"
                @click="glossaryState = !glossaryState"
                >Glossary</a
              >
              <a
                class="font-bold p-2 rounded hover:bg-masblue transition-colors text-xs text-aliceblue md:text-sm xl:w-full xl:max-w-none xl:text-base"
                >GFEBS Production PSW</a
              >
            </template>
          </AppPopover>
          <AppButton
            class="w-full justify-self-end border-transparent bg-oxfordblue p-1 px-2 text-xs text-aliceblue md:text-sm xl:w-full xl:max-w-none xl:text-base"
            @click="windowClose()"
          >
            <RiCloseLine class="size-6 fill-aliceblue" /> EXIT
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
      ></RiMenuLine>
      <h2 class="text-balance text-xs font-bold uppercase text-coolgrey md:text-sm xl:hidden">
        GFEBS {{ courseData.courseCode }}:
        {{ courseData.courseTitle }}
      </h2>
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
          :disabled="!slides.next"
        >
          Next
        </AppButton>
      </div>
    </div>
  </div>
</template>
