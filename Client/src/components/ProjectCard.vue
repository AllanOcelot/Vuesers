<script lang="ts">
  import type { PropType } from "vue";
  

  interface Project {
    title: string,
    desc: string,
    color: string,
    url_website: string,
    url_github: string,
    id: number,
    labels: string
  }
</script>

<script setup lang="ts">
  import ProjectLabel from '@/components/ProjectLabel.vue'

  const props = defineProps({
    project : {
      type: Object as PropType<Project>,
      required: true
    }
  })

</script>

<template>
  <div class="project-card">
    <div class="top">
      <p class="title">{{project.title}}</p>
      <p>{{project.desc}}</p>
    </div>
    <div class="mid">
      <div class="labels">
       <ProjectLabel v-for="item in project.labels" :label="item" />
        <p v-if="!project.labels">
          <small>
            There are no labels for this project.
          </small>
          </p>
      </div>
    </div>
    <div class="bottom">
      <div class="links">
        <a v-if="project.url_github" :href="project.url_github" target="_blank" title="View Repo on Github">
          <i class="lni lni-github-original"></i>
        </a>
        <a v-if="project.url_website" :href="project.url_website" target="_blank" title="View Project website">
          <i class="lni lni-website"></i>
        </a>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
  .project-card {
    display: flex;
    flex-direction: column;
    background: #fff;
    color: #000;

    .top {
      padding: 10px 20px;
      .title {
        font-size: 28px;
      }
    }

    .mid {
      display: flex;
      flex-direction: column;
      padding: 10px 20px 5px 20px;
      background: #f1f1f1;
      border-top: 1px solid rgba(0,0,0,0.25);
      border-bottom: 1px solid rgba(0,0,0,0.25);
      flex: 1 auto;
      justify-content: center;
      .labels {
        width: 100%;
        text-align: center;
        p {
          margin-bottom: 5px;
        }
      }
    }

    .bottom {
      padding: 10px 20px;
      margin: auto 0 0 0;
      .links {
        width: 100%;
        a{
          color: #000;
          font-size: 24px;
          margin-right: 20px;
          opacity: 0.9;
          transition: opacity 0.3s;
          &:hover {
            opacity: 1;
          }
        }
      }
    }
  }
</style>
