<template>
	<div id="app">
		<div class="container">
			<div class="card my-5">
				<div class="card-body">
					<todo-input></todo-input>
					<todos :todos="todos"></todos>
				</div>
    		</div>
		</div>
  	</div>
</template>

<script>
import Navbar from "../components/Navbar";
import Input from "../components/Input";
import Todos from "../components/Todos";

export default {
  computed: {
    todos() {
      return this.$store.state.todos;
    }
  },
  components: {
    Navbar,
    TodoInput: Input,
    Todos
  }
};
</script>

<style>
body {
  margin: 0;
  padding: 0;
  text-align: center;
}
h3 {
  margin-top: 0.7em;
}
</style>
