import { defineStore } from 'pinia'
import axios from 'axios'
import { ref } from 'vue'


// Shape of a project.
// Using ts here should allow us to better implement features i.e - tracking usernames etc down the line.
interface Project {
  id: number
  title: string,
  desc: string,
  primaryColor: string,
  url_github: string,
  url_website: string
  created: Date,
  updated: Date
}

export const useProjectsStore = defineStore('projects', () => {
  const projects = ref([] as Project[]);

  function checkProjectsPopulated(){
    return projects.value.length;
  }

  function $clear(){
    projects.value = [] as Project[];
  }

  async function getProjects() {
    if(projects.value.length === 0){
      await axios.get('http://127.0.0.1:3000/projects')
      .then((response) => {
        console.log('pinia has fetched our projects via node....')
        console.log(response.data)
        projects.value = response.data;
        return;
      }).catch(error => {
        console.log('Could not fetch posts ' + error);
        return;
      })
    }else{
      return
    }
  }



  return { projects, checkProjectsPopulated, getProjects }
})