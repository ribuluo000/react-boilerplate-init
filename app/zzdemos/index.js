/*
 * Demo
 *
 */

import React from 'react';
import configs from 'configs/index';
import LessDemo from './LessDemo';
import AntdDemo from './AntdDemo';

console.log('configs', configs);

export default function Demo() {

  return (
    <div className="">
      <LessDemo />
      <AntdDemo />
    </div>
  );
}
