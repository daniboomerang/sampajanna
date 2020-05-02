import React from 'react';
import { IntlProvider } from 'react-intl';
import enMessages from '../locales/en';
import esMessages from '../locales/es';

export const ElementContext = React.createContext();
const messages = {
  es: esMessages,
  en: enMessages,
};

const ContextProvider = ({ children, location }) => (
  <ElementContext.Provider value={{ location }}>{children}</ElementContext.Provider>
);

const PageElementContext = ({
  element,
  props: {
    pageContext: { locale },
    location,
  },
}) => (
  <ContextProvider location={location}>
    <IntlProvider locale={locale} messages={messages[locale]}>
      {element}
    </IntlProvider>
  </ContextProvider>
);

export default PageElementContext;
