<script setup lang="ts">
  import ProjectCard from './ProjectCard.vue';

  // For testing only 
  interface Project {
    title: string,
    desc: string,
    id: number
  }

  const project: Project = {
    title: "Example project name",
    desc: "Example project desc",
    id: 0
  }

</script>

<template>
  <div class="main-content-display">
    <div class="introduction-section">
      <h2>We have X projects that DYNAMIC_TEXT_GOES_HERE</h2>
      <p>Data last updated on xx/xx/xxxx</p>
    </div>
    <div class="main-project-container">
      <ProjectCard :project="project" />
    </div>
  </div>
</template>

<style scoped lang="scss">
  .main-content-display {
    display: flex;
    flex-direction: column;
    padding: 40px;
  }
</style>
