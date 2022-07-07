<template>
    <section>
        <Message :msg="msg" v-show="msg" />
        <div>
            <form id="burger-form" @submit="createBurger">
                <div class="input-container">
                    <label for="nome">Nome do cliente:</label>
                    <input required type="text" id="nome" name="name" v-model="nome" placeholder="Digite seu nome">
                </div>
                <div class="input-container">
                    <label for="pao">Escolha o pao:</label>
                    <select name="pao" id="pao" v-model="pao" required >
                        <option v-for="pao in paes" :key="pao.id" :value="pao.tipo"> {{ pao.tipo }} </option>
                    </select>
                </div>
                <div class="input-container">
                    <label for="carne">Escolha o carne do seu burger:</label>
                    <select name="carne" id="carne" v-model="carne" required>
                        <option v-for="carne in carnes" :key="carne.id" :value="carne.tipo"> {{ carne.tipo }}</option>
                    </select>
                </div>
                <div id="opcionais-container" class="input-container">
                    <label for="opcionais" id="opcionais-title">Selecione os opcionais</label>
                    <div class="checkbox-container" v-for="opcional in opcionaisData" :key="opcional.id" >
                        <input type="checkbox" name="opcionais" v-model="opcionais" :value="opcional.tipo">
                        <span>{{ opcional.tipo }}</span>
                    </div>
 
                </div>
                <div class="input-container">
                    <input type="submit" class="submit-btn" value="Criar meu Burger!">
                </div>
                

            </form>
        </div>
    </section>
</template>
<script>
import Message from '../Messages/Message.vue';

export default {
    name: 'BurgerForm',
    components:{
        Message,
    },
    data(){
        return{
            paes: null,
            carnes: null,
            opcionaisData: null,
            nome: null,
            pao: null,
            carne: null,
            opcionais: [],
            msg: null,
        }
    },
    methods: {
        async getIngredientes(){
            const req = await fetch("http://localhost:3000/ingredientes");
            const data = await req.json();

            this.paes = data.paes;
            this.carnes = data.carnes;
            this.opcionaisData = data.opcionais;
        },
        async createBurger(e){
            e.preventDefault();

            const data ={
                nome: this.nome,
                carne: this.carne,
                pao: this.pao,
                opcionais: Array.from(this.opcionais),
                status: "Solicitado",
            }
            const dataJson = JSON.stringify(data);
            const req = await fetch("http://localhost:3000/burgers",{
                method: "POST",
                headers: {"Content-Type" : "application/json" },
                body: dataJson
            });

            const res = await req.json()

            console.log(res)

            //colocar mensagem de sistema
            this.msg = `Pedido Nº ${res.id} realizado com sucesso` 
            
            //limpar mensagem
            setTimeout(() => this.msg = "", 3000)

            //limpar os campos
            this.nome = "";
            this.carne = "";
            this.pao = "";
            this.opcionais = '';

         }   
    },
    mounted(){
        this.getIngredientes()
    }

}
</script>

<style scoped>
    #burger-form{
        max-width: 400px;
        margin: 0 auto;
    }
    .input-container{
        display: flex;
        flex-direction: column;
        margin-bottom: 20px;
    }
    label{
        font-weight: bold;
        margin-bottom: 15px;
        color: #222;
        padding: 5px 10px;
        border-left: 4px solid #FCBA03;
    }
    input, select{
        padding: 5px 10px;
        width: 400px;
    }

    #opcionais-container{
        flex-direction: row;
        flex-wrap: wrap;
    }

    #opcionais-title{
        width: 100%;
    }
    .checkbox-container{
        display: flex;
        align-items: flex-start;
        width: 50%;
        margin-bottom: 20px;
    }

    .checkbox-container span,
    .checkbox-container input{
        width: auto;
    }
    .checkbox-container span{
        margin-left: 6px;
        font-weight: bold;
    }

    .submit-btn{
        background-color: #222;
        color: #FCBA03;
        font-weight: bold;
        border: 2px solid #222;
        padding: 10px;
        font-size: 16px;
        margin: 0 auto;
        cursor: pointer;
        transition: .5s;
        border-radius: 5px;
    }

    .submit-btn:hover{
        background-color: transparent ;
        color: #222;
    }
</style>