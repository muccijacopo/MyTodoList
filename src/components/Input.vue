<template>
    <div class="input-group my-3">
        <div class="input-group-prepend">
            <span class="input-group-text"><i class="far fa-plus-square"></i></span>
        </div>
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
                completed: false,
                createdAt: new Date(),
            }
            this.$emit('add', newTodo);
            this.title = '';
        }
    }
}
</script>

<style scoped>
</style>