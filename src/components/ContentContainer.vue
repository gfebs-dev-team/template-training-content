<script setup>
import ContentHeader from '../components/ContentHeader.vue'
import SlideContainer from './SlideContainer.vue'

defineProps(['topic', 'courseCode', 'courseTitle', 'title'])
</script>

<template>
  <main>
    <ContentHeader>GFEBS {{ courseCode }} {{ courseTitle }}</ContentHeader>
    <SlideContainer :topic="topic" :title="title" />

  </main>
</template>

<style scoped lang="scss">
main {
  display: flex;
  flex-direction: column;
  aspect-ratio: 4/3;
  max-height: 100%;
  margin:auto;
  align-items: center;
  padding: var(--p5);
  gap: var(--p4);
}
</style>
