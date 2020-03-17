/*
 * SvgDemoPage
 *
 */

import React from 'react';
import Icon, { AppstoreOutlined } from '@ant-design/icons';
import { SuccessSvg } from 'assets/svg';

export default function SvgDemoPage() {
  return (
    <div className="">
      SvgDemoPage
      <AppstoreOutlined style={{ color: 'red', fontSize: 30 }} />
      <Icon
        component={() => SuccessSvg({ color: 'red', width: 30, height: 30 })}
      />
    </div>
  );
}
