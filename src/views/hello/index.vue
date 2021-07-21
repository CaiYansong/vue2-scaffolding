<template>
  <div class="hello-wrap">
    <div class="title">
      Hello
    </div>
  </div>
</template>

<script>
import { getToken, setToken } from '@/utils';

export default {
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
