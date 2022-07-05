<template>
    <section id="nav">
        <router-link to="/">
        <img :src="logo" :alt="alt" id="logo">
        </router-link>
        
            <div class="hamburger-btn">
                <span></span>
                <span></span>
                <span></span>
            </div>
            <div id="link">
        <router-link to="/">Home</router-link> 
        <router-link to="/pedidos">Pedidos</router-link>
    </div>
  </section>
</template>

<script>
export default {
    name: "Navbar",
    props: ["logo", "alt"]
}
</script>

<style scoped>
    #nav {
        background-color: #222;
        border-bottom: 4px solid #111;
        padding: 15px 50px;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    #logo{
        width: 40px;
        height: auto;
    }
    #nav a {
        color: #FCBA03;
        text-decoration: none;
        margin: 12px;
        transition:  .5s;
    }
    #nav a:hover{
        color: #FFF
    }

    @media screen (max-width: 1024px) {
        #link{
            display: none;
        }
        
    }
</style>