import Vue from 'vue'
import Vuex from 'vuex'
import router from './router'
import uuid from 'uuid'

Vue.use(Vuex)

export default new Vuex.Store({
	state: {
		todos: [
			{ id: 1, text: 'Buy milk', label: 'Inbox', completed: false, createdAt: new Date(), date: null, editMode: false }
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
		updateTodo(state, todo) {
			var index = state.todos.findIndex(todoItem => todoItem.id == todo.id);
			state.todos[index].text = todo.text;
			if(todo.label) { 
				state.todos[index].label = todo.label;
			}
			if(todo.date) {
				state.todos[index].date = todo.date;
			}
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
	},
	actions: {
		addTodo(context, todo) {	
			const newTodo = {
				id: uuid.v4(),
				text: todo.text,
				label: (todo.label || router.currentRoute.params.label || 'Inbox'),
				date: todo.date,
				completed: false,
				createdAt: new Date(),
				editMode: false
			}
		context.commit('addTodo', newTodo);
		}
	}
})