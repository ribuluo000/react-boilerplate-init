/**
 * NotFoundPage
 *
 * This is the page we show when the user visits a url that doesn't have a route
 *
 */

import React from 'react';
import { useIntl } from 'react-intl';

import messages from 'translations/messages';

export default function NotFound() {
  const intl = useIntl();

  return (
    <h1>
      {intl.formatMessage(messages['This is the NotFoundPage container!'])}
    </h1>
  );
}
