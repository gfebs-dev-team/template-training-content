<script setup>
import SlideColumns from './Columns.vue'
defineProps(['slideData', 'image'])
</script>
<template>
  <SlideColumns v-bind="slideData" :columns="1">
    <slot />

    <template #column_2>
      <img class="md:p-8 md:pt-0 object-contain" :src="image" />
    </template>
  </SlideColumns>
</template>
