<script setup>
import { ref } from 'vue'
import { useSlidesStore } from '@/stores/slides'
import { storeToRefs } from 'pinia'
import { RiCloseLine, RiArrowLeftLine } from '@remixicon/vue'

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
const defArea = ref(false)

function setTerm(index) {
  activeIndex.value = index
  defArea.value = true
}
</script>

<template>
  <div
    class="fixed flex bg-richblack bg-opacity-20 backdrop-blur-sm z-20 inset-0 w-full h-full max-h-dvh items-center justify-center p-20"
  >
    <!-- GLOSSARY -->
    <div
      class="relative h-full w-full flex flex-col bg-delftblue rounded p-4 gap-4 auto-rows-max lg:max-w-[1000px] lg:max-h-[800px]"
    >
      <!-- HEADING -->
      <h2 class="font-bold text-xl">Glossary</h2>

      <!-- CLOSE -->
      <RiCloseLine
        @click="glossaryState = false"
        class="fill-saffron absolute right-4 top-4 col-start-2 justify-self-end"
      />

      <div class="flex flex-col gap-4 justify-between md:flex-row">
        <!-- FILTER -->
        <div
          class="col-span-2 flex items-center justify-center overflow-x-auto overflow-y-hidden divide-x divide-coolgrey divide-opacity-50"
        >
          <button
            class="font-bold p-2 px-3 capitalize text-nowrap hover:opacity-70"
            :class="[
              { default: search != '' },
              {
                'text-saffron': activeFilter == 'all' && search == ''
              }
            ]"
            @click="activeFilter = 'all'"
          >
            All
          </button>

          <div class="alphabet py-1 flex w-full overflow-x-auto">
            <button
              class="font-bold p-1 pl-3 capitalize text-nowrap hover:opacity-70"
              :class="{
                'text-saffron': activeFilter == '0-9' && search == ''
              }"
              @click="activeFilter = '0-9'"
            >
              0-9
            </button>
            <button
              class="font-bold p-1 capitalize hover:opacity-70"
              :class="{
                'text-saffron': activeFilter == letter && search == ''
              }"
              @click="activeFilter = letter"
              v-for="(letter, index) in limitedAlphabet(glossary)"
              :key="index"
            >
              {{ letter }}
            </button>
          </div>
        </div>

        <!-- SEARCH -->
        <div class="row-start-2 col-span-2">
          <input
            class="bg-spacecadet focus-visible:outline focus-visible:outline-masblue focus-visible:outline-2 rounded-full px-4 py-1 w-full"
            id="glossary-search"
            type="search"
            v-model="search"
            placeholder="Search"
          />
        </div>
      </div>

      <div class="relative flex overflow-x-hidden overflow-auto h-full max-h-full w-full p-2">
        <!-- TERMS-AREA -->
        <div class="bg-oxfordblue p-2 w-full md:w-2/5">
          <div
            class="overflow-y-auto overflow-x-hidden w-full h-full max-h-fit bg-oxfordblue p-4 list-none flex-col col-span-2 gap-2 scrollbar-thin scrollbar-thumb-saffron scrollbar-track-oxfordblue"
          >
            <template v-for="(item, index) in glossary" :key="item.term">
              <li
                class="cursor-pointer hover:opacity-70"
                :class="{
                  'text-saffron font-bold ': activeIndex == index
                }"
                @click="setTerm(index)"
                v-if="getFilter(item.term)"
              >
                {{ item.term }}
              </li>
            </template>
          </div>
        </div>

        <!-- DEFINITION-AREA -->
        <div
          class="overflow-y-auto overflow-x-hidden col-span-2 p-4 gap-2 flex transition-all absolute sm:static sm:w-full inset-0 bg-spacecadet"
          :class="{ 'translate-x-full sm:transform-none': !defArea }"
        >
          <button
            @click="defArea = false"
            class="hover:bg-coolgrey h-min hover:bg-opacity-50 rounded p-2 lg:hidden"
          >
            <RiArrowLeftLine class="fill-aliceblue size-4" />
          </button>
          <div class="flex flex-col gap-2">
            <h3 class="text-lg font-bold" :key="activeIndex">
              {{ glossary[activeIndex].term }}
            </h3>

            <p class="whitespace-pre-wrap" :key="activeIndex">
              {{ glossary[activeIndex].definition }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
