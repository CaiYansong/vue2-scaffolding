import { state, setGlobalState } from '@/actions';
import { TOKEN, USER } from './constant';

export function setToken(token) {
  setGlobalState({ [TOKEN]: token });
  localStorage.setItem(TOKEN, token);
}

export function getToken() {
  return state[TOKEN] || localStorage.getItem(TOKEN);
}

export function setUser(user) {
  setGlobalState({ [USER]: user });
  localStorage.setItem(USER, JSON.stringify(user || {}));
}

export function getUser() {
  return state[USER] || JSON.parse(localStorage.getItem(USER) || {});
}

export function go(path, title = '', data = {}) {
  window.history.pushState(data, title || path, path);
}
