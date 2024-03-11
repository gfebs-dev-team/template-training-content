import { defineStore } from 'pinia'
import { ref, markRaw } from 'vue'
import views from '../gfebs-essentials'

export const useSlidesStore = defineStore('slides', () => {
  const current = ref(0)
  const slidesComp = ref(markRaw(Object.keys(views).map((key) => {
    return views[key]
  })))
  const slidesList = ref(new Array)
  const total = slidesComp.value.length
  const checkpoint = ref(total + 1)
  const sidebarState = ref(false)
  const glossaryState = ref(false)
  const next = ref(true)
  const prev = ref(false)
  

  function addSlide(obj, index) {
    if(slidesList.value[index] == null) {
      slidesList.value.push(obj)
    } 
    //console.log(slidesList.value)
  }

  function toggleSidebar() {
    sidebarState.value = !(sidebarState.value)
  }

  function goNext() {
    current.value++
    console.log(current.value);
  }

  function goPrev() {
    current.value--
    console.log(current.value);
  }

  function disableNext() {
    next.value = false
  }

  function enableNext() {
    next.value = true
  }

  function disablePrev() {
    prev.value = false
  }

  function enablePrev() {
    prev.value = true
  }

  function getTitle() {
    return slidesList.value[current.value].title;
  }

  function setCheckpoint() {
    for (let i = 0; i < total; i++) {
      if (slidesList.value[i].type === 'question' && slidesList.value[i].viewed === false) {
        checkpoint.value = i
        return
      }
    }
    checkpoint.value = total + 1
  }

  return {
    current,
    total,
    slidesList,
    checkpoint,
    next,
    prev,
    sidebarState,
    glossaryState,
    getTitle,
    toggleSidebar,
    addSlide,
    disableNext,
    disablePrev,
    enableNext,
    enablePrev,
    goNext,
    goPrev,
    setCheckpoint,
    slidesComp
  }
})
