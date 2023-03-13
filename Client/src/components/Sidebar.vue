<script setup lang="ts">

  // Display the login modal.
  function showLogin(){
    alert('login modal will show');
  }

</script>

<template>
  <div class="sidebar-main">
    <div class="top-section">
      <RouterLink to="/" class="router-home">Vuesers</RouterLink>
      <p>Find open source VueJS projects.</p>
    </div>
    <div class="mid">
      <ul class="links-menu">
        <li class="active">
          <a href="/">
            <span class="icon">
              <i class="lni lni-folder"></i>
            </span>
            Projects
          </a>
        </li>
        <li>
          <a href="/">
            <span class="icon">
              <i class="lni lni-question-circle"></i>
            </span>
            About Vuesers
          </a>
        </li>
        <li>
          <a href="/">
            <span class="icon">
              <i class="lni lni-book"></i>
            </span>
            Contributing to open source
          </a>
        </li>
        <li>
          <a href="/">
            <span class="icon">
              <i class="lni lni-arrow-up"></i>
            </span>
            Submit your project
          </a>
        </li>
        <li>
          <a href="/">
            <span class="icon">
              <i class="lni lni-check-box"></i>
            </span>
            FAQ
          </a>
        </li>
      </ul>
    </div>



    <div class="bottom">
      <div class="cta-login">
        <button @click="showLogin()">
          Login
        </button>
        <span>or <a href="/">Register an account</a>.</span>
      </div>
    </div>

  </div>
</template>

<style scoped lang="scss">
  .sidebar-main {
    display: flex;
    width: 300px;
    background: #0E0E16;
    flex-direction: column;
    height: 100%;

    .top-section {
      padding: 20px;
      border-bottom: 1px solid #f1f1f183;
      text-align: center;
      .router-home {
        color: #1cf8af;
        font-size: 24px;
        font-weight: bold; 
        opacity: 0.7;
        text-decoration: none;
        transition: all 0.3s;
        &:hover{
          opacity: 1;
          text-decoration: underline;
        }
      }
      p {
        cursor: default;
        font-size: 14px;
      }
    }


    .mid {
      display: flex;
      flex-direction: column;
      flex: 1 auto;
      background-color: rgba(0,0,0,0.5);

      .links-menu {
        padding: 0;
        margin: 0;
        li {
          cursor: pointer;
          opacity: 0.6;
          border-bottom: 1px solid rgb(156 156 157);
          transition-delay: 0.2s;
          transition: all 0.3s;
          a {
            display: block;
            padding: 10px 20px;
            color: #fff;
            text-decoration: none;
            transition-delay: 0.2s;
            transition: all 0.3s;
          }
          .icon {
            position: relative;
            top: 2px;
            margin-right: 10px;
          }

          &.active,
          &:hover{
            opacity: 1;
            a {
              color: #1cf8af;
            }
          }
          &.active {
            border-right: 5px solid #1cf8af;
          }

        }
      }
    }




    .bottom {
      border-top: 1px solid #f1f1f183;
      padding: 20px;
      text-align: center;
      
      .cta-login {
        button {
          width: 100%;
          border: none;
          font-size: 18px;
          cursor: pointer;
          border-radius: 4px;
          padding: 10px 20px; 
          background: #17b181;
          color: #fff;
          opacity: 0.8;
          transition: all 0.3s;
          &:hover{
            border: none;
            opacity: 1;
          }
        }
        span {
          opacity: 0.9;
          color: #fff;
          display: block;
          padding: 5px 0;
          width: 100%;
          a {
            color: #fff;
          }
        }
      }
    }

  }
</style>
