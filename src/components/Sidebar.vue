<template>
  <aside>
    <h3>Labels</h3>
    <ul>
      <transition-group name="fade-slide">
        <router-link
          tag="li"
          v-for="(label, index) in labels"
          :key="index"
          active-class="active"
          :to="'/label/'+ label"
        >
          <i class="fas fa-tags fa-xs"></i>
          {{ label }}
          <i
            v-if="label!=='Inbox'"
            @click="deleteLabel(label)"
            class="fas fa-times-circle"
          ></i>
        </router-link>
      </transition-group>
    </ul>
    <div class="info">
      <p>You can write "#" to label a todo.</p>
      <p>You can write "@" to schedule a todo</p>
    </div>
  </aside>
</template>

<script>
export default {
  data() {
    return {
      show: false,
    };
  },
  computed: {
    labels() {
      return this.$store.state.labels;
    },
  },
  methods: {
    deleteLabel(label) {
      this.$router.push({ path: "/label/Inbox" });
      this.$store.commit("deleteLabel", label);
    },
  },
};
</script>

<style scoped>
aside {
  height: 100%;
  width: 30%;
  background: #1f1f1f;
  color: #ffffff;
  padding: 1.5rem 0;
}

h3 {
  text-align: center;
}
.info {
  text-align: center;
}
ul {
  margin: 0;
  margin-bottom: 20%;
  padding: 0;
  text-align: left;
}

.fas.fa-tags {
  margin-right: 1rem;
}

.fas.fa-times-circle {
  float: right;
}

li {
  list-style: none;
  padding: 1rem;
  font-size: 1.2rem;
  cursor: pointer;
}

li.active {
  background: rgb(51, 51, 51);
}

li a {
  color: white;
  text-decoration: none;
  font-size: 1.5rem;
}
</style>