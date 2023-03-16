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
      <div class="labels">
        <div class="label" v-for="item in store.labels" :key="item.id" 
          :style="`background-color:#${item.backgroundColor}; color:#${item.textColor};`" >
          {{ item.name }}
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
</style>
