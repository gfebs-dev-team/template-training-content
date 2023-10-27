<script setup>
const props = defineProps(['title', 'columns', 'img'])
</script>
<template>
  <div class="slide">
    <div class="column main_column" v-if="!!this.$slots.main">
      <h2 class="slide-title">{{ title }}</h2>
      <slot name="main" />
    </div>
    <div :class="[{'img-column': $props.img },'column column_' + (index + 1)]" v-for="index in columns" :key="index">
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
  padding: $p5;
  gap: $p3;

  @media only screen and (max-width: 1200px) {
    padding: $p4;
  }
  &.active {
    z-index: 0;
  }
  .column {
    display: flex;
    flex-direction: column;
    height: 100%;
    width: 100%;
    &.img-column {
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
    gap: $p0;
    h2 {
      flex-shrink: 0;
    }
  }
  h2 {
    font-size: $m2;
    font-weight: bold;
    text-transform: capitalize;
    color: var(--color-accent);
  }
}
</style>
