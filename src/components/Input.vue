<template>
    <div id="input">
            <h3>What do you have to-do today?</h3>
            <transition name="fade-slide">
                <div v-if="message" class="alert alert-success">{{ message }}</div>
            </transition>
            <div class="input-group">
                <input type="text" class="form-control" placeholder="Call mother..." v-model="todoText" v-on:keydown.enter="addTodo()" >
                <button class="btn btn-info" @click="addTodo()">Add todo</button>
            </div>
            <hr>
    </div>    
</template>

<script>
import uuid from 'uuid'
import { checkInput } from '../services/Todo'

export default {
    data() {
        return {
            todoText: '',
            message: ''
        }
    },
    methods: {
        addTodo() {
            const todo = checkInput(this.todoText);
            if(todo) {
                this.$store.dispatch('addTodo', todo);
                this.todoText = '';
                this.message = "You\'ve just added a new todo to " + (todo.label ? todo.label: 'Inbox');
                setTimeout(() => this.message = '', 3000);
            }
        }
    }
}
</script>

<style scoped>

#input {
    margin: 2rem;
}
#input hr {
    border: 1px solid #242424;
    margin: 2rem 0;
}
.input-group {
    margin: 1rem auto;
}
.input-group .btn {
    margin-left: 1rem;
    background: #202020;
    color: white;
    border: none;
}
.input-group .btn:hover {
    background: #4b4b4b
}

</style>