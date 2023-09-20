<script setup>
defineProps({
  termName: String
})
</script>

<template>
  <button>{{ termName }}</button>
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
  padding: 1rem;
  width: 100%;
  border: transparent;
  border-radius: .5rem;
  color: #fff;
  font-weight: 700;
  font-size: var(--m-1);
  z-index: 1;
  background: var(--space-cadet);
  line-height: 20px;
  transition: background, color 0.1s ease-in-out;
}
</style>
