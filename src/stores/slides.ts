import { defineStore } from 'pinia'
import { ref } from 'vue'
import slides from '../assets/slides.json'

export const useSlidesStore = defineStore('slides', () => {
  const current = ref(0)
  const totalSlides = slides.length
  const slidesList = ref(slides)
  const checkpoint = ref(totalSlides + 1);
  const next = ref(false);
  const prev = ref(true);

  function goNext() {
    current.value++
  }

  function goPrev() {
    current.value--
  }

  function disableNext() {
    next.value = true;
  }

  function enableNext() {
    next.value = false;
  }

  function disablePrev() {
    prev.value = true;
  }

  function enablePrev() {
    prev.value = false;
  }

  function setTrue() {
    slidesList.value[current.value].viewed = true;
    //console.log(slidesList.value[current.value]);
  }
  function setFalse() {
    slidesList.value[current.value].viewed = false;
    //console.log(slidesList.value[current.value].viewed);
  }

  function setCheckpoint() {
    for (let i = 0; i < totalSlides; i++) {
      if (slidesList.value[i].type === 'question' && slidesList.value[i].viewed === false) {
        checkpoint.value = i
        console.log(slidesList.value[i].type);
        console.log(slidesList.value[i].viewed);
        console.log("Checkpoint: " + checkpoint.value);
        return;
      }
    } checkpoint.value = totalSlides +1;
    console.log("Checkpoint: " + checkpoint.value);
    
  }

  return {current, totalSlides, slidesList, checkpoint, next, prev, disableNext, disablePrev, enableNext, enablePrev, goNext, goPrev, setTrue, setFalse, setCheckpoint }
})
