<script setup>
import SlideBase from './SlideBase.vue'
import { useSlidesStore } from '@/stores/slides'
import { onUpdated, ref, watch } from 'vue'
import { storeToRefs } from 'pinia'
import { inject } from 'vue'

const slides = useSlidesStore()
const { current, slidesList } = storeToRefs(slides)
const image = ref('qanda.png')
defineProps(['title', 'topic'])

const answer = inject('answer')

onUpdated(() => {
  if (slidesList.value[current.value].viewed === false) {
    slides.disableNext()
  }
})

watch(answer, () => {
  if (answer.value === slidesList.value[current.value].answer) {
    image.value = 'correct.png'
    slidesList.value[current.value].user = answer.value
    slidesList.value[current.value].viewed = true
    if (current.value <= slides.total) {
      slides.enableNext()
    } else {
      slides.disableNext()
    }
  } else {
    image.value = 'incorrect.png'
    slides.disableNext()
    slidesList.value[current.value].user = answer.value
  }
  slides.setCheckpoint()
})
</script>

<template>
  <SlideBase :title="title" :columns="1">
    <template #main>
      <div class="content-box">
        <h3><slot name="question"></slot></h3>

        <div class="options">
          <slot name="options"></slot>
        </div>
      </div>
    </template>

    <template #column_2>
      <img :src="image" />
    </template>
  </SlideBase>
</template>

<style scoped lang="scss">
.content-box {
  display: flex;
  width: 100%;
  flex-direction: column;
  gap: 1.5rem;
  .options {
    display: flex;
    gap: 0.5em;
    flex-direction: column;
    list-style-type: none;
    margin-right: 1rem;
    z-index: 1;
    :slotted(li.choice) {
      //box-sizing: border-box;
      display: flex;
      width: 100%;
      gap: 1em;
      border: 2px solid transparent;
      border-radius: 10px;
      transition-duration: 0.2s;

      input[type='radio'] {
        margin-left: 0.5em;
        accent-color: var(--color-accent);
      }

      label {
        //cursor: pointer;
        width: 100%;
        height: 100%;
        padding: 0.5em;
      }

      &.checked {
        background-color: var(--color-accent);
        border-radius: 10px;
        transition-duration: 0.2s;
        input[type='radio'] {
          accent-color: var(--oxford-blue);
          mix-blend-mode: multiply;
        }
        input[type='radio'] + label {
          background-color: var(--color-accent);
          color: var(--space-cadet);
          padding: 0.5em;
          font-weight: bold;
        }
      }

      &:hover {
        color: var(--color-accent);
        border: 2px solid var(--color-accent);
        transition-duration: 0.2s;

        input[type='radio'] {
          fill: var(--color-accent);
        }
        label {
          font-weight: bold;
        }
      }
    }
  }
}
</style>
