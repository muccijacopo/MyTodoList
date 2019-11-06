<template>
    <div>
            <h3>What do you have to-do today?</h3>
            <div class="input-group my-3">
                <input type="text" class="form-control" placeholder="Call mother" v-model="title" v-on:keydown.enter="addTodo()" >
            </div>
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

    .input-group {
        margin: 0 auto;
    }
    @media screen and (min-width: 786px){
        .input-group {
            width: 60%;
        }
    }
</style>