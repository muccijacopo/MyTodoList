<template>
  <div>
    <navbar></navbar>
    <transition name="fade-slide" mode="out-in">
      <router-view></router-view>
    </transition>
  </div>
</template>

<script>
import Navbar from './components/Navbar'
export default {
  components: {
    Navbar
  }
}
</script>

<style>
 .fade-slide-enter-active, .fade-slide-leave-active {
  transition: all .5s;
}
.fade-slide-enter, .fade-slide-leave-to {
  transform: translateY(-30px);
  opacity: 0;
}

</style>