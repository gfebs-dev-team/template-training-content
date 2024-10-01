<script setup>
import { ref } from 'vue'
import Base from '../Base.vue'
import Button from './Button.vue'
import { twMerge } from 'tailwind-merge'

defineProps(['title', 'termsNum', 'reverse', 'split'])

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
      <div class="grid grid-cols-[1fr_.8fr] h-full gap-8 flex-col md:flex-row">
        <div class="flex flex-col w-full h-full overflow-auto gap-4">
          <div class="flex flex-col px-2 gap-2">
            <slot name="main-text" />
          </div>

          <div
            v-if="reverse"
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
          <div
            class="rounded-md bg-spacecadet p-4 h-full overflow-auto w-full md:h-1/2 relative"
            v-if="currIndex && !reverse"
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
                  <p class="overflow-hidden">
                    <slot :name="'termDef_' + index" />
                  </p>
                </div>
              </Transition>
            </template>
          </div>
        </div>
        <!-- Buttons -->
        <div
          v-if="!reverse"
          :class="
            twMerge(
              'grid col-start-2 grid-flow-dense grid-cols-2 min-w-0 min-h-0 gap-4 h-full w-full md:h-auto md:flex md:flex-col',
              split ? 'md:grid md:grid-cols-2' : ''
            )
          "
        >
          <template v-for="index in termsNum" :key="index">
            <Button :index="index" :currIndex @click="setTerm(index)">
              <template #term>
                <slot :name="'termButton_' + index" />
              </template>
            </Button>
          </template>
        </div>

        <div
          class="rounded-md bg-spacecadet p-4 h-auto overflow-auto max-h-full w-full relative"
          v-if="currIndex && reverse"
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
    </template>
  </Base>
</template>
