<script setup>
import { ref, TransitionGroup, Transition } from 'vue'
import { useSlidesStore } from '../stores/slides'
import { storeToRefs } from 'pinia'

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
  <div class="overlay">
    <div class="glossary">
      <div class="heading">
        <h2>Glossary</h2>
        <svg
          width="16"
          height="17"
          viewBox="0 0 16 17"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          @click="glossaryState = false"
        >
          <path
            d="M8.00005 6.72228L14.2222 0.5L16 2.27778L9.77782 8.50005L16 14.7222L14.2222 16.5L8.00005 10.2778L1.77778 16.5L0 14.7222L6.22228 8.50005L0 2.27778L1.77778 0.5L8.00005 6.72228Z"
            fill="#F4BC3A"
          />
        </svg>
      </div>
      <div class="filter-search">
        <div class="filter">
          <button
            :class="[{ default: search != '' }, { active: activeFilter == 'all' && search == '' }]"
            @click="activeFilter = 'all'"
          >
            All
          </button>
          <div class="v-divider"></div>
          <div class="alphabet">
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
        <div class="search">
          <input id="glossary-search" type="search" v-model="search" placeholder="Search" />
        </div>
      </div>

      <div class="terms-area">
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
      <div class="definition-area">
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

<style lang="scss" scoped>
.overlay {
  position: fixed;
  display: flex;
  background: rgba(0, 0, 0, 0.2);
  backdrop-filter: blur(5px);
  z-index: 100;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  align-items: center;
  justify-content: center;
  padding: clamp($p5, clampBuilder(1024, 1440, $p5, $p5 * 2), $p5 * 2);
  .glossary {
    display: grid;
    grid-template-areas: 'a a' 'b b' 'c d';
    grid-template-columns: 15rem auto;
    grid-template-rows: 2rem 2rem auto;
    background-color: $delft-blue;
    border-radius: 0.5rem;
    padding: $p3;
    gap: $p0 0;
    width: 100%;
    height: 100%;

    .heading {
      display: flex;
      grid-area: a;
      justify-content: space-between;
      h2 {
        color: $lavender;
        font-size: clamp($m0, clampBuilder(1024, 1440, $m0, $m2), $m2);
        font-weight: 700;
        line-height: 130%;
        letter-spacing: 0.175rem;
        text-transform: uppercase;
      }
    }

    .filter-search {
      display: flex;
      justify-content: space-between;
      grid-area: b;
      align-items: center;
      height: 2rem;
      gap: $p0;
      .filter {
        display: flex;
        gap: $p0;
        align-items: center;

        .v-divider {
          display: block;
          height: 1.5rem;
          width: 2px;
          background-color: $cool-grey;
        }

        button {
          background: none;
          border-radius: $p-2;
          padding: math.div($p-2, 2);
          color: $cool-grey;
          border: none;
          font-weight: 700;
          text-transform: uppercase;
          font-size: $m-2;
          transition: transform ease-in-out 0.8s;
          transition: margin ease-in-out 0.5s;
          &.active {
            color: var(--color-accent);
            transform: scale(1.2);
            margin: 0 $p-1;
            transition-duration: 0.5s;
          }
        }

        .alphabet {
          display: flex;
          align-items: center;
          max-height: 1.5rem;
          gap: $p-1;
        }

        .default {
          margin: 0 $p-1;
        }
      }
      .search #glossary-search {
        border-radius: 1rem;
        width: 100%;
        height: 1rem;
        border: none;
        background-color: $space-cadet;
        color: $cool-grey;
        padding: $p1;
      }
    }

    .terms-area {
      grid-area: c;
      width: 100%;
      height: 100%;
      padding: 1.25rem;
      overflow-y: auto;
      scrollbar-color: $harvest-gold $delft-blue;
      gap: $p-1;
      background-color: $oxford-blue;
      display: flex;
      flex-direction: column;
      flex-grow: 1;

      li {
        position: relative;
        list-style-type: none;
        font-size: $m-2;
        color: $lavender;
        font-weight: 700;
        text-transform: capitalize;
        cursor: pointer;

        &:hover {
          text-decoration: underline;
        }

        &.active {
          color: var(--color-accent);
        }
      }

      .terms-move,
      .terms-enter-active,
      .terms-leave-active {
        transition: all 0.5s ease;
      }
      .terms-enter-from,
      .terms-leave-to {
        opacity: 0;
        transform: translateX(30px);
      }
      .terms-leave-active {
        position: absolute;
      }
    }

    .definition-area {
      display: flex;
      grid-area: d;
      flex-direction: column;
      gap: $p0;
      padding: 2rem;
      background-color: $space-cadet;
      width: 100%;

      h3 {
        font-size: $m0;
        font-weight: 700;
        color: var(--color-accent);
        text-transform: capitalize;
      }

      p {
        width: 100%;
        word-wrap: break-word;
      }

      .v-enter-active,
      .v-leave-active {
        transition: opacity 0.5s ease;
      }

      .v-enter-from,
      .v-leave-to {
        opacity: 0;
      }

      .v-leave-active {
        position: absolute;
        z-index: -1;
      }
    }
  }
}
</style>
