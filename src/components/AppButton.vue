<script setup>
defineProps(['size', 'color', 'variant'])
</script>

<template>
  <button :class="[size, color, variant]">
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
}

.medium {
  padding: var(--p0) var(--p2);
  font-size: var(--m-2);
}

.large {
}

.outline {
  transition: color 0.5s, transform 0.2s, background-color 0.2s;
  color: var(--color-text);
  background-color: transparent;
  border: 0.2rem solid var(--color-border);

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    //border: .1rem solid var(--color-border);
    transition: opacity 0.3s, border 0.3s;
  }

  &:hover::before {
    opacity: 0;
  }

  &.small {
    border-width: 0.1rem;
  }

  &:hover {
    background-color: var(--color-hover-background);
    border-color: transparent;
    box-shadow: none;
    color: var(--color-hover-text);
    &:disabled {
      background-color: transparent;
      color:var(--color-text);
      border-color: var(--color-border)
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
