<template>
    <div class="todo">
        <div v-if="!todo.editMode">
            <div class="text">
                <p @click="todo.editMode = !todo.editMode">{{ todo.title }}</p>
            </div>
            <div class="buttons">
                <button v-if="!todo.completed" @click="toggleTodo(todo.id)"><i class="fas fa-check"></i></button>
                <button @click="deleteTodo(todo.id)"><i class="fas fa-trash-alt"></i></button>
            </div>
        </div>
        <div v-else>
            <input type="text" class="form-control" v-model="todo.title" v-on:keydown.enter="confirmEdit">
        </div>
    </div>
</template>

<script>
export default {
    props: ['todo'],
    methods: {
        toggleTodo(id) {
            this.$store.commit('toggleTodo', id);
        },
        deleteTodo(id) {
            this.$store.commit('deleteTodo', id);
        },
        confirmEdit() {
            this.$store.commit('updateTodo', {
                id: this.todo.id,
                value: this.todo.title
            });
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