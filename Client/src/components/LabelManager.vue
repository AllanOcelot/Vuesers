<script setup lang="ts">
  import { ref, onMounted } from 'vue'
  import { storeToRefs } from 'pinia'
  import axios from 'axios'

  // Components
  import ProjectCard from '@/components/ProjectCard.vue'


  // Stores 
  import { useLabelsStore } from '@/stores/labels'

  const store = useLabelsStore()

  // On mounted, get a list of all labels, published and unpublished.
  onMounted(() => {
    store.getLabels()
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
