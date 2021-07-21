import Vue from 'vue';
import { initGlobalState } from 'qiankun';

// 父应用的初始 state
// Vue.observable 是为了让 initialState 变成可响应：https://cn.vuejs.org/v2/api/#Vue-observable。
const initialState = Vue.observable({
  user: {
    name: 'test',
  },
});

const actions = initGlobalState(initialState);

actions.onGlobalStateChange((newState, prev) => {
  console.log('main state change', JSON.stringify(newState), JSON.stringify(prev));
  Object.keys(newState).forEach(key => {
    initialState[key] = newState[key];
  });
});

// 定义一个获取state的方法下发到子应用
// 有key，表示取globalState下的某个子级对象
// 无key，表示取全部
actions.getGlobalState = key => (key ? initialState[key] : initialState);

export const state = initialState;

export default actions;
