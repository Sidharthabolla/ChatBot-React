import REACT, { Fragment } from 'react';
import { IntlProvider } from 'react-intl';
import messages from './messages/index'

const Provider = ({children, locale}) => (
  <IntlProvider
    locale={locale}
    textComponent={Fragment}
    messages={messages[LOCALES]}
  >
    {children}
  </IntlProvider>
)

export default Provider