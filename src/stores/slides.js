import { defineStore } from 'pinia'
import { ref, markRaw, computed } from 'vue'
import views from '../views'

export const useSlidesStore = defineStore('slides', () => {
  const slidesComp = ref(
    markRaw(
      Object.keys(views).map((key) => {
        return views[key]
      })
    )
  )

  const testing = true
  const glossaryEnable = true
  const current = ref(0)
  const slidesList = ref(new Array())
  const total = slidesComp.value.length
  const checkpoint = ref(total - 1)
  const sidebarState = ref(false)
  const glossaryState = ref(false)
  const next = computed(() => current.value < checkpoint.value)
  const prev = computed(() => current.value > 0)

  function addSlide(obj, index) {
    if (slidesList.value[index] == null) {
      slidesList.value.push(obj)
    }
  }

  function toggleSidebar() {
    sidebarState.value = !sidebarState.value
  }

  function goNext() {
    current.value++
    //console.log(current.value)
  }

  function goPrev() {
    current.value--
    //console.log(current.value)
  }

  function getTitle() {
    return slidesList.value[current.value].title
  }

  function setCheckpoint() {
    for (let i = 0; i < total; i++) {
      if (slidesList.value[i].type === 'question' && slidesList.value[i].viewed === false) {
        checkpoint.value = i
        return
      }
    }
    checkpoint.value = total - 1
  }

  return {
    testing,
    glossaryEnable,
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
    goNext,
    goPrev,
    setCheckpoint,
    slidesComp
  }
})
