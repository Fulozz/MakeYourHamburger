<template>
    <div id="main-banner">
        <h1>Maker Your Burger</h1>
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
        text-align: center;
        font-size: 60px;
        background-color: rgba(34, 34, 34,0.6);
        padding: 20px 40px;
    }
    @media screen and (min-width: 1024px) {
        
    }
</style>