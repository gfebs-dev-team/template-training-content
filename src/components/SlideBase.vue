<script setup>
import { onMounted, ref, useSlots, computed } from 'vue'
import { useSlidesStore } from '../stores/slides'
import { storeToRefs } from 'pinia'

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
    class="flex flex-col absolute items-center w-full h-full md:items-stretch p-4 md:p-8 gap-6"
    :class="class"
  >
    <h2
      class="text-2xl md:w-1/2 md:block text-saffron font-bold transition"
      v-if="props.title && props.type != 'section'"
      v-html="props.title" />

    <div class="flex gap-2 h-full" v-if="hasMain || props.columns">
      <div
        class="w-full flex flex-col items-stretch gap-2"
        :class="classNames && classNames.main ? classNames.main : ''"
        v-if="hasMain"
      >
        <slot name="main" />
      </div>
      <div
        class="w-full flex flex-col items-stretch gap-2"
        :class="classNames && classNames[index + 1] ? classNames[index + 1] : ''"
        v-for="index in props.columns"
        :key="index"
      >
        <slot :name="'column_' + (index + 1)" />
      </div>
    </div>
    <slot></slot>
  </div>
</template>

<style scoped lang="scss">
span{
display: inline-block;
white-space: nowrap; 
width: auto;
}
</style>