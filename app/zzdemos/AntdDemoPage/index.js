/*
 * AntdDemoPage
 *
 */

import React from 'react';
import { Button, DatePicker, message } from 'antd';
export default function AntdDemoPage() {
  const handleChangeDatePicker = date => {
    console.log('handleChangeDatePicker.date', date);
    message.info(
      `您选择的日期是: ${date ? date.format('YYYY-MM-DD') : '未选择'}`,
    );
  };
  return (
    <div className="">
      <Button type="primary">Primary</Button>
      <Button>Default</Button>
      <Button type="dashed">Dashed</Button>
      <Button type="link">Link</Button>

      <DatePicker onChange={handleChangeDatePicker} />
    </div>
  );
}
