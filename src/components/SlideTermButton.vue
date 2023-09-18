<script setup>
defineProps({
  termName: String
})
</script>

<template>
  <button>{{ termName }}</button>
</template>

<style scoped>
.terms {
  margin-left: auto;
  margin-bottom: auto;
  list-style-type: none;
}

button {
  display: block;
  outline: 0;
  text-align: center;
  cursor: pointer;
  padding: 10px 10px;
  margin: 1% 0% 1% auto;
  margin-left: auto;
  width: 100%;
  border: 0;
  border-radius: 10px;
  color: #fff;
  font-size: 14px;
  background: #00d301;
  background: -webkit-linear-gradient(-196deg, #00d301, #36c275 50%, #00a562);
  background: -webkit-linear-gradient(164deg, #00d301, #36c275 50%, #00a562);
  background: linear-gradient(286deg, #00d301, #36c275 50%, #00a562);
  line-height: 20px;
  font-weight: 800;
  transition: background, color 0.1s ease-in-out;
}
</style>
