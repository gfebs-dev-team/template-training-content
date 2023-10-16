<script setup>
defineProps(['title', 'columns'])
</script>
<template>
  <div class="slide">
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
.slide {
  display: flex;
  z-index: -99;
  position: absolute;
  align-items: stretch;
  height: 100%;
  width: 100%;
  padding: var(--p5);
  gap: var(--p3);
  &.active {
    z-index: 0;
  }
  .column {
    display: flex;
    flex-direction: column;
    height: 100%;
    width: 100%;
    &:last-child {
      width: 20rem;
      :global(img) {
        height: 100%;
        object-fit: contain;
      }

      @media only screen and (max-width: 1000px) {
        :global(img) {
          max-width: 100%;
        }
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
