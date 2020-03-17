/*
 * App Actions
 *
 * Actions change things in your application
 * Since this boilerplate uses a uni-directional data flow, specifically redux,
 * we have these actions which are the only way your application interacts with
 * your application state. This guarantees that your state is up to date and nobody
 * messes it up weirdly somewhere.
 *
 * To add a new Action:
 * 1) Import your constant
 * 2) Add a function like this:
 *    export function yourAction(var) {
 *        return { type: YOUR_ACTION_CONSTANT, var: var }
 *    }
 */

import {
  LOAD_SERVER_DATA,
  LOAD_SERVER_DATA_SUCCESS,
  LOAD_SERVER_DATA_ERROR,
} from './constants';

/**
 * Load the Server Data, this action starts the request saga
 *
 * @return {object} An action object with a type of LOAD_SERVER_DATA
 */
export function loadServerData() {
  return {
    type: LOAD_SERVER_DATA,
  };
}

/**
 * Dispatched when the Server Data are loaded by the request saga
 *
 * @param  {array} serverData The Server Data
 *
 * @return {object}      An action object with a type of LOAD_SERVER_DATA_SUCCESS passing the serverData
 */
export function loadedServerData(serverData) {
  return {
    type: LOAD_SERVER_DATA_SUCCESS,
    serverData,
  };
}

/**
 * Dispatched when loading the Server Data fails
 *
 * @param  {object} error The error
 *
 * @return {object}       An action object with a type of LOAD_SERVER_DATA_ERROR passing the error
 */
export function loadingErrorServerData(error) {
  return {
    type: LOAD_SERVER_DATA_ERROR,
    error,
  };
}
