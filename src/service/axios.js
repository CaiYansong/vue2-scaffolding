import axios from 'axios';

export default axios;

export function setToken(token) {
  axios.defaults.headers.common.token = token;
}
