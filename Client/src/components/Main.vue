<script setup lang="ts">
  import { ref, onMounted } from 'vue'
  import axios from 'axios'
  import ProjectCard from './ProjectCard.vue';


  // so weird needing to declare what is and isn't reactive!
  const projectsData = ref([]);

  function getProjects(){
    axios.get('http://127.0.0.1:3000/projects')
    .then((response) => {
      console.log(response.data)
      projectsData.value = response.data;
    }).catch(error => {
      console.log('Could not fetch posts ' + error);
    })
  }


  // On mount, we want to fetch the list of projects.
  onMounted(() => {
    getProjects()
  })

</script>

<template>
  <div class="main-content-display">
    <div class="introduction-section">
      <h2>We have X projects that DYNAMIC_TEXT_GOES_HERE</h2>
      <p>Data last updated on xx/xx/xxxx</p>
    </div>
    <div class="main-project-container">
      <ProjectCard v-for="item in projectsData" :project="item" />
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
