<template>
    <div id="input">
            <h3>What do you have to-do today?</h3>
            <transition name="fade-slide">
                <div v-if="message" class="alert alert-success">{{ message }}</div>
            </transition>
            <div class="input-group">
                <input type="text" class="form-control" placeholder="Call mother..." v-model="todoText" v-on:keydown.enter="addTodo()" >
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
            todoText: '',
            message: ''
        }
    },
    methods: {
        checkInput(value) {
            return (value !== null && value !== '');
        },
        findLabels(value) {
            const regex = /#[^\s]*/;
            var found = value.match(regex);
            if (found) {
                var labelName = found[0].slice(1);
                this.$store.commit('addLabel', labelName);
                return labelName;
            }
            return null;
        },
        findReminder(value) {
            const regex = /@[^\s]*/;
            var found = value.match(regex);
            if (found) {
                var text = found[0].slice(1);
                if (text == 'Today') {
                    return 'Today'
                } else if (text == 'Tomorrow') {
                    return 'Tomorrow';
                } else {
                    return null;
                }
            }
        },
        addTodo() {

           this.$store.dispatch('checkTodoText', this.todoText);
           this.todoText = '';
                
    
            // if (this.checkInput(todoText)) {
            //     var label = this.findLabels(todoText);
            //     var date = this.findReminder(todoText);
            //     if(label) { 
            //         todoText = todoText.replace('#' + label, '');
            //     }
            //     if(date) {
            //         todoText = todoText.replace('@' + date, '');
            //     }
                    
            //     const newTodo = {
            //         id: uuid.v4(),
            //         text: todoText,
            //         label: (label || this.$route.params.label || 'Inbox'),
            //         date: date,
            //         completed: false,
            //         createdAt: new Date(),
            //         editMode: false
            //     }
            //     this.$store.commit('addTodo', newTodo)
            //     this.todoText = '';
            //     this.message = "You\'ve had a todo to " + (label ? label: 'Inbox');
            //     setTimeout(() => this.message = '', 3000);
            // }
            
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