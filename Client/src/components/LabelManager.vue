<script setup lang="ts">
  import { ref, onMounted } from 'vue'
  import { storeToRefs } from 'pinia'
  import axios from 'axios'

  // Components
  import ProjectCard from '@/components/ProjectCard.vue'
  import ProjectLabel from '@/components/ProjectLabel.vue'

  // Stores 
  import { useLabelsStore } from '@/stores/labels'
  const store = useLabelsStore()


  
  interface Label {

  }

  // On mounted, get a list of all labels, published and unpublished.
  onMounted(() => {
    store.getLabels()
  })

</script>

<template>
  <div>
    <div>
      <div class="labels">
        <ProjectLabel v-for="item in store.labels" :key="item.id" :label="item.id" />
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
  .labels {
    max-height: 150px;
    overflow-x: hidden;
    overflow-y: auto;
    .projectLabel {
      width: 100%;
    }
  }

</style>
