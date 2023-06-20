<script setup lang="ts">
defineProps<{
  unit?: string
  title?: string
}>()
</script>

<template>
  <div class="unit-header">
    <h1>{{ unit }}</h1>
  </div>
  <div class="slide">
    <h2 class="slide-header">{{ title }}</h2>
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>

<style scoped lang="scss">
.unit-header {
    width: 100%;
    background-color: #414141;
    padding: .2em 2em;
    h1 {
      color: white;
      text-align: right;
      font-weight: 400;
    }
}
.slide {
  display: flex;
  flex-direction: column;
  padding: 2em;
  gap: 1em;

  h2 {
    font-weight: bold;
    font-size: 2em;
    color: red;
  }
  .content {
    display: flex;
    flex-direction: row;
    gap: 1em;
    font-size: 1.2em;
  }
}
</style>
