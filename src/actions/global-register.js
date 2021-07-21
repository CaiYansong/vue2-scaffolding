/**
 *
 * @param { vuex 实例 } store
 * @param { qiankun 下发的 props } props
 */
function registerGlobalModule(store, props = {}) {
  if (!store || !store.hasModule) {
    return;
  }

  // 获取初始化的state
  const initState = (props.getGlobalState && props.getGlobalState()) || {
    user: { },
  };

  // 将父应用的数据存储到子应用中，命名空间固定为 global
  if (!store.hasModule('global')) {
    const globalModule = {
      namespaced: true,
      state: initState,
      // dispatch 触发
      actions: {
        // 子应用改变 state 并通知父应用
        setGlobalState({ commit }, payload) {
          commit('setGlobalState', payload);
          commit('emitGlobalState', payload);
        },
        // 初始化，只用于 mount 时同步父应用的数据
        initGlobalState({ commit }, payload) {
          commit('setGlobalState', payload);
        },
      },
      // commit 触发
      mutations: {
        setGlobalState(state, payload) {
          state = Object.assign(state, payload);
        },
        // 通知父应用
        emitGlobalState(state) {
          if (props.setGlobalState) {
            props.setGlobalState(state);
          }
        },
      },
    };
    store.registerModule('global', globalModule);
  } else {
    // 每次 mount 时，都同步一次父应用数据
    store.dispatch('global/initGlobalState', initState);
  }
}

export default registerGlobalModule;
