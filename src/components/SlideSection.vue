<script setup>
import SlideBase from './SlideBase.vue'
import { onMounted, ref, computed } from 'vue'
const hasImg = ref(false)

const props = defineProps(['title', 'img', 'subtitle', 'section', 'sectionNum', 'type'])

onMounted(() => {
  hasImg.value = props.img ? true : false
})

</script>

<template>
  <SlideBase class="content" v-bind="props" :columns="1">
      <div class="section-title" title>
        <h2 class="text-5xl w-full text-saffron font-bold">{{ sectionNum }}</h2>
        <h3 class="text-4xl w-full font-bold">{{ subtitle }}</h3>
      </div>
  </SlideBase>
</template>

<style scoped lang="scss">
.section-title{
  margin: auto;
  margin-top: 11rem;
}
</style>