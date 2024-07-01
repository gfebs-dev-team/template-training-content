<script setup>
import ContentContainer from './components/ContentContainer.vue'

const courseData = {
  courseCode: ' ',
  courseTitle: 'Essentials',
  topic: 'Introduction'
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
  <ContentContainer :courseData="courseData" />
</template>
