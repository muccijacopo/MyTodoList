<template>
    <div class="todo">
        <span class="text">{{ todo.title }}</span>
        <button @click="$emit('delete', todo.id)"><i class="fas fa-trash-alt"></i></button>
        <button v-if="!todo.completed" @click="$emit('completed', todo.id)"><i class="fas fa-check"></i></button>
    </div>
</template>

<script>
export default {
    props: ['todo']
}
</script>

<style scoped>
    .todo {
        background-color: #f3f3f3;
        font-size: 1.2em;
        text-align: left;
        padding: 10px 20px;
        margin: 1em 0;
    }

    .todo:hover {
        border: 1px solid #f8f8f8;
        background-color: #feffda;
    }
    

    .todo button {
        background: none;
        border: none;
        float: right;
        margin-left: 10px;
    }

</style>