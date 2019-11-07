<template>
  <div>
    <nav class="navbar navbar-dark">
      <router-link class="navbar-brand" to="/">
        MyTodoList
      </router-link>
        <ul class="navbar-nav">
          <li class="nav-item">
            <router-link class="nav-link" to="/about"></router-link>
          </li>
        </ul>
    </nav>
  </div>
</template>

<script>
export default {
}
</script>

<style scoped>
  .navbar-brand {
    font-size: 2rem;
    margin-left: 1rem;
  }

  nav {
    background: #1f1f1f;
  }
</style>
