<script setup>
import SlideBase from './SlideBase.vue'
defineProps({
  title: String,
  defName: String,
  defParagraph: String
})

const classNames = {
  main: 'h-full'
}
</script>

<template>
  <SlideBase :title="title" :classNames="classNames">
    <template #main>
      <div class="flex flex-col w-full h-full overflow-auto gap-4">
        <div class="flex flex-col px-2 gap-2">
          <slot name="main-text" />
        </div>

        <div
          class="flex flex-col rounded-md bg-spacecadet p-4 h-full overflow-auto w-full gap-2 md:h-1/2"
          v-if="defName != ''"
        >
          <h3 class="text-saffron font-bold text-lg">{{ defName }}</h3>
          <p class="overflow-auto">{{ defParagraph }}</p>
        </div>
      </div>
    </template>

    <!-- Buttons -->
    <div
      class="grid grid-flow-dense grid-cols-2 min-w-0 min-h-0 gap-2 h-full justify-between w-full md:w-4/5 md:h-auto md:grid-cols-1"
    >
      <slot></slot>
    </div>
  </SlideBase>
</template>
