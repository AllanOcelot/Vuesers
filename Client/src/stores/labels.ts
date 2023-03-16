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


export const useLabelsStore = defineStore('labels', {
  state: () => {
    return {
      labels: [] as Label[]
    }
  },

  actions: {
    async getLabels(){
      await axios.get('http://127.0.0.1:3000/labels/all')
      .then((response) => {
        this.labels = response.data;
        return;
      }).catch(error => {
        console.log('Could not fetch labels ' + error);
        return;
      })
    }
  }
})
