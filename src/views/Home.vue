<template>
  <div class="container-fluid">
    <sidebar></sidebar>
    <main>
      <todo-input></todo-input>
      <h1 class="text-center">{{ $route.params.label || 'Inbox' }}</h1>
      <todos v-if="todos" :todos="todos"></todos>
    </main>
  </div>
</template>

<script>
import Sidebar from "../components/Sidebar";
import Input from "../components/Input";
import Todos from "../components/Todos";

export default {
  data: () => {
    return {
      labels: [],
    };
  },
  created() {
    this.labels = this.$store.state.labels;
  },
  computed: {
    todos() {
      const todos = this.$store.state.todos;
      const label = this.$route.params.label;
      if (this.verifyLabel(label)) {
        return todos.filter((t) => t.label === label);
      }
      return todos.filter((t) => t.label === "Inbox");
    },
  },
  methods: {
    verifyLabel(label) {
      if (!this.labels.includes(label)) {
        this.$router.push("/label/Inbox");
        return false;
      }
      return true;
    },
  },
  components: {
    TodoInput: Input,
    Todos,
    Sidebar,
  },
};
</script>

<style>
main {
  padding: 1rem;
  width: 60%;
}
.container-fluid {
  height: 100vh;
  margin: 0;
  padding: 0;
  display: flex;
}
</style>
