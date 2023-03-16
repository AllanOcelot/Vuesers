<script setup lang="ts">
  import { useProjectsStore } from '@/stores/projects';
  import { useLabelsStore } from '@/stores/labels'

  import { onMounted } from 'vue'

  // Components
  import ProjectCard from '@/components/ProjectCard.vue'


  // Stores 
  const storeProjects = useProjectsStore()
  const storeLabels = useLabelsStore()

  // Random CTA - just something simple for new contributors to add to.
  const CTA_Messages = ["Need a good lookover", "wants to become your friend", "could do with a helping hand", "just need a little help", "are trying exciting new things"]
  function getRandomCTA(){
    return CTA_Messages[Math.floor(Math.random()* CTA_Messages.length) + 0]
  }

  // On mount, we want to fetch the list of projects from the store.
  onMounted(() => {
    storeProjects.getProjects()
  })
</script>

<template>
  <div class="main-content-display" v-if="storeProjects.projects">
    <div class="introduction-section">
      <h2>We have {{ storeProjects.projects.length }} projects that {{getRandomCTA()}}</h2>
      <p>Data last updated on xx/xx/xxxx</p>
    </div>
    <div class="main-project-container">
      <ProjectCard v-for="item in storeProjects.projects" :project="item" />
    </div>
  </div>
</template>

<style scoped lang="scss">

  .main-project-container {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    column-gap: 20px;
    padding: 0 40px;
  }
</style>
