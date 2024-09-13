<script setup>
import { ref } from 'vue'
import Base from '../Base.vue'
import Button from './Button.vue'

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
  <Base :title="title" :classNames="classNames">
    <template #main>
      <div class="flex h-full gap-8 flex-col md:flex-row">
        <div class="flex flex-col w-full h-full overflow-auto gap-4">
          <div class="flex flex-col px-2 gap-2">
            <slot name="main-text" />
          </div>

          <div
            class="rounded-md bg-spacecadet p-4 h-full overflow-auto w-full md:h-1/2 relative"
            v-if="currIndex"
          >
            <template v-for="index in termsNum" :key="index">
              <Transition
                name="fade"
                enter-active-class="transition-opacity duration-500 ease-in-out"
                leave-active-class="transition-opacity duration-500 ease-in-out"
                enter-from-class="absolute  opacity-0 inset-0 p-4"
                leave-to-class="absolute opacity-0 inset-0 p-4"
              >
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
        <!-- Buttons -->
        <div
          class="grid grid-flow-dense grid-cols-2 min-w-0 min-h-0 gap-4 h-full w-full md:w-4/5 md:h-auto md:flex md:flex-col"
        >
          <template v-for="index in termsNum" :key="index">
            <Button :index="index" :currIndex @click="setTerm(index)">
              <template #term>
                <slot :name="'termButton_' + index" />
              </template>
            </Button>
          </template>
        </div>
      </div>
    </template>
  </Base>
</template>
