<script setup>
import ContentHeader from '../components/ContentHeader.vue';
import AppGlossary from './AppGlossary.vue';
import SlideContainer from './SlideContainer.vue';
import glossary from '../assets/glossary.json';
import { useSlidesStore } from '@/stores/slides';
import { storeToRefs } from 'pinia';

defineProps(['topic', 'courseCode', 'courseTitle', 'title'])
const slides = useSlidesStore()
const { glossaryState } = storeToRefs(slides);
</script>

<template>
  <main>
    <AppGlossary :glossary="glossary" v-if="glossaryState"></AppGlossary>
    <ContentHeader>GFEBS {{ courseCode }} {{ courseTitle }}</ContentHeader>
    <SlideContainer :topic="topic" :title="title" />
  </main>
</template>

<style scoped lang="scss">
main {
  display: flex;
  flex-direction: column;
  aspect-ratio: 4/3;
  height: 100%;
  max-height: 100%;
  margin:auto;
  align-items: center;
  padding:clamp($p4,-5.3846rem + 11.5385vw, $p5);
  gap: clamp($p3, clampBuilder(1024, 1440, $p3, $p4, 1), $p4);
}
</style>
