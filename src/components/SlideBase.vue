<script setup>
const props = defineProps(['title', 'columns', 'classNames', 'class'])
import { onMounted, ref, useSlots } from 'vue'
const hasMain = ref(false)

onMounted(() => {
  hasMain.value = useSlots().main ? true : false
})
</script>
<template>
  <div
    class="flex flex-col absolute items-center w-full h-full md:flex-row md:items-stretch p-4 md:p-8 gap-6"
    :class="class"
  >
    <h2 class="text-2xl w-full text-saffron font-bold md:hidden">{{ props.title }}</h2>
    <div
      class="w-full flex flex-col items-stretch gap-2"
      :class="classNames && classNames.main ? classNames.main : ''"
      v-if="hasMain"
    >
      <h2 class="hidden md:block text-2xl text-saffron font-bold">{{ props.title }}</h2>
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
    <slot></slot>
  </div>
</template>
