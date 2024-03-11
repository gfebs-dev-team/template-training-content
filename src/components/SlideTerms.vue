<script setup>
import SlideBase from './SlideBase.vue'
defineProps({
  title: String,
  defName: String,
  defParagraph: String
})
</script>

<template>
  <SlideBase :title="title">
    <template #main>
      <div class="left">
        <div class="main-text">
          <slot name="main-text" />
        </div>

        <div class="term-definition" v-if="defName != ''">
          <h3 id="def-name">{{ defName }}</h3>
          <p id="def-paragraph">{{ defParagraph }}</p>
        </div>
      </div>
    </template>
    <div class="column column_2">
      <slot></slot>
    </div>
  </SlideBase>
</template>

<style scoped lang="scss">
.left {
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  justify-content: space-between;
  overflow: auto;
  .main-text {
    display:flex;
    flex-direction: column;
    padding: 1rem 0rem;
    gap:1rem;
  }
}

.term-definition {
  background-color: var(--color-background);
  border-radius: 5px;
  display: flex;
  width: 100%;
  flex-direction: column;
  gap: 1.5rem;
  padding: 2rem;
  max-height: 15rem;
  overflow: auto;
  
  #def-name {
    color: var(--color-accent);
    font-size: var(--m0);
    font-weight: bold;
  }

  #def-paragraph {
    overflow: auto;
    font-size: $m-2;
    line-height: 1.5rem;

    @media only screen and (max-width: 950px) {
      overflow:visible;
    }
  }

  @media only screen and (max-height: 925px) {
    max-height: max-content;
    #def-paragraph{
      font-size: var(--m-1);
    }
  }
}

:global(.column_2) {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 1.5rem;
  width: 80%;
}
</style>
