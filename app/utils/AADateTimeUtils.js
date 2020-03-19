/**
 * 日期时间处理工具类
 * 项目中常用的日期时间处理方法写在这里，
 * 其他地方直接引用
 */
import moment from 'moment';
const utils = {
  // 获取时间戳（从 1970 年 1 月 1 日至今）
  valueOf,
  // 格式化为 “MM-DD HH:mm”
  format2MMDDHHmm,
  // 格式化为 “YYYY-MM-DD HH:mm:ss”
  format2YYYYMMDDHHmmss,
};

export default utils;

// 格式化为 “MM-DD HH:mm”
function format2MMDDHHmm(str) {
  return moment(str).format('MM-DD HH:mm');
}

// 格式化为 “YYYY-MM-DD HH:mm:ss”
function format2YYYYMMDDHHmmss(str) {
  return moment(str).format('YYYY-MM-DD HH:mm:ss');
}

// 获取时间戳（从 1970 年 1 月 1 日至今）
function valueOf(str) {
  return moment(str).valueOf();
}
