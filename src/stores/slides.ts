import { defineStore } from 'pinia'
import { ref } from 'vue'
import slides from '../assets/slides.json'

export const useSlidesStore = defineStore('slides', () => {
  const current = ref(0)
  const totalSlides = slides.length
  const slidesList = slides
  const checkpoint = ref(totalSlides + 1);

  function next() {
    current.value++
  }

  function prev() {
    current.value--
  }

  function setTrue() {
    slidesList[current.value].answer = true;
  }
  function setFalse() {
    slidesList[current.value].answer = false;
  }

  return {current, totalSlides, slidesList, next, prev, setTrue, setFalse }
})
