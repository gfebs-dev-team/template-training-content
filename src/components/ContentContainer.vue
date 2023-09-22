<script setup>
import ContentHeader from '../components/ContentHeader.vue'
import SlideContainer from './SlideContainer.vue'

defineProps(['topic', 'courseCode', 'courseTitle'])
</script>

<template>
  <main>
    <ContentHeader>GFEBS {{ courseCode }} {{ courseTitle }}</ContentHeader>
    <SlideContainer :topic= topic />

  </main>
</template>

<style scoped lang="scss">
main {
  display: flex;
  flex-direction: column;
  max-width: 1200px;
  margin:auto;
  align-items: center;
  height: 100%;
  padding: var(--p5);
  gap: var(--p4);
}
</style>
