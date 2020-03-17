/*
 * Demo
 *
 */

import React from 'react';
import { Switch, Route } from 'react-router-dom';
import LessDemoPage from 'zzdemos/pages/LessDemoPage';
import AntdDemoPage from 'zzdemos/pages/AntdDemoPage';
import AxiosDemoPage from 'zzdemos/pages/AxiosDemoPage';
import MockDemoPage from 'zzdemos/pages/MockDemoPage';
import IntlDemoPage from 'zzdemos/pages/IntlDemoPage';
import SagaDemoPage from 'zzdemos/pages/SagaDemoPage';

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
        <Route path="/demo/mock" component={MockDemoPage} />
        <Route path="/demo/saga" component={SagaDemoPage} />
      </Switch>
    </div>
  );
}
