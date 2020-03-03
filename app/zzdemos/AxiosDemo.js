/*
 * AxiosDemo
 *
 */

import React, { useEffect, useState } from 'react';
import api, {test} from 'api';

export default function AxiosDemo() {
  const [data, setData] = useState([]);
  useEffect(() => {
    const callApi = async () => {
      const options = {
        type: 'all',
        sort: 'updated',
      };
      const jsonObj = await test(options);
      if (!jsonObj) {
        return;
      }
      console.log('jsonObj', jsonObj);
      setData([jsonObj.data[0].full_name]);
    };
    callApi();
  }, []);
  return <div className="">AxiosDemo {data}</div>;
}
