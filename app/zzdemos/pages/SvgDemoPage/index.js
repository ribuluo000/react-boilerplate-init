/*
 * SvgDemoPage
 *
 */

import React from 'react';
import Icon, { AppstoreOutlined } from '@ant-design/icons';
import { SuccessSvg } from 'assets/svg';
import image from 'zzdemos/assets/images/test.png';
import image2 from 'zzdemos/assets/images/test2.png';

export default function SvgDemoPage() {
  return (
    <div className="">
      SvgDemoPage
      <AppstoreOutlined style={{ color: 'red', fontSize: 30 }} />
      <Icon
        component={() => SuccessSvg({ color: 'red', width: 30, height: 30 })}
      />
      <img src={image} width={30} height={30} alt="test" />
      <img src={image2} width={30} height={30} alt="test" />
      <img
        src="https://www.baidu.com/img/bd_logo1.png"
        width={30}
        height={30}
        alt="test"
      />
    </div>
  );
}
