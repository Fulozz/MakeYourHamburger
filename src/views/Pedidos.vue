<template>
    <section>
    <div class="main-container">
      <h1>Gerenciar pedidos:</h1>
      <Dashboard />
      </div>
    </section>
</template>

<script>
import Dashboard from '@/components/Dashboard.vue'
export default {
  name: 'Pedidos',
  components:{
    Dashboard
    
  }
}
</script>

<style scoped>

</style>
