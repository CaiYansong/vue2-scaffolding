<template>
  <div class="vue-scaffolding">
    <h1>vue3</h1>
    <div>
      <router-link to="/">
        /
      </router-link>
      <br>
      <router-link to="/hello">
        /hello
      </router-link>
    </div>
    <router-view />
    <a-button>Default Button</a-button>
    <StepBackwardOutlined />
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
import { StepBackwardOutlined } from '@ant-design/icons-vue';
import testImg from './assets/test-729kb.jpeg';
import testImgA from '@/assets/test-729kb.jpeg';

export default {
  data() {
    return {
      testImg,
      testImgA,
    }
  },
  components: {
    StepBackwardOutlined,
  },
};
</script>

<style>

</style>
