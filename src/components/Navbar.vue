<template>
    <section id="nav">
        <router-link to="/">
        <img :src="logo" :alt="alt" id="logo">
        </router-link>

        <div id="responsive">
            
         <div id="menu-overlay" v-if="menuActive" @click="closeMenu($event)"></div>

         <div id="menu-items" :class="{ active:menuActive }">
            <img :src="logo" :alt="alt" id="logo">
            <ul>
                <li><router-link to="/">Home</router-link></li>
                <li><router-link to="/pedidos">Pedidos</router-link></li>       
            </ul>
         </div>
            
            <label for="checkbox" class="hamburger" @click="menuFunctions($events)" >
                <input type="checkbox" id="checkbox">
                <span class="line line--top"></span>
                <span class="line line--middle"></span>
                <span class="line line--bottom"></span>
            </label>
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
    props: ["logo", "alt"],
    data(){
        return{
            menuActive: false,
            
        }
    },
    methods: {
        
        //Para chamar função usar o menuFunctions($event) 
        menuFunctions: function(e){
            var checkBox = document.getElementById("checkbox");
            if (checkBox.checked == true){
                this.menuActive = true;
            } else {
                this.menuActive = false;
            }
        },
        closeMenu: function(e){
            var checkBox = document.getElementById("checkbox").checked = false;
            if( checkBox.checked == false){
                this.menuActive = false;
            } else {
                this.menuActive = false
            }
        },   
    },
}
</script>

<style scoped>
    #nav {
        background-color: #222;
        border-bottom: 4px solid #111;
        padding: 5px 200px;
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

    #checkbox {
        display: none;
    }

    #menu-items{
        display: none
    }
   /* Responsividade */

    @media screen and (max-width: 600px) {
        
        #responsive img{
            position: relative;
            top: 20px;
            margin-bottom: 10px ;
            right: 0px
        }
        
        #menu-overlay{
            position: fixed;
            top: 0;
            left: 0;
            width: 40%;
            height: 100vh;
            background-color: #000;
            opacity: 0.8;
        }

        #menu-items{
            position: fixed;
            top: 0;
            right: 0;
            background-color: #222;
            width: 60%;
            height: 100vh;
            display: none;
            flex-direction: column;
            justify-content: flex-start;
            align-items: center;
        }
        
        #menu-items.active{
            display: flex;
        }

        ul {
            list-style: none;
        }
        #logo{
            margin-top: 30px;
            margin-bottom: 10px;
        }

        ul li {
            text-align: center;
            margin-top: 30px;
            font-size: 18px;
            font-weight: bold;
        }





        /* Navbar Hamburger*/
        #link{
            display: none;
        }
        #checkbox{
            display: none;
        }

        .hamburger {
            position: relative;
            padding: 20px;
            display: flex;
            align-items: center;
            justify-content: center;
            cursor: pointer;
        }
        .line{
            position: absolute;
            width: 25px;
            height: 3px;
            background-color: #fff;
            border-radius: 3px;
            transition: transform .25s, opacity .35s;
        }
        .line--top{
            transform: translateY(-7px);
        }
        .line--bottom{
            transform: translateY(7px);
        }

        #checkbox:checked ~ .line--top{
            transform: rotate(45deg);
        }
        #checkbox:checked ~ .line--middle{
            transform: translateX(16px);
            opacity: 0;
        }
        #checkbox:checked ~ .line--bottom{
            transform: rotate(-45deg);
        }
       

    }
</style>