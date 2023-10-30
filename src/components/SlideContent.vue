<script setup>
import SlideBase from './SlideBase.vue'
import { computed } from 'vue'
const props = defineProps(['title', 'img', 'columns'])
const lastColumn = computed(() => {
  if(props.columns){
    //console.log('column_' + (props.columns + 1));
    return 'column_' + (props.columns + 1);
  }
  return 'column'
})
let column = (index) => {
  return 'column_' + (index+1);
}
</script>

<template>
  <SlideBase :title="props.title" :columns="props.columns" :img="props.img">
    <template #main>
      <slot></slot>
    </template>
    <template #[column(index)] v-for="index in columns" :key=index>
      <slot :name="'column_' + (index + 1)" />
    </template>
    <template #[lastColumn] v-if="this.$props.img">
      <img :src="img" :alt="img" />
    </template>
  </SlideBase>
</template>

<style scoped lang="scss">
</style>