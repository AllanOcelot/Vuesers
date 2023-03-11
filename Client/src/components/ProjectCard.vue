<script lang="ts">
import type { PropType } from "vue";

interface Project {
  title: string,
  desc: string,
  color: string,
  url: string,
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
    <a :href="project.url" target="_blank">{{project.title}}</a>
    <p>{{project.desc}}</p>
  </div>
</template>

<style scoped lang="scss">
  .project-card {
    background: #fff;
  }
</style>
