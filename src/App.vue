<script setup>
import ContentContainer from './components/ContentContainer.vue'

const courseData = {
  "courseCode": "",
  "courseTitle": "Example Course",
  "topic": "How to Use this Template"
}
</script>

<template>
    <ContentContainer v-bind="courseData"/>
</template>

<style scoped lang="scss">

</style>
