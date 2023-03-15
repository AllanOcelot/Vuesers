import { defineStore } from 'pinia'
import axios from 'axios'
import { ref } from 'vue'

// Shape of labels.
interface Label {
  id: number
  name: string,
  backgroundColor: string,
  textColor: string,
  created: Date,
  updated: Date
}

export const useLabelsStore = defineStore('projects', () => {
  const labels = ref([] as Label[]);

  function checkLabelsPopulated(){
    return labels.value.length;
  }

  function $clear(){
    labels.value = [] as Label[];
  }

  async function getLabels() {
    if(labels.value.length === 0){
      await axios.get('http://127.0.0.1:3000/labels/all')
      .then((response) => {
        console.log('Pinia fetching labels')
        console.log(response.data)
        labels.value = response.data;
        return;
      }).catch(error => {
        console.log('Could not fetch labels ' + error);
        return;
      })
    }else{
      return
    }
  }
  return { labels, checkLabelsPopulated, getLabels }
})