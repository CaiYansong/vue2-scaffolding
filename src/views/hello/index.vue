<template>
  <div class="hello-wrap">
    <div class="title">
      <img
        :src="logo"
        alt=""
      >
      <div>
        <h3>Hello Vue3</h3>
      </div>
    </div>
  </div>
</template>

<script>
import { getToken, setToken } from '@/utils';
import logo from '@/assets/logo.png';

export default {
  data() {
    return {
      date: new Date(),
      logo,
    };
  },
  created() {
    setToken('test-token');
    console.log(getToken());
  },
};
</script>

<style lang="less">
.hello-wrap {
  .title {
    font-size: 17px;
    color: darkslategray;
  }
}
</style>
