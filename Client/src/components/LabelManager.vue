<script setup lang="ts">
  import { ref, onMounted } from 'vue'
  import { storeToRefs } from 'pinia'
  import axios from 'axios'

  // Components
  import ProjectCard from '@/components/ProjectCard.vue'


  // Stores 
  import { useLabelsStore } from '@/stores/labels'



  // Labels store.
  const store = useLabelsStore()
  const { labels } = storeToRefs(store)
  const { getLabels } = store


  // On mounted, get a list of all labels, published and unpublished.
  onMounted(() => {
    getLabels()
  })

</script>

<template>
  <div>
    <div>
      <p>Create new label here...</p>
      {{ store.labels }}
    </div>
  </div>
</template>

<style scoped lang="scss">
</style>
