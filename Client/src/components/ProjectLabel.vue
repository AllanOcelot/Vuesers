<script setup lang="ts">
  import { onMounted } from 'vue'
  import { storeToRefs } from 'pinia'
  import { reactive } from 'vue'

  // Stores 
  import { useLabelsStore } from '@/stores/labels'
  const { labels } = storeToRefs(useLabelsStore());


  const props = defineProps({
    label: {
      type: String,
      required: true
    }
  })

  const state = reactive({
    color_background: "",
    color_text: "",
    name: "", 
    valid: false,
  })


  interface Item {
    id: string
    name: string,
    backgroundColor: string,
    textColor: string,
    created: Date,
    updated: Date
  }


  // Label lookup
  function labelLookup(labelID : String){
    let labelsArray : Item[];
    labelsArray = labels.value;
    if(labelsArray.find(item => item.id as string === labelID)){
      let labelData : Item = labelsArray.find(item => item.id === labelID)!;
      state.color_background = labelData.backgroundColor;
      state.color_text = labelData.textColor;
      state.name = labelData.name;
      state.valid = true;
    }else{
      console.log('Tag has not been approved yet');
    }
  }

  onMounted(() => {
    labelLookup(props.label);
  })
</script>

<template>
  <div class="projectLabel" v-if="state.valid === true"
    :style="`background-color:#${state.color_background}; color:#${state.color_text};`"
  >
    {{ state.name }}
  </div>
</template>

<style scoped lang="scss">
.projectLabel {
  cursor: pointer;
  background: #f1f1f1;
  color: #000;
  padding: 6px 15px;
  border-radius: 6px;  
  text-align: center; 
  display: inline-block;
  margin: 5px;
  opacity: 0.75;
  transition: all 0.3s;
  &:hover{
    opacity: 1;
    transition: all 0.3s;
  }
}
</style>
