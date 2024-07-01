<script setup>
import { ref } from 'vue'
import { useSlidesStore } from '../stores/slides'
import { storeToRefs } from 'pinia'
import { RiCloseLine } from '@remixicon/vue'

defineProps(['glossary'])

const slides = useSlidesStore()
const { glossaryState } = storeToRefs(slides)

const activeIndex = ref(0)
const activeFilter = ref('all')
const search = ref('')

function getFilter(term) {
  if (search.value != '') {
    return term.toLocaleLowerCase().match(search.value.toLocaleLowerCase())
  } else {
    switch (activeFilter.value.toLocaleLowerCase()) {
      case 'all':
        return true
      case '0-9':
        //console.log(term + ' : ' + activeFilter.value)
        return term.match('/^[0-9].+$/')
      default:
        //console.log(term + ' : ' + activeFilter.value)
        return term.toLocaleLowerCase().startsWith(activeFilter.value.toLocaleLowerCase())
    }
  }
}

function limitedAlphabet(glossary) {
  let alphabet = new Set()
  glossary.forEach((item) => {
    alphabet.add(item.term.toLocaleLowerCase().charAt(0))
  })
  console.log(alphabet)
  return [...alphabet]
}
</script>

<template>
  <div
    class="fixed flex bg-richblack bg-opacity-20 backdrop-blur-sm z-20 inset-0 w-full h-full items-center justify-center p-4"
  >
    <!-- GLOSSARY -->
    <div class="h-full grid bg-spacecadet rounded p-4 auto-rows-min gap-2">
      <!-- HEADING -->
      <h2 class="font-bold text-lg">Glossary</h2>

      <!-- CLOSE -->
      <RiCloseLine class="fill-saffron col-start-2 justify-self-end" />

      <!-- FILTER -->
      <div class="flex flex-col row-span-2">
        <button
          :class="[{ default: search != '' }, { active: activeFilter == 'all' && search == '' }]"
          @click="activeFilter = 'all'"
        >
          All
        </button>
        <div class="v-divider"></div>
        <div class="alphabet flex flex-col">
          <button
            :class="{ active: activeFilter == '0-9' && search == '' }"
            @click="activeFilter = '0-9'"
          >
            0-9
          </button>

          <button
            :class="{ active: activeFilter == letter && search == '' }"
            @click="activeFilter = letter"
            v-for="(letter, index) in limitedAlphabet(glossary)"
            :key="index"
          >
            {{ letter }}
          </button>
        </div>
      </div>

      <!-- SEARCH -->
      <div class="search">
        <input id="glossary-search" type="search" v-model="search" placeholder="Search" />
      </div>

      <!-- TERMS-AREA -->
      <div class="overflow-auto h-full">
        <template v-for="(item, index) in glossary" :key="item.term">
          <TransitionGroup name="terms">
            <li
              :class="{ active: activeIndex == index }"
              @click="activeIndex = index"
              v-if="getFilter(item.term)"
            >
              {{ item.term }}
            </li>
          </TransitionGroup>
        </template>
      </div>

      <!-- DEFINITION-AREA -->
      <div class="col-start-2">
        <Transition>
          <h3 :key="activeIndex">{{ glossary[activeIndex].term }}</h3></Transition
        >
        <Transition>
          <p :key="activeIndex">{{ glossary[activeIndex].definition }}</p>
        </Transition>
      </div>
    </div>
  </div>
</template>
