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
  padding: 5rem 5rem;
  gap: 3rem;
}
</style>
