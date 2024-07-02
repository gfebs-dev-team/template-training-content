<script setup>
import SlideBase from './SlideBase.vue'
import { useSlidesStore } from '@/stores/slides'
import { onUpdated, ref, watch } from 'vue'
import { storeToRefs } from 'pinia'
import correct from '../assets/img/gfebs-correct.svg'
import incorrect from '../assets/img/gfebs-incorrect.svg'
import qanda from '../assets/img/gfebs-qanda.svg'
import { inject } from 'vue'

const slides = useSlidesStore()
const { current, slidesList } = storeToRefs(slides)
const image = ref(qanda)
defineProps(['title', 'topic'])

const answer = inject('answer')

watch(answer, () => {
  if (answer.value === slidesList.value[current.value].answer) {
    image.value = correct
    slidesList.value[current.value].user = answer.value
    slidesList.value[current.value].viewed = true
  } else {
    image.value = incorrect
    slidesList.value[current.value].user = answer.value
  }
  slides.setCheckpoint()
})

const classNames = {
  main: 'order-2 md:order-1',
  2: 'w-2/3 order-1 h-1/2 md:h-full md:order-2 flex-shrink min-h-0 px-8'
}
</script>

<template>
  <SlideBase :title="title" :columns="1" :classNames="classNames">
    <template #main>
      <div class="flex flex-col w-full gap-4">
        <h3><slot name="question"></slot></h3>

        <div class="flex flex-col list-none md:ml-4 gap-2">
          <slot name="options"></slot>
        </div>
      </div>
    </template>

    <template #column_2>
      <img class="max-h-1/2 object-contain h-full" :src="image" />
    </template>
  </SlideBase>
</template>
