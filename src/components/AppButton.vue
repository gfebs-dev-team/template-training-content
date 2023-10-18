<script setup>
defineProps(['size', 'color', 'variant'])
</script>

<template>
  <button :class="['appButton', size, color, variant]">
    <slot></slot>
  </button>
</template>

<style scoped lang="scss">
button {
  display: flex;
  flex: 1 0 0;
  gap: $p1;
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
  padding: $p1 $p2;
  font-size: $m-2;
  border-width: .1em!important;
}

.medium {
  padding: $p0 $p2;
  font-size: $m-2;
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
  --color-border: #{$mas-blue};
  --color-text: #{$cool-grey};
  --color-hover-text: #{$alice-blue};
  --color-hover-background: #{lighten($rich-black, .1)}
}

.lightMode {
  --color-border: #{$lavender};
  --color-text: #{$alice-blue};
  --color-hover-text: #{$space-cadet};
  --color-hover-background: #{lighten($rich-black, .1)}
  &:disabled {
    --color-border: #{$cool-grey};
    --color-text:  #{$cool-grey};
    cursor: not-allowed;
  }
}

.accentMode {
}

</style>
