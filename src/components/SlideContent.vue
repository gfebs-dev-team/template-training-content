<script setup>
import SlideBase from './SlideBase.vue';
defineProps(['title'])
</script>

<template>
  <SlideBase :title="title">
      <slot></slot>
  </SlideBase>   
</template>

