<template>
    <div class="sidebar">
        <h3>Labels</h3>
        <ul>
            <transition-group name="fade-slide">
            <router-link tag="li" v-for="(label, index) in labels" :key="index" active-class="active" :to="'/label/'+ label">
                <i class="fas fa-tags fa-xs"></i>{{ label }}<i v-if="label!=='Inbox'" @click="deleteLabel(label)" class="fas fa-times-circle"></i>
            </router-link>
            </transition-group>
        </ul>
        <div class="info">
            <p>You can write "#" to assign a label a todo.</p>
            <p>Or you can write "@" to schedule a todo</p>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            show: false
        }
    },
    computed: {
        labels() {
            return this.$store.state.labels;
        }
    },
    methods: {
        deleteLabel(label) {
            this.$router.push({path: '/label/Inbox'});
            this.$store.commit('deleteLabel', label);
        }
    }
}
</script>

<style scoped>
    .sidebar {
        display: block;
        padding: 3rem 0;
        background: #222;
        color: white;
    }

    .sidebar h3 {
        text-align: center;
    }

    .sidebar .info {
        padding: 2rem;
    }

    .sidebar ul {
        margin: 0;
        padding: 0;
        text-align: left;
    }

    .sidebar .fas.fa-tags {
        margin-right: 1rem;
    }

    .sidebar .fas.fa-times-circle {
        float: right;
    }

    .sidebar li {
        list-style: none;
        padding: 1rem;
        font-size: 1.2rem;
    }

    .sidebar li:hover, .active {
        cursor: pointer;
        background: rgb(51, 51, 51);
    }

    .sidebar li a {
        color: white;
        text-decoration: none;
        font-size: 1.5rem;
    }
    

</style>