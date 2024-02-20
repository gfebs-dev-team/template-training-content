<script setup>
import AppButton from './AppButton.vue'
import { ref, watch } from 'vue'

const popover = ref(false)

watch(popover, () => {
  console.log(popover.value)
})
defineProps(['buttonStyle'])
</script>

<template>
  <div class="outside" @click="popover = false" v-if="popover"></div>
  <AppButton class="toggleButton" v-bind="buttonStyle" @click="popover = !popover"
    ><slot name="button-name"></slot
  ></AppButton>
  <div class="menu" v-if="popover" @click="popover = false">
    <slot name="menu"></slot>
  </div>
</template>

<style scoped lang="scss">
.outside {
  top: 0;
  left: 0;
  z-index: 1;
  position: fixed;
  width: 100vw;
  height: 100vh;
}

.toggleButton {
  position: relative;
}
.menu {
  position: absolute;
  width: max-content;
  max-width: 20rem;
  z-index: 1;
  margin-top: 3.5rem;
}
</style>
