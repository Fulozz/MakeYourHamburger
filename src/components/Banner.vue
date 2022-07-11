<template>
    <div id="main-banner">
        <h1>Make your Burger:</h1>
    </div>
</template>

<script>

export default {
    name: "Banner",
}
</script>

<style scoped>
    #main-banner{
        background-image: url('/public/img/burger.jpg');
        background-position: right bottom -250px;
        background-size: cover;
        height: 92vh;
        width: auto;
        display: flex;
        align-items: center;
        justify-content: flex-start;
    }
    #main-banner > h1{
        color: #fff;
        text-align: center;
        font-size: 3.75rem;
        background-color: rgba(34, 34, 34,0.1);
        padding: 1.25rem 20%;
    }



    @media screen and (max-width: 600px) {
       #main-banner{
            background-image: url('/public/img/burger.jpg');
            background-position: right bottom -400px;
            background-size: cover;
            height: 400px;
            width: auto;
            display: flex;
            align-items: center;
            justify-content: flex-start;
    }
        #main-banner > h1{
            color: #fff;
            text-align: left;
            bottom: 0.625rem;
            font-size: 3rem;
            background-color: transparent;
            padding: 1.25rem 2.5rem;
    } 
    }
</style>