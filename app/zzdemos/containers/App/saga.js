/**
 * Gets the serverData
 */

import { call, put, takeLatest } from 'redux-saga/effects';
import * as http from 'api/http';
import { LOAD_SERVER_DATA } from './constants';
import { loadedServerData, loadingErrorServerData } from './actions';

const { get } = http;

/**
 * serverData request/response handler
 */
export function* getServerData() {
  try {
    const options = {};

    const jsonObj = yield call(get, `/serverData`, options);
    console.log('jsonObj', jsonObj);
    yield put(loadedServerData(jsonObj.data));
  } catch (err) {
    yield put(loadingErrorServerData(err));
  }
}

/**
 * Root saga manages watcher lifecycle
 */
export default function* serverData() {
  // Watches for LOAD_SERVER_DATA actions and calls getServerData when one comes in.
  // By using `takeLatest` only the result of the latest API call is applied.
  // It returns task descriptor (just like fork) so we can continue execution
  // It will be cancelled automatically on component unmount
  yield takeLatest(LOAD_SERVER_DATA, getServerData);
}
