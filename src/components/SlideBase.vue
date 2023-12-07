<script setup>
const props = defineProps(['title', 'columns', 'img'])
import { onMounted, ref, useAttrs, useSlots } from 'vue'
const hasMain = ref(false)
const hasImg = ref(false)

onMounted(() => {
  hasMain.value = useSlots().main ? true : false
  //console.log(hasMain.value);
  hasImg.value = props.img ? true : false
  //console.log(hasImg.value);
})
</script>
<template>
  <div class="slide">
    <div class="column main_column" v-if="hasMain">
      <h2 class="slide-title">{{ props.title }}</h2>
      <slot name="main" />
    </div>
    <div
      :class="['column', 'column_' + (index + 1), { column_image: hasImg }]"
      v-for="index in props.columns"
      :key="index"
    >
      <slot :name="'column_' + (index + 1)" />
    </div>
    <slot></slot>
  </div>
</template>

<style scoped lang="scss">
:global(img) {
  width: 100%;
  object-fit: contain;
  justify-self: center;
}
.slide {
  display: flex;
  z-index: -99;
  position: absolute;
  align-items: stretch;
  height: 100%;
  width: 100%;
  padding: clamp($p3,-5.3846rem + 11.5385vw ,$p5);
  gap: $p3;

  &.active {
    z-index: 0;
  }
  .column {
    display: flex;
    flex-direction: column;
    height: 100%;
    width: 100%;
  }
  .main_column {
    align-items: stretch;
    gap: $p0;
    h2 {
      flex-shrink: 0;
    }
  }

  .column_image {
    justify-content: center;
    width: 80%;
  }
  h2 {
    font-size: clamp($m1, 0.8846rem + 0.9615vw, $m2);
    font-weight: bold;
    text-transform: capitalize;
    color: var(--color-accent);
  }
}
</style>
