/*
 * MockDemoPage
 *
 */

import React, { useEffect, useState } from 'react';
import api from 'api';
import { useApi } from 'api/hook';

export default function MockDemoPage() {
  const [data, setData] = useState([]);
  const [options, setOptions] = useState({
    // type: 'all',
    // sort: 'updated',
  });
  const requestData = {
    funcName: 'templateGet',
    options,
    startTime: new Date().getTime(),
  };

  // 手动调接口多次 (常用)
  const [state3, setRequestData3] = useApi();
  const onClickCallApi = () => {
    const requestData3 = {
      ...requestData,
      startTime: new Date().getTime(),
    };
    setRequestData3(requestData3);
  };
  let v3 = null;
  if (state3.isLoading) {
    v3 = <div>isLoading...</div>;
  } else if (state3.isError) {
    v3 = <div>isError!</div>;
  } else if (state3.data) {
    v3 = <div>{state3.data.data[0].full_name}</div>;
  }

  // 自动调接口 (常用)
  const [state, setRequestData] = useApi();
  let v1 = null;
  if (state.isLoading) {
    v1 = <div>isLoading...</div>;
  } else if (state.isError) {
    v1 = <div>isError!</div>;
  } else if (state.data) {
    v1 = <div>{state.data.data[0].full_name}</div>;
  }

  useEffect(() => {
    let didCancel = false;
    setRequestData({
      ...requestData,
    });

    const callApi = async () => {
      const jsonObj = await api.templateGet(options);
      if (!jsonObj) {
        return;
      }
      console.log('jsonObj', jsonObj);
      if (didCancel) {
        return;
      }
      setData([jsonObj.data.data[0].full_name]);
    };
    callApi();
    return () => {
      didCancel = true;
    };
  }, [options]);

  // 手动调接口一次
  const [state2, setRequestData2] = useApi();
  const onClickCallApiOnce = () => {
    setRequestData2({
      funcName: 'templateGet',
      options,
      // startTime: new Date().getTime(),
    });
  };
  let v2 = null;
  if (state2.isLoading) {
    v2 = <div>isLoading...</div>;
  } else if (state2.isError) {
    v2 = <div>isError!</div>;
  } else if (state2.data) {
    v2 = <div>{state2.data.data[0].full_name}</div>;
  }

  return (
    <div className="">
      MockDemoPage {data}
      {v1}
      <div onClick={onClickCallApiOnce}>Click to CallApi once</div>
      {v2}
      <div onClick={onClickCallApi}>Click to CallApi more than once</div>
      {v3}
    </div>
  );
}
