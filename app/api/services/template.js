/* eslint-disable no-return-await */
import base from 'api/services/aabase';

const { get, post } = base;

export const templateGet = async (data = {}, callback) =>
  await get('/template1', data, callback);

export const testGet = async (data = {}, callback) => {
  const username = data.username || 'ribuluo000';
  return await get(`/users/${username}/repos`, data, callback);
};

export const loginPost = async (data = {}, callback) =>
  await post('/url', data, callback);
