/*
 * IntlDemoPage
 *
 * This is the first thing users see of our App, at the '/' route
 *
 */

import React from 'react';
import { useIntl } from 'react-intl';
import messages from 'translations/messages';

export default function IntlDemoPage() {
  const intl = useIntl();

  return (
    <h1>{intl.formatMessage(messages['This is the Demo container!'])}</h1>
  );
}
