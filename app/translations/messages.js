/*
 * global Messages
 *
 * This contains all the text for the app.
 */
import { defineMessages } from 'react-intl';

const enTranslationMessages = require('./en.json');

const getMessages = () => {
  const obj = {};
  Object.keys(enTranslationMessages).map(value => {
    obj[value] = {
      id: value,
      defaultMessage: value,
    };
  });
  return obj;
};

export default defineMessages(getMessages());
