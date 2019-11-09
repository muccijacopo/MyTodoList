<template>
    <div>
        <div class="card my-3">
            <div class="card-body">
                <h2 class="card-title">To do</h2>
                <div v-if="todayTodos.length > 0">
                    <h5>Today</h5>
                    <hr>
                    <todo
                        v-for="todo in todayTodos" 
                        :key="todo.id" 
                        :todo="todo">
                    </todo>
                </div>
                <div v-if="tomorrowTodos.length > 0">
                    <h5>Tomorrow</h5>
                    <hr>
                    <todo
                        v-for="todo in tomorrowTodos" 
                        :key="todo.id" 
                        :todo="todo">
                    </todo>
                </div>
                <div v-if="otherTodos.length > 0">
                    <h5>Not scheduled</h5>
                    <hr>
                    <todo
                        v-for="todo in otherTodos" 
                        :key="todo.id" 
                        :todo="todo">
                    </todo>
                </div>
                <div v-if="todayTodos.length + tomorrowTodos.length + otherTodos.length == 0">
                    <p class="card-text">Nothing to do. Enjoy.</p>
                </div>
            </div>
        </div>
        <div class="card my-3">
            <div class="card-body">
                <h2 class="card-title">Done</h2>
                <div v-if="todosCompleted.length > 0">
                    <todo
                        v-for="todo in todosCompleted" 
                        :key="todo.id" 
                        :todo="todo">
                    </todo>
                </div>
                <div v-else>
                    <p class="card-text">You haven't done anything yet.</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Todo from './Todo'

export default {
    props: ['todos'],
    computed: {
        todayTodos() {
            var todos = this.todos.filter(todo => {
                return (!todo.completed && todo.date == 'Today');
            });
            return todos.sort((a,b) => b.createdAt - a.createdAt)
        },
        tomorrowTodos() {
            var todos = this.todos.filter(todo => {
                return (!todo.completed && todo.date == 'Tomorrow');
            });
            return todos.sort((a,b) => b.createdAt - a.createdAt)
        },
        otherTodos() {
           var todos = this.todos.filter(todo => {
                return (!todo.completed && todo.date !== 'Today' && todo.date !== 'Tomorrow');
            });
            return todos.sort((a,b) => b.createdAt - a.createdAt) 
        },
        todosCompleted() {
            var todos = this.todos.filter(todo => {
                return todo.completed
            });

            return todos.sort((a,b) => b.createdAt - a.createdAt)
        },

    },
    components: {
        Todo
    }
}
</script>

<style scoped>
</style>