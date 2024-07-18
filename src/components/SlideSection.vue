<script setup>
import SlideBase from './SlideBase.vue'
import { onMounted, ref } from 'vue'
const hasImg = ref(false)

const props = defineProps(['title', 'img', 'subtitle', 'section', 'sectionNum', 'type'])

onMounted(() => {
  hasImg.value = props.img ? true : false
})

</script>

<template>
  <SlideBase class="content" v-bind="props">
      <div class="m-auto" title>
        <h2 class="text-5xl w-full text-saffron font-bold">{{ sectionNum }}</h2>
        <h3 class="text-4xl w-full font-bold">{{ subtitle }}</h3>
      </div>
  </SlideBase>
</template>