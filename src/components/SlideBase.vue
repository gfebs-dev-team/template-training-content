<script setup>
defineProps(['title', 'columns'])
</script>
<template>
  <div class="content-box">
    <div class="column main_column">
      <h2 class="slide-title">{{ title }}</h2>
      <slot name="main" />
    </div>
    <div :class="'column column_' + (index + 1)" v-for="index in columns" :key="index">
      <slot :name="'column_' + (index + 1)" />
    </div>
  </div>
</template>

<style scoped lang="scss">
.content-box {
  display: flex;
  align-items: stretch;
  height: 100%;
  width: 100%;
  padding: 4rem;
  gap: 2rem;
  .column {
    display:flex;
    flex-direction: column;
    height: 100%;
    width: 100%;
  }
  h2 {
    font-size: var(--m2);
    font-weight: bold;
    text-transform: capitalize;
    color: var(--color-accent);
  }
}
</style>
