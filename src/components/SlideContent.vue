<script setup>
import SlideBase from './SlideBase.vue';
defineProps(['title', 'img', 'columns'])
</script>

<template>
  <SlideBase :title="title" :columns="columns">
      <template #main>
        <slot></slot>
      </template>
      <template #secondary v-if="this.$props.img">
        <img :src="img" :alt="img"/>
      </template>
  </SlideBase>   
</template>

