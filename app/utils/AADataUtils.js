/* eslint-disable no-param-reassign */
/**
 * Data工具类
 * 项目中常用的数据处理方法写在这里，
 * 其他地方直接引用
 */

import _ from 'lodash';

const utils = {
  // 将具有层级关系的原始数据转换成树形结构
  toTree,
  // 获取下拉列表选中项函数
  getSelectedItem,
  // 下拉列表选中函数
  selectItem,
};

export default utils;

/**
 * 说明：下拉列表选中函数
 * @param {*} options 要选中的下拉列表可选参数
 * @param {*} selectedValue 标识选中的参数
 * @param {*} idName value 对应的key的名称
 * @returns
 */
function selectItem(options, selectedValue, idName = 'value') {
  for (let i = 0; i < options.length; i += 1) {
    if (selectedValue === options[i][idName]) {
      options[i].selected = true;
    }
  }
}

/**
 * 获取下拉列表选中项函数
 * @param {*} options 要选中的下拉列表可选参数
 * @param {*} selectedValue 标识选中的参数
 * @param {*} idName value 对应的key的名称
 * @returns selectedItem
 */
function getSelectedItem(options, selectedValue, idName = 'value') {
  for (let i = 0; i < options.length; i += 1) {
    if (selectedValue === options[i][idName]) {
      return options[i];
    }
  }
  return null;
}

/**
 * 将具有层级关系的原始数据转换成树形结构
 * @param {array} data 原始数据
 * @param {string} pk 主键
 * @param {string} pid 父级关键键
 * @param {string} child 子类名字
 * @return {object} 返回树形结构数据
 */
function toTree(origin_data = [], pk = 'id', pid = 'pid', child = 'child') {
  const data = _.cloneDeep(origin_data);
  // 删除 所有 child,以防止多次调用
  data.forEach((item) => {
    delete item[child];
  });
  // 将数据存储为 以 id 为 KEY 的 map 索引数据列
  const map = {};
  data.forEach((item) => {
    map[item[pk]] = item;
  });

  const val = [];
  data.forEach((item) => {
    // 以当前遍历项，的pid,去map对象中找到索引的id
    const parent = map[item[pid]];
    // 如果找到索引，那么说明此项不在顶级当中,那么需要把此项添加到，他对应的父级中
    if (parent) {
      item.parent_value = parent.option_value;
      (parent[child] || (parent[child] = [])).push(item);
    } else {
      // 如果没有在map中找到对应的索引ID,那么直接把 当前的item添加到 val结果集中，作为顶级
      val.push(item);
    }
  });
  return val;
}
