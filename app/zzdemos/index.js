/*
 * Demo
 *
 */

import React from 'react';
import { Switch, Route } from 'react-router-dom';
import LessDemoPage from 'zzdemos/LessDemoPage';
import AntdDemoPage from 'zzdemos/AntdDemoPage';
import AxiosDemoPage from 'zzdemos/AxiosDemoPage';
import IntlDemoPage from 'zzdemos/IntlDemoPage';

import configs from 'configs/index';

console.log('configs', configs);

export default function Demo() {
  return (
    <div className="">
      <Route path="/demo" component={IntlDemoPage} />
      <Switch>
        <Route path="/demo/less" component={LessDemoPage} />
        <Route path="/demo/intl" component={IntlDemoPage} />
        <Route path="/demo/antd" component={AntdDemoPage} />
        <Route path="/demo/axios" component={AxiosDemoPage} />
      </Switch>
    </div>
  );
}
