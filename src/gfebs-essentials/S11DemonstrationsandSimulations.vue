<script setup>
import { useSlidesStore } from '../stores/slides'
import { onBeforeMount } from 'vue'
import slide07 from '../assets/img/essentials-introduction-slide07.svg';

const slideData = {
  title: 'Demonstrations and Simulation',
  type: 'content',
  section: 'Section 1: What to Expect'
}

const slides = useSlidesStore()
const { addSlide } = slides

onBeforeMount(() => {
  addSlide(slideData, 10)
})

</script>

<template>
  <SlideContent v-bind="slideData" :columns="1">
    <p>
      Demonstrations and simulations will assist you in learning specific tasks in GFEBS Essentials. Each demonstration
      takes you through step-by-step procedures while providing supporting instructional guidance along the way.
    </p>
    <p>
      Following each demonstration will be a simulation. In a simulation, you will be given a practice scenario based on
      what you learned in the demonstration. You will receive limited guidance and correct or incorrect feedback
      indicators.
    </p>
    <p><strong>Click</strong> the button on the right to begin.</p>
    <template #column_2>
      <div class="link" @click="">
        <img :src="slide07" :alt="slide07" />
      </div>
    </template>
  </SlideContent>
</template>

<style scoped lang="scss">
.link {
  display: flex;
  height: 100%;
  align-items: center;

  img {
    height: 70%;
  }
}</style>
../../stores/slides