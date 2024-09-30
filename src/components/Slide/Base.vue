<script setup>
import { onMounted, ref, useSlots, computed } from 'vue'
import { twMerge } from 'tailwind-merge'
import { storeToRefs } from 'pinia'
import { useSlidesStore } from '@/stores/slides'

const slides = useSlidesStore()
const { current } = storeToRefs(slides)
const props = defineProps(['title', 'columns', 'classNames', 'class', 'type'])
const hasMain = ref(false)

const id = computed(() => current.value + 1)
onMounted(() => {
  hasMain.value = useSlots().main ? true : false
})
</script>
<template>
  <div
    class="flex flex-col absolute inset-0 items-center w-full h-full md:items-stretch p-4 md:p-8 gap-6"
    :class="class"
  >
    <h2
      class="text-2xl md:w-1/2 md:block text-saffron font-bold transition"
      v-if="props.title && props.type != 'section'"
      v-html="props.title"
    />

    <div class="flex gap-2 h-full min-h-0" v-if="hasMain || props.columns">
      <div
        :class="
          twMerge(
            'w-full flex flex-col items-stretch gap-4',
            classNames && classNames.main ? classNames.main : ''
          )
        "
        v-if="hasMain"
      >
        <slot name="main" />
      </div>
      <div
        :class="
          twMerge(
            'w-full flex flex-col items-stretch gap-4',
            classNames && classNames[index + 1] ? classNames[index + 1] : ''
          )
        "
        v-for="index in props.columns"
        :key="index"
      >
        <slot :name="'column_' + (index + 1)" />
      </div>
    </div>
    <slot></slot>
  </div>
</template>

<style>
.text-group {
  display: inline-block;
  white-space: nowrap;
  width: auto;
}
</style>
