<script setup lang="ts">
defineProps<{
  title?: string
  answer?: string
}>()
</script>

<template>
  <div class="slide">
    <h1 class="slide-header">{{ title }}</h1>
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>

<style scoped lang="scss">
.slide {
  display: flex;
  flex-direction: column;
  padding: 2em;
  gap: 1em;

  h1{
    font-weight: bold;
  }
  .content {
    display: flex;
    flex-direction: row;
    gap: 1em;
  }
}
</style>
