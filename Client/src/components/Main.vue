<script setup lang="ts">
  import { ref, onMounted } from 'vue'
  import axios from 'axios'
  import ProjectCard from './ProjectCard.vue';


  // I've always liked weird/quircky CTA messages, it also gives new contributors something fun to do for a PR
  // let's move and import this list in future though....
  const CTA_Messages = ["Need a good lookover", "wants to become your friend", "could do with a helping hand", "just need a little help", "are trying exciting new things"];


  // so weird needing to declare what is and isn't reactive!
  const projectsData = ref([]);


  function getRandomCTA(){
    return CTA_Messages[Math.floor(Math.random()* CTA_Messages.length) + 0];
  }


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
      <h2>We have {{ projectsData.length }} projects that {{getRandomCTA()}}</h2>
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
    flex: 1 auto;
    padding: 20px;

    .introduction-section {
      text-align: center;
      padding: 0px;
      color: #fff;
      padding-top: 75px;
      margin-bottom: 75px;
    }

    .main-project-container {
      display: grid;
      grid-template-columns: 1fr 1fr 1fr;
      column-gap: 20px;
    }

  }
</style>
