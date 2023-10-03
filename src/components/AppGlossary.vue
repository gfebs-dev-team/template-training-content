<script setup>
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
defineProps(['glossary'])
</script>

<template>
  <div class="overlay">
    <div class="glossary">
      <h2>Glossary</h2>
      <div class="filter-search">
        <div class="filter">
          <button>All</button>
          <div class="alphabet">
            <button>0-9</button>
            <button v-for="(letter, index) in alphabet" :key="index">{{ letter }}</button>
          </div>
        </div>
        <div class="search">
            <input id="glossary-search" type="search">
        </div>
      </div>
      <div class="terms-definitions">
        <div class="terms-area">
            <li v-for="(item) in glossary" :key="item.term">{{ item.term }}</li>
        </div>
        <div class="definition-area"></div>
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
  z-index: 99;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  align-items: center;
  justify-content: center;
  .glossary {
    display: flex;
    flex-direction: column;
    background-color: var(--delft-blue);
    border-radius: 0.5rem;
    padding: 2rem;
    gap: 1.5rem;

    .filter-search {
        display: flex;
        gap: 1rem;
         .filter {
            display: flex;
            gap: 1rem;

            .alphabet {
                display: flex;
                gap: .2rem;
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
        height: 20rem;
        width: 100%;
        .terms-area {
            width: 13rem;
            height: 100%;
            background-color: var(--oxford-blue);
        }

        .definition-area {
            width: 100%;
            height: 100%;
            background-color: var(--space-cadet);
        }
    }
  }
}
</style>
