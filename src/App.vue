<template>
  <div>
    <Navbar :logo="logo_src" :alt="app_name" />
    <router-view />
    <Footer />
  </div>
</template>

<script>
import Navbar from './components/Navbar.vue'
import Footer from './components/Footer.vue'

export default {
  name: 'App',
  components: { 
    Navbar,
    Footer
  },
  data() {
    return {
      logo_src: "/img/logo.png",
      app_name: "Make Your Buger",
    }
  }
  
}
</script>

<style>
    ::-webkit-scrollbar {
        width: 6px;
        border-left: 1px solid #E6ECF8;
    }

    ::-webkit-scrollbar-thumb {
        background-color: var(--dark-navy);
        cursor: grab;
    }
    *{
      font-family: Helvetica;
      padding: 0;
      margin: 0;
      box-sizing: border-box;
    }
    h1{
      text-align: center;
      font-size: 42px;
      margin-bottom: 30px;
      color: #222;
    }
    .main-container{
      margin: 50px;
      min-height: 250px;
    }
</style>
