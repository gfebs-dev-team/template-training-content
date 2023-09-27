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
</script>

<template>
  <SlideBase :title="props.title" :columns="props.columns">
    <template #main>
      <slot></slot>
    </template>
    <template #[lastColumn] v-if="this.$props.img">
      <img :src="img" :alt="img" />
    </template>
  </SlideBase>
</template>
