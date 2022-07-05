<template>
    <div class="message-container">
        <p> {{ msg }} </p>
    </div>
</template>

<script>
export default {
    name: 'MessageUpdate',
    props: {
        msg : String
    }
}
</script>

<style scoped>
    .message-container{
        color: #3A6324;
        background-color: #C3D48B;
        border: 2px solid #329542;
        border-radius: 5px;
        padding: 10px;
        margin-right: auto;
        max-width: 400px ;
        margin: 30px auto;
    }
</style>