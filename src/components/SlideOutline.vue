<script setup>
import SlideBase from './SlideBase.vue'
import { ref } from 'vue'
const props = defineProps(['title', 'sections'])
const activeSection = ref(0)
</script>

<template>
  <SlideBase class="slide-outline">
    <ol class="outline table">
      <li
        :class="[{ active: activeSection == index }, 'tbsection_' + index]"
        v-for="index in sections"
        :key="index"
      >
        <slot :name="'tablesection_' + index" />
      </li>
    </ol>
    <div class="outline main">
      <div :class="['mnsection', 'mnsection_0']" v-if="activeSection == 0">
        <slot name="mainsection_0"></slot>
      </div>
      <template v-for="index in sections + 1" :key="index">
        <div :class="['mnsection', 'mnsection_' + index]" v-if="activeSection == index">
          <slot :name="'mainsection_' + index" />
        </div>
      </template>
      <div class="button-group">
        <button @click="activeSection -= 1" v-if="activeSection > 0">Back</button>
        <button @click="activeSection += 1" v-if="activeSection < props.sections + 1">Next</button>
      </div>
    </div>
  </SlideBase>
</template>

<style scoped lang="scss">
.slide-outline {
  padding: $p4;
}
.outline {
  background-color: $space-cadet;
  padding: $p2;
  &.main {
    position: relative;
    width: 100%;
    height: 100%;
    .mnsection {
      display: flex;
      width: 100%;
      flex-direction: column;
      gap: $p1;
    }
    .button-group {
      position: absolute;
      bottom: $p2;
      left: 0;
      right: 0;
      display: grid;
      grid-template-areas: "a b";
      grid-template-columns: 50% 50%;
      button {
      font-weight: bold;
      color: $alice-blue;
      width: 5rem;
      height: 5rem;
      border-radius: 5rem;
      background: color.scale($rich-black, $alpha: -40%);
      border: none;
      padding: $p1;
      margin: $p1;
      &:first-child {
        grid-area: a;
        margin-right: auto;
      }

      &:last-child {
        grid-area: b;
        margin-left: auto;
      }
    }
    }
    
  }

  &.table {
    width: 30rem;
    li {
      list-style-position: inside;
      &.active {
        color: var(--color-accent);
      }
    }
  }
}
</style>
