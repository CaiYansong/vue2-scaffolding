<template>
  <div class="home-wrap">
    Home
    <br>
    <input
      v-model="name"
      type="text"
    >
    <button @click="setUsername">
      设置 username
    </button>
    <br>
    {{ JSON.stringify(state) }}
    <h2>home router-view</h2>
    <router-view />
  </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
  data() {
    return {
      name: '',
    };
  },
  computed: {
    ...mapState('global', { state: state => state }),
  },
  methods: {
    setUsername() {
      this.$store.dispatch('global/setGlobalState', { user: { name: this.name } });
    },
  },
};
</script>

<style>

</style>
