<script setup>
import AppButton from '@/components/AppButton.vue'
import AppProgress from './Progress.vue'
import { useSlidesStore } from '@/stores/slides'
import { storeToRefs } from 'pinia'

const slides = useSlidesStore()
const { current } = storeToRefs(slides)
const { total, goNext, goPrev, testing } = slides

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
  <AppProgress class="xl:hidden" />
  <nav class="w-full xl:hidden">
    <div
      class="h-18 flex items-center justify-between bg-spacecadet p-4 text-xs text-aliceblue md:h-12"
    >
      <AppButton
        class="h-fit max-w-fit border-2 border-aliceblue p-1 px-4 disabled:border-coolgrey disabled:text-coolgrey"
        @click="goPrev()"
        :disabled="!slides.prev"
      >
        Back
      </AppButton>
      <span class="text-sm font-bold">{{ current + 1 }}/{{ slides.total }}</span>
      <AppButton
        class="h-fit max-w-fit border-2 border-aliceblue p-1 px-4 disabled:border-coolgrey disabled:text-coolgrey"
        @click="goNext()"
        :disabled="disable()"
      >
        Next
      </AppButton>
    </div>
  </nav>
</template>
