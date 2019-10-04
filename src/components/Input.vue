<template>
    <div>
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
            const newTodo = {
                id: uuid.v4(),
                title: this.title,
                createdAt: new Date()
            }
            this.$emit('add', newTodo);
            this.title = '';
        }
    }
}
</script>

<style scoped>
    input {
        margin-top: 1em;
        margin-bottom: 1em;
    }
</style>