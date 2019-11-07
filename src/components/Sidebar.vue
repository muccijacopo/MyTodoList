<template>
    <div class="sidebar">
        <h3>Labels</h3>
        <ul>
            <router-link tag="li" v-for="(label, index) in labels" :key="index" active-class="active" :to="'/label/'+ label">
                <i class="fas fa-tags fa-xs"></i>{{ label }}
            </router-link>
        </ul>
        <p>Try to write "#" to assaign a label to a todo.</p>
    </div>
</template>

<script>
export default {
    computed: {
        labels() {
            return this.$store.state.labels;
        }
    }
}
</script>

<style scoped>
    .sidebar {
        position: fixed;
        padding: 3rem 0;
        background: #222;
        height: 100%;
        color: white;
        width: 100px;
    }

    .sidebar h3 {
        text-align: center;
    }

    .sidebar p {
        padding: 2rem;
    }

    .sidebar ul {
        margin: 0;
        padding: 0;
        text-align: left;
    }

    .sidebar .fas {
        margin-right: 1rem;
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