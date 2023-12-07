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
        <button class='back' @click="activeSection -= 1" v-if="activeSection > 0"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M7.82843 10.9999H20V12.9999H7.82843L13.1924 18.3638L11.7782 19.778L4 11.9999L11.7782 4.22168L13.1924 5.63589L7.82843 10.9999Z"></path></svg></button>
        <button class='next' @click="activeSection += 1" v-if="activeSection < props.sections + 1"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"></path></svg></button>
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
      padding: $p1;
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
      width: 4rem;
      height: 4rem;
      border-radius: 5rem;
      background: color.scale($rich-black, $alpha: -40%);
      border: none;
      padding: $p1;
      margin: $p1;
      &.back {
        grid-area: a;
        //margin-right: auto;
      }

      &.next {
        grid-area: b;
        margin-left: auto;
      }
      svg {
        fill: $alice-blue
      }
    }
    }

    &::after {
      content: url("./essentials-introduction-slide06.svg");
      position: absolute;
      top: -2rem;
      right: -2rem;
      width: 8rem;
      object-fit: contain;
    }
    
  }

  &.table {
    width: 40rem;
    display: flex;
    flex-direction: column;
    gap: .75rem;
    justify-content: space-between;
    overflow-y: auto;
    li {
      list-style-position: inside;
      font-size: $m-2;
      &.active {
        color: var(--color-accent);
      }
    }
  }
}
</style>
