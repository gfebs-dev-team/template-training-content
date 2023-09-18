<script setup>
defineProps(['title'])
</script>
<template>
  <div class="content-box">
    <h2 class="slide-title">{{ title }}</h2>
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>

<style scoped lang="scss">
.content-box {
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
  gap: 1.5rem;
}
h2 {
  font-size: var(--m2);
  font-weight: bold;
  text-transform: capitalize;
  color: var(--color-accent);
}
.content {
  display: flex;
  flex-direction: row;
  font-size: 1.25rem;
  ::slotted(div) {
    gap: 1rem;
  }
}
</style>
