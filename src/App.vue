<template>
  <div class="vue-scaffolding">
    <router-view />
  </div>
</template>

<script>
// import { StepBackwardOutlined } from '@ant-design/icons-vue';
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
    // StepBackwardOutlined,
  },
};
</script>

<style>

</style>
