<template>
  <div class="vue-scaffolding">
    <h1>qiankun-micro-vue2</h1>
    <div>
      <router-link to="/">
        /
      </router-link>
      <br>
      <router-link to="/hello">
        /hello
      </router-link>
      <br>
    </div>
    -{{ JSON.stringify(state) }}
    <router-view />
  </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
  computed: {
    // 通过 global 获取 全局 state 的信息
    ...mapState('global', {
      state: state => state,
    }),
  },
  created() {
    this.$store.commit('global/setGlobalState', { a: 1, b: 2 });
  },
};
</script>

<style>

</style>
