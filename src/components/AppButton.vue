<script setup>
defineProps(['size', 'color', 'variant'])
</script>

<template>
  <button :class="['appButton', size, color, variant]">
    <slot></slot>
  </button>
</template>

<style scoped lang="scss">
$offwhite: var(--alice-blue);
$darkblue: var(--oxford-blue);

button {
  display: flex;
  flex: 1 0 0;
  gap: var(--p1);
  font-weight: bold;
  text-transform: uppercase;
  letter-spacing: 0.02rem;
  line-height: 100%;
  justify-content: center;
  align-items: center;
  border-radius: 0.3125rem;
  transition: transform 0.2s, background-color 0.2s;
  border: 0.2rem solid transparent;
  outline: none;
  &:active {
    transform: translateY(0.1rem);
  }

  &::after,
  &::before {
    border-radius: 0.1rem;
  }
}

.small {
  padding: var(--p-1) var(--p2);
  font-size: var(--m-2);
  border-width: .1em!important;
}

.medium {
  padding: var(--p0) var(--p2);
  font-size: var(--m-2);
}

.large {
}

.outline {
  transition: box-shadow 300ms ease-in-out, color 300ms ease-in-out;
  color: var(--color-text);
  background-color: transparent;
  border: 0.2rem solid var(--color-border);

  &:hover {
    box-shadow: 0 0 40px 40px var(--color-border) inset;
    color: var(--color-hover-text);
    &:disabled {
      box-shadow: none;
      color:var(--color-text);
    }
  }
}

.filled {
}

.darkMode {
  --color-border: var(--mas-blue);
  --color-text: var(--cool-grey);
  --color-hover-text: var(--alice-blue);
  --color-hover-background: rgba(0, 0, 0, 0.1);
}

.lightMode {
  --color-border: var(--lavender);
  --color-text: var(--alice-blue);
  --color-hover-text: var(--space-cadet);
  --color-hover-background: rgba(255, 255, 255, 0.1);
  &:disabled {
    --color-border: var(--cool-grey);
    --color-text: var(--cool-grey);
    cursor: not-allowed;
  }
}

.accentMode {
}
</style>
