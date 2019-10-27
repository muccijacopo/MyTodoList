<template>
    <div class="input-group my-3">
        <input type="text" class="form-control" placeholder="Call mother" v-model="title" v-on:keydown.enter="addTodo()" >
    </div>
</template>

<script>
import uuid from 'uuid'

export default {
    data() {
        return {
            title: ''
        }
    },
    methods: {
        addTodo() {
            if (this.title != null && this.title != '') {
                const newTodo = {
                    id: uuid.v4(),
                    title: this.title,
                    completed: false,
                    createdAt: new Date(),
                    editMode: false
                }
                this.$store.commit('addTodo', newTodo)
                this.title = '';
            }
            
        }
    }
}
</script>

<style scoped>
</style>