/* eslint-disable prefer-spread */
/* eslint-disable no-underscore-dangle */

// 将所有的mock文件引入
import Mock from 'mockjs';
import configs from 'configs';
const { mockableVersion } = configs;
import(`./${mockableVersion}`);

// 在这里可以做一些通用的配置

Mock.XHR.prototype.__send = Mock.XHR.prototype.send;
Mock.XHR.prototype.send = function (...args) {
  if (this.custom.xhr)
    this.custom.xhr.withCredentials = this.withCredentials || false;
  this.__send.apply(this, args);
};

// 设置所有ajax请求的超时时间，模拟网络传输耗时
Mock.setup({
  timeout: 0 - 300,
});
