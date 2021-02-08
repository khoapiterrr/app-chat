import React, { ReactNode, FC } from 'react';
import { useSelector } from 'react-redux';
import { IntlProvider } from 'react-intl';
import { defaultsDeep } from 'lodash';

import selectors from './selectors';

interface IProps {
  children: ReactNode;
  messages: any;
}

const LanguageProvider: FC<IProps> = ({ messages, children }) => {
  const locale = useSelector(selectors.selectLocale);

  const mes = defaultsDeep(messages[locale], messages.en);
  return (
    <IntlProvider
      locale={'en'}
      defaultLocale='en'
      messages={mes}
      textComponent='span'>
      {React.Children.only(children)}
    </IntlProvider>
  );
};

export default LanguageProvider;
