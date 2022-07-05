<template>
  <section id="home">
    <Banner />
    <div class="main-container">
      <h1>Monte seu burger:</h1>
    </div>
  </section>
</template>

<script>
import Banner from '@/components/Banner.vue'



export default {
  name: 'HomeView',
  components: {
    Banner
  }
}
</script>
