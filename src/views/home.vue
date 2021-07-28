<template>
  <div class="home-wrap">
    <h1>vue3</h1>
    <div>
      <input
        v-model="username"
        type="text"
      >
      <button @click="setUsername">
        set username
      </button>
      <div>username: {{ this.$store.state.user.name }}</div>
      <div>global username: {{ this.$store.state.global.user.name }}</div>
      {{ JSON.stringify(state) }}
    </div>
    <h2>home router-view</h2>
    <a-button>Default Button</a-button>
    <StepBackwardOutlined />
    <router-view />
  </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
  data() {
    return {
      username: '',
    };
  },
  computed: {
    ...mapState('global', {
      state: state => state,
    }),
  },
  methods: {
    setUsername() {
      this.$store.commit('setUser', { name: this.username });
      this.$store.commit('global/setGlobalState', { user: { name: this.username } });
    },
  },
};
</script>

<style>

</style>
