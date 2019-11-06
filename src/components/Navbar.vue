<template>
  <div>
    <nav class="navbar navbar-expand-sm navbar-dark bg-dark">
      <router-link class="navbar-brand" to="/">
        Todo-list
      </router-link>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbar">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbar">
        <ul class="navbar-nav">
          <li class="nav-item">
            <router-link class="nav-link" to="/about">About</router-link>
          </li>
        </ul>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
}
</script>

<style scoped>
</style>
