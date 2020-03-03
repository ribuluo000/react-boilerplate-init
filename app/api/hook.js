/* eslint-disable no-return-await */
import React, { useState, useEffect } from 'react';
import * as api from 'api';

export const useApi = () => {
  const [requestData, setRequestData] = useState({
    funcName: '',
    options: {},
    startTime: '',
  });
  const { funcName, options, startTime, } = requestData;
  const initialState = {
    isLoading: false,
    isError: false,
    data: null,
  };
  const [state, setState] = useState(initialState);
  useEffect(() => {
    let didCancel = false;
    const fetchData = async () => {
      setState({ ...initialState, isLoading: true });
      try {
        const jsonObj = await api[funcName](options);
        if (didCancel) {
          return;
        }
        if (!jsonObj) {
          setState({ ...initialState, isError: true });
          return;
        }
        setState({ ...initialState, data: jsonObj.data });
      } catch (error) {
        if (didCancel) {
          return;
        }
        setState({ ...initialState, isError: true });
      }
    };
    if (funcName) {
      fetchData();
    }
    return () => {
      didCancel = true;
    };
  }, [funcName, options, startTime]);
  return [state, setRequestData];
};
