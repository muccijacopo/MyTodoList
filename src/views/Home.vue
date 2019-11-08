<template>
<div class="wrapper">
	<div class="sidebar">
		<sidebar></sidebar>
	</div>
	<div class="main">
		<todo-input></todo-input>
		<h1 class="text-center">{{ $route.params.label || 'Inbox' }}</h1>
		<todos :todos="todos"></todos>
	</div>
</div>
</template>

<script>
import Navbar from "../components/Navbar";
import Sidebar from '../components/Sidebar'
import Input from "../components/Input";
import Todos from "../components/Todos";

export default {
  computed: {
    todos() {
		var allTodos = this.$store.state.todos;
		if(!this.$route.params.label) {
			var todos = allTodos.filter(todo => todo.label == 'Inbox')
			return todos;
		}
		var todos = allTodos.filter(todo => todo.label === this.$route.params.label)
		return todos;
    }
  },
  components: {
    Navbar,
    TodoInput: Input,
	Todos,
	Sidebar
  }
};
</script>

<style>
.wrapper {
	display: flex;
	position: relative;
}

.wrapper .sidebar {
	width: 300px;
}
.wrapper .main {
	position: relative;
	margin: 0 auto;
	padding: 1rem;
	width: 60%;
}
</style>
