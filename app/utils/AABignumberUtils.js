/**
 * BigNumber工具类
 * 项目中的BigNumber使用都在这里写，
 * 其他地方直接引用。
 */
import BigNumber from 'bignumber.js';
import AAStringUtils from 'utils/AAStringUtils';

const utils = {
  // 获取金额显示字符串
  getStringShowNumberMoney,
};

export default utils;

/**
 * 获取金额显示字符串
 * eg:'123,456,789.123456789'
 * @param money 要显示的金额
 * @param dp 保留的小数位数
 * @param isReturnLine 是否返回占位符横线
 */
function getStringShowNumberMoney(money, dp = 2, isReturnLine) {
  const fmt = {
    prefix: '',
    decimalSeparator: '.',
    groupSeparator: ',',
    groupSize: 3,
    secondaryGroupSize: 0,
    fractionGroupSeparator: ' ',
    fractionGroupSize: 0,
    suffix: '',
  };

  const bignumber = new BigNumber(money);
  const retDp = bignumber.toFormat(dp, fmt); // '123,456,789.123'

  // 去除小数点后无用的0，如果最终为小数点那么把小数点去掉
  const ret = AAStringUtils.removeTail0(retDp, false);
  return AAStringUtils.getStringShow(ret, isReturnLine);
}
