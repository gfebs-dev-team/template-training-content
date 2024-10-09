<script setup>
import { onBeforeMount, watch, onMounted } from 'vue'
import { storeToRefs } from 'pinia'
import { useSlidesStore } from '@/stores/slides'
import { useUrlSearchParams } from '@vueuse/core'

const params = useUrlSearchParams('history')
const slides = useSlidesStore()
const { current, slidesComp } = storeToRefs(slides)

let launcher
onMounted(() => {
  window.addEventListener('message', function (event) {
    launcher = event.data.launcher
  })
})

onBeforeMount(() => {
  let pageFilter

  let queryString = window.location.search
  let urlParams = new URLSearchParams(queryString)

  if (urlParams.has('page')) {
    pageFilter = parseInt(urlParams.get('page'))
    current.value = pageFilter - 1
  }

  window.addEventListener('beforeunload', function () {
    window.opener.postMessage(
      { GFEBS_LOCATION: this.window.location.href, launcher: launcher },
      launcher
    )
  })
})

watch(current, (current) => {
  params.page = current + 1
})

defineProps(['topic', 'title'])
</script>

<template>
  <template v-for="(slide, index) in slidesComp" :key="index">
    <Transition
      name="fade"
      enter-active-class="transition-opacity duration-500 ease-in-out"
      leave-active-class="transition-opacity duration-500 ease-in-out"
      enter-from-class="absolute opacity-0"
      leave-to-class="absolute opacity-0"
    >
      <component
        :class="[{ active: index == current }]"
        :is="slide"
        v-show="index == current"
        v-if="slide"
      ></component>
    </Transition>
  </template>
</template>
