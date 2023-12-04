<script setup>
import ContentContainer from './components/ContentContainer.vue'

const courseData = {
  "courseCode": "",
  "courseTitle": "GFEBS Essentials",
  "topic": "Introduction"
}
</script>

<template>
    <ContentContainer v-bind="courseData"/>
</template>

<style scoped lang="scss">

</style>
