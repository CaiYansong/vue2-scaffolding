<template>
  <div class="vue-scaffolding">
    <header class="vue-scaffolding-header">
      header --
      username: {{ state.user.name }}
    </header>
    <section
      class="vue-scaffolding-main"
    >
      <aside class="vue-scaffolding-silder-bar">
        silder bar
      </aside>
      <main
        id="container"
        class="vue-scaffolding-container"
      />
    </section>
  </div>
</template>

<script>
import actions, { state } from '@/actions';

export default {
  data() {
    return {
      state,
    };
  },
  created() {
    setTimeout(() => {
      actions.setGlobalState({ a: 1 });
    }, 1000);
  },
};
</script>

<style>
html,body {
  margin: 0;
  padding: 0;
}
body {
  overflow: hidden;
}
.vue-scaffolding {
  flex: 1;
  flex-basis: auto;
  display: flex;
  flex-direction: column;
}
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
</style>
