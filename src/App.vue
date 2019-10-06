<template>
  <div id="app">
    <navbar></navbar>
    <div class="container">
      <div class="card my-5 mx-auto col-xs-12 col-md-8">
        <h3>What do you have to-do today?</h3>
        <todo-input @add="addTodo"></todo-input>
        <todos :todos="todos" v-on:completed="checkCompleted" v-on:delete="deleteTodo"></todos>
      </div>
    </div>
  </div>
</template>

<script>
import Navbar from './components/Navbar'
import Input from './components/Input'
import Todos from './components/Todos'

export default {
  name: 'app',
  data() {
    return {
      todos: [
        { id: 1, title: 'Ricordati di prendere il latte', completed: false, createdAt: new Date() }
      ]
    }
  },
  methods: {
    addTodo(todo) {
      this.todos.push(todo);
    },
    deleteTodo(id) {
      this.todos = this.todos.filter(todo => id != todo.id);
    },
    checkCompleted(id) {
     var indexFound = this.todos.findIndex(todo => todo.id == id);
     this.todos[indexFound].completed = true;

    }
  },
  components: {
    Navbar,
    TodoInput: Input,
    Todos
  }
}
</script>

<style>
  body {
    margin: 0;
    padding: 0;
    text-align: center;
  }
  h3 {
    margin-top: .7em;
  }
</style>
