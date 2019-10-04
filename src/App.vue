<template>
  <div id="app">
    <navbar></navbar>
    <div class="container">
      <div class="card my-5 mx-auto col-xs-12 col-md-8">
        <h3>What you have to-do?</h3>
        <todo-input @add="addTodo"></todo-input>
        <todos :todos="todos" :completed="todosCompleted" v-on:completed="completeTodo()" v-on:delete="deleteTodo"></todos>
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
      todos: [],
      todosCompleted: []
    }
  },
  methods: {
    addTodo(todo) {
      this.todos.push(todo);
    },
    deleteTodo(id) {
      this.todos = this.todos.filter(todo => id != todo.id);
    },
    completeTodo(todo) {
      var index = this.todos.indexOf(todo);
      var todoCompleted = this.todos.splice(index);
      this.todosCompleted.push(todoCompleted[0]);
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
