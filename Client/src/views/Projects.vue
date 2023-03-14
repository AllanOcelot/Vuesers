<script setup lang="ts">
  import { ref, onMounted } from 'vue'
  import { storeToRefs } from 'pinia'
  import axios from 'axios'

  // Components
  import ProjectCard from '@/components/ProjectCard.vue'


  // Stores 
  import { useProjectsStore } from '@/stores/projects'



  // Projects are fetched via our Pinia Projects Store.
  // This is a bit of a brain melt coming from other store options, but using it via setup and reading the docs with a cup of tea... really make you appreciate how far we have come.
  const store = useProjectsStore()
  const { projects } = storeToRefs(store)




  // Random CTA - just something simple for new contributors to add to.
  const CTA_Messages = ["Need a good lookover", "wants to become your friend", "could do with a helping hand", "just need a little help", "are trying exciting new things"]
  function getRandomCTA(){
    return CTA_Messages[Math.floor(Math.random()* CTA_Messages.length) + 0]
  }


  // On mount, we want to fetch the list of projects from the store.
  onMounted(() => {
    store.getProjects()
  })

</script>

<template>
  <div class="main-content-display">
    <div class="introduction-section">
      <h2>We have {{ projects.length }} projects that {{getRandomCTA()}}</h2>
      <p>Data last updated on xx/xx/xxxx</p>
    </div>
    <div class="main-project-container">
      <ProjectCard v-for="item in projects" :project="item" />
    </div>
  </div>
</template>

<style scoped lang="scss">

</style>
