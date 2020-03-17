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
      <AppstoreOutlined />
      <Icon component={() => SuccessSvg({ color: 'red' })} />
    </div>
  );
}
