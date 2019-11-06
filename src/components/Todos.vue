<template>
    <div>
        <div class="card my-3">
            <div class="card-body">
                <h3 class="card-title">To do</h3>
                <div v-if="todosUncompleted.length > 0">
                    <transition-group name="fade-slide" mode="out-in">
                        <todo
                            v-for="todo in todosUncompleted" 
                            :key="todo.id" 
                            :todo="todo">
                        </todo>
                    </transition-group>
                </div>
                <div v-else>
                    <p class="card-text">You have done everything for today. Enjoy.</p>
                </div>
            </div>
        </div>
        <div class="card my-3">
            <div class="card-body">
                <h3 class="card-title">Done</h3>
                <div v-if="todosCompleted.length > 0">
                    
                    <transition-group name="fade-slide" mode="out-in">
                    <todo
                        v-for="todo in todosCompleted" 
                        :key="todo.id" 
                        :todo="todo">
                    </todo>
                    </transition-group>
                </div>
                <div v-else>
                    <p class="card-text">You haven't done anything yey.</p>
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
        font-size: 2rem;
    }
</style>