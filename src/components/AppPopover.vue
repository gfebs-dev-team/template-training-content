<script setup>
import AppButton from './AppButton.vue'
import { ref, watch } from 'vue'
import { RiArrowUpSFill } from '@remixicon/vue'

const popover = ref(false)

watch(popover, () => {
  console.log(popover.value)
})
defineProps(['buttonStyle', 'className'])
</script>

<template>
  <div class="top-0 fixed left-0 z-10 w-dvw h-dvh" @click="popover = false" v-if="popover"></div>
  <div class="w-full relative" :class="className">
    <AppButton class="relative w-full" :class="buttonStyle" @click="popover = !popover"
      ><slot name="button-name"></slot
    ></AppButton>
    <div class="w-full left-0 z-30 absolute mt-4" v-if="popover" @click="popover = false">
      <div
        class="relative bg-oxfordblue rounded-md p-1 flex flex-col gap-2 lg:p-2 shadow-lg border-coolgrey border-2 border-opacity-10"
      >
        <slot name="menu"></slot>
      </div>
      <RiArrowUpSFill
        class="absolute left-2 -top-8 fill-oxfordblue pointer-events-none"
        size="64"
      />
    </div>
  </div>
</template>

<style scoped lang="scss"></style>
