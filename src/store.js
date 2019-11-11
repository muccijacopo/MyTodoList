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
		updateTodo(state, payload) {
			var index = state.todos.findIndex(todo => todo.id == payload.id);
			state.todos[index].text = payload.value;
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
	},
	actions: {
		/* 
		* @return: property of the todo otherwise null
		*/
		checkTodoText(context, todoText) {
			var todo = {};

			if (todoText !== null && todoText !== '') {

				const labelRegex = /#[^\s]*/;
				var found = todoText.match(labelRegex);
				if (found) {
					var labelName = found[0].slice(1);
					context.commit('addLabel', labelName);
					todo.label = labelName;
					todoText = todoText.replace('#' + labelName, '');
				} else {
					todo.label = null;
				}
				
				const dateRegex = /@[^\s]*/;
				var found = todoText.match(dateRegex);
				if (found) {
					var date = found[0].slice(1);
					if (date == 'Today') {
						todo.date = 'Today';
					} else if (date == 'Tomorrow') {
						todo.date = 'Tomorrow';
					} else {
						todo.date = null;
					}
					todoText = todoText.replace('@' + date, '')
				}
				
				const newTodo = {
					id: uuid.v4(),
					text: todoText,
					label: (todo.label || router.currentRoute.params.label || 'Inbox'),
					date: todo.date,
					completed: false,
					createdAt: new Date(),
					editMode: false
				}

				context.commit('addTodo', newTodo);
			}

		}
	}
})