<script setup>
import ContentContainer from './components/ContentContainer.vue'

const courseData = {
  "courseCode": "",
  "courseTitle": "Essentials Course",
  "topic": "Finance"
}
</script>

<template>
    <ContentContainer v-bind="courseData"/>
</template>

<style scoped lang="scss">

</style>
