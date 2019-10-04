<template>
<div>
    <div v-if="todos.length > 0">
        <h3>To do</h3>
        <todo 
            v-for="(todo,index) in todos" 
            :key="index" 
            :todo="todo"
            v-on:completed="$emit('completed', $event)"
            v-on:delete="$emit('delete', id)">
        </todo>
    </div>
    <div v-if="completed.length > 0">
        <h3 >Done</h3>
        <todo
            v-for="todo in completed"
            :key="todo.id"
            :todo="todo"
            v-on:delete="$emit('delete', id)">
        </todo>
    </div>
</div>
</template>

<script>
import Todo from './Todo'

export default {
    props: ['todos', 'completed'],
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