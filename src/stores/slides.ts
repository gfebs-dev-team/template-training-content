import { defineStore } from 'pinia'
import { ref } from 'vue'
import slides from '../assets/slides.json'

export const useSlidesStore = defineStore('slides', () => {
  const current = ref(0)
  const totalSlides = slides.length
  const slidesList = ref(slides)
  const checkpoint = ref(totalSlides + 1);

  function next() {
    current.value++
  }

  function prev() {
    current.value--
  }

  function setTrue() {
    slidesList.value[current.value].viewed = true;
  }
  function setFalse() {
    slidesList.value[current.value].viewed = false;
  }

  function setCheckpoint() {
    for (let i = 0; i < totalSlides; i++) {
      if (slidesList.value[i].type === 'question' && slidesList.value[i].viewed === false) {
        checkpoint.value = i
        return;
      }
    }
  }

  return {current, totalSlides, slidesList, checkpoint, next, prev, setTrue, setFalse, setCheckpoint }
})
