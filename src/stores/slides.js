import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useSlidesStore = defineStore('slides', () => {
  const current = ref(0)
  const slidesList = ref(new Array)
  const total = slidesList.value.length
  const checkpoint = ref(total + 1)
  const next = ref(false)
  const prev = ref(true)

  function addSlide(obj) {
    if(slidesList.value[current.value] == null) {
      slidesList.value[current.value] = obj
    } 
  }

  function goNext() {
    current.value++
  }

  function goPrev() {
    current.value--
  }

  function disableNext() {
    next.value = true
  }

  function enableNext() {
    next.value = false
  }

  function disablePrev() {
    prev.value = true
  }

  function enablePrev() {
    prev.value = false
  }

  function setCheckpoint() {
    for (let i = 0; i < total; i++) {
      if (slidesList.value[i].type === 'question' && slidesList.value[i].viewed === false) {
        checkpoint.value = i
        console.log(slidesList.value[i].type)
        console.log(slidesList.value[i].viewed)
        console.log('Checkpoint: ' + checkpoint.value)
        return
      }
    }
    checkpoint.value = total + 1
    console.log('Checkpoint: ' + checkpoint.value)
  }

  return {
    current,
    total,
    slidesList,
    checkpoint,
    next,
    prev,
    addSlide,
    disableNext,
    disablePrev,
    enableNext,
    enablePrev,
    goNext,
    goPrev,
    setCheckpoint
  }
})
