<script setup>
import ContentContainer from './components/ContentContainer.vue'
import { onMounted} from 'vue';

const courseData = {
  "courseCode": "",
  "courseTitle": "Essentials",
  "topic": "Introduction"
}

/**onMounted(() => {
  let pageFilter;

  let queryString = window.location.search
  let urlParams = new URLSearchParams(queryString)

  if (urlParams.has('simulation')) {
    pageFilter = urlParams.get('simulation')
    //current.value = pageFilter-1;
  }
})**/
</script>

<template>
    <ContentContainer v-bind="courseData"/>
</template>

<style scoped lang="scss">

</style>
