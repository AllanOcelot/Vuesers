<script setup lang="ts">
  import LabelManager from '@/components/LabelManager.vue'
  
  console.log('Submit Page')
</script>

<template>
  <div class="main-content-display">
    <div class="introduction-section">
      <h2>Submit A Project</h2>
      <p>Are you the owner of a VueJS project of any size? Let us know!</p>
    </div>
    <div class="main-content-section submit">
      <div class="project-information">
        <section>
          <h3>Project information via github here</h3>
          <p>Project information from github will go here.</p>
        </section>
        <section>
          <h3>Additional Information:</h3>
          <p>Give some extra information on what you are looking for, or what your project does</p>
          <textarea name="" id="" cols="30" rows="10"></textarea>
        </section>
      </div>
      <div class="additional-details">
        <section>
          <h4>Labels</h4>
          <LabelManager />
        </section>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
  .main-content-section {
    padding: 0 40px;
    section {
      margin-bottom: 50px;
    }


    &.submit {
      display: flex;
      flex-direction: row;
      flex: 1 auto;
      .project-information {
        width: 70%;
      }
      .additional-details {
        width: 30%;
        section {
          padding-bottom: 10px;
          margin-bottom: 10px;
          border-bottom: 1px solid rgba(255,255,255,0.1);
        }
      }
    }
  }
</style>
