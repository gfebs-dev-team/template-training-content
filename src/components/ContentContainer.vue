<script setup lang="ts"></script>

<template>
  <div class="layout">
    <button class="nav-btn" id="prev">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="15"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="4"
        stroke-linecap="round"
        stroke-linejoin="round"
        class="feather feather-arrow-left"
      >
        <line x1="19" y1="12" x2="5" y2="12"></line>
        <polyline points="12 19 5 12 12 5"></polyline>
      </svg>
    </button>
    <div class="content-box">
      <slot></slot>
    </div>
    <button class="nav-btn" id="next">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="15"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="4"
        stroke-linecap="round"
        stroke-linejoin="round"
        class="feather feather-arrow-right"
      >
        <line x1="5" y1="12" x2="19" y2="12"></line>
        <polyline points="12 5 19 12 12 19"></polyline>
      </svg>
    </button>
  </div>
</template>

<style scoped lang="scss">
.layout {
  position: relative;
  display: grid;
  grid-gap: 1em;
  height: 100%;
  align-items: center;
  grid-template-columns: 2em 1fr 2em;
  grid-template-areas: "a b c";
  padding: 0em 1em 3em 1em;
  .content-box {
    grid-area: b;
    width: 100%;
    height: 100%;
    background-color: white;
  }
  button {
    font-weight: bold;
    color: white;
    background-color: #1ea3de;
    height: 129px;
    border-width: 1px;
  }
}
</style>
