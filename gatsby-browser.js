import enMessages from './src/locales/en';
import esMessages from './src/locales/es';

const React = require('react');
const { IntlProvider } = require('react-intl');

const messages = {
  es: esMessages,
  en: enMessages,
};

const wrapPageElement = ({ element, props: { pageContext: { locale } } }) => (
  <IntlProvider locale={locale} messages={messages[locale]}>
    {element}
  </IntlProvider>
);

export { wrapPageElement };
