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
  <li
    class="group box-border grid w-full grid-cols-[1rem_auto] gap-2 rounded-lg border-2 border-transparent px-4 py-1 transition duration-150 data-[checked=true]:bg-saffron data-[checked=false]:hover:border-saffron"
    @click="setInput(value, index)"
    :data-checked="checked_el == index"
  >
    <!-- <input
      class="relative m-0 mt-[.68rem] flex aspect-square size-[.8rem] appearance-none items-center justify-center rounded-full border-2 border-transparent bg-aliceblue text-sm text-saffron data-[checked=true]:bg-transparent data-[checked=true]:after:mt-[.23rem] data-[checked=true]:after:h-max data-[checked=true]:after:w-max data-[checked=true]:after:text-[1rem] data-[checked=true]:after:text-oxfordblue data-[checked=true]:after:content-['◉'] data-[checked=false]:group-hover:border-saffron data-[checked=false]:group-hover:bg-saffron data-[checked=false]:group-hover:bg-opacity-35"
      :id="count + '_' + value"
      :value="value"
      v-model="answer"
      type="radio"
      :true-value="checked_el == index"
      :data-checked="checked_el == index"
    /> -->

    <input
      class="m-0 mt-[.45rem] aspect-square size-[.8rem] bg-aliceblue border-transparent text-sm text-saffron accent-saffron xl:mt-[.68rem] checked:accent-oxfordblue checked:mix-blend-multiply"
      :id="count + '_' + value"
      :value="value"
      v-model="answer"
      type="radio"
      :true-value="checked_el == index"
      :data-checked="checked_el == index"
    />
    <label
      class="h-min capitalize w-full p-1 text-sm text-aliceblue data-[checked=true]:font-bold data-[checked=true]:text-spacecadet data-[checked=false]:group-hover:font-bold data-[checked=false]:group-hover:text-saffron xl:text-lg"
      :data-checked="checked_el == index"
      :for="count + '_' + value"
      >{{ label }}</label
    >
  </li>
</template>
