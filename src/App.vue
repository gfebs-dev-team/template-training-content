<script setup>
import ContentContainer from './components/ContentContainer.vue'

const courseData = {
  "courseCode": "",
  "courseTitle": "Example Course",
  "topic": "Introduction to Topic"
}
</script>

<template>
    <ContentContainer v-bind="courseData"/>
</template>

<style scoped lang="scss">

</style>
