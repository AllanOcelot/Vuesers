<script lang="ts">
import type { PropType } from "vue";

// For testing only 
interface Project {
  title: string,
  desc: string,
  id: number
}
</script>

<script setup lang="ts">
defineProps({
  project : {
    type: Object as PropType<Project>,
    required: true
  }
})
</script>

<template>
  <div class="project-card">
    <a href="/">{{project.title}}</a>
    <p>{{project.desc}}</p>
  </div>
</template>

<style scoped>

</style>
