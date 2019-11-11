<template>
    <div>
        <div class="todo" v-if="!todo.editMode" @mouseover="showActionBtn = true" @mouseleave="showActionBtn = false">
            <input @change="toggleTodo(todo.id)" type="checkbox" :checked="todo.completed">
            <label @click="todo.editMode = !todo.editMode">
                {{ todo.text }}
            </label>
            <div v-if="showActionBtn" class="action-btn">
                <i class="fas fa-tag" title="Labels" @click="setLabel(todo.id)"></i>
                <i class="fas fa-calendar-alt" title="Schedule todo" @click="scheduleTodo(todo.id)"></i>
                <i class="fas fa-trash-alt del-btn" title="Delete todo" @click="deleteTodo(todo.id)"></i>
            </div>
        </div>
        <div v-else class="todo">
            <input type="text" class="form-control" v-model="todo.text" v-on:keydown.enter="confirmEdit">
        </div>
    </div>
</template>

<script>
export default {
    props: ['todo'],
    data() {
        return {
            showActionBtn: false
        }
    },
    methods: {
        toggleTodo(todoId) {
            this.$store.commit('toggleTodo', todoId);
        },
        setLabel(todoId) {
            console.log(todoId);
        },
        scheduleTodo(todoId) {
            console.log(todoId);
        },
        deleteTodo(todoId) {
            this.$store.commit('deleteTodo', todoId);
        },
        confirmEdit() {
            this.$store.commit('updateTodo', {
                id: this.todo.id,
                value: this.todo.text
            });
        }
    }
}
</script>

<style scoped>
    .todo {
        width: 100%;
        background-color: #f3f3f3;
        padding: 1rem .5rem;
        margin: 1rem 0;
        display: inline-block;
        vertical-align: middle;
        position: relative;
        border-radius: 5px;
    }
    .todo:hover {
        border: 1px solid #f8f8f8;
        background-color: #feffda;
    }
    .todo label {
        font-size: 1.2rem;
        margin: 0;
    }
    .todo input[type="checkbox"] {
        width: 20px !important;
        margin-right: 1rem;
    }

    .todo .action-btn {
        position: absolute;
        top: 1rem;
        right: .5rem;

    }
    .todo .action-btn i {
        margin: 0 .5rem;
    }

    .todo .action-btn i:hover {
        cursor: pointer;
    }
</style>