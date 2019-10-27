<template>
    <div class="todo">
        <div v-if="!todo.editMode">
            <div class="text">
                <p @click="todo.editMode = !todo.editMode">{{ todo.title }}</p>
            </div>
            <div class="buttons">
                <button v-if="!todo.completed" @click="checkTodo(todo.id)"><i class="fas fa-check"></i></button>
                <button @click="deleteTodo(todo.id)"><i class="fas fa-trash-alt"></i></button>
            </div>
        </div>
        <div v-else>
            <input type="text" class="form-control" :placeholder="todo.title" v-model="todo.title" v-on:keydown.enter="todo.editMode = !todo.editMode">
        </div>
    </div>
</template>

<script>
export default {
    props: ['todo'],
    methods: {
        checkTodo(id) {
            this.$store.commit('checkTodo', id);
        },
        deleteTodo(id) {
            this.$store.commit('deleteTodo', id);
        }
    }
}
</script>

<style scoped>
    .todo {
        background-color: #f3f3f3;
        font-size: 1.2em;
        text-align: left;
        padding: 1rem 1rem;
        margin: 1rem 0;
        position: relative;
    }

    .todo:hover {
        border: 1px solid #f8f8f8;
        background-color: #feffda;
    }

    .todo .text {
        display: inline-block;
        width: 80%;
    }

    .buttons {
      float: right;
    }    

    .buttons button {
        background: none;
        border: none;    
    }

</style>