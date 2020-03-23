/*
 * MenuDemoPage
 *
 */

import React, { useState, useEffect } from 'react';
import history from 'utils/history';

import { Menu } from 'antd';
import { AppstoreOutlined } from '@ant-design/icons';

export default function MenuDemoPage() {
  // 首次进入和刷新后初始化菜单选中状态
  const pathnameInit = window.location.pathname;
  const [pathname, setPathname] = useState([pathnameInit]);

  /**
   * 监听路由改变并设置菜单选中状态；
   * 用session中的某个状态变量控制路由跳转；eg: 这个用户如果没有登录或者登录已过期，那么跳转登录页面；
   *  */
  useEffect(() => {
    let didCancel = false;
    const unlisten = history.listen((location, action) => {
      console.log('listen', location, action);
      // location就是window.location的一个子集
      // action可能的值，"PUSH", "REPLACE", "POP"

      if (didCancel) {
        return;
      }
      // 用session中的某个状态变量控制路由跳转；
      const isLoggedIn = true;
      if (isLoggedIn) {
        setPathname([location.pathname]);
      } else if (location.pathname !== '/demo') {
        history.push('/demo');
        setPathname(['/demo']);
      } else {
        console.log('/demo');
      }
    });
    return () => {
      didCancel = true;
      unlisten();
    };
  }, []);
  function handleClick(e) {
    console.log('click', e);
    // 跳转到目标路由 e.key
    history.push(e.key);
  }

  return (
    <Menu
      selectedKeys={pathname}
      onClick={handleClick}
      style={{
        // width: 256,
        height: '100vh',
      }}
      mode="vertical"
    >
      <Menu.Item key="/demo">
        <span>
          <AppstoreOutlined />
          <span>demo</span>
        </span>
      </Menu.Item>
      <Menu.Item key="/demo/less">
        <span>
          <span>less</span>
        </span>
      </Menu.Item>
      <Menu.Item key="/demo/intl">
        <span>
          <span>intl</span>
        </span>
      </Menu.Item>
      <Menu.Item key="/demo/antd">
        <span>
          <span>antd</span>
        </span>
      </Menu.Item>
      <Menu.Item key="/demo/axios">
        <span>
          <span>axios</span>
        </span>
      </Menu.Item>
      <Menu.Item key="/demo/mock">
        <span>
          <span>mock</span>
        </span>
      </Menu.Item>
      <Menu.Item key="/demo/saga">
        <span>
          <span>saga</span>
        </span>
      </Menu.Item>
      <Menu.Item key="/demo/svg">
        <span>
          <span>svg</span>
        </span>
      </Menu.Item>
    </Menu>
  );
}
