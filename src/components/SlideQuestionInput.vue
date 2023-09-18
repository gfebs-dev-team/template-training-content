<script setup>
import { inject } from 'vue';
defineProps(['value', 'index'])
const check_el = inject('checked_el');
const answer = inject('answer');
function setInput(v, i) {
    check_el.value = i;
    answer.value = v;
}
</script>

<template>
    <li class="choice" @click="setInput(value, index)" :class="{checked: checked_el == index}">
        <input id="{{index}}_true" value="{{ value }}" v-model="answer" type="radio"/> <label for="{{index}}_true">{{value}}</label>
      </li>
</template>

<style scoped lang="scss">
</style>