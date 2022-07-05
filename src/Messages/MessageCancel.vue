<template>
    <div class="message-container">
        <p> {{ msg }} </p>
    </div>
</template>

<script>
export default {
    name: 'MessageCancel',
    props: {
        msg : String
    }
}
</script>

<style scoped>
    .message-container{
        color: #8b0000;
        background-color: #FA8072;
        border: 2px solid #DC143C;
        border-radius: 5px;
        padding: 10px;
        margin-right: auto;
        max-width: 400px ;
        margin: 30px auto;
    }
</style>