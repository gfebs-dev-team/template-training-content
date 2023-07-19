<script setup>
import ContentContainer from './components/ContentContainer.vue'

const courseData = {
    'course': "GFEBS L210E Fianancials Processes Overview",
    'topic': "Introduction to Financials"
}
</script>

<template>
    <ContentContainer v-bind="courseData"/>
</template>

<style scoped lang="scss">

</style>
