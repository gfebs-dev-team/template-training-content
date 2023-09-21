<script setup>
defineProps({
  termName: String,
  activeName: String
})
</script>

<template>
  <button :class="{active: termName == activeName }">{{ termName }}</button>
</template>

<style scoped>
.terms {
  margin-left: auto;
  margin-bottom: auto;
  list-style-type: none;
}

button {
  outline: 0;
  text-align: center;
  cursor: pointer;
  height: 100%;
  width: 100%;
  border: 2px solid transparent;
  border-radius: .5rem;
  color: var(--color-text-dark);
  font-weight: 700;
  font-size: var(--m-1);
  z-index: 1;
  background: var(--space-cadet);
  line-height: 20px;
  transition: all, color 0.1s ease-in-out;

  &:hover {
    background-color: transparent;
    transition-duration: 0.2s;
    border: 2px solid var(--color-accent);
  }
  &.active {
    background-color: var(--color-accent);
    color: var(--space-cadet)
  }
}
</style>
