<script setup>
import SlideBase from './SlideBase.vue'
const props = defineProps(['title', 'img', 'columns', 'num'])
</script>

<template>
  <SlideBase class="content" v-bind="props">
    <div class title>
      <h2>Section {{ num }}</h2>
      <h3>{{ section }}</h3>
    </div>
  </SlideBase>
</template>

<style scoped lang="scss"></style>
