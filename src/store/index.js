import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    token: '',
    user: {},
  },
  mutations: {
    setToken(state, token) {
      state.token = token;
    },
    setUser(state, user) {
      state.user = user;
    },
  },
  actions: {
    login(ctx, { token, user }) {
      ctx.commit('setToken', token);
      ctx.commit('setUser', {
        id: 1,
        avatar: '',
        ...user,
      });
    },
    logout(ctx) {
      ctx.commit('setToken', '');
      ctx.commit('setUser', {});
    },
  },
  modules: {
  },
});
