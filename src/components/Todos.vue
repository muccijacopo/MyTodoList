<template>
<div>
    <h3>To do</h3>
    
    <div v-if="todosUncompleted.length > 0">
        <transition-group name="fade-slide" mode="out-in">
        <todo
            v-for="todo in todosUncompleted" 
            :key="todo.id" 
            :todo="todo"
            v-on:completed="$emit('completed', $event)"
            v-on:delete="$emit('delete', $event)">
        </todo>
        </transition-group>
    </div>
    <div v-else>
        <h5>You have done everything for today. Enjoy.</h5>
    </div>
    <hr>
    <div v-if="todosCompleted.length > 0">
        <h3>Done</h3>
        <transition-group name="fade-slide" mode="out-in">
        <todo
            v-for="todo in (todosCompleted) " 
            :key="todo.id" 
            :todo="todo"
            v-on:completed="$emit('completed', $event)"
            v-on:delete="$emit('delete', $event)">
        </todo>
        </transition-group>
    </div>

</div>
</template>

<script>
import Todo from './Todo'

export default {
    props: ['todos'],
    computed: {
        todosUncompleted() {
            var todos = this.todos.filter(todo => {
                return !todo.completed
            });
            return todos.sort((a,b) => b.createdAt - a.createdAt)
        },
        todosCompleted() {
            var todos = this.todos.filter(todo => {
                return todo.completed
            });

            return todos.sort((a,b) => b.createdAt - a.createdAt)
        } 
    },
    components: {
        Todo
    }
}
</script>

<style scoped>
    h3 {
        font-size: 2em;
    }

</style>