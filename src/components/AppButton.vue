<script setup>
defineProps(['size', 'color', 'variant'])
</script>

<template>
  <button :class="[size, color, variant]">
    <slot></slot>
  </button>
</template>

<style lang="scss">
button {
  display: flex;
  flex: 1 0 0;
  gap: 1rem;
  font-weight: bold;
  text-transform: uppercase;
  letter-spacing: 0.02rem;
  line-height: 100%;
  justify-content: center;
  align-items: center;
  border-radius: 0.3125rem;
  transition: transform 0.2s, background-color 0.2s;
}

.small {
  padding: 0.4rem 1.75rem;
  font-size: var(--m-2);
}

.medium {
  padding: 0.75rem 1.5rem;
  font-size: var(--m-1);
}

.large {
}

.outline {
  border: 2px solid var(--color-border);
  color: var(--color-text);
  background-color: transparent;

  &:hover {
    background-color: var(--color-hover-background);
  }
}

.filled {
}

.darkMode {
  --color-border: var(--mas-blue);
  --color-text: var(--cool-grey);
  --color-hover-background: rgba(0, 0, 0, 0.1);
}

.lightMode {
  --color-border: var(--alice-blue);
  --color-text: var(--alice-blue);
  --color-hover-background: rgba(255, 255, 255, 0.1);
}

.accentMode {
}
</style>
