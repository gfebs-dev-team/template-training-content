<script setup>
import SlideBase from './SlideBase.vue'
defineProps({
  defName: String,
  defParagraph: String
})
</script>

<template>
  <SlideBase>
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
  </SlideBase>
</template>

<style scoped lang="scss">
span {
  font-weight: bold;
}

.left {
  
}

.term-definition {
  background-color: dimgray;
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

.content {
  display: flex;
  flex-direction: row;
  gap: 1em;
  font-size: 1.1em;
  width: 100%;
}
</style>
