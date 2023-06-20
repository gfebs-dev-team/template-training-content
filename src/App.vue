<script setup lang="ts">
import { RouterView } from 'vue-router';
import ContentHeader from './components/ContentHeader.vue';
import ContentContainer from './components/ContentContainer.vue';


</script>

<template>
  <main>
   <ContentHeader>GFEBS L210E Financials Process Overview</ContentHeader>
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
