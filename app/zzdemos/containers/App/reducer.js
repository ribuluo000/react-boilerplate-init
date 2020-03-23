/*
 * zzdemoReducer
 *
 * The reducer takes care of our data. Using actions, we can
 * update our application state. To add a new action,
 * add it to the switch statement in the reducer function
 *
 */

import produce from 'immer';
import {
  LOAD_SERVER_DATA_SUCCESS,
  LOAD_SERVER_DATA,
  LOAD_SERVER_DATA_ERROR,
} from './constants';

// The initial state of the App
export const initialState = {
  loading: false,
  error: false,
  serverData: {},
};

/* eslint-disable default-case, no-param-reassign */
const zzdemoReducer = (state = initialState, action) =>
  produce(state, (draft) => {
    switch (action.type) {
      case LOAD_SERVER_DATA:
        draft.loading = true;
        draft.error = false;
        draft.serverData = {};
        break;

      case LOAD_SERVER_DATA_SUCCESS:
        draft.serverData = action.serverData;
        draft.loading = false;
        break;

      case LOAD_SERVER_DATA_ERROR:
        draft.error = action.error;
        draft.loading = false;
        break;
    }
  });

export default zzdemoReducer;
