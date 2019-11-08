import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    todos: [
      { id: 1, title: 'Buy milk', label: 'Inbox', completed: false, createdAt: new Date(), date: null, editMode: false }
    ],
    labels: ['Inbox', 'Personal']
  },
  mutations: {
    addTodo(state, todo) {
      state.todos.push(todo);
    },
    deleteTodo(state, todoId) {
      state.todos = state.todos.filter(todo => todo.id != todoId);
    },
    toggleTodo(state, todoId) {
     var index = state.todos.findIndex(todo => todo.id == todoId);
     state.todos[index].completed = !state.todos[index].completed;
    },
    updateTodo(state, payload) {
      var index = state.todos.findIndex(todo => todo.id == payload.id);
      state.todos[index].title = payload.value;
      state.todos[index].editMode = false;
    },
    addLabel(state, label) {
      if (state.labels.every(labelItem => { return labelItem !== label })) {
        state.labels.push(label);
      } 
    },
    deleteLabel(state, label) {
      var index = state.labels.findIndex(labelItem => labelItem == label);
      state.labels.splice(index, 1);
    }
  }
})