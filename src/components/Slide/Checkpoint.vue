<script setup>
import SlideColumns from './Columns.vue'
import image from './assets/checkpoint.svg'
defineProps(['slideData', 'image'])
</script>
<template>
  <SlideColumns
    v-bind="slideData"
    :columns="1"
    :classNames="{ 2: 'w-2/3 order-1 h-1/2 md:h-full md:order-2 flex-shrink min-h-0 px-8' }"
  >
    <slot />

    <template #column_2>
      <img class="max-h-1/2 h-full md:h-auto md:p-8 object-contain md:pt-0" :src="image" />
    </template>
  </SlideColumns>
</template>
