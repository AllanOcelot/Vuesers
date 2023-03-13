<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import Sidebar from '@/components/Sidebar.vue'
</script>

<template>
  <!--
  <header>
    <div class="wrapper">
      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
      </nav>
    </div>
  </header>
-->

  <Sidebar />

  <RouterView />
</template>

<style lang="scss">
  @import "./assets/styles.scss";
</style>
