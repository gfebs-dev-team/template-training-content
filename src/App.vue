<script setup lang="ts">
import { RouterView } from 'vue-router';
import ContentHeader from './components/ContentHeader.vue';
import ContentContainer from './components/ContentContainer.vue';
</script>

<template>
  <main>
   <ContentHeader>Introduction to Finanancial Processes</ContentHeader>
   <ContentContainer>
    <RouterView/>
   </ContentContainer>
  </main>
</template>

<style scoped lang="scss">
main {
  display: flex;
  flex-direction: column;
  height: 100%;
}
</style>
