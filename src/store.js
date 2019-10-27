import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    todos: [
      { id: 1, title: 'Ricordati di prendere il latte', completed: false, createdAt: new Date(), editMode: false }
    ]
  },
  mutations: {
    addTodo(state, todo) {
      state.todos.push(todo);
    },
    deleteTodo(state, todoId) {
      state.todos = state.todos.filter(todo => todo.id != todoId);
    },
    checkTodo(state, todoId) {
     var indexFound = state.todos.findIndex(todo => todo.id == todoId);
     state.todos[indexFound].completed = true;

    }
  }
})