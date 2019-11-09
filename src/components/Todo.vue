<template>
    <div>
        <div class="todo" v-if="!todo.editMode">
            <input @change="toggleTodo(todo.id)" type="checkbox" :checked="todo.completed">
            <label @click="todo.editMode = !todo.editMode">
                {{ todo.title }}
                <i class="fas fa-trash-alt del-btn" v-on:click="deleteTodo(todo.id)"></i>
            </label>
        </div>
        <div v-else class="todo">
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
        width: 100%;
        background-color: #f3f3f3;
        padding: 1rem .5rem;
        margin: 1rem 0;
        display: inline-block;
        vertical-align: middle;
        position: relative;
        border-radius: 5px;
    }
    .todo:hover {
        border: 1px solid #f8f8f8;
        background-color: #feffda;
    }
    .todo label {
        font-size: 1.2rem;
        margin: 0;
    }
    .todo input[type="checkbox"] {
        width: 20px !important;
        margin-right: 1rem;
    }
    .todo .del-btn {
        position: absolute;
        right: .5rem;
    }
    .todo .del-btn:hover {
        
        cursor: pointer;
    }
    .todo .date:hover {
        cursor: pointer;
    }
</style>