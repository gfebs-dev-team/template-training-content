<script setup>
import SlideBase from './SlideBase.vue'
import { onMounted, ref, computed } from 'vue'
const hasImg = ref(false)

const props = defineProps(['title', 'img', 'columns'])

onMounted(() => {
  hasImg.value = props.img ? true : false
})

const lastColumn = computed(() => {
  if (props.columns) {
    //console.log('column_' + (props.columns + 1));
    return 'column_' + (props.columns + 1)
  }
  return 'column'
})
let column = (index) => {
  return 'column_' + (index + 1)
}
</script>

<template>
  <SlideBase class="content" v-bind="props">
    <template #main>
      <slot></slot>
    </template>
    <template #[column(index)] v-for="index in columns" :key="index">
      <slot :name="'column_' + (index + 1)" />
    </template>
    <template #[lastColumn] v-if="hasImg">
      <img :src="img" :alt="img" />
    </template>
  </SlideBase>
</template>

<style scoped lang="scss"></style>
