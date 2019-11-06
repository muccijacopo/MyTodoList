<template>
    <div class="sidebar">
        <h3>Categories</h3>
        <ul>
            <li v-for="(category, index) in categories" :key="index"><router-link :to="'/'+ category">{{ category }}</router-link></li>
        </ul>
        <p>You can write "#" in your 'todo' to assaign or create a category.</p>
    </div>
</template>

<script>
export default {
    computed: {
        categories() {
            return this.$store.state.categories;
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

    .sidebar p {
        padding: 2rem;
    }
    .sidebar h3 {
        text-align: center;
        font-size: 2rem;
    }

    .sidebar ul {
        margin: 0;
        padding: 0;
    }

    .sidebar li {
        list-style: none;
        padding: 1rem;
    }

    .sidebar li:hover {
        background: rgb(51, 51, 51);
    }

    .sidebar li a {
        color: white;
        text-decoration: none;
        font-size: 1.5rem;
    }
    

</style>