<template>
  <div id="input">
    <h3>Add Task</h3>
    <transition name="fade-slide">
      <div v-if="message" class="alert alert-success">{{ message }}</div>
    </transition>
    <div class="input-group">
      <input
        type="text"
        class="form-control"
        placeholder="Call mother..."
        v-model="todoText"
        v-on:keydown.enter="addTodo()"
      />
      <button class="btn btn-info" @click="addTodo()">Add</button>
    </div>
    <hr />
  </div>
</template>

<script>
import { validateTodo, TodoService } from "../services/TodoService";

export default {
  data() {
    return {
      todoText: "",
      message: "",
    };
  },
  methods: {
    addTodo() {
      TodoService.addTodo(this.todoText)
        .then((todo) => {
          this.message = `You've just added a todo to ${todo.label || "Inbox"}`;
          this.todoText = "";
          setTimeout(() => (this.message = ""), 3000);
        })
        .catch((e) => console.log("Si è verificato un errore => ", e));
    },
  },
};
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
  background: #4b4b4b;
}
.alert {
  position: fixed;
  top: 80px;
  right: 30px;
  z-index: 10;
}
</style>