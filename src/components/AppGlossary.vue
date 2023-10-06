<script setup>
import { ref, onMounted } from 'vue'
defineProps({
  glossary: Array
})
const alphabet = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z'
]
const activeIndex = ref(0)
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
        >
          <path
            d="M8.00005 6.72228L14.2222 0.5L16 2.27778L9.77782 8.50005L16 14.7222L14.2222 16.5L8.00005 10.2778L1.77778 16.5L0 14.7222L6.22228 8.50005L0 2.27778L1.77778 0.5L8.00005 6.72228Z"
            fill="#F4BC3A"
          />
        </svg>
      </div>
      <div class="filter-search">
        <div class="filter">
          <button class="active">All</button>
          <p>|</p>
          <div class="alphabet">
            <button>0-9</button>
            <button v-for="(letter, index) in alphabet" :key="index">{{ letter }}</button>
          </div>
        </div>
        <div class="search">
          <input id="glossary-search" type="search" />
        </div>
      </div>
      <div class="terms-definitions">
        <div class="terms-area">
          <li v-for="item in glossary" :key="item.term">{{ item.term }}</li>
        </div>
        <div class="definition-area">
          <h3>{{ glossary[activeIndex].term }}</h3>
          <p>{{ glossary[activeIndex].definition }}</p>
        </div>
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
  padding: 5rem;
  z-index: 99;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  align-items: center;
  justify-content: center;
  .glossary {
    display: flex;
    flex-direction: column;
    aspect-ratio: 16/9;
    background-color: var(--delft-blue);
    border-radius: 0.5rem;
    padding: 2rem;
    gap: 1.5rem;
    .heading {
      display: flex;
      justify-content: space-between;
      h2 {
        color: var(--lavendar);
        font-size: var(--m2);
        font-weight: 700;
        line-height: 130%;
        letter-spacing: 0.175rem;
        text-transform: uppercase;
      }
    }

    .filter-search {
      display: flex;
      gap: 1rem;
      .filter {
        display: flex;
        gap: 1rem;
        @media only screen and (max-width: 1330px) {
          display: none;
        }

        @media only screen and (max-height: 750px) {
          display: none;
        }

        button {
          background: none;
          color: var(--cool-grey);
          border: none;
          font-weight: 700;
          font-size: var(--m-1);
          & .active {
            color: var(--color-accent);
            font-size: var(--m0);
          }
        }

        .alphabet {
          display: flex;
          gap: 0.2rem;
        }
      }
      .search {
        #glossary-search {
          border-radius: 1rem;
        }
      }
    }

    .terms-definitions {
      display: flex;
      height: 100%;
      .terms-area {
        height: 100%;
        width: 15rem;
        padding: 1.25rem;
        overflow-y: auto;
        gap: 0.5rem;
        background-color: var(--oxford-blue);
        display: flex;
        flex-direction: column;
        li {
          list-style-type: none;
          font-size: var(--m-2);
          color: var(--lavendar);
          font-weight: 700;
          text-transform: capitalize;
        }
      }

      .definition-area {
        display: flex;
        flex-direction: column;
        gap: 0.75rem;
        width: 100%;
        height: 100%;
        padding: 2rem;
        background-color: var(--space-cadet);

        h3 {
          font-size: var(--m0);
          font-weight: 700;
          color: var(--color-accent);
          text-transform: capitalize;
        }
      }
    }
  }
}
</style>
