<script setup>
import SlideContent from './SlideContent.vue'
defineProps(['slideData', 'image'])
</script>
<template>
  <SlideContent v-bind="slideData" :columns="1">
    <slot />

    <template #column_2>
      <img class="max-h-1/2 h-full md:h-auto md:p-8 object-contain" :src="image" />
    </template>
  </SlideContent>
</template>
