<script setup>
import SlideContent from './SlideContent.vue'
defineProps(['slideData', 'image'])
</script>
<template>
  <SlideContent v-bind="slideData" :columns="1">
    <slot />

    <template #column_2>
      <img class="md:p-8 md:pt-0 object-contain" :src="image" />
    </template>
  </SlideContent>
</template>
