<template>
    <div id="input">
            <h3>What do you have to-do today?</h3>
            <div class="input-group">
                <input type="text" class="form-control" placeholder="Call mother..." v-model="title" v-on:keydown.enter="addTodo()" >
                <button class="btn btn-info" @click="addTodo()">Add todo</button>
            </div>
            <hr>
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
        checkInput(value) {
            if(value !== null && value !== '') return true;
            return false;
        },
        findLabels(value) {
            const regex = /#.*[aA-zZ]/g;
            var found = this.title.match(regex);
            var labelName = found[0].slice(1);
            this.$store.commit('addLabel', labelName);
            return labelName;
        },
        addTodo() {
            if (this.checkInput(this.title)) {
                var label = this.findLabels(this.title);
                const newTodo = {
                    id: uuid.v4(),
                    title: this.title,
                    label: (label || this.$route.params.label || 'Inbox'),
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

#input {
    margin: 2rem;
}

#input hr {
    border: 1px solid #242424;
    margin: 2rem 0;
}
.input-group {
    margin: 1rem auto;
}
.input-group .btn {
    margin-left: 1rem;
    background: #202020;
    color: white;
    border: none;
}

.input-group .btn:hover {
    background: #4b4b4b
}

</style>