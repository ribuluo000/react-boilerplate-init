/**
 * Combine all reducers in this file and export the combined reducers.
 */

import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';

import history from 'utils/history';
import languageProviderReducer from 'containers/LanguageProvider/reducer';

/**
 * Merges the main reducer with the router state and dynamically injected reducers
 */
export default function createReducer(injectedReducers = {}) {
  const appReducer = combineReducers({
    language: languageProviderReducer,
    router: connectRouter(history),
    ...injectedReducers,
  });

  const rootReducer = (state, action) => {
    // 重置redux为初始状态 eg: 在登录页需要进行重置；
    let initState = null;
    if (action.type === 'RESET_REDUX') {
      const { language } = state;
      initState = { language };
    }
    return appReducer(initState || state, action);
  };

  return rootReducer;
}
