<script setup></script>

<template>
  <div class="sim">
    <div class="header">
      <h2>SAP Easy Access</h2>
    </div>
    <div class="toolbar">
      <button class="btn menu">Menu</button>
      <input type="text">
      <button class="btn">Log off</button>
      <button class="btn menu">System</button>
      <button class="btn">User menu</button>
      <button class="btn">SAP menu</button>
      <button class="btn">SAP Business Workplace</button>
      <button class="btn">Add to Favorite</button>
      <button class="btn" disabled>Delete Favorite</button>
      <button class="btn" disabled>Change Favorite</button>
      <button class="btn" disabled>Move Favorite down</button>
      <button class="btn" disabled>Move Favorite up</button>
    </div>
  </div>
</template>

<style lang="scss">
.sim {
  height: 100%;
  width: 100%;
  background-color: aliceblue;
  display: flex;
  flex-direction: column;
  .header {
    display: flex;
    padding: .2rem .5rem;
    width: 100%;
    background: linear-gradient(#e4eaf0, #B6C9DD), linear-gradient(#ffffff00, #00000021),linear-gradient(#ffffffc4, #00000000);
    h2 {
      font-family: 'Arial';
      font-style: italic;
      font-weight: bold;
      font-size: $m0;
      color: #181818;
    }
  }

  .toolbar {
    display:flex;
    height: 1.7rem;
    padding: .2rem .5rem;
    gap: .2rem;

    .btn {
      font-size: .7rem;
      border-radius: 0;
      background: linear-gradient(#f5efbe, #EBDF8C);
      border: .1rem solid black;
    }
  }
}
</style>
