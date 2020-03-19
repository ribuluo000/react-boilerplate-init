/**
 * Validate 工具类
 * 项目中常用的验证处理方法写在这里，
 * 其他地方直接引用
 */
const utils = {
  // 判断value变量值是否是中文
  isChn,
  // 忽略大小写判断字符串是否相同
  isEqualsIgnorecase,
  // 判断str变量值是否是数字
  isNum,
  // 判断obj变量值是否是空 null undefined NaN
  isEmptyObj,
  // 判断str变量是否是email
  isEmail,
  // 判断str变量是否是用户名格式
  isUserName,
  // 判断str变量是否是中文姓名格式
  isChineseName,
  // 判断str变量是否是中文格式
  isChinese,
  // 判断str变量是否是手机格式
  isMobile,
  // 判断str变量是否是固话格式
  isPhone,
  // 判断str变量是否是身份证格式
  isCard,
  // 判断str变量是否是金额(10位整数2位小数)格式
  isAmount,
  // 判断str变量是否是正整数格式
  isPositiveInt,
  // 判断str变量是否是整数(不限位数)格式
  isInt,
  // 判断str变量是否是16位或19位银行卡或信用卡号(先把空格replace为空串)格式
  isBankCard,
  // 判断str变量是否是IP格式
  isIP,
};
export default utils;

/**
 * 判断str变量是否是IP格式
 * @param {*} str 被验证的字符串
 */
function isIP(str) {
  const reg = /^(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])(\.(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])){3}$/;
  return reg.test(str);
}

/**
 * 判断str变量是否是16位或19位银行卡或信用卡号(先把空格replace为空串)格式
 * @param {*} str 被验证的字符串
 */
function isBankCard(str) {
  const reg = /^\d{16}|\d{19}$/; // 16位或19位银行卡或信用卡号(先把空格replace为空串)
  return reg.test(str);
}

/**
 * 判断str变量是否是整数(不限位数)格式
 * @param {*} str 被验证的字符串
 */
function isInt(str) {
  const reg = /^-?\d+$/; // 整数(不限位数)
  return reg.test(str);
}

/**
 * 判断str变量是否是正整数格式
 * @param {*} str 被验证的字符串
 */
function isPositiveInt(str) {
  const reg = /^[1-9]*[1-9][0-9]*$/; // 正整数
  return reg.test(str);
}

/**
 * 判断str变量是否是金额(10位整数2位小数)格式
 * @param {*} str 被验证的字符串
 */
function isAmount(str) {
  const reg = /^([1-9][\d]{0,10}|0)(\.[\d]{1,2})?$/; // 金额(10位整数2位小数)
  return reg.test(str);
}

/**
 * 判断str变量是否是身份证格式
 * @param {*} str 被验证的字符串
 */
function isCard(str) {
  const reg = /(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/; // 身份证
  return reg.test(str);
}

/**
 * 判断str变量是否是固话格式
 * @param {*} str 被验证的字符串
 */
function isPhone(str) {
  const reg = /^0[\d]{2,3}-[\d]{7,8}$/; // 固话
  return reg.test(str);
}

/**
 * 判断str变量是否是手机格式
 * @param {*} str 被验证的字符串
 */
function isMobile(str) {
  const reg = /^0?1[3|4|5|7|8][0-9]\d{8}$/; // 手机
  return reg.test(str);
}

/**
 * 判断str变量是否是中文格式
 * @param {*} str 被验证的字符串
 */
function isChinese(str) {
  const reg = /[\u4e00-\u9fa5]/g; // 判断是不是中文
  return reg.test(str);
}

/**
 * 判断str变量是否是中文姓名格式
 * @param {*} str 被验证的字符串
 */
function isChineseName(str) {
  const reg = /^[\u4E00-\u9FA5]{2,4}$/; // 中文姓名
  return reg.test(str);
}

/**
 * 判断str变量是否是用户名格式
 * @param {*} str 被验证的字符串
 */
function isUserName(str) {
  const reg = /^[a-z0-9_-]{3,16}$/; // 用户名
  return reg.test(str);
}

/**
 * 判断str变量是否是email格式
 * @param {*} str 被验证的字符串
 */
function isEmail(str) {
  const reg = /^(\w-*\.*)+@(\w-?)+(\.\w{2,})+$/;
  return reg.test(str);
}

/**
 * 判断obj变量值是否是空 null undefined NaN
 * @param str 要显示的字符串
 * @param isReturnLine 为空时默认返回空下划线isReturnLine = true, 否则为空字符串
 */
function isEmptyObj(obj) {
  if (
    obj === 'undefined' ||
    obj === 'null' ||
    obj === 'NaN' ||
    obj === undefined ||
    obj === null ||
    (typeof obj === 'number' && isNaN(obj))
  ) {
    return true;
  }
  return false;
}

/**
 *
 * 说明：判断str变量值是否是数字
 * @param str:输入值
 * @returns 是数字返回true，否则false
 *  */
function isNum(str) {
  if (!isEmptyObj(str) && str !== '' && !isNaN(str)) {
    return true;
  }
  return false;
}

/**
 * 忽略大小写判断字符串是否相同
 * @param str1
 * @param str2
 * @returns {Boolean}
 */
function isEqualsIgnorecase(str1, str2) {
  if (str1.toUpperCase() == str2.toUpperCase()) {
    return true;
  }
  return false;
}
/**
 * 判断str变量值是否是中文
 * @param {*} str 输入值
 * @returns 是中文返回false，否则true
 */
function isChn(str) {
  const reg = /^([\u4E00-\u9FA5]|[\uFE30-\uFFA0])*$/;
  if (reg.test(str)) {
    return false;
  }
  return true;
}
