<script setup>
import Base from '@/components/Slide/Base.vue'
import { useSlidesStore } from '@/stores/slides'
import { onUpdated, ref, watch, inject } from 'vue'
import { storeToRefs } from 'pinia'
import correct from './assets/gfebs-correct.svg'
import incorrect from './assets/gfebs-incorrect.svg'
import qanda from './assets/gfebs-qanda.svg'

defineProps(['title', 'topic'])
const slides = useSlidesStore()
const { current, slidesList } = storeToRefs(slides)
const image = ref(qanda)
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
  <Base :title="title" :columns="1" :classNames="classNames">
    <template #main>
      <div class="flex flex-col w-full gap-4">
        <h3><slot name="question"></slot></h3>

        <div class="flex flex-col list-none md:ml-4 gap-2">
          <slot name="options"></slot>
        </div>
      </div>
    </template>

    <template #column_2>
      <img class="max-h-1/2 h-full md:h-auto md:p-8 object-contain md:pt-0" :src="image" />
    </template>
  </Base>
</template>
