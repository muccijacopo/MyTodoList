<template>
  <div>
    <div
      class="todo"
      v-if="!editMode"
      @mouseover="showActionBtn = true"
      @mouseleave="showActionBtn = false"
      @click="editMode = true"
    >
      <label @click="todo.editMode = !todo.editMode">{{ todo.text }}</label>
      <div v-if="showActionBtn" class="action-btn">
        <i class="fas" :class="checkedClass" @click="toggleTodo(todo.id)"></i>
        <i class="fas fa-trash-alt del-btn" @click="deleteTodo(todo.id)"></i>
      </div>
    </div>
    <div v-else class="todo">
      <input
        autofocus
        type="text"
        class="form-control"
        v-model="todo.text"
        @keydown.enter="$event.target.blur()"
        @blur="confirmEdit"
      />
    </div>
  </div>
</template>

<script>
import { TodoService } from "../services/TodoService";

export default {
  props: ["todo"],
  data() {
    return {
      showActionBtn: false,
      editMode: false,
    };
  },
  methods: {
    toggleTodo(todoId) {
      this.$store.commit("toggleTodo", todoId);
    },
    setLabel(todoId) {
      console.log(todoId);
    },
    scheduleTodo(todoId) {
      console.log(todoId);
    },
    deleteTodo(todoId) {
      this.$store.commit("deleteTodo", todoId);
    },
    confirmEdit() {
      TodoService.updateTodo(this.todo)
        .catch((e) => console.log(e))
        .finally(() => (this.editMode = false));
    },
  },
  computed: {
    checkedClass() {
      const checked = this.todo.completed;
      return checked ? "fa-history" : "fa-check";
    },
  },
};
</script>

<style scoped>
.todo {
  width: 100%;
  background-color: #f3f3f3;
  padding: 1rem 0.5rem;
  margin: 0.5rem 0;
  display: inline-block;
  vertical-align: middle;
  position: relative;
  border-radius: 5px;
}

.todo label {
  font-size: 1.2rem;
  margin: 0;
}

.todo .action-btn {
  position: absolute;
  top: 1rem;
  right: 0.5rem;
}
.todo .action-btn i {
  margin: 0 0.5rem;
  cursor: pointer;
}
</style>