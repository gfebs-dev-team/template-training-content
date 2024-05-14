
<script setup>
import { ref } from 'vue';

//const imageUrl = ref('../assets/img/GFEBS_Diagram-slide016.jpeg'); // Replace with your actual image URL
const isExpanded = ref(false);

const expandImage = () => {
  isExpanded.value = true;
};

const closeImage = () => {
  isExpanded.value = false;
};
</script>

<template>
  <div>
    <img :src="imageUrl" alt="Image" @click="expandImage">
    <div v-if="isExpanded" class="modal">
      <img :src="imageUrl" alt="Expanded Image">
      <button @click="closeImage">Close</button>
    </div>
  </div>
</template>

<style scoped>
.modal {
  display: none; /* Initially hidden */
  position: fixed; /* Stay in place */
  z-index: 1; /* Sit on top */
  left: 0;
  top: 0;
  width: 100%; /* Full width */
  height: 100%; /* Full height */
  overflow: auto; /* Enable scrolling if needed */
  background-color: rgba(0,0,0,0.4);
}

.modal img {
  max-width: 70%; 
  display: block;
  margin-left: auto;
  margin-right: auto;
}
</style>