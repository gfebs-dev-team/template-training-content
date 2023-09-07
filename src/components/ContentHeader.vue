<script setup>
import { watch } from 'vue'
import { useSlidesStore } from '@/stores/slides'
import { storeToRefs } from 'pinia'

const slides = useSlidesStore()
const { current } = storeToRefs(slides)
const { total } = slides
let progress = `width: ${(current.value + 1 / total) * 100}%`

watch(current, () => {
  progress = `width: ${((current.value + 1) / total) * 100}%`
  document.getElementById('progress')?.setAttribute('style', `${progress}`)
})

function toggleSidebar() {
  if (document.getElementById('sidebar')?.hasAttribute('style')) {
    document.getElementById('sidebar')?.removeAttribute('style')
  } else {
    document.getElementById('sidebar')?.setAttribute('style', 'display:none')
  }
}

function windowClose() {
  window.close()
}
</script>

<template>
  <nav>
    <div class="heading">
      <img id="heading-shield" src="/shield-01.png" />
      <div class="heading-text">
        <h1 id="heading-title">
          Financial<br />
          Management School
        </h1>
        <h2 id="heading-subtitle">
          <slot></slot>
        </h2>
      </div>
    </div>
    <div class="tracker">
      <div class="progress-bar">
        <div id="progress" :style="progress"></div>
      </div>
      <div class="buttons">
        <div id="heading-index" class="button" @click="toggleSidebar">INDEX</div>
        <div id="heading-exit" class="button" @click="windowClose()">X EXIT</div>
      </div>
    </div>
  </nav>
</template>

<style scoped lang="scss">
nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
  align-self: stretch;
  .heading {
    display: flex;
    align-items: center;
    gap: 3rem;
    #heading-shield {
      width: 8rem;
      height: 8rem;
    }

    .heading-text {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      gap: 0.75rem;
    }
  }

  .tracker {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-end;
    gap: 3rem;
    align-self: stretch;
    .progress-bar {
      width: 25rem;
      height: 1.75rem;
      background-color: var(--mas-blue);
    }
    .buttons {
      display: flex;
      justify-content: flex-end;
      align-items: flex-start;
      gap: 1.5rem;
      align-self: stretch;
    }
  }
}
</style>
