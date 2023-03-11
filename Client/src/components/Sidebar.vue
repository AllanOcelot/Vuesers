<script setup lang="ts">

</script>

<template>
  <div class="sidebar-main">
    <div class="top-section">
      <RouterLink to="/" class="router-home">Vuesers</RouterLink>
      <p>Find open source VueJS projects.</p>
    </div>

  </div>
</template>

<style scoped lang="scss">
  .sidebar-main {
    display: flex;
    width: 300px;
    background: #0E0E16;
    flex-direction: column;
    height: 100%;

    .top-section {
      padding: 20px;
      margin-bottom: 20px;
      border-bottom: 1px solid #f1f1f1;
      text-align: center;
      .router-home {
        color: #1cf8af;
        font-size: 24px;
        font-weight: bold; 
        opacity: 0.7;
        text-decoration: none;
        transition: all 0.3s;
        &:hover{
          opacity: 1;
          text-decoration: underline;
        }
      }
      p {
        cursor: default;
        font-size: 14px;
      }
    }
  }
</style>
