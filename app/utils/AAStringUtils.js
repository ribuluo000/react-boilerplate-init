/**
 * 字符串工具类
 * 项目中常用的字符串处理方法写在这里，
 * 其他地方直接引用
 */
import AAValidateUtil from 'utils/AAValidateUtils';

const utils = {
  // 获取要显示给用户看的字符串
  getStringShow,
  // 如果str === '' ,则返回null,
  // 可以用在调用接口传参需要传number类型的数据的地方
  getNumber,
  // 删除字符串尾部无用的0
  removeTail0,
};

export default utils;

/**
 * 删除字符串尾部无用的0
 * @param str：要显示给用户看的字符串的数据源
 * @param isReturnLine 是否返回占位符横线
 */
function removeTail0(str, isReturnLine) {
  const mStr = `${str}`;
  // 字符串删除最后面的0，如果最后面是小数点，那么把小数点删掉。
  if (mStr.indexOf('.') > -1) {
    // 判断是否有小数点
    // 去掉多余的0
    // 如最后一位是.则去掉
    return mStr.replace(/0+?$/gi, '').replace(/[.]$/gi, '');
  }
  return getStringShow(mStr, isReturnLine);
}

// 如果str === '' ,则返回null,
// 可以用在调用接口传参需要传number类型的数据的地方
function getNumber(str) {
  if (AAValidateUtil.isNum(str)) {
    return Number(str);
  }
  return null;
}

/**
 * 说明：获取要显示给用户看的字符串（包括输入框和详情页中展示的字符串）
 * @param str：要显示给用户看的字符串的数据源
 * @param isReturnLine 是否返回占位符横线
 */
function getStringShow(str, isReturnLine = false) {
  if (AAValidateUtil.isEmptyObj(str)) {
    return isReturnLine ? ' — ' : '';
  }
  return str;
}
