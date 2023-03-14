<script setup lang="ts">
  console.log('About Page')
</script>

<template>
  <div class="main-content-display">
    <div class="introduction-section">
      <h2>About Vuesers</h2>
      <p>Learn more about Vuesers and it's goals.</p>
    </div>


    <div class="about-main-content">
      <section>
        <h3>What is Vuesers?</h3>
        <p>To put it simply, Vuesers is an attempt to develop an ecosystem of VueJS developers of all abilities. Creating and maintaining VueJS projects whilst at the same time encouraging cross collaboration between projects.</p>
      </section>
      <section>
        <h3>
          Why was Vuesers created?
        </h3>
        <p>I wanted to create a simple and easy to use Vue centric version of <a href="https://up-for-grabs.net/#/" title="Up For Grabs" target="_blank">Up For Grabs</a>. One that would focus on Vue, whilst encouraging developers using other frameworks to 'dip their toes' into the water.</p>
        <p>I have a full time role that keeps me busy - but I'll occasionally have free time to contribute to open source projects. I found it difficult to find VueJS projects that resonated with me, easily. I'm hoping I can kill two birds with one stone hear - Learn more about Vue3 and best practice, whilst also building a small community of VueJS projects and developers.</p>
      </section>
      <section>
        <h3>Roadmap</h3>
        <p>Too early to say - Nothing is set in stone with Vuesers. It's a small hobby project that I spend an hour a day on roughly at the moment. That being said - if we can get momentum behind it, I'd like it to become a self sustaining small community.</p>
        <p>I plan to add user accounts, project pages, the ability for project owners to ask for specific help etc etc etc. </p>
        <p>I'll update this once I know more....</p>
      </section>
    </div>
  </div>
</template>

<style scoped lang="scss">
  .about-main-content {
    section {
      margin-bottom: 30px;
      border-bottom: 1px solid rgba(255,255,255,0.1);
      p {
        margin-bottom: 20px;
      }
    }
  }


</style>
