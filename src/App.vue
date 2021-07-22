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
    ./
    <img style="width: 100px;" :src="require('./assets/test-729kb.jpeg')" alt="">
    @/
    <img style="width: 100px;" :src="require('@/assets/test-729kb.jpeg')" alt="">
    import:
    ./
    <img style="width: 100px;" :src="testImg" alt="">
    @/
    <img style="width: 100px;" :src="testImgA" alt="">
  </div>
</template>

<script>
import { mapState } from 'vuex';
import testImg from './assets/test-729kb.jpeg';
import testImgA from '@/assets/test-729kb.jpeg';

export default {
  data() {
    return {
      testImg,
      testImgA,
    }
  },
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
