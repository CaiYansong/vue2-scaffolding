<template>
  <div class="home-wrap">
    Home
    <div>
      <input
        v-model="username"
        type="text"
      >
      <button @click="setUsername">
        set username
      </button>
      <div>username: {{ this.$store.state.user.name }}</div>
    </div>
    <h2>home router-view</h2>
    <router-view />
  </div>
</template>

<script>

export default {
  data() {
    return {
      username: '',
    };
  },
  methods: {
    setUsername() {
      this.$store.commit('setUser', { name: this.username });
    },
  },
};
</script>

<style>

</style>
