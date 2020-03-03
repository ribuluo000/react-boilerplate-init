const axios = require('axios');

export function initHttp() {
  axios.defaults.baseURL = 'https://api.github.com';
  axios.defaults.headers.post['Content-Type'] = 'application/json';
  // axios.defaults.withCredentials = true;
  axios.defaults.timeout = 10000;
}
initHttp();

export function initHttpWithToken(AUTH_TOKEN) {
  initHttp();
  axios.defaults.headers.common.Authorization = AUTH_TOKEN;
}

/**
 * Parses the JSON returned by a network request
 *
 * @param  {object} response A response from a network request
 *
 * @return {object}          The parsed JSON from the request
 */
function parseJSON(response) {
  if (response.status === 204 || response.status === 205) {
    return null;
  }
  return response;
}

/**
 * Checks if a network request came back fine, and throws an error if not
 *
 * @param  {object} response   A response from a network request
 *
 * @return {object|undefined} Returns either the response, or throws an error
 */
function checkStatus(response) {
  if (response.status >= 200 && response.status < 300) {
    return response;
  }

  const error = new Error(response.statusText);
  error.response = response;
  throw error;
}

/**
 * Requests a URL, returning a promise
 *
 * @param  {string} url       The URL we want to request
 * @param  {object} [options] The options we want to pass to server
 *
 * @return {object}           The response data
 */
export function get(url, options) {
  return axios
    .get(url, {
      params: options,
    })
    .then(checkStatus)
    .then(parseJSON);
}

/**
 * Requests a URL, returning a promise
 *
 * @param  {string} url       The URL we want to request
 * @param  {object} [options] The options we want to pass to server
 *
 * @return {object}           The response data
 */
export function post(url, options) {
  return axios
    .post(url, options)
    .then(checkStatus)
    .then(parseJSON);
}

/**
 * Requests a URL, returning a promise
 * // todo
 * 执行多个并发请求 http://www.axios-js.com/zh-cn/docs/
 */
export function all() {}
