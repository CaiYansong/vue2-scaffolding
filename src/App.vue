<template>
  <div :class="$style['vue-scaffolding']" style="height: 100vh;">
    <header :class="$style['vue-scaffolding-header']">
      header --
      username: {{ state.user.name }}
    </header>
    <section
      :class="$style['vue-scaffolding-main']"
    >
      <aside :class="$style['vue-scaffolding-silder-bar']">
        silder bar
        <div
          v-for="it of apps"
          :key="it.name"
          @click="go(it.activeRule)"
        >
          - {{ it.name }}
        </div>
      </aside>
      <main
        v-loading="isLoading"
        id="container"
        :class="$style['vue-scaffolding-container']"
      />
    </section>
  </div>
</template>

<script>
import NProgress from 'nprogress';
import actions, { state } from '@/actions';
import { go } from '@/utils';
import apps from './micro-app';

export default {
  data() {
    return {
      state,
      apps,
      isLoading: true,
    };
  },
  created() {
    NProgress.start();
  },
  methods: {
    go,
  },
  watch: {
    isLoading (val) {
      if (val) {
        NProgress.start()
      } else {
        this.$nextTick(() => {
          NProgress.done()
        })
      }
    }
  },
};
</script>

<style lang="less" module>
.vue-scaffolding {
  flex: 1;
  flex-basis: auto;
  display: flex;
  flex-direction: column;

  .vue-scaffolding-header {
    height: 60px;
    background-color: #1890FF;
  }
  .vue-scaffolding-main {
    flex: 1;
    display: flex;
  }
  .vue-scaffolding-silder-bar {
    width: 200px;
    height: 100%;
    border-right: 1px solid #ccc;
    overflow: auto;
    position: absolute;
    top: 60px;
    bottom: 0;
    left: 0;
  }
  .vue-scaffolding-container {
    position: absolute;
    top: 60px;
    right: 0;
    bottom: 0;
    left: 200px;
    overflow-x: hidden;
    overflow-y: auto;
  }
}
</style>

<style>
html,body {
  margin: 0;
  padding: 0;
}
body {
  overflow: hidden;
}
/* 顶部进度条 */
#nprogress .bar {
  /* 自定义颜色 */
  background: red !important;
}
</style>
