/**
 * Gets the repositories of the user from Github
 */

import { call, put, select, takeLatest } from 'redux-saga/effects';
import * as http from 'api/http';
import _ from 'lodash';
import { LOAD_REPOS } from './constants';
import { reposLoaded, repoLoadingError } from './actions';

const { get } = http;

/**
 * Github repos request/response handler
 */
export function* getRepos() {
  // Select username from store
  const username = yield select((state) =>
    _.get(state, 'state.zzdemosaga.username'),
  );
  console.log('username', username);
  try {
    const options = {
      type: 'all',
      sort: 'updated',
    };

    const repos = yield call(get, `/users/${username}/repos`, options);
    yield put(reposLoaded(repos.data, username));
  } catch (err) {
    yield put(repoLoadingError(err));
  }
}

/**
 * Root saga manages watcher lifecycle
 */
export default function* githubData() {
  // Watches for LOAD_REPOS actions and calls getRepos when one comes in.
  // By using `takeLatest` only the result of the latest API call is applied.
  // It returns task descriptor (just like fork) so we can continue execution
  // It will be cancelled automatically on component unmount
  yield takeLatest(LOAD_REPOS, getRepos);
}
