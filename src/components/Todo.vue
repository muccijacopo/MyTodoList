<template>
    <div @click="$emit('completed', todo)" class="todo">
        <p>{{ todo.title }}
            <button @click="$emit('delete', todo.id)">X</button>
        </p>
    </div>
</template>

<script>
export default {
    props: ['todo']
}
</script>

<style scoped>
    .todo {
        background-color: #fff241;
        font-size: 1.2em;
        text-align: left;
        padding: 0.5em 1em;
        margin: 1em 0;
    }

    .todo:hover {
        background-color: #ffef09;
    }

    button {
        display: inline-block;
        border: none;
        border-radius: 50px;
    }
</style>