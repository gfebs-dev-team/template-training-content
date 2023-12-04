<script setup>
import { inject } from 'vue'
defineProps(['value', 'label', 'index', 'count'])
const checked_el = inject('checked_el')
const answer = inject('answer')
function setInput(v, i) {
  checked_el.value = i
  answer.value = v
}
</script>

<template>
  <li class="choice" @click="setInput(value, index)" :class="{ checked: checked_el == index }">
    <input
      :id="count + '_' + value"
      :value="value"
      v-model="answer"
      type="radio"
      :true-value="checked_el == index"
    />
    <label :for="count + '_' + value">{{ label }}</label>
  </li>
</template>

<style scoped lang="scss">
li label {
  text-transform: capitalize;
}
</style>
