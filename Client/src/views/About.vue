<script setup lang="ts">
  console.log('About Page')
</script>

<template>
  <div class="main-content-display">
    <div class="introduction-section">
      <h2>About Vuesers</h2>
      <p>the world is a spoon and I am a fork.</p>
    </div>
  </div>
</template>

<style scoped lang="scss">
  .main-content-display {
    display: flex;
    flex-direction: column;
    flex: 1 auto;
    padding: 20px;

    .introduction-section {
      text-align: center;
      padding: 0px;
      color: #fff;
      padding-top: 75px;
      margin-bottom: 75px;
    }
  }
</style>
