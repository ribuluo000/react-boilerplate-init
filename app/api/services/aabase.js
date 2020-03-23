/* eslint-disable no-return-await */
import * as http from 'api/http';

const onCustomException = (jsonObj) => {
  console.log('onCustomException', getMsg(jsonObj));
};
const onSuccess = (jsonObj) => {
  console.log('onSuccess', getMsg(jsonObj));
};
const onCatch = (err) => {
  console.log('onCatch', err);
};
const getMsg = (jsonObj) => jsonObj.msg;
const get = async (url, data = {}, callback) => {
  // 全局通用请求参数
  // data.user_id = user_id;
  let ret = null;
  try {
    ret = await http.get(url, data);
    if (callback) {
      callback(null, ret);
    }
  } catch (err) {
    if (callback) {
      callback(err);
    } else {
      onCatch(err);
    }
  }
  return ret;
};

const post = async (url, data = {}, callback) => {
  // 全局通用请求参数
  // data.user_id = user_id;
  let ret = null;
  try {
    ret = await http.post(url, data);
    if (callback) {
      callback(null, ret);
    }
  } catch (err) {
    if (callback) {
      callback(err);
    } else {
      onCatch(err);
    }
  }
  return ret;
};

export default {
  get,
  post,
  onSuccess,
  onCustomException,
  onCatch,
  getMsg,
};
