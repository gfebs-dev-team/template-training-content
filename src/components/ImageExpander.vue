<script setup>
import { ref } from 'vue'

const toggleState = ref(false)

function toggleSize() {
  toggleState.value = !toggleState.value
  const slideArea = document.querySelector('.slide-area')
  if (toggleState.value) {
    slideArea.style.overflow = 'hidden'
  } else {
    slideArea.style.overflow = 'auto'
  }
}
</script>

<template>
  <div :class="{ modal: toggleState, expanded: toggleState }">
    <div @click="toggleSize">
      <slot />
    </div>
  </div>
</template>

<style scoped lang="scss">
.modal {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 100;
  height: 100vh;
  width: 100vw;
  display: flex;
  align-items: center;
  justify-items: center;
  justify-content: center;
  align-content: center;
  text-align: center;
  justify-self: center;
  text-justify: auto;
  background: rgba(11, 21, 40, 0.6);
  backdrop-filter: blur(5px);
  -webkit-backdrop-filter: blur(5px);
}

.expanded {
  margin: auto;
  background: rgba(11, 21, 40, 0.6);
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  z-index: 99;
  overflow: hidden;
}

img[slot] {
  object-fit: contain;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  max-width: 80vw;
  max-height: 80vh;
  overflow: hidden;
}
</style>
