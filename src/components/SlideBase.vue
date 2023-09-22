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
    <slot></slot>
  </div>
</template>

<style scoped lang="scss">
.content-box {
  display: flex;
  align-items: stretch;
  height: 100%;
  width: 100%;
  padding: var(--p5);
  gap: var(--p3);
  .column {
    display:flex;
    flex-direction: column;
    height: 100%;
    width: 100%;
    &:last-child {
      width: 20rem;
      :global(img) {
        height:100%;
        object-fit: contain;
      }
    } 
  }
  .main_column {
    align-items: stretch;
      h2 {
        flex-shrink: 0;
      }
    }
  h2 {
    font-size: var(--m2);
    font-weight: bold;
    text-transform: capitalize;
    color: var(--color-accent);
  }
}
</style>
