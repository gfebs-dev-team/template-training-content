<script setup>
import ContentHeader from '../components/ContentHeader.vue'
import AppGlossary from './AppGlossary.vue';
import SlideContainer from './SlideContainer.vue';
import glossary from '../assets/glossary.json';
import { useSlidesStore } from '@/stores/slides'
import { storeToRefs } from 'pinia'

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
  max-height: 100%;
  margin:auto;
  align-items: center;
  padding: var(--p5);
  gap: var(--p4);

  @media only screen and (max-width: 960px){
    aspect-ratio: auto;
    gap: var (--p3);
    height: 100%;
  }
}
</style>
