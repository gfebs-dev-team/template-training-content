<script setup>
import Base from '@/components/Slide/Base.vue'
import { useSlidesStore } from '@/stores/slides'
import { shuffleArray } from '@/script/utils.js'
import { onMounted, ref, watch, inject, reactive } from 'vue'
import { storeToRefs } from 'pinia'
import { MatchingDrag, MatchingDrop } from '@/components/Slide/Matching'
import { onDrop, dataHandler, setElems } from '@/components/Slide/Matching/draggable.js'
import AppButton from '@/components/AppButton.vue'

const props = defineProps(['title', 'topic', 'index'])
defineEmits(['reset'])
const slides = useSlidesStore()
const { current, slidesList } = storeToRefs(slides)
const answer = inject('answer')
const slideData = slidesList.value[props.index]
const checkValue = ref(0)

watch(answer, () => {
  switch (isEqual(answer, slideData.answer)) {
    case 0:
      checkValue.value = 0
      break
    case 1:
      checkValue.value = 1
      slidesList.value[current.value].viewed = true
      break
    case 2:
      checkValue.value = 2
      break
  }
  slides.setCheckpoint()
})

function isEqual(obj, aObj) {
  const keys = Object.keys(obj)
    .filter((v) => v != 'undefined')
    .map((x) => x.replace(/[0-9]/gm, ''))

  let equals = keys.length == Object.keys(aObj).length
  let keyEquals = true

  keys.forEach((k) => {
    if (obj[props.index + k] != aObj[k]) {
      keyEquals = false
    }
  })

  if (!equals) {
    return 0
  } else if (equals && keyEquals) {
    return 1
  } else {
    return 2
  }
}

function dropHandle(event, index) {
  const data = dataHandler(event)
  const clone = data
  if (data[0]) {
    clone.shift()
    clone.forEach((a) => {
      answer[a[0]] = a[1]
    })
  } else {
    answer[data[1][0]] = data[1][1].replace(/[0-9]/, '')
  }
  slideData.user = answer
}

const classNames = {
  main: 'order-2 md:order-1',
  2: 'w-2/3 order-1 h-1/2 md:h-full md:order-2 flex-shrink min-h-0 px-8'
}

function reset() {
  const dropArea = document.querySelector(`[data-slideID="${props.index}"][data-index="0"]`)
  const dragItems = document.querySelectorAll(`[data-slideID="${props.index}"].drag`)
  dragItems.forEach((d) => {
    dropArea.appendChild(d)
  })
  checkValue.value = -1
  for (var member in answer) delete answer[member]
}

let dragItems = shuffleArray(Object.keys(slideData.answer))
</script>

<template>
  <Base :title="title" :classNames="classNames">
    <template #main>
      <div class="flex flex-col w-full gap-4">
        <h3><slot name="question"></slot></h3>

        <div class="grid grid-cols-2 gap-4 w-full h-full">
          <div
            class="flex flex-col list-none md:ml-4 gap-2 h-full relative"
            :data-index="0"
            :data-slideID="index"
            @drop.self="onDrop($event)"
            @dragenter.prevent
            @dragover.prevent
          >
            <MatchingDrag
              :active="current.value === props.index"
              :id="index + drag"
              :slideID="index"
              v-for="drag in dragItems"
            >
              {{ drag }}
            </MatchingDrag>
            <div
              class="absolute inset-0 flex flex-col items-center justify-center p-4 pointer-events-none pr-10"
              v-if="checkValue != 0"
            >
              <h2 v-if="checkValue == 2" class="font-bold text-xl text-saffron">Incorrect</h2>
              <p v-if="checkValue == 2" class="text-sm">Review the lesson and try again.</p>

              <h2 v-if="checkValue == 1" class="font-bold text-xl text-saffron">Correct!</h2>
            </div>
          </div>

          <div class="flex flex-col list-none gap-2">
            <MatchingDrop
              :index="index + 1"
              :id="index + drop"
              data-name="drop"
              @data="dropHandle($event, index + 1)"
              @drop="onDrop($event)"
              v-for="(drop, index) in Object.values(slideData.answer)"
            >
              {{ drop }}
            </MatchingDrop>
          </div>
        </div>
        <AppButton
          @click="reset"
          class="border-none bg-saffron absolute bottom-8 text-spacecadet py-2 px-4 w-min self-center"
          >Reset</AppButton
        >
      </div>
    </template>
  </Base>
</template>
