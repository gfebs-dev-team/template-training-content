<script setup>
import SlideBase from './SlideBase.vue'
import SlideTermButton from './SlideTermButton.vue'
import { ref } from 'vue'
defineProps(['title', 'termsNum'])

const classNames = {
  main: 'h-full'
}

const currIndex = ref()

function setTerm(index) {
  currIndex.value = index
}
</script>

<template>
  <SlideBase :title="title" :classNames="classNames">
    <template #main>
      <div class="flex flex-col w-full h-full overflow-auto gap-4">
        <div class="flex flex-col px-2 gap-2">
          <slot name="main-text" />
        </div>

        <div
          class="rounded-md bg-spacecadet p-4 h-full overflow-auto w-full md:h-1/2"
          v-if="currIndex"
        >
          <template v-for="index in termsNum" :key="index">
            <Transition>
              <div class="flex flex-col gap-2" v-if="index === currIndex">
                <h3 class="text-saffron font-bold text-lg">
                  <slot :name="'termButton_' + index" />
                </h3>
                <p class="overflow-auto">
                  <slot :name="'termDef_' + index" />
                </p>
              </div>
            </Transition>
          </template>
        </div>
      </div>
    </template>

    <!-- Buttons -->
    <div
      class="grid grid-flow-dense grid-cols-2 min-w-0 min-h-0 gap-2 h-full justify-between w-full md:w-4/5 md:h-auto md:grid-cols-1"
    >
      <template v-for="index in termsNum" :key="index">
        <SlideTermButton :index="index" :currIndex @click="setTerm(index)">
          <template #term>
            <slot :name="'termButton_' + index" />
          </template>
        </SlideTermButton>
      </template>
    </div>
  </SlideBase>
</template>
