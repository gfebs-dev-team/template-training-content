<script setup>
import SlideBase from './SlideBase.vue'
defineProps({
  defName: String,
  defParagraph: String
})
</script>

<template>
  <SlideBase :title="title" :columns="1">
    <template #main>
      <div class="left">
      <p>
        Here are a number key terms and concepts related to this section.<br />
        <span>Click</span> each term to the right to learn more.
      </p>
      <div class="term-definition">
        <h3 id="def-name">{{ defName }}</h3>
        <p id="def-paragraph">{{ defParagraph }}</p>
      </div>
    </div>
    </template>
    <template #column_2>
      <slot></slot>
    </template>   
  </SlideBase>
  
</template>

<style scoped lang="scss">
span {
  font-weight: bold;
}

.left {
  display:flex;
  flex-direction: column;
  align-items: stretch;
  width: 100%;
  height:100%;
  justify-content: space-between;  
}

.term-definition {
  background-color: var(--color-background);
  border-radius: 5px;
  width: 100%;
  height: 60%;

  #def-name {
    margin: 3% 0% 0% 3%;
    color: greenyellow;
    font-size: 14px;
    font-weight: bold;
  }

  #def-paragraph {
    margin: 3% 6% 3% 6%;
    color: white;
    font-size: 14px;
  }
}

:global(.term-buttons) {
  display: flex;
  flex-direction: column;
  justify-content: space-between; 
  width: 50%;
}
</style>
